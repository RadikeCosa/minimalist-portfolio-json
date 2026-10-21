---
layout: "../../layouts/ProjectCaseLayout.astro"
presentation: "product"
title: "Aplicación clínica para kinesiología domiciliaria"
description: "Una aplicación para facilitar el trabajo cotidiano en kinesiología domiciliaria, diseñada desde la práctica profesional y con datos clínicos modelados en FHIR."
locale: "es"
alternateUrl: "/en/projects/clinical-platform/"
repository: "https://github.com/RadikeCosa/kinesiologia-clinica"
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

La aplicación busca facilitar el trabajo de un profesional de kinesiología domiciliaria. Su diseño parte de comprender cómo sucede la atención en la práctica: desde la consulta inicial y la coordinación de visitas hasta el registro, el seguimiento y los informes.

<h2 class="clinical-design-title">Registrar mejor, con menos esfuerzo</h2>

El trabajo actual se concentra en ajustar los recorridos a esa realidad y revisar qué partes de los formularios pueden simplificarse. La prioridad es que la información sea clara y útil para continuar la atención, con campos jerarquizados y validaciones que acompañen buenas prácticas de registro.

Las correcciones y anulaciones conservan su motivo. Los informes permiten revisar el contenido antes de guardarlo y descargarlo como PDF; sus reemplazos mantienen un historial.

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

<h2 class="clinical-standard-title">Construir sobre estándares existentes</h2>

Los datos clínicos se modelan con FHIR para aprovechar una estructura reconocida y evitar desarrollar un modelo propio donde el estándar ya resuelve la necesidad. El modelo clínico se mantiene separado de las pantallas para adaptar la experiencia al profesional.

La interoperabilidad es un objetivo del diseño; todavía no hay integraciones con otros sistemas.

## Acceso y privacidad desde el diseño

La aplicación implementa acceso con passkeys, sesiones por dispositivo y mecanismos de revocación y recuperación. Quedan pendientes validaciones con un autenticador independiente y del recorrido completo de recuperación.

Las decisiones de diseño y despliegue toman como referencia la [Ley 25.326 de Protección de los Datos Personales](https://www.argentina.gob.ar/normativa/nacional/64790/actualizacion) y la [Ley 26.529 de Derechos del Paciente, Historia Clínica y Consentimiento Informado](https://www.argentina.gob.ar/normativa/nacional/160432/actualizacion), considerando la confidencialidad, el acceso autorizado y el resguardo de la información clínica.

## Estado actual y evolución

<aside class="clinical-progress">
  <p>Estamos preparando el comienzo del uso con datos reales, ajustando los flujos y simplificando los formularios de registro. La preparación incluye evaluar el despliegue del servidor y completar las validaciones operativas pendientes.</p>
</aside>

La aplicación requiere conexión. El trabajo offline y el respaldo de borradores son líneas de evolución previstas.

A mediano plazo está prevista la incorporación de IA para asistir en la redacción de informes a partir de los registros clínicos disponibles. La propuesta es generar borradores que el profesional pueda revisar, corregir y validar antes de emitirlos, contemplando la privacidad de los datos y sin incorporar información que no esté respaldada por los registros.

<p class="clinical-demo-note">Las capturas públicas utilizan exclusivamente datos ficticios. La aplicación no tiene una demo pública.</p>
