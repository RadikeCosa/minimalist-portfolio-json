# Portfolio Implementation Plan — September 2026

Estado: en ejecución; Incrementos 0 a 5 completados localmente
Fecha: 2026-09-09
Dirección editorial: `docs/portfolio-stage-1-content-blueprint-2026-09.md`
Alcance: secuencia de implementación, validación y publicación
Fuera de alcance de este documento: ejecutar cambios, editar el PDF del CV, commit, push y deploy

## 1. Objetivo

Transformar el portfolio actual en un sistema de presentación profesional coherente con el futuro CV general, preservando la identidad minimalista y evitando una reescritura técnica innecesaria.

La implementación debe optimizar para:

- comprensión rápida del perfil;
- evidencia verificable;
- encaje con búsquedas de Implementation, Clinical Systems y Product/Functional Analysis en HealthTech;
- navegación bilingüe consistente;
- buena experiencia mobile, accesibilidad y SEO;
- publicación trazable y sin contradicciones entre repositorio y deploy.

## 2. Principios de ejecución

1. Corregir hechos antes de reorganizar la interfaz.
2. Separar datos profesionales compartidos de contenido narrativo del portfolio.
3. Mantener paridad ES/EN en cada incremento.
4. No publicar una ruta hasta que tenga contenido, metadata y alternates válidos.
5. No presentar prototipos privados como superficies productivas.
6. No usar métricas, claims o capturas sin fuente y autorización.
7. Validar cada incremento antes de iniciar el siguiente.
8. Preservar los cambios locales existentes y revisar solapamientos antes de editar.

## 3. Estado de partida que condiciona la implementación

- `main` está seis commits por delante de `origin/main` según la auditoría de Stage 0.
- Existen modificaciones locales y assets sin seguimiento que no deben descartarse.
- El deploy público no representa el estado local auditado.
- Clinical ya tiene caso ES y material sanitizado; la versión EN necesita cierre.
- Impostor todavía no está integrado al portfolio.
- Fira conserva descripción y URL históricas incorrectas en los JSON.
- La home actual sigue el orden Hero → About → Experience → Education → Projects → Skills.
- La command palette introduce complejidad y problemas mobile sin aportar valor central al objetivo laboral.
- No existe una suite de smoke tests específica para rutas bilingües, metadata y enlaces críticos.

## 4. Incremento 0 — Control de estado y trazabilidad

### Propósito

Evitar que la implementación mezcle trabajo previo, cambios nuevos y un deploy conectado a otra referencia.

### Acciones

- volver a registrar rama, HEAD, upstream y working tree inmediatamente antes de editar;
- atribuir cada cambio local existente a su intención o dejarlo explícitamente fuera;
- confirmar en Vercel proyecto, repositorio, Production Branch y commit desplegado;
- identificar el mecanismo vigente para generar o servir el CV descargable;
- acordar el conjunto exacto de archivos del primer patch.

### Salida verificable

- mapa repo → rama → commit → deployment;
- lista de cambios preexistentes protegidos;
- alcance cerrado del Incremento 1.

### No hacer

- resetear, descartar o reescribir cambios locales;
- hacer commit o deploy para “limpiar” el estado;
- empezar componentes antes de conocer el origen del deploy.

## 5. Incremento 1 — Integridad factual y links

### Propósito

Eliminar contradicciones visibles sin modificar todavía la arquitectura de la home.

### Cambios de contenido

- corregir `Ramiro Nicolás Cosa` en ES/EN;
- adoptar la denominación `Licenciatura en Kinesiología y Fisioterapia`;
- corregir la descripción de práctica clínica continua desde 2004;
- expresar correctamente la etapa de consultorios hasta 2013;
- describir la creación del área de cuidados paliativos como contribución conjunta;
- ajustar la experiencia con equipos y deportistas de alto rendimiento sin sugerir pertenencia permanente;
- corregir Fira como catálogo/vidriera;
- reemplazar la URL histórica de Fira por `https://fira-estudio-cyan.vercel.app/`;
- agregar Impostor con `https://juegos-familiares.vercel.app/`;
- no utilizar la variante con `www`;
- excluir toda referencia al trabajo confidencial actual.

### Datos de Impostor

