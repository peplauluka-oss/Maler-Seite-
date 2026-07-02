import type { Metadata } from "next";
import { site, whatsappLink } from "@/lib/site";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Kontakt & kostenloses Angebot | Malermeister Heußer Berlin" },
  description:
    "Kontakt zu Malermeister Heußer in Berlin: Telefon 030 98 56 15 13, WhatsApp oder Formular. Kostenloses Angebot in 24 Stunden – für Fassade, Wohnung, Altbau & Gewerbe.",
  alternates: { canonical: "/kontakt" },
};

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;

export default function Kontakt() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ name: "Start", url: "/" }, { name: "Kontakt", url: "/kontakt" }]} />
          <Reveal><span className="eyebrow">Kontakt</span></Reveal>
          <Reveal delay={80}><h1>Kostenloses Angebot in 24 Stunden</h1></Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Rufen Sie an, schreiben Sie per WhatsApp oder füllen Sie das kurze Formular aus.
              Wir melden uns schnell mit einer ersten Einschätzung und einem Termin zur kostenlosen Besichtigung.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="quote">
            <div>
              <Reveal>
                <div className="glass" style={{ padding: "2rem", marginBottom: "1.3rem" }}>
                  <h3 style={{ marginBottom: "0.4rem" }}>So erreichen Sie uns</h3>
                  <ul className="info-list">
                    <li>
                      <span className="ic" aria-hidden>☎</span>
                      <span>
                        <strong style={{ display: "block", color: "var(--text)", fontFamily: "var(--display)" }}>Telefon</strong>
                        <a href={`tel:${site.phoneHref}`}>{site.phone}</a><br />
                        <a href={`tel:${site.mobileHref}`}>{site.mobile}</a> (mobil)
                      </span>
                    </li>
                    <li>
                      <span className="ic" aria-hidden>✆</span>
                      <span>
                        <strong style={{ display: "block", color: "var(--text)", fontFamily: "var(--display)" }}>WhatsApp</strong>
                        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Nachricht schreiben</a>
                      </span>
                    </li>
                    <li>
                      <span className="ic" aria-hidden>✉</span>
                      <span>
                        <strong style={{ display: "block", color: "var(--text)", fontFamily: "var(--display)" }}>E-Mail</strong>
                        <a href={`mailto:${site.email}`}>{site.email}</a>
                      </span>
                    </li>
                    <li>
                      <span className="ic" aria-hidden>📍</span>
                      <span>
                        <strong style={{ display: "block", color: "var(--text)", fontFamily: "var(--display)" }}>Geschäftsstellen</strong>
                        {site.address.district} &amp; {site.branch.district}, Berlin<br />
                        <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Auf Google Maps ansehen</a>
                      </span>
                    </li>
                    <li>
                      <span className="ic" aria-hidden>🕑</span>
                      <span>
                        <strong style={{ display: "block", color: "var(--text)", fontFamily: "var(--display)" }}>Öffnungszeiten</strong>
                        {site.hours.map((h) => (
                          <span key={h.day} style={{ display: "block", fontSize: "0.92rem" }}>{h.day}: {h.time}</span>
                        ))}
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="glass" style={{ padding: "1.3rem 1.6rem" }}>
                  <strong style={{ color: "var(--copper-bright)", fontFamily: "var(--display)" }}>Einsatzgebiet:</strong>{" "}
                  <span style={{ color: "var(--text-soft)" }}>ganz Berlin &amp; Umland – von Mitte über Prenzlauer Berg bis Köpenick.</span>
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal delay={120}>
                <h2 style={{ marginBottom: "1.2rem" }}>Angebot anfordern</h2>
                <QuoteForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
