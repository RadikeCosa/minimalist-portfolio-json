# Audit de portfolio: Ramiro Cosa

Fecha: 2026-06-24
Repo: `minimalist-portfolio-json`
Deploy revisado: `https://ramirocosa.is-a.dev/`
Alcance: inspección del contenido, estructura y limitaciones del template. No se implementan cambios en `cv.json`, componentes ni estilos en esta etapa.

## Resumen ejecutivo

El portfolio actual funciona como sitio personal básico, pero todavía no posiciona con claridad a Ramiro como perfil híbrido HealthTech orientado a implementación, análisis funcional/producto y desarrollo aplicado a procesos clínicos reales.

Hoy la narrativa dominante es:

- `Frontend Developer | React | Next.js` en español.
- `Junior Frontend Developer | React - Data Visualization` en inglés.
- Un resumen con lenguaje genérico y poca evidencia concreta.
- Una grilla de proyectos donde el primero es LeetCode.

Eso produce tres efectos negativos para empleabilidad:

1. Reduce una experiencia sanitaria de más de 20 años a un antecedente blando, en vez de convertirla en ventaja competitiva.
2. Pone más peso en “aprendizaje”, “autodidacta” y “frontend” que en resolución de problemas reales, dominio clínico y diseño operativo.
3. Desordena la jerarquía de proyectos: lo más visible no es lo más diferencial.

La buena noticia es que el template ya permite corregir gran parte del problema solo con contenido mejor estructurado. Antes de pensar en cambios visuales, conviene rehacer narrativa, orden y densidad informativa.

## Qué comunica hoy el portfolio

### Señal principal que recibe un reclutador

La señal predominante hoy es:

- desarrollador frontend en transición;
- perfil generalista;
- proyectos de práctica y side projects;
- experiencia en salud mencionada como contexto, no como propuesta de valor.

La señal deseada debería ser:

- perfil HealthTech / digitalización operativa;
- desarrollo web aplicado a flujos clínicos;
- implementación con conocimiento real del dominio sanitario;
- capacidad para traducir procesos asistenciales a producto, documentación, testing y operaciones.

### Diagnóstico general

Fortalezas actuales:

- Hay base real para una narrativa diferencial.
- Existe bilingüe.
- El portfolio es simple, rápido y fácil de mantener.
- El contenido vive en JSON y eso facilita iterar por etapas.

Debilidades actuales:

- El hero subposiciona a Ramiro.
- El about usa frases genéricas y poca prueba.
- La experiencia mezcla “proyectos personales/freelance” con salud sin una historia clara de transición.
- Los proyectos no están priorizados para empleabilidad.
- Skills muestra muchas tecnologías, pero no comunica foco.
- Educación no integra bien el trayecto salud -> tecnología.
- Varias piezas útiles del JSON existen, pero el template ni siquiera las muestra.

## Problemas de posicionamiento

### 1. El hero define un perfil demasiado chico

`Frontend Developer | React | Next.js` y `Junior Frontend Developer | React - Data Visualization` son etiquetas más débiles que el posicionamiento recomendado.

Problemas:

- “Frontend” achica el espectro frente a un perfil que también puede aportar en producto, implementación, documentación, testing y procesos.
- “Junior” en inglés reduce seniority percibida justo donde el diferencial real está en experiencia operacional y dominio.
- No aparece HealthTech, salud digital, FHIR, procesos clínicos, implementación ni análisis funcional.

### 2. El about usa lenguaje común en vez de evidencia profesional

El resumen actual depende de expresiones como:

- “capacidad autodidacta”;
- “aportar valor”;
- “soluciones innovadoras y eficientes”.

Eso comunica intención, pero no diferencial.

Falta:

- explicar qué tipo de problemas resuelve;
- conectar salud + tecnología + operaciones;
- mostrar artefactos concretos: Next.js, TypeScript, FHIR, testing, documentación, analytics, UX operativa;
- narrar la transición desde 2020 como evolución, no como reinvención genérica.

### 3. La experiencia sanitaria está subaprovechada

La experiencia en Alegra Salud aparece como antecedente transferable, pero todavía no como núcleo del posicionamiento.

Hoy se diluye:

