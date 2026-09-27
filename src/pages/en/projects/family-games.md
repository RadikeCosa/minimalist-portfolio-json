---
layout: "../../../layouts/ProjectCaseLayout.astro"
title: "Family Games"
description: "A platform for in-person group games, with Impostor and Tutti Frutti."
locale: "en"
alternateUrl: "/proyectos/juegos-familiares/"
role: "Product, architecture, and full-stack implementation"
status: "Two games published · Impostor: 100+ family games played"
problem: "Support in-person games where every participant uses a phone to play with the group."
contribution: "Designed and built Impostor and Tutti Frutti as mobile-first web experiences."
decision: "Keep each game's rules and states independent while sharing platform capabilities where appropriate."
coverImage: "/case-studies/juegos-familiares/cover-2026-09-27.webp"
coverImageAlt: "Juegos Familiares homepage with Impostor and Tutti Frutti game entries."
coverImageCaption: "Public homepage captured on September 27, 2026."
stack:
  - "Next.js"
  - "TypeScript"
  - "Supabase"
  - "PostgreSQL"
website: "https://juegos-familiares.vercel.app/"
repository: "https://github.com/RadikeCosa/juegos-familiares"
---

## The platform

Juegos Familiares brings together in-person experiences for small groups. Each person participates from a phone while sharing the conversation face to face.

The homepage offers two games: **Impostor**, built around roles and secret voting, and **Tutti Frutti**, built around categories and answers in rounds. In both, people join a group and connect to a room to play.

## Impostor

Each participant privately receives a word or role, discusses clues, votes, and sees the result. One person creates a temporary room and shares a code or link. The session keeps its rounds, used words, and score.

The full loop includes:

1. creating or joining a room;
2. privately revealing a word or role;
3. discussing clues in person;
4. casting a secret vote;
5. resolving a tie when needed;
6. giving a discovered impostor a final guess;
7. displaying the result and score;
8. starting another round or ending the session.

<figure class="case-state-pair wide">
  <div class="case-state-pair__grid">
    <img
      src="/case-studies/impostor/private-role-local.webp"
      alt="Private Impostor screen showing the assigned word and the control used to hide it."
      width="395"
      height="581"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/case-studies/impostor/voting-local.webp"
      alt="Impostor voting screen in a local session with test participants."
      width="395"
      height="581"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>A round across separate browsers: each participant receives private information and votes from their own session.</figcaption>
</figure>

## Tutti Frutti

Tutti Frutti adds a second in-person game to the platform. The group creates or opens a room, configures a game, answers categories for each letter, and reviews responses before comparing results.

## My contribution

I designed the rules, states, and flows for each game, and built their mobile-first experiences. Impostor includes identity, groups, rooms, privacy, synchronization, session recovery, and PWA support. Tutti Frutti has its own setup, answer, and review flow. The platform uses Next.js, Supabase, and PostgreSQL.

## Product and architecture decisions

### Authority in Postgres

The browser does not certify roles, votes, results, or sensitive transitions. Protected operations validate identity, permissions, and prior state in the backend or database.

### Realtime notifies; it does not authorize

Realtime and Presence notify clients of changes but do not replace persisted state. After reconnection, the client queries an authorized view and rebuilds the session.

### Each game keeps its own rules

Impostor and Tutti Frutti keep their own rules, states, and game loops. The platform shares group and room entry without turning their differences into a generic engine.

### In-person interaction

Phones handle setup, participation, and results. Conversation happens among the people gathered together.

## Use, quality, and boundaries

Impostor has been played in more than 100 games with family groups. Those sessions informed changes to wording, flows, and multi-device behavior. Tutti Frutti was added later as a second game; the same usage history does not apply to it.

Impostor includes unit and database tests, RLS/RPC validation, and basic synchronization tests. The games require connectivity. The platform prioritizes small groups who know each other; it does not offer matchmaking, chat, public profiles, global rankings, or remote games.
