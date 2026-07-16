"use client";

import { useRef, type ReactNode } from "react";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--tilt-x", `${(-y * maxTilt).toFixed(2)}deg`);
    node.style.setProperty("--tilt-y", `${(x * maxTilt).toFixed(2)}deg`);
    node.style.setProperty("--spot-x", `${((x + 0.5) * 100).toFixed(1)}%`);
    node.style.setProperty("--spot-y", `${((y + 0.5) * 100).toFixed(1)}%`);
  }

  function handleMouseLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--tilt-x", "0deg");
    node.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card h-full ${className}`}
    >
      <div className="tilt-card-inner relative h-full">
        {children}
        <div className="spotlight-overlay" />
      </div>
    </div>
  );
}
