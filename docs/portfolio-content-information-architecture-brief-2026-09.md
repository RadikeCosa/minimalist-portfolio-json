# Portfolio Content & Information Architecture Brief — September 2026

Estado: aprobado por Ramiro el 2026-09-09
Fecha: 2026-09-09
Baseline de referencia: `docs/portfolio-baseline-2026-09.md`
Fuente factual compartida: `docs/professional-baseline-facts-2026-09.md`
Alcance: posicionamiento, audiencias, arquitectura de información, jerarquía de proyectos, claims verificables, CTAs y criterios de contenido.
Fuera de alcance: implementación, diseño visual detallado, cambios de código, commit, push y deploy.

## 1. Objetivo del portfolio

El portfolio debe permitir que una persona de recruiting, producto, implementación o ingeniería entienda rápidamente:

1. qué perfil profesional ofrece Ramiro;
2. por qué su experiencia sanitaria constituye una ventaja vigente;
3. qué productos reales sabe analizar y construir;
4. qué decisiones de producto e ingeniería puede defender;
5. qué tipo de rol y conversación profesional está buscando.

El resultado deseado no es mostrar la mayor cantidad posible de tecnologías o proyectos. Es producir suficiente confianza para generar una entrevista o conversación laboral relevante.

## 2. Posicionamiento recomendado

### Territorio principal

**HealthTech, implementación de sistemas clínicos, análisis funcional/producto y digitalización de procesos sanitarios.**

### Territorio secundario

**Desarrollo web full stack aplicado a productos con reglas de negocio, estados, datos y operación real.**

### Lo que no debe comunicar

- frontend junior genérico;
- cambio de carrera que invalida la trayectoria anterior;
- especialista senior en interoperabilidad FHIR productiva;
- creador de un SaaS clínico completo;
- colección indiferenciada de proyectos personales;
- dominio de herramientas sin evidencia asociada.

### Narrativa central

La trayectoria no debe presentarse como `salud → abandono de salud → tecnología`.

Debe presentarse como:

`experiencia clínica y operativa → comprensión de fricciones reales → análisis y diseño de procesos → construcción de productos digitales`

La experiencia sanitaria sigue siendo conocimiento de dominio actual. El desarrollo amplía la capacidad de intervenir sobre esos procesos.

## 3. CV y portfolio como sistema de presentación profesional

### Principio rector

CV y portfolio deben expresar la misma identidad profesional, pero cumplir funciones diferentes:

`CV = selección, relevancia y acceso rápido`
`Portfolio = evidencia, profundidad y confianza`

No deben ser dos versiones de distinta longitud del mismo documento. El CV debe permitir decidir si el perfil merece avanzar; el portfolio debe permitir entender por qué y con qué evidencia.

### Narrativa y posicionamiento compartidos

Ambas piezas deben compartir un núcleo estable:

- Ramiro trabaja en la intersección entre salud y tecnología.
- Aporta experiencia clínica y operativa real, no solo conocimiento teórico del dominio.
- Desde 2020 analiza, diseña y desarrolla productos web.
- Puede convertir necesidades, reglas y restricciones operativas en flujos y funcionalidades.
- Clinical Admin es la prueba principal del diferencial HealthTech.
- Impostor demuestra capacidades de producto e ingeniería transferibles más allá de salud.
- Busca roles donde implementación, sistemas clínicos, producto y desarrollo necesiten conectarse.

Prioridad aprobada el 2026-09-09: encabezar con Implementation / Clinical Systems y Functional Analysis / Product en HealthTech, usando desarrollo web/full stack como capacidad técnica secundaria o variante. El criterio es maximizar el encaje con búsquedas donde la experiencia sanitaria aporte una ventaja real para obtener entrevistas y empleo.

Las variantes del CV pueden cambiar el énfasis y el orden, pero no los hechos ni la identidad central.

### Función del CV general

El CV general debe:

- ocupar idealmente dos páginas;
- ser legible por personas y sistemas ATS;
- priorizar experiencia, capacidades y resultados relevantes;
- incluir uno o dos proyectos seleccionados;
- usar bullets concretos y verificables;
- enlazar al portfolio y a los casos relevantes;
- servir como fuente para variantes específicas.

No debe intentar explicar arquitectura, decisiones técnicas extensas, recorridos de usuario ni cada tecnología utilizada.

