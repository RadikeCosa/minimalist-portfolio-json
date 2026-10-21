---
layout: "../../../layouts/ProjectCaseLayout.astro"
presentation: "product"
title: "Fira Estudio"
description: "Fira Estudio is a web catalogue of handmade textile products, designed around the visual identity supplied by the client."
locale: "en"
alternateUrl: "/proyectos/fira-estudio/"
role: "Independent work · Web design and implementation"
status: "Web catalogue · Enquiries and orders via WhatsApp"
stack:
  - "Next.js"
  - "TypeScript"
  - "Supabase"
  - "Playwright"
website: "https://fira-estudio-cyan.vercel.app/"
websiteLabel: "View catalogue"
repository: "https://github.com/RadikeCosa/fira-estudio"
---

## Visual identity and catalogue

<div class="fira-gallery wide">
  <figure>
    <a href="/case-studies/fira/home-cover-2026-09-27.webp"><img src="/case-studies/fira/home-cover-2026-09-27.webp" alt="Open a screenshot of the Fira Estudio homepage, with textile photography and a catalogue link." width="1200" height="800" loading="lazy" decoding="async" /></a>
    <figcaption>The business's visual identity, brought to the web.</figcaption>
  </figure>
  <figure>
    <a href="/case-studies/fira/product-detail-2026-09-27.webp"><img src="/case-studies/fira/product-detail-2026-09-27.webp" alt="Open a screenshot of the Camino de Mesa Magnolia product page, with its description, material, and care instructions." width="1200" height="800" loading="lazy" decoding="async" /></a>
    <figcaption>Products with their details, materials, and care instructions.</figcaption>
  </figure>
</div>

<h2 class="fira-story-title">From online store to catalogue</h2>

The first version operated as an online store with Mercado Pago payments. Handmade production meant confirming availability and whether each order could be fulfilled before accepting payment.

<aside class="fira-outcome">
  <p>I therefore adapted the site into a catalogue with enquiries and orders via WhatsApp, so the business could agree on each order before taking payment.</p>
</aside>

## Images and catalogue growth

Images are kept alongside the site, a simple approach for a small catalogue that changes infrequently. The limitation is that adding or replacing files requires updating and redeploying the project.

If the catalogue grows, the planned next step is to move images to Supabase Storage and add an admin panel to manage products and photographs without new deployments, with file validation and image size optimisation.
