# Portfolio

Personal site for Tashi Sherpa — static Next.js app, deployed to **GitHub Pages**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a subpath build (same as project Pages), set:

```bash
# PowerShell
$env:BASE_PATH="/portfolio"; $env:NEXT_PUBLIC_SITE_URL="https://youruser.github.io/portfolio"; npm run build

# bash
BASE_PATH=/portfolio NEXT_PUBLIC_SITE_URL=https://youruser.github.io/portfolio npm run build
```

Preview the export:

```bash
npx serve out
```

## GitHub Pages

1. Repo **Settings → Pages**: set **Source** to **GitHub Actions**.
2. Push to `main`. The workflow builds with `output: 'export'` and publishes the `out/` folder.

The workflow picks **base path** automatically:

- If the repository name ends with `.github.io` (user/organization site), `BASE_PATH` is empty and the site is served at `https://<user>.github.io/`.
- Otherwise, `BASE_PATH` is `/<repo>` and the site is at `https://<user>.github.io/<repo>/`.

## Content

Edit [`src/data/site.ts`](src/data/site.ts). Replace [`public/resume.pdf`](public/resume.pdf) when your resume changes.
