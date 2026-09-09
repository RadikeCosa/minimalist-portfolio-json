---
layout: "../../../layouts/ProjectCaseLayout.astro"
title: "Fira Estudio"
description: "A web catalog for a textile business."
locale: "en"
alternateUrl: "/proyectos/fira-estudio/"
role: "Independent work · Product and implementation"
stack:
  - "Next.js"
  - "TypeScript"
  - "Supabase"
  - "Playwright"
website: "https://fira-estudio-cyan.vercel.app/"
repository: "https://github.com/RadikeCosa/fira-estudio"
---

## Need

Fira Estudio needed to present its textiles, organize the catalog, and support mobile inquiries without implementing e-commerce.

## Scope

The site includes a home page, categories, catalog, product pages, variants, materials, care information, reference pricing, and WhatsApp contact.

It does not include a cart, checkout, payments, or online orders. Prices and availability support a manual inquiry.

## My contribution

I designed and implemented the experience, catalog structure, responsive navigation, accessibility, metadata, SEO, and unit and E2E tests.

## Decision

The repository previously contained e-commerce infrastructure. The current product removed cart, checkout, Mercado Pago, webhooks, orders, and transactional emails because they no longer matched the scope.

The reduction limits dependencies and avoids presenting an operation the business does not provide.

## Quality and boundaries

The site includes responsive navigation, metadata, sitemap, robots, and basic SEO structure. Catalog data comes from Supabase. It is not presented as active e-commerce or a pending payment integration.
