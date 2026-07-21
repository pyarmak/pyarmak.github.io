# Dr. Pavel Yarmak's personal website

Based on:  Medical Center Eye Institute — Astro static site (scaffold)

Overview

- Framework: Astro
- Styling: Plain CSS (src/styles/global.css)
- Output: Static site deployed to GitHub Pages

Quick start

1. Install dependencies locally

```bash
npm install
```

2. Run local dev server

```bash
npm run dev
# Open http://localhost:3000
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

Repository layout

- `src/` — site source
  - `layouts/MainLayout.astro` — main layout with head tags and global stylesheet
  - `components/` — reusable components (`Header`, `Footer`, `Hero`, `SectionHeader`, `CTA`)
  - `pages/` — top-level pages (index + placeholder pages)
  - `styles/global.css` — global variables and base styles
- `public/` — static assets (favicon, images)
- `.github/workflows/` — GitHub Actions workflow for Pages deployment

GitHub Pages Deployment

This Astro project is configured to deploy to GitHub Pages through GitHub Actions.

Published URL

- `https://joeysmith-soc.github.io/Medical-Center-Eye-Institute/`

Current Astro Pages settings

- `site`
  - `https://joeysmith-soc.github.io/Medical-Center-Eye-Institute/`
- `base`
  - `/Medical-Center-Eye-Institute/`
- `output`
  - `static`

Workflow

- The GitHub Actions workflow is in `.github/workflows/deploy.yml`
- It builds and deploys automatically on pushes to the `main` branch
- It also supports manual runs with `workflow_dispatch`
- It uses the GitHub Pages artifact-based deployment flow recommended for Astro

Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the local dev server:

```bash
npm run dev
```

3. Build the static site locally:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

How deployment works

- Push to the `main` branch.
- GitHub Actions installs dependencies, builds the Astro site, uploads the `dist/` folder, and deploys it to GitHub Pages.
- You can also trigger the same deployment manually from the `Actions` tab using the `workflow_dispatch` option.

Note about `package-lock.json`

- This repository does not currently include a `package-lock.json`.
- Because of that, the workflow uses `npm install` instead of `npm ci`.
- If you want fully locked, reproducible installs later, run `npm install` locally and commit the generated `package-lock.json`, then you can change the workflow install step to `npm ci`.

If a custom domain is added later

- Update `site` in `astro.config.mjs` to your final domain, for example `https://www.example.com`.
- In most custom-domain setups, change `base` in `astro.config.mjs` to `/`.
- Add the custom domain in the GitHub repository `Settings` > `Pages`.
- If GitHub Pages creates a `CNAME` file for the custom domain, keep it committed if that becomes part of your setup.

Important content and compliance notes

- Replace all placeholder content (phone numbers, addresses, provider info) with real client-provided content before publishing.
- Do not collect, transmit, or store PHI in this static site. If you later add patient-facing forms or portals, implement a secure, compliant backend and consult legal/privacy teams.
