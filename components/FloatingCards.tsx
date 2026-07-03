"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/lib/site";
import { asset } from "@/lib/asset";

/**
 * Nach rechts schwebende Leistungs-Karten – bild-dominiert & gläsern:
 * Das echte Foto füllt die Karte, eine feine Glas-/Verlaufs-Ebene sorgt
 * unten für Lesbarkeit (Bild bleibt oben klar sichtbar). Kein Icon-Badge –
 * nur Bild, Titel, Text. Track driftet, Karten rotieren in 3D & wippen.
 */

function CardBg({ src }: { src: string }) {
  const [ok, setOk] = useState(true);
  if (!ok) return <span className="floatcard__bg" />;
  return (
    <span className="floatcard__bg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(src)} alt="" aria-hidden loading="lazy" onError={() => setOk(false)} />
    </span>
  );
}

export default function FloatingCards() {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = track.current;
    if (!t) return;
    let raf = 0;
    let offset = 0;
    const speed = 0.5;

    const frame = () => {
      const half = t.scrollWidth / 2 || 1;
      if (!reduce && !paused.current) {
        offset -= speed;
        if (offset <= -half) offset += half;
      }
      t.style.transform = `translateX(${offset}px)`;
      const cx = window.innerWidth / 2;
      const kids = t.children;
      for (let i = 0; i < kids.length; i++) {
        const el = kids[i] as HTMLElement;
        const r = el.getBoundingClientRect();
        const mid = r.left + r.width / 2;
        const d = Math.max(-1, Math.min(1, ((mid - cx) / window.innerWidth) * 2));
        el.style.setProperty("--ry", (d * -18).toFixed(2) + "deg");
        el.style.setProperty("--tz", (-Math.abs(d) * 70).toFixed(0) + "px");
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const setPaused = (v: boolean) => () => { paused.current = v; };
  const list = [...services, ...services];

  return (
    <div
      className="floatwrap"
      onPointerEnter={setPaused(true)}
      onPointerLeave={setPaused(false)}
      onTouchStart={setPaused(true)}
      onTouchEnd={setPaused(false)}
    >
      <div className="floattrack" ref={track}>
        {list.map((s, i) => {
          const primary = i < services.length;
          return (
            <Link
              key={i}
              href={`/leistungen/${s.slug}`}
              className="floatcard"
              aria-hidden={!primary ? true : undefined}
              tabIndex={!primary ? -1 : undefined}
              aria-label={s.title}
            >
              <span className="floatcard__in">
                <CardBg src={s.image} />
                <span className="floatcard__scrim" />
                <span className="floatcard__content">
                  <span className="floatcard__num">{String((i % services.length) + 1).padStart(2, "0")}</span>
                  <span className="floatcard__title">{s.title.split(" & ")[0].split(" (")[0]}</span>
                  <span className="floatcard__text">{s.teaser}</span>
                  <span className="floatcard__link">Mehr erfahren <span aria-hidden>→</span></span>
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
