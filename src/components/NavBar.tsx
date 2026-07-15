"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/problem", label: "The Problem" },
  { href: "/solution", label: "Our Solution" },
  { href: "/team", label: "Team" },
  { href: "/challenges", label: "E-LAB Challenges" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-green-100/10 bg-green-950/90 shadow-lg shadow-green-950/20 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-white transition-transform hover:scale-105"
        >
          <span aria-hidden="true">🌾</span>
          AgroVision
        </Link>

        <ul className="hidden gap-8 text-sm font-medium text-green-100 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative py-1 transition-colors hover:text-amber-300 ${
                    active ? "text-amber-300" : ""
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-amber-400 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white transition-transform active:scale-90 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="text-xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-green-100/10 bg-green-950/95 px-6 py-4 text-sm font-medium text-green-100 backdrop-blur md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-2 transition-colors hover:bg-white/5 ${
                  pathname === link.href ? "text-amber-300" : ""
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
