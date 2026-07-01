import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { services, images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere Leistungen: Manuelle Therapie, Marnitz-Therapie, Krankengymnastik, Lymphdrainage, Hot-Stone- & klassische Massage, Dorn, Brügger, Bobath, Wärme- und Elektrotherapie sowie Hausbesuche.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Unsere Leistungen</span>
          <h1>Behandlungen &amp; Therapien</h1>
          <p className="lead" style={{ margin: "0 auto" }}>
            Ein breites Spektrum aus Physiotherapie, manuellen Techniken und
            wohltuenden Anwendungen – individuell auf Sie abgestimmt und nach
            ärztlicher Verordnung.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {services.map((s) => (
              <article className="card" key={s.slug} id={s.slug}>
                <div className="card__icon" aria-hidden>
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container split">
          <div className="split__media">
            <Photo
              src={images.massage}
              alt="Wohltuende Massage in der Praxis Rammelt"
              icon="💆"
              ratio="4 / 3"
            />
          </div>
          <div className="split__body">
            <span className="eyebrow">Gut zu wissen</span>
            <h2>Für alle Kassen &amp; privat</h2>
            <ul className="check-list">
              <li>Wir behandeln nach ärztlicher Verordnung (Rezept).</li>
              <li>Gesetzliche und private Krankenkassen sowie Selbstzahler:innen.</li>
              <li>Barrierefreier Zugang zur Praxis.</li>
              <li>Hausbesuche im näheren Umkreis nach Vereinbarung.</li>
            </ul>
            <Link href="/kontakt" className="btn btn--primary">
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--teal">
        <div className="container center">
          <h2>Nicht sicher, welche Behandlung passt?</h2>
          <p className="lead" style={{ margin: "0 auto 1.5rem" }}>
            Rufen Sie uns an – wir beraten Sie gern und finden gemeinsam die richtige
            Therapie für Sie.
          </p>
          <a href={`tel:${site.phoneHref}`} className="btn btn--primary">
            📞 {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
