# Portfolio Stage 1 — Content Blueprint — September 2026

Estado: dirección editorial aprobada por Ramiro el 2026-09-09
Fecha: 2026-09-09
Baseline factual: `docs/professional-baseline-facts-2026-09.md`
Arquitectura de referencia: `docs/portfolio-content-information-architecture-brief-2026-09.md`
Alcance: contenido y jerarquía ES/EN de la home, relación CV–portfolio, fichas de proyectos y CTAs
Fuera de alcance del documento: edición del CV, commit, push y deploy

## 1. Objetivo editorial

La home debe permitir que una persona que evalúa el perfil comprenda en menos de un minuto:

1. qué tipo de problemas puede resolver Ramiro;
2. por qué su experiencia sanitaria es relevante para tecnología;
3. qué productos prueban esa capacidad;
4. qué roles busca y con qué disponibilidad;
5. cómo profundizar o iniciar contacto.

La narrativa no es “profesional sanitario que intenta empezar de nuevo”, sino “profesional que amplió su capacidad de resolver problemas clínicos y operativos mediante producto y software”.

## 2. Posicionamiento aprobado y refinado

### ES

**Análisis funcional · Implementación · Producto digital**

### EN

**Functional analysis · Implementation · Digital products**

### Roles de mayor encaje

- Functional Analyst / Business Analyst;
- Implementation Analyst / Specialist;
- Product Analyst / Product Operations;
- las variantes equivalentes en HealthTech o Clinical Systems, donde el dominio sanitario aporte una ventaja;
- posiciones web/full stack junior o de transición donde la capacidad de implementación resulte relevante.

El desarrollo full stack funciona como capacidad demostrable, no como el único eje de identidad. HealthTech es una especialización con evidencia fuerte, no el límite del posicionamiento general.

## 3. Arquitectura definitiva propuesta para la home

1. Hero y propuesta de valor.
2. Diferencial profesional.
3. Casos destacados.
4. Experiencia y recorrido.
5. Capacidades.
6. Contacto y CV.

La formación detallada no vive en la home. Sus datos canónicos se conservan para el CV general. Una mención breve a la formación de base puede formar parte de una futura narrativa `Perfil / Sobre mí` si ayuda a explicar el recorrido; no debe convertirse en otra sección curricular ni competir con los casos.

La command palette no debe ser una acción principal. Recomendación: retirarla de mobile y de la navegación visible; conservarla únicamente como mejora opcional de escritorio si no compite con los CTAs ni introduce problemas de accesibilidad.

## 4. Hero

### Copy ES recomendado

**Título**

`Análisis, implementación y producto.`

**Descripción**

`Analizo procesos, defino flujos y reglas de negocio, y desarrollo soluciones web.`

**Contexto profesional**

`Experiencia en salud desde 2004 · Productos digitales desde 2020`

**Ubicación**

`Neuquén, Argentina`

**Acciones**

- primaria: `Ver proyectos`;
- secundaria: `Descargar CV`;
- apoyo: `Contactarme`, LinkedIn y GitHub.

### Recommended EN copy

**Heading**

`Analysis, implementation, and product.`

**Description**

`I analyze processes, define workflows and business rules, and build web solutions.`

**Professional context**

`Healthcare experience since 2004 · Digital products since 2020`

**Location**

`Neuquén, Argentina`

**Actions**

- primary: `View selected work`;
- secondary: `Download résumé`;
- supporting: `Get in touch`, LinkedIn, and GitHub.

### Criterio

El hero no enumera tecnologías ni explica toda la transición. Presenta una promesa profesional, evidencia temporal breve y una acción concreta.

## 5. Diferencial profesional

### Título ES

`Del proceso real a una solución implementable`

### Intro ES

`Mi diferencial no es solamente conocer el ámbito sanitario ni solamente desarrollar software: es poder conectar ambos lados del problema.`

### Tres capacidades ES

#### Dominio clínico y operativo

`Experiencia directa en rehabilitación, atención domiciliaria, coordinación, auditoría y documentación. Comprendo los actores, restricciones y decisiones que existen detrás de un flujo clínico.`

#### Análisis funcional y producto

`Transformo necesidades ambiguas en recorridos, estados, reglas de negocio, prioridades y límites que pueden discutirse, validarse e implementarse.`

#### Implementación y calidad

`Construyo productos web, modelo datos, documento decisiones y verifico comportamientos mediante testing, manteniendo explícito qué está resuelto y qué queda fuera de alcance.`

### EN title

`From real-world workflows to implementable solutions`

