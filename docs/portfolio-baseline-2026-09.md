# Portfolio Baseline Report — September 2026

Fecha de auditoría: 2026-09-09
Repositorio: `minimalist-portfolio-json`
Deploy revisado: `https://ramirocosa.is-a.dev/`
Alcance: repositorio local, estado Git, contenido, estructura, i18n, rutas, experiencia desplegada, accesibilidad, SEO, configuración y adecuación del portfolio al objetivo de inserción laboral en IT.
Condición: auditoría de solo lectura. No se modificaron componentes, contenido público, configuración, historial Git ni despliegues.

## Resumen ejecutivo

El portfolio ya corrigió parte del problema detectado en junio de 2026: la versión pública no presenta a Ramiro como un frontend junior genérico, sino como un perfil que combina HealthTech, procesos clínicos, implementación y desarrollo.

Sin embargo, el sitio todavía funciona principalmente como un CV web lineal. La evidencia más convincente —los productos construidos, las decisiones tomadas y su madurez técnica— aparece tarde, está incompleta o directamente no está publicada.

La recomendación es una **reestructuración profunda sin rediseño visual integral**:

- conservar Astro, el minimalismo, el bilingüismo y los temas claro/oscuro;
- cambiar la arquitectura de información y la jerarquía profesional;
- convertir Clinical Admin y Juegos Familiares / Impostor en los dos casos principales;
- mantener Fira como evidencia complementaria, corrigiendo primero su descripción;
- resolver la divergencia entre el deploy, `main` local y el working tree.

El mayor problema inmediato no es estético: existen tres estados distintos del portfolio y el mejor trabajo todavía no llegó al público.

## 1. Estado actual verificable

### Repositorio y Git

- Rama activa: `main`.
- Remoto: `origin`, conectado a `RadikeCosa/minimalist-portfolio-json`.
- Existe además una rama local `dev`.
- `main` está 6 commits por delante de `origin/main`.
- `origin/main` termina en `cc8edac` del 2026-06-24.
- `main` local termina en `8350b9a` del 2026-08-07.
- Se encontraron ocho archivos modificados sin commit.
- Se encontraron directorios nuevos con capturas sanitizadas en `docs/screenshots/` y `public/case-studies/`.

Los seis commits locales incorporan cambios de posicionamiento, hero, experiencia, educación, tarjetas de proyectos, metadata y páginas de caso. No se modificó, descartó ni incorporó ninguno de los cambios preexistentes durante esta auditoría.

### Tres baselines simultáneas

| Capa | Estado observado |
| --- | --- |
| Deploy público | Contenido equivalente a `origin/main`; solo expone las homes ES/EN |
| `main` local | Seis commits adicionales con reestructuración parcial y páginas de caso |
| Working tree | Evolución adicional del caso clínico, enlaces, capturas y correcciones de la command palette |

Esto genera un riesgo operativo y editorial: revisar “el portfolio” sin nombrar la capa puede producir conclusiones contradictorias.

### Verificación del deploy

Hechos comprobados:

- `ramirocosa.is-a.dev` responde mediante Vercel (`server: Vercel`).
- La home desplegada reproduce el label, resumen, ubicación, experiencia y descripciones de proyectos presentes en `origin/main`.
- No reproduce el contenido de `main` local ni del working tree.
- Los nombres de assets desplegados difieren del build local más reciente disponible.
- Las dos páginas de caso locales devuelven 404 en producción.
- Vercel informa `last-modified: Mon, 07 Sep 2026 09:01:42 GMT`, lo que indica una publicación o republicación reciente del contenido antiguo.
- No existe `.vercel/project.json`, `vercel.json` ni un workflow de deploy versionado en el repositorio.

Conclusión: existe evidencia de alta confianza de que el deploy actual fue construido desde el estado equivalente a `origin/main`, pero el repositorio por sí solo no permite demostrar el proyecto Vercel, la rama configurada ni el SHA exacto de esa publicación. Esta relación debe confirmarse en la configuración de Vercel antes del próximo deploy.

### Stack y arquitectura

- Astro 4.3.2.
- TypeScript 5.3.3.
- Sitio estático.
- Contenido principal en `cv.json` y `cv-en.json`.
- Componentes Astro por sección.
- Páginas home separadas para español e inglés.
- Casos de estudio en Markdown.
- Temas light/dark mediante variables CSS y `localStorage`.
- Command palette mediante `hotkeypad`.
- Dependencias fijadas a versiones exactas.
- Existen simultáneamente `package-lock.json` y `pnpm-lock.yaml`.

