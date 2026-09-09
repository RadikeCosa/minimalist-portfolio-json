import type { Language } from "@/i18n/types";

const aboutContent = {
  es: {
    title: "Sobre mí",
    intro: [
      "Trabajo con personas, procesos y necesidades concretas desde 2004. Mi recorrido reúne práctica profesional en salud, coordinación de servicios y desarrollo de productos digitales.",
      "Desde 2020 diseño y desarrollo soluciones web. Analizo necesidades, ordeno flujos y reglas de negocio, defino alcance e implemento. Esa experiencia aporta una especialización en HealthTech y un método aplicable a otros sectores.",
    ],
    methodTitle: "Cómo trabajo",
    method:
      "Primero entiendo el problema y su contexto. Después ordeno actores, datos, estados y restricciones. Trabajo por etapas, valido con uso real y documento lo necesario para que la solución pueda mantenerse.",
    backgroundTitle: "Recorrido",
    background: [
      "Soy Licenciado en Kinesiología y Fisioterapia. Mantengo práctica independiente desde 2004; trabajé en consultorios hasta 2013 y luego continué fuera de ese ámbito. Entre 2013 y 2024 coordiné y audité servicios de internación domiciliaria, articulando pacientes, familias, profesionales y equipos internos.",
      "Desde 2020 me formo en desarrollo web full stack, testing y arquitectura de aplicaciones. Actualmente continúo mi formación con Full Stack Open, de la Universidad de Helsinki. Hoy combino ambos recorridos en productos propios y trabajos independientes.",
    ],
    languagesTitle: "Idiomas",
    languages:
      "Español — nativo · English — C1 · Português — em progresso · Français — débutant · Русский — начинающий",
    back: "← Volver al portfolio",
    projects: "Ver proyectos",
    cv: "Descargar CV",
    contact: "Contacto",
    actionsLabel: "Acciones",
  },
  en: {
    title: "About",
    intro: [
      "I have worked with people, processes, and concrete needs since 2004. My background brings together healthcare practice, service coordination, and digital product development.",
      "Since 2020, I have designed and built web solutions. I analyze needs, organize workflows and business rules, define scope, and implement. That experience gives me a HealthTech specialization and a method that also applies to other industries.",
    ],
    methodTitle: "How I work",
    method:
      "I start by understanding the problem and its context. Then I organize stakeholders, data, states, and constraints. I work in stages, validate through real use, and document what is needed to keep the solution maintainable.",
    backgroundTitle: "Background",
    background: [
      "I hold a Bachelor's Degree in Kinesiology and Physiotherapy. I have maintained an independent practice since 2004; I worked in clinic settings through 2013 and later continued outside them. From 2013 to 2024, I coordinated and reviewed home care services, working across patients, families, professionals, and internal teams.",
      "Since 2020, I have trained in full-stack web development, software testing, and application architecture. I am currently working through Full Stack Open, offered by the University of Helsinki. Today I combine both backgrounds in my own products and independent work.",
    ],
    languagesTitle: "Languages",
    languages:
      "Español — nativo · English — C1 · Português — em progresso · Français — débutant · Русский — начинающий",
    back: "← Back to portfolio",
    projects: "View projects",
    cv: "Download CV",
    contact: "Contact",
    actionsLabel: "Actions",
  },
} as const;

export function getAboutContent(lang: Language) {
  return aboutContent[lang];
}
