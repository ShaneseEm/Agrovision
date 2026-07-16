export const locales = ["en", "sw", "fr", "am", "rw", "pga"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeInfo: Record<Locale, { label: string; nativeLabel: string; flag: string }> = {
  en: { label: "English", nativeLabel: "English", flag: "🇬🇧" },
  sw: { label: "Swahili", nativeLabel: "Kiswahili", flag: "🇹🇿" },
  fr: { label: "French", nativeLabel: "Français", flag: "🇫🇷" },
  am: { label: "Amharic", nativeLabel: "አማርኛ", flag: "🇪🇹" },
  rw: { label: "Kinyarwanda", nativeLabel: "Ikinyarwanda", flag: "🇷🇼" },
  pga: { label: "Juba Arabic", nativeLabel: "Juba Arabic", flag: "🇸🇸" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