- la coordinación de servicios;
- la auditoría clínica;
- la comunicación con familias y equipos;
- el diseño de procesos;
- la operación domiciliaria;
- el criterio para detectar fricción real en flujos asistenciales.

Ese bloque debería funcionar como prueba de autoridad de dominio, no solo como “soft skills”.

### 4. La transición salud -> tecnología no está bien contada

Actualmente hay mención de formación técnica y experiencia previa, pero no hay una narrativa explícita del tipo:

- qué observó en salud;
- qué problemas operativos detectó;
- por qué empezó a construir software;
- qué tipo de productos quiere ayudar a diseñar o implementar.

Sin eso, la transición se lee como cambio de carrera; con eso, puede leerse como especialización con ventaja contextual.

### 5. La sección de proyectos perjudica el posicionamiento

El primer proyecto visible es LeetCode. Eso es útil como práctica, pero no debería abrir la conversación profesional.

Problemas puntuales:

- LeetCode ocupa el lugar que debería ocupar `kinesiologiaadomicilio`.
- `kinesiologiaadomicilio` aparece como “landing page”, demasiado chico para el valor real sugerido.
- Hay proyectos descritos como sandbox, blog o práctica que compiten con proyectos potencialmente más empleables.
- Las descripciones privilegian stack antes que problema, usuario o resultado.

## Evaluación por sección

## Hero

Estado actual:

- nombre correcto;
- ubicación correcta;
- label débil;
- contactos visibles;
- sin propuesta de valor de 1 línea;
- foto comentada y no visible.

Diagnóstico:

- cumple como tarjeta de presentación básica;
- no cumple todavía como apertura de perfil profesional diferenciado.

Recomendación:

- reemplazar el label por una propuesta de valor específica;
- sumar una bajada breve centrada en HealthTech / implementación / producto / procesos clínicos;
- mantener simpleza visual, pero mejorar densidad de mensaje.

## About

Estado actual:

- un solo párrafo largo;
- mezcla transición, habilidades blandas e intención;
- poca evidencia técnica concreta;
- exceso de abstracción.

Diagnóstico:

- la sección no responde rápido por qué Ramiro sería especialmente útil en una empresa de salud digital o en un equipo que necesite traducir operación a producto.

Recomendación:

- reescribir con foco en:
  - experiencia clínica y operativa;
  - transición a tecnología desde 2020;
  - tipo de productos/procesos que sabe digitalizar;
  - stack y prácticas relevantes;
  - valor para equipos HealthTech o SaaS operativos.

## Experiencia

Estado actual:

- un bloque de “Proyectos Freelance y Personales”;
- un bloque de Alegra Salud;
- en inglés, otra estructura distinta;
- highlights cargados en JSON, pero no renderizados.

Diagnóstico:

- la experiencia técnica está demasiado agregada y poco demostrada;
- la experiencia de salud está resumida de forma diplomática, no estratégica;
- la inconsistencia entre español e inglés debilita la identidad profesional.

Recomendación:

- mantener salud como experiencia central de dominio;
- reformular la experiencia técnica como transición aplicada desde 2020;
- usar highlights visibles para mostrar responsabilidades y logros;
- unificar narrativa entre ambos idiomas.

## Educación

Estado actual:

- aparecen institución, años y área;
- no se muestran `studyType`, `courses`, `score` ni certificados;
- en español no figura la carrera de Kinesiología;
- en inglés sí figura.

Diagnóstico:

- la educación técnica aparece, pero el puente con la formación de base en salud no es consistente;
- la falta de la carrera en español debilita el posicionamiento HealthTech local.

Recomendación:

- incluir la formación en Kinesiología también en español;
- diferenciar formación de base, formación técnica y formación continua;
- evitar que “autodidacta” sea el eje de credibilidad.

## Projects

Estado actual:

- todos los proyectos tienen el mismo peso visual;
- el orden depende del JSON;
- no hay categoría, rol, problema ni outcome;
- solo se muestra nombre, descripción y tags;
- el punto verde de `isActive` no alcanza para jerarquizar.

Diagnóstico:

- la sección hoy muestra actividad, pero no criterio profesional;
- el template está listo para un portfolio simple, no para una narrativa de empleabilidad más curada.

