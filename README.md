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

## CI and deployment

- [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml) (`CI`): on every push and PR to `main` / `master`, runs `npm ci`, `astro check` and `npm run build`.
- Deployment is manual on the home server: see [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Structure

- `src/pages/index.astro` — landing page
- `src/layouts/Layout.astro` — document shell, meta, global styles
- `src/components/` — Header, Hero, About, Projects, Contact
- `public/` — static assets (e.g. `favicon.svg`)
- `Dockerfile`, `docker/nginx.conf` — production container
- `.github/workflows/` — CI (type-check + build)
