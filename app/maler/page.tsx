import type { Metadata } from "next";
import Link from "next/link";
import { districts, site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: { absolute: "Maler in Berlin – alle Bezirke | Malermeister Heußer" },
  description:
    "Maler in ganz Berlin: von Mitte über Prenzlauer Berg, Charlottenburg und Pankow bis Köpenick. Meisterbetrieb für Fassade, Altbau & Wohnung. Finden Sie Ihren Bezirk!",
  alternates: { canonical: "/maler" },
};

export default function MalerOverview() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ name: "Start", url: "/" }, { name: "Bezirke", url: "/maler" }]} />
          <Reveal><span className="eyebrow">Einsatzgebiet</span></Reveal>
          <Reveal delay={80}><h1>Ihr Maler in Berlin – in jedem Bezirk</h1></Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Mit Geschäftsstellen in Niederschönhausen und Köpenick ist Malermeister Heußer in
              ganz Berlin schnell bei Ihnen. Wählen Sie Ihren Bezirk – wir kennen die typische
              Bausubstanz vor Ort.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
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

      <CtaBanner title="Ihr Bezirk nicht dabei?" text={`Wir arbeiten in ganz Berlin und im Umland. Rufen Sie an unter ${site.phone} – wir sind auch bei Ihnen.`} />
    </>
  );
}