### EN intro

`My value is not only understanding healthcare or only building software. It is being able to connect both sides of the problem.`

### Three capabilities EN

#### Clinical and operational domain knowledge

`Hands-on experience in rehabilitation, home care, coordination, clinical review, and documentation. I understand the people, constraints, and decisions behind clinical workflows.`

#### Functional analysis and product thinking

`I turn ambiguous needs into user journeys, states, business rules, priorities, and boundaries that teams can discuss, validate, and implement.`

#### Implementation and quality

`I build web products, model data, document decisions, and verify behavior through testing while keeping solved problems and current limitations explicit.`

## 6. Casos destacados

### 6.1 Plataforma clínica para rehabilitación domiciliaria

**Jerarquía:** caso principal.

**Badge ES:** `Caso principal · HealthTech`

**Badge EN:** `Featured case · HealthTech`

**Descripción corta ES**

`Producto HealthTech que conecta captación pública y gestión clínica privada/local para organizar solicitudes, pacientes, tratamientos, visitas y documentación en rehabilitación domiciliaria.`

**Short description EN**

`A HealthTech product connecting public patient acquisition with a private local clinical workflow for requests, patients, treatment cycles, visits, and documentation in home rehabilitation.`

**Señales de evidencia**

- proceso clínico real;
- análisis funcional y reglas de negocio;
- FHIR R4 y HAPI FHIR local;
- Next.js, TypeScript y testing;
- cinco capturas sanitizadas con datos ficticios.

**Links**

- `Ver caso` / `View case`;
- `Ver sitio público` / `View public site`;
- `Repositorio` / `Source code`.

**Límite visible breve**

`La superficie clínica es privada/local y no se presenta como SaaS, demo editable ni interoperabilidad productiva.`

### 6.2 Juegos Familiares — Impostor

**Jerarquía:** segundo caso principal y prueba de ingeniería de producto.

**Badge ES:** `Producto en uso · 100+ partidas`

**Badge EN:** `In active use · 100+ sessions`

**Descripción corta ES**

`Juego social mobile-first para grupos presenciales, con salas multi-dispositivo, información privada por participante, votaciones y puntuación sobre un estado autoritativo en Postgres.`

**Short description EN**

`A mobile-first social game for in-person groups, with multi-device rooms, private participant information, voting, and scoring backed by authoritative state in Postgres.`

**Evidencia de uso ES**

`Usado en más de 100 partidas reales con grupos familiares y mejorado a partir de la observación directa de esas sesiones.`

**Evidence of use EN**

`Used in more than 100 real sessions with family groups and improved through direct observation of those sessions.`

**Señales de evidencia**

- Next.js, React y TypeScript;
- Supabase Auth y Postgres;
- RLS y RPCs autoritativas;
- Realtime, Presence y recuperación de sesión;
- PWA y testing de aplicación/base de datos.

**Links**

- `Ver caso` / `View case`, cuando exista la ruta;
- `Jugar` / `Play` → `https://juegos-familiares.vercel.app/`;
- `Repositorio` / `Source code`.

**Límite visible breve**

`Diseñado para grupos que juegan presencialmente con conexión; no es un juego remoto ni offline.`

### 6.3 Fira Estudio

**Jerarquía:** caso complementario.

**Badge ES:** `Trabajo independiente · Catálogo digital`

**Badge EN:** `Independent work · Digital catalog`

**Descripción corta ES**

`Vidriera digital para un emprendimiento textil, con catálogo, detalle de productos, precios de referencia y consultas de disponibilidad, enfocada en UX, accesibilidad y SEO.`

**Short description EN**

`A digital storefront for a textile business, with product catalog, detail pages, reference pricing, and availability inquiries, focused on UX, accessibility, and SEO.`

**Señales de evidencia**

- trabajo para un tercero;
- catálogo y navegación responsive;
- accesibilidad y metadata;
- testing unitario y E2E;
- reducción deliberada del antiguo alcance transaccional.

**Links**

- `Ver proyecto` / `View project` → `https://fira-estudio-cyan.vercel.app/`;
- `Repositorio` / `Source code`;
- `Ver ficha` / `Read overview`, si se crea un mini-caso.

**Límite visible breve**

`El alcance vigente es catálogo y consulta. No incluye carrito, checkout ni pagos online.`

## 7. Experiencia y recorrido

### Título ES

`Experiencia profesional`

### Título EN

`Professional experience`

### 7.1 Desarrollo de productos digitales

**Período:** `2020 — Actualidad`

