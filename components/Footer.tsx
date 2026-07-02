import Link from "next/link";
import { site, services, districts, whatsappLink } from "@/lib/site";
import JsonLd, { localBusiness } from "@/components/JsonLd";
import Stars from "@/components/Stars";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="brand" style={{ marginBottom: "1.1rem" }}>
              <span className="brand__mark" aria-hidden>H</span>
              <span className="brand__text">
                Malermeister <strong>Heußer</strong>
                <small>Meisterbetrieb Berlin</small>
              </span>
            </div>
            <p>
              Ihr Meisterbetrieb für Malerarbeiten in Berlin – Fassade, Altbau,
              Wohnraum und Gewerbe. Seit über {site.experienceYears} Jahren sauber,
              termintreu und zum Festpreis.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginTop: "0.6rem" }}>
              <Stars value={5} label={`${site.rating} von 5 Sternen`} />
              <span style={{ color: "var(--text-soft)", fontSize: "0.9rem" }}>
                {site.rating.toString().replace(".", ",")} · {site.reviewCount} Google-Bewertungen
              </span>
            </div>
          </div>

          <div>
            <h4>Leistungen</h4>
            <ul className="footer__links">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/leistungen/${s.slug}`}>{s.title.split(" & ")[0].split(" (")[0]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Bezirke</h4>
            <ul className="footer__links">
              {districts.slice(0, 8).map((d) => (
                <li key={d.slug}>
                  <Link href={`/maler/${d.slug}`}>Maler {d.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Kontakt</h4>
            <address className="footer__nap">
              <strong>{site.name}</strong><br />
              {site.address.street}<br />
              {site.address.zip} {site.address.city}<br />
              <span style={{ color: "var(--muted)" }}>Geschäftsstellen: {site.address.district} & {site.branch.district}</span><br />
              <br />
              Tel.: <a href={`tel:${site.phoneHref}`}>{site.phone}</a><br />
              Mobil: <a href={`tel:${site.mobileHref}`}>{site.mobile}</a><br />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp schreiben</a><br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {site.name}. Alle Rechte vorbehalten.</span>
          <div className="footer__legal">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
      </div>

      <JsonLd data={localBusiness()} />
    </footer>
  );
}
