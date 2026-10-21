---
layout: "../../../layouts/ProjectCaseLayout.astro"
presentation: "product"
title: "Home Rehabilitation Landing Page"
description: "A website designed to make the first home physiotherapy enquiry easier in Neuquén, with initial guidance, local SEO, and WhatsApp contact."
locale: "en"
alternateUrl: "/proyectos/landing-kinesiologia/"
role: "Web design, content, and implementation"
status: "Public site · Live"
stack:
  - "Next.js 15"
  - "React 19"
  - "TypeScript"
  - "Tailwind CSS 4"
website: "https://kinesiologiaadomicilio.vercel.app/"
websiteLabel: "View site"
repository: "https://github.com/RadikeCosa/kinesiologiaadomicilio"
---

## A website designed to make the first enquiry easier

I designed and implemented the landing page around the service and the questions people often have before a first enquiry. Introducing the professional, location, and situations addressed helps visitors understand what home care offers and whether it makes sense to ask about their own case or a family member's.

<figure class="case-figure wide">
  <a href="/case-studies/kinesiology-landing/cover-2026-09-27.webp"><img src="/case-studies/kinesiology-landing/cover-2026-09-27.webp" alt="Open a screenshot of the home physiotherapy landing page in Neuquén, introducing the professional and contact options." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>Introducing the service and professional. Public screenshot from September 2026; select to enlarge.</figcaption>
</figure>

<h2 class="landing-guidance-title">Guidance and contact with context</h2>

The **Evaluate** flow lets visitors select a situation, read initial guidance, and open WhatsApp with a message prepared for that enquiry. It is an option-based flow that supports first contact without automating a clinical assessment.

Messages also reflect the entry point, such as an enquiry for a family member or a specific service. The aim is to make the conversation easier to start and give the professional context.

<h2 class="landing-quality-title">Local SEO, mobile experience, and measurement</h2>

The home, services, and guidance pages have their own titles and descriptions, canonical URLs, and link-sharing metadata. The sitemap and structured data describe the service and its location in Neuquén.

The implementation uses images sized for the screen, priority loading for the main image, touch-sized buttons, visible focus, and a skip-to-content link. Tests cover metadata, the sitemap, messages, and analytics events.

Measurement records which button starts a contact attempt and how far visitors scroll. The `whatsapp_intent` event represents contact intent: a click does not confirm a completed enquiry. Before sending the destination to analytics, parameters containing the prefilled message are removed so its content is not included.

## Current scope and next steps

<aside class="landing-scope">
  <p>Contact continues on WhatsApp to discuss the case and availability. The website does not confirm whether a click led to an enquiry or appointment. One possible next step would be to track enquiries in a separate tool, without sending clinical information to analytics.</p>
</aside>

Mobile performance also needs follow-up. A September audit identified room for improvement on the home and services pages; the interface was subsequently updated. The next evaluation step is to repeat measurements on the current version before attributing improvements in speed or patient acquisition.
