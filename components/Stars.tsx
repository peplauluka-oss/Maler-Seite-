import Icon from "@/components/Icon";

/** Sterne-Rating als SVG-Grafik (kein Emoji). */
export default function Stars({ value = 5, label, size = 18 }: { value?: number; label?: string; size?: number }) {
  const full = Math.round(value);
  return (
    <span className="stars" role="img" aria-label={label ?? `${value} von 5 Sternen`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" size={size} className={i < full ? "star--on" : "star--off"} />
      ))}
    </span>
  );
}

/** Google-Bewertungs-Badge mit farbigem „Google"-Schriftzug. */
export function GoogleBadge() {
  return (
    <span className="gbadge">
      <span className="gbadge__g" aria-hidden>
        <b>G</b><b>o</b><b>o</b><b>g</b><b>l</b><b>e</b>
      </span>
      Bewertung
    </span>
  );
}
