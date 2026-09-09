---
layout: "../../layouts/ProjectCaseLayout.astro"
title: "Plataforma clínica para rehabilitación domiciliaria"
description: "Solución web para recibir consultas y gestionar registros de rehabilitación domiciliaria."
locale: "es"
alternateUrl: "/en/projects/clinical-platform/"
role: "Producto a medida · Análisis funcional e implementación"
period: "2020 — Actualidad"
stack:
  - "Next.js"
  - "TypeScript"
  - "FHIR"
  - "Vitest"
website: "https://kinesiologiaadomicilio.vercel.app/"
repository: "https://github.com/RadikeCosa/kinesiologiaadomicilio"
---

## Problema

Un kinesiólogo independiente necesitaba dos superficies conectadas: una vía pública para recibir un volumen acotado de consultas pertinentes y una herramienta clínica para registrar y organizar la atención.

La rehabilitación domiciliaria reúne datos administrativos, tratamientos, visitas y documentación. El sistema debía ordenar ese recorrido sin confundir una consulta con un tratamiento activo ni registrar visitas fuera de contexto.

## El producto

El sitio público presenta servicios y estructura la información necesaria antes del contacto. No busca maximizar consultas: procura recibir las que el profesional puede atender y reducir el intercambio inicial.

El área privada/local organiza solicitudes, pacientes, tratamientos, visitas y reportes. No es un SaaS público ni una plataforma multiusuario.

<figure class="case-figure wide">
  <img
    src="/case-studies/clinical-platform/admin-dashboard.png"
    alt="Panel administrativo privado con prioridades operativas, pacientes activos y pendientes."
    width="1440"
    height="1800"
    loading="lazy"
    decoding="async"
  />
  <figcaption>La consola prioriza estados, pendientes y próximas acciones para orientar el trabajo diario.</figcaption>
</figure>

## Flujo principal

Una consulta no equivale a un tratamiento. El alta inicial crea un paciente mínimo y una `ServiceRequest` en revisión. Solo una solicitud aceptada, válida y no utilizada puede iniciar un ciclo.

<div class="case-flow" aria-label="Flujo operativo principal">
  <ol class="case-flow__steps">
    <li>
      <span>Solicitud</span>
      <span class="case-flow__connector" aria-hidden="true">→</span>
    </li>
    <li>
      <span>Paciente</span>
      <span class="case-flow__connector" aria-hidden="true">→</span>
    </li>
    <li>
      <span>Tratamiento</span>
      <span class="case-flow__connector" aria-hidden="true">→</span>
    </li>
    <li>
      <span>Visita</span>
      <span class="case-flow__connector" aria-hidden="true">→</span>
    </li>
    <li>
      <span>Seguimiento</span>
    </li>
  </ol>
</div>

El tratamiento abre un `EpisodeOfCare`; las visitas se registran como `Encounter` dentro de ese episodio. Las fechas se validan contra su inicio y cierre. La ficha del paciente muestra la próxima acción según el estado actual.

<figure class="case-figure case-figure--crop wide">
  <div class="case-figure__media">
    <img
      src="/case-studies/clinical-platform/admin-encounters.png"
      alt="Vista de seguimiento clínico con métricas funcionales, estadísticas y visitas registradas."
      width="1440"
      height="2200"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>El seguimiento reúne visitas, métricas funcionales y evolución dentro del ciclo de tratamiento.</figcaption>
</figure>

## Mi aporte

Definí el flujo funcional, las reglas de negocio y las responsabilidades de cada pantalla. También implementé el producto, el modelado FHIR, las pruebas y la documentación.

## Decisiones

<section class="case-decisions" aria-label="Decisiones destacadas">
  <article class="case-decision">
    <h3>Consultas ajustadas a la capacidad</h3>
    <p>La página pública prioriza consultas pertinentes e información inicial estructurada por sobre el volumen.</p>
    <p><strong>Límite:</strong> no funciona como campaña de captación masiva ni garantiza disponibilidad.</p>
  </article>

  <article class="case-decision">
    <h3>Solicitud antes de tratamiento</h3>
    <p>La solicitud puede revisarse, aceptarse o cerrarse sin crear visitas. Así, un contacto inicial no se registra como caso activo.</p>
    <p><strong>Límite:</strong> agrega un paso antes del inicio.</p>
  </article>

  <article class="case-decision">
    <h3>Áreas diferenciadas pero conectadas</h3>
    <p>La interfaz separa datos administrativos, contexto clínico y tratamiento, y los conecta desde la ficha del paciente.</p>
    <p><strong>Límite:</strong> algunas acciones requieren navegar entre áreas.</p>
  </article>

  <article class="case-decision">
    <h3>Visitas dentro de un episodio activo</h3>
    <p>Las visitas requieren un <code>EpisodeOfCare</code> activo y fechas comprendidas dentro del ciclo.</p>
    <p><strong>Límite:</strong> no cubre escenarios complejos con múltiples episodios activos simultáneos; si aparecen inconsistencias, el sistema las detecta pero no las corrige automáticamente.</p>
  </article>

  <article class="case-decision">
    <h3>FHIR aislado de la UI</h3>
    <p>Una capa intermedia traduce los recursos FHIR a conceptos de interfaz como solicitud, tratamiento activo y próxima acción.</p>
    <p><strong>Límite:</strong> cada cambio de contrato exige alinear varias capas.</p>
  </article>
</section>

## FHIR y una posible interoperabilidad futura

FHIR R4 funciona como modelo clínico local. El núcleo utiliza `Patient`, `ServiceRequest`, `EpisodeOfCare`, `Encounter` y `Observation`; otros recursos agregan contexto cuando el flujo lo requiere.

[ANDES](https://docs.andes.gob.ar/) basa su capa de interoperabilidad en estándares HL7/FHIR. Usar la misma familia de estándares evita cerrar de entrada una futura línea de integración, pero no garantiza compatibilidad: sería necesario alinear perfiles, contratos, terminologías y seguridad.

## Calidad, privacidad y límites

El proyecto incluye tipado, validaciones de dominio, pruebas automatizadas y documentación del flujo y del modelo.

Las capturas y ejemplos públicos utilizan datos ficticios, sin información clínica identificable. El área administrativa es privada/local, está marcada como `noindex` y queda fuera del tracking público. El alcance actual no incluye multiusuario, autenticación productiva, integración o compatibilidad validada con ANDES, portal de pacientes ni una historia clínica completa.
