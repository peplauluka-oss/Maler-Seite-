"use client";

/**
 * Cinematic-Intro 1:1 nach Referenzvideo:
 *   1) kahle Wand + Headline
 *   2) Farbrolle streicht eine warme Terrakotta-Fläche von oben nach unten auf
 *   3) die Fläche wird zu Vorhängen (Falten erscheinen)
 *   4) die Vorhänge öffnen sich zur Mitte → warmer, sonniger Raum wird sichtbar
 * Reine CSS-Timeline (deterministisch), respektiert prefers-reduced-motion.
 * Der Raum ist bewusst als saubere Vektor-Szene gebaut (kein Fremdfoto).
 */
export default function PaintRollerHero() {
  return (
    <div className="rhero" aria-hidden>
      {/* 4 — warmer Raum hinter den Vorhängen */}
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

      {/* 3 — Vorhänge */}
      <div className="rhero__curtains">
        <span className="curtain__rod" />
        <span className="curtain curtain--l" />
        <span className="curtain curtain--r" />
      </div>

      {/* 1+2 — kahle Wand mit aufgestrichener Farbe */}
      <div className="rhero__wall">
        <span className="rhero__paint" />
      </div>

      {/* nasse Farbkante + Tropfen */}
      <div className="rhero__edge">
        <span className="rhero__drip rhero__drip--1" />
        <span className="rhero__drip rhero__drip--2" />
        <span className="rhero__drip rhero__drip--3" />
        <span className="rhero__drip rhero__drip--4" />
      </div>

      {/* die Rolle */}
      <div className="rhero__roller">
        <svg viewBox="0 0 260 150" width="260" height="150" role="img" aria-label="Farbrolle">
          <path d="M175 92 L175 128 Q175 138 165 138 L138 138" fill="none" stroke="#3b2c1c" strokeWidth="9" strokeLinecap="round" />
          <path d="M46 46 L175 46 L175 92" fill="none" stroke="#8a7d6b" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="10" y="18" width="176" height="40" rx="20" fill="var(--copper)" />
          <rect x="10" y="18" width="176" height="40" rx="20" fill="url(#rg)" opacity="0.5" />
          <rect x="10" y="18" width="176" height="12" rx="6" fill="#ffffff" opacity="0.2" />
          <defs>
            <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#000000" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Zwischen-Caption „Wärme, die man sehen kann.“ */}
      <span className="rhero__caption">Wärme, die man sehen kann.</span>
    </div>
  );
}
