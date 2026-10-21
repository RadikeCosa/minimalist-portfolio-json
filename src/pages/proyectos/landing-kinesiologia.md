---
layout: "../../layouts/ProjectCaseLayout.astro"
presentation: "product"
title: "Landing para kinesiología domiciliaria"
description: "Una web pensada para facilitar la primera consulta de kinesiología a domicilio en Neuquén, con orientación previa, SEO local y contacto por WhatsApp."
locale: "es"
alternateUrl: "/en/projects/home-rehabilitation-landing/"
role: "Diseño, contenido e implementación web"
status: "Sitio público · Publicado"
stack:
  - "Next.js 15"
  - "React 19"
  - "TypeScript"
  - "Tailwind CSS 4"
website: "https://kinesiologiaadomicilio.vercel.app/"
websiteLabel: "Ver sitio"
repository: "https://github.com/RadikeCosa/kinesiologiaadomicilio"
---

## Una web pensada para facilitar la primera consulta

Diseñé e implementé la landing a partir del conocimiento del servicio y de las dudas que suelen aparecer antes de una primera consulta. La presentación del profesional, la ubicación y las situaciones atendidas ayudan a entender qué ofrece la atención domiciliaria y si tiene sentido consultar por el caso propio o de un familiar.

<figure class="case-figure wide">
  <a href="/case-studies/kinesiology-landing/cover-2026-09-27.webp"><img src="/case-studies/kinesiology-landing/cover-2026-09-27.webp" alt="Abrir captura de la landing de kinesiología domiciliaria en Neuquén, con presentación del profesional y opciones de contacto." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>Presentación del servicio y del profesional. Captura pública de septiembre de 2026; se puede ampliar.</figcaption>
</figure>

<h2 class="landing-guidance-title">Orientar y contactar con contexto</h2>

El recorrido **Evaluar** permite elegir una situación, leer una orientación y abrir WhatsApp con un mensaje preparado para esa consulta. Es una selección de opciones: acompaña el primer contacto sin automatizar una evaluación clínica.

Los mensajes también se adaptan al punto de entrada, como una consulta para un familiar o por un servicio específico. El objetivo es facilitar el inicio de la conversación y dar contexto al profesional.

<h2 class="landing-quality-title">SEO local, experiencia móvil y medición</h2>

Las páginas de inicio, servicios y orientación tienen títulos y descripciones propios, URLs canónicas y metadatos para compartir enlaces. El sitemap y los datos estructurados describen el servicio y su ubicación en Neuquén.

La implementación utiliza imágenes adaptadas al tamaño de pantalla, carga prioritaria de la imagen principal, botones con tamaño táctil, foco visible y un enlace para saltar al contenido. Hay pruebas de los metadatos, sitemap, mensajes y eventos de analítica.

La medición registra desde qué botón se inicia el contacto y la profundidad de lectura. El evento `whatsapp_intent` representa intención de contacto: un clic no confirma que se haya concretado una consulta. Antes de enviar el destino a analítica, se eliminan los parámetros con el mensaje precargado para no incluir su contenido.

## Alcance actual y próximos pasos

<aside class="landing-scope">
  <p>El contacto continúa por WhatsApp para conversar sobre el caso y la disponibilidad. La web no confirma si ese clic terminó en una consulta o un turno. Una posible evolución sería llevar un seguimiento de consultas en una herramienta separada, sin enviar información clínica a la analítica.</p>
</aside>

El rendimiento móvil también requiere seguimiento. Una auditoría de septiembre detectó margen de mejora en inicio y servicios; la interfaz se modificó después. El siguiente paso de evaluación es repetir las mediciones sobre la versión vigente antes de atribuir mejoras de velocidad o resultados de captación.
