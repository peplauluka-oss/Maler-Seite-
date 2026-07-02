/** Sterne-Rating als barrierefreie Grafik. */
export default function Stars({ value = 5, label }: { value?: number; label?: string }) {
  const full = Math.floor(value);
  const stars = Array.from({ length: 5 }, (_, i) => (i < full ? "★" : "☆"));
  return (
    <span className="stars" role="img" aria-label={label ?? `${value} von 5 Sternen`}>
      {stars.map((s, i) => (
        <span key={i} aria-hidden>{s}</span>
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
