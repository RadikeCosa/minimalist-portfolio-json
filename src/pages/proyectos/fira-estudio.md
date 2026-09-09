---
layout: "../../layouts/ProjectCaseLayout.astro"
title: "Fira Estudio"
description: "Catálogo web para un emprendimiento textil."
locale: "es"
alternateUrl: "/en/projects/fira-estudio/"
role: "Trabajo independiente · Producto e implementación"
stack:
  - "Next.js"
  - "TypeScript"
  - "Supabase"
  - "Playwright"
website: "https://fira-estudio-cyan.vercel.app/"
repository: "https://github.com/RadikeCosa/fira-estudio"
---

## Necesidad

Fira Estudio necesitaba presentar sus textiles, organizar el catálogo y facilitar consultas desde mobile sin implementar un e-commerce.

## Alcance

El sitio incluye home, categorías, catálogo, fichas de producto, variantes, materiales, cuidados, precios de referencia y contacto por WhatsApp.

No incluye carrito, checkout, pagos ni pedidos online. Los precios y la disponibilidad orientan una consulta manual.

## Mi aporte

Diseñé e implementé la experiencia, la estructura del catálogo, la navegación responsive, accesibilidad, metadata, SEO y pruebas unitarias y E2E.

## Decisión

El repositorio tuvo infraestructura de e-commerce. El producto vigente retiró carrito, checkout, Mercado Pago, webhooks, pedidos y emails transaccionales porque dejaron de corresponder al alcance.

La reducción limita dependencias y evita que la interfaz prometa una operación inexistente.

## Calidad y límites

El sitio incluye navegación responsive, metadata, sitemap, robots y estructura SEO básica. El catálogo se obtiene desde Supabase. No se presenta como e-commerce activo ni como integración de pagos pendiente.
