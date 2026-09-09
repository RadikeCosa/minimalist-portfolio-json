---
layout: "../../../layouts/ProjectCaseLayout.astro"
title: "Clinical Platform for Home Rehabilitation"
description: "A platform for managing the home-rehabilitation process."
locale: "en"
alternateUrl: "/proyectos/plataforma-clinica/"
role: "Functional analysis, implementation, and development"
period: "2020 — Present"
stack:
  - "Next.js"
  - "TypeScript"
  - "FHIR"
  - "Vitest"
website: "https://kinesiologiaadomicilio.vercel.app/"
repository: "https://github.com/RadikeCosa/kinesiologiaadomicilio"
---

## Problem

Home rehabilitation combines inquiries, administrative data, treatments, visits, and documentation. The system needed to organize that process without treating every request as active care or recording visits outside their treatment context.

## The product

The public site presents services and supports initial contact. The private/local area organizes requests, patients, treatment cycles, visits, and reports. It is not a public SaaS or a multi-user platform.

<figure class="case-figure wide">
  <img
    src="/case-studies/clinical-platform/admin-dashboard.png"
    alt="Private local dashboard showing operational priorities, active patients, and pending actions."
    width="1440"
    height="1800"
    loading="lazy"
    decoding="async"
  />
  <figcaption>The dashboard prioritizes states, pending work, and next actions for daily use.</figcaption>
</figure>

## Main workflow

An inquiry does not automatically become treatment. Intake creates a minimal patient record and a `ServiceRequest` under review. Only a valid, accepted, unused request can start a treatment cycle.

<div class="case-flow" aria-label="Main operational workflow">
  <ol class="case-flow__steps">
    <li><span>Request</span><span class="case-flow__connector" aria-hidden="true">→</span></li>
    <li><span>Patient</span><span class="case-flow__connector" aria-hidden="true">→</span></li>
    <li><span>Treatment</span><span class="case-flow__connector" aria-hidden="true">→</span></li>
    <li><span>Visit</span><span class="case-flow__connector" aria-hidden="true">→</span></li>
    <li><span>Follow-up</span></li>
  </ol>
</div>

Treatment opens an `EpisodeOfCare`; visits are recorded as `Encounter` resources inside it. Dates are validated against the episode start and closure. The patient view shows the next action for the current state.

<figure class="case-figure case-figure--crop wide">
  <div class="case-figure__media">
    <img
      src="/case-studies/clinical-platform/admin-encounters.png"
      alt="Clinical follow-up view with functional measures, summaries, and recorded visits using fictional data."
      width="1440"
      height="2200"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Follow-up brings visits, functional measures, and progress together inside the treatment cycle.</figcaption>
</figure>

## My contribution

I defined the functional workflow, business rules, and screen responsibilities. I also implemented the product, FHIR model, tests, and documentation.

## Decisions

### Request before treatment

A request can remain under review, be accepted, or close without generating visits. This adds one explicit step before treatment begins.

### Distinct but connected areas

The interface separates administrative data, clinical context, and treatment, and connects them from the patient view. Some actions require navigating between areas.

### Visits inside an active episode

Visits require an active `EpisodeOfCare` and dates inside its treatment cycle. The current scope does not solve multiple simultaneous active episodes.

### FHIR isolated from the UI

An intermediate layer translates FHIR resources into interface concepts such as request, active treatment, and next action. Contract changes require coordinated updates across those layers.

## Pragmatic FHIR modeling

FHIR is a local clinical model, not production interoperability or a complete health record. The core uses `Patient`, `ServiceRequest`, `EpisodeOfCare`, `Encounter`, and `Observation`; supporting resources add context when needed.

## Quality, privacy, and boundaries

The project includes typed contracts, domain validations, automated tests, and workflow documentation. Public screenshots use fictional, sanitized data.

The admin is local/private, marked as `noindex`, and excluded from public analytics. The current scope does not include production authentication, multi-user operation, external interoperability, a patient portal, or a complete electronic health record.
