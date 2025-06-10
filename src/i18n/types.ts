export const LANGUAGES = ["es", "en"] as const;
export type Language = (typeof LANGUAGES)[number];

export function isValidLanguage(lang: string): lang is Language {
  return LANGUAGES.includes(lang as Language);
}
