"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Icon from "@/components/Icon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/dictionary";

export default function NavBar({ lang, dict }: { lang: Locale; dict: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: `/${lang}`, label: dict.home },
    { href: `/${lang}/problem`, label: dict.problem },
    { href: `/${lang}/solution`, label: dict.solution },
    { href: `/${lang}/team`, label: dict.team },
    { href: `/${lang}/challenges`, label: dict.challenges },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-green-100/10 bg-green-950/70 shadow-lg shadow-green-950/20 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 text-lg font-bold text-white transition-transform hover:scale-105"
        >
          <Icon name="eco" className="text-xl" />
          AgroVision
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex gap-8 text-sm font-medium text-green-100">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative py-1 transition-colors hover:text-lime-300 ${
                      active ? "text-lime-300" : ""
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-lime-400 transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <LanguageSwitcher lang={lang} label={dict.languageSwitcher} />
          <ThemeToggle label={dict.toggleTheme} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher lang={lang} label={dict.languageSwitcher} />
          <ThemeToggle label={dict.toggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white transition-transform active:scale-90"
            aria-label={dict.toggleMenu}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="text-xl" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-green-100/10 bg-green-950/80 px-6 py-4 text-sm font-medium text-green-100 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-2 transition-colors hover:bg-white/5 ${
                  pathname === link.href ? "text-lime-300" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
