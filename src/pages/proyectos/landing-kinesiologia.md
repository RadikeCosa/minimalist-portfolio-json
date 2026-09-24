---
layout: "../../layouts/ProjectCaseLayout.astro"
title: "Landing para kinesiología domiciliaria"
description: "Sitio público para orientar consultas sobre un servicio de rehabilitación domiciliaria en Neuquén."
locale: "es"
alternateUrl: "/en/projects/home-rehabilitation-landing/"
role: "Producto digital · Análisis e implementación"
stack:
  - "Next.js 15"
  - "React 19"
  - "TypeScript"
  - "Tailwind CSS 4"
  - "Zod"
website: "https://kinesiologiaadomicilio.vercel.app/"
websiteLabel: "Sitio público"
repository: "https://github.com/RadikeCosa/kinesiologiaadomicilio"
---

## Contexto

Un servicio independiente de kinesiología domiciliaria en Neuquén necesitaba una presencia digital que explicara la atención, orientara a las personas y facilitara un primer contacto con información suficiente.

## Sitio público

La landing presenta el servicio y permite iniciar una orientación previa mediante **Evaluar**. El recorrido prepara a la persona para consultar y ofrece contacto por WhatsApp con mensajes iniciales estructurados.

La imagen de cabecera acompaña el contexto de atención domiciliaria; el sitio y su contenido orientan el siguiente paso sin prometer resultados clínicos.

<figure class="case-figure">
  <img
    src="/case-studies/kinesiology-landing/home-visit.png"
    alt="Imagen de atención domiciliaria: un kinesiólogo acompaña a una paciente mayor durante un ejercicio funcional."
    width="1536"
    height="1024"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Imagen utilizada por la landing para representar la atención domiciliaria.</figcaption>
</figure>

## Mi aporte

Diseñé e implementé la experiencia pública a partir del conocimiento del servicio y de las preguntas que suelen surgir antes de una primera consulta. También estructuré el recorrido de orientación y los canales de contacto.

## Decisiones

### Orientar antes de iniciar una conversación

El sitio explica para quién es el servicio y qué información ayuda a evaluar una consulta. El recorrido **Evaluar** y los mensajes preparados de WhatsApp reducen el intercambio inicial sin automatizar decisiones clínicas.

### Ajustar la captación al servicio

La landing busca consultas con contexto y dentro de la capacidad del profesional, en lugar de maximizar el volumen de contactos.

### Mantener pública solo la experiencia de captación

La landing permanece desplegada como sitio público. La aplicación para administrar pacientes, tratamientos y visitas es un proyecto separado con acceso privado; no se presenta como parte del sitio ni como una demo en línea.

## Implementación y alcance

El sitio utiliza Next.js, TypeScript y componentes responsivos. Incluye metadatos para buscadores, analítica en las rutas públicas y validación de los datos de orientación. La aplicación clínica privada se documenta por separado en el caso de la [aplicación clínica](../plataforma-clinica/).