### Función del portfolio

El portfolio debe:

- demostrar el posicionamiento mediante casos;
- explicar problema, usuarios, rol, decisiones, evidencia y límites;
- mostrar capturas, flujos y arquitectura cuando ayuden a comprender;
- ampliar proyectos que en el CV ocupan pocos bullets;
- mostrar cómo se trabaja y se razona;
- ofrecer rutas de exploración diferentes para recruiting, producto e ingeniería;
- devolver al visitante a una acción profesional: contacto o descarga de CV.

No debe duplicar literalmente los bullets del CV ni convertirse en una cronología exhaustiva.

### Fuente canónica compartida

Antes de editar cualquiera de las dos piezas debe existir una fuente de hechos estructurada con:

- nombre profesional;
- ubicación;
- datos de contacto publicables;
- cronología y denominaciones laborales;
- formación y fechas;
- idiomas y credenciales;
- nombres canónicos de proyectos;
- estado actual y alcance de cada producto;
- rol y contribuciones personales;
- tecnologías realmente utilizadas;
- links vigentes;
- métricas o validaciones autorizadas;
- límites y claims prohibidos.

`cv.json` puede evolucionar para contener parte de estos datos, pero no debe considerarse canónico mientras mantenga contradicciones con el PDF y las fuentes activas de los proyectos. El contenido narrativo largo de casos puede seguir en Markdown.

### Arquitectura documental recomendada

```text
Baseline profesional compartida
├── Hechos y cronología canónicos
├── Posicionamiento central
├── Inventario de evidencia y proyectos
│
├── CV general
│   ├── Variante HealthTech / Clinical Systems
│   ├── Variante Implementation / Functional Analysis
│   └── Variante técnica / sector público
│
└── Portfolio
    ├── Home profesional
    ├── Caso Clinical Admin
    ├── Caso Impostor
    └── Fira como caso complementario
```

Las variantes no deben mantener copias independientes de fechas y hechos sin control, porque eso reproduce el drift actual.

## 4. Audiencias y lectura esperada

### Audiencia primaria

Recruiters y hiring managers de:

- empresas HealthTech;
- proveedores de sistemas clínicos;
- productos para atención domiciliaria, rehabilitación o coordinación sanitaria;
- equipos de implementación, operaciones o producto con procesos complejos.

Necesidad de lectura: entender el diferencial y encontrar evidencia en 30–90 segundos.

### Audiencia secundaria

Product managers, implementation leads, clinical systems leads y analistas funcionales.

Necesidad de lectura: comprobar que Ramiro puede traducir operación, usuarios y restricciones a reglas, estados, flujos y documentación.

### Audiencia técnica

Engineering managers y reviewers técnicos.

Necesidad de lectura: identificar stack, arquitectura, decisiones, tests, seguridad, límites y calidad sin recorrer primero repositorios completos.

### Audiencia complementaria

Equipos de producto o desarrollo fuera de salud que valoren:

- conocimiento de dominio;
- pensamiento de producto;
- reglas de negocio;
- Supabase/Postgres;
- testing y documentación;
- interacción con usuarios reales.

## 5. Roles objetivo

### Prioridad 1 — Encaje más diferencial

- Implementation Analyst / Implementation Specialist en HealthTech.
- Clinical Systems Analyst.
- Functional Analyst con foco en salud o procesos operativos.
- Product Analyst en HealthTech.

### Prioridad 2 — Encaje técnico aplicado

- Junior Full Stack Developer en HealthTech con conocimiento sanitario.
- Web Developer orientado a productos y operaciones.
- Product Engineer junior o perfil híbrido en equipos pequeños, cuando el alcance del rol sea compatible con la experiencia demostrable.

### Prioridad 3 — Oportunidades adyacentes

- QA funcional o product QA con conocimiento clínico.
- Operaciones de producto / product operations en salud digital.
- Implementación y soporte funcional de software clínico.

### Decisión editorial

El portfolio no debe intentar dar el mismo peso a todos los roles. La home debe abrir desde el territorio HealthTech/Clinical Systems/Implementation y usar el desarrollo como evidencia de ejecución.

El CV o una página futura puede adaptar el énfasis para cada postulación, pero la identidad pública necesita un centro estable.

## 5.1 Decisión editorial posterior — posicionamiento amplio

