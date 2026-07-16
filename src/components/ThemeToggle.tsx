"use client";

import { useSyncExternalStore } from "react";
import Icon from "@/components/Icon";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function setTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  localStorage.setItem("theme", theme);
  listeners.forEach((listener) => listener());
}

export default function ThemeToggle({ label = "Toggle light and dark mode" }: { label?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={label}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-base text-white transition-all hover:-translate-y-0.5 hover:border-lime-300/60 hover:bg-white/10"
    >
      <Icon name={theme === "dark" ? "light_mode" : "dark_mode"} className="text-lg" />
    </button>
  );
}