Recomendación:

- ordenar por valor de mercado y cercanía al posicionamiento deseado;
- reescribir cada proyecto desde problema, usuario, decisión y stack;
- reducir proyectos débiles o convertirlos en secundarios.

## Skills

Estado actual:

- lista plana de tecnologías;
- no se muestran nivel ni keywords;
- mezcla stack principal, herramientas secundarias y conceptos blandos.

Diagnóstico:

- la sección comunica amplitud, no foco;
- no deja claro qué stack forma parte de la propuesta principal.

Recomendación:

- priorizar tecnologías realmente asociadas al posicionamiento;
- destacar Next.js, TypeScript, testing, FHIR, analytics, documentación, UX operativa;
- mover o reducir tecnologías menos relevantes para la narrativa actual.

## Educación complementaria, idiomas y certificaciones

Estado actual:

- existen en JSON, pero casi no tienen presencia real en UI;
- idiomas, certificados e intereses no se muestran como secciones visibles.

Diagnóstico:

- hay información útil desaprovechada;
- especialmente inglés y testing podrían apoyar empleabilidad.

## Proyectos: recomendación de jerarquía

## Proyecto principal

### 1. `kinesiologiaadomicilio`

Debería pasar a ser el proyecto principal y abrir la sección.

Cómo conviene presentarlo:

- no como “landing page” solamente;
- sí como plataforma clínica liviana para digitalizar flujos de kinesiología domiciliaria;
- con doble valor:
  - captación de pacientes;
  - administración mínima / soporte operativo.

Aspectos a destacar:

- Next.js + TypeScript;
- conocimiento de procesos clínicos reales;
- diseño orientado a operación;
- FHIR;
- testing;
- documentación;
- analytics;
- UX operativa;
- decisiones de producto para un servicio sanitario concreto.

## Proyectos secundarios recomendados

### 2. `pronosticos-mundial`

Conviene destacarlo si se presenta desde:

- reglas de negocio;
- scoring;
- read models;
- modelado de datos;
- consistencia de estados;
- producto con lógica real.

No venderlo como “sitio de apuestas” ni solo como entretenimiento, sino como ejemplo de modelado y lógica aplicada.

### 3. `tutti-frutti`

Útil si aporta:

- realtime;
- manejo de estados;
- multiplayer;
- reglas y validación;
- experiencia de usuario.

### 4. `fira-estudio`

Útil si aporta:

- trabajo con cliente/negocio;
- presencia comercial;
- foco en conversión o producto;
- implementación real.

### 5. `v0-dictionary`

Puede servir como proyecto secundario si se enfoca en:

- UX;
- consumo de datos;
- herramientas de apoyo;
- interacción o search.

## Proyectos a ocultar, bajar o reformular

### Bajar de prioridad

- LeetCode.
- Sandbox de side projects.
- Blog personal.
- Tracker nutricional, salvo que se reescriba con más criterio de producto o salud.

### Mantener solo si se reformulan

- cualquier proyecto cuyo texto sea “aprendizaje”, “experimentos”, “práctica”, “blog”, “side project” sin insight de producto.

### Posible criterio editorial

- 3 proyectos principales.
- 2 secundarios.
- 1 enlace opcional a repositorio de práctica o playground.

## Propuesta de narrativa profesional

Una narrativa más alineada sería:

“Profesional con más de 20 años de experiencia en salud y coordinación domiciliaria que desde 2020 desarrolla productos web para digitalizar procesos clínicos y operativos. Combina conocimiento real del dominio sanitario con Next.js, TypeScript, testing, documentación, analytics y diseño de flujos centrados en la operación.”

Esa narrativa permite abrir varias puertas:

- HealthTech;
- implementación;
- análisis funcional;
- product support;
- operaciones digitales;
- desarrollo full stack liviano en contextos reales.

## Propuesta de estructura de contenido para el portfolio

Orden sugerido:

1. Hero con propuesta de valor clara.
2. About breve con transición y foco.
3. Experiencia relevante.
4. Proyectos destacados.
5. Skills agrupadas por foco.
6. Educación y formación.
7. Opcional: certificados/idiomas.

Orden alternativo mejor para empleabilidad:

