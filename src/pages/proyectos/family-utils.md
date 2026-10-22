---
layout: "../../layouts/ProjectCaseLayout.astro"
presentation: "product"
title: "Family Utils"
description: "Un conjunto de aplicaciones para organizar tareas, comidas, compras y actividades familiares desde un mismo espacio compartido."
locale: "es"
alternateUrl: "/en/projects/family-utils/"
role: "Diseño de producto, arquitectura e implementación full stack"
status: "Siete aplicaciones · PWA en producción"
stack:
  - "Next.js"
  - "React"
  - "TypeScript"
  - "PostgreSQL · Neon"
  - "Drizzle"
  - "Better Auth"
website: "https://family-utils-umber.vercel.app/"
websiteLabel: "Ver Family Utils"
coverImage: "/case-studies/family-utils/cover.webp"
coverImageAlt: "Inicio de Family Utils en una captura de demostración con datos ficticios."
coverImageCaption: "Inicio de la plataforma. Captura de demostración con datos ficticios."
---

## Un mismo espacio para lo cotidiano

Family Utils reúne herramientas familiares que suelen quedar repartidas entre mensajes, notas y listas. Los perfiles permiten compartir el espacio y definir permisos según cada aplicación. La interfaz está pensada primero para el teléfono.

## Siete aplicaciones para la familia

### Tareas y rutinas

Organizá las tareas del día, asigná responsabilidades y consultá rutinas e historial.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/tasks-mobile.webp" alt="Captura de demostración de Tareas en Family Utils, con una tarea asignada a un integrante ficticio." width="390" height="844" loading="lazy" decoding="async" />
  <figcaption>Tareas asignadas en una familia de demostración, con integrantes ficticios.</figcaption>
</figure>

### Menús

Propongan comidas y organicen las cuatro comidas diarias según la asistencia de cada integrante.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/menus-mobile.webp" alt="Captura de demostración de Menús con las cuatro comidas diarias y asistencia familiar." width="390" height="2135" loading="lazy" decoding="async" />
  <figcaption>Planificación de comidas y asistencia en datos de demostración.</figcaption>
</figure>

### Compras

Compartí listas con la familia y asigná quién puede editarlas.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/shopping-mobile.webp" alt="Captura de demostración de una lista de compras compartida." width="390" height="913" loading="lazy" decoding="async" />
  <figcaption>Una lista familiar compartida para organizar las compras.</figcaption>
</figure>

### Biblioteca

Reúnan libros, películas, música y otras obras; cada integrante puede guardar su propia mirada.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/library-mobile.webp" alt="Captura de demostración de la Biblioteca familiar con una obra ficticia." width="390" height="967" loading="lazy" decoding="async" />
  <figcaption>La biblioteca reúne obras y opiniones de los integrantes.</figcaption>
</figure>

### Cocina

Convertí unidades, ingredientes y temperaturas; los cálculos se realizan en el dispositivo.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/kitchen-mobile.webp" alt="Captura de demostración del conversor de medidas de Cocina." width="390" height="1334" loading="lazy" decoding="async" />
  <figcaption>Conversión de medidas directamente en el dispositivo.</figcaption>
</figure>

### Deportes

Consultá agendas, resultados y pronósticos familiares para River, UFC y Champions.

<div class="family-utils-screens">
  <figure class="case-cover case-cover--screen">
    <img src="/case-studies/family-utils/sports-river-mobile.webp" alt="Captura de demostración de Deportes con la agenda de River." width="390" height="2189" loading="lazy" decoding="async" />
    <figcaption>Agenda de River.</figcaption>
  </figure>
  <figure class="case-cover case-cover--screen">
    <img src="/case-studies/family-utils/sports-ufc-mobile.webp" alt="Captura de demostración de Deportes con una cartelera de UFC." width="390" height="2692" loading="lazy" decoding="async" />
    <figcaption>Cartelera de UFC.</figcaption>
  </figure>
  <figure class="case-cover case-cover--screen">
    <img src="/case-studies/family-utils/sports-champions-mobile.webp" alt="Captura de demostración de Deportes con partidos de Champions League." width="390" height="2286" loading="lazy" decoding="async" />
    <figcaption>Partidos de Champions League.</figcaption>
  </figure>
</div>

La agenda y los resultados se administran como contenido curado; la app no sincroniza automáticamente proveedores deportivos.

### Entrenamiento

Armá rutinas personales y registrá sesiones e historial.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/training-mobile.webp" alt="Captura de demostración de Entrenamiento con una rutina ficticia." width="390" height="844" loading="lazy" decoding="async" />
  <figcaption>Rutina e historial personal en una cuenta de demostración.</figcaption>
</figure>

## Un espacio con perfiles y permisos

La gestión familiar reúne perfiles y permite organizar quién participa del espacio compartido.

<figure class="case-cover case-cover--screen">
  <img src="/case-studies/family-utils/family-mobile.webp" alt="Captura de demostración de la gestión de perfiles familiares ficticios." width="390" height="1381" loading="lazy" decoding="async" />
  <figcaption>Perfiles de una familia ficticia usados para la demostración.</figcaption>
</figure>

## Decisiones técnicas

Next.js App Router, React, TypeScript y CSS Modules; PostgreSQL 18 en Neon con Drizzle; Better Auth y despliegue en Vercel. Los permisos se validan en el servidor. Las transacciones y el control de versiones protegen los cambios concurrentes; las tareas se actualizan mediante revisiones y ETags. Playwright cubre recorridos móviles.

La biblioteca y Entrenamiento se habilitan mediante configuración de la aplicación. Cocina resuelve sus conversiones en el dispositivo. Deportes presenta datos curados en la plataforma.

<figure class="case-cover">
  <img src="/case-studies/family-utils/home-desktop.webp" alt="Captura de escritorio de la portada de Family Utils, con ejemplos familiares ficticios." width="1200" height="800" loading="lazy" decoding="async" />
  <figcaption>Portada en escritorio. Todos los datos de estas capturas son ficticios y se prepararon para la demostración.</figcaption>
</figure>

Las capturas muestran la versión publicada y se tomaron en un entorno aislado con contenido de demostración.

<style>
  .family-utils-screens { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; align-items: start; }
  .family-utils-screens .case-cover--screen { width: 100%; }
  @media (max-width: 767px) { .family-utils-screens { grid-template-columns: 1fr; } }
</style>
