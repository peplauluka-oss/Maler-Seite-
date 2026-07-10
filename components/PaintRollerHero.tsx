"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { asset } from "@/lib/asset";

/**
 * Intro 1:1 nach Referenzvideo – aufgebaut aus fotorealen Bild-Ebenen
 * (prozedural gerenderte Texturen in public/images/hero/):
 *   Phase 1  Ein echter Farbfleck (Foto-Textur mit Rollspur, Randwulst,
 *            Tropfnasen) wächst auf der kahlen Wand nach unten;
 *            die Headline erscheint AUF dem Fleck (wie im Video).
 *   Phase 2  Weiche Überblendung: sonnendurchflutete Stoff-Vorhänge
 *            legen sich über die Farbe.
 *   Phase 3  Die Vorhänge gleiten auf → weichgezeichneter warmer Raum,
 *            Caption, dann die Handlungs-Zeile.
 * Alle Übergänge sind reine transform/opacity-Transitions (GPU, flüssig);
 * Runterwischen STARTET den nächsten Abschnitt, rückwärts spult zurück.
 */

const THRESHOLDS = [0.1, 0.42, 0.72];
const HYST = 0.05;

export default function PaintRollerHero({ children }: { children: ReactNode }) {
  const secRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef(0);

  useEffect(() => {
    const sec = secRef.current;
    const stage = stageRef.current;
    if (!sec || !stage) return;

    const setPhase = (ph: number) => {
      if (ph === phaseRef.current) return;
      phaseRef.current = ph;
      ph >= 1 ? stage.setAttribute("data-p1", "") : stage.removeAttribute("data-p1");
      ph >= 2 ? stage.setAttribute("data-p2", "") : stage.removeAttribute("data-p2");
      ph >= 3 ? stage.setAttribute("data-p3", "") : stage.removeAttribute("data-p3");
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sec.style.height = "100svh";
      setPhase(3);
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const total = sec.offsetHeight - vh;
      const p = total > 0 ? Math.min(1, Math.max(0, -sec.getBoundingClientRect().top / total)) : 1;
      let ph = phaseRef.current;
      while (ph < 3 && p >= THRESHOLDS[ph]) ph++;
      while (ph > 0 && p < THRESHOLDS[ph - 1] - HYST) ph--;
      setPhase(ph);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="heroscroll" id="start" ref={secRef}>
      <div className="herostage" data-panel ref={stageRef}>
        <div className="rhero" aria-hidden>
          {/* Ebene 1: weicher, warmer Raum (hinter allem) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="lay lay-room" src={asset("/images/hero/room.jpg")} alt="" />

          {/* Ebene 2: Vorhänge */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="lay curt curt--l" src={asset("/images/hero/curtain-l.jpg")} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="lay curt curt--r" src={asset("/images/hero/curtain-r.jpg")} alt="" />

          {/* Ebene 3: kahle Wand */}
          <div className="rhero__wall" />

          {/* Ebene 4: fotoreale Farbrolle – reitet auf der wachsenden Farbkante */}
          <div className="rollwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="rollimg" src={asset("/images/hero/roller.png")} alt="" />
          </div>

          {/* Ebene 5: der wachsende Farbfleck mit Headline */}
          <div className="patchwrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="patch" src={asset("/images/hero/paint-patch.png")} alt="" />
            <div className="patch__text">
              <span className="patch__eyebrow">Malermeister Heußer · Berlin</span>
              <h1 className="patch__title">Aus kahlen Wänden<br />wird Ihr Zuhause.</h1>
            </div>
          </div>

          <span className="rhero__caption">Wärme, die man sehen kann.</span>
        </div>

        <div className="container rhero__content">{children}</div>
        <span className="scroll-hint" aria-hidden>Runterwischen <span>↓</span></span>
      </div>
    </section>
  );
}
