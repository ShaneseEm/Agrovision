import "server-only";
import type { Locale } from "./locales";
import type { Dictionary } from "./dictionary";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  sw: () => import("./dictionaries/sw").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  am: () => import("./dictionaries/am").then((m) => m.default),
  rw: () => import("./dictionaries/rw").then((m) => m.default),
  pga: () => import("./dictionaries/pga").then((m) => m.default),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
