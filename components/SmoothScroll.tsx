"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Aktiviert weiches „Momentum"-Scrolling (wie bei Apple/Studio-Seiten).
 * Deaktiviert sich bei prefers-reduced-motion und auf der Startseite,
 * die stattdessen CSS-Scroll-Snap (Vollbild-Sektionen) nutzt – Lenis und
 * Scroll-Snap würden sich sonst gegenseitig stören.
 */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    if (pathname === "/") return; // Startseite: native Scroll-Snap

    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    document.documentElement.classList.add("lenis");

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, [pathname]);

  return null;
}
