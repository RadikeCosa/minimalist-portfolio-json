---
layout: "../../layouts/ProjectCaseLayout.astro"
title: "Juegos Familiares — Impostor"
description: "Juego social multi-dispositivo con roles privados, sincronización y uso real."
locale: "es"
alternateUrl: "/en/projects/impostor/"
role: "Producto, arquitectura e implementación full stack"
stack:
  - "Next.js"
  - "TypeScript"
  - "Supabase"
  - "PostgreSQL"
website: "https://juegos-familiares.vercel.app/"
repository: "https://github.com/RadikeCosa/juegos-familiares"
---

## Producto

Impostor es un juego para grupos reunidos físicamente. Cada participante usa su teléfono para recibir un rol privado, votar y ver resultados; la conversación ocurre cara a cara.

## Sesiones y partidas

Juegos Familiares mantiene una identidad liviana, un jugador, su grupo y un banco privado de palabras. Cada persona ve sus propios aportes y la cantidad disponible, pero no el banco completo.

Una persona crea una sala temporal y comparte un código o enlace. Al comenzar, la sesión fija los participantes y conserva rondas, palabras utilizadas y puntuación.

El ciclo completo incluye:

1. crear o unirse a una sala;
2. revelar en privado palabra o rol;
3. conversar y dar pistas presencialmente;
4. votar de forma secreta;
5. resolver un desempate cuando corresponde;
6. permitir el intento final del impostor descubierto;
7. mostrar resultado y puntuación;
8. iniciar otra ronda o cerrar la sesión.

## Mi aporte

Diseñé las reglas, los estados y la experiencia mobile-first. Implementé identidad, grupos, salas, privacidad, sincronización, recuperación de sesión, PWA, pruebas y documentación con Next.js, Supabase y PostgreSQL.

## Decisiones

### Autoridad en Postgres

El navegador no certifica roles, votos, resultados ni transiciones sensibles. Las operaciones protegidas validan identidad, permisos y estado previo en backend o base de datos.

### Realtime notifica, no autoriza

Realtime y Presence notifican cambios, pero no reemplazan el estado persistido. Tras una reconexión, el cliente consulta una vista autorizada y reconstruye la sesión.

### Privacidad por participante

La palabra, el rol y los votos se entregan solo a quien corresponde. Las lecturas y RPCs limitan los datos desde su origen.

### Interacción presencial

La aplicación gestiona preparación, revelación, votación y resultados. La conversación permanece fuera de la pantalla.

## Uso real e iteración

Impostor fue usado en más de 100 partidas con grupos familiares. Esas sesiones permitieron corregir textos, recorridos y comportamientos multi-dispositivo.

La evidencia describe uso real y evaluación positiva dentro de ese contexto. No implica adopción comercial, product-market fit, ausencia de defectos ni validación masiva.

## Calidad y límites

La implementación incluye pruebas unitarias y de base de datos, validaciones de RLS/RPCs y pruebas básicas de sincronización. La PWA facilita el acceso, pero las partidas requieren conexión.

El alcance actual prioriza grupos pequeños y conocidos. No incluye matchmaking, chat, perfiles públicos, ranking global, partidas remotas, gameplay offline, entrada dinámica durante una sesión ni un motor genérico de juegos. Una sala terminada no se reutiliza y el host decide cuándo cerrar la tanda.