**Contexto recomendado:** `Proyectos propios y trabajo independiente`

**ES**

`Diseño y desarrollo productos web para necesidades reales, con foco en procesos, reglas de negocio, datos, experiencia de uso, testing y documentación. En HealthTech aplico conocimiento directo del dominio clínico; en otros proyectos trabajo sobre producto e implementación para usuarios y clientes concretos.`

**EN**

`I design and build web products for real needs, focusing on workflows, business rules, data, user experience, testing, and documentation. In HealthTech, I apply direct clinical domain knowledge; in other projects, I work on product and implementation for real users and clients.`

### 7.2 Coordinación, auditoría y procesos de salud

**Período:** `2013 — 2024`

**Contexto:** `Alegra Salud y otros servicios de internación domiciliaria`

**ES**

`Coordiné servicios de atención domiciliaria y trabajé sobre procesos que conectaban pacientes, familias, profesionales y áreas administrativas. Revisé prestaciones y documentación, detecté necesidades operativas y participé en la creación conjunta de un área de cuidados paliativos.`

**EN**

`I coordinated home-care services and worked on processes connecting patients, families, healthcare professionals, and administrative teams. I reviewed service delivery and documentation, identified operational needs, and contributed to the joint creation of a palliative care service area.`

### 7.3 Práctica clínica y rehabilitación

**Período:** `2004 — Actualidad`

**Contexto:** `Práctica independiente`

**ES**

`Experiencia continua en rehabilitación clínica y deportiva. Trabajé con distintos equipos y deportistas de alto rendimiento en procesos de recuperación y planificación anual, además de evaluación funcional, planificación terapéutica, seguimiento y coordinación con pacientes y otros profesionales.`

**EN**

`Continuous experience in clinical and sports rehabilitation. I have worked with different teams and high-performance athletes on recovery processes and annual planning, alongside functional assessment, treatment planning, follow-up, and coordination with patients and other professionals.`

### Nota cronológica

No presentar estas etapas como una sustitución lineal. La práctica clínica continúa y desde 2020 se superpone con el desarrollo de productos digitales.

## 8. Capacidades demostradas

Eliminar niveles como `intermedio` o `avanzado`. Agrupar por utilidad profesional y vincular cada grupo con casos.

### Dominio y operaciones

- procesos clínicos y atención domiciliaria;
- coordinación y auditoría;
- documentación y seguimiento;
- rehabilitación clínica y deportiva.

### Análisis y producto

- relevamiento y análisis funcional;
- flujos, estados y reglas de negocio;
- UX operativa y accesibilidad;
- priorización y definición de alcance.

### Ingeniería y datos

- Next.js, React y TypeScript;
- Node.js;
- PostgreSQL y Supabase;
- FHIR R4 y HAPI FHIR;
- Git y despliegue en Vercel.

### Calidad

- testing unitario, integración y E2E;
- validación manual de flujos;
- autorización con RLS;
- documentación técnica y de producto;
- mantenimiento e iteración sobre productos desplegados.

## 9. Perfil, formación, credenciales e idiomas

La home no incluye una sección de formación. El detalle de título, institución, fechas, cursos e idioma pertenece al CV general.

Se evaluará una futura página `Perfil / Sobre mí` con una función narrativa concreta: explicar brevemente cómo se combinan la formación de base, la experiencia operativa y la construcción de productos digitales. Si se crea, podrá mencionar de forma resumida la `Licenciatura en Kinesiología y Fisioterapia` y la formación posterior en desarrollo, pero no reproducirá una lista curricular.

Hasta cerrar ese contenido, no se agrega una ruta ni un CTA de perfil.

## 10. Contacto y cierre

### ES

**Título**

`Contacto`

**Texto**

`Busco oportunidades en análisis funcional, implementación y producto digital.`

**Acciones**

- `Enviar email`;
- `LinkedIn`;
- `Descargar CV`;
- teléfono visible: `+54 9 299 521-7189`;
- GitHub como enlace secundario.

### EN

**Title**

`Contact`

**Text**

`I am looking for opportunities in functional analysis, implementation, and digital products.`

**Actions**

- `Email me`;
- `LinkedIn`;
- `Download résumé`;
- visible phone: `+54 9 299 521-7189`;
- GitHub as a secondary link.

## 11. CV general coordinado

### Función

El CV general será la pieza breve de selección y el documento público descargable. El portfolio será la pieza de evidencia. Las variantes por búsqueda derivan del CV general, pero no se publican todas en la web.

### Encabezado recomendado ES

