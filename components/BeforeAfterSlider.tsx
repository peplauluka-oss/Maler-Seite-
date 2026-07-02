"use client";

import { useCallback, useRef, useState } from "react";
import Photo from "@/components/Photo";

type Props = {
  before: string;
  after: string;
  label: string;
  icon?: string;
  ratio?: string;
};

/**
 * Vorher/Nachher-Slider mit Drag- und Touch-Bedienung sowie
 * Tastatursteuerung (Pfeiltasten am Griff). Deckt sich fallback-frei
 * über die Photo-Komponente ab, falls Fotos fehlen.
 */
export default function BeforeAfterSlider({ before, after, label, icon = "🖌️", ratio = "4 / 3" }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <div
      className="ba"
      ref={wrap}
      style={{ aspectRatio: ratio }}
      onMouseDown={(e) => { dragging.current = true; setFromClientX(e.clientX); }}
      onMouseMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => setFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
    >
      {/* Nachher als Basis-Ebene */}
      <div className="ba__layer">
        <Photo src={after} alt={`${label} – nachher`} icon={icon} ratio={ratio} rounded={false} />
      </div>
      {/* Vorher darüber, per clip beschnitten */}
      <div className="ba__after" style={{ width: `${pos}%` }}>
        <div style={{ width: wrap.current ? wrap.current.offsetWidth : "100%", height: "100%" }}>
          <Photo src={before} alt={`${label} – vorher`} icon="🏚️" ratio={ratio} rounded={false} />
        </div>
      </div>

      <span className="ba__tag ba__tag--before">Vorher</span>
      <span className="ba__tag ba__tag--after">Nachher</span>

      <div
        className="ba__handle"
        style={{ left: `${pos}%` }}
        role="slider"
        tabIndex={0}
        aria-label={`Vorher-Nachher-Regler: ${label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
        }}
      >
        <span className="ba__grip" aria-hidden>⇔</span>
      </div>
      <span className="ba__caption">{label}</span>
    </div>
  );
}
