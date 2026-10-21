---
layout: "../../layouts/ProjectCaseLayout.astro"
presentation: "product"
title: "Aplicación clínica para kinesiología domiciliaria"
description: "Una aplicación para facilitar el trabajo cotidiano en kinesiología domiciliaria, diseñada desde la práctica profesional y con datos clínicos modelados en FHIR."
locale: "es"
alternateUrl: "/en/projects/clinical-platform/"
repository: "https://github.com/RadikeCosa/kinesiologiaadomicilio"
role: "Producto HealthTech · Análisis funcional e implementación"
status: "En desarrollo y evaluación · Sin demo pública"
stack:
  - "Next.js 16"
  - "TypeScript"
  - "FHIR R4"
  - "Vitest"
  - "Playwright"
---

## Una app pensada desde la práctica cotidiana

La aplicación busca facilitar el trabajo diario en kinesiología domiciliaria. Su diseño parte de entender cómo se organiza la atención en la práctica y adaptar la herramienta a esa forma de trabajar: planificar visitas, consultar antecedentes, registrar la evolución y compartir reportes desde el teléfono.

<h2 class="clinical-design-title">Facilitar el registro y cuidar su calidad</h2>

El desafío es hacer que registrar una atención resulte ágil y útil para el profesional. Los formularios se diseñan a partir del uso cotidiano, con información jerarquizada, campos claros y validaciones que acompañen buenas prácticas de registro y faciliten el seguimiento de cada paciente.

<div class="clinical-gallery wide">
  <figure>
    <a href="/case-studies/clinical-app/today-fictional.png"><img src="/case-studies/clinical-app/today-fictional.png" alt="Abrir captura completa de la vista Hoy, con agenda y visitas de pacientes ficticios." width="750" height="2726" loading="lazy" decoding="async" /></a>
    <figcaption>Organización de las visitas del día. Captura de demostración con datos ficticios.</figcaption>
  </figure>
  <figure>
    <a href="/case-studies/clinical-app/visit-fictional.png"><img src="/case-studies/clinical-app/visit-fictional.png" alt="Abrir captura completa del formulario móvil de registro de una visita, con datos ficticios." width="750" height="3778" loading="lazy" decoding="async" /></a>
    <figcaption>Registro de una atención desde el teléfono. Captura de demostración con datos ficticios.</figcaption>
  </figure>
</div>

<h2 class="clinical-standard-title">Partir de estándares existentes</h2>

El modelado de los datos clínicos se apoya en FHIR para aprovechar una estructura existente y reconocida, evitar desarrollar un modelo propio cuando el estándar ya resuelve esa necesidad y preparar una base para futuras integraciones.

Esta decisión forma parte del enfoque de trabajo: estudiar las soluciones disponibles, adaptarlas al contexto y construir sobre ellas. La interoperabilidad es un objetivo del diseño; todavía no se han implementado integraciones con otros sistemas.

## Privacidad y protección de datos

El desarrollo toma como referencia la [Ley 25.326 de Protección de los Datos Personales](https://www.argentina.gob.ar/normativa/nacional/64790/actualizacion) y la [Ley 26.529 de Derechos del Paciente, Historia Clínica y Consentimiento Informado](https://www.argentina.gob.ar/normativa/nacional/160432/actualizacion). La confidencialidad, el acceso autorizado y el resguardo de la información clínica forman parte de las decisiones de diseño y despliegue.

## En desarrollo y evaluación

<aside class="clinical-progress">
  <p>Actualmente estamos mejorando los formularios de registro, comenzando a trabajar con datos reales y evaluando dónde desplegar el servidor clínico. La autenticación está planteada con passkeys y se encuentra en proceso de implementación.</p>
</aside>

<p class="clinical-demo-note">Las capturas públicas utilizan exclusivamente pacientes y datos ficticios. La aplicación no tiene una demo pública.</p>
