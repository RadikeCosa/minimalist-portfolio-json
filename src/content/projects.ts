import type { Projects } from "@/cv";
import type { Language } from "@/i18n/types";
type Presentation = { order: number; color: "red" | "yellow" | "blue" | "neutral"; level: "featured" | "secondary"; contribution: Record<Language, string> };
export const projectPresentation = {
  "family-games": { order: 1, color: "red", level: "featured", contribution: { es: "Diseñé los recorridos y desarrollé dos juegos con salas, estados y participación desde varios dispositivos.", en: "I designed the flows and built two games with rooms, state management, and participation across devices." } },
  "fira-estudio": { order: 2, color: "yellow", level: "featured", contribution: { es: "Desarrollé la experiencia y adapté el producto de tienda online a catálogo según la operación real.", en: "I built the experience and adapted the product from an online store to a catalogue around the business’s actual operations." } },
  "clinical-app": { order: 3, color: "blue", level: "featured", contribution: { es: "Traduzco procesos de atención domiciliaria a flujos clínicos, modelos de datos e implementación.", en: "I translate home care processes into clinical workflows, data models, and implementation." } },
  "rehabilitation-landing": { order: 4, color: "neutral", level: "secondary", contribution: { es: "Una página pública para orientar consultas sobre rehabilitación domiciliaria en Neuquén.", en: "A public website guiding enquiries about home rehabilitation in Neuquén." } },
} as const satisfies Record<Projects["id"], Presentation>;
export function presentProjects(projects: Projects[], lang: Language) {
  return projects.map(project => ({ ...project, ...projectPresentation[project.id], contribution: projectPresentation[project.id].contribution[lang] })).sort((a,b) => a.order - b.order);
}