- nombre: `Juegos Familiares — Impostor`;
- estado: producto desplegado/beta en uso;
- evidencia: más de 100 partidas reales con grupos familiares;
- alcance: juego presencial conectado, no remoto ni offline;
- stack breve: Next.js, TypeScript, Supabase/Postgres, RLS, Realtime y testing.

### Validación

- parseo válido de JSON;
- build ES/EN;
- todos los links principales responden;
- ninguna ruta o copy afirma e-commerce activo para Fira;
- ninguna copy presenta Clinical admin como productivo;
- búsqueda global de nombres o datos del trabajo confidencial.

### Criterio de cierre

El portfolio local puede seguir teniendo la arquitectura anterior, pero ya no contiene información falsa, desactualizada o no publicable.

## 6. Incremento 2 — Modelo de contenido compartido

### Propósito

Evitar que `cv.json` siga funcionando simultáneamente como CV, base de la home y fuente narrativa de casos.

### Estructura conceptual

- `profile`: identidad, contacto, ubicación, disponibilidad y posicionamiento;
- `experience`: cronología y hechos profesionales compartidos;
- `credentials`: formación, idiomas y certificados;
- `projects`: fichas resumidas, estados, links y evidencias;
- contenido de home: jerarquía, hero, diferencial y CTAs;
- contenido de casos: narrativa larga ES/EN;
- variantes de CV: selección y énfasis derivados de los hechos compartidos.

### Decisión técnica a tomar durante implementación

Mantener JSON, migrar contenido a módulos TypeScript o adoptar colecciones de contenido de Astro. La opción debe elegirse por validación y mantenimiento, no por novedad. Para el alcance actual, módulos tipados o colecciones pequeñas son suficientes; no se justifica incorporar un CMS.

### Validación

- esquema tipado y validable;
- links y campos opcionales explícitos;
- paridad de claves ES/EN;
- ausencia de duplicación factual innecesaria;
- build correcto con campos faltantes controlados.

## 7. Incremento 3 — Casos de proyecto

### 7.1 Clinical

- revisar el caso ES existente contra la baseline aprobada;
- completar el caso EN con la misma evidencia y límites;
- seleccionar las cinco capturas sanitizadas autorizadas según valor narrativo;
- mantener visible que el admin es privado/local;
- validar alt text, tamaños, carga diferida y legibilidad mobile;
- enlazar sitio público y repositorio.

### 7.2 Impostor

- crear rutas ES/EN;
- explicar problema, dinámica presencial y usuarios;
- mostrar reglas, autoridad de estado, privacidad, votaciones, scoring y recuperación;
- incorporar la evidencia de 100+ partidas con contexto familiar;
- mostrar decisiones técnicas solo cuando expliquen comportamiento o riesgo;
- documentar límites conocidos;
- enlazar producto y repositorio.

### 7.3 Fira

- crear mini-caso ES/EN;
- explicar necesidad del emprendimiento y rol independiente;
- mostrar catálogo, responsive, accesibilidad y SEO;
- explicar la simplificación desde el alcance histórico de e-commerce;
- evitar detalles de infraestructura archivada que confundan al visitante;
- enlazar el sitio productivo y el repositorio.

### Validación común

- rutas ES/EN equivalentes;
- canonical y hreflang correctos;
- metadata y previews sociales;
- links de retorno a proyectos/contacto;
- capturas sin información sensible;
- cada claim respaldado por baseline o fuente de proyecto.

## 8. Incremento 4 — Reestructuración de la home

### Orden

1. Hero.
2. Diferencial profesional.
3. Casos destacados.
4. Experiencia y recorrido.
5. Capacidades demostradas.
6. Contacto y CV.

### Hero

- implementar el copy aprobado ES/EN;
- mostrar ubicación y disponibilidad;
- CTA principal a casos;
- CTA secundario al CV general;
- email, LinkedIn, teléfono y GitHub como acciones de apoyo;
- evitar listado de stack y párrafos extensos.

### Diferencial

- tres bloques: dominio clínico/operativo, análisis/producto e implementación/calidad;
- conectar cada bloque con evidencia de los casos;
- evitar autocalificaciones sin prueba.

### Proyectos