El enfoque es pequeño y entendible: 43 archivos dentro de `src`, sin una infraestructura sobredimensionada. Es una buena base para evolucionar el portfolio.

### Rutas

Deploy público:

- `/`
- `/en/`

Las siguientes rutas devuelven 404:

- `/proyectos/plataforma-clinica`
- `/en/projects/clinical-platform`

Repositorio local:

- `/`
- `/en/`
- `/proyectos/plataforma-clinica`
- `/en/projects/clinical-platform`

La página española del caso clínico está sustancialmente desarrollada. La inglesa contiene solamente `Case study in preparation.`

### Estructura de la home

El deploy muestra esta secuencia:

`Hero → About → Experiencia → Educación → Proyectos → Skills`

La versión local conserva esencialmente el mismo orden. La narrativa HealthTech es mejor que en junio, pero la estructura sigue siendo la de un CV. Un recruiter debe recorrer experiencia y educación antes de encontrar la evidencia del producto construido.

No existe actualmente:

- enlace visible a un CV descargable;
- CTA profesional inequívoco;
- bloque de disponibilidad o tipos de roles buscados;
- contacto final;
- resultados o validación de proyectos;
- caso publicado que permita evaluar razonamiento y profundidad.

### Desktop, mobile y temas

Desktop:

- lectura centrada y clara, con ancho máximo aproximado de 700 px;
- light y dark funcionan correctamente;
- contraste general adecuado;
- no hay imágenes pesadas en la home desplegada;
- la estética es sobria, aunque todavía se percibe cercana al template original.

Mobile:

- el contenido principal se adapta y sigue siendo legible;
- el hero queda estrecho y el label profesional ocupa varias líneas;
- los controles flotantes de idioma y tema compiten visualmente con el encabezado;
- aparece desplazamiento horizontal en la versión desplegada;
- el botón flotante de la command palette es un `div` clickeable, sin semántica de botón ni acceso claro por teclado;
- el working tree contiene una corrección destinada a ocultar la command palette cuando está cerrada, pero no está desplegada.

### Accesibilidad

Fortalezas:

- atributo `lang` correcto en ES y EN;
- estructura básica de headings;
- enlaces externos con `noopener noreferrer`;
- controles de idioma y tema con áreas táctiles de 40–44 px;
- estados `focus-visible` en varios enlaces locales;
- imágenes del caso clínico con dimensiones y texto alternativo;
- temas con contraste general suficiente.

Problemas:

- ausencia de navegación estructural y skip link;
- command palette móvil no semántica;
- iconos sociales con nombres accesibles inconsistentes;
- selector de idioma con etiqueta accesible en inglés incluso en la home española;
- ausencia de soporte explícito para `prefers-reduced-motion`;
- varios enlaces de icono abren una pestaña nueva, incluso email y teléfono;
- `figure` vacío en el hero;
- el label profesional como `h2` compite semánticamente con los títulos de sección.

No se realizó una auditoría WCAG automatizada completa. Estos son hallazgos estructurales y visuales.

### SEO y descubribilidad

Deploy actual:

- títulos y descripciones presentes;
- Open Graph y Twitter básicos;
- no se observaron canonical ni `hreflang`;
- el `og:url` inglés apunta incorrectamente a la raíz española;
- incluye etiquetas de imagen social vacías;
- `robots.txt` devuelve 404;
- `sitemap.xml` devuelve 404;
- las páginas de caso devuelven 404.

Fuente local:

- ya agrega canonical y alternates;
- corrige la URL canónica por idioma;
- evita publicar metadata de imagen vacía;
- todavía no define una imagen social;
- no incorpora sitemap, robots ni datos estructurados.

Los títulos locales tienen 94–97 caracteres y las descripciones 440–456 caracteres. Son válidos, pero demasiado extensos para snippets de búsqueda y previews sociales eficaces.

### Performance y configuración

La arquitectura estática, sin imágenes en la home y con poco JavaScript, es favorable. El build local existente contiene aproximadamente:

- HTML home: 34 KB;
- CSS home: 14 KB;
- JavaScript principal observado: alrededor de 9 KB;
- capturas del caso: 265 KB y 313 KB.

