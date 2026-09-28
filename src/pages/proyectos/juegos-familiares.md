---
layout: "../../layouts/ProjectCaseLayout.astro"
title: "Juegos Familiares"
description: "Plataforma de juegos presenciales para compartir en grupo, con Impostor y Tutti Frutti."
locale: "es"
alternateUrl: "/en/projects/family-games/"
role: "Producto, arquitectura e implementación full stack"
status: "Dos juegos publicados · Impostor: más de 100 partidas familiares"
problem: "Facilitar juegos presenciales donde cada participante usa su teléfono para jugar en grupo."
contribution: "Diseño e implementación de Impostor y Tutti Frutti en una plataforma web mobile-first."
decision: "Mantener las reglas y los estados de cada juego independientes, con capacidades de plataforma donde son compartidas."
coverImage: "/case-studies/juegos-familiares/cover-2026-09-27.webp"
coverImageAlt: "Portada de Juegos Familiares con las opciones Impostor y Tutti Frutti."
coverImageCaption: "Portada pública capturada el 27 de septiembre de 2026."
stack:
  - "Next.js"
  - "TypeScript"
  - "Supabase"
  - "PostgreSQL"
website: "https://juegos-familiares.vercel.app/"
repository: "https://github.com/RadikeCosa/juegos-familiares"
---

## La plataforma

Juegos Familiares reúne experiencias presenciales para grupos pequeños. Cada persona participa desde su teléfono y comparte la conversación cara a cara con el grupo.

La portada ofrece dos juegos: **Impostor**, basado en roles y votación secreta, y **Tutti Frutti**, basado en categorías y respuestas por ronda. Ambos requieren que las personas estén en un grupo y se conecten a una sala para jugar.

## Impostor

Cada participante recibe en privado una palabra o un rol, conversa y da pistas, vota y ve el resultado. Una persona crea una sala temporal y comparte un código o enlace. La sesión conserva las rondas, palabras utilizadas y puntuación.

El ciclo incluye:

1. crear o unirse a una sala;
2. revelar en privado la palabra o el rol;
3. conversar y dar pistas presencialmente;
4. votar de forma secreta;
5. resolver un desempate cuando corresponde;
6. permitir el intento final del impostor descubierto;
7. mostrar el resultado y la puntuación;
8. iniciar otra ronda o cerrar la sesión.

<figure class="case-state-pair wide">
  <div class="case-state-pair__grid">
    <img
      src="/case-studies/impostor/private-role-local.webp"
      alt="Pantalla privada de Impostor mostrando la palabra asignada y el control para ocultarla."
      width="395"
      height="581"
      loading="lazy"
      decoding="async"
    />
    <img
      src="/case-studies/impostor/voting-local.webp"
      alt="Pantalla de votación de Impostor en una sesión local con participantes de prueba."
      width="395"
      height="581"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Una ronda en navegadores separados: cada participante recibe información privada y vota desde su propia sesión.</figcaption>
</figure>

## Tutti Frutti

Tutti Frutti suma un segundo juego presencial a la plataforma. El grupo crea o abre una sala, configura la partida, responde categorías por letra y revisa las respuestas antes de comparar resultados.

<figure class="case-figure case-figure--screen">
  <img
    src="/case-studies/juegos-familiares/tutti-frutti-round.png"
    alt="Partida de Tutti Frutti en una sala, con la letra de la ronda y campos para responder cinco categorías."
    width="1416"
    height="4722"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Partida de demostración: cada persona completa sus respuestas desde su teléfono.</figcaption>
</figure>

## Mi aporte

Diseñé las reglas, estados y recorridos de cada juego, y desarrollé sus experiencias mobile-first. La plataforma incluye un manifest y un service worker para instalarse y guardar recursos estáticos; las partidas requieren conexión y no funcionan offline. Impostor incluye identidad, grupos, salas, privacidad, sincronización y recuperación de sesión. Tutti Frutti tiene su propio flujo de configuración, respuestas y revisión. La plataforma usa Next.js, Supabase y PostgreSQL.

## Decisiones de producto y arquitectura

### Autoridad en Postgres

El navegador no certifica roles, votos, resultados ni transiciones sensibles. Las operaciones protegidas validan identidad, permisos y estado previo en backend o base de datos.

### Realtime notifica, no autoriza

Realtime y Presence notifican cambios, pero no reemplazan el estado persistido. Tras una reconexión, el cliente consulta una vista autorizada y reconstruye la sesión.

### Reglas propias para cada juego

Impostor y Tutti Frutti conservan sus reglas, estados y ciclos de partida. La plataforma comparte la entrada a grupos y salas sin convertir sus diferencias en un motor genérico.

### Interacción presencial

Los teléfonos gestionan preparación, participación y resultados. La conversación ocurre entre las personas reunidas.

## Uso, calidad y límites

Impostor fue usado en más de 100 partidas con grupos familiares. Esas sesiones permitieron corregir textos, recorridos y comportamientos multi-dispositivo. Tutti Frutti se incorporó después como un segundo juego; no se le atribuye ese historial de uso.

La implementación de Impostor incluye pruebas unitarias y de base de datos, validaciones de RLS/RPCs y pruebas básicas de sincronización. Los juegos requieren conexión. La plataforma prioriza grupos pequeños y conocidos; no ofrece matchmaking, chat, perfiles públicos, ranking global ni partidas remotas.