- Clinical e Impostor con mayor jerarquía visual;
- Fira como caso complementario;
- badges con significado profesional;
- acciones diferenciadas: caso, producto y código;
- no mostrar enlaces ausentes o rotos.

### Experiencia

- mostrar superposición entre práctica clínica y desarrollo;
- evitar lectura de “abandono” o reinicio de carrera;
- reducir densidad respecto al CV;
- priorizar capacidades transferibles.

### Capacidades

- retirar niveles `intermedio`/`avanzado`;
- agrupar por dominio, producto, ingeniería y calidad;
- enlazar capacidades con proyectos cuando sea útil.

### Formación y perfil

- retirar la sección de formación de la home;
- conservar educación, credenciales e idiomas como datos canónicos para el CV general;
- evaluar una futura página `Perfil / Sobre mí` solo si permite explicar el recorrido con una mención breve y relevante a la formación, sin duplicar el CV;
- no crear una página independiente hasta cerrar su objetivo y contenido.

### Contacto

- incorporar CTA final;
- teléfono visible;
- ubicación visible como `Neuquén, Argentina`, sin modalidad laboral en la home;
- descarga explícita del CV general.

## 9. Incremento 5 — Simplificación de interacción y responsive

### Command palette

- retirar `KeyboardManager` y la UI asociada de la experiencia pública;
- comprobar que ninguna acción o navegación dependa de ella;
- mantener navegación visible, semántica y predecible.

### Mobile

- eliminar overflow horizontal;
- evitar márgenes negativos que excedan el viewport;
- comprobar controles flotantes y safe areas;
- asegurar targets táctiles suficientes;
- validar cards, figuras y bloques de código de los casos.

### Light/dark

- conservar ambos temas;
- revisar contraste, bordes, estados de foco e imágenes;
- asegurar que previews y capturas no dependan del tema para entenderse.

### Accesibilidad

- orden de headings;
- landmarks y navegación;
- enlaces con texto descriptivo;
- foco visible;
- teclado completo;
- `prefers-reduced-motion` si se agregan transiciones;
- idioma de documento y alternates correctos.

## 10. Incremento 6 — CV general coordinado

Este incremento comienza después de estabilizar la fuente factual, pero antes del deploy final.

### Contenido

- encabezado alineado con el posicionamiento aprobado;
- resumen breve común al sistema;
- teléfono, email, LinkedIn, GitHub y portfolio;
- disponibilidad presencial/remota;
- experiencia y cronología canónicas;
- Clinical e Impostor como proyectos principales;
- Fira como proyecto adicional si el espacio lo permite;
- links directos a casos/productos;
- inglés C1 con credencial EF SET;
- dos páginas como objetivo.

### Variantes

- conservar la versión de sector público como variante;
- derivar HealthTech / Clinical Systems;
- derivar Implementation / Functional Analysis;
- crear una variante full stack solo para avisos con encaje real.

### Validación

- lectura humana y ATS;
- enlaces clicables;
- impresión y selección de texto;
- coherencia con portfolio;
- ninguna variante reemplaza accidentalmente al CV público general.

## 11. Incremento 7 — SEO, pruebas y calidad

### SEO

- canonical correcto por ruta;
- hreflang ES/EN recíproco;
- Open Graph y Twitter images válidas;
- `robots.txt` y sitemap;
- titles y descriptions aprobados;
- datos estructurados básicos de persona/sitio cuando aporten.

### Pruebas mínimas

- build estático;
- smoke de `/`, `/en/` y todos los casos;
- verificación de links externos críticos;
- comprobación de canonical/hreflang;
- detección de imágenes y assets faltantes;
- comprobación de que no haya contenido confidencial;
- navegación y foco por teclado.

### Validación visual

- desktop y mobile;
- ES y EN;
- light y dark;
- home y casos;
- estados hover, focus y navegación;
- ausencia de overflow y saltos de layout problemáticos.

## 12. Incremento 8 — Publicación controlada

### Antes del deploy

- working tree revisado;
- alcance del commit confirmado;
- build y pruebas limpios;
- CV general correcto y descargable;
- metadata e imágenes sociales disponibles;
- Production Branch y proyecto Vercel confirmados.

### Después del deploy

