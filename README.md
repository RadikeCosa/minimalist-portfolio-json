# Ramiro Nicolás Cosa — Professional Portfolio

Bilingual professional portfolio for HealthTech, clinical systems implementation, functional analysis, and digital product development.

Live site: [ramirocosa.is-a.dev](https://ramirocosa.is-a.dev/)

## Public content

- professional profile, experience, and capabilities in Spanish and English;
- four case studies, in order: the clinical application, its public landing page, Juegos Familiares (Impostor and Tutti Frutti), and Fira Estudio. Each opens with its problem, contribution, status, and key decision;
- coordinated general CV downloads in Spanish and English;
- light and dark themes with responsive and keyboard-accessible layouts;
- a focused recruiting journey with the clinical application as its primary evidence and a prefilled portfolio email subject;
- responsive editorial styling with self-hosted IBM Plex Sans and IBM Plex Mono fonts.

## Stack

- Astro;
- TypeScript;
- JSON-backed professional content;
- static deployment on Vercel.

## Local development

```sh
npm install
npm run dev
```

Production validation:

```sh
npm run verify
```

Regenerate the coordinated Spanish and English CV downloads:

```sh
python3 -m pip install -r requirements-cv.txt
npm run generate:cv
```

Both PDFs are written to `public/cv/`.

This checks all twelve public routes, bilingual case-summary field parity, project order and image assets, language alternates, canonical URLs, heading hierarchy, structured data, text encoding, redirects, and social images.

## Content principles

- HealthTech is an area of specialization, not a limit on the profile.
- Healthcare experience is presented as current domain knowledge.
- Project claims remain factual and linked to public evidence.
- Public screenshots use fictional data and exclude identifiable clinical information.

The current positioning, public route inventory, visual system, and validation rules are documented in [`docs/portfolio-baseline-v2-2026-09.md`](docs/portfolio-baseline-v2-2026-09.md). The earlier v1 baseline is retained as historical context.

## Origin

The project started from [midudev/minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json) and has since been restructured around bilingual case studies, functional analysis, product implementation, and a coordinated CV system.
