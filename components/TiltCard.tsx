"use client";

import { useRef, ReactNode } from "react";

/**
 * Dezente 3D-Tilt-Karte mit Pointer-Glow. Reagiert auf Mausbewegung,
 * bleibt auf Touch/Reduced-Motion ruhig. Wird für Leistungskarten genutzt.
 */
export default function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useRef<boolean>(false);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    if (reduce.current) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rotY = (px - 0.5) * 9;
    const rotX = (0.5 - py) * 9;
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }

  return (
    <div
      className="tilt"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={() => {
        reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      }}
    >
      <div ref={ref} className={`card ${className}`}>
        {children}
      </div>
    </div>
  );
}
