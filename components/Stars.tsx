type Props = {
  rating: number;
  count?: number;
};

/** Sternebewertung als reines, zugängliches SVG (0–5, halbe Sterne möglich). */
export default function Stars({ rating, count }: Props) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  const label = count
    ? `${rating.toFixed(1)} von 5 Sternen bei ${count} Bewertungen`
    : `${rating.toFixed(1)} von 5 Sternen`;

  return (
    <span className="stars" role="img" aria-label={label}>
      <span className="stars__track" aria-hidden>
        <span className="stars__fill" style={{ width: `${pct}%` }}>
          ★★★★★
        </span>
        ★★★★★
      </span>
      <span className="stars__meta">
        <strong>{rating.toFixed(1)}</strong>
        {count ? ` · ${count} Google-Bewertungen` : ""}
      </span>
    </span>
  );
}
