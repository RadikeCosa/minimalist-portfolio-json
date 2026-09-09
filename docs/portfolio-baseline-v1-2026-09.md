# Portfolio profesional — Baseline v1

Fecha de congelamiento prevista: 2026-09-09

## Posicionamiento

**Análisis, implementación y producto.**

El portfolio presenta un perfil capaz de comprender procesos y necesidades, definir flujos y reglas de negocio e implementar productos digitales. La experiencia en salud funciona como especialización y evidencia de criterio operativo, comunicación y priorización; no como límite sectorial.

## Sistema CV + portfolio

- El CV general ofrece síntesis, cronología, formación, capacidades y tres proyectos priorizados.
- El portfolio aporta la evidencia: decisiones, alcance, límites, demostraciones, código y casos completos.
- Ambos comparten título profesional, hechos verificables, jerarquía y enlaces recíprocos.
- Las futuras versiones de CV por postulación deben derivarse de esta baseline, ajustando énfasis y palabras clave sin alterar hechos.

## Arquitectura pública

Doce rutas estáticas: portada, About, Servicios y tres casos de proyecto, cada superficie en español e inglés. Las portadas descargan el CV correspondiente al idioma actual.

El hero funciona como punto de entrada: distingue los destinos `Proyectos`, `Sobre mí` y `Servicios` de las acciones `Descargar CV` y `Contacto`. Los enlaces contextuales dentro de Experiencia, About y Contacto se mantienen como recorridos complementarios.

## Jerarquía de evidencia

1. **Plataforma clínica para rehabilitación domiciliaria:** producto a medida HealthTech; recepción estructurada de consultas y gestión clínica privada/local basada en FHIR.
2. **Juegos Familiares — Impostor:** producto propio en uso, con más de 100 partidas familiares documentadas y decisiones de arquitectura multi-dispositivo.
3. **Fira Estudio:** trabajo independiente que evolucionó de e-commerce con Mercado Pago a catálogo según la capacidad operativa del negocio.

## Oferta profesional

El sitio sostiene dos objetivos compatibles:

- postulación a posiciones de análisis funcional, implementación y producto digital;
- servicios para pymes, profesionales y equipos pequeños, partiendo del objetivo y el contexto antes de elegir una herramienta o construir software.

## Base técnica

- Astro 7.3.2 y TypeScript 6.0.3;
- build estático, doce rutas y contenido ES/EN;
- canonical, `hreflang`, sitemap, robots, Open Graph, Twitter Cards y JSON-LD;
- temas claro/oscuro, responsive, navegación por teclado y preferencia de movimiento reducido;
- validación local automatizada y workflow de integración continua;
- npm como único gestor de paquetes.

## Validación del candidato

- `astro check`: 33 archivos, 0 errores, 0 advertencias y 0 sugerencias;
- build estático: 12 páginas generadas;
- validador HTML de W3C: 12 páginas, 0 errores y 0 advertencias;
- auditoría de npm: 0 vulnerabilidades conocidas;
- CV ES/EN: A4, dos páginas, texto extraíble, 13 enlaces y revisión visual completa;
- revisión móvil y de tema oscuro sin desbordamiento ni defectos visibles.

## Regla de congelamiento

Después de publicar y validar producción, la v1 se considera estable. Los cambios siguientes deben responder a evidencia concreta: una postulación, una nueva necesidad de servicio, métricas de búsqueda/uso o un proyecto con nueva evidencia. No se reabre el posicionamiento por ajustes cosméticos aislados.

## Pendientes externos y límites conocidos

- Solicitar rastreo de las URLs y enviar el sitemap desde Google Search Console una vez desplegada esta versión.
- Los PDF son legibles, extraíbles y enlazables, pero no son documentos PDF/UA etiquetados semánticamente.
- Una política CSP estricta requeriría extraer o autorizar los scripts y estilos inline actuales; se difiere para no agregar complejidad desproporcionada a un sitio estático sin formularios ni autenticación.
