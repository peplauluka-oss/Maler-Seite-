import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService, districts, site } from "@/lib/site";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import JsonLd, { faqPage } from "@/components/JsonLd";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/leistungen/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/leistungen/${s.slug}` },
  };
}

function serviceSchema(slug: string) {
  const s = getService(slug)!;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    serviceType: s.keyword,
    description: s.metaDescription,
    provider: { "@type": "HousePainter", name: site.name, "@id": `${site.domain}/#business` },
    areaServed: { "@type": "City", name: "Berlin" },
    url: `${site.domain}/leistungen/${s.slug}`,
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) return notFound();

  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ name: "Start", url: "/" }, { name: "Leistungen", url: "/leistungen" }, { name: s.title.split(" & ")[0], url: `/leistungen/${s.slug}` }]} />
          <div className="split">
            <div>
              <Reveal><span className="eyebrow">{s.keyword}</span></Reveal>
              <Reveal delay={80}><h1>{s.h1}</h1></Reveal>
              <Reveal delay={160}><p className="lead">{s.teaser}</p></Reveal>
              <Reveal delay={240}>
                <div className="hero__cta" style={{ marginTop: "1.6rem" }}>
                  <Link href="/kontakt" className="btn btn--primary btn--lg">Kostenloses Angebot</Link>
                  <a href={`tel:${site.phoneHref}`} className="btn btn--ghost btn--lg">☎ {site.phone}</a>
                </div>
              </Reveal>
            </div>
            <div className="split__media">
              <Reveal delay={140}>
                <div className="media-frame">
                  <Photo src={s.image} alt={s.imageAlt} icon={s.icon} ratio="4 / 3" rounded={false} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Lösung */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split">
            <div>
              <Reveal><span className="problemcard"><span aria-hidden>⚠</span> Das Problem</span></Reveal>
              <Reveal delay={80}><p className="lead">{s.problem}</p></Reveal>
              <Reveal delay={140}><h2 style={{ marginTop: "2rem" }}>Unsere Lösung</h2></Reveal>
              <Reveal delay={200}><p>{s.solution}</p></Reveal>
              {s.priceHint && (
                <Reveal delay={240}>
                  <div className="glass" style={{ padding: "1.4rem 1.6rem", marginTop: "1.4rem" }}>
                    <strong style={{ display: "block", marginBottom: "0.4rem", color: "var(--copper-bright)", fontFamily: "var(--display)" }}>💶 Was kostet das?</strong>
                    <span style={{ color: "var(--text-soft)" }}>{s.priceHint}</span>
                  </div>
                </Reveal>
              )}
            </div>
            <div>
              <Reveal delay={120}>
                <div className="glass" style={{ padding: "2rem" }}>
                  <h3 style={{ marginBottom: "1.2rem" }}>Das ist alles dabei</h3>
                  <ul className="checklist" style={{ margin: 0 }}>
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <p className="proofquote" style={{ marginBottom: 0, marginTop: "1.6rem" }}>{s.proof}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <Reveal><span className="eyebrow">Häufige Fragen</span></Reveal>
            <Reveal delay={80}><h2>{s.keyword} – Ihre Fragen</h2></Reveal>
          </div>
          <Reveal delay={120}><FaqAccordion items={s.faq} /></Reveal>
        </div>
        <JsonLd data={faqPage(s.faq)} />
      </section>

      {/* Interne Verlinkung: Bezirke + andere Leistungen */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <h3 style={{ marginBottom: "1rem" }}>{s.title.split(" & ")[0]} in Ihrem Bezirk</h3>
          </Reveal>
          <Reveal delay={80}>
            <div className="linkgrid" style={{ marginBottom: "2.5rem" }}>
              {districts.slice(0, 8).map((d) => (
                <Link key={d.slug} href={`/maler/${d.slug}`} className="linkcard">Maler {d.name} <span aria-hidden>→</span></Link>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h3 style={{ marginBottom: "1rem" }}>Weitere Leistungen</h3>
          </Reveal>
          <Reveal delay={80}>
            <div className="linkgrid">
              {others.map((o) => (
                <Link key={o.slug} href={`/leistungen/${o.slug}`} className="linkcard">
                  {o.icon}&nbsp; {o.title.split(" & ")[0].split(" (")[0]} <span aria-hidden>→</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title={`${s.title.split(" & ")[0].split(" (")[0]} gefällig?`}
        text={`Kostenloses Angebot in 24 Stunden. Rufen Sie an unter ${site.phone} oder schreiben Sie uns per WhatsApp.`}
      />

      <JsonLd data={serviceSchema(s.slug)} />
    </>
  );
}
