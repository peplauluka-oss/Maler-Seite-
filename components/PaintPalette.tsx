import { site } from "@/lib/site";
import Icon from "@/components/Icon";

/**
 * "Malpalette" – ersetzt den klassischen Zahlen-Baukasten. Jede Kennzahl
 * sitzt in einem eigenen Farbklecks (wie Farbdabs auf der Palette eines Malers).
 * Bewusst nur belegbare Zahlen aus den echten Geschäftsdaten.
 */
const ratingStr = site.rating.toString().replace(".", ",");

type Dab = { num: string; star?: boolean; label: string; color: string; rot: string };

const dabs: Dab[] = [
  { num: `${site.experienceYears}+`, label: "Jahre Meister-Erfahrung", color: "var(--copper)", rot: "-7deg" },
  { num: ratingStr, star: true, label: "Google-Bewertung", color: "var(--fb-ochre)", rot: "5deg" },
  { num: `${site.reviewCount}`, label: "zufriedene Bewertungen", color: "var(--fb-sage)", rot: "-4deg" },
  { num: "2", label: "Standorte in Berlin", color: "var(--fb-blue)", rot: "6deg" },
  { num: "100 %", label: "Festpreis-Garantie", color: "var(--fb-clay)", rot: "-6deg" },
  { num: "F&B", label: "Farrow & Ball Partner", color: "var(--fb-plum)", rot: "4deg" },
];

export default function PaintPalette() {
  return (
    <div className="palette" role="list" aria-label="Zahlen, die für sich sprechen">
      <span className="palette__board" aria-hidden />
      {dabs.map((d) => (
        <div key={d.label} className="klex" style={{ ["--c" as string]: d.color, ["--rot" as string]: d.rot }} role="listitem">
          <span className="klex__num">
            {d.num}
            {d.star && <Icon name="star" size={20} />}
          </span>
          <span className="klex__label">{d.label}</span>
        </div>
      ))}
    </div>
  );
}
