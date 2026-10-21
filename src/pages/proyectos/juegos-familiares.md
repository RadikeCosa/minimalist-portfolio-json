---
layout: "../../layouts/ProjectCaseLayout.astro"
presentation: "product"
title: "Juegos Familiares"
description: "Dos juegos, una misma idea: facilitar el encuentro y el juego en persona. Impostor y Tutti Frutti reúnen al grupo alrededor de una partida; cada participante usa su teléfono y la conversación sucede cara a cara."
locale: "es"
alternateUrl: "/en/projects/family-games/"
role: "Producto, arquitectura e implementación full stack"
status: "Dos juegos publicados"
stack:
  - "Next.js"
  - "TypeScript"
  - "Supabase"
  - "PostgreSQL"
website: "https://juegos-familiares.vercel.app/"
websiteLabel: "Jugar"
repository: "https://github.com/RadikeCosa/juegos-familiares"
---

## Dos juegos para compartir

<div class="game-grid wide">
  <section class="game-showcase game-showcase--red" aria-labelledby="impostor">
    <h3 id="impostor">Impostor</h3>
    <p>Palabras, pistas y votación secreta para descubrir quién tiene un rol diferente. Cada persona recibe su información en privado desde el teléfono; las pistas y la conversación se comparten en persona.</p>
    <figure>
      <div class="game-screens">
        <a href="/case-studies/impostor/private-role-local.webp"><img src="/case-studies/impostor/private-role-local.webp" alt="Abrir captura de Impostor: palabra y rol privados de un participante de prueba." width="395" height="581" loading="lazy" decoding="async" /></a>
        <a href="/case-studies/impostor/voting-local.webp"><img src="/case-studies/impostor/voting-local.webp" alt="Abrir captura de Impostor: votación secreta en una sala de prueba." width="395" height="581" loading="lazy" decoding="async" /></a>
      </div>
      <figcaption>Información privada y votación desde sesiones independientes. Tocá una captura para ampliarla.</figcaption>
    </figure>
  </section>
  <section class="game-showcase game-showcase--blue" aria-labelledby="tutti-frutti">
    <h3 id="tutti-frutti">Tutti Frutti</h3>
    <p>Una letra, varias categorías y respuestas para comparar en grupo. Cada participante completa su ronda desde el teléfono y después revisan las respuestas antes de ver los resultados.</p>
    <figure>
      <a class="game-round" href="/case-studies/juegos-familiares/tutti-frutti-round.png"><img src="/case-studies/juegos-familiares/tutti-frutti-round.png" alt="Abrir captura completa de una ronda de demostración de Tutti Frutti, con letra y cinco categorías." width="1416" height="4722" loading="lazy" decoding="async" /></a>
      <figcaption>Una misma ronda, con respuestas desde cada teléfono. Tocá la captura para verla completa.</figcaption>
    </figure>
  </section>
</div>

<h2 class="game-technical-title">El desafío técnico: mantener la partida sincronizada</h2>

<div class="game-technical wide">
  <section aria-labelledby="realtime">
    <h3 id="realtime">Cambios en tiempo real</h3>
    <p>Supabase Realtime notifica los cambios de la partida a los dispositivos conectados, para que cada participante pueda seguir lo que sucede.</p>
  </section>
  <section aria-labelledby="reglas">
    <h3 id="reglas">Reglas validadas en PostgreSQL</h3>
    <p>En Impostor, las acciones protegidas validan identidad, permisos y estado de la partida en el backend o la base de datos. Los roles, votos y resultados no dependen de lo que declare el navegador.</p>
  </section>
  <section aria-labelledby="reconexion">
    <h3 id="reconexion">Recuperación de sesión</h3>
    <p>Tras una desconexión, el cliente de Impostor consulta el estado persistido y autorizado para reconstruir la sesión. Las notificaciones en tiempo real acompañan ese estado, sin reemplazarlo.</p>
  </section>
</div>

## Desarrollado y probado en uso

Diseñé los recorridos, las reglas y los estados de cada juego e implementé la plataforma con Next.js, TypeScript, Supabase y PostgreSQL. Cada juego conserva su propia lógica y comparte el acceso a grupos y salas.

<aside class="game-usage">
  <p class="game-usage__lead">Impostor: más de 100 partidas familiares</p>
  <p>El uso permitió ajustar textos, recorridos y comportamientos entre dispositivos. Tutti Frutti se incorporó después y tiene su propio recorrido de uso.</p>
</aside>

La implementación de Impostor incluye pruebas unitarias y de base de datos, validaciones de permisos y operaciones protegidas (RLS/RPCs), y comprobaciones básicas de sincronización.

<p class="game-note">Pensado para grupos pequeños que se reúnen en persona. Las partidas requieren conexión a internet.</p>
