"use client";

import { Component, ReactNode } from "react";
import dynamic from "next/dynamic";

const BackdropScene = dynamic(() => import("./BackdropScene"), { ssr: false, loading: () => null });

class WebGLBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/** Durchgehende, dezente 3D-Ebene hinter den Unterseiten-Inhalten. */
export default function SceneBackground() {
  return (
    <div className="subpage-bg" aria-hidden>
      <WebGLBoundary>
        <BackdropScene />
      </WebGLBoundary>
    </div>
  );
}