Son tamaños sin comprimir del artefacto local, no una medición de transferencia ni un Lighthouse score. No se ejecutó un nuevo build para preservar exactamente el estado encontrado.

Gaps técnicos:

- no hay tests del portfolio;
- no hay script de lint o format;
- no hay smoke test de rutas bilingües;
- no hay validación automática de paridad ES/EN;
- Astro y herramientas están fijados a una baseline que debe auditarse antes de una actualización;
- dos lockfiles crean ambigüedad sobre el package manager canónico;
- no hay configuración visible de CI;
- README y propósito actual divergen.

### Contacto y CV

- Email, teléfono, LinkedIn y GitHub están visibles como iconos.
- El número telefónico público de la versión desplegada genera un `tel:` incompleto; el contenido local ya contiene el número internacional y normaliza el enlace.
- No existe descarga directa de CV.
- La impresión está escondida dentro de la command palette.
- No hay CTA final ni texto que exprese disponibilidad o invite a una conversación laboral.

### Deuda documental

El `README.md` todavía presenta el portfolio como personalización de un template y destaca principalmente frontend y contenido JSON. Eso contradice el propósito definido en `AGENTS.MD`, que prioriza implementación HealthTech, sistemas clínicos, análisis funcional/producto y procesos sanitarios.

La auditoría de junio debe conservarse como registro histórico. Este documento describe la nueva baseline y no la reemplaza retrospectivamente.

### CV vigente y relación con el portfolio

Se revisó visualmente y por extracción de texto `/home/ramiro/Documents/CV_Ramiro_Cosa.pdf`, creado el 2026-09-08. Es un PDF etiquetado de dos páginas, formato Letter, sin problemas visibles de superposición, clipping o legibilidad.

No debe considerarse todavía el CV general canónico. Su título, metadata, resumen y footer indican que fue adaptado específicamente a la Dirección Provincial de Análisis de Datos y a un perfil técnico para aplicaciones y sistemas de información del sector público.

Fortalezas compartidas con el portfolio:

- desarrollo desde 2020;
- trayectoria clínica y operativa como experiencia relevante;
- Clinical Admin como proyecto principal;
- testing, documentación y análisis de procesos;
- contacto y enlaces al portfolio, LinkedIn y GitHub;
- dos páginas claras y escaneables.

Inconsistencias verificadas:

| Tema | CV reciente | Portfolio / fuentes vigentes | Riesgo |
| --- | --- | --- | --- |
| Posicionamiento | Desarrollo de aplicaciones y sistemas de información para sector público | HealthTech, implementación y procesos clínicos | Las piezas parecen dirigidas a identidades profesionales diferentes si no se explica que el CV es una variante |
| Nombre | `Ramiro Nicolás Cosa` | `Ramiro Nicolas Cosa` | Inconsistencia de identidad visible |
| Práctica clínica actual | Práctica privada 2023–Actualidad | JSON local: práctica clínica 2004–Actualidad; deploy: CIKAF/práctica 2004–2013 | Cronología incompatible |
| Coordinación/auditoría | “más de diez años” | Portfolio: más de 20 años de experiencia sanitaria | No es contradicción estricta, pero mezcla experiencia total con experiencia específica |
| Proyecto clínico | Una frase puede leerse como si superficie pública y admin estuvieran desplegados en Vercel | Fuente del proyecto: solo la superficie pública está online; admin es local/privado | Posible sobreafirmación de alcance productivo |
| Formación Helsinki | `Full Stack Development` | Fuente local: `Full Stack Open` | Nombre del programa inconsistente |
| Formación UTN | Diplomatura 2022 y formación inicial 2021 | Deploy: UTN 2020–2021; JSON local agrupa 2021–2022 | Fechas y agrupación sin fuente canónica única |
| Título universitario | Licenciatura en Kinesiología | Deploy: Licenciatura en Kinesiología y Fisioterapia | Denominación inconsistente |
| Experiencia técnica | “Proyectos personales y freelance” | JSON local evita afirmar freelance | Claim laboral que requiere confirmación |
| Tecnologías | Incluye Angular, MongoDB, Neon, Spring Boot y Python | Portfolio prioriza otro conjunto | El CV amplía el inventario sin mostrar evidencia equivalente |
| Inglés | C1 avanzado, EF SET 64/100, lectura C2 y comprensión auditiva B2 | Portfolio: C1 Advanced | Diferente nivel de detalle; debe existir una formulación canónica |

