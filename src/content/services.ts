import type { Language } from "@/i18n/types";

const servicesContent = {
  es: {
    title: "Servicios",
    lead: "Análisis, implementación y producto para pymes y profesionales.",
    intro: [
      "No hace falta llegar con la solución definida. Primero entiendo qué necesitás lograr y después propongo la respuesta adecuada: un sitio, una herramienta existente, un cambio de proceso o una combinación.",
      "Cada recomendación debe responder a un objetivo concreto. Te explico qué conviene hacer, por qué y cómo funcionaría.",
    ],
    helpTitle: "Áreas de trabajo",
    help: [
      {
        title: "Presencia digital",
        description: "Perfiles, sitios, catálogos, contenido y canales de consulta.",
      },
      {
        title: "Operación",
        description: "Agenda, consultas, información, tareas y herramientas de trabajo.",
      },
      {
        title: "Productos a medida",
        description: "Aplicaciones web, herramientas internas y sistemas de gestión.",
      },
      {
        title: "Evolución",
        description: "Simplificación, integración o adaptación de soluciones existentes.",
      },
    ],
    scopeTitle: "Criterio antes que herramienta",
    scope: [
      "Combino experiencia en salud, coordinación de servicios y desarrollo de software. Ese recorrido me permite entender personas, procesos y restricciones antes de elegir una solución.",
      "Configurar, integrar, automatizar o desarrollar son medios. La decisión depende del contexto.",
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
      "Integro herramientas de IA para investigar, contrastar alternativas, implementar y revisar.",
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
    contact: "Contame el problema, quién lo usa y cómo se resuelve hoy.",
    contactAction: "Plantear una necesidad",
    back: "← Volver al portfolio",
    actionsLabel: "Enlaces del proyecto",
  },
  en: {
    title: "Services",
    lead: "Analysis, implementation, and product for small businesses and independent professionals.",
    intro: [
      "You do not need to have the solution figured out beforehand. I first understand what you need to achieve, then propose the right response: a website, an existing tool, a process change, or a combination.",
      "Every recommendation must serve a concrete objective. I explain what makes sense, why, and how it would work.",
    ],
    helpTitle: "Areas of work",
    help: [
      {
        title: "Digital presence",
        description: "Profiles, websites, catalogs, content, and inquiry channels.",
      },
      {
        title: "Operations",
        description: "Scheduling, inquiries, information, tasks, and work tools.",
      },
      {
        title: "Tailored products",
        description: "Web applications, internal tools, and management systems.",
      },
      {
        title: "Evolution",
        description: "Simplification, integration, or adaptation of existing solutions.",
      },
    ],
    scopeTitle: "Judgment before tools",
    scope: [
      "I combine experience in healthcare, service coordination, and software development. That background helps me understand people, processes, and constraints before choosing a solution.",
      "Configuring, integrating, automating, or building are means. The decision depends on context.",
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
    contact: "Tell me about the problem, who uses it, and how it is handled today.",
    contactAction: "Discuss a need",
    back: "← Back to portfolio",
    actionsLabel: "Project links",
  },
} as const;

export function getServicesContent(lang: Language) {
  return servicesContent[lang];
}
