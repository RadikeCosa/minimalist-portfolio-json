import { ui, defaultLang, type Language } from "./config";

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang && (lang === "es" || lang === "en")) {
    return lang as Language;
  }
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export async function getCV(lang: Language) {
  if (lang === "en") {
    const cvEn = await import("../../cv-en.json");
    return cvEn.default;
  }
  const cvEs = await import("../../cv.json");
  return cvEs.default;
}
