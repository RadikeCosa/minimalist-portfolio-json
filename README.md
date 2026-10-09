# Ramiro Nicolás Cosa — Portfolio

Bilingual portfolio focused on web development, with functional analysis as a differentiator and healthcare experience as part of the professional background.

[Live site](https://ramirocosa.is-a.dev/) · [Redesign review and release checklist](docs/bauhaus-review.md)

## Design and content

- Bauhaus-inspired geometry, neutral backgrounds and three solid primary colours.
- One locally hosted variable family: Archivo, WOFF2, normal weights 400–900, Latin and Latin Extended. Only Latin is preloaded.
- Light theme throughout, shared navigation, keyboard focus, reduced-motion and print layouts.
- Selected work: Juegos Familiares, Fira Estudio and the clinical application. The rehabilitation landing page is a secondary case.
- Twelve routes: home, About and four cases, each in Spanish and English. Existing URLs and redirects remain stable.
- Project `id` values link to the typed presentation map in `src/content/projects.ts`. Display order is independent of the unchanged CV project order.
- Existing CV PDFs, screenshots, project status and limits remain factual. The clinical app has no public demo; Fira is a catalogue, without online purchases.

## Development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run verify
npx playwright install chromium
npm run preview -- --host 127.0.0.1 --port 4323
npm run verify:browser
```

The static check verifies twelve routes, local links and anchors, metadata, locale alternates, project selection, CV files and social-image dimensions. Browser checks cover every route at 360, 390, 768, 1024 and 1440 px; axe accessibility; title wrapping; font fallback and cold loading; keyboard; text enlargement; reduced motion; touch; and print. Reports and screenshots default to `/tmp/bauhaus-browser-qa`.

Optional environment variables: `PORTFOLIO_URL` for another preview, `QA_OUTPUT` for artifacts and `CHROMIUM_PATH` for an existing Chromium executable. GitHub Actions runs both checks and uploads review artifacts.

Regenerate the self-contained SVG and PNG social images:

```sh
npm run generate:social
```

Regenerate CVs separately when the underlying professional content changes:

```sh
python3 -m pip install -r requirements-cv.txt
npm run generate:cv
```

## Origin

Started from [midudev/minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json). The previous [September baseline](docs/portfolio-baseline-v2-2026-09.md) is retained as historical context; current presentation and review criteria are described above and in the release checklist.