Diagnóstico de sistema:

- CV y portfolio deben compartir hechos, cronología, posicionamiento central y vocabulario profesional.
- No deben duplicar profundidad: el CV selecciona y resume; el portfolio demuestra y explica.
- El CV general debe ser la baseline desde la que se deriven variantes, incluida la versión para sector público ya existente.
- La fuente canónica de hechos profesionales no está definida hoy. `cv.json`, el PDF, los repositorios de proyectos y la documentación activa compiten parcialmente entre sí.
- Antes de rediseñar cualquiera de las piezas debe cerrarse una tabla de hechos verificables: nombres, fechas, títulos, estados de proyectos, links, credenciales y claims.

Resoluciones aportadas por Ramiro el 2026-09-09:

- la práctica privada fue continua desde 2004;
- el trabajo en consultorios terminó en 2013 y desde 2014 la práctica continuó fuera de consultorios;
- Fira respalda públicamente experiencia en trabajos independientes para terceros; existe además otro trabajo actual confidencial que no debe nombrarse ni describirse en el CV, el portfolio o este repositorio;
- la creación del área de cuidados paliativos fue conjunta;
- la denominación oficial del título es `Licenciatura en Kinesiología y Fisioterapia`.
- la experiencia deportiva incluyó trabajos con distintos equipos y deportistas de alto rendimiento en recuperación y planificación anual, como parte de la práctica clínica y no como pertenencia estable a un único equipo.

Estas resoluciones se incorporan en `docs/professional-baseline-facts-2026-09.md`. La formulación recomendada para la experiencia técnica pasa a ser `proyectos propios y trabajos independientes`, pendiente de aprobación terminológica final.

Decisiones adicionales confirmadas el 2026-09-09:

- priorizar Implementation / Clinical Systems y Functional Analysis / Product en HealthTech para mejorar las posibilidades reales de entrevista y contratación; desarrollo web/full stack funciona como capacidad secundaria o variante;
- disponibilidad presencial en Neuquén y remota para otras ubicaciones;
- teléfono visible;
- URL productiva autorizada de Impostor: `https://juegos-familiares.vercel.app/` (sin `www`, verificada con HTTP 200);
- nombre público aprobado para el caso principal: `Plataforma clínica para rehabilitación domiciliaria`, con autorización para usar las cinco capturas sanitizadas documentadas por el proyecto;
- claim de uso aprobado para Impostor: más de 100 partidas reales con grupos familiares, con mejoras surgidas de la observación de esas sesiones;
- modelo CV–portfolio aprobado: un CV general público alineado con el portfolio y variantes adaptadas derivadas para postulaciones específicas;
- URL productiva de Fira confirmada y verificada: `https://fira-estudio-cyan.vercel.app/`; la URL histórica continúa devolviendo `DEPLOYMENT_NOT_FOUND` y debe reemplazarse;
- el trabajo actual confidencial para otro cliente queda completamente fuera de las superficies públicas.

## 2. Fortalezas

### Diferencial genuino

La combinación de experiencia clínica, coordinación sanitaria, auditoría, análisis de procesos y desarrollo está respaldada por trayectoria y por un producto HealthTech concreto.

### Posicionamiento mejorado

La versión pública ya evita presentarse solamente como junior frontend. `HealthTech Web Developer | Implementación y procesos clínicos` abre una conversación profesional más valiosa.

### Base visual apropiada

El minimalismo transmite sobriedad, privilegia contenido, funciona en ambos temas y permite evolucionar sin adoptar un sistema visual nuevo.

### Buen punto de partida bilingüe

Las homes ES/EN están razonablemente alineadas. El mecanismo es manual, pero simple y controlable.

### Proyectos con evidencia real

- Clinical Admin: conocimiento de dominio y modelado de procesos sanitarios.
- Impostor: producto desplegado, multiusuario, estados, privacidad y validación real.
- Fira: producto comercial, UX, accesibilidad, SEO y evolución de alcance.

### Disciplina técnica visible fuera del portfolio

Los repositorios muestran documentación, tests y decisiones de alcance poco habituales en proyectos personales. El problema no es falta de evidencia: es que el portfolio todavía no la presenta.

## 3. Problemas y gaps frente al objetivo laboral

### P0 — El mejor portfolio no está desplegado

Las mejoras locales, las páginas de caso y las capturas no son accesibles para un recruiter.

### P0 — Fira está presentado de manera factualmente incorrecta

