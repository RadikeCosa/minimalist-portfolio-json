---
layout: "../../layouts/ProjectCaseLayout.astro"
title: "Plataforma clínica para rehabilitación domiciliaria"
description: "Caso de estudio breve sobre un producto digital para organizar solicitudes, pacientes, tratamientos, visitas y documentación clínica en rehabilitación domiciliaria."
locale: "es"
alternateUrl: "/en/projects/clinical-platform"
role: "Análisis funcional y desarrollo de producto"
period: "2020 — Actualidad"
stack:
  - "Next.js"
  - "TypeScript"
  - "FHIR"
  - "Vitest"
website: "https://kinesiologiaadomicilio.vercel.app/"
repository: "https://github.com/RadikeCosa/kinesiologiaadomicilio"
---

## Contexto y problema

La rehabilitación domiciliaria combina momentos muy distintos en un mismo recorrido: consulta inicial, datos administrativos, decisión de iniciar o no un tratamiento, visitas sucesivas, registro clínico y documentación para seguimiento. En la práctica, esas piezas no viven aisladas. Una llamada puede requerir completar datos de contacto, revisar condiciones de inicio, sostener continuidad entre visitas y dejar una síntesis clara para el próximo paso.

Trasladar ese flujo directamente a pantallas o tablas no alcanza. Si una solicitud se confunde con un tratamiento, o si una visita se registra sin contexto clínico y temporal, la herramienta puede ordenar datos pero no acompañar el trabajo real. El desafío fue modelar una operación cotidiana de salud: que cada dato tenga un lugar, que cada estado habilite la acción correcta y que el sistema ayude a mantener continuidad sin reemplazar el criterio profesional.

## El producto

El proyecto combina dos superficies complementarias.

La superficie pública funciona como punto de orientación y contacto. Presenta servicios, contexto de atención, criterios generales y llamadas a WhatsApp para facilitar la consulta inicial.

La superficie privada vive bajo `/admin` y organiza el trabajo clínico-operativo. No está planteada como SaaS público ni como plataforma multiusuario. Su objetivo es sostener un flujo local de pacientes, solicitudes, tratamientos, visitas y reportes. La interfaz separa gestión administrativa, gestión clínica y tratamiento, pero mantiene esas áreas conectadas alrededor del paciente.

Esta separación permite que el sitio público cumpla una función de entrada y que el área privada concentre decisiones operativas: revisar una solicitud, completar datos mínimos, iniciar tratamiento, registrar visitas dentro del ciclo activo y preparar documentación derivada de lo ya registrado.

## Del proceso real al flujo digital

El flujo implementado parte de una regla importante: una consulta no equivale automáticamente a tratamiento.

Para casos nuevos, la puerta recomendada es registrar una solicitud de atención. Esa acción crea un paciente mínimo y una `ServiceRequest` en revisión. La solicitud puede revisarse, aceptarse, cancelarse, cerrarse sin tratamiento o marcarse como carga errónea. Solo una solicitud aceptada, válida y no usada previamente puede iniciar un ciclo.

Cuando el tratamiento comienza, se crea un `EpisodeOfCare` vinculado a esa solicitud. A partir de ese episodio activo se habilita el registro de visitas. Las visitas se modelan como `Encounter` y quedan asociadas al contexto temporal del tratamiento: no pueden registrarse sin episodio activo, antes del inicio, después del cierre ni con fechas futuras.

La ficha del paciente traduce ese estado en una próxima acción legible. Si falta información, orienta a completar datos administrativos. Si hay una solicitud pendiente, guía a revisarla. Si existe una solicitud aceptada, propone iniciar tratamiento. Si el tratamiento está activo, la acción principal pasa a registrar la próxima visita.

## Mi aporte

Definí el flujo funcional, traduje reglas del dominio sanitario a estados y validaciones del producto, modelé las principales entidades con FHIR y desarrollé las superficies necesarias para sostener ese recorrido.

