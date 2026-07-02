import type { Metadata } from "next";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Malermeister Heußer, Berlin – Informationen zum Umgang mit Ihren Daten.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <section className="page-header">
      <div className="container" style={{ maxWidth: "820px" }}>
        <Breadcrumbs items={[{ name: "Start", url: "/" }, { name: "Datenschutz", url: "/datenschutz" }]} />
        <h1>Datenschutzerklärung</h1>
        <p style={{ color: "var(--muted)" }}>Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}. Muster – bitte vor Veröffentlichung rechtlich prüfen lassen (TODO).</p>

        <h2 style={{ marginTop: "2.5rem" }}>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
          {site.name}, {site.address.street}, {site.address.zip} {site.address.city}<br />
          E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a> · Telefon: {site.phone}
        </p>

        <h2 style={{ marginTop: "2rem" }}>2. Hosting &amp; Server-Logs</h2>
        <p>
          Diese Website wird als statische Seite ausgeliefert. Beim Aufruf verarbeitet der Hoster
          technisch notwendige Zugriffsdaten (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene Seite,
          Browsertyp) zur Bereitstellung und Sicherheit der Seite. Rechtsgrundlage ist Art. 6 Abs. 1
          lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb).{/* TODO: Hoster benennen + AV-Vertrag */}
        </p>

        <h2 style={{ marginTop: "2rem" }}>3. Schriften (Fonts)</h2>
        <p>
          Wir binden Schriftarten lokal von unserem eigenen Server ein. Es werden dabei keine Daten
          an Dritte (z. B. Google Fonts) übertragen.
        </p>

        <h2 style={{ marginTop: "2rem" }}>4. Kontaktaufnahme &amp; Angebotsformular</h2>
        <p>
          Wenn Sie uns über das Formular, per E-Mail, Telefon oder WhatsApp kontaktieren, verarbeiten
          wir die von Ihnen mitgeteilten Daten (z. B. Name, Kontaktdaten, Angaben zum Vorhaben), um Ihre
          Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
          Maßnahmen) bzw. lit. f DSGVO. Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr
          erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
        <p style={{ color: "var(--muted)" }}>
          Hinweis: Das Formular übermittelt Ihre Anfrage auf Wunsch über WhatsApp. Beim Klick auf den
          WhatsApp-Button gelten die Datenschutzbestimmungen von WhatsApp/Meta.{/* TODO: ggf. Formular-Backend ergänzen */}
        </p>

        <h2 style={{ marginTop: "2rem" }}>5. WhatsApp</h2>
        <p>
          Nutzen Sie den WhatsApp-Kontakt, werden Ihre Daten durch die WhatsApp Ireland Ltd. verarbeitet.
          Wir haben auf diese Verarbeitung keinen Einfluss. Weitere Informationen finden Sie in der
          Datenschutzerklärung von WhatsApp.
        </p>

        <h2 style={{ marginTop: "2rem" }}>6. Karten / Google Maps</h2>
        <p>
          Wir binden Google Maps nicht direkt ein. Über einen Link können Sie unseren Standort bei
          Google Maps öffnen – erst dann gelten die Datenschutzbestimmungen von Google.
        </p>

        <h2 style={{ marginTop: "2rem" }}>7. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Zudem können Sie sich bei einer Aufsichtsbehörde
          beschweren (für Berlin: Berliner Beauftragte für Datenschutz und Informationsfreiheit).
        </p>

        <p style={{ marginTop: "2.5rem", color: "var(--muted)", fontSize: "0.9rem" }}>
          Diese Datenschutzerklärung ist ein Muster mit Platzhaltern und ersetzt keine Rechtsberatung.
          Bitte vor Veröffentlichung durch eine fachkundige Stelle prüfen und ergänzen (TODO).
        </p>
      </div>
    </section>
  );
}