El portfolio afirma que Fira es un e-commerce con carrito, checkout, Mercado Pago, webhooks y emails transaccionales. La documentación vigente de Fira establece que actualmente es una vidriera digital con catálogo y consulta por WhatsApp; carrito, checkout y pagos están fuera de alcance.

Mientras exista esta contradicción, el portfolio exagera capacidades activas y puede perder credibilidad ante una revisión técnica.

### P0 — La versión inglesa del caso clínico está incompleta

Publicarla en su estado actual produciría una experiencia desigual: un caso desarrollado en español y un placeholder en inglés.

### P1 — Impostor no aparece

Esto deja fuera producción real, uso repetido, beta aprobada, Supabase/Postgres, RLS, RPCs, Realtime, estados complejos, privacidad, reconexión, sucesión de host, PWA y testing de DB/producto.

### P1 — La home sigue teniendo arquitectura de CV

Proyectos aparece después de educación. La prueba de capacidad debería entrar inmediatamente después de establecer el diferencial.

### P1 — Falta convertir afirmaciones en evidencia

El portfolio menciona testing, documentación, FHIR, Supabase y reglas de negocio, pero no permite comprobarlos rápidamente mediante decisiones, capturas, alcance, validación y límites.

### P1 — No existe una conversión profesional clara

El visitante no recibe una acción final inequívoca para ver casos, descargar CV o iniciar una conversación.

### P2 — Skills comunica inventario, no criterio

Las 18 etiquetas mezclan competencias de dominio, prácticas, tecnologías e infraestructura. Los niveles y keywords existen en JSON, pero la UI no los utiliza.

### P2 — Deuda SEO, accesibilidad y mantenimiento

No impide usar el sitio, pero limita su calidad profesional: rutas en 404, ausencia de sitemap/robots, previews sociales incompletas, command palette compleja, overflow mobile, ausencia de checks automáticos y documentación divergente.

## 4. Mantener, modificar, eliminar, agregar e investigar

### Mantener

- dominio actual;
- Astro y salida estática;
- identidad minimalista;
- temas claro/oscuro;
- ES/EN;
- ancho de lectura contenido;
- narrativa salud + tecnología;
- JSON como fuente de hechos profesionales compartidos;
- Markdown para casos;
- transparencia sobre límites;
- separación entre cards resumidas y evidencia extensa.

### Modificar

- Reordenar la home a `Hero → propuesta diferencial → proyectos destacados → experiencia → capacidades → formación/credenciales → contacto`.
- Dividir proyectos en casos principales y trabajos complementarios.
- Agrupar Skills en dominio/producto, ingeniería y calidad/operación.
- Acortar títulos y metadata.
- Incorporar CTAs textuales visibles.
- Corregir Fira en ambos idiomas.
- Completar el caso clínico en inglés.
- Definir un workflow claro entre contenido local, commit, push y deploy.

### Eliminar o retirar

- descripción falsa de Fira como e-commerce activo;
- command palette y footer, salvo evidencia de utilidad;
- botón flotante móvil no semántico;
- `figure` vacío;
- presentación plana de 18 skills;
- lenguaje centrado en personalizar un template dentro del README;
- uno de los dos lockfiles, después de decidir el package manager oficial.

### Agregar

- caso bilingüe completo de Clinical Admin;
- caso bilingüe de Juegos Familiares / Impostor;
- entrada breve y correcta para Fira;
- CTA principal a casos y CTA secundario a contacto/CV;
- CV descargable o impresión claramente accesible;
- contacto final;
- imagen social;
- robots, sitemap y datos estructurados básicos;
- smoke tests para rutas y alternates;
- evidencia de validación y estado real de cada producto.

### Investigar antes de implementar

- idioma principal de búsqueda;
- métricas legítimas publicables;
- material visual seguro de Impostor;
- configuración real vigente de Fira;
- actualización de Astro;
- necesidad real de conservar `hotkeypad`.

## 5. Evaluación de proyectos

### Clinical Admin / HealthTech

**Rol recomendado: proyecto principal y ancla de posicionamiento.**

Debe presentarse como digitalización de un flujo clínico-operativo de rehabilitación domiciliaria, desde la solicitud inicial hasta tratamientos, visitas y documentación, utilizando un modelo FHIR pragmático.

