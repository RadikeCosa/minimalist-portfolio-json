// src/i18n/utils.ts
import { ui, defaultLang } from "./config";
import { isValidLanguage, type Language } from "./types";

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang && isValidLanguage(lang)) {
    return lang;
  }
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getYear(dateString?: string | null): string | null {
  if (!dateString) return null;

  const year = dateString.slice(0, 4);
  return /^\d{4}$/.test(year) ? year : null;
}

export async function getCV(lang: Language) {
  try {
    if (lang === "en") {
      const cvEn = await import("../../cv-en.json");
      return cvEn.default;
    }
    const cvEs = await import("../../cv.json");
    return cvEs.default;
  } catch (error) {
    console.error("Error loading CV:", error);
    // Fallback al CV en español
    const cvEs = await import("../../cv.json");
    return cvEs.default;
  }
}

// Función para obtener la URL alternativa
export function getAlternateUrl(currentUrl: URL, targetLang: Language): string {
  const currentLang = getLangFromUrl(currentUrl);
  const currentPath = currentUrl.pathname.replace(/\/$/, "") || "/";
  const routeAlternates: Record<string, Partial<Record<Language, string>>> = {
    "/proyectos/plataforma-clinica": {
      en: "/en/projects/clinical-platform",
    },
    "/en/projects/clinical-platform": {
      es: "/proyectos/plataforma-clinica",
    },
  };
  const mappedPath = routeAlternates[currentPath]?.[targetLang];

  if (mappedPath) {
    return mappedPath;
  }

  if (targetLang === defaultLang) {
    // Si el idioma objetivo es el por defecto, remover el prefijo de idioma
    return currentUrl.pathname.replace(`/${currentLang}`, "") || "/";
  } else {
    // Si el idioma objetivo no es el por defecto, agregar el prefijo
    if (currentLang === defaultLang) {
      return `/${targetLang}${currentUrl.pathname}`;
    } else {
      return currentUrl.pathname.replace(`/${currentLang}`, `/${targetLang}`);
    }
  }
}
