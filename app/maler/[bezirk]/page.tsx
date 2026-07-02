import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { districts, getDistrict, getService, site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import TestimonialSlider from "@/components/TestimonialSlider";
import CtaBanner from "@/components/CtaBanner";
import Stars from "@/components/Stars";

export function generateStaticParams() {
  return districts.map((d) => ({ bezirk: d.slug }));
}

export function generateMetadata({ params }: { params: { bezirk: string } }): Metadata {
  const d = getDistrict(params.bezirk);
  if (!d) return {};
  return {
    title: { absolute: d.metaTitle },
    description: d.metaDescription,
    alternates: { canonical: `/maler/${d.slug}` },
    openGraph: { title: d.metaTitle, description: d.metaDescription, url: `/maler/${d.slug}` },
  };
}

const ratingStr = site.rating.toString().replace(".", ",");

export default function DistrictPage({ params }: { params: { bezirk: string } }) {
  const d = getDistrict(params.bezirk);
  if (!d) return notFound();

  const featured = d.featuredServices.map(getService).filter(Boolean);
  const nearby = districts.filter((x) => x.slug !== d.slug).slice(0, 6);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ name: "Start", url: "/" }, { name: "Bezirke", url: "/maler" }, { name: d.name, url: `/maler/${d.slug}` }]} />
          <Reveal><span className="eyebrow">Maler {d.name} · Berlin</span></Reveal>
          <Reveal delay={80}><h1>Ihr Maler in {d.name}</h1></Reveal>
          <Reveal delay={160}><p className="lead">{d.intro}</p></Reveal>
          <Reveal delay={220}>
            <div className="hero__cta" style={{ marginTop: "1.6rem" }}>
              <Link href="/kontakt" className="btn btn--primary btn--lg">Angebot für {d.name}</Link>
              <a href={`tel:${site.phoneHref}`} className="btn btn--ghost btn--lg">☎ {site.phone}</a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="trustrow" style={{ marginTop: "1.8rem" }}>
              <span className="trustrow__item"><Stars value={5} /> <span className="num">{ratingStr}</span> / 5</span>
              <span className="trustrow__sep" aria-hidden />
              <span className="trustrow__item"><span className="num">{site.reviewCount}</span>&nbsp;Google-Bewertungen</span>
              <span className="trustrow__sep" aria-hidden />
              <span className="trustrow__item">Meisterbetrieb</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lokaler Bezug */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split">
            <div>
              <Reveal><span className="eyebrow">Vor Ort in {d.name}</span></Reveal>
              <Reveal delay={80}><h2>Wir kennen die Bausubstanz in {d.name}</h2></Reveal>
              <Reveal delay={160}><p>{d.local}</p></Reveal>
            </div>
            <div>
              <Reveal delay={120}>
                <div className="glass" style={{ padding: "2rem" }}>
                  <h3 style={{ marginBottom: "1rem" }}>Typische Gebäude</h3>
                  <ul className="checklist" style={{ margin: "0 0 1.6rem" }}>
                    {d.buildingTypes.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <h3 style={{ marginBottom: "1rem" }}>Bekannt in {d.name}</h3>
                  <div className="chips">
                    {d.landmarks.map((l) => <span key={l} className="chip">{l}</span>)}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Relevante Leistungen */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <Reveal><span className="eyebrow">Passende Leistungen</span></Reveal>
            <Reveal delay={80}><h2>Malerarbeiten in {d.name}</h2></Reveal>
          </div>
          <Reveal delay={120}>
            <div className="cards">
              {featured.map((s) => s && (
                <Link key={s.slug} href={`/leistungen/${s.slug}`} className="card" style={{ display: "block" }}>
                  <div className="card__icon" aria-hidden>{s.icon}</div>
                  <h3>{s.title.split(" & ")[0].split(" (")[0]}</h3>
                  <p>{s.teaser}</p>
                  <span className="card__link">Mehr erfahren <span aria-hidden>→</span></span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <Reveal><span className="eyebrow">Kundenstimmen</span></Reveal>
            <Reveal delay={80}><h2>Das sagen Kunden in Berlin</h2></Reveal>
          </div>
          <Reveal delay={120}><TestimonialSlider /></Reveal>
        </div>
      </section>

      {/* Nachbarbezirke */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal><h3 style={{ marginBottom: "1rem" }}>Maler in benachbarten Bezirken</h3></Reveal>
          <Reveal delay={80}>
            <div className="linkgrid">
              {nearby.map((n) => (
                <Link key={n.slug} href={`/maler/${n.slug}`} className="linkcard">Maler {n.name} <span aria-hidden>→</span></Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title={`Maler gesucht in ${d.name}?`}
        text={`Kostenloses Angebot in 24 Stunden. Rufen Sie an unter ${site.phone} oder schreiben Sie uns per WhatsApp.`}
      />
    </>
  );
}
