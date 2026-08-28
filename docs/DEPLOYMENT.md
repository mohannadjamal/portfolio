# Deployment — CI/CD to a self-hosted local server

This is a **one-time manual setup** on the target server. Once done, every push to
the default branch that builds cleanly automatically rebuilds and redeploys via
`.github/workflows/ci-cd.yml`.

## How it works

- **`test` job** — runs on GitHub's own runners (`ubuntu-latest`) on every push and
  PR: `npm ci` and `npm run build`. There is no test suite, so a clean build is the
  whole gate. No access to your server is needed for this part.
- **`deploy` job** — only runs after `test` passes, on a push to the default branch.
  It runs on a **self-hosted runner** — a small agent installed on your own server
  that polls GitHub for jobs and executes them locally. GitHub's cloud runners can't
  reach a machine behind your router, so the runner has to live on the server itself.
- The site ships as a **Docker image** (`Dockerfile`: multi-stage — Node builds the
  static Astro output, then nginx serves `dist/`). `docker-compose.yml` runs that
  image and publishes it on host port **8080**.

## 1. Prerequisites on the server

- Docker + the Compose plugin (`docker compose version` should work)
- `git` (the runner needs it to check out the repo)

## 2. Register the self-hosted runner

This repo needs **its own runner registration** — a runner registered to
Course-Platform will not pick up jobs here. Self-hosted runners are scoped to a
repository, an organization, or an enterprise, and a repository-scoped runner serves
only that one repository. Sharing one runner across both projects would mean
organization scope, which needs both repos owned by a GitHub organization rather than
a personal account.

A second runner on the same machine is the simpler answer, and the better one: a
single shared runner serialises deploys across both projects, so a wedged
Course-Platform build would hold the portfolio's deploy behind it too. Two runners
decouple them. Run the second from its own directory — the service name is derived
from the repo, so there is no collision — and add its user to the `docker` group as
well.

In the GitHub repo: **Settings → Actions → Runners → New self-hosted runner**,
choose Linux, and follow the commands GitHub shows you there. They include a
one-time registration token that isn't reusable, so copy them fresh from the UI
rather than from anywhere else. It'll look like:

```bash
mkdir portfolio-runner && cd portfolio-runner
curl -o actions-runner-linux-x64.tar.gz -L <url from GitHub UI>
tar xzf actions-runner-linux-x64.tar.gz
./config.sh --url https://github.com/mohannadjamal/portfolio --token <token from GitHub UI>
```

Install it as a persistent service so it survives reboots and keeps running after
you log out:

```bash
sudo ./svc.sh install
sudo ./svc.sh start
```

The runner needs permission to run `docker` — add its user to the `docker` group
(`sudo usermod -aG docker $USER`, then restart the runner service).

**No secrets step.** A static site has no `.env`, so unlike Course-Platform there is
nothing to keep outside the checkout and nothing to copy in at deploy time.

## 3. Retire the hand-started container

The site is already running on 8080 from a container you started by hand. Two
containers cannot both bind that port, so the first automated deploy will fail at
`docker compose up -d` unless the old one is gone. Stop and remove it once:

```bash
docker ps                      # find the current portfolio container
docker stop <name> && docker rm <name>
```

Compose then owns the name and the port from that point on. `cloudflared` needs no
change — it keeps pointing at `http://localhost:8080`.

## 4. First deploy

Either push to the default branch and let the pipeline run, or do one manual run on
the server first to confirm everything's wired up before trusting CI:

```bash
cd ~/portfolio-runner/_work/portfolio/portfolio   # or wherever it's checked out
docker compose build
docker compose up -d
curl -I http://localhost:8080
```

Visit `http://<server-ip>:8080` on the LAN, or https://www.mohannadjamal.dev once
the tunnel is up.

## Notes

- **Cloudflare Tunnel handles public exposure**, so no reverse proxy, TLS setup, or
  router port-forwarding is needed here — the ingress points at
  `http://localhost:8080` to match `docker-compose.yml`'s port mapping. The site is
  static and generates no absolute URLs of its own, so there is no trusted-proxy
  configuration to get wrong.
- **The build runs on the server, every deploy.** That mirrors Course-Platform, and
  it carries the same risk its workflow comments describe: a build that thrashes a
  small box does not fail so much as stop making progress. The `timeout-minutes`
  caps on the job (15) and the build step (10) are what contain it — a deploy that
  fails and releases the runner beats one that hangs holding it. An Astro build is
  far lighter than Laravel's, so this should sit well inside those caps; if it starts
  brushing them, the fix is to build on the hosted runner and push an image instead.
- **`docker image prune -f` runs after each deploy.** Every rebuild leaves the
  previous image untagged, and without pruning they accumulate until the disk fills —
  which presents as a build failure with a misleading message.
