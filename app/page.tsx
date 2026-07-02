import Link from "next/link";
import { site, homeFaq, whatsappLink } from "@/lib/site";
import PaintJourney from "@/components/PaintJourney";
import SectionProgress from "@/components/SectionProgress";
import ServiceSwiper from "@/components/ServiceSwiper";
import TestimonialSlider from "@/components/TestimonialSlider";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import Stars from "@/components/Stars";
import JsonLd, { faqPage } from "@/components/JsonLd";

const ratingStr = site.rating.toString().replace(".", ",");

const swatches = [
  { name: "Hague Blue", hex: "#31373f" },
  { name: "Setting Plaster", hex: "#e5c8b8" },
  { name: "Green Smoke", hex: "#79857b" },
  { name: "Railings", hex: "#2b2e33" },
];

const panelLabels = ["Start", "Erfahrung", "Leistungen", "Farrow & Ball", "Bewertungen", "Kontakt"];

export default function Home() {
  return (
    <div className="home">
      {/* Cinematische 3D-Bühne, fix im Hintergrund – dreht sich mit dem Scroll */}
      <PaintJourney />
      <SectionProgress labels={panelLabels} />

      {/* 1 — HERO */}
      <section className="panel panel--hero" data-panel id="start">
        <div className="container panel__in">
          <Reveal><span className="eyebrow">Meisterbetrieb · Berlin · seit über {site.experienceYears} Jahren</span></Reveal>
          <Reveal delay={80}>
            <h1 className="panel__title">
              Farbe, die <span className="grad-text">Räume verwandelt</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="panel__lead">
              Malermeister Heußer bringt Fassaden, Altbauten und Wohnräume in ganz Berlin
              zum Strahlen – cinematic sauber, termintreu, zum Festpreis.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="panel__cta">
              <Link href="/kontakt" className="btn btn--primary btn--lg">Kostenloses Angebot in 24 h</Link>
              <a href={`tel:${site.phoneHref}`} className="btn btn--ghost btn--lg">☎ {site.phone}</a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="trustrow">
              <span className="trustrow__item"><Stars value={5} label={`${ratingStr} von 5`} /> <span><span className="num">{ratingStr}</span>/5</span></span>
              <span className="trustrow__sep" aria-hidden />
              <span className="trustrow__item"><span className="num">{site.reviewCount}</span>&nbsp;Google-Bewertungen</span>
              <span className="trustrow__sep" aria-hidden />
              <span className="trustrow__item">Farrow &amp; Ball Partner</span>
            </div>
          </Reveal>
          <span className="scroll-hint" aria-hidden>Swipe / Scroll <span>↓</span></span>
        </div>
      </section>

      {/* 2 — ERFAHRUNG / STORY */}
      <section className="panel" data-panel id="erfahrung">
        <div className="container panel__in panel__in--wide">
          <Reveal><span className="eyebrow">Seit {site.foundedYear}</span></Reveal>
          <Reveal delay={80}>
            <h2 className="panel__title">
              <span className="grad-text">{site.experienceYears} Jahre</span> Handwerk,<br />das man sieht.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="panel__lead">
              Hunderte sanierte Fassaden, restaurierte Stuckdecken und edle Farbkonzepte –
              von Mitte bis Köpenick. Als Meisterbetrieb haften wir für Qualität und arbeiten,
              als wäre es unser eigenes Zuhause.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="statline">
              <div className="statline__it"><b>{site.experienceYears}+</b><span>Jahre Erfahrung</span></div>
              <div className="statline__it"><b>{ratingStr}★</b><span>bei {site.reviewCount} Bewertungen</span></div>
              <div className="statline__it"><b>2</b><span>Geschäftsstellen</span></div>
              <div className="statline__it"><b>100 %</b><span>Festpreis-Garantie</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — LEISTUNGEN (Swipe-Deck) */}
      <section className="panel" data-panel id="leistungen">
        <div className="container panel__in panel__in--wide">
          <Reveal><span className="eyebrow">Leistungen · zum Wischen</span></Reveal>
          <Reveal delay={80}><h2 className="panel__title panel__title--sm">Alles aus einer Meisterhand</h2></Reveal>
          <Reveal delay={140}><ServiceSwiper /></Reveal>
        </div>
      </section>

      {/* 4 — FARROW & BALL */}
      <section className="panel" data-panel id="farrow">
        <div className="container panel__in panel__in--wide">
          <div className="fb-split">
            <div>
              <Reveal><span className="eyebrow">Premium-Differenzierer</span></Reveal>
              <Reveal delay={80}><h2 className="panel__title panel__title--sm">Farrow &amp; Ball – Farbe auf einem anderen Niveau</h2></Reveal>
              <Reveal delay={160}>
                <p className="panel__lead">
                  Als Partner arbeiten wir mit den pigmentreichsten Farben der Welt. Ihre
                  Tiefe und Lebendigkeit bei jedem Licht verwandeln gerade den Berliner Altbau.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="proofquote" style={{ maxWidth: "44ch" }}>
                  „Unsere Altbauwohnung wurde mit einem Farrow-&-Ball-Farbkonzept renoviert – einfach edel.“ – Google-Bewertung
                </p>
              </Reveal>
              <Reveal delay={280}>
                <Link href="/leistungen/innenraumgestaltung" className="btn btn--primary">Innenraumgestaltung entdecken</Link>
              </Reveal>
            </div>
            <Reveal delay={160} className="fb-swatches">
              {swatches.map((c) => (
                <div key={c.name} className="fb-swatch" style={{ background: c.hex }}>
                  <span>{c.name}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 — BEWERTUNGEN (Swipe) */}
      <section className="panel" data-panel id="bewertungen">
        <div className="container panel__in panel__in--wide">
          <Reveal><span className="eyebrow">Kundenstimmen · zum Wischen</span></Reveal>
          <Reveal delay={80}><h2 className="panel__title panel__title--sm">{ratingStr} ★ bei {site.reviewCount} Google-Bewertungen</h2></Reveal>
          <Reveal delay={140}><TestimonialSlider /></Reveal>
        </div>
      </section>

      {/* 6 — KONTAKT / CTA */}
      <section className="panel panel--cta" data-panel id="kontakt">
        <div className="container panel__in">
          <Reveal><span className="eyebrow" style={{ justifyContent: "center" }}>Jetzt starten</span></Reveal>
          <Reveal delay={80}><h2 className="panel__title">Bereit für frische Farbe?</h2></Reveal>
          <Reveal delay={160}>
            <p className="panel__lead" style={{ marginInline: "auto" }}>
              Kostenloses Angebot in 24 Stunden – unverbindlich, mit verbindlichem Festpreis nach Besichtigung.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="panel__cta" style={{ justifyContent: "center" }}>
              <Link href="/kontakt" className="btn btn--primary btn--lg">Kostenloses Angebot</Link>
              <a href={`tel:${site.phoneHref}`} className="btn btn--ghost btn--lg">☎ {site.phone}</a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">WhatsApp</a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <details className="home-faq">
              <summary>Häufige Fragen ansehen</summary>
              <div style={{ marginTop: "1.2rem" }}><FaqAccordion items={homeFaq} /></div>
            </details>
          </Reveal>
        </div>
      </section>

      <JsonLd data={faqPage(homeFaq)} />
    </div>
  );
}