La evidencia debe cubrir problema, usuarios, flujo, decisiones de dominio, arquitectura, validaciones, testing, capturas sanitizadas y límites. No debe presentarse como SaaS productivo, interoperabilidad externa implementada ni historia clínica completa.

### Juegos Familiares / Impostor

**Rol recomendado: segundo flagship y principal prueba de ingeniería de producto.**

Su valor está en demostrar un producto multiusuario desplegado, con reglas, autoridad, privacidad y uso real. Debe mostrar beta aprobada, flujo completo, secretos por participante, votaciones y scoring autoritativos, RLS, RPCs, Realtime, Presence, recuperación de estado, PWA, testing y límites conocidos.

Clinical Admin explica por qué el perfil es diferencial; Impostor demuestra qué profundidad técnica y de producto puede ejecutar.

### Fira

**Rol recomendado: proyecto complementario, tercero en jerarquía.**

Debe corregirse primero su descripción. El producto vigente es una vidriera digital de textiles con catálogo, detalle, disponibilidad orientativa y consultas por WhatsApp.

Puede demostrar UX, responsive, accesibilidad, SEO, catálogo, testing y adaptación del producto a una decisión comercial. La reducción deliberada del antiguo alcance e-commerce es mejor evidencia de criterio que presentarlo como un checkout activo.

La superficie pública vigente es `https://fira-estudio-cyan.vercel.app/`, verificada el 2026-09-09. El enlace histórico del portfolio debe reemplazarse cuando comience la implementación.

### Jerarquía recomendada

1. Clinical Admin — diferencial HealthTech y dominio.
2. Impostor — madurez de producto e ingeniería.
3. Fira — implementación comercial, UX y evolución de alcance.

## 6. Recomendación de alcance

La opción recomendada es una **reestructuración profunda**.

Los ajustes mínimos no resuelven la jerarquía, casos, bilingüismo, exactitud factual, CTA, deploy, SEO y mobile. Un rediseño integral tampoco se justifica: la base visual y técnica es válida y el problema principal es de arquitectura de información, evidencia y control editorial.

## 7. Próximos pasos

### Stage 1 — Fuente de verdad y brief de contenido

1. Confirmar en Vercel el proyecto, repositorio, Production Branch y SHA/deployment vigente.
2. Crear una fuente canónica de hechos compartidos por CV y portfolio.
3. Definir los roles laborales prioritarios.
4. Establecer la propuesta de valor y la audiencia.
5. Crear una ficha factual ES/EN para Clinical, Impostor y Fira.
6. Definir qué contenido pertenece al CV y qué evidencia profundiza el portfolio.
7. Confirmar URLs, screenshots, métricas y claims publicables.
8. Aprobar la jerarquía, los enlaces entre piezas y la arquitectura de información.

Entregable: baseline profesional compartida y `Portfolio Content & Information Architecture Brief`.

### Stage 2 — Integridad de contenido

1. Corregir Fira.
2. Completar Clinical EN.
3. Preparar el caso de Impostor.
4. Alinear README, JSON, páginas y links.

### Stage 3 — Implementación estructural

1. Reordenar la home.
2. Implementar los dos flagship y el caso complementario.
3. Incorporar CTAs y contacto final.
4. Simplificar Skills.

### Stage 4 — Calidad y publicación

1. SEO y previews sociales.
2. Mobile y accesibilidad.
3. Smoke tests bilingües.
4. Build y validación visual.
5. Deploy controlado y verificación del SHA público.

## Decisión de Stage 0

Stage 0 queda cerrado con esta baseline.

La recomendación vigente es preservar la identidad minimalista y avanzar con una reestructuración profunda, usando Clinical Admin e Impostor como casos principales y Fira como evidencia complementaria.

## Registro de validación

- Repositorio, ramas, remoto, commits y working tree: revisados.
- Código, contenido, rutas y configuración: revisados.
- Homes desplegadas ES/EN: revisadas.
- Desktop/mobile y temas light/dark: revisados.
- Rutas de caso, robots y sitemap: comprobados.
- Proveedor de deploy: confirmado como Vercel mediante headers HTTP.
- Proyecto, Production Branch y SHA exacto en Vercel: no verificables desde el repositorio; requieren consulta de configuración.
- Build, tests y Lighthouse: no ejecutados para evitar modificar artefactos ignorados durante una auditoría de solo lectura.
- Commits, push, PR, deploy y cambios externos: no realizados.
- Trabajo local preexistente: preservado.
