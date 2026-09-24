---
layout: "../../layouts/ProjectCaseLayout.astro"
title: "Aplicación clínica para kinesiología domiciliaria"
description: "Aplicación privada para organizar pacientes, tratamientos y visitas domiciliarias mediante flujos clínicos basados en FHIR."
locale: "es"
alternateUrl: "/en/projects/clinical-platform/"
role: "Producto HealthTech · Análisis funcional e implementación"
stack:
  - "Next.js 16"
  - "TypeScript"
  - "FHIR R4"
  - "Vitest"
  - "Playwright"
---

## Problema

En la atención domiciliaria, la agenda, los datos de cada paciente y el registro de las visitas pueden quedar repartidos entre mensajes, notas y memoria. La aplicación explora cómo ordenar ese trabajo para que el profesional pueda registrar una atención y retomar su seguimiento desde el teléfono.

## Aplicación privada

La pantalla de inicio reúne **Hoy**, **Agenda** y **Pacientes**. Desde allí se organizan tratamientos, citas y visitas; cada visita admite registro en vivo o diferido, evolución breve, intervención, próximo paso y evaluaciones opcionales.

<figure class="case-figure case-figure--crop wide">
  <div class="case-figure__media">
    <img
      src="/case-studies/clinical-app/today-fictional.png"
      alt="Vista Hoy de la aplicación clínica con agenda y visitas de demostración ficticias."
      width="750"
      height="2726"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Piloto local con datos ficticios: la vista Hoy ayuda a priorizar visitas pendientes y previstas.</figcaption>
</figure>

## Mi aporte

Traduzco procesos de atención domiciliaria a flujos, reglas y modelos de información. Participo en el análisis funcional, la arquitectura y la implementación, con documentación y pruebas para sostener las decisiones del producto.

## Decisiones

### Organizar el día alrededor de las visitas

Hoy reúne visitas en curso, pendientes y previstas; Agenda permite revisar fechas, y Pacientes ofrece acceso a la ficha y al tratamiento. Las citas y las atenciones son conceptos distintos, por lo que una cita puede reprogramarse o cancelarse sin crear un registro clínico.

### Mantener la atención breve y revisable

El registro habitual prioriza estado y respuesta e intervención realizada. Próximo paso, evaluaciones y procedimientos se agregan cuando aportan información al seguimiento. Una visita confirmada puede corregirse con motivo o anularse de forma justificada.

### Aislar FHIR de la interfaz

FHIR R4 modela los datos clínicos en el servidor. La interfaz trabaja con conceptos del producto; el adaptador traduce entre el modelo clínico y los flujos de la aplicación. Esto mantiene las dependencias y reglas de dominio fuera de las pantallas.

<figure class="case-figure case-figure--crop wide">
  <div class="case-figure__media">
    <img
      src="/case-studies/clinical-app/visit-fictional.png"
      alt="Formulario móvil para registrar una visita en el piloto local con datos ficticios."
      width="750"
      height="3778"
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption>Registro de una visita de demostración. Las capturas utilizan exclusivamente pacientes y datos inventados.</figcaption>
</figure>

## Estado, privacidad y límites

El piloto clínico online solo se habilita localmente contra un servidor HAPI FHIR descartable con datos ficticios. Las rutas y escrituras clínicas están bloqueadas en Vercel, y no existe una demo pública. El acceso con passkeys está implementado para una cuenta profesional provisionada; la validación completa en móvil, recuperación y revocación sigue pendiente.

La aplicación no está lista para datos clínicos reales. PWA, trabajo offline, sincronización posterior e informes exportables todavía no están implementados. Las capturas de esta página son del entorno local ficticio y no incluyen datos de pacientes reales.
