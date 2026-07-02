"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { testimonials } from "@/lib/site";
import Stars, { GoogleBadge } from "@/components/Stars";

/**
 * Swipebarer Testimonial-Slider mit Snap-Points, Touch-Gesten, Pfeil-
 * und Tastatur-Bedienung sowie Fortschritts-Dots. Ohne externe Library –
 * nutzt natives Scroll-Snap für flüssiges Verhalten auf allen Geräten.
 */
export default function TestimonialSlider() {
  const viewport = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const vp = viewport.current;
    if (!vp) return;
    const slide = vp.querySelector<HTMLElement>(".slider__slide");
    const w = slide ? slide.offsetWidth + 20.8 /* ~1.3rem gap */ : vp.clientWidth;
    setActive(Math.round(vp.scrollLeft / w));
    setAtStart(vp.scrollLeft <= 4);
    setAtEnd(vp.scrollLeft + vp.clientWidth >= vp.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const vp = viewport.current;
    if (!vp) return;
    update();
    vp.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      vp.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const go = (dir: number) => {
    const vp = viewport.current;
    if (!vp) return;
    const slide = vp.querySelector<HTMLElement>(".slider__slide");
    const w = slide ? slide.offsetWidth + 20.8 : vp.clientWidth;
    vp.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const toIndex = (i: number) => {
    const vp = viewport.current;
    if (!vp) return;
    const slide = vp.querySelector<HTMLElement>(".slider__slide");
    const w = slide ? slide.offsetWidth + 20.8 : vp.clientWidth;
    vp.scrollTo({ left: i * w, behavior: "smooth" });
  };

  return (
    <div className="slider">
      <div
        className="slider__viewport"
        ref={viewport}
        style={{ scrollSnapType: "x mandatory", overflowX: "auto", scrollbarWidth: "none" }}
        tabIndex={0}
        role="group"
        aria-label="Kundenstimmen, mit Pfeiltasten navigierbar"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        }}
      >
        <div className="slider__track">
          {testimonials.map((t, i) => (
            <article className="slider__slide" key={i} style={{ scrollSnapAlign: "start" }}>
              <div className="tcard glass">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <Stars value={t.rating} label={`${t.rating} von 5 Sternen`} />
                  <GoogleBadge />
                </div>
                <p className="tcard__quote">„{t.quote}“</p>
                <div className="tcard__foot">
                  <span>
                    <span className="tcard__author">{t.author}</span>
                    <span className="tcard__ctx" style={{ display: "block" }}>{t.context}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="slider__ctrl">
        <button className="slider__btn" onClick={() => go(-1)} disabled={atStart} aria-label="Vorherige Bewertung">‹</button>
        <button className="slider__btn" onClick={() => go(1)} disabled={atEnd} aria-label="Nächste Bewertung">›</button>
        <div className="slider__dots" role="tablist" aria-label="Bewertung auswählen">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`slider__dot ${i === active ? "slider__dot--active" : ""}`}
              onClick={() => toIndex(i)}
              aria-label={`Zu Bewertung ${i + 1}`}
              aria-selected={i === active}
              role="tab"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
