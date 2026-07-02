"use client";

import { Component, ReactNode } from "react";
import dynamic from "next/dynamic";

// Das 3D-Bundle wird erst nach dem First Paint clientseitig geladen (ssr:false,
// dynamic import) – so bleibt der kritische Pfad schlank (Core Web Vitals).
const PaintScene = dynamic(() => import("./PaintScene"), { ssr: false, loading: () => null });

class WebGLBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/**
 * 3D-Hero: eine langsam rotierende, weich verformte „Pigment-Welle" in
 * Kupfer/Amber mit schwebenden Farbpartikeln. Fällt bei WebGL-Fehlern oder
 * reduzierter Bewegung sauber weg (Fallback: der Ambient-Verlauf im CSS).
 */
export default function PaintHero() {
  return (
    <div className="hero__canvas" aria-hidden>
      <WebGLBoundary>
        <PaintScene />
      </WebGLBoundary>
    </div>
  );
}
