"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";

export default function MagneticLink({
  href,
  className = "",
  children,
  strength = 16,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    node.style.transition = "transform 0.1s ease-out";
    node.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  }

  function handleMouseLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    node.style.transform = "translate(0, 0)";
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </Link>
  );
}
