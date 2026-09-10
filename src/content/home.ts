import type { Language } from "@/i18n/types";

const content = {
  es: {
    hero: {
      title: "Análisis, implementación y producto.",
      description:
        "Analizo procesos, defino flujos y reglas de negocio, y desarrollo soluciones web.",
      context: "Experiencia en salud desde 2004 · Productos digitales desde 2020",
      primaryAction: "Ver proyectos",
      aboutAction: "Sobre mí",
      servicesAction: "Servicios",
      cvAction: "Descargar CV",
      secondaryAction: "Contacto",
    },
    differential: {
      title: "Enfoque",
      items: [
        { title: "Procesos", description: "Actores, necesidades, restricciones y documentación." },
        { title: "Análisis funcional", description: "Flujos, estados, reglas de negocio y alcance." },
        { title: "Implementación", description: "Desarrollo web, datos, pruebas y mantenimiento." },
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
      description: "Disponible para oportunidades laborales, colaboraciones y proyectos con pymes o profesionales.",
      directTitle: "Contacto directo",
      profileTitle: "Perfil profesional",
      servicesTitle: "Servicios",
      emailAction: "Enviar email",
      cvAction: "Descargar CV",
      linkedinAction: "LinkedIn",
      githubAction: "GitHub",
    },
  },
  en: {
    hero: {
      title: "Analysis, implementation, and product.",
      description: "I analyze processes, define workflows and business rules, and build web solutions.",
      context: "Healthcare experience since 2004 · Digital products since 2020",
      primaryAction: "View projects",
      aboutAction: "About",
      servicesAction: "Services",
      cvAction: "Download CV",
      secondaryAction: "Contact",
    },
    differential: {
      title: "Focus",
      items: [
        { title: "Processes", description: "People, needs, constraints, and documentation." },
        { title: "Functional analysis", description: "Workflows, states, business rules, and scope." },
        { title: "Implementation", description: "Web development, data, testing, and maintenance." },
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
      description: "Available for job opportunities, collaborations, and projects with small businesses or professionals.",
      directTitle: "Direct contact",
      profileTitle: "Professional profile",
      servicesTitle: "Services",
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
