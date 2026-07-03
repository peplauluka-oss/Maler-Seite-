"use client";

import { useEffect, useState } from "react";

/**
 * Vertikaler Fortschrittsindikator für die Vollbild-Snap-Sektionen.
 * Zeigt die aktive Sektion, springt per Klick dorthin und funktioniert
 * mit Tastatur. Beobachtet Elemente mit [data-panel].
 */
export default function SectionProgress({ labels }: { labels: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-panel]"));
    if (!panels.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = panels.indexOf(e.target as HTMLElement);
            if (i >= 0) setActive(i);
          }
        });
      },
      { threshold: 0.55 }
    );
    panels.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, []);

  const go = (i: number) => {
    const panels = document.querySelectorAll<HTMLElement>("[data-panel]");
    panels[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="secprog" aria-label="Abschnitts-Navigation">
      {labels.map((label, i) => (
        <button
          key={i}
          className={`secprog__dot ${i === active ? "secprog__dot--active" : ""}`}
          onClick={() => go(i)}
          aria-label={label}
          aria-current={i === active ? "true" : undefined}
        >
          <span className="secprog__label">{label}</span>
        </button>
      ))}
    </nav>
  );
}
