## Portfolio purpose

This repository is a bilingual professional portfolio oriented primarily to:

- HealthTech implementation
- clinical systems
- functional analysis
- healthcare product and operations

Junior HealthTech development is a secondary positioning.

Do not reposition the profile as a generic junior frontend developer.

## Content principles

- Treat healthcare experience as current domain expertise, not as an unrelated former career.
- Present the transition to technology as a progressive evolution, with overlapping stages.
- Do not invent metrics, impact, seniority, responsibilities, or technologies.
- Prefer concrete responsibilities and evidence over generic professional claims.
- Keep Spanish and English semantically aligned, but use natural wording rather than literal translation.
- External-facing copy requires human approval before implementation.

## Visual principles

- Preserve the existing minimalist visual language.
- Prioritize readability, hierarchy, whitespace, and scanability.
- Do not add decorative components, animations, gradients, or visual effects without a functional reason.
- Prefer extending existing components and tokens over introducing a new design system.
- Validate changes in Spanish and English, desktop and mobile, light and dark themes.
- Do not redesign multiple sections in the same patch unless explicitly requested.

## Project Case Pages

Project cards on the home page should remain brief and scannable. Extended evidence belongs in dedicated bilingual case pages.

Case pages should reuse the portfolio identity, layout, typography, theme behavior, and minimalist visual language. Prefer a small reusable layout and simple content files over complex infrastructure unless several cases justify it.

Use only demo or fully fictional data in screenshots. Do not show real patient data, DNI, phone numbers, addresses, identifiable clinical notes, secrets, or private endpoints. Present FHIR as pragmatic local modeling unless external interoperability is actually implemented.

## Workflow

For editorial or information-architecture tasks:

1. Audit the current content and implementation.
2. Separate facts, interpretation, and recommendations.
3. Propose alternatives without modifying files.
4. Wait for explicit approval.
5. Implement only the approved option in a separate patch.