1. Hero.
2. Proyectos destacados.
3. About.
4. Experiencia.
5. Skills.
6. Educación.

Como primer paso, no hace falta cambiar el orden visual todavía si no se quiere tocar componentes. Pero sí conviene preparar el contenido pensando en esa futura estructura.

## Estructura sugerida para `cv.json`

Sin modificarlo todavía, conviene orientar los contenidos a esta lógica:

### `basics`

- `label`: propuesta de valor, no cargo genérico.
- `summary`: 1 párrafo corto, específico y verificable.

### `work`

- separar mejor experiencia sanitaria y transición tecnológica;
- usar resúmenes con problema, responsabilidad y contexto;
- convertir highlights en evidencia concreta.

### `projects`

Agregar o reescribir cada entrada con esta lógica editorial:

- qué problema resuelve;
- para quién;
- qué decisión de producto/negocio/modelado muestra;
- qué stack importa de verdad;
- qué demuestra sobre Ramiro como candidato.

### `skills`

Pensar menos en inventario y más en foco:

- core;
- complementarias;
- dominio/operación.

## Copy sugerido por sección

## Hero: dirección sugerida

Evitar:

- `Frontend Developer`
- `Junior Frontend Developer`

Explorar algo como:

- `HealthTech Web Developer | Implementación y procesos clínicos`
- `Desarrollo web aplicado a salud digital | Next.js, TypeScript, FHIR`
- `Perfil híbrido HealthTech | Producto, implementación y operación clínica`

## About: tono sugerido

Evitar palabras vacías:

- apasionado;
- proactivo;
- autodidacta;
- soluciones innovadoras;
- aportar valor.

Favorecer formulaciones como:

- “Diseño y construyo herramientas web para ordenar procesos clínicos y operativos.”
- “Mi experiencia en internación domiciliaria me permite traducir necesidades reales de equipos de salud a flujos digitales utilizables.”
- “Trabajo con Next.js, TypeScript, testing, documentación y decisiones de UX orientadas a operación.”

## Experiencia: tono sugerido

En salud:

- destacar coordinación, auditoría, procesos, equipos, familias, operación domiciliaria;
- evitar que quede solo como antecedente humano o de liderazgo.

En tecnología:

- evitar “freelance y personales” como bolsa;
- describir el tipo de soluciones construidas y qué demuestran.

## Proyectos: tono sugerido

Cada proyecto debería poder resumirse así:

- contexto;
- problema;
- solución;
- stack;
- señal profesional.

Ejemplo de enfoque correcto:

- “Plataforma liviana para captar pacientes y ordenar operaciones básicas de un servicio de kinesiología domiciliaria.”

Ejemplo de enfoque débil:

- “Landing responsive hecha con Next.js y Tailwind.”

## Limitaciones del template detectadas

Estas limitaciones importan porque condicionan qué puede resolverse solo con contenido.

### Limitaciones de exposición

- `About` solo admite un párrafo simple.
- `Experience` no muestra `highlights`.
- `Education` no muestra `studyType`, `courses` ni certificados.
- `Skills` no muestra `level` ni `keywords`.
- `languages`, `certificates`, `interests` y `references` no tienen sección visible.
- `projects` no muestra rol, categoría, problema, impacto ni estado más allá de `isActive`.

### Limitaciones de narrativa

- todos los proyectos se ven equivalentes;
- no hay concepto de “proyecto destacado”;
- no hay separación entre experiencia de dominio y experiencia técnica;
- no hay espacio para una propuesta de valor debajo del hero salvo reusar `summary` o agregar campos.

### Limitaciones SEO / presentación técnica

- `og:image` y `twitter:image` están vacíos;
- la foto de perfil está comentada y no aparece;
- el título en inglés está hardcodeado con `Junior Frontend Developer`;
- el footer/command palette mantiene copy en español incluso en la versión inglesa.

### Hallazgo técnico adicional

Hay un bug de fechas: varias entradas renderizan un año anterior al esperado. El motivo probable es parseo de fechas ISO (`YYYY-MM-DD`) con zona horaria local y uso directo de `new Date(...).getFullYear()`.

Ejemplos observados en el build:

