# Posicionamiento local: programador en Neuquén

Revisión: 9 de octubre de 2026.

## Objetivo y estrategia

Conseguir consultas de personas que buscan un programador en Neuquén, manteniendo el portfolio útil para oportunidades laborales. La portada es la página principal para esa búsqueda y para variantes como «desarrollador web en Neuquén» y «desarrollo web en Neuquén». No hace falta crear otra página que repita la misma oferta.

La diferenciación es comprobable: residencia en Neuquén, productos web desde 2020, sitios públicos y experiencia en procesos de salud. Los casos de proyectos aportan evidencia concreta. No prometer primeros puestos, plazos de posicionamiento ni resultados comerciales sin datos.

## Auditoría y alcance aprobado

Se conservan únicamente los cambios de metadatos y datos estructurados. Por decisión del titular, se restauraron los textos visibles originales en ambos idiomas y se retiró la nueva sección de servicios. La revisión del contenido visible queda pendiente para otra etapa.

| Hallazgo | Evidencia | Prioridad y acción |
| --- | --- | --- |
| La portada no conectaba claramente programación y ubicación | Título anterior: «Ramiro Nicolás Cosa · Desarrollo web y análisis funcional»; H1 sin ciudad | Preparado: título SEO «Programador en Neuquén» y descripción; cambios en encabezado y presentación pendientes |
| La oferta para un cliente era poco explícita | Predominan proyectos, trayectoria y capacidades técnicas | Pendiente: revisar la presentación de servicios con el titular, sin cambios visibles en esta entrega |
| Faltaba describir el servicio local en datos estructurados | El grafo de la portada contenía WebSite y Person | Media: Service con proveedor Person y área Neuquén, coherente con el contenido visible |
| Buenas bases de rastreo | HTML estático, robots abierto, sitemap de 12 páginas, canonical y alternates por idioma | Mantener y verificar tras publicar |
| Sin línea de base de búsquedas | El titular no sabe si tiene Search Console; no se accedió a estadísticas privadas | Alta: verificar propiedad y registrar impresiones, clics, consultas y páginas indexadas |

La consulta pública mostró competidores con páginas orientadas a Neuquén. No constituye una medición de posiciones locales de Google ni de volúmenes de búsqueda. La versión pública consultada tenía una presentación anterior al código local; hace falta publicar estos cambios para evaluarlos en producción. No se midieron Core Web Vitals de usuarios reales ni se confirmó la indexación en Google.

## Acciones externas por orden

### 1. Publicar y configurar Search Console

