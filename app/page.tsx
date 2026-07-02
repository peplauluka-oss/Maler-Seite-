import Link from "next/link";
import { site, services, districts, process, homeFaq, beforeAfter, whatsappLink } from "@/lib/site";
import PaintHero from "@/components/PaintHero";
import TiltCard from "@/components/TiltCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FaqAccordion from "@/components/FaqAccordion";
import QuoteForm from "@/components/QuoteForm";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import Stars from "@/components/Stars";
import JsonLd, { faqPage } from "@/components/JsonLd";

const ratingStr = site.rating.toString().replace(".", ",");

const swatches = [
  { name: "Hague Blue", hex: "#31373f" },
  { name: "Setting Plaster", hex: "#e5c8b8" },
  { name: "Green Smoke", hex: "#79857b" },
  { name: "Railings", hex: "#2b2e33" },
  { name: "Dead Salmon", hex: "#b79b8b" },
  { name: "Card Room Green", hex: "#6b6a56" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <PaintHero />
        <div className="container">
          <div className="hero__inner">
            <Reveal>
              <span className="eyebrow">Meisterbetrieb · Berlin · seit über {site.experienceYears} Jahren</span>
            </Reveal>
            <Reveal delay={80}>
              <h1>
                Maler in Berlin, die <span className="grad-text">Wert schaffen</span> – innen wie außen
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hero__sub">
                Malermeister Heußer bringt Fassaden, Altbauten und Wohnräume in ganz Berlin
                zum Strahlen – sauber, termintreu und zum verbindlichen Festpreis.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero__cta">
                <Link href="/kontakt" className="btn btn--primary btn--lg">Kostenloses Angebot in 24 h</Link>
                <a href={`tel:${site.phoneHref}`} className="btn btn--ghost btn--lg">☎ {site.phone}</a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="trustrow">
                <span className="trustrow__item">
                  <Stars value={5} label={`${ratingStr} von 5 Sternen`} />
                  <span><span className="num">{ratingStr}</span> / 5</span>
                </span>
                <span className="trustrow__sep" aria-hidden />
                <span className="trustrow__item"><span className="num">{site.reviewCount}</span>&nbsp;Google-Bewertungen</span>
                <span className="trustrow__sep" aria-hidden />
                <span className="trustrow__item">Meisterbetrieb</span>
                <span className="trustrow__sep" aria-hidden />
                <span className="trustrow__item">Farrow &amp; Ball Partner</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STAT-LEISTE */}
      <section className="section--tight">
        <div className="container">
          <Reveal>
            <div className="stats">
              <div className="stat"><div className="stat__num">{site.experienceYears}+</div><div className="stat__label">Jahre Erfahrung</div></div>
              <div className="stat"><div className="stat__num">{ratingStr}★</div><div className="stat__label">Google-Rating</div></div>
              <div className="stat"><div className="stat__num">{site.reviewCount}</div><div className="stat__label">Bewertungen</div></div>
              <div className="stat"><div className="stat__num">2</div><div className="stat__label">Geschäftsstellen</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="section" id="leistungen">
        <div className="container">
          <div className="section__head">
            <Reveal><span className="eyebrow">Leistungen</span></Reveal>
            <Reveal delay={80}><h2>Alles aus einer Meisterhand</h2></Reveal>
            <Reveal delay={160}>
              <p className="lead">
                Von der verwitterten Fassade bis zur edlen Designtapete: Wir lösen jedes
                Malerproblem in Berlin – mit Materialien, die halten, und einer Ausführung, die man sieht.
              </p>
            </Reveal>
          </div>
          <div className="cards">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link href={`/leistungen/${s.slug}`} style={{ display: "block", height: "100%" }}>
                  <TiltCard>
                    <div className="card__icon" aria-hidden>{s.icon}</div>
                    <h3>{s.title.split(" & ")[0].split(" (")[0]}</h3>
                    <p>{s.teaser}</p>
                    <span className="card__link">Mehr erfahren <span aria-hidden>→</span></span>
                  </TiltCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM → LÖSUNG → BEWEIS (Fassade) */}
      <ProblemBlock service="fassadenanstrich" />
      {/* Altbau (gespiegelt) */}
      <ProblemBlock service="altbausanierung" reversed />
      {/* Büro */}
      <ProblemBlock service="buero-gewerbe" />

      {/* FARROW & BALL */}
      <section className="section fb">
        <div className="container">
          <div className="split">
            <div>
              <Reveal><span className="eyebrow">Premium-Differenzierer</span></Reveal>
              <Reveal delay={80}><h2>Farrow &amp; Ball – Farbe auf einem anderen Niveau</h2></Reveal>
              <Reveal delay={160}>
                <p className="lead">
                  Als Farrow &amp; Ball Partner arbeiten wir mit den pigmentreichsten Farben der Welt.
                  Ihre unverwechselbare Tiefe, die matte Oberfläche und die lebendige Wirkung bei
                  jedem Licht verwandeln Räume – gerade im Berliner Altbau.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="swatches" aria-hidden>
                  {swatches.map((c) => (
                    <span className="swatch" key={c.name} style={{ background: c.hex }}>
                      <span>{c.name}</span>
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={280}>
                <ul className="checklist">
                  <li>Persönliche Farbberatung, abgestimmt auf Licht &amp; Architektur</li>
                  <li>Fachgerechte Verarbeitung für das volle Farbergebnis</li>
                  <li>Komplette Farbkonzepte für Wohnung, Villa oder Fassade</li>
                </ul>
              </Reveal>
              <Reveal delay={320}>
                <Link href="/leistungen/innenraumgestaltung" className="btn btn--ghost">Zur Innenraumgestaltung</Link>
              </Reveal>
            </div>
            <div className="split__media">
              <Reveal delay={120}>
                <div className="glass" style={{ padding: "2rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "0.7rem" }}>
                    {swatches.map((c) => (
                      <div key={c.name} style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--line)" }}>
                        <div style={{ height: "72px", background: c.hex }} />
                        <div style={{ padding: "0.6rem 0.8rem", fontSize: "0.82rem", color: "var(--text-soft)", fontFamily: "var(--display)" }}>{c.name}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ margin: "1.2rem 0 0", fontSize: "0.85rem", color: "var(--muted)" }}>
                    Farbtöne inspiriert von der Farrow &amp; Ball Kollektion.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROZESS */}
      <section className="section">
        <div className="container">
          <div className="section__head center">
            <Reveal><span className="eyebrow" style={{ justifyContent: "center" }}>So einfach geht's</span></Reveal>
            <Reveal delay={80}><h2>In 3 Schritten zum Ergebnis</h2></Reveal>
            <Reveal delay={160}><p className="lead" style={{ marginInline: "auto" }}>Kein Risiko, keine versteckten Kosten – planbar von der ersten Anfrage bis zur besenreinen Übergabe.</p></Reveal>
          </div>
          <div className="process">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="process__step glass">
                  <div className="process__num">{p.step}</div>
                  <div className="process__icon" aria-hidden>{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VORHER / NACHHER */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <Reveal><span className="eyebrow">Ergebnisse zum Anfassen</span></Reveal>
            <Reveal delay={80}><h2>Vorher / Nachher</h2></Reveal>
            <Reveal delay={160}><p className="lead">Ziehen Sie den Regler und sehen Sie den Unterschied. (Projektfotos folgen – die Beispiele zeigen den Effekt.)</p></Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.3rem" }}>
            {beforeAfter.map((b, i) => (
              <Reveal key={i} delay={i * 90}>
                <BeforeAfterSlider before={b.before} after={b.after} label={b.label} icon={b.icon} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" id="bewertungen">
        <div className="container">
          <div className="section__head">
            <Reveal><span className="eyebrow">Kundenstimmen</span></Reveal>
            <Reveal delay={80}><h2>{ratingStr} ★ bei {site.reviewCount} Google-Bewertungen</h2></Reveal>
            <Reveal delay={160}><p className="lead">Was Berliner Eigentümer, Mieter und Gewerbekunden über die Zusammenarbeit sagen – wischen Sie durch.</p></Reveal>
          </div>
          <Reveal delay={120}><TestimonialSlider /></Reveal>
        </div>
      </section>

      {/* BEZIRKE */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <Reveal><span className="eyebrow">Vor Ort in Ihrem Kiez</span></Reveal>
            <Reveal delay={80}><h2>Maler für ganz Berlin</h2></Reveal>
            <Reveal delay={160}><p className="lead">Von Niederschönhausen und Köpenick aus in allen Bezirken für Sie im Einsatz. Finden Sie Ihren Kiez:</p></Reveal>
          </div>
          <Reveal delay={120}>
            <div className="linkgrid">
              {districts.map((d) => (
                <Link key={d.slug} href={`/maler/${d.slug}`} className="linkcard">
                  Maler {d.name} <span aria-hidden>→</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section__head">
            <Reveal><span className="eyebrow">Häufige Fragen</span></Reveal>
            <Reveal delay={80}><h2>Antworten, bevor Sie fragen</h2></Reveal>
          </div>
          <Reveal delay={120}><FaqAccordion items={homeFaq} /></Reveal>
        </div>
        <JsonLd data={faqPage(homeFaq)} />
      </section>

      {/* ANGEBOTS-FORMULAR */}
      <section className="section" id="angebot">
        <div className="container">
          <div className="quote">
            <div>
              <span className="eyebrow">Kostenloses Angebot</span>
              <h2>In 60 Sekunden zur Anfrage</h2>
              <p className="lead">Sagen Sie uns kurz, worum es geht – wir melden uns innerhalb von 24 Stunden mit einer ersten Einschätzung und einem Termin für die kostenlose Besichtigung.</p>
              <ul className="checklist">
                <li>Unverbindlich &amp; kostenlos</li>
                <li>Verbindlicher Festpreis nach Besichtigung</li>
                <li>Antwort innerhalb von 24 Stunden</li>
              </ul>
              <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", marginTop: "1.4rem" }}>
                <a href={`tel:${site.phoneHref}`} className="btn btn--ghost">☎ {site.phone}</a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">WhatsApp</a>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

/* --- Problem → Lösung → Beweis Block (Server Component) --- */
import { getService } from "@/lib/site";
import Photo from "@/components/Photo";

function ProblemBlock({ service, reversed = false }: { service: string; reversed?: boolean }) {
  const s = getService(service);
  if (!s) return null;
  return (
    <section className="section">
      <div className="container">
        <div className={`split ${reversed ? "split--rev" : ""}`}>
          <div>
            <Reveal>
              <span className="problemcard"><span aria-hidden>⚠</span> {s.problem.split(" – ")[0].split(",")[0]}?</span>
            </Reveal>
            <Reveal delay={80}><h2>{s.title.split(" & ")[0].split(" (")[0]}</h2></Reveal>
            <Reveal delay={140}><p className="lead">{s.solution}</p></Reveal>
            <Reveal delay={200}>
              <ul className="checklist">
                {s.bullets.slice(0, 4).map((b) => <li key={b}>{b}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={240}><p className="proofquote">{s.proof}</p></Reveal>
            <Reveal delay={280}>
              <Link href={`/leistungen/${s.slug}`} className="btn btn--primary">Details &amp; Preise</Link>
            </Reveal>
          </div>
          <div className="split__media">
            <Reveal delay={120}>
              <div className="media-frame">
                <Photo src={s.image} alt={s.imageAlt} icon={s.icon} ratio="4 / 3" rounded={false} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
