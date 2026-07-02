import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/site";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: { absolute: "Leistungen – Malerarbeiten in Berlin | Malermeister Heußer" },
  description:
    "Alle Malerleistungen in Berlin: Fassadenanstrich, Wohnungs- & Innenanstrich, Lackierarbeiten, Tapezierarbeiten, Altbausanierung & Gewerbe. Vom Meisterbetrieb. Jetzt anfragen!",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ name: "Start", url: "/" }, { name: "Leistungen", url: "/leistungen" }]} />
          <Reveal><span className="eyebrow">Leistungen</span></Reveal>
          <Reveal delay={80}><h1>Malerarbeiten in Berlin – vom Meisterbetrieb</h1></Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Ob witterungsfeste Fassade, edler Wohnungsanstrich oder denkmalgerechte Altbausanierung:
              Malermeister Heußer liefert jede Leistung sauber, termintreu und zum verbindlichen Festpreis.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cards">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link href={`/leistungen/${s.slug}`} style={{ display: "block", height: "100%" }}>
                  <TiltCard>
                    <div className="card__icon" aria-hidden>{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.teaser}</p>
                    <span className="card__link">Zur Leistung <span aria-hidden>→</span></span>
                  </TiltCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Welche Leistung brauchen Sie?" text={`Rufen Sie an unter ${site.phone} oder fordern Sie Ihr kostenloses Angebot in 24 Stunden an.`} />
    </>
  );
}
