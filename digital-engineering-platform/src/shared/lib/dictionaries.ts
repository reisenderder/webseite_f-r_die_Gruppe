/**
 * @file dictionaries.ts
 * @description Lazy-loading translations dictionaries loader utility with strict typing.
 */

import en from "@/dictionaries/en.json";

export type Dictionary = typeof en;

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
  de: () => import("@/dictionaries/de.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
};

/**
 * Dynamically imports and returns the dictionary object for a specific locale.
 * 
 * @param locale - Supported locale string (en, ru, de, fr, ar)
 * @returns Promise resolving to the strictly typed dictionary translation schema
 */
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Fallback to English if the requested locale is not found
  const loader = dictionaries[locale] || dictionaries.en;
  return loader();
};
