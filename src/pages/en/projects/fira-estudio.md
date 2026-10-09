---
layout: "../../../layouts/ProjectCaseLayout.astro"
title: "Fira Estudio"
description: "A web product for a textile business, adapted from e-commerce to a catalog as its operational capacity changed."
locale: "en"
alternateUrl: "/proyectos/fira-estudio/"
role: "Independent work · Product and implementation"
status: "Web catalog · Public site"
problem: "Present textile products in a way the business could operate."
contribution: "Web product development and implementation."
decision: "Shift from e-commerce to a catalog when the business could not support online sales operations."
coverImage: "/case-studies/fira/catalog-production.webp"
coverImageAlt: "Fira Estudio's production catalog showing categories and featured textile products."
coverImageCaption: "Production catalog: categories and product presentation, with availability handled through inquiry."
stack:
  - "Next.js"
  - "TypeScript"
  - "Supabase"
  - "Playwright"
website: "https://fira-estudio-cyan.vercel.app/"
repository: "https://github.com/RadikeCosa/fira-estudio"
---

## Need

Fira Estudio needed to present and sell its textiles online through a product aligned with the way the business operates.

## First version

The first version included a home page, categories, catalog, product pages, variants, a cart, checkout, and a certified Mercado Pago integration.

The flow included payments, orders, webhooks, and transactional emails.

## Operational change

Demand exceeded the business's production capacity. Keeping automated purchases would have allowed orders that could later prove difficult to fulfill.

We reframed the product as a digital showcase. The current site retains the catalog, variants, materials, care information, and reference pricing, while orders are discussed and confirmed by phone according to availability.

<figure class="case-figure wide">
  <img
    src="/case-studies/fira/home-cover-2026-09-27.webp"
    alt="Redesigned Fira Estudio homepage with a textile photograph and catalog link."
    width="1200"
    height="800"
    loading="lazy"
    decoding="async"
  />
</figure>

<figure class="case-figure wide">
  <img
    src="/case-studies/fira/product-detail-2026-09-27.webp"
    alt="Camino de Mesa Magnolia product page with photography, description, material, and care details."
    width="1200"
    height="800"
    loading="lazy"
    decoding="async"
  />
</figure>

## My contribution

I designed and implemented the experience, catalog structure, original purchasing flow, payment integration, responsive navigation, accessibility, metadata, SEO, and unit and E2E tests.

## Decision

We removed the cart, checkout, Mercado Pago, webhooks, orders, and transactional emails when they stopped matching the real operational capacity.

The site then supported inquiry and prior confirmation instead of accepting orders the business needed to review first.

## Quality and boundaries

The site includes responsive navigation, metadata, sitemap, robots, and basic SEO structure. Catalog data comes from Supabase.

The current version does not include online purchases or payments. Pricing supports the initial inquiry, and availability is confirmed before each order is accepted.