Esta decisión, acordada durante la implementación el 2026-09-09, reemplaza las recomendaciones de la baseline que proponían abrir la home exclusivamente desde HealthTech.

- identidad pública: análisis funcional, implementación y producto digital;
- HealthTech: especialización y evidencia de profundidad de dominio, no límite sectorial;
- desarrollo full stack: capacidad de ejecución demostrable;
- formación: fuera de la home como sección detallada; permanece en el CV general;
- posible `Perfil / Sobre mí`: futura pieza narrativa breve, a crear solo si explica el recorrido sin duplicar el CV.

## 6. Propuesta de valor

### Versión recomendada — español

> Análisis, implementación y producto.

### Recommended version — English

> Analysis, implementation, and product.

### Evidencia que debe aparecer cerca

- más de 20 años en salud;
- desarrollo de productos web desde 2020;
- Clinical Admin como aplicación directa del dominio;
- Impostor como prueba de ingeniería de producto multiusuario;
- Next.js, TypeScript, FHIR pragmático, Supabase/Postgres, testing y documentación.

### Label profesional recomendado

Opción principal ES:

`Análisis funcional · Implementación · Producto digital`

Opción principal EN:

`Functional analysis · Implementation · Digital products`

La propuesta de valor debe llevar el peso explicativo. El label puede ser más corto que el actual y no necesita enumerar cada rol posible.

## 7. Arquitectura de información de la home

### Secuencia recomendada

1. Hero y propuesta de valor.
2. Diferencial profesional.
3. Trabajo destacado.
4. Experiencia y recorrido.
5. Capacidades.
6. Contacto.

### 7.1 Hero

Debe responder inmediatamente:

- quién es;
- qué hace;
- dónde aporta especialmente;
- qué acción debería realizar el visitante.

Contenido:

- nombre;
- label breve;
- propuesta de valor de una o dos líneas;
- ubicación: `Neuquén, Argentina`;
- CTA principal: `Ver casos destacados` / `View selected work`;
- CTA secundario: `Contactarme` / `Get in touch`;
- LinkedIn y GitHub como enlaces de apoyo.

No debe incluir:

- lista de tecnologías;
- párrafo biográfico largo;
- command palette como acción principal;
- controles que compitan con el mensaje.

### 7.2 Diferencial profesional

Objetivo: explicar el puente salud–producto–tecnología sin repetir el CV.

Tres capacidades sugeridas:

1. **Dominio clínico y operativo** — atención domiciliaria, coordinación, auditoría y documentación.
2. **Análisis y producto** — relevamiento, flujos, estados, reglas de negocio y UX operativa.
3. **Implementación** — desarrollo web, datos, testing, documentación y despliegue.

Cada capacidad debe vincularse con evidencia, no con autocalificaciones abstractas.

### 7.3 Trabajo destacado

Debe aparecer antes de la experiencia y la educación.

Jerarquía:

1. Clinical Admin — caso principal.
2. Juegos Familiares / Impostor — segundo flagship.
3. Fira — trabajo complementario.

Clinical e Impostor pueden compartir un nivel visual de “casos destacados”, con Clinical primero por alineación profesional. Fira debe tener menor peso sin quedar escondido.

Cada card debe mostrar:

- nombre comprensible;
- problema o propósito;
- contribución personal;
- dos o tres señales técnicas relevantes;
- estado real;
- CTA al caso;
- sitio y código solo cuando sean válidos y ayuden a evaluar.

### 7.4 Experiencia y recorrido

La experiencia debe presentarse como tres etapas superpuestas:

- desarrollo de productos propios y trabajos independientes desde 2020;
- coordinación, auditoría y procesos sanitarios;
- práctica clínica privada continua desde 2004.

La superposición importa: desarrollo y práctica clínica continúan en paralelo. La sección debe evitar una cronología que sugiera que la experiencia previa dejó de aportar.

### 7.5 Capacidades demostradas

Reemplazar la lista plana de 18 skills por grupos con evidencia:

#### Dominio y producto

- procesos clínicos;
- análisis funcional;
- diseño de flujos y reglas;
- UX operativa;
- documentación.

#### Ingeniería

- Next.js / React / TypeScript;
- Node.js;
- PostgreSQL / Supabase;
- FHIR como modelo clínico pragmático.

#### Calidad y operación

- testing automatizado y manual;
- RLS y autorización;
- analytics;
- Git, despliegue y mantenimiento.

