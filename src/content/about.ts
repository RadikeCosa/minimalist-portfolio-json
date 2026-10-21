import type { Language } from "@/i18n/types";

const aboutContent = {
  es: {
    title: "Sobre mí",
    profile: "Desarrollo web · Análisis funcional",
    intro: [
      "Soy desarrollador web y Licenciado en Kinesiología y Fisioterapia. Siempre me interesó el desarrollo: disfruto entender un problema y usar la tecnología para encontrar una solución que facilite una tarea cotidiana.",
      "Al construir una aplicación, me interesa conocer cómo trabajan las personas que van a usarla. Entender qué necesitan, qué les cuesta y qué pasos se pueden simplificar me ayuda a tomar decisiones sobre los flujos, las interfaces y los datos.",
    ],
    backgroundTitle: "La experiencia que aporto",
    background:
      "Mi experiencia en salud aporta mucho a esa mirada. Desde 2004 mantengo mi práctica profesional y, entre 2013 y 2024, también coordiné y audité servicios de atención domiciliaria. Trabajar con pacientes, familias y equipos me enseñó a escuchar necesidades distintas, ordenar prioridades y adaptar los procesos a lo que sucede en la práctica.",
    currentTitle: "Qué construyo hoy",
    current:
      "Desde 2020 me formo en desarrollo web y construyo proyectos propios y para clientes. Trabajo en aplicaciones y sitios con necesidades diferentes: herramientas para la atención domiciliaria, catálogos de productos y juegos para compartir en persona. En cada proyecto busco que las decisiones técnicas tengan sentido para su uso.",
    aiTitle: "IA como herramienta",
    ai:
      "También incorporo herramientas de IA para investigar, explorar alternativas, implementar y revisar, contrastando los resultados con el código y el comportamiento de la aplicación.",
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
    profile: "Web development · Functional analysis",
    intro: [
      "I am a web developer with a degree in Kinesiology and Physiotherapy. I have always been interested in software development: I enjoy understanding a problem and using technology to find a solution that makes an everyday task easier.",
      "When building an application, I want to understand how the people who will use it work. Knowing what they need, what they find difficult, and which steps can be simplified helps me make decisions about workflows, interfaces, and data.",
    ],
    backgroundTitle: "The experience I bring",
    background:
      "My healthcare experience has shaped this perspective. I have maintained my professional practice since 2004 and, from 2013 to 2024, I also coordinated and reviewed home care services. Working with patients, families, and teams taught me to listen to different needs, set priorities, and adapt processes to what happens in practice.",
    currentTitle: "What I build today",
    current:
      "Since 2020, I have been studying web development and building projects of my own and for clients. I work on applications and websites that address different needs: tools for home care, product catalogues, and games to share in person. In each project, I want technical decisions to make sense for how it will be used.",
    aiTitle: "AI as a tool",
    ai:
      "I also use AI tools to research, explore alternatives, implement, and review, checking the results against the code and the application's behaviour.",
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