- `2020-01-01` se muestra como `2019`.
- `2013-01-01` se muestra como `2012`.
- `2025-01-01` se muestra como `2024`.

No corresponde corregirlo en esta etapa, pero sí incluirlo en los cambios técnicos mínimos posteriores.

## Cambios técnicos mínimos necesarios

Sin entrar todavía en implementación, el mínimo razonable para mejorar empleabilidad sería:

1. Reescritura de `cv.json` y `cv-en.json` con nueva narrativa.
2. Reordenamiento de proyectos en JSON.
3. Corrección del parseo de fechas.
4. Habilitar render de `highlights` en experiencia.
5. Revisar si conviene mostrar formación de base y certificados de forma explícita.
6. Corregir metadata social vacía.
7. Alinear títulos y copy entre español e inglés.

## Cambios visuales opcionales

No son prioritarios, pero luego podrían sumar:

- destacar 1 proyecto principal con layout diferente;
- agrupar skills por categorías;
- sumar microcopys debajo del hero;
- introducir badges como `HealthTech`, `FHIR`, `Testing`, `Operations`;
- separar proyectos principales de secundarios.

Importante: estos cambios visuales solo tienen sentido después de corregir narrativa y jerarquía.

## Plan incremental de implementación por patches

### Patch 1: reposicionamiento de contenido

Objetivo:

- rehacer `cv.json` y `cv-en.json` para que el portfolio deje de vender “frontend junior genérico”.

Incluye:

- nuevo `label`;
- nuevo `summary`;
- experiencia reformulada;
- educación alineada;
- skills recortadas y priorizadas.

Riesgo:

- bajo.

### Patch 2: curaduría de proyectos

Objetivo:

- reordenar y reescribir proyectos para empleabilidad.

Incluye:

- `kinesiologiaadomicilio` primero;
- bajar o quitar LeetCode del primer plano;
- reformular descripciones con foco en problema/resultado;
- decidir cuáles quedan principales y cuáles secundarios.

Riesgo:

- bajo.

### Patch 3: exposición de evidencia ya existente

Objetivo:

- mostrar mejor la información que el JSON ya tiene.

Incluye:

- renderizar `highlights` en experiencia;
- evaluar mostrar certificados, idiomas o cursos;
- mejorar densidad informativa sin rediseño mayor.

Riesgo:

- bajo a medio.

### Patch 4: correcciones técnicas pequeñas

Objetivo:

- corregir inconsistencias visibles.

Incluye:

- bug de fechas;
- metadata `og`/`twitter`;
- copy en inglés;
- opcionalmente foto de perfil.

Riesgo:

- bajo.

### Patch 5: mejora de estructura visual opcional

Objetivo:

- dar más jerarquía al proyecto principal y al posicionamiento.

Incluye:

- featured project;
- grupos de skills;
- posible reordenamiento de secciones.

Riesgo:

- medio.

## Riesgos

- Sobrecargar de texto el template y perder su claridad.
- Intentar resolver con diseño un problema que hoy es principalmente de narrativa.
- Mantener demasiados proyectos por miedo a sacar material.
- Seguir hablando de “aprendizaje” en vez de “resolución de problemas”.
- Abrir demasiados frentes a la vez y mezclar contenido, layout y estilo en un mismo patch.

## No alcances de este audit

- No se modificó `cv.json`.
- No se modificó `cv-en.json`.
- No se tocaron componentes Astro.
- No se cambiaron estilos.
- No se ajustó SEO ni metadata.
- No se validó analítica externa ni performance real del deploy.
- No se auditaron en profundidad los repos de proyectos enlazados; la recomendación se basó en el posicionamiento deseado provisto.

## Recomendación final

La prioridad no debería ser “hacer más lindo” el portfolio, sino volverlo más útil para selección.

La oportunidad más fuerte de Ramiro no está en competir como frontend junior generalista, sino en presentar una combinación poco común:

- dominio sanitario real;
- comprensión de operación domiciliaria;
- capacidad de traducir procesos a producto;
- desarrollo web moderno;
- documentación, testing y criterio operativo.

Si el portfolio se reescribe con esa lógica, incluso sin un rediseño grande, puede pasar de “sitio personal correcto” a “herramienta de empleabilidad con narrativa clara”.
