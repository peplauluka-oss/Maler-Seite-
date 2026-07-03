"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "@/lib/site";

/**
 * Nach rechts schwebende Leistungs-Karten mit 3D-Rotation: Der Track driftet
 * kontinuierlich, jede Karte rotiert je nach Bildschirmposition (Mitte frontal,
 * Ränder gekippt) und wippt sanft – ein floatendes 3D-Karussell. Pausiert bei
 * Hover/Touch, respektiert prefers-reduced-motion. Karten sind verlinkt.
 */
export default function FloatingCards() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = track.current;
    if (!t) return;
    let raf = 0;
    let offset = 0;
    const speed = 0.5; // px/Frame – driftet nach rechts

    const frame = () => {
      const half = t.scrollWidth / 2 || 1;
      if (!reduce && !paused.current) {
        offset -= speed;
        if (offset <= -half) offset += half; // nahtlose Schleife (Liste ist verdoppelt)
      }
      t.style.transform = `translateX(${offset}px)`;

      // 3D-Rotation je nach horizontaler Bildschirmposition
      const cx = window.innerWidth / 2;
      const kids = t.children;
      for (let i = 0; i < kids.length; i++) {
        const el = kids[i] as HTMLElement;
        const r = el.getBoundingClientRect();
        const mid = r.left + r.width / 2;
        const d = Math.max(-1, Math.min(1, ((mid - cx) / window.innerWidth) * 2));
        el.style.setProperty("--ry", (d * -20).toFixed(2) + "deg");
        el.style.setProperty("--tz", (-Math.abs(d) * 80).toFixed(0) + "px");
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const setPaused = (v: boolean) => () => { paused.current = v; };
  const list = [...services, ...services]; // verdoppelt für die Endlos-Schleife

  return (
    <div
      className="floatwrap"
      ref={wrap}
      onPointerEnter={setPaused(true)}
      onPointerLeave={setPaused(false)}
      onTouchStart={setPaused(true)}
      onTouchEnd={setPaused(false)}
    >
      <div className="floattrack" ref={track}>
        {list.map((s, i) => (
          <Link
            key={i}
            href={`/leistungen/${s.slug}`}
            className="floatcard"
            aria-hidden={i >= services.length ? true : undefined}
            tabIndex={i >= services.length ? -1 : undefined}
          >
            <span className="floatcard__in">
              <span className="sw-card__num" aria-hidden>{String((i % services.length) + 1).padStart(2, "0")}</span>
              <span className="sw-card__icon" aria-hidden>{s.icon}</span>
              <span className="floatcard__title">{s.title.split(" & ")[0].split(" (")[0]}</span>
              <span className="floatcard__text">{s.teaser}</span>
              <span className="sw-card__link">Mehr erfahren <span aria-hidden>→</span></span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
