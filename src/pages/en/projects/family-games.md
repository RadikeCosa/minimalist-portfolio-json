---
layout: "../../../layouts/ProjectCaseLayout.astro"
presentation: "product"
title: "Family Games"
description: "Two games, one shared idea: make it easier to get together and play in person. Impostor and Tutti Frutti bring the group into a game; each player uses their phone while the conversation happens face to face."
locale: "en"
alternateUrl: "/proyectos/juegos-familiares/"
role: "Product, architecture, and full-stack implementation"
status: "Two games published"
stack:
  - "Next.js"
  - "TypeScript"
  - "Supabase"
  - "PostgreSQL"
website: "https://juegos-familiares.vercel.app/"
websiteLabel: "Play"
repository: "https://github.com/RadikeCosa/juegos-familiares"
---

## Two games to share

<div class="game-grid wide">
  <section class="game-showcase game-showcase--red" aria-labelledby="impostor">
    <h3 id="impostor">Impostor</h3>
    <p>Words, clues, and secret voting to discover who has a different role. Each player receives private information on their phone; clues and conversation are shared in person.</p>
    <figure>
      <div class="game-screens">
        <a href="/case-studies/impostor/private-role-local.webp"><img src="/case-studies/impostor/private-role-local.webp" alt="Open Impostor screenshot: a test participant's private word and role." width="395" height="581" loading="lazy" decoding="async" /></a>
        <a href="/case-studies/impostor/voting-local.webp"><img src="/case-studies/impostor/voting-local.webp" alt="Open Impostor screenshot: secret voting in a test room." width="395" height="581" loading="lazy" decoding="async" /></a>
      </div>
      <figcaption>Private information and voting from independent sessions. Select a screenshot to enlarge it.</figcaption>
    </figure>
  </section>
  <section class="game-showcase game-showcase--blue" aria-labelledby="tutti-frutti">
    <h3 id="tutti-frutti">Tutti Frutti</h3>
    <p>One letter, several categories, and answers to compare as a group. Each player completes the round on their phone, then everyone reviews the answers before seeing the results.</p>
    <figure>
      <a class="game-round" href="/case-studies/juegos-familiares/tutti-frutti-round.png"><img src="/case-studies/juegos-familiares/tutti-frutti-round.png" alt="Open the full screenshot of a Tutti Frutti demo round with a letter and five categories." width="1416" height="4722" loading="lazy" decoding="async" /></a>
      <figcaption>The same round, with answers from each phone. Select the screenshot to view it in full.</figcaption>
    </figure>
  </section>
</div>

<h2 class="game-technical-title">The technical challenge: keeping the game in sync</h2>

<div class="game-technical wide">
  <section aria-labelledby="realtime">
    <h3 id="realtime">Real-time updates</h3>
    <p>Supabase Realtime notifies connected devices of changes to the game, so each player can follow what is happening.</p>
  </section>
  <section aria-labelledby="rules">
    <h3 id="rules">Rules validated in PostgreSQL</h3>
    <p>In Impostor, protected actions validate identity, permissions, and game state in the backend or database. Roles, votes, and results do not depend on what the browser claims.</p>
  </section>
  <section aria-labelledby="reconnection">
    <h3 id="reconnection">Session recovery</h3>
    <p>After a disconnection, the Impostor client queries persisted, authorized state to rebuild the session. Real-time notifications support that state rather than replace it.</p>
  </section>
</div>

## Built and tested through use

I designed the flows, rules, and states for each game and implemented the platform with Next.js, TypeScript, Supabase, and PostgreSQL. Each game keeps its own logic while sharing access to groups and rooms.

<aside class="game-usage">
  <p class="game-usage__lead">Impostor: more than 100 family games played</p>
  <p>Real use informed improvements to wording, flows, and behaviour across devices. Tutti Frutti was added later and has its own usage history.</p>
</aside>

Impostor includes unit and database tests, permission and protected-operation validation (RLS/RPCs), and basic synchronization checks.

<p class="game-note">Designed for small groups gathering in person. Games require an internet connection.</p>