No mostrar niveles “intermedio/avanzado” salvo que exista un criterio consistente para defenderlos. La evidencia por proyecto es más confiable.

### 7.6 Perfil y formación

No mostrar una sección curricular de formación en la home. Conservar el detalle canónico para el CV general.

Evaluar una futura página `Perfil / Sobre mí` solo si aporta una explicación breve del recorrido. Podrá mencionar la formación sanitaria de base y la formación posterior en desarrollo, sin listar cursos ni duplicar el CV.

### 7.7 Contacto

Cerrar con una invitación concreta y profesional.

Objetivo sugerido:

> Estoy interesado en oportunidades donde salud, implementación, producto y desarrollo necesiten trabajar juntos.

Acciones:

- email;
- LinkedIn;
- descargar CV;
- GitHub como enlace secundario.

El teléfono será visible. La modalidad laboral no se explicita en la home; puede adaptarse en el CV y en cada postulación.

## 8. Fichas factuales de proyectos

## 8.1 Clinical Admin / Plataforma clínica para rehabilitación domiciliaria

### Rol en el portfolio

Proyecto principal y ancla del posicionamiento HealthTech.

### Estado confirmado

- La superficie pública está activa en `https://kinesiologiaadomicilio.vercel.app/`.
- La superficie pública orienta y capta consultas para kinesiología domiciliaria en Neuquén.
- La superficie privada `/admin` funciona localmente contra HAPI FHIR.
- No existe una demo pública editable del admin.
- Las capturas publicables usan datos ficticios/sanitizados.
- El sistema modela solicitudes, pacientes, ciclos de tratamiento, visitas, observaciones y documentación.
- FHIR se utiliza como modelo local pragmático, no como interoperabilidad externa productiva.
- El repositorio incluye una suite extensa de tests y documentación activa.

### Claim público recomendado

> Producto HealthTech que conecta captación pública y gestión clínica privada para organizar solicitudes, pacientes, tratamientos, visitas y documentación en rehabilitación domiciliaria.

### Contribución personal comunicable

- análisis del proceso real;
- definición de flujos y estados;
- reglas de negocio y validaciones;
- decisiones de producto y UX;
- modelado FHIR;
- implementación full stack;
- testing y documentación.

### Evidencia prioritaria

- flujo solicitud → paciente → tratamiento → visita → seguimiento;
- dashboard y seguimiento de encuentros;
- decisión de separar solicitud y tratamiento;
- visitas vinculadas a un episodio activo;
- traducción de FHIR a modelos legibles para la UI;
- límites de privacidad y alcance.

### Claims a evitar

- historia clínica completa;
- SaaS multiusuario;
- interoperabilidad productiva con terceros;
- admin disponible online;
- datos reales de pacientes;
- métricas no verificadas.

### Pendientes antes de publicar el caso

- aprobar editorialmente la versión española;
- completar la versión inglesa;
- seleccionar entre las cinco capturas sanitizadas autorizadas del README: dashboard, pacientes, detalle, tratamiento y encuentros;
- decidir si se comunica un número exacto de tests o solo cobertura amplia;

## 8.2 Juegos Familiares / Impostor

### Rol en el portfolio

Segundo flagship y principal prueba de ingeniería de producto multiusuario.

### Estado confirmado por la documentación activa del proyecto

- La URL productiva autorizada es `https://juegos-familiares.vercel.app/`; respondió HTTP 200 el 2026-09-09.
- No usar la variante con `www`, porque no valida correctamente el certificado TLS.
- Impostor alcanzó una beta aprobada.
- La beta figura como desplegada en producción desde `main@7431605`.
- Ramiro confirmó más de 100 partidas reales con grupos familiares.
- El flujo central completo está implementado.
- Es mobile-first y tiene capacidades PWA progresivas.
- Usa Next.js, React, TypeScript, Supabase Auth, Postgres, RLS, RPCs, Realtime y Presence.
- Las decisiones sensibles se resuelven en backend/DB.
- El producto reconstruye estado autorizado después de interrupciones.
- Existen tests unitarios, de migrations, DB y smokes Realtime.

Estas afirmaciones provienen de la fuente de verdad activa del proyecto. La auditoría del portfolio no reprodujo una partida productiva ni ejecutó las suites completas.

### Claim público recomendado