- verificar SHA desplegado;
- recorrer rutas ES/EN;
- comprobar links a Clinical, Impostor y Fira;
- comprobar CV, teléfono, email y LinkedIn;
- verificar mobile/light/dark;
- validar canonical, hreflang, robots, sitemap y previews;
- registrar fecha, commit y resultado de publicación.

## 13. Cortes de revisión recomendados

### Revisión A — Integridad

Después del Incremento 1. Confirmar hechos, links y confidencialidad.

### Revisión B — Casos

Después del Incremento 3. Confirmar narrativa, capturas, profundidad y límites.

### Revisión C — Home

Después del Incremento 5. Confirmar mensaje, jerarquía y experiencia visual.

### Revisión D — Sistema profesional

Después del Incremento 6. Comparar CV general y portfolio como piezas coordinadas.

### Revisión E — Publicación

Antes y después del Incremento 8. Confirmar trazabilidad y resultado público.

## 14. Primer cambio recomendado

El primer cambio de código futuro debe limitarse al Incremento 1: integridad factual y links. No debe incluir todavía reordenamiento visual, nuevos componentes, SEO amplio ni edición del CV.

Ese patch debe poder revisarse respondiendo una sola pregunta: “¿El portfolio local dice ahora la verdad vigente, de forma equivalente en español e inglés?”

## 15. Registro de ejecución

### 2026-09-09 — Incremento 0

- Confirmado `main...origin/main [ahead 6]` y HEAD `8350b9a` antes de editar.
- Registrados y preservados todos los cambios locales preexistentes.
- Confirmado que `cv.json` y `cv-en.json` ya contenían cambios locales para enlazar el caso Clinical; el patch se aplicó sobre ese estado sin descartarlos.
- No se realizaron commit, push ni deploy.

### 2026-09-09 — Incremento 1

Archivos editados: `cv.json` y `cv-en.json`.

Cambios aplicados:

- nombre profesional con acentuación correcta;
- label HealthTech alineado ES/EN;
- modalidad de proyectos propios y trabajo independiente;
- práctica clínica continua desde 2004 y consultorios hasta 2013;
- experiencia con distintos equipos y deportistas de alto rendimiento;
- creación conjunta del área de cuidados paliativos;
- título universitario canónico;
- alcance privado/local de Clinical;
- incorporación de Juegos Familiares — Impostor y su URL productiva;
- descripción vigente, badge y URL productiva de Fira;
- eliminación de los claims históricos de e-commerce activo en las fichas visibles.

Validación:

- JSON válido;
- `astro check`: 44 archivos, 0 errores, 0 warnings, 0 hints;
- `astro build`: cuatro rutas generadas correctamente;
- revisión local ES/EN: contenido, links y tercer proyecto renderizados;
- ninguna referencia pública al trabajo confidencial;
- servidor temporal detenido al finalizar.

Pendiente antes de publicar:

- completar los incrementos estructurales y de casos;
- revisar visualmente responsive/light/dark como parte de los incrementos correspondientes;
- confirmar proyecto, Production Branch y SHA efectivos en Vercel;
- crear y revisar un commit solo si Ramiro lo solicita.

### 2026-09-09 — Incremento 2

Decisión de modelo de contenido:

- conservar `cv.json` y `cv-en.json` como fuente estructurada de hechos resumidos mientras se implementa la transición;
- mantener la narrativa larga en páginas Markdown bilingües;
- mantener labels puramente de interfaz en `src/i18n/config.ts`;
- no incorporar CMS ni una nueva dependencia;
- diferir una migración a colecciones de Astro o módulos TypeScript hasta que la reestructuración de la home demuestre una necesidad concreta.

Esta decisión reduce riesgo sobre el working tree actual y ya separa de manera práctica el resumen profesional de los casos extensos.

### 2026-09-09 — Incremento 3

Archivos creados:

- `src/pages/proyectos/impostor.md`;
- `src/pages/en/projects/impostor.md`;
- `src/pages/proyectos/fira-estudio.md`;
- `src/pages/en/projects/fira-estudio.md`.

Archivos completados o ajustados:

