import type { Metadata } from "next";
import Link from "next/link";
import { site, process } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import Icon, { type IconName } from "@/components/Icon";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: { absolute: "Über uns – Meisterbetrieb für Maler in Berlin | Heußer" },
  description:
    "Malermeister Heußer: über 23 Jahre Erfahrung, Meisterbetrieb aus Berlin. Erfahren Sie, wofür wir stehen – Qualität, Sauberkeit, Termintreue und denkmalgerechtes Handwerk.",
  alternates: { canonical: "/ueber-uns" },
};

const values = [
  { icon: "shield", title: "Meisterqualität", text: "Als eingetragener Meisterbetrieb haften wir für unsere Arbeit – geprüftes Handwerk statt Kolonne." },
  { icon: "broom", title: "Sauberkeit", text: "Sorgfältig abgedeckt, jeden Abend aufgeräumt, besenreine Übergabe. Ihr Zuhause bleibt Ihr Zuhause." },
  { icon: "clock", title: "Termintreue", text: "Vereinbarte Termine halten wir ein. Verlässlichkeit ist bei uns keine Floskel, sondern Standard." },
  { icon: "euro", title: "Festpreis", text: "Ein verbindliches Angebot nach Besichtigung – keine bösen Überraschungen am Ende." },
  { icon: "column", title: "Altbau-Erfahrung", text: "Denkmalgerechtes Arbeiten an Berlins historischer Bausubstanz – vom Stuck bis zur Fassade." },
  { icon: "roller", title: "Farrow & Ball", text: "Als Partner arbeiten wir mit Premium-Farben und beraten Sie zu stimmigen Farbkonzepten." },
];

export default function UeberUns() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ name: "Start", url: "/" }, { name: "Über uns", url: "/ueber-uns" }]} />
          <Reveal><span className="eyebrow">Meisterbetrieb · Berlin</span></Reveal>
          <Reveal delay={80}><h1>Handwerk mit Anspruch – seit über {site.experienceYears} Jahren</h1></Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Malermeister Heußer ist ein Berliner Meisterbetrieb mit Geschäftsstellen in
              Niederschönhausen und Köpenick. Wir stehen für sauberes, ehrliches Handwerk –
              von der denkmalgerechten Altbausanierung bis zum edlen Farbkonzept.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split">
            <div>
              <Reveal><span className="eyebrow">Unsere Geschichte</span></Reveal>
              <Reveal delay={80}><h2>Aus Leidenschaft für Farbe und Substanz</h2></Reveal>
              <Reveal delay={140}>
                <p>
                  Seit über zwei Jahrzehnten geben wir Berliner Gebäuden neuen Glanz. In dieser Zeit
                  haben wir hunderte Fassaden saniert, Altbauwohnungen mit Farrow-&-Ball-Farben veredelt,
                  Stuck restauriert und Gewerbeflächen ohne Betriebsunterbrechung renoviert.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  Was uns geblieben ist: der Anspruch, jede Arbeit so auszuführen, als wäre es unser
                  eigenes Zuhause. Das bestätigen 74 Google-Bewertungen mit einem Schnitt von {site.rating.toString().replace(".", ",")}
                  &nbsp;Sternen – und die vielen Kunden, die uns weiterempfehlen.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <Link href="/kontakt" className="btn btn--primary" style={{ marginTop: "0.6rem" }}>Lernen Sie uns kennen</Link>
              </Reveal>
            </div>
            <div>
              <Reveal delay={100}>
                <div className="media-frame" style={{ marginBottom: "1.2rem" }}>
                  <Photo src="/images/malermeister-heusser-portraet.jpg" alt="Malermeister Heußer mit Team bei Malerarbeiten in Berlin" ratio="4 / 3" rounded={false} />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="stats" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
                  <div className="stat"><div className="stat__num">{site.experienceYears}+</div><div className="stat__label">Jahre Erfahrung</div></div>
                  <div className="stat"><div className="stat__num" style={{ display: "inline-flex", alignItems: "center", gap: "0.15rem" }}>{site.rating.toString().replace(".", ",")}<Icon name="star" size={22} style={{ color: "var(--copper-bright)" }} /></div><div className="stat__label">Google-Rating</div></div>
                  <div className="stat"><div className="stat__num">{site.reviewCount}</div><div className="stat__label">Bewertungen</div></div>
                  <div className="stat"><div className="stat__num">100 %</div><div className="stat__label">Festpreis</div></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <Reveal><span className="eyebrow">Wofür wir stehen</span></Reveal>
            <Reveal delay={80}><h2>Sechs Versprechen an jeden Kunden</h2></Reveal>
          </div>
          <div className="cards">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="card">
                  <div className="card__icon" aria-hidden><Icon name={v.icon as IconName} size={26} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head center">
            <Reveal><span className="eyebrow" style={{ justifyContent: "center" }}>So arbeiten wir</span></Reveal>
            <Reveal delay={80}><h2>In 3 Schritten zum Ergebnis</h2></Reveal>
          </div>
          <div className="process">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="process__step glass">
                  <div className="process__num">{p.step}</div>
                  <div className="process__icon" aria-hidden><Icon name={p.icon as IconName} size={26} /></div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <Reveal><span className="eyebrow">Ein eingespieltes Team</span></Reveal>
            <Reveal delay={80}><h2>Die Menschen hinter dem Meisterbetrieb</h2></Reveal>
          </div>
          <Reveal delay={120}>
            <div className="media-frame">
              <Photo src="/images/team-malermeister-heusser-berlin.jpg" alt="Das Team von Malermeister Heußer bei der Arbeit in Berlin" ratio="16 / 7" rounded={false} />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