> Juego social mobile-first para grupos presenciales, con salas multi-dispositivo, información privada por participante, votaciones, puntuación y recuperación de sesión sobre un estado autoritativo en Postgres.

### Contribución personal comunicable

- diseño del producto y sus reglas;
- modelado de estados y transiciones;
- arquitectura de autorización y privacidad;
- implementación Next.js/Supabase;
- RLS y RPCs;
- Realtime, Presence y reconexión;
- PWA;
- testing de aplicación y base de datos;
- iteración a partir de uso real;
- documentación y consolidación de decisiones.

### Evidencia prioritaria

- entrada por grupo, invitación y room;
- revelación privada de palabra/rol;
- primera votación, desempate e intento final;
- marcador y rondas sucesivas;
- estado autoritativo y privacidad;
- Realtime como señal, no como autoridad;
- reconstrucción después de refresh/reconexión;
- refinamientos surgidos de observación real.

Claim de uso aprobado:

> Usado en más de 100 partidas reales con grupos familiares y mejorado a partir de la observación directa de esas sesiones.

### Límites que fortalecen la credibilidad

- no es un juego remoto;
- requiere conectividad para la partida compartida;
- no ofrece cuentas tradicionales;
- Presence no determina permisos;
- la sucesión automática de host solo está resuelta en lobby;
- participantes desconectados durante la sesión pueden bloquear acciones que requieren participación completa;
- beta aprobada no implica product-market fit ni UX terminada.

### Claims a evitar

- motor genérico de juegos;
- plataforma social pública;
- soporte offline de partidas;
- ausencia de bugs;
- producto terminado;
- adopción o impacto cuantitativo no documentado.

### Pendientes antes de publicar el caso

- comprobar que la baseline de producción sigue siendo la documentada;
- seleccionar screenshots o video breve sin secretos ni datos inconvenientes;
- decidir si el nombre visible será `Impostor` o `Juegos Familiares — Impostor`;
- preparar una narrativa comprensible para lectores no técnicos.

## 8.3 Fira

### Rol en el portfolio

Trabajo complementario orientado a producto comercial, UX y mantenimiento.

### Estado confirmado

- La fuente de verdad vigente define Fira como vidriera digital de productos textiles artesanales.
- Incluye home, catálogo, categorías, detalle de producto, disponibilidad orientativa, contacto y estructura SEO básica.
- WhatsApp es el canal principal de consulta cuando está configurado.
- Carrito, checkout, Mercado Pago, pagos, pedidos online, webhooks y emails transaccionales están fuera del producto público actual.
- El repositorio conserva infraestructura histórica de e-commerce, pero no representa el alcance vigente.
- Existen tests unitarios y E2E sobre catálogo, navegación, accesibilidad, temas y SEO.
- La URL usada actualmente por el portfolio, `https://fira-estudio.vercel.app/`, devuelve `DEPLOYMENT_NOT_FOUND`.
- La URL productiva vigente es `https://fira-estudio-cyan.vercel.app/`; fue verificada el 2026-09-09 y coincide con el alcance de catálogo/vidriera documentado.
- El sitio publica canonical y metadata social sobre el dominio vigente.

### Claim público recomendado

> Vidriera digital para un emprendimiento textil, con catálogo, detalle de productos, disponibilidad orientativa y consultas por WhatsApp, enfocada en UX, accesibilidad y SEO.

### Contribución personal comunicable

- diseño e implementación del catálogo;
- experiencia responsive;
- componentes y navegación;
- accesibilidad;
- SEO y metadata;
- integración de datos de producto;
- testing unitario y E2E;
- simplificación del alcance para alinearlo con la operación actual.

### Evidencia prioritaria

- catálogo y detalle;
- accesibilidad y navegación;
- adaptación mobile;
- metadata/SEO;
- decisión de retirar complejidad transaccional que ya no respondía al producto vigente.

### Claims a evitar

- e-commerce activo;
- checkout o Mercado Pago vigente;
- webhooks productivos;
- emails de compra;
- URL histórica `https://fira-estudio.vercel.app/`;
- analytics vigente sin verificación.

### Pendientes antes de publicar

- seleccionar capturas actuales del catálogo público;
- confirmar configuración de WhatsApp;
- confirmar Supabase y analytics vigentes;
- decidir si el repositorio público ayuda o confunde por la infraestructura histórica;
- obtener capturas actuales.

