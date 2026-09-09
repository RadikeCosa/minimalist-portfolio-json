---
layout: "../../../layouts/ProjectCaseLayout.astro"
title: "Juegos Familiares — Impostor"
description: "A multi-device social game with private roles, synchronization, and real-world use."
locale: "en"
alternateUrl: "/proyectos/impostor/"
role: "Product, architecture, and full-stack implementation"
stack:
  - "Next.js"
  - "TypeScript"
  - "Supabase"
  - "PostgreSQL"
website: "https://juegos-familiares.vercel.app/"
repository: "https://github.com/RadikeCosa/juegos-familiares"
---

## Product

Impostor is a game for groups gathered in the same place. Each participant uses a phone to receive a private role, vote, and see results; conversation happens face to face.

## Sessions and games

Juegos Familiares maintains lightweight identity, a player, their group, and a private word bank. Each person sees their own contributions and the available count, but not the complete bank.

One person creates a temporary room and shares a code or link. When play begins, the session fixes the participant list and keeps rounds, used words, and scores.

The complete loop includes:

1. creating or joining a room;
2. privately revealing each word or role;
3. discussing clues in person;
4. casting a secret vote;
5. resolving one tie-break vote when needed;
6. giving a discovered impostor a final guess;
7. displaying results and scores;
8. starting another round or ending the session.

## My contribution

I designed the rules, states, and mobile-first experience. I implemented identity, groups, rooms, privacy, synchronization, session recovery, PWA support, tests, and documentation with Next.js, Supabase, and PostgreSQL.

## Decisions

### Authority in Postgres

The browser does not certify roles, votes, results, or sensitive transitions. Protected operations validate identity, permissions, and prior state in the backend or database.

### Realtime notifies; it does not authorize

Realtime and Presence notify clients of changes but do not replace persisted state. After reconnection, the client queries an authorized view and rebuilds the session.

### Privacy per participant

The word, role, and votes are delivered only to the appropriate participant. Reads and RPCs restrict the data at its source.

### In-person interaction

The application handles setup, private reveal, voting, and results. Conversation remains off-screen.

## Real-world use and iteration

Impostor has been used in more than 100 games with family groups. Those sessions informed changes to wording, flows, and multi-device behavior.

This evidence describes real use and positive evaluation within that context. It does not imply commercial adoption, product-market fit, defect-free operation, or mass validation.

## Quality and boundaries

The implementation includes unit and database tests, RLS/RPC validation, and basic synchronization tests. PWA support improves access, but games require connectivity.

The current scope prioritizes small groups of people who know each other. It does not include matchmaking, chat, public profiles, global rankings, remote games, offline gameplay, dynamic entry during a session, or a generic game engine. A completed room is not reused, and the host decides when to end the session.
