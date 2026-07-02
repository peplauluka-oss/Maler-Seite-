import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="page-header">
      <div className="container center" style={{ textAlign: "center" }}>
        <span className="eyebrow" style={{ justifyContent: "center" }}>Fehler 404</span>
        <h1>Diese Wand haben wir leider übermalt</h1>
        <p className="lead" style={{ margin: "0 auto 2rem" }}>
          Die gesuchte Seite gibt es nicht (mehr). Kein Problem – finden Sie zurück zu Ihrem Projekt.
        </p>
        <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn--primary btn--lg">Zur Startseite</Link>
          <Link href="/leistungen" className="btn btn--ghost btn--lg">Alle Leistungen</Link>
          <a href={`tel:${site.phoneHref}`} className="btn btn--ghost btn--lg">☎ {site.phone}</a>
        </div>
      </div>
    </section>
  );
}