## 9. Prioridad de proyectos en CV y portfolio

### CV general

Incluir:

1. Clinical Admin como proyecto técnico principal, con tres o cuatro bullets.
2. Impostor como segundo proyecto, con dos o tres bullets centrados en producto multiusuario, estado autoritativo, privacidad y uso real.

Fira puede omitirse del CV general o aparecer en una única línea de proyectos adicionales. No debe desplazar a Impostor.

Modelo aprobado: ofrecer desde el portfolio un CV general público y mantener fuera de esa superficie las variantes adaptadas para búsquedas específicas. Todas derivan de la misma baseline factual.

Existe otro trabajo actual para un cliente real, pero es confidencial y queda fuera del CV, portfolio y casos públicos. No debe nombrarse ni describirse en este repositorio.

### Variante HealthTech / Clinical Systems

- Clinical Admin con máxima profundidad permitida por el formato.
- Impostor resumido como evidencia técnica complementaria.
- Fira omitido salvo que la búsqueda valore producto web/UX.

### Variante Implementation / Functional Analysis

- Clinical Admin centrado en procesos, reglas, estados, usuarios y documentación.
- Impostor centrado en modelado de flujo, validación con usuarios y refinamientos.
- El stack queda subordinado a decisiones y ejecución.

### Variante técnica / sector público

- Clinical Admin centrado en aplicaciones, sistemas de información, datos, mantenimiento y testing.
- Impostor incorporado por su arquitectura Postgres/Supabase, autorización, estados y pruebas.
- La motivación por el sector público pertenece a esta variante, no a la baseline general.

### Portfolio

- Clinical e Impostor deben tener casos completos y ser visibles desde la primera pantalla o inmediatamente después.
- Fira debe funcionar como caso complementario de producto comercial, UX y simplificación de alcance.
- El portfolio puede conservar mayor cantidad de evidencia y links que cualquier CV.

## 10. Presentación de la transición profesional

### Enfoque recomendado

La transición debe narrarse como ampliación de capacidad:

> Después de años trabajando sobre procesos clínicos y operativos, desde 2020 incorporé desarrollo de software para convertir esas necesidades en productos digitales.

Esto evita una explicación defensiva. No pide disculpas por no provenir de una carrera informática tradicional ni oculta la trayectoria sanitaria.

### Orden narrativo

1. Experiencia de dominio.
2. Problemas y procesos observados.
3. Formación y desarrollo desde 2020.
4. Productos construidos.
5. Tipo de rol buscado actualmente.

### Lenguaje a evitar

- “A pesar de venir de salud”.
- “Recién estoy empezando en tecnología”.
- “Decidí abandonar mi carrera anterior”.
- “Soy autodidacta y apasionado”.
- comparaciones defensivas con perfiles tradicionales;
- afirmaciones de seniority técnico que los proyectos no necesitan para resultar valiosos.

### Diferencia de densidad

En el CV, la transición debe resolverse en dos o tres frases y mediante la cronología. En el portfolio puede explicarse a través del diferencial y del caso Clinical Admin, sin crear una sección autobiográfica extensa.

## 11. Enlaces entre CV y portfolio

### Del CV al portfolio

- El encabezado debe incluir un link visible al portfolio.
- Cada proyecto destacado debe poder enlazar directamente a su caso, no solo a la home.
- Los links deben tener texto descriptivo: `Caso de estudio`, `Producto público`, `Repositorio`.
- La URL impresa debe seguir siendo comprensible si el PDF se imprime.
- Las variantes pueden enlazar directamente al caso más relevante para la búsqueda.

### Del portfolio al CV

- El hero y el contacto final deben ofrecer `Descargar CV`.
- El archivo debe identificarse como CV general o variante cuando corresponda.
- No se debe usar un CV adaptado a una organización como descarga pública general.
- El portfolio puede permitir elegir ES/EN, pero no necesita publicar todas las variantes específicas.

### Navegación cruzada

El recorrido esperado es:

`CV → caso relevante → otros proyectos → contacto`

o:

`Portfolio → evidencia → CV general → contacto`

Ambos recorridos deben conservar contexto de idioma y utilizar URLs estables.

## 12. Inconsistencias actuales verificadas entre CV y portfolio

