# Portfolio baseline v2 — September 2026

## Goal and positioning

The portfolio prioritizes interviews for HealthTech implementation, clinical systems, and functional analysis roles. It presents healthcare experience as current domain expertise and web development as an implementation capability.

## Public information architecture

The site contains twelve static routes: the home page, About page, and four bilingual project cases. The public services pages are retired and excluded from the sitemap. Temporary Vercel redirects send `/servicios/` to `/` and `/en/services/` to `/en/`.

The home page introduces the profile with the clinical-workflow positioning, presents the private clinical application first, then its related public landing page, followed by Impostor and Fira. Each case opens with its problem, contribution, status, and key decision. Experience, capabilities, the general résumé, and recruiting contact support this evidence. About holds the longer career narrative.

The clinical application is a private local pilot with fictional data and no public demo. The public landing is a separate deployed surface. Do not present FHIR as productive external interoperability or the pilot as ready for real clinical data.

## Image evidence

The project thumbnails and case-page figures were checked against the project descriptions and current status: fictional local screens for the clinical pilot, the public landing image, the in-use Impostor interface, and Fira's catalog. Portrait clinical screens are shown in full rather than clipped to a short viewport. The landing photo was converted from a 1.9 MB PNG to a 92 KB WebP at the same 1536 × 1024 resolution. Existing UI screenshots remain at their original resolution to preserve legibility.

Open Graph images use the same bilingual HealthTech and clinical-systems positioning and the dark palette.

## Visual system

- Editorial and restrained layout with readable line lengths and larger body text.
- Self-hosted IBM Plex Sans for reading and IBM Plex Mono for metadata and technical details.
- Light palette: `#F8FAF9` canvas, `#16221E` primary text, `#136B5C` accent.
- Dark palette: `#111916` canvas, `#EDF4F0` primary text, `#72C7B5` accent.
- WCAG AA contrast: at least 4.5:1 for normal text and 3:1 for large text and interface components.
- Text and controls were checked in both themes; keyboard navigation keeps a visible focus outline.
- No decorative animation, gradients, or synthetic product imagery.

## Language and evidence

Spanish and English copy must match on role positioning, project status, personal contribution, limitations, and calls to action while reading naturally in each language. No unsupported metrics, responsibilities, seniority, or technologies may be added. Public screenshots must use fictional data.

The home-page CV links point to coordinated Spanish and English general CVs with the same HealthTech headline and four-case ordering. Both PDFs are generated from tracked scripts and checked visually after regeneration.

## Validation and publishing

- Keep the route list, sitemap, redirect rules, and generated-site verifier aligned at twelve routes.
- Run `npm run verify` and inspect every route in both languages, light and dark themes, mobile, and desktop.
- Review a Vercel preview before production publication; verify redirects, screenshots, links, and both PDFs there.
- Attribute an interview to the portfolio only when the candidate confirms it as the source. A portfolio-originated email uses a dedicated subject; other confirmed sources are recorded manually. Unconfirmed sources remain unknown.
- Review the source log after six to eight weeks. PDF downloads alone do not establish interview attribution.

The earlier v1 baseline is retained as historical context and should not be used as the current route or positioning specification.
