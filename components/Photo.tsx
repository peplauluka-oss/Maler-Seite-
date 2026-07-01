"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  /** Emoji/Icon, das im Verlauf angezeigt wird, solange kein Foto sichtbar ist */
  icon?: string;
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
  icon = "✚",
  className = "",
  ratio = "4 / 3",
  rounded = true,
}: Props) {
  const [status, setStatus] = useState<"loading" | "ok" | "fail">("loading");

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
          src={src}
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
