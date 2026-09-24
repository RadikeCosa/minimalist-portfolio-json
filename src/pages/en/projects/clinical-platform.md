---
layout: "../../../layouts/ProjectCaseLayout.astro"
title: "Clinical App for Home Rehabilitation"
description: "A private application for organizing home-care patients, treatment, and visits through FHIR-based clinical workflows."
locale: "en"
alternateUrl: "/proyectos/plataforma-clinica/"
role: "HealthTech product · Functional analysis and implementation"
stack:
  - "Next.js 16"
  - "TypeScript"
  - "FHIR R4"
  - "Vitest"
  - "Playwright"
---

## Problem

In home care, schedules, patient information, and visit records can be scattered across messages, notes, and memory. This application explores how to organize that work so a professional can record a visit and continue follow-up from a phone.

## Private application

The home screen brings together **Today**, **Schedule**, and **Patients**. From there, the professional organizes treatment, appointments, and visits. Visits can be recorded live or later, with a brief clinical note, intervention, next step, and optional assessments.

<figure class="case-figure case-figure--crop wide">
  <div class="case-figure__media">
    <img
      src="/case-studies/clinical-app/today-fictional.png"
      alt="Today view in the clinical application with fictional demo appointments and visits."
      width="750"
      height="2726"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Local pilot with fictional data: the Today view helps prioritize pending and scheduled visits.</figcaption>
</figure>

## My contribution

I translate home-care processes into workflows, rules, and information models. I contribute to functional analysis, architecture, and implementation, supported by documentation and tests.

## Decisions

### Organize the day around visits

Today brings together ongoing, pending, and scheduled visits; Schedule supports date-based planning, and Patients provides access to each record and treatment. Appointments and clinical visits are distinct concepts, so an appointment can be rescheduled or cancelled without creating a clinical record.

### Keep visit records brief and reviewable

The usual record prioritizes patient status and response, and the intervention performed. A next step, assessment, or procedure can be added when it supports follow-up. A confirmed visit can be corrected with a reason or voided with justification.

### Keep FHIR out of the interface

FHIR R4 models clinical data on the server. The interface works with product concepts, while an adapter translates between the clinical model and application workflows. This keeps domain rules and dependencies out of the screens.

<figure class="case-figure case-figure--crop wide">
  <div class="case-figure__media">
    <img
      src="/case-studies/clinical-app/visit-fictional.png"
      alt="Mobile visit-recording form in the local pilot, using fictional data."
      width="750"
      height="3778"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Recording a demonstration visit. These screenshots use fictional patients and data only.</figcaption>
</figure>

## Status, privacy, and boundaries

The online clinical pilot is enabled only locally against a disposable HAPI FHIR server with fictional data. Clinical routes and writes are blocked on Vercel, and there is no public demo. Passkey access is implemented for one provisioned professional account; full mobile validation, recovery, and revocation still need validation.

The application is not ready for real clinical data. PWA, offline work, later synchronization, and exportable reports are not implemented yet. Screenshots on this page come from the local fictional-data environment and contain no real patient information.
