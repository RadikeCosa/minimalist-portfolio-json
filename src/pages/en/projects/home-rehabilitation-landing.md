---
layout: "../../../layouts/ProjectCaseLayout.astro"
title: "Home Rehabilitation Landing Page"
description: "A public site to guide inquiries for a home-rehabilitation service in Neuquén, Argentina."
locale: "en"
alternateUrl: "/proyectos/landing-kinesiologia/"
role: "Digital product · Analysis and implementation"
stack:
  - "Next.js 15"
  - "React 19"
  - "TypeScript"
  - "Tailwind CSS 4"
  - "Zod"
website: "https://kinesiologiaadomicilio.vercel.app/"
websiteLabel: "Public site"
repository: "https://github.com/RadikeCosa/kinesiologiaadomicilio"
---

## Context

An independent home-rehabilitation service in Neuquén needed a digital presence to explain the care offered, guide prospective patients, and make it easier to start a conversation with enough context.

## Public site

The landing page presents the service and offers an initial guided orientation through **Evaluate**. The flow helps people prepare an inquiry and provides WhatsApp contact with prefilled opening messages.

The hero image sets the home-care context. The site and its content guide the next step without promising clinical outcomes.

<figure class="case-figure">
  <img
    src="/case-studies/kinesiology-landing/home-visit.png"
    alt="Home-care scene: a physiotherapist supporting an older patient during a functional exercise."
    width="1536"
    height="1024"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Image used on the landing page to represent home care.</figcaption>
</figure>

## My contribution

I designed and implemented the public experience based on the service and the questions people often have before an initial inquiry. I also structured the orientation flow and contact channels.

## Decisions

### Guide people before they start a conversation

The site explains who the service is for and what information helps assess an inquiry. The **Evaluate** flow and prefilled WhatsApp messages reduce initial back-and-forth without automating clinical decisions.

### Fit acquisition to the service

The landing page aims for informed inquiries within the professional's capacity rather than maximizing contact volume.

### Keep only acquisition public

The landing page remains deployed as the public site. The application for managing patients, treatment, and visits is a separate private project; it is not presented as part of the site or as an online demo.

## Implementation and scope

The site uses Next.js, TypeScript, and responsive components. It includes search metadata, analytics on public routes, and validation for orientation details. The private clinical application is documented separately in the [clinical app case study](./clinical-platform/).
