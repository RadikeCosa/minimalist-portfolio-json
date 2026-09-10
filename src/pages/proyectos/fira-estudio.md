---
layout: "../../layouts/ProjectCaseLayout.astro"
title: "Fira Estudio"
description: "Producto web para un emprendimiento textil, adaptado de e-commerce a catálogo según su capacidad operativa."
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

Fira Estudio necesitaba presentar y vender sus textiles online mediante un producto ajustado a su forma de trabajo.

## Primera versión

La primera versión incluyó home, categorías, catálogo, fichas de producto, variantes, carrito, checkout e integración certificada con Mercado Pago.

El flujo incluía pagos, pedidos, webhooks y emails transaccionales.

## Cambio de operación

La demanda superó la capacidad de producción del emprendimiento. Mantener compras automáticas permitía aceptar pedidos que después podían resultar difíciles de cumplir.

Replanteamos el producto como una vidriera digital. El sitio vigente conserva catálogo, variantes, materiales, cuidados y precios de referencia, pero los pedidos se consultan y confirman por teléfono según disponibilidad.

<figure class="case-figure wide">
  <img
    src="/case-studies/fira/catalog-production.webp"
    alt="Catálogo productivo de Fira Estudio con categorías y productos textiles destacados."
    width="1200"
    height="800"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Catálogo productivo: categorías y presentación de productos, con disponibilidad gestionada mediante consulta.</figcaption>
</figure>

## Mi aporte

Diseñé e implementé la experiencia, la estructura del catálogo, el flujo de compra original, la integración de pagos, la navegación responsive, accesibilidad, metadata, SEO y pruebas unitarias y E2E.

## Decisión

Retiramos carrito, checkout, Mercado Pago, webhooks, pedidos y emails transaccionales cuando dejaron de responder a la capacidad operativa real.

Así, el sitio pasó a acompañar una consulta y confirmación previa, en lugar de aceptar pedidos que el negocio necesitaba revisar antes.

## Calidad y límites

El sitio incluye navegación responsive, metadata, sitemap, robots y estructura SEO básica. El catálogo se obtiene desde Supabase.

La versión actual no incluye compras ni pagos online. Los precios orientan la consulta y la disponibilidad se confirma antes de tomar cada pedido.
