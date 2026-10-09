import type { Language } from "@/i18n/types";

const content = {
  es: {
    hero: {
      title: "Desarrollo web. Del problema al producto.",
      description:
        "Entiendo necesidades, defino flujos y desarrollo soluciones web. Combino implementación técnica y análisis de procesos, con experiencia en salud y proyectos de otros sectores.",
      context: "Experiencia en salud desde 2004 · Productos digitales desde 2020",
      primaryAction: "Ver proyectos",
      aboutAction: "Sobre mí",
      cvAction: "Descargar CV",
      secondaryAction: "Contacto",
    },
    differential: {
      title: "Cómo trabajo",
      items: [
        { title: "Entender el problema", description: "Escuchar, conocer a las personas y ordenar necesidades, prioridades y restricciones." },
        { title: "Definir los flujos", description: "Traducir el problema a recorridos, estados, reglas de negocio y un alcance concreto." },
        { title: "Implementar y validar", description: "Desarrollar por etapas, probar el comportamiento y revisar las decisiones con el uso." },
      ],
    },
    capabilities: {
      title: "Áreas de trabajo",
      groups: [
        { title: "Procesos y operaciones", items: ["Procesos complejos", "Operaciones de salud", "Coordinación", "Comunicación y prioridades"] },
        { title: "Análisis y producto", items: ["Análisis funcional", "Flujos y estados", "Reglas de negocio", "UX operativa"] },
        { title: "Desarrollo y datos", items: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "FHIR R4", "Formación full stack"] },
        { title: "Calidad", items: ["Testing unitario y E2E", "RLS y autorización", "Documentación", "Mantenimiento"] },
      ],
    },
    contact: {
      title: "Contacto",
      description: "Busco oportunidades laborales en desarrollo web donde pueda aportar también análisis y criterio de producto. Estoy disponible para conversar sobre proyectos independientes.",
      emailSubject: "Portfolio — oportunidad profesional",
      directTitle: "Contacto directo",
      profileTitle: "Perfil profesional",
      emailAction: "Enviar email",
      cvAction: "Descargar CV",
      linkedinAction: "LinkedIn",
      githubAction: "GitHub",
    },
  },
  en: {
    hero: {
      title: "Web development. From problem to product.",
      description: "I understand needs, define workflows, and build web solutions. I combine technical implementation with process analysis, drawing on healthcare experience and projects across other industries.",
      context: "Healthcare experience since 2004 · Digital products since 2020",
      primaryAction: "View projects",
      aboutAction: "About",
      cvAction: "Download CV",
      secondaryAction: "Contact",
    },
    differential: {
      title: "How I work",
      items: [
        { title: "Understand the problem", description: "Listen, understand the people involved, and organise needs, priorities, and constraints." },
        { title: "Define the flows", description: "Translate the problem into journeys, states, business rules, and a concrete scope." },
        { title: "Build and validate", description: "Develop in stages, test behaviour, and revisit decisions through real use." },
      ],
    },
    capabilities: {
      title: "Areas of work",
      groups: [
        { title: "Processes and operations", items: ["Complex workflows", "Healthcare operations", "Coordination", "Communication and priorities"] },
        { title: "Analysis and product", items: ["Functional analysis", "Flows and states", "Business rules", "Operational UX"] },
        { title: "Development and data", items: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "FHIR R4", "Full-stack training"] },
        { title: "Quality", items: ["Unit and E2E testing", "RLS and authorization", "Documentation", "Maintenance"] },
      ],
    },
    contact: {
      title: "Contact",
      description: "I’m looking for web development roles where I can also contribute process analysis and product thinking. I’m available to discuss independent projects too.",
      emailSubject: "Portfolio — professional opportunity",
      directTitle: "Direct contact",
      profileTitle: "Professional profile",
      emailAction: "Email me",
      cvAction: "Download CV",
      linkedinAction: "LinkedIn",
      githubAction: "GitHub",
    },
  },
} as const;

export function getHomeContent(lang: Language) {
  return content[lang];
}
