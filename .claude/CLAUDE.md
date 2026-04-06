# Portfolio (Tashi Sherpa)

Static Next.js 16 site for a software engineer portfolio. Deployed via GitHub Actions to GitHub Pages (`output: 'export'`, `out/`).

## Commands

- `npm install` — deps
- `npm run dev` — local dev (http://localhost:3000)
- `npm run lint` — ESLint
- `npm run build` — production static export to `out/`

Subpath preview (match project Pages): set `BASE_PATH` and `NEXT_PUBLIC_SITE_URL` then `npm run build` (see README).

## Where to edit

- **Copy / resume data:** `src/data/site.ts`
- **Resume PDF:** `public/resume.pdf`
- **Theme (class dark mode):** `tailwind.config.mjs` (`darkMode: "class"`), `src/app/globals.css` (`@config`), CSS variables under `:root` / `.dark`
- **Layout / nav / footer:** `src/app/layout.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`
- **Pages workflow:** `.github/workflows/pages.yml`
- **Base path / static export:** `next.config.ts` (`BASE_PATH`, `NEXT_PUBLIC_BASE_PATH`)

## Conventions

- Prefer small presentational components under `src/components/`.
- Keep the UI minimal: readable type, zinc palette, Geist, no heavy animation unless asked.
- Do not commit `node_modules/` or `.next/` (see `.gitignore`).

## Notes

- In-page anchors: `#about`, `#experience`, `#education`, `#tools`.
- `src/lib/paths.ts` — `withBasePath()` for static assets when using GitHub Pages project URLs.