- Publicar los cambios validados mediante el flujo habitual del repositorio.
- Entrar en [Google Search Console](https://search.google.com/search-console/) y comprobar si ya existe la propiedad.
- Si no existe, añadir una propiedad de prefijo de URL: `https://ramirocosa.is-a.dev/`. Verificar mediante etiqueta HTML o archivo de Google; el código exacto debe obtenerse de la cuenta del titular. La propiedad de dominio requiere acceso al DNS.
- Enviar `https://ramirocosa.is-a.dev/sitemap.xml` en Sitemaps.
- Inspeccionar la portada y solicitar indexación después de publicar. Revisar canonical elegido por Google y posibles exclusiones. Enviar un sitemap o solicitar indexación no garantiza que Google indexe o posicione la página.
- Registrar una línea de base y revisar rendimiento después de 4–6 semanas. Conservar también ventanas de 28 días para comparar tendencias.

### 2. Crear Google Business Profile

El titular confirmó que recibe clientes en un lugar propio. Por eso tiene sentido evaluar un perfil para la actividad de desarrollo web: la atención presencial es un requisito de elegibilidad.

- Usar el nombre profesional real que se utiliza públicamente, sin agregar palabras clave al nombre para posicionar.
- Elegir la categoría disponible que mejor describa la actividad principal de desarrollo web. Confirmar las opciones dentro del alta; no seleccionar kinesiología para este servicio.
- Completar sitio, teléfono, descripción y servicios reales. Publicar dirección únicamente si el lugar cumple las condiciones de Google, incluida señalización fija con el nombre de la actividad y atención acorde con lo declarado. Si trabajás solo con cita, revisar las reglas específicas de horarios.
- Agregar fotos auténticas del espacio de trabajo y completar la verificación que solicite Google.
- Si también visitás clientes, añadir solo las zonas donde efectivamente lo hacés. Ocultar la dirección como negocio de área de servicio corresponde cuando visitás clientes y no los recibís allí; no es una alternativa automática para evitar requisitos del establecimiento.
- Solicitar reseñas a clientes reales de programación, sin incentivos ni filtrar solo a quienes dejarían una reseña positiva. Mantener separada la reputación de kinesiología.
- No crear todavía datos LocalBusiness con dirección en el sitio: faltan los datos comerciales confirmados. El marcado Service ya describe la oferta sin inventar una oficina pública ni valoraciones.

El perfil puede ayudar a competir en resultados locales y Maps; la web trabaja también la búsqueda orgánica. Google basa los resultados locales principalmente en relevancia, distancia y prominencia. Ninguna optimización puede controlar la distancia al usuario.

### 3. Priorizar LinkedIn y GitHub

Recomendación editorial para este portfolio: mejorar los perfiles existentes antes de abrir nuevas redes.

- LinkedIn: aclarar desarrollo web y ubicación en Neuquén, enlazar el portfolio y destacar dos o tres proyectos con el problema, aporte y resultado verificable. Sirve también para contactos profesionales y oportunidades laborales.
- GitHub: poner el portfolio en el perfil y enlazarlo desde los README de proyectos propios cuando sea pertinente. Mantener demostraciones y documentación claras.
- Instagram: opcional si vas a mostrar trabajos y conectar con comercios o profesionales locales. No hace falta sostenerlo para cumplir el objetivo de búsqueda orgánica.
- Facebook: opcional si tu público participa en comunidades locales; aportar contenido útil y respetar sus reglas.

Abrir perfiles por sí solo no garantiza una mejora de posiciones. Elegir canales que puedas mantener y donde estén tus potenciales clientes.

### 4. Conseguir referencias locales y fortalecer los casos

- Pedir a clientes o colaboradores un enlace de atribución cuando corresponda, con su autorización. No comprar enlaces ni hacer intercambios masivos.
- Participar en comunidades, encuentros y directorios profesionales pertinentes de Neuquén. Priorizar menciones reales y datos consistentes de nombre, sitio y contacto.
- Ampliar los casos con restricciones, decisiones y resultados observables. Agregar testimonios de clientes únicamente con autorización.
- Publicar una guía útil cuando puedas aportar experiencia propia: qué preparar para encargar una web o cómo decidir entre catálogo y tienda. No producir páginas repetidas para cada ciudad.
- Un dominio propio puede favorecer recordación y presentación profesional, pero no es requisito ni garantía de ranking. Si se cambia, planificar redirecciones permanentes y actualización de Search Console, canonical, sitemap y perfiles.

## Cómo medir

En Search Console, filtrar consultas con `neuqu[eé]n` y revisar también búsquedas de «programador», «desarrollador web» y marca. Separar portada y casos. Comparar impresiones, clics, CTR y posición media; esta última varía según ubicación, dispositivo y consulta y no representa un puesto fijo.

Registrar las consultas comerciales recibidas y preguntar cómo llegaron. Search Console mide visitas desde Google, no contactos concretos. Un registro manual inicial evita instalar analítica innecesaria. En Business Profile, revisar las interacciones disponibles tras verificar el perfil.

Primer control: publicación, indexabilidad y propiedad verificada. Siguiente control: aparición de consultas relevantes. Criterio de negocio: contactos adecuados, además de tráfico.

## Fuentes oficiales

- [Guía SEO de Google: títulos, contenido, enlaces y tiempos de evaluación](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es).
- [Acerca de Search Console](https://support.google.com/webmasters/answer/9128668?hl=es).
- [Enviar y gestionar sitemaps](https://support.google.com/webmasters/answer/7451001?hl=es).
- [Elegibilidad de Google Business Profile](https://support.google.com/business/answer/13763036?hl=es).
- [Directrices del perfil: nombre, dirección, señalización y horarios](https://support.google.com/business/answer/3038177?hl=es).
- [Factores del posicionamiento local](https://support.google.com/business/answer/7091?hl=es).

Los cambios están preparados en el repositorio. Crear/verificar perfiles y Search Console requiere la cuenta del titular; no se realizaron esas acciones externas durante esta revisión.
