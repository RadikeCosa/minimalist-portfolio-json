import type { Language } from "@/i18n/types";

const servicesContent = {
  es: {
    title: "Servicios",
    lead: "Soluciones digitales para necesidades concretas.",
    intro: [
      "No todo problema necesita una aplicación. Trabajo a partir de la necesidad, no de un formato predeterminado. La respuesta puede ser ordenar un proceso, configurar mejor herramientas existentes o desarrollar una solución a medida.",
      "Puedo colaborar con pymes, profesionales y equipos pequeños que necesitan mejorar su presencia digital, organizar una operación, construir una herramienta o adaptar un producto cuando cambian sus necesidades.",
    ],
    helpTitle: "En qué puedo ayudar",
    help: [
      {
        title: "Presencia y canales digitales",
        description: "Perfiles de negocio, LinkedIn, sitios o catálogos, criterios de contenido y canales de consulta.",
      },
      {
        title: "Organización del trabajo",
        description: "Agenda, consultas, información, tareas y selección o configuración de herramientas para ordenar el trabajo cotidiano.",
      },
      {
        title: "Productos web a medida",
        description: "Catálogos, sitios, herramientas internas o sistemas de gestión diseñados a partir del proceso real.",
      },
      {
        title: "Evolución de soluciones",
        description: "Revisar lo construido cuando cambia la necesidad: simplificar, ampliar o adaptar flujos, contenido y funcionalidades.",
      },
    ],
    scopeTitle: "Alcance",
    scope: "El mejor punto de partida es un problema delimitado. La respuesta no se define de antemano: puede resolverse configurando herramientas existentes o requerir un desarrollo propio. Si la necesidad todavía está abierta, el trabajo puede comenzar por relevamiento y definición.",
    processTitle: "Cómo trabajo",
    process: [
      { title: "Entender", description: "Contexto, personas, proceso actual y restricciones." },
      { title: "Elegir y definir", description: "Qué herramientas y qué alcance tienen sentido para ese contexto." },
      { title: "Implementar", description: "Configuración, integración o desarrollo por etapas, según la necesidad." },
      { title: "Validar y ajustar", description: "Pruebas, revisión con uso real y cambios cuando la necesidad evoluciona." },
    ],
    toolsTitle: "Herramientas y criterio",
    tools: [
      "Integro herramientas de IA de forma habitual en el análisis, el aprendizaje y la implementación. Me ayudan a investigar, contrastar alternativas, acelerar tareas y acceder más rápido a información específica que después verifico.",
      "La IA amplía mi capacidad, pero no reemplaza el contexto, las decisiones ni la validación. El criterio sigue apoyado en el problema, la experiencia y la revisión del resultado.",
    ],
    workTitle: "Trabajo relacionado",
    projects: [
      {
        title: "Fira Estudio",
        badge: "Trabajo independiente",
        description: "Producto web a medida para un emprendimiento textil. La primera versión incluyó carrito, checkout e integración certificada con Mercado Pago. Cuando la demanda superó la capacidad de producción, replanteamos el producto como una vidriera con confirmación de pedidos por teléfono.",
        caseLabel: "Ver caso",
        caseHref: "/proyectos/fira-estudio/",
        siteLabel: "Ver sitio",
        siteHref: "https://fira-estudio-cyan.vercel.app/",
      },
      {
        title: "Solución para kinesiología domiciliaria",
        badge: "Producto a medida",
        description: "Combina una página pública para recibir consultas pertinentes con información estructurada y una superficie clínica para llevar registros y organizar la atención.",
        caseLabel: "Ver caso",
        caseHref: "/proyectos/plataforma-clinica/",
        siteLabel: "Ver sitio",
        siteHref: "https://kinesiologiaadomicilio.vercel.app/",
      },
    ],
    backgroundTitle: "Sobre mi recorrido",
    background: "Mi experiencia combina salud y coordinación de servicios con análisis e implementación de productos digitales.",
    backgroundAction: "Más sobre mí",
    contactTitle: "Contacto",
    contact: "Si tenés una necesidad concreta, podés contarme el contexto y qué querés resolver. Para una primera conversación alcanza con describir el problema, quiénes lo usarían y qué existe hoy.",
    contactAction: "Consultar un proyecto",
    back: "← Volver al portfolio",
    actionsLabel: "Enlaces del proyecto",
  },
  en: {
    title: "Services",
    lead: "Digital solutions for concrete needs.",
    intro: [
      "Not every problem needs an application. I start from the need, not from a predetermined format. The answer may be to organize a process, configure existing tools more effectively, or build a tailored solution.",
      "I can work with small businesses, independent professionals, and small teams that need to improve their digital presence, organize an operation, build a tool, or adapt a product as their needs change.",
    ],
    helpTitle: "How I can help",
    help: [
      {
        title: "Digital presence and channels",
        description: "Business profiles, LinkedIn, websites or catalogs, content direction, and inquiry channels.",
      },
      {
        title: "Work organization",
        description: "Scheduling, inquiries, information, tasks, and the selection or configuration of tools for day-to-day work.",
      },
      {
        title: "Tailored web products",
        description: "Catalogs, websites, internal tools, or management systems designed around the real process.",
      },
      {
        title: "Solution evolution",
        description: "Review what has been built when the need changes: simplify, expand, or adapt workflows, content, and features.",
      },
    ],
    scopeTitle: "Scope",
    scope: "The best starting point is a clearly defined problem. The answer is not decided in advance: it may be solved by configuring existing tools or require custom development. If the need is still open-ended, the work can begin with process review and definition.",
    processTitle: "How I work",
    process: [
      { title: "Understand", description: "Context, people, the current process, and constraints." },
      { title: "Choose and define", description: "Which tools and scope make sense for the context." },
      { title: "Implement", description: "Configuration, integration, or development in stages, depending on the need." },
      { title: "Validate and adjust", description: "Testing, review through real use, and changes as the need evolves." },
    ],
    toolsTitle: "Tools and judgment",
    tools: [
      "AI tools are a regular part of my analysis, learning, and implementation work. They help me research, compare alternatives, accelerate tasks, and access specific information more quickly, which I then verify.",
      "AI extends my capacity, but it does not replace context, decisions, or validation. Judgment remains grounded in the problem, experience, and review of the result.",
    ],
    workTitle: "Related work",
    projects: [
      {
        title: "Fira Estudio",
        badge: "Independent work",
        description: "A tailored web product for a textile business. The first version included a cart, checkout, and a certified Mercado Pago integration. When demand exceeded production capacity, we reframed the product as a showcase with order confirmation by phone.",
        caseLabel: "View case study",
        caseHref: "/en/projects/fira-estudio/",
        siteLabel: "View live site",
        siteHref: "https://fira-estudio-cyan.vercel.app/",
      },
      {
        title: "Home physiotherapy solution",
        badge: "Tailored product",
        description: "It combines a public page for receiving relevant inquiries with structured information and a clinical workspace for maintaining records and organizing care.",
        caseLabel: "View case study",
        caseHref: "/en/projects/clinical-platform/",
        siteLabel: "View live site",
        siteHref: "https://kinesiologiaadomicilio.vercel.app/",
      },
    ],
    backgroundTitle: "About my background",
    background: "My experience combines healthcare and service coordination with the analysis and implementation of digital products.",
    backgroundAction: "More about me",
    contactTitle: "Contact",
    contact: "If you have a concrete need, you can send me the context and what you want to solve. For a first conversation, it is enough to describe the problem, who would use it, and what exists today.",
    contactAction: "Discuss a project",
    back: "← Back to portfolio",
    actionsLabel: "Project links",
  },
} as const;

export function getServicesContent(lang: Language) {
  return servicesContent[lang];
}
