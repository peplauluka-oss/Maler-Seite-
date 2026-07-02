import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import JsonLd, { faqPage } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Gewerbekunden – Maler für Büro & Gewerbe in Berlin | Heußer" },
  description:
    "Maler für Gewerbekunden in Berlin: Büro, Praxis, Laden & Objekt streichen ohne Betriebsunterbrechung – abends & am Wochenende. Termintreu, mit ausweisbarer Rechnung. Jetzt anfragen!",
  alternates: { canonical: "/gewerbekunden" },
};

const audiences = [
  { icon: "🏢", title: "Büros & Coworking", text: "Frische, repräsentative Arbeitswelten – abschnittsweise renoviert, ohne dass die Arbeit stoppt." },
  { icon: "🩺", title: "Praxen & Kanzleien", text: "Hygienische, strapazierfähige Oberflächen und ein Ambiente, das Vertrauen schafft." },
  { icon: "🛍️", title: "Läden & Gastronomie", text: "Robuste Beschichtungen und Markenfarben für stark frequentierte Flächen – schnell umgesetzt." },
  { icon: "🏗️", title: "Hausverwaltungen & Bauträger", text: "Verlässlicher Partner für Treppenhäuser, Leerwohnungen und Objekte – planbar und dokumentiert." },
];

const b2bFaq = [
  { q: "Können Sie ohne Betriebsunterbrechung arbeiten?", a: "Ja. Wir arbeiten abschnittsweise und auf Wunsch abends oder am Wochenende, damit Ihr Betrieb weiterläuft. Den Zeitplan stimmen wir vorab genau mit Ihnen ab." },
  { q: "Erhalten wir eine ordnungsgemäße Rechnung?", a: "Selbstverständlich. Als Meisterbetrieb rechnen wir Gewerbeaufträge sauber und umsatzsteuerausweisend ab – nachvollziehbar für Ihre Buchhaltung." },
  { q: "Übernehmen Sie auch wiederkehrende Aufträge?", a: "Ja. Für Hausverwaltungen und Bauträger übernehmen wir gern regelmäßige Instandhaltung, Leerwohnungsrenovierungen und Treppenhausanstriche zu Rahmenkonditionen." },
  { q: "Wie schnell bekommen wir ein Angebot?", a: "In der Regel innerhalb von 24 Stunden nach Ihrer Anfrage. Nach einer Objektbesichtigung erhalten Sie ein transparentes Festpreisangebot." },
];

export default function Gewerbekunden() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ name: "Start", url: "/" }, { name: "Gewerbekunden", url: "/gewerbekunden" }]} />
          <Reveal><span className="eyebrow">B2B · Gewerbe &amp; Objekt</span></Reveal>
          <Reveal delay={80}><h1>Maler für Gewerbe in Berlin – ohne Betriebsstillstand</h1></Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Ihr Betrieb läuft weiter, während wir renovieren. Wir arbeiten abschnittsweise,
              abends oder am Wochenende – staubarm, termintreu und mit einer Abrechnung, die
              auch das Finanzamt gerne sieht.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="hero__cta" style={{ marginTop: "1.6rem" }}>
              <Link href="/kontakt" className="btn btn--primary btn--lg">Gewerbe-Angebot anfordern</Link>
              <a href={whatsappLink("Anfrage Gewerbe: ")} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <Reveal><span className="eyebrow">Für wen wir arbeiten</span></Reveal>
            <Reveal delay={80}><h2>Ihr Partner für jede Gewerbefläche</h2></Reveal>
          </div>
          <div className="cards">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="card">
                  <div className="card__icon" aria-hidden>{a.icon}</div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split">
            <div>
              <Reveal><span className="eyebrow">Warum Heußer</span></Reveal>
              <Reveal delay={80}><h2>Verlässlich – das bestätigt sogar der Wettbewerb</h2></Reveal>
              <Reveal delay={140}>
                <p className="proofquote">
                  „Als Tischlerei arbeiten wir regelmäßig mit Malermeister Heußer zusammen.
                  Verlässlich, termintreu und handwerklich auf höchstem Niveau.“ – Google-Bewertung (B2B)
                </p>
              </Reveal>
              <Reveal delay={200}>
                <ul className="checklist">
                  <li>Feste Ansprechpartner &amp; klare Zeitfenster</li>
                  <li>Staubarmes Arbeiten im laufenden Betrieb</li>
                  <li>Robuste, langlebige Objektbeschichtungen</li>
                  <li>Ausweisbare Rechnung &amp; Gewährleistung</li>
                </ul>
              </Reveal>
            </div>
            <div>
              <Reveal delay={120}>
                <div className="glass" style={{ padding: "2rem" }}>
                  <h3 style={{ marginBottom: "1rem" }}>Häufige Fragen (Gewerbe)</h3>
                  <FaqAccordion items={b2bFaq} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <JsonLd data={faqPage(b2bFaq)} />
      </section>

      <CtaBanner
        title="Projekt planen?"
        text={`Rufen Sie an unter ${site.phone} – wir besichtigen Ihr Objekt und liefern ein Festpreisangebot innerhalb von 24 Stunden.`}
      />
    </>
  );
}