- `src/pages/en/projects/clinical-platform.md`: caso completo en inglés;
- `cv.json` y `cv-en.json`: enlaces directos a los tres casos;
- `src/i18n/utils.ts`: alternates de los tres pares ES/EN;
- `src/layouts/ProjectCaseLayout.astro`: nombre profesional canónico en títulos.

Contenido implementado:

- Clinical: proceso, superficies pública/privada, decisiones, FHIR pragmático, calidad, privacidad y límites;
- Impostor: experiencia presencial, grupo/sala/sesión, autoridad en Postgres, privacidad, Realtime, 100+ partidas familiares y límites;
- Fira: necesidad comercial, catálogo vigente, trabajo independiente, simplificación del alcance histórico, calidad y límites.

Decisiones de integridad:

- se omitieron fechas de inicio de Impostor y Fira porque no estaban cerradas en la baseline;
- no se agregaron capturas de Impostor o Fira porque los repositorios no contienen un set de evidencia portfolio-safe preparado;
- no se expusieron credenciales, datos privados, detalles del trabajo confidencial ni afirmaciones sobre servicios remotos no verificables;
- se normalizaron las URLs internas y alternates con `/` final para que canonical y hreflang sean recíprocos.

Validación:

- `astro check`: 44 archivos, 0 errores, 0 warnings, 0 hints;
- `astro build`: ocho rutas estáticas generadas;
- revisión local del caso Impostor ES y Fira EN;
- alternancia de idioma verificada en ambos sentidos;
- canonical, hreflang y `x-default` normalizados para los seis casos;
- `git diff --check` limpio;
- servidor temporal detenido al finalizar.

Validación diferida:

- selección y revisión visual de screenshots para Impostor y Fira;
- revisión responsive/light/dark completa, prevista junto con la reestructuración de home y estilos;
- validación del deployment público, fuera de alcance hasta la etapa de publicación.

### 2026-09-09 — Incrementos 4 y 5

Arquitectura pública implementada:

1. hero y propuesta de valor;
2. diferencial profesional;
3. proyectos destacados;
4. experiencia profesional;
5. capacidades demostradas;
6. contacto.

Decisiones editoriales posteriores incorporadas:

- posicionamiento principal ampliado a análisis funcional, implementación y producto digital;
- HealthTech conservado como especialización y evidencia, no como límite sectorial;
- título principal ES: `Análisis, implementación y producto.`;
- equivalente EN: `Analysis, implementation, and product.`;
- títulos de sección simplificados a `Enfoque`, `Proyectos`, `Experiencia profesional`, `Capacidades` y `Contacto`;
- bajadas y fichas de proyecto compactadas con lenguaje descriptivo;
- modalidad presencial/remota retirada de la portada; queda solo `Neuquén, Argentina`;
- `Formación full stack` incorporada como señal secundaria dentro de `Ingeniería y datos`, sin sumar una sección educativa;
- Clinical e Impostor reciben jerarquía equivalente como pruebas complementarias; Fira queda como trabajo independiente complementario;
- Formación deja de ser una sección de la home, pero sus datos se preservan para el CV general;
- una futura página `Perfil / Sobre mí` queda condicionada a que aporte narrativa y no duplique el CV;
- no se publica todavía una descarga de CV porque el CV general coordinado aún no existe.

Simplificación aplicada:

- command palette retirada de las páginas públicas ES/EN;
- niveles subjetivos de skills reemplazados por capacidades agrupadas;
- CTA final y teléfono visible incorporados;
- jerarquía de proyectos corregida para desktop y colapso a una columna en mobile;
- márgenes negativos del bloque de proyectos retirados.

Edición posterior de casos:

- títulos internos reducidos a problema, producto o alcance, aporte, decisiones, evidencia y límites;
- párrafos promocionales y conclusiones autorreferenciales retirados;
- Clinical conserva flujo, FHIR, privacidad y restricciones de alcance;
- Impostor conserva arquitectura, privacidad, sincronización, uso familiar en más de 100 partidas y límites;
- Fira conserva el trabajo independiente, el alcance de catálogo y la eliminación deliberada del e-commerce;
- contenido ES/EN actualizado en paralelo.

Preservación:

