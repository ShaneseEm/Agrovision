"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { locales, localeInfo, type Locale } from "@/i18n/locales";

function setLocaleCookie(locale: Locale) {
  document.cookie = `locale=${locale}; path=/; max-age=31536000`;
}

export default function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function switchTo(next: Locale) {
    setOpen(false);
    setLocaleCookie(next);
    const rest = pathname.replace(new RegExp(`^/${lang}`), "") || "/";
    router.push(`/${next}${rest === "/" ? "" : rest}`);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-expanded={open}
        className="flex h-9 items-center gap-1.5 rounded-full border border-white/20 px-3 text-sm text-white transition-all hover:-translate-y-0.5 hover:border-lime-300/60 hover:bg-white/10"
      >
        <span aria-hidden="true">{localeInfo[lang].flag}</span>
        <span className="uppercase">{lang}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-green-100/10 bg-green-950/95 py-1 text-sm shadow-xl backdrop-blur-md"
        >
          {locales.map((locale) => (
            <li key={locale}>
              <button
                type="button"
                role="option"
                aria-selected={locale === lang}
                onClick={() => switchTo(locale)}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left transition-colors hover:bg-white/10 ${
                  locale === lang ? "text-lime-300" : "text-green-100"
                }`}
              >
                <span aria-hidden="true">{localeInfo[locale].flag}</span>
                <span>{localeInfo[locale].nativeLabel}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
