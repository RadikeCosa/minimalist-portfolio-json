---
layout: "../../../layouts/ProjectCaseLayout.astro"
presentation: "product"
title: "Clinical App for Home Rehabilitation"
description: "An application designed around professional practice to support everyday home physiotherapy, with clinical data modelled using FHIR."
locale: "en"
alternateUrl: "/proyectos/plataforma-clinica/"
repository: "https://github.com/RadikeCosa/kinesiologiaadomicilio"
role: "HealthTech product · Functional analysis and implementation"
status: "In development and evaluation · No public demo"
stack:
  - "Next.js 16"
  - "TypeScript"
  - "FHIR R4"
  - "Vitest"
  - "Playwright"
---

## An app designed around everyday practice

The application aims to make everyday home physiotherapy work easier. Its design starts with understanding how care is organised in practice and adapting the tool to that way of working: planning visits, reviewing patient history, recording progress, and sharing reports from a phone.

<h2 class="clinical-design-title">Making clinical records easier to complete and more useful</h2>

The challenge is to make recording care quick and useful for the professional. Forms are designed around everyday use, with a clear information hierarchy, understandable fields, and validation that supports good record-keeping practices and patient follow-up.

<div class="clinical-gallery wide">
  <figure>
    <a href="/case-studies/clinical-app/today-fictional.png"><img src="/case-studies/clinical-app/today-fictional.png" alt="Open the full screenshot of the Today view, showing a schedule and visits for fictional patients." width="750" height="2726" loading="lazy" decoding="async" /></a>
    <figcaption>Organising the day's visits. Demonstration screenshot using fictional data.</figcaption>
  </figure>
  <figure>
    <a href="/case-studies/clinical-app/visit-fictional.png"><img src="/case-studies/clinical-app/visit-fictional.png" alt="Open the full screenshot of the mobile visit-recording form, using fictional data." width="750" height="3778" loading="lazy" decoding="async" /></a>
    <figcaption>Recording care from a phone. Demonstration screenshot using fictional data.</figcaption>
  </figure>
</div>

<h2 class="clinical-standard-title">Building on existing standards</h2>

Clinical data modelling builds on FHIR to use an established, recognised structure, avoid creating a custom model where the standard already meets the need, and prepare a foundation for future integrations.

This decision reflects the working approach: study available solutions, adapt them to the context, and build on them. Interoperability is a design goal; integrations with other systems have not yet been implemented.

## Privacy and data protection

Development takes Argentina's [Law 25.326 on Personal Data Protection](https://www.argentina.gob.ar/normativa/nacional/64790/actualizacion) and [Law 26.529 on Patient Rights, Clinical Records, and Informed Consent](https://www.argentina.gob.ar/normativa/nacional/160432/actualizacion) as references. Confidentiality, authorised access, and safeguarding clinical information inform design and deployment decisions.

## In development and evaluation

<aside class="clinical-progress">
  <p>We are currently improving the recording forms, beginning to work with real data, and evaluating where to deploy the clinical server. Authentication is planned around passkeys and is being implemented.</p>
</aside>

<p class="clinical-demo-note">Public screenshots use fictional patients and data only. The application has no public demo.</p>
