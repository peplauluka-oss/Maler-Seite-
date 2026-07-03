import type { Metadata } from "next";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Malermeister Heußer, Berlin.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <section className="page-header">
      <div className="container" style={{ maxWidth: "820px" }}>
        <Breadcrumbs items={[{ name: "Start", url: "/" }, { name: "Impressum", url: "/impressum" }]} />
        <h1>Impressum</h1>
        <p style={{ color: "var(--muted)" }}>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).</p>

        <h2 style={{ marginTop: "2.5rem" }}>Diensteanbieter</h2>
        <p>
          {site.name}{/* TODO: vollständigen Inhaber-/Firmennamen ergänzen */}<br />
          {site.address.street}{/* TODO: echte Anschrift der Hauptgeschäftsstelle */}<br />
          {site.address.zip} {site.address.city}
        </p>

        <h2 style={{ marginTop: "2rem" }}>Kontakt</h2>
        <p>
          Telefon: <a href={`tel:${site.phoneHref}`}>{site.phone}</a><br />
          Mobil: <a href={`tel:${site.mobileHref}`}>{site.mobile}</a><br />
          E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>

        <h2 style={{ marginTop: "2rem" }}>Vertreten durch</h2>
        <p>{/* TODO */}Malermeister [Vor- und Nachname des Inhabers], Inhaber</p>

        <h2 style={{ marginTop: "2rem" }}>Berufsangaben</h2>
        <p>
          Gesetzliche Berufsbezeichnung: Malermeister (verliehen in der Bundesrepublik Deutschland)<br />
          {/* TODO */}Zuständige Handwerkskammer: Handwerkskammer Berlin<br />
          {/* TODO */}Handwerksrolle / Betriebsnummer: [bitte ergänzen]
        </p>

        <h2 style={{ marginTop: "2rem" }}>Umsatzsteuer-ID</h2>
        <p>{/* TODO */}Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: [DE… bitte ergänzen]</p>

        <h2 style={{ marginTop: "2rem" }}>Redaktionell verantwortlich</h2>
        <p>{/* TODO */}[Name], {site.address.street}, {site.address.zip} {site.address.city}</p>

        <h2 style={{ marginTop: "2rem" }}>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p style={{ marginTop: "2.5rem", color: "var(--muted)", fontSize: "0.9rem" }}>
          Hinweis: Dieses Impressum enthält Platzhalter (TODO). Bitte vor Veröffentlichung mit den
          rechtsverbindlichen Angaben des Betriebs vervollständigen.
        </p>
      </div>
    </section>
  );
}
