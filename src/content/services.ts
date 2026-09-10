import type { Language } from "@/i18n/types";

const servicesContent = {
  es: {
    title: "Servicios",
    lead: "Soluciones digitales para pymes y profesionales.",
    intro: [
      "El problema primero. La solución depende del contexto.",
      "Después propongo e implemento lo que mejor encaja: ordenar un proceso, configurar una herramienta, integrar servicios o desarrollar un producto a medida.",
    ],
    helpTitle: "Áreas de trabajo",
    help: [
      {
        title: "Presencia digital",
        description: "Perfiles, sitios, catálogos, contenido y canales de consulta.",
      },
      {
        title: "Organización del trabajo",
        description: "Agenda, consultas, información, tareas y herramientas de trabajo.",
      },
      {
        title: "Productos a medida",
        description: "Aplicaciones web, herramientas internas y sistemas de gestión.",
      },
      {
        title: "Mejoras e integraciones",
        description: "Simplificación, conexión o adaptación de soluciones existentes.",
      },
    ],
    scopeTitle: "Criterio antes que herramienta",
    scope: [
      "Combino experiencia en salud, coordinación de servicios y desarrollo de software. Eso me ayuda a entender personas, procesos y restricciones antes de decidir qué conviene hacer.",
      "Una página, una automatización o una aplicación pueden ser parte de la respuesta. La elección depende del objetivo y del contexto.",
    ],
    communicationTitle: "Comunicación",
    communication: [
      "Mi experiencia en salud y cuidados paliativos desarrolló una forma de trabajo basada en escuchar, detectar prioridades y comunicar con precisión, incluso ante información sensible o decisiones difíciles.",
      "Estas capacidades forman parte del análisis, la definición y la implementación.",
    ],
    processTitle: "Proceso",
    process: [
      { title: "Relevar", description: "Contexto, personas, funcionamiento actual y restricciones." },
      { title: "Definir", description: "Necesidades, prioridades, alcance y herramientas." },
      { title: "Implementar", description: "Configuración, integración o desarrollo." },
      { title: "Ajustar", description: "Pruebas, uso real y evolución." },
    ],
    toolsTitle: "Tecnología e IA",
    tools: [
      "Uso herramientas de IA para investigar, contrastar alternativas, implementar y revisar.",
      "Amplían el alcance y aceleran el trabajo. El criterio y la validación siguen formando parte del proceso.",
    ],
    workTitle: "Casos relacionados",
    projects: [
      {
        title: "Fira Estudio",
        badge: "Trabajo independiente",
        description: "E-commerce con Mercado Pago, adaptado posteriormente a catálogo cuando la demanda superó la capacidad de producción.",
        caseLabel: "Ver caso",
        caseHref: "/proyectos/fira-estudio/",
        siteLabel: "Ver sitio",
        siteHref: "https://fira-estudio-cyan.vercel.app/",
      },
      {
        title: "Solución para kinesiología domiciliaria",
        badge: "Producto a medida",
        description: "Recepción estructurada de consultas y gestión de registros para rehabilitación domiciliaria.",
        caseLabel: "Ver caso",
        caseHref: "/proyectos/plataforma-clinica/",
        siteLabel: "Ver sitio",
        siteHref: "https://kinesiologiaadomicilio.vercel.app/",
      },
    ],
    backgroundTitle: "Recorrido",
    background: "Salud, coordinación de servicios y desarrollo de software. Un recorrido diverso aplicado a problemas concretos.",
    backgroundAction: "Más sobre mí",
    contactTitle: "Contacto",
    contact: "Hablemos de un problema concreto.",
    contactAction: "Conversar sobre un proyecto",
    back: "← Volver al portfolio",
    actionsLabel: "Enlaces del proyecto",
  },
  en: {
    title: "Services",
    lead: "Digital solutions for small businesses and independent professionals.",
    intro: [
      "The problem comes first. The solution depends on the context.",
      "Then I propose and implement the best fit: organizing a process, configuring a tool, integrating services, or building a tailored product.",
    ],
    helpTitle: "Areas of work",
    help: [
      {
        title: "Digital presence",
        description: "Profiles, websites, catalogs, content, and inquiry channels.",
      },
      {
        title: "Work organization",
        description: "Scheduling, inquiries, information, tasks, and work tools.",
      },
      {
        title: "Tailored products",
        description: "Web applications, internal tools, and management systems.",
      },
      {
        title: "Improvements and integrations",
        description: "Simplification, connection, or adaptation of existing solutions.",
      },
    ],
    scopeTitle: "Choosing the right approach",
    scope: [
      "I combine experience in healthcare, service coordination, and software development. That helps me understand people, processes, and constraints before deciding what makes sense.",
      "A website, an automation, or an application can all be part of the answer. The choice depends on the objective and context.",
    ],
    communicationTitle: "Communication",
    communication: [
      "My experience in healthcare and palliative care shaped a way of working based on listening, identifying priorities, and communicating precisely, even when information is sensitive or decisions are difficult.",
      "These abilities are part of analysis, definition, and implementation.",
    ],
    processTitle: "Process",
    process: [
      { title: "Assess", description: "Context, people, the current process, and constraints." },
      { title: "Define", description: "Needs, priorities, scope, and tools." },
      { title: "Implement", description: "Configuration, integration, or development." },
      { title: "Refine", description: "Testing, real use, and evolution." },
    ],
    toolsTitle: "Technology and AI",
    tools: [
      "I use AI tools to research, compare alternatives, implement, and review.",
      "They extend my range and accelerate the work. Judgment and validation remain part of the process.",
    ],
    workTitle: "Related cases",
    projects: [
      {
        title: "Fira Estudio",
        badge: "Independent work",
        description: "E-commerce with Mercado Pago, later adapted into a catalog when demand exceeded production capacity.",
        caseLabel: "View case study",
        caseHref: "/en/projects/fira-estudio/",
        siteLabel: "View live site",
        siteHref: "https://fira-estudio-cyan.vercel.app/",
      },
      {
        title: "Home physiotherapy solution",
        badge: "Tailored product",
        description: "Structured inquiries and record management for home rehabilitation.",
        caseLabel: "View case study",
        caseHref: "/en/projects/clinical-platform/",
        siteLabel: "View live site",
        siteHref: "https://kinesiologiaadomicilio.vercel.app/",
      },
    ],
    backgroundTitle: "Background",
    background: "Healthcare, service coordination, and software development. A diverse background applied to concrete problems.",
    backgroundAction: "More about me",
    contactTitle: "Contact",
    contact: "Let's discuss a specific problem.",
    contactAction: "Discuss a project",
    back: "← Back to portfolio",
    actionsLabel: "Project links",
  },
} as const;

export function getServicesContent(lang: Language) {
  return servicesContent[lang];
}
