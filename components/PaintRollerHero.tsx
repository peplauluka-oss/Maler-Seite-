"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Intro nach Referenzvideo – detailreiche SVG-Illustration:
 *   Phase 1  Die Farbrolle zieht eine Bahn in EXAKT Walzenbreite über die
 *            Wand. Organische, ausgefranste Farbkanten (Turbulenz-Filter),
 *            echte Rollspur-Textur, nasse Front mit Tropfen.
 *   Phase 2  Weiches Morphen: Bahn weitet sich, ungleichmäßige Stofffalten
 *            mit Raffung und Saum blenden ein, Stange erscheint.
 *   Phase 3  Vorhänge gleiten auf (ein Rest bleibt als Rahmen stehen),
 *            der warme Raum mit Kontaktschatten erscheint, dann der Text.
 * Runterwischen STARTET den jeweils nächsten Abschnitt (läuft von selbst
 * flüssig zu Ende, rückwärts sauber zurück). Reduced-Motion: Endzustand.
 */

const THRESHOLDS = [0.1, 0.42, 0.72];
const HYST = 0.05;

/* Eine Vorhang-Hälfte: ungleichmäßige Falten, Raffung oben, Saum unten */
function CurtainHalf({ side }: { side: "l" | "r" }) {
  const id = `ct-${side}`;
  // ungleich breite Falten (wirkt wie echter Stoff, nicht wie Muster)
  const pleats = side === "l" ? [0, 52, 118, 152, 226, 262, 330, 366] : [0, 38, 104, 170, 210, 288, 322, 372];
  const widths = side === "l" ? [52, 66, 34, 74, 36, 68, 36, 34] : [38, 66, 66, 40, 78, 34, 50, 28];
  return (
    <svg className={`curt curt--${side}`} viewBox="0 0 400 800" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={`${id}-base`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d8703f" />
          <stop offset="0.45" stopColor="#c05a2c" />
          <stop offset="1" stopColor="#8f3c18" />
        </linearGradient>
        <linearGradient id={`${id}-pleat`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffe9d6" stopOpacity="0.34" />
          <stop offset="0.3" stopColor="#ffffff" stopOpacity="0.03" />
          <stop offset="0.62" stopColor="#3c1405" stopOpacity="0.12" />
          <stop offset="0.88" stopColor="#2a0d02" stopOpacity="0.32" />
          <stop offset="1" stopColor="#1e0800" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1={side === "l" ? "0" : "1"} y1="0" x2={side === "l" ? "1" : "0"} y2="0">
          <stop offset="0" stopColor="#2a0d02" stopOpacity="0.3" />
          <stop offset="0.2" stopColor="#2a0d02" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-top`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5f2408" stopOpacity="0.5" />
          <stop offset="1" stopColor="#5f2408" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="-2" y="-2" width="404" height="804" fill={`url(#${id}-base)`} />
      {pleats.map((x, i) => (
        <rect key={i} x={x} y="-2" width={widths[i]} height="804" fill={`url(#${id}-pleat)`} />
      ))}
      {/* Raffung oben: Zickzack-Schatten unter der Stange */}
      <path
        d="M0 0 L400 0 L400 22 Q 384 34 362 24 Q 340 14 318 28 Q 296 40 272 26 Q 250 14 228 30 Q 206 42 184 26 Q 162 12 140 28 Q 118 40 96 24 Q 74 12 52 26 Q 30 38 0 24 Z"
        fill={`url(#${id}-top)`}
      />
      {/* Saum unten: welliger, dunkler Abschluss */}
      <path
        d="M0 800 L0 774 Q 28 764 56 774 Q 84 784 112 772 Q 140 762 168 774 Q 196 786 224 772 Q 252 760 280 774 Q 308 786 336 772 Q 364 762 400 776 L400 800 Z"
        fill="#3a1404"
        opacity="0.22"
      />
      {/* Außenkante abdunkeln (Tiefe) */}
      <rect x="-2" y="-2" width="404" height="804" fill={`url(#${id}-edge)`} />
    </svg>
  );
}

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
          {/* warmer, illustrierter Raum */}
          <div className="rhero__room">
            <span className="room__wall" />
            <span className="room__light" />
            <span className="room__window">
              <span className="room__mullion room__mullion--v" />
              <span className="room__mullion room__mullion--h" />
            </span>
            <span className="room__sun" />
            <span className="room__frame" />
            <span className="room__lamp"><span className="lamp__glow" /><span className="lamp__shade" /><span className="lamp__stand" /></span>
            <span className="room__plant">
              <span className="leaf leaf--1" />
              <span className="leaf leaf--2" />
              <span className="leaf leaf--3" />
              <span className="pot" />
            </span>
            <span className="room__chair"><span className="chair__arm chair__arm--l" /><span className="chair__arm chair__arm--r" /><span className="chair__cushion" /></span>
            <span className="room__base" />
            <span className="room__floor"><span className="room__rug" /></span>
          </div>

          {/* kahle Wand */}
          <div className="rhero__wall" />

          {/* Farbbahn in Walzenbreite → wird zum Vorhang */}
          <div className="band">
            <div className="bandclip">
              {/* Farbschicht: organische Kanten + Rollspur-Textur */}
              <svg className="paintlayer" viewBox="0 0 300 900" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="pl-g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#dd7440" />
                    <stop offset="0.5" stopColor="#c25a2b" />
                    <stop offset="1" stopColor="#9c421c" />
                  </linearGradient>
                  <filter id="pl-rough" x="-8%" y="-4%" width="116%" height="108%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.018 0.012" numOctaves="3" seed="11" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="16" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                  <filter id="pl-streaks" x="0" y="0" width="100%" height="100%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.55 0.004" numOctaves="2" seed="4" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 0.95  0 0 0 0 0.9  0.55 0 0 0 0" />
                  </filter>
                  <filter id="pl-mottle" x="0" y="0" width="100%" height="100%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.06 0.05" numOctaves="2" seed="9" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.35  0 0 0 0 0.12  0 0 0 0 0.02  0.5 0 0 0 0" />
                  </filter>
                </defs>
                <g filter="url(#pl-rough)">
                  <rect x="10" y="-16" width="280" height="932" fill="url(#pl-g)" />
                </g>
                <rect x="10" y="-16" width="280" height="932" filter="url(#pl-streaks)" opacity="0.12" />
                <rect x="10" y="-16" width="280" height="932" filter="url(#pl-mottle)" opacity="0.18" />
              </svg>
            </div>

            {/* nasse Front: organischer Wulst + Tropfen, fährt mit der Rolle */}
            <div className="bandedge">
              <svg viewBox="0 0 300 60" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="be-g" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#9c421c" />
                    <stop offset="0.5" stopColor="#e0894f" />
                    <stop offset="1" stopColor="#9c421c" />
                  </linearGradient>
                  <filter id="be-rough" x="-10%" y="-30%" width="120%" height="160%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.05 0.4" numOctaves="2" seed="6" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
                <g filter="url(#be-rough)">
                  <rect x="8" y="4" width="284" height="14" rx="7" fill="url(#be-g)" />
                  {/* Tropfen mit runden Köpfen */}
                  <rect x="66" y="12" width="9" height="26" rx="4.5" fill="#b3522a" />
                  <circle cx="70.5" cy="40" r="5.5" fill="#a84a24" />
                  <rect x="152" y="12" width="8" height="38" rx="4" fill="#b3522a" />
                  <circle cx="156" cy="52" r="5" fill="#a84a24" />
                  <rect x="228" y="12" width="7" height="20" rx="3.5" fill="#b3522a" />
                  <circle cx="231.5" cy="34" r="4.5" fill="#a84a24" />
                </g>
              </svg>
            </div>

            {/* Vorhang-Hälften (morphen in Phase 2 ein, öffnen in Phase 3) */}
            <CurtainHalf side="l" />
            <CurtainHalf side="r" />
          </div>

          {/* Vorhangstange */}
          <div className="curtainrod" />

          {/* die Farbrolle – Walze exakt so breit wie die Bahn */}
          <div className="rroller">
            <svg viewBox="0 0 240 200" role="img" aria-label="Farbrolle">
              <defs>
                <linearGradient id="ro-sleeve" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#eda06b" />
                  <stop offset="0.16" stopColor="#e2854f" />
                  <stop offset="0.5" stopColor="#c65d30" />
                  <stop offset="0.85" stopColor="#96401c" />
                  <stop offset="1" stopColor="#7c3312" />
                </linearGradient>
                <linearGradient id="ro-grip" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#e8a668" />
                  <stop offset="1" stopColor="#a35f2b" />
                </linearGradient>
                <filter id="ro-nap" x="0" y="0" width="100%" height="100%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.3 0.9" numOctaves="2" seed="5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.2  0 0 0 0 0.06  0 0 0 0 0  0.35 0 0 0 0" />
                </filter>
                <clipPath id="ro-clip"><rect x="20" y="20" width="160" height="54" rx="27" /></clipPath>
              </defs>
              {/* Walze (x 20–180 → Bahn = Walzenbreite) */}
              <rect x="20" y="20" width="160" height="54" rx="27" fill="url(#ro-sleeve)" />
              <g clipPath="url(#ro-clip)">
                <rect x="20" y="20" width="160" height="54" filter="url(#ro-nap)" opacity="0.5" />
                <ellipse cx="100" cy="33" rx="72" ry="9" fill="#ffffff" opacity="0.2" />
                <ellipse cx="26" cy="47" rx="9" ry="28" fill="#b5552a" opacity="0.4" />
                <ellipse cx="176" cy="47" rx="9" ry="28" fill="#5f2408" opacity="0.45" />
              </g>
              {/* frischer Farbrest an der Walzenunterkante */}
              <path d="M92 74 q5 12 0 15 q-5 -3 0 -15" fill="#b3522a" />
              {/* Metallbügel */}
              <path d="M180 47 h26 c11 0 16 8 16 18 v36 c0 11 -8 17 -18 17 h-5" fill="none" stroke="#b9bec3" strokeWidth="7" strokeLinecap="round" />
              <path d="M180 45 h26 c9 0 13 6 13 15" fill="none" stroke="#e7eaec" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              {/* Zwinge + ergonomischer Griff */}
              <rect x="187" y="115" width="24" height="12" rx="5" fill="#7a8085" />
              <rect x="190" y="118" width="18" height="2.4" rx="1.2" fill="#5c6165" />
              <path d="M190 127 c-7 0 -11 6 -11 13 v38 c0 10 8 16 20 16 s20 -6 20 -16 v-38 c0 -7 -4 -13 -11 -13 z" fill="url(#ro-grip)" />
              <ellipse cx="199" cy="192" rx="10" ry="4" fill="#8a5426" opacity="0.6" />
              <rect x="190" y="140" width="18" height="3.6" rx="1.8" fill="#7c4a1e" opacity="0.5" />
              <rect x="190" y="150" width="18" height="3.6" rx="1.8" fill="#7c4a1e" opacity="0.5" />
              <rect x="190" y="160" width="18" height="3.6" rx="1.8" fill="#7c4a1e" opacity="0.5" />
              <rect x="190" y="170" width="18" height="3.6" rx="1.8" fill="#7c4a1e" opacity="0.5" />
            </svg>
          </div>

          <span className="rhero__caption">Wärme, die man sehen kann.</span>
        </div>

        <div className="container rhero__content">{children}</div>
        <span className="scroll-hint" aria-hidden>Runterwischen <span>↓</span></span>
      </div>
    </section>
  );
}