Fuente revisada: `/home/ramiro/Documents/CV_Ramiro_Cosa.pdf`, creado el 2026-09-08 y adaptado a la Dirección Provincial de Análisis de Datos.

| Tema | CV reciente | Portfolio / fuentes vigentes | Resolución necesaria |
| --- | --- | --- | --- |
| Naturaleza del documento | Variante para sector público | Portfolio general HealthTech | Crear CV general canónico y conservar este como variante |
| Nombre | Ramiro Nicolás Cosa | Ramiro Nicolas Cosa | Adoptar una única escritura |
| Label | Perfil técnico en aplicaciones y sistemas de información | HealthTech Web Developer / implementación clínica | Definir posicionamiento central y labels por variante |
| Práctica privada | 2023–Actualidad | JSON local: 2004–Actualidad; deploy: 2004–2013 | Resuelto: práctica privada continua desde 2004; consultorios solo hasta 2013 |
| Coordinación sanitaria | Más de diez años | Portfolio: más de 20 años en salud | Distinguir experiencia sanitaria total de años en coordinación |
| Clinical Admin | Redacción ambigua sobre deploy del área privada | Admin local/privado, solo landing pública online | Aclarar superficies y alcance |
| Nombre del proyecto | Plataforma web para operaciones de rehabilitación domiciliaria | Plataforma clínica para rehabilitación domiciliaria / Kinesiología a Domicilio | Resuelto: usar `Plataforma clínica para rehabilitación domiciliaria` como nombre del caso |
| Helsinki | Full Stack Development | Full Stack Open | Usar denominación oficial confirmada |
| UTN | 2021 y diplomatura 2022 | Deploy 2020–2021; JSON agrupa 2021–2022 | Confirmar fechas con certificados |
| Título universitario | Licenciatura en Kinesiología | Deploy agrega “y Fisioterapia” | Resuelto: `Licenciatura en Kinesiología y Fisioterapia` |
| Experiencia de desarrollo | Proyectos personales y freelance | JSON local no afirma freelance | Resuelto factual: Fira respalda públicamente trabajo para terceros; usar preferentemente `proyectos propios y trabajos independientes` |
| Stack | Agrega Angular, MongoDB, Neon, Spring Boot y Python | Portfolio no prioriza esas tecnologías | Mantener solo skills pertinentes y demostrables por variante |
| Inglés | EF SET 64/100 con desglose | Portfolio: C1 Advanced | Establecer formulación canónica y fuente de credencial |
| Proyectos | Solo Clinical Admin | Portfolio actual: Clinical + Fira; futuro: Clinical + Impostor + Fira | Incorporar Impostor al CV general; retirar prioridad de Fira |
| Fira | No aparece | Portfolio lo describe incorrectamente y enlaza a una URL histórica caída | Corregir alcance y usar `https://fira-estudio-cyan.vercel.app/` |

Resoluciones confirmadas el 2026-09-09:

- la práctica privada no se discontinuó: continúa desde 2004;
- CIKAF y consultorios describen la etapa hasta 2013; desde 2014 la práctica continuó fuera de consultorios;
- Fira respalda públicamente experiencia en trabajos independientes para terceros; otro trabajo actual para un cliente es confidencial y no se publicará;
- la creación del área de cuidados paliativos fue conjunta;
- el título oficial es `Licenciatura en Kinesiología y Fisioterapia`.
- la experiencia de alto rendimiento corresponde a trabajos con distintos equipos y deportistas dentro de la práctica clínica/deportiva, incluyendo recuperación y planificación anual; no a pertenencia estable a un único equipo.

## 13. Implicancias para la arquitectura futura del portfolio

### El portfolio deja de ser el render web de `cv.json`

Puede seguir reutilizando datos estructurados, pero necesita distinguir:

- hechos compartidos;
- selección específica del CV;
- narrativa de home;
- contenido extenso de casos;
- links y assets;
- variantes por idioma.

Un único JSON monolítico obliga hoy a mezclar funciones diferentes y facilita que el PDF, el deploy y los repositorios diverjan.

### Modelo de contenido sugerido

- `profile`: identidad, contacto, ubicación, idiomas y posicionamiento estable.
- `experience`: cronología canónica con bloques seleccionables.
- `education`: nombres y fechas verificadas.
- `capabilities`: capacidades vinculadas a evidencia.
- `projects`: hechos, estado, rol, links, stack y claims permitidos.
- `home`: selección y orden editorial del portfolio.
- `case studies`: contenido narrativo bilingüe en Markdown.
- `resume variants`: selección y énfasis de cada CV, fuera de la home.

