# James Darrigo — Portfolio

Personal portfolio site built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Tech stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- [Framer Motion](https://motion.dev) for scroll/entrance animations
- Single-page layout with anchor navigation + scrollspy (no router needed)

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

Other scripts:

```bash
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

## Project structure

```
src/
  components/    Reusable UI: Navbar, Footer, Reveal (scroll animation), etc.
  sections/      One file per page section: Hero, About, Skills, Experience, Projects, Contact
  data/          Editable content as typed TS files — no JSX/markup in here
  hooks/         useTheme (dark/light toggle), useActiveSection (scrollspy)
```

### Editing content

All personal content lives in `src/data/` so it can be updated without touching any component code:

| File | Contents |
| --- | --- |
| `data/site.ts` | Name, title, tagline, email, social links, about paragraphs, resume path |
| `data/skills.ts` | Skill categories and items |
| `data/experience.ts` | Work history and education |
| `data/projects.ts` | Project cards — currently placeholder content, swap in real repos/case studies |
| `data/nav.ts` | Nav bar links (should match section `id`s in `src/sections/`) |

### Resume

The "Download Résumé" buttons link to `/resume.pdf`. Drop your resume PDF into the `public/` folder as `resume.pdf` and it'll be picked up automatically.

### Social preview image

`index.html` references `/og-image.png` for social share previews (Open Graph / Twitter Card). Add a 1200×630 image at `public/og-image.png` to enable rich link previews.

### Favicon

`public/favicon.svg` is a placeholder "JD" monogram — swap it for your own mark whenever you'd like.

## Theming

Dark mode is the default; the toggle in the navbar switches to light mode and persists the choice in `localStorage`. Colors are defined as CSS custom properties in `src/index.css` (`:root` for light, `.dark` for dark) and mapped into Tailwind's theme, so adjusting the palette only requires editing that one file.

## Deployment

This is a static site — build output goes to `dist/`.

**Vercel**
1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: Vite. Build command `npm run build`, output directory `dist`. (Vercel usually detects this automatically.)

**Netlify**
1. Import the repo at [app.netlify.com](https://app.netlify.com).
2. Build command: `npm run build`. Publish directory: `dist`.

Or build locally and drag-and-drop `dist/` into either dashboard.
