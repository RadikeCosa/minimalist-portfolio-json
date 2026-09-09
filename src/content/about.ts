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
      "Entiendo el problema y su contexto. Ordeno actores, datos, prioridades y restricciones. Trabajo por etapas, valido con uso real y documento lo necesario.",
    methodAi:
      "Integro herramientas de IA para investigar, contrastar alternativas, implementar y revisar. Amplían mi alcance y aceleran el trabajo; el criterio y la validación siguen formando parte del proceso.",
    backgroundTitle: "Recorrido",
    background: [
      "Soy Licenciado en Kinesiología y Fisioterapia. Mantengo práctica independiente desde 2004; trabajé en consultorios hasta 2013 y luego continué fuera de ese ámbito.",
      "Entre 2013 y 2024 coordiné y audité servicios de internación domiciliaria, articulando pacientes, familias, profesionales y equipos internos. Participé en la creación conjunta de un área de cuidados paliativos. Ese trabajo consolidó capacidades para escuchar, establecer prioridades y comunicar información difícil con precisión.",
      "Desde 2020 me formo en desarrollo web full stack, testing y arquitectura de aplicaciones. Actualmente continúo mi formación con Full Stack Open, de la Universidad de Helsinki. Hoy combino ambos recorridos en productos propios y trabajos independientes.",
    ],
    languagesTitle: "Idiomas",
    languages:
      "Español — nativo · English — C1 · Português — em progresso · Français — débutant · Русский — начинающий",
    back: "← Volver al portfolio",
    projects: "Ver proyectos",
    services: "Servicios",
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
      "I understand the problem and its context. I organize stakeholders, data, priorities, and constraints. I work in stages, validate through real use, and document what is needed.",
    methodAi:
      "I use AI tools to research, compare alternatives, implement, and review. They extend my range and accelerate the work; judgment and validation remain part of the process.",
    backgroundTitle: "Background",
    background: [
      "I hold a Bachelor's Degree in Kinesiology and Physiotherapy. I have maintained an independent practice since 2004; I worked in clinic settings through 2013 and later continued outside them.",
      "From 2013 to 2024, I coordinated and reviewed home care services, working across patients, families, professionals, and internal teams. I took part in the joint creation of a palliative care unit. That work strengthened my ability to listen, set priorities, and communicate difficult information precisely.",
      "Since 2020, I have trained in full-stack web development, software testing, and application architecture. I am currently working through Full Stack Open, offered by the University of Helsinki. Today I combine both backgrounds in my own products and independent work.",
    ],
    languagesTitle: "Languages",
    languages:
      "Español — nativo · English — C1 · Português — em progresso · Français — débutant · Русский — начинающий",
    back: "← Back to portfolio",
    projects: "View projects",
    services: "Services",
    cv: "Download CV",
    contact: "Contact",
    actionsLabel: "Actions",
  },
} as const;

export function getAboutContent(lang: Language) {
  return aboutContent[lang];
}
