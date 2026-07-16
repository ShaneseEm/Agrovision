"use client";

import { useEffect, useRef } from "react";

const particles = [
  { left: "18%", top: "70%", delay: "0s" },
  { left: "78%", top: "60%", delay: "1.2s" },
  { left: "40%", top: "78%", delay: "2.4s" },
  { left: "62%", top: "82%", delay: "3.6s" },
  { left: "28%", top: "58%", delay: "4.5s" },
];

export default function FloatingGardenScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = sceneRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--rx", `${(12 - y * 14).toFixed(2)}deg`);
    node.style.setProperty("--ry", `${(x * 18).toFixed(2)}deg`);
  }

  function handleMouseLeave() {
    const node = sceneRef.current;
    if (!node) return;
    node.style.setProperty("--rx", "12deg");
    node.style.setProperty("--ry", "0deg");
  }

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    let frame = 0;
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const wrap = wrapRef.current;
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        const progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1.4);
        wrap.style.setProperty("--scroll-shift", `${(progress * 40).toFixed(1)}px`);
        wrap.style.setProperty("--scroll-scale", `${(1 - progress * 0.08).toFixed(3)}`);
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrapRef} className="garden-scene-wrap">
      <div
        ref={sceneRef}
        className="garden-scene"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
      >
        <div className="garden-bob">
          <div className="garden-sun-glow" />
          <div className="garden-water" />
          <div className="garden-ripple garden-ripple-2" />
          <div className="garden-ripple garden-ripple-3" />
          <div className="garden-platform-mini garden-platform-mini-1" />
          <div className="garden-platform-mini garden-platform-mini-2" />
          {particles.map((particle, i) => (
            <span
              key={i}
              className="garden-particle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
              }}
            />
          ))}
          <div className="garden-platform">
            <span className="garden-plant garden-plant-1">🌱</span>
            <span className="garden-plant garden-plant-2">🌿</span>
            <span className="garden-plant garden-plant-3">🌾</span>
            <span className="garden-plant garden-plant-4">🥬</span>
          </div>
          <span className="garden-float garden-float-1">🦋</span>
          <span className="garden-float garden-float-2">☀️</span>
        </div>
      </div>
    </div>
  );
}
