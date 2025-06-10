export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export type Language = keyof typeof languages;

// Textos de la interfaz
export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.education": "Educación",
    "section.about": "Acerca de",
    "section.experience": "Experiencia laboral",
    "section.projects": "Proyectos",
    "section.skills": "Habilidades",
    "section.education": "Educación",
    "button.print": "Imprimir",
    "date.present": "Actualidad",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "section.about": "About",
    "section.experience": "Work Experience",
    "section.projects": "Projects",
    "section.skills": "Skills",
    "section.education": "Education",
    "button.print": "Print",
    "date.present": "Present",
  },
} as const;
