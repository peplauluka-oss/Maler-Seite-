"use client";

import { asset } from "@/lib/asset";

/**
 * Intro-Animation im Stil des Referenzvideos: Eine Farbrolle fährt über die
 * "kahle Wand" und streicht eine warme Terrakotta-Fläche auf, die ein
 * echtes Wohnraum-Foto freilegt ("Aus kahlen Wänden wird Ihr Zuhause").
 * Reine CSS-Animation (clip-path + Rolle) – funktioniert im Static-Export,
 * respektiert prefers-reduced-motion (dann sofort fertig gestrichen).
 */
export default function PaintRollerHero({ src }: { src: string }) {
  return (
    <div className="roller" aria-hidden>
      {/* kahle Wand mit feiner Rollen-Textur */}
      <div className="roller__wall" />

      {/* aufgestrichene Fläche: warmes Foto, von oben nach unten freigelegt */}
      <div className="roller__paint">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(src)} alt="" />
        <span className="roller__warm" />
        <span className="roller__caption">Wärme, die man sehen kann.</span>
      </div>

      {/* nasse Farbkante + Tropfen an der Vorderkante */}
      <div className="roller__edge">
        <span className="roller__drip roller__drip--1" />
        <span className="roller__drip roller__drip--2" />
        <span className="roller__drip roller__drip--3" />
      </div>

      {/* die Farbrolle */}
      <div className="roller__tool">
        <svg viewBox="0 0 220 120" width="220" height="120" role="img" aria-label="Farbrolle">
          {/* Griff */}
          <path d="M150 78 L150 108 Q150 116 142 116 L120 116" fill="none" stroke="#3b2c1c" strokeWidth="7" strokeLinecap="round" />
          {/* Bügel */}
          <path d="M40 40 L150 40 L150 78" fill="none" stroke="#8a7d6b" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          {/* Walze */}
          <rect x="8" y="16" width="150" height="34" rx="17" fill="var(--copper)" />
          <rect x="8" y="16" width="150" height="34" rx="17" fill="url(#rollGrad)" opacity="0.5" />
          <rect x="8" y="16" width="150" height="10" rx="5" fill="#ffffff" opacity="0.18" />
          <defs>
            <linearGradient id="rollGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#000000" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
