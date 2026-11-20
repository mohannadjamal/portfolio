# Deployment — manual, on the home server

The site is deployed by hand on the home server. There is no self-hosted runner and
no deploy job: GitHub Actions only runs the `CI` workflow (`astro check` + build) on
pushes and pull requests, so a green check means the commit is safe to deploy.

## How it runs

- `Dockerfile` is multi-stage: Node builds the static Astro output, then nginx serves
  `dist/` on port 80 inside the container.
- `docker-compose.yml` runs that image as project `portfolio`, service `web`
  (container `portfolio-web-1`).
- Cloudflare Tunnel exposes it as https://www.mohannadjamal.dev. No TLS, reverse
  proxy or port-forwarding is needed on the server.

## Deploy

1. Make sure the `CI` check on the commit you want is green on GitHub.
2. On the server, in the portfolio checkout:

   ```bash
   ssh server
   cd ~/portfolio            # wherever the checkout lives
   git pull
   docker compose up -d --build
   docker image prune -f     # each rebuild leaves the old image untagged
   ```

3. Check it: open https://www.mohannadjamal.dev (hard refresh) and confirm the change.

## Server-specific settings

`docker-compose.yml` publishes the site on host port `8080`, for a tunnel whose
ingress points at `http://localhost:8080`. If the server instead reaches the
container over a Docker network (for example cloudflared running as a container on
the `proxy` network), keep that change out of the tracked file so `git pull` never
conflicts — put it in an untracked `docker-compose.override.yml` next to it, which
`docker compose` merges automatically:

```yaml
services:
  web:
    ports: !reset []
    networks: [proxy]

networks:
  proxy:
    external: true
```

Then point the tunnel route at `http://portfolio-web-1:80`.

## Rolling back

```bash
git log --oneline -5
git checkout <good-commit>
docker compose up -d --build
git checkout master          # return to the branch before the next git pull
```
