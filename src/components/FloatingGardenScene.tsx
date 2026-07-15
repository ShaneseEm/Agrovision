"use client";

import { useRef } from "react";

export default function FloatingGardenScene() {
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

  return (
    <div
      className="garden-scene-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <div ref={sceneRef} className="garden-scene">
        <div className="garden-bob">
          <div className="garden-water" />
          <div className="garden-ripple garden-ripple-2" />
          <div className="garden-ripple garden-ripple-3" />
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
