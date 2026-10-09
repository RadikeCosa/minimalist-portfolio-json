import type { Language } from "@/i18n/types";

const aboutContent = {
  es: {
    title: "Sobre mí",
    intro: [
      "Desarrollo productos web desde 2020. Me interesa entender qué necesita una persona antes de decidir qué construir: ordenar el problema, definir los flujos e implementar una solución que pueda probarse y revisarse.",
      "Mi experiencia en salud —práctica profesional y coordinación de servicios— aporta conocimiento de procesos complejos y una especialización en HealthTech. También aplico este enfoque en proyectos de otros sectores.",
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
    cv: "Descargar CV",
    contact: "Contacto",
    actionsLabel: "Acciones",
  },
  en: {
    title: "About",
    intro: [
      "I have been building web products since 2020. I want to understand what a person needs before deciding what to build: organising the problem, defining workflows, and implementing a solution that can be tested and revisited.",
      "My healthcare experience in professional practice and service coordination gives me an understanding of complex workflows and a HealthTech specialization. I apply the same approach to projects in other industries.",
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
    cv: "Download CV",
    contact: "Contact",
    actionsLabel: "Actions",
  },
} as const;

export function getAboutContent(lang: Language) {
  return aboutContent[lang];
}
