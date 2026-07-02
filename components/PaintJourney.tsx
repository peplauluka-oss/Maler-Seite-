"use client";

import { Component, ReactNode } from "react";
import dynamic from "next/dynamic";

const PaintJourneyScene = dynamic(() => import("./PaintJourneyScene"), { ssr: false, loading: () => null });

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
 * Fixe, bildschirmfüllende 3D-Bühne, durch die die Snap-Sektionen scrollen.
 * Das Objekt (Farbeimer + Pinsel) dreht sich mit dem Scroll-Fortschritt.
 * Fällt bei WebGL-Fehlern sauber weg (dunkler Verlauf als Fallback).
 */
export default function PaintJourney() {
  return (
    <div className="journey-canvas" aria-hidden>
      <WebGLBoundary>
        <PaintJourneyScene />
      </WebGLBoundary>
    </div>
  );
}
