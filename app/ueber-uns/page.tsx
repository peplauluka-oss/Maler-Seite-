import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import Stars from "@/components/Stars";
import Reveal from "@/components/Reveal";
import SceneBackground from "@/components/SceneBackground";
import { team, site, images, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie das herzliche Team der Praxis Simone Rammelt in Prenzlauer Berg kennen – kompetente, einfühlsame Physiotherapie mit gutem Gefühl.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

export default function AboutPage() {
  return (
    <div className="subpage">
      <SceneBackground />
      <section className="page-header">
        <span className="orb orb--rose" />
        <span className="orb orb--sage" />
        <div className="container">
          <span className="eyebrow">Über uns</span>
          <h1>Frauen, die sich um Sie kümmern</h1>
          <p className="lead" style={{ margin: "0 auto" }}>
            Ein eingespieltes Frauen-Team mitten in {site.address.district} – mit viel
            Erfahrung, guter Laune und dem ehrlichen Wunsch, dass es Ihnen besser geht.
          </p>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container split">
          <div className="split__media">
            <Reveal>
              <Photo
                src={images.practice}
                alt="Behandlungsraum der Praxis Simone Rammelt"
                icon="🕯️"
                ratio="4 / 3"
              />
            </Reveal>
          </div>
          <div className="split__body">
            <span className="eyebrow">Unsere Philosophie</span>
            <h2>Der Mensch im Mittelpunkt</h2>
            <p>
              Bei uns behandeln wir nicht nur Symptome, sondern den ganzen Menschen.
              Wir nehmen uns Zeit, hören zu und entwickeln ein Konzept, das wirklich
              zu Ihnen passt – einfühlsam, kompetent und mit Freude an der Arbeit.
            </p>
            <p>
              Genau das spüren unsere Patient:innen: eine gemütliche, gut
              ausgestattete Praxis, ein herzliches Miteinander und Behandlungen, die
              nachhaltig wirken. Ihr Wohlbefinden ist unser gemeinsames Ziel.
            </p>
            <div className="center-stars" style={{ justifyContent: "flex-start" }}>
              <Stars rating={site.rating} count={site.reviewCount} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="container">
          <Reveal>
            <div className="section__head center">
              <span className="eyebrow">Unser Team</span>
              <h2>Ihre Therapeutinnen &amp; das Praxisteam</h2>
              <p className="lead">
                „Alle Kolleginnen sind sehr nett und haben sehr gute Laune, von der ich
                mich anstecken lasse.&ldquo; – so beschreiben uns unsere Patientinnen.
              </p>
            </div>
          </Reveal>
          <div className="grid grid--3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 90}>
                <article className="card team-card">
                  <div className="avatar" aria-hidden>
                    {initials(member.name)}
                  </div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p>{member.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Single testimonial highlight */}
      <section className="section">
        <div className="container">
          <Reveal>
            <figure className="quote-highlight">
              <div className="quote-card__mark" aria-hidden>&ldquo;</div>
              <blockquote>{testimonials[2].quote}</blockquote>
              <figcaption>
                <strong>{testimonials[2].author}</strong>
                <span>{testimonials[2].source}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta">
            <h2>Lernen Sie uns persönlich kennen</h2>
            <p className="lead" style={{ margin: "0 auto 1.5rem", color: "rgba(255,255,255,0.85)" }}>
              Wir freuen uns darauf, Sie in unserer Praxis in Prenzlauer Berg
              begrüßen zu dürfen.
            </p>
            <Link href="/kontakt" className="btn btn--primary">
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