No es una prescripción de carpetas ni una autorización de refactor. Describe responsabilidades de contenido que la implementación futura deberá respetar.

### Requisitos nuevos

- links profundos y estables a cada caso;
- descarga explícita del CV general;
- metadata que distinga CV general de variantes privadas/específicas;
- paridad factual ES/EN;
- validación de links y estados de proyecto;
- mecanismo para que una actualización factual se refleje en ambas piezas;
- revisión humana antes de publicar copy profesional.

## 14. Modelo editorial para cards y casos

### Card de proyecto

Debe responder en pocos segundos:

1. ¿Qué producto es?
2. ¿Qué problema resuelve?
3. ¿Qué hizo Ramiro?
4. ¿Qué evidencia técnica importa?
5. ¿Cuál es su estado real?

Estructura sugerida:

- nombre;
- descriptor de una línea;
- problema/usuario en dos líneas;
- contribución breve;
- máximo cuatro tags de señal;
- estado;
- CTA `Ver caso`;
- sitio/código como enlaces secundarios.

### Caso de estudio

Estructura común:

1. Contexto y problema.
2. Usuarios y restricciones.
3. Rol y alcance personal.
4. Flujo o modelo central.
5. Decisiones destacadas.
6. Arquitectura relevante.
7. Calidad, seguridad o privacidad.
8. Validación y aprendizaje.
9. Límites y próximos desafíos.
10. Links y material visual.

No todos los casos deben tener la misma longitud. Clinical e Impostor justifican casos completos; Fira puede comenzar como mini-caso.

## 15. CTAs y conversión

### CTA principal de la home

ES: `Ver casos destacados`
EN: `View selected work`

### CTA secundario

ES: `Contactarme`
EN: `Get in touch`

### CTA de proyectos

- `Ver caso` / `View case study`.
- `Sitio público` / `Live site`, solo si funciona y representa el alcance descrito.
- `Código` / `Source`, cuando el repositorio ayuda a comprender el proyecto.

### Contacto final

Debe incluir una invitación explícita, email y LinkedIn. El CV debe estar disponible sin depender de la command palette.

## 16. Criterios de aceptación editorial

Antes de implementar, el contenido aprobado debe cumplir:

- se entiende el perfil sin conocer la historia previa;
- HealthTech es el centro, no una etiqueta decorativa;
- la experiencia sanitaria se presenta como expertise vigente;
- Clinical e Impostor muestran capacidades diferentes y complementarias;
- Fira describe su estado actual con exactitud;
- cada claim importante tiene fuente o evidencia;
- no se inventan métricas, impacto, seniority ni responsabilidades;
- español e inglés expresan lo mismo con redacción natural;
- los límites se presentan con honestidad;
- el visitante encuentra una acción profesional clara;
- el contenido principal puede escanearse en 60–90 segundos.
- CV y portfolio comparten hechos, fechas y posicionamiento central;
- el CV selecciona y el portfolio demuestra, sin duplicación innecesaria;
- ninguna variante específica se presenta como CV general.

## 17. Decisiones humanas pendientes

Estas decisiones deben resolverse antes de convertir el brief en copy definitivo:

1. ¿Se elimina la command palette o se simplifica?
2. ¿Se usará públicamente `proyectos propios y trabajos independientes` o la palabra `freelance`?
3. ¿Cuál es la denominación exacta de cada formación UTN según sus certificados?

## 18. Primer incremento de implementación recomendado

Una vez aprobado este brief, el primer incremento debe ser exclusivamente de integridad de contenido:

1. cerrar una tabla canónica de identidad, cronología, formación, idiomas y claims;
2. definir el CV general frente a la variante existente para sector público;
3. corregir la ficha ES/EN de Fira;
4. completar el caso Clinical EN;
5. preparar los datos ES/EN de Impostor sin insertarlos todavía en la UI;
6. validar URLs y claims;
7. revisar el diff de contenido antes de reorganizar componentes o editar el CV.

Este orden elimina contradicciones antes de cambiar la estructura visual.

La secuencia técnica completa quedó documentada en `docs/portfolio-implementation-plan-2026-09.md`.