El trabajo incluyó análisis del proceso real, definición de responsabilidades por pantalla, decisiones de jerarquía, implementación de formularios y acciones de servidor, mappers entre FHIR y dominio, read models para que la UI no dependa de recursos crudos, pruebas automatizadas y documentación del contrato operativo.

La prioridad no fue mostrar muchas funcionalidades, sino ordenar decisiones: qué representa cada entidad, cuándo una acción está permitida, qué información debe verse primero y qué límites conviene dejar explícitos.

## Decisiones destacadas

**Solicitud antes de tratamiento.** No toda consulta termina en un ciclo clínico. Por eso separé la entrada administrativa del inicio del tratamiento: la solicitud puede quedar en revisión, aceptarse o cerrarse sin crear visitas. El beneficio es que el sistema evita tratar cualquier contacto como caso activo. El límite es que requiere un paso explícito más antes de comenzar.

**Áreas diferenciadas pero conectadas.** Datos administrativos, contexto clínico y tratamiento tienen necesidades distintas. Mezclarlos aumenta la carga de decisión. La interfaz los separa y los conecta desde el hub del paciente. Esto da una responsabilidad clara a cada pantalla. El límite es que algunas acciones requieren navegar entre áreas.

**Visitas dentro de un episodio activo.** Una visita necesita contexto clínico y temporal. La decisión fue registrarla solo cuando existe un `EpisodeOfCare` activo y validar que sus fechas pertenezcan a ese ciclo. Esto reduce registros fuera de contexto. El límite es que no cubre escenarios complejos con múltiples episodios activos simultáneos; si aparecen inconsistencias, el sistema las detecta pero no las corrige automáticamente.

**FHIR aislado de la UI.** Los recursos FHIR son útiles para modelar relaciones clínicas, pero no son una buena forma directa de construir pantallas. Por eso la lectura pasa por cliente FHIR, repositorios, mappers y modelos de lectura. La UI trabaja con conceptos como solicitud, tratamiento activo o próxima acción. El límite es que cada cambio de contrato exige alinear varias capas.

## FHIR como modelo pragmático

FHIR se usa en este proyecto como modelo clínico local, no como interoperabilidad productiva con sistemas externos. Tampoco intenta ser una historia clínica completa. La decisión fue aprovechar recursos conocidos para estructurar entidades y relaciones sin convertir el producto en una implementación amplia del estándar.

`Patient` sostiene la identidad longitudinal. `ServiceRequest` representa la solicitud inicial. `EpisodeOfCare` modela el ciclo de tratamiento. `Encounter` registra visitas. `Observation` permite anexar métricas funcionales. `Condition` guarda diagnósticos de referencia o contexto clínico. `Practitioner` configura el profesional firmante y `DocumentReference` permite persistir informes evolutivos como snapshots asociados al paciente y al episodio.

La UI no manipula esos recursos directamente. Los repositorios consultan o escriben FHIR, los mappers traducen datos al dominio y los read models preparan información para pantalla. Esa capa intermedia permite que el producto hable el lenguaje operativo del flujo, mientras FHIR aporta estructura para guardar relaciones clínicas.

## Calidad, privacidad y límites

El proyecto incluye tipado, validaciones de dominio, pruebas automatizadas sobre reglas, mappers, acciones, componentes y composición de reportes. También mantiene documentación activa sobre flujo operativo, FHIR y responsabilidades por superficie.

Para portfolio, la información mostrada debe ser demo o ficticia. El área administrativa es privada/local, está marcada como `noindex` y queda fuera del tracking público. El alcance actual no incluye multiusuario, autenticación productiva compleja, interoperabilidad externa, portal de pacientes ni una historia clínica completa.

El valor del caso está en mostrar cómo combinar experiencia sanitaria, análisis funcional y desarrollo de software para convertir un proceso real de rehabilitación domiciliaria en un producto digital con límites explícitos y decisiones defendibles.
