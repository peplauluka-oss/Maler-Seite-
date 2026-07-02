import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import SceneBackground from "@/components/SceneBackground";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Termin",
  description:
    "Termin vereinbaren bei Physiotherapie Simone Rammelt, Paul-Robeson-Straße 5, 10439 Berlin. Telefon 030 445 39 23. Kontaktformular und Anfahrt.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapQuery
  )}&output=embed`;

  return (
    <div className="subpage">
      <SceneBackground />
      <section className="page-header">
        <span className="orb orb--rose" />
        <span className="orb orb--sage" />
        <div className="container">
          <span className="eyebrow">Kontakt</span>
          <h1>Wir freuen uns auf Sie</h1>
          <p className="lead" style={{ margin: "0 auto" }}>
            Rufen Sie uns an oder schreiben Sie uns – wir melden uns schnell und
            finden gemeinsam einen Termin, der sich für Sie gut anfühlt.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2>So erreichen Sie uns</h2>
              <ul className="info-list">
                <li>
                  <span className="ic">📍</span>
                  <span>
                    <strong>Adresse</strong>
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.city} ({site.address.district})
                  </span>
                </li>
                <li>
                  <span className="ic">📞</span>
                  <span>
                    <strong>Telefon</strong>
                    <br />
                    <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                  </span>
                </li>
                <li>
                  <span className="ic">📠</span>
                  <span>
                    <strong>Fax</strong>
                    <br />
                    {site.fax}
                  </span>
                </li>
                <li>
                  <span className="ic">✉️</span>
                  <span>
                    <strong>E-Mail</strong>
                    <br />
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </span>
                </li>
              </ul>

              <h3 style={{ marginTop: "1.5rem" }}>Öffnungszeiten</h3>
              <ul className="hours-list">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>

              <p className="form-note" style={{ marginTop: "1rem" }}>
                Barrierefreier Zugang · Behandlung nach ärztlicher Verordnung ·
                Hausbesuche im näheren Umkreis nach Vereinbarung.
              </p>
            </div>

            <div className="hero__card">
              <h3>Terminanfrage</h3>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--blush" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-wrap">
            <iframe
              title="Anfahrt zur Praxis Simone Rammelt"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