- `Education.astro`, `About.astro`, `KeyboardManager.astro` y la dependencia asociada no se eliminaron; simplemente dejaron de renderizarse en la home, evitando destruir archivos con cambios locales previos;
- educación, credenciales e idiomas permanecen en `cv.json` y `cv-en.json`;
- no se realizó commit, push ni deploy.

Validación:

- revisión visual local ES en tema oscuro y claro;
- revisión semántica de títulos, secciones, CTAs y enlaces;
- versión EN equivalente verificada;
- sin overflow horizontal en viewport de escritorio (`scrollWidth` menor que `innerWidth`);
- revisión responsive final en viewport móvil todavía pendiente;
- `astro check`: 47 archivos, 0 errores, 0 warnings, 0 hints;
- `astro build`: ocho rutas estáticas generadas correctamente;
- `git diff --check` limpio.

### 2026-09-09 — Incremento 6: CV general coordinado

- CV general en español aprobado e incorporado como PDF público estable;
- descarga disponible desde el hero y desde Contacto;
- la versión inglesa identifica explícitamente que el PDF está en español;
- portfolio y CV comparten posicionamiento, jerarquía de proyectos y lenguaje visual;
- una futura versión inglesa o variantes por búsqueda deben derivarse del CV general, sin reemplazarlo;
- revisión responsive a 390 px en ES/EN y temas claro/oscuro, sin overflow horizontal;
- PDF servido con `application/pdf` y verificado como idéntico al artefacto aprobado.

### 2026-09-09 — CV general en inglés

- traducción inglesa aprobada con la misma estructura visual y narrativa del CV general;
- los enlaces de proyectos apuntan a los case studies en inglés;
- `/` descarga el CV en español y `/en/` descarga el CV en inglés;
- ambas versiones funcionan como CV generales canónicos para futuras adaptaciones por postulación.

### 2026-09-09 — Incremento A: base SEO técnica

- URL productiva configurada como `site` de Astro;
- sitemap generado por una ruta estática y `robots.txt` incorporados;
- homes ES/EN conectadas mediante canonical, `hreflang` y `x-default`;
- títulos y descripciones de home compactados con el posicionamiento aprobado;
- metadatos sociales ampliados con sitio e idioma;
- entidades `WebSite` y `Person` incorporadas como JSON-LD en las homes;
- README actualizado para eliminar el posicionamiento y los proyectos anteriores.

### 2026-09-09 — Incremento B: About bilingüe

- nuevas rutas `/sobre-mi/` y `/en/about/`;
- recorrido presentado como acumulativo: práctica profesional, coordinación de servicios y productos digitales;
- HealthTech mencionado como especialización transferible, no como límite sectorial;
- formación full stack incorporada como parte secundaria del recorrido;
- acceso discreto desde la sección Experiencia de ambas portadas, sin ampliar las acciones principales del hero;
- enlaces a proyectos, CV y contacto en el cierre de la página;
- idiomas incorporados con la línea editorial aprobada para el portfolio;
- canonical, `hreflang`, `x-default`, Open Graph tipo `profile` y JSON-LD `ProfilePage` + `Person`;
- sitemap ampliado de ocho a diez rutas;
- revisión ES/EN, tema claro/oscuro y viewport móvil de 390 px, sin overflow horizontal;
- `astro check`: 52 archivos, 0 errores, 0 warnings, 0 hints;
- `astro build`: diez rutas estáticas generadas correctamente.

### 2026-09-09 — Incremento C: Servicios, About y casos de proyecto

