"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import Icon from "@/components/Icon";

type Props = {
  src: string;
  alt: string;
  /** SVG-Icon, das im Verlauf angezeigt wird, solange kein Foto sichtbar ist */
  icon?: ReactNode;
  className?: string;
  /** aspect-ratio, z. B. "4 / 3" */
  ratio?: string;
  rounded?: boolean;
};

/**
 * Zeigt ein echtes Foto an. Bis es geladen ist – oder falls die Quelle
 * blockiert/offline ist – erscheint ein dezenter Marken-Verlauf mit Icon.
 * Dadurch wirkt jeder Zustand (Laden, Erfolg, Fehler) intentional.
 */
export default function Photo({
  src,
  alt,
  icon = <Icon name="roller" size={44} />,
  className = "",
  ratio = "4 / 3",
  rounded = true,
}: Props) {
  const [status, setStatus] = useState<"loading" | "ok" | "fail">("loading");
  const imgRef = useRef<HTMLImageElement>(null);

  // Falls das Bild schon geladen ist, bevor React onLoad anhängt (Cache),
  // den Zustand direkt korrigieren – sonst bliebe das Foto hinter dem Fallback.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setStatus(img.naturalWidth > 0 ? "ok" : "fail");
    }
  }, [src]);

  return (
    <div
      className={`photo ${rounded ? "photo--rounded" : ""} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="photo__icon" aria-hidden data-state={status}>
        {icon}
      </span>
      {status !== "fail" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={asset(src)}
          alt={alt}
          loading="lazy"
          data-state={status}
          onLoad={() => setStatus("ok")}
          onError={() => setStatus("fail")}
        />
      )}
    </div>
  );
}
