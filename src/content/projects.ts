import type { Projects } from "@/cv";
import type { Language } from "@/i18n/types";
type Presentation = { order: number; color: "red" | "yellow" | "blue" | "neutral"; level: "featured" | "secondary"; contribution: Record<Language, string> };
export const projectPresentation = {
  "family-games": { order: 1, color: "red", level: "featured", contribution: { es: "App de juegos para compartir en grupo, con Impostor y Tutti Frutti. Cada participante juega desde su teléfono, con sincronización en tiempo real mediante Supabase, lógica de juego validada en PostgreSQL y recuperación de sesión tras desconexiones.", en: "A group gaming app featuring Impostor and Tutti Frutti. Each player joins from their phone, with real-time synchronization through Supabase, game logic validated in PostgreSQL, and session recovery after disconnections." } },
  "fira-estudio": { order: 2, color: "yellow", level: "featured", contribution: { es: "Catálogo web de productos textiles, desarrollado inicialmente como tienda online con pagos mediante Mercado Pago. Adapté el sitio a las necesidades del cliente: hoy los pedidos se coordinan por consulta, según disponibilidad.", en: "A web catalogue of textile products, originally built as an online store with Mercado Pago payments. I adapted the site to the client’s needs: orders are now arranged through enquiries, subject to availability." } },
  "clinical-app": { order: 3, color: "blue", level: "featured", contribution: { es: "Traduzco procesos de atención domiciliaria a flujos clínicos, modelos de datos e implementación.", en: "I translate home care processes into clinical workflows, data models, and implementation." } },
  "rehabilitation-landing": { order: 4, color: "neutral", level: "secondary", contribution: { es: "Una página pública para orientar consultas sobre rehabilitación domiciliaria en Neuquén.", en: "A public website guiding enquiries about home rehabilitation in Neuquén." } },
} as const satisfies Record<Projects["id"], Presentation>;
export function presentProjects(projects: Projects[], lang: Language) {
  return projects.map(project => ({ ...project, ...projectPresentation[project.id], contribution: projectPresentation[project.id].contribution[lang] })).sort((a,b) => a.order - b.order);
}