- nuevas rutas `/servicios/` y `/en/services/`, orientadas a pymes, profesionales y equipos pequeños;
- propuesta basada en comprender una necesidad concreta y elegir la respuesta adecuada: ordenar un proceso, configurar herramientas existentes o desarrollar una solución a medida;
- servicios organizados en presencia y canales digitales, organización del trabajo, productos web a medida y evolución de soluciones;
- enfoque de trabajo resumido en entender, elegir y definir, implementar, validar y ajustar;
- IA incorporada en Servicios y About como herramienta transversal de análisis, aprendizaje e implementación; el contexto, las decisiones y la validación permanecen como responsabilidad profesional;
- About enlaza Servicios y Contacto incorpora un acceso secundario para consultas de pymes y profesionales;
- Fira actualizado para documentar el e-commerce original con carrito, checkout e integración certificada con Mercado Pago, y su posterior adaptación conjunta a catálogo con confirmación telefónica cuando la demanda superó la capacidad productiva;
- la solución para kinesiología domiciliaria se presenta como dos superficies conectadas: recepción estructurada de consultas pertinentes y gestión clínica de registros;
- la posible relación futura con ANDES se expresa como una línea de interoperabilidad a investigar por compartir la familia de estándares HL7/FHIR, sin afirmar compatibilidad ni integración ya validadas;
- el trabajo con el taller de luthería informa el enfoque de servicios, pero continúa completamente fuera del contenido público;
- sitemap ampliado de diez a doce rutas y alternancia ES/EN incorporada para Servicios;
- revisión local de Servicios ES/EN, tema claro/oscuro y viewport móvil de 390 px, sin overflow horizontal;
- About, Fira y la solución clínica verificados en viewport móvil;
- `astro check`: 56 archivos, 0 errores, 0 warnings, 0 hints;
- `astro build`: doce rutas estáticas generadas correctamente;
- `git diff --check` limpio.

#### Refinamiento editorial posterior

- Servicios adopta frases más breves, categorías concretas y un tono afirmativo;
- `En qué puedo ayudar` se reemplaza por `Áreas de trabajo`;
- el principio central pasa a ser `Criterio antes que herramienta`: no se parte de un entregable predeterminado, sino del problema, las personas y el contexto;
- presencia digital, operación, productos a medida y evolución funcionan como áreas de trabajo, no como paquetes cerrados;
- se incorpora la comunicación como capacidad profesional derivada de la experiencia en salud y cuidados paliativos: escucha, prioridades e información difícil comunicada con precisión;
- About documenta la participación en la creación conjunta de un área de cuidados paliativos y conecta ese recorrido con capacidades transferibles;
- la explicación sobre IA se reduce a su uso concreto en investigación, contraste, implementación y revisión;
- los resúmenes de Fira y la solución de kinesiología se compactan; los case studies conservan el detalle;
- el trabajo con el taller de luthería sigue fuera del contenido público: su aprendizaje se expresa como criterio general, sin identificar ni describir al cliente;
- se corrige el orden efectivo de codificación en desarrollo para evitar mojibake en títulos con acentos bajo `localhost`.
- la apertura de Servicios evita la jerga `entregable`: parte del objetivo que la persona necesita alcanzar, explica la recomendación y deja claro por qué y cómo funcionaría;
- la experiencia más reciente de desarrollo de productos digitales incorpora un enlace secundario a Servicios y trabajo independiente.

### 2026-09-09 — Consolidación previa al congelamiento v1

- coherencia editorial cerrada entre portada, casos, Servicios, About y CV: la plataforma clínica se identifica como producto a medida y Fira incluye su evolución de e-commerce a catálogo;
- los CV ES/EN se reequilibran en dos páginas A4, conservan 13 enlaces, declaran el idioma del documento y suman comunicación y prioridades como capacidad transferible;
- navegación por teclado reforzada con salto al contenido, foco visible en controles flotantes e iconos decorativos fuera del árbol accesible;
- `aria-label` corregidos mediante regiones y grupos semánticos válidos en los casos;
- imágenes sociales ES/EN de 1200 × 630, Open Graph/Twitter completo y datos estructurados para Servicios y proyectos;
- capturas clínicas convertidas de PNG a WebP, con una reducción aproximada del 51 % del peso conjunto;
- Astro actualizado de 4.16.19 a 7.3.2, TypeScript a 6.0.3 y auditoría de dependencias sin vulnerabilidades conocidas;
- un único gestor de paquetes documentado; dependencia, componentes, tipos e iconos sin uso eliminados;
- validación automática incorporada para doce rutas, un `h1` por página, canonical, alternancia ES/EN, codificación, datos estructurados y recursos sociales;
- workflow de integración continua agregado y cabeceras de seguridad/caché configuradas para Vercel.
- navegación del hero reorganizada en destinos del portfolio (`Proyectos`, `Sobre mí`, `Servicios`) y acciones (`Descargar CV`, `Contacto`), manteniendo los enlaces contextuales como refuerzo.
