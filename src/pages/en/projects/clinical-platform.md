---
layout: "../../../layouts/ProjectCaseLayout.astro"
presentation: "product"
title: "Clinical App for Home Rehabilitation"
description: "An application designed around professional practice to support everyday home physiotherapy, with clinical data modelled using FHIR."
locale: "en"
alternateUrl: "/proyectos/plataforma-clinica/"
repository: "https://github.com/RadikeCosa/kinesiologia-clinica"
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

The application aims to make an independent home physiotherapy professional's work easier. Its design starts with understanding how care happens in practice: from the initial enquiry and coordinating visits through to record-keeping, follow-up, and reports.

<h2 class="clinical-design-title">Better records, with less effort</h2>

Current work focuses on aligning the flows with that reality and identifying which parts of the forms can be simplified. The priority is clear, useful information for continuing care, with a clear field hierarchy and validation that supports good record-keeping practices.

Corrections and annulments retain their reasons. Reports can be reviewed before saving and downloaded as PDFs; replacements preserve a history.

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

Clinical data is modelled using FHIR to build on an established structure and avoid creating a custom model where the standard already meets the need. The clinical model is kept separate from the screens so the experience can be adapted to the professional.

Interoperability is a design goal; there are no integrations with other systems yet.

## Access and privacy by design

The application implements passkey access, per-device sessions, and revocation and recovery mechanisms. Validation with an independent authenticator and of the complete recovery flow remains pending.

Design and deployment decisions take Argentina's [Law 25.326 on Personal Data Protection](https://www.argentina.gob.ar/normativa/nacional/64790/actualizacion) and [Law 26.529 on Patient Rights, Clinical Records, and Informed Consent](https://www.argentina.gob.ar/normativa/nacional/160432/actualizacion) as references, considering confidentiality, authorised access, and safeguarding clinical information.

## Current status and evolution

<aside class="clinical-progress">
  <p>We are preparing to begin using real data, refining the workflows and simplifying the recording forms. Preparation includes evaluating server deployment and completing the remaining operational validations.</p>
</aside>

The application requires a connection. Offline work and draft backup are planned areas of development.

In the medium term, AI assistance is planned to help draft reports from the available clinical records. The proposal is to generate drafts for the professional to review, correct, and validate before issuing them, taking data privacy into account and without introducing information unsupported by the records.

<p class="clinical-demo-note">Public screenshots use fictional data only. The application has no public demo.</p>
