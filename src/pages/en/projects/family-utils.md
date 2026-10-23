---
layout: "../../../layouts/ProjectCaseLayout.astro"
presentation: "product"
title: "Family Utils"
description: "A set of apps for organizing chores, meals, shopping, and family activities in one shared space."
locale: "en"
alternateUrl: "/proyectos/family-utils/"
role: "Product design, architecture, and full-stack implementation"
status: "Seven apps · PWA in production"
stack:
  - "Next.js"
  - "React"
  - "TypeScript"
  - "PostgreSQL · Neon"
  - "Drizzle"
  - "Better Auth"
website: "https://family-utils-umber.vercel.app/"
websiteLabel: "Visit Family Utils"
coverImage: "/case-studies/family-utils/cover.webp"
coverImageAlt: "Family Utils home page in a demo screenshot with fictional data."
coverImageCaption: "Platform home page. Demo screenshot with fictional data."
---

## One shared space for everyday life

Family Utils brings together family tools that often end up scattered across messages, notes, and lists. Profiles let family members share a space and set permissions for each app. The interface is designed for phones first.

## Seven apps for the family

### Chores and routines

Organize daily tasks, assign responsibilities, and review routines and history.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/tasks-mobile.webp" alt="Family Utils Chores demo screenshot showing a task assigned to a fictional family member." width="390" height="844" loading="lazy" decoding="async" />
  <figcaption>Tasks assigned in a demo family with fictional members.</figcaption>
</figure>

### Menus

Suggest meals and plan four daily meal times around each family member’s attendance.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/menus-mobile.webp" alt="Menus demo screenshot showing four daily meal times and family attendance." width="390" height="2135" loading="lazy" decoding="async" />
  <figcaption>Meal planning and attendance using demo data.</figcaption>
</figure>

### Shopping

Share lists with the family and choose who can edit them.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/shopping-mobile.webp" alt="Demo screenshot of a shared family shopping list." width="390" height="913" loading="lazy" decoding="async" />
  <figcaption>A shared family list for organizing shopping.</figcaption>
</figure>

### Library

Collect books, films, music, and other works; each member can add a personal perspective.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/library-mobile.webp" alt="Family Library demo screenshot with a fictional work." width="390" height="967" loading="lazy" decoding="async" />
  <figcaption>The library brings together works and family members’ opinions.</figcaption>
</figure>

### Kitchen

Convert units, ingredients, and temperatures; calculations run on the device.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/kitchen-mobile.webp" alt="Kitchen demo screenshot showing the measurement converter." width="390" height="1334" loading="lazy" decoding="async" />
  <figcaption>Measurement conversions run directly on the device.</figcaption>
</figure>

### Sports

Follow schedules, results, and family predictions for River Plate, UFC, and the Champions League.

<div class="family-utils-screens">
  <figure class="case-cover case-cover--screen">
    <img src="/case-studies/family-utils/sports-river-mobile.webp" alt="Sports demo screenshot showing River’s schedule." width="390" height="2189" loading="lazy" decoding="async" />
    <figcaption>River schedule.</figcaption>
  </figure>
  <figure class="case-cover case-cover--screen">
    <img src="/case-studies/family-utils/sports-ufc-mobile.webp" alt="Sports demo screenshot showing a UFC fight card." width="390" height="2692" loading="lazy" decoding="async" />
    <figcaption>UFC fight card.</figcaption>
  </figure>
  <figure class="case-cover case-cover--screen">
    <img src="/case-studies/family-utils/sports-champions-mobile.webp" alt="Sports demo screenshot showing Champions League matches." width="390" height="2286" loading="lazy" decoding="async" />
    <figcaption>Champions League matches.</figcaption>
  </figure>
</div>

Schedules and results are maintained as curated content; the app does not automatically sync sports providers.

### Training

Build personal routines and record sessions and history.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/training-mobile.webp" alt="Training demo screenshot showing a fictional routine." width="390" height="844" loading="lazy" decoding="async" />
  <figcaption>Personal routine and history in a demo account.</figcaption>
</figure>

## Profiles and permissions

Family management brings together profiles and helps organize who participates in the shared space.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/family-mobile.webp" alt="Demo screenshot of fictional family profiles." width="390" height="1381" loading="lazy" decoding="async" />
  <figcaption>Fictional family profiles prepared for the demo.</figcaption>
</figure>

## Technical decisions

Built with Next.js App Router, React, TypeScript, and CSS Modules; PostgreSQL 18 on Neon with Drizzle; Better Auth; and Vercel deployments. Permissions are checked on the server. Transactions and version checks protect concurrent changes; task updates use revisions and ETags. Playwright covers mobile workflows.

Library and Training are enabled through application configuration. Kitchen runs its conversions on the device. Sports presents curated data in the platform.

<figure class="case-cover">
  <img src="/case-studies/family-utils/home-desktop.webp" alt="Desktop screenshot of the Family Utils home page with fictional family examples." width="1200" height="800" loading="lazy" decoding="async" />
  <figcaption>Desktop home page. All data in these screenshots is fictional and was prepared for demonstration.</figcaption>
</figure>

The screenshots show the published version and were captured in an isolated environment with demo content.

<style>
  .family-utils-screens { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; align-items: start; }
  .family-utils-screens .case-cover--screen { width: 100%; }
  @media (max-width: 767px) { .family-utils-screens { grid-template-columns: 1fr; } }
</style>
