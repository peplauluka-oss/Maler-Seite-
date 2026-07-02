"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/lib/site";

/**
 * Horizontales Swipe-Deck der Leistungen: Touch-Gesten, Snap-Points,
 * Pfeil- und Tastaturbedienung, Fortschritts-Dots. Trägt das „Swipen"
 * als zentrales Interaktionsprinzip der Startseite.
 */
export default function ServiceSwiper() {
  const vp = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const step = () => {
    const el = vp.current;
    const slide = el?.querySelector<HTMLElement>(".sw-card");
    return slide ? slide.offsetWidth + 20 : el?.clientWidth ?? 1;
  };

  const update = useCallback(() => {
    const el = vp.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / step()));
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = vp.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const go = (dir: number) => vp.current?.scrollBy({ left: dir * step(), behavior: "smooth" });
  const toIndex = (i: number) => vp.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  return (
    <div className="swiper">
      <div
        className="swiper__vp"
        ref={vp}
        tabIndex={0}
        role="group"
        aria-label="Leistungen, mit Pfeiltasten navigierbar"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        }}
      >
        <div className="swiper__track">
          {services.map((s, i) => (
            <article className="sw-card" key={s.slug} aria-roledescription="Folie" aria-label={`${i + 1} von ${services.length}`}>
              <span className="sw-card__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="sw-card__icon" aria-hidden>{s.icon}</div>
              <h3>{s.title.split(" & ")[0].split(" (")[0]}</h3>
              <p>{s.teaser}</p>
              <Link href={`/leistungen/${s.slug}`} className="sw-card__link">
                Mehr erfahren <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="swiper__ctrl">
        <button className="slider__btn" onClick={() => go(-1)} disabled={atStart} aria-label="Vorherige Leistung">‹</button>
        <button className="slider__btn" onClick={() => go(1)} disabled={atEnd} aria-label="Nächste Leistung">›</button>
        <div className="slider__dots">
          {services.map((_, i) => (
            <button
              key={i}
              className={`slider__dot ${i === active ? "slider__dot--active" : ""}`}
              onClick={() => toIndex(i)}
              aria-label={`Zu Leistung ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