`Análisis funcional · Implementación · Producto digital`

### Resumen recomendado ES

`Profesional con experiencia en análisis de procesos, coordinación de servicios y desarrollo de productos digitales. Desde 2020 diseño y construyo soluciones web para necesidades reales, combinando análisis funcional, reglas de negocio, experiencia de uso e implementación técnica. Mi trayectoria en salud aporta conocimiento de dominio para HealthTech sin limitar mi aporte a ese sector.`

### Recommended EN heading

`Functional Analysis · Implementation · Digital Products`

### Recommended EN summary

`Professional with experience in process analysis, service coordination, and digital product development. Since 2020, I have designed and built web solutions for real needs, combining functional analysis, business rules, user experience, and technical implementation. My healthcare background adds domain knowledge for HealthTech without limiting my contribution to that industry.`

### Proyectos en el CV general

1. Plataforma clínica para rehabilitación domiciliaria.
2. Juegos Familiares — Impostor.
3. Fira solo como proyecto adicional breve si el espacio lo permite.

Cada proyecto debe enlazar directamente a su caso o producto. El CV no debe repetir la explicación extensa del portfolio.

### Variantes previstas

- HealthTech / Clinical Systems;
- Implementation / Functional Analysis;
- técnica o sector público;
- full stack cuando el aviso tenga encaje suficiente.

Las variantes cambian orden, selección y vocabulario del aviso, pero no cronología, títulos, estados de producto ni responsabilidades.

## 12. SEO y previews editoriales

### Home ES

**Title**

`Ramiro Nicolás Cosa | Análisis funcional, implementación y producto digital`

**Description**

`Portfolio de Ramiro Nicolás Cosa: análisis funcional, implementación y desarrollo de productos digitales, con experiencia operativa y especialización en salud.`

### Home EN

**Title**

`Ramiro Nicolás Cosa | Functional Analysis, Implementation & Digital Products`

**Description**

`Ramiro Nicolás Cosa’s portfolio: functional analysis, implementation, and digital product development, supported by operational experience and healthcare specialization.`

### Casos

Cada caso debe tener title, description, canonical, alternate ES/EN y una imagen social propia. Clinical e Impostor justifican imagen específica; Fira puede usar una captura del catálogo.

## 13. Contenido que no debe entrar

- referencias al trabajo confidencial actual;
- relato defensivo sobre cambio de carrera;
- lista extensa de tecnologías en el hero;
- niveles subjetivos de skills;
- Clinical como SaaS o admin productivo;
- Impostor como producto comercial o con adopción externa no demostrada;
- Fira como e-commerce activo;
- métricas o resultados no documentados;
- descarga pública del CV adaptado específicamente al sector público.

## 14. Decisiones editoriales operativas

Con la aprobación general de Stage 1 se adoptan estas decisiones para planificar la implementación:

1. usar `trabajo independiente` en el portfolio y `proyectos propios y trabajo freelance` en el CV cuando la keyword ayude al sistema ATS;
2. retirar la command palette de la experiencia pública: no mejora la evaluación profesional, compite con los CTAs y agrega deuda mobile/de accesibilidad;
3. mantener como pendiente documental la confirmación de denominaciones y fechas de formaciones cuyos certificados todavía no se revisaron;
4. implementar Fira como mini-caso bilingüe complementario, con menor profundidad que Clinical e Impostor.

## 15. Orden de implementación posterior

1. Corregir integridad factual y links en ES/EN.
2. Incorporar Impostor a los datos estructurados.
3. Crear el caso bilingüe de Impostor.
4. Terminar y validar el caso bilingüe de Clinical.
5. Reordenar la home según esta arquitectura.
6. Agrupar capacidades y simplificar formación.
7. Incorporar contacto final y descarga del CV general.
8. Resolver mobile, accesibilidad, SEO y previews.
9. Validar build, rutas, light/dark y responsive.
10. Publicar desde un deployment trazable y verificar el resultado.

## 16. Criterio de aprobación de Stage 1

Stage 1 se considera aprobado porque:

- el posicionamiento del hero representa el tipo de trabajo buscado;
- la jerarquía Clinical → Impostor → Fira resulta correcta;
- los claims y límites de los tres proyectos son aceptables;
- experiencia clínica y técnica se perciben como simultáneas y complementarias;
- el resumen propuesto del CV general refleja la misma identidad;
- se acepta avanzar a implementación sin reabrir la dirección editorial completa.

Los ajustes de redacción que aparezcan durante implementación se tratarán como refinamientos y no como una reapertura de la estrategia.
