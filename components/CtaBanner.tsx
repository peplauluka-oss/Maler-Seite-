import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import Icon from "@/components/Icon";

/** Wiederkehrender Abschluss-CTA mit Angebots-, Telefon- und WhatsApp-Aktion. */
export default function CtaBanner({
  title = "Bereit für frische Farbe?",
  text = "Kostenloses Angebot in 24 Stunden – unverbindlich und mit verbindlichem Festpreis nach Besichtigung.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="ctabanner glass">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Jetzt starten</span>
          <h2 style={{ maxWidth: "20ch", margin: "0 auto 0.8rem" }}>{title}</h2>
          <p className="lead" style={{ margin: "0 auto 1.8rem" }}>{text}</p>
          <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/kontakt" className="btn btn--primary btn--lg">Kostenloses Angebot</Link>
            <a href={`tel:${site.phoneHref}`} className="btn btn--ghost btn--lg"><Icon name="phone" size={18} /> {site.phone}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
