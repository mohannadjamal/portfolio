# Portfolio

A simple single-page portfolio built with [Astro](https://astro.build). Edit copy and links in [`src/data/site.ts`](src/data/site.ts).

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Dev server at `http://localhost:4321`       |
| `npm run build`   | Production build to `./dist/`               |
| `npm run preview` | Preview the production build locally        |

Set your deployed URL in `astro.config.mjs` as `site` for correct canonical and Open Graph URLs.

## Docker

The image builds the static site with Node 22 and serves it with nginx on port 80.

```sh
docker build -t portfolio .
docker run --rm -p 8080:80 portfolio
```

Open `http://localhost:8080`.

## CI/CD (GitHub Actions)

| Workflow | When | What it does |
| :------- | :--- | :------------- |
| [`.github/workflows/ci.yml`](.github/workflows/ci.yml) | Push / PR to `main` or `master` | `npm ci`, `npm run build`, and a non-push Docker build (cache via GitHub Actions) |
| [`.github/workflows/docker-publish.yml`](.github/workflows/docker-publish.yml) | Push to default branch (`main` / `master`) or manual run | Builds and pushes the image to **GitHub Container Registry** (`ghcr.io/<owner>/<repo>`) with tags `latest` (default branch only) and commit SHA |

After the first publish, make the package **public** (or grant access) under **Packages** in the repo or your profile if pull fails for other users. To run a published image:

```sh
docker pull ghcr.io/OWNER/REPO:latest
docker run --rm -p 8080:80 ghcr.io/OWNER/REPO:latest
```

## Structure

- `src/pages/index.astro` — landing page
- `src/layouts/Layout.astro` — document shell, meta, global styles
- `src/components/` — Header, Hero, About, Projects, Contact
- `public/` — static assets (e.g. `favicon.svg`)
- `Dockerfile`, `docker/nginx.conf` — production container
- `.github/workflows/` — CI and container publish
