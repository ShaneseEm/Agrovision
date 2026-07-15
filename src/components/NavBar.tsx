"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/problem", label: "The Problem" },
  { href: "/solution", label: "Our Solution" },
  { href: "/team", label: "Team" },
  { href: "/challenges", label: "E-LAB Challenges" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-900/10 bg-green-50/95 backdrop-blur dark:border-green-100/10 dark:bg-green-950/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-green-900 dark:text-green-50">
          <span aria-hidden="true">🌾</span>
          AgroVision
        </Link>

        <ul className="hidden gap-8 text-sm font-medium text-green-900 md:flex dark:text-green-100">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-green-900/20 text-green-900 md:hidden dark:border-green-100/20 dark:text-green-50"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="text-xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-green-900/10 bg-green-50 px-6 py-4 text-sm font-medium text-green-900 md:hidden dark:border-green-100/10 dark:bg-green-950 dark:text-green-100">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 transition-colors hover:bg-green-900/5 dark:hover:bg-green-100/10"
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
