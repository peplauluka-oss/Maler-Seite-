import Link from "next/link";
import Photo from "@/components/Photo";
import Stars from "@/components/Stars";
import { services, site, testimonials, images } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="badge">
              <Stars rating={site.rating} count={site.reviewCount} />
            </span>
            <h1>
              Zurück in Bewegung – <span className="accent">mit Herz&nbsp;behandelt</span>
            </h1>
            <p className="lead">
              In der Praxis von {site.owner} in {site.address.district} fühlen Sie sich
              vom ersten Moment an gut aufgehoben. Wir nehmen uns Zeit, hören zu und
              behandeln so, dass es nachhaltig wirkt.
            </p>
            <div className="hero__actions">
              <Link href="/kontakt" className="btn btn--primary">
                Termin vereinbaren
              </Link>
              <a href={`tel:${site.phoneHref}`} className="btn btn--ghost">
                📞 {site.phone}
              </a>
            </div>
            <ul className="trust-row">
              <li>✔ Alle Kassen &amp; privat</li>
              <li>✔ Kurzfristige Termine</li>
              <li>✔ Barrierefrei</li>
            </ul>
          </div>

          <div className="hero__media">
            <Photo
              src={images.hero}
              alt="Physiotherapeutische Behandlung in der Praxis Rammelt"
              icon="💆"
              ratio="4 / 5"
            />
            <div className="hero__floating">
              <strong>{site.reviewCount}+ Patient:innen</strong>
              <span>empfehlen uns weiter</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="infobar">
        <div className="container infobar__grid">
          <div className="infobar__item">
            <span aria-hidden>📍</span>
            <div>
              <strong>{site.address.street}</strong>
              <span>{site.address.city}</span>
            </div>
          </div>
          <div className="infobar__item">
            <span aria-hidden>🕒</span>
            <div>
              <strong>Mo – Do 08 – 19 Uhr</strong>
              <span>Fr bis 14 Uhr</span>
            </div>
          </div>
          <div className="infobar__item">
            <span aria-hidden>📞</span>
            <div>
              <strong>
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </strong>
              <span>Wir sind für Sie da</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--muted">
        <div className="container">
          <div className="section__head center">
            <span className="eyebrow">Unsere Leistungen</span>
            <h2>Behandlung, die zu Ihnen passt</h2>
            <p className="lead">
              Von manueller Therapie über Marnitz und Lymphdrainage bis zur
              wohltuenden Hot-Stone-Massage – wir finden den richtigen Weg für Sie.
            </p>
          </div>
          <div className="grid grid--3">
            {services.slice(0, 6).map((s) => (
              <article className="card" key={s.slug}>
                <div className="card__icon" aria-hidden>
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </article>
            ))}
          </div>
          <div className="center" style={{ marginTop: "2.5rem" }}>
            <Link href="/leistungen" className="btn btn--primary">
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Why us / value prop with photo */}
      <section className="section">
        <div className="container split">
          <div className="split__media">
            <Photo
              src={images.treatment}
              alt="Manuelle Therapie in der Praxis Simone Rammelt"
              icon="🤲"
              ratio="4 / 3"
            />
          </div>
          <div className="split__body">
            <span className="eyebrow">Warum Praxis Rammelt</span>
            <h2>Professionalität, die man spürt</h2>
            <ul className="check-list">
              <li>
                <strong>Wir nehmen uns Zeit.</strong> Keine Fließbandbehandlung –
                sondern echte Zuwendung und ein offenes Ohr.
              </li>
              <li>
                <strong>Nachhaltig &amp; wirksam.</strong> Behandlungen, die Ihre
                Beweglichkeit und Kraft spürbar zurückbringen.
              </li>
              <li>
                <strong>Herzliches Team.</strong> Bianca, Tina, Dorrit, Dana und Frau
                Rammelt – gute Laune inklusive.
              </li>
              <li>
                <strong>Unkomplizierte Termine.</strong> Flexibel, kurzfristig und auf
                Wunsch als Hausbesuch.
              </li>
            </ul>
            <Link href="/ueber-uns" className="btn btn--ghost">
              Lernen Sie uns kennen
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section section--teal">
        <div className="container">
          <div className="section__head center">
            <span className="eyebrow">So einfach geht's</span>
            <h2>In drei Schritten zu Ihrem Termin</h2>
          </div>
          <div className="grid grid--3 steps">
            <div className="step">
              <span className="step__num">1</span>
              <h3>Anrufen oder schreiben</h3>
              <p>Melden Sie sich telefonisch oder über unser Formular – wir sind schnell erreichbar.</p>
            </div>
            <div className="step">
              <span className="step__num">2</span>
              <h3>Termin erhalten</h3>
              <p>Wir finden gemeinsam einen passenden, oft kurzfristigen Termin für Sie.</p>
            </div>
            <div className="step">
              <span className="step__num">3</span>
              <h3>Gesund werden</h3>
              <p>Sie starten Ihre Behandlung – einfühlsam, professionell und wirksam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section__head center">
            <span className="eyebrow">Das sagen unsere Patient:innen</span>
            <h2>
              {site.rating.toFixed(1)} von 5 Sternen bei {site.reviewCount} Bewertungen
            </h2>
            <div className="center-stars">
              <Stars rating={site.rating} />
            </div>
          </div>
          <div className="grid grid--3">
            {testimonials.map((t, i) => (
              <figure className="quote-card" key={i}>
                <div className="quote-card__mark" aria-hidden>
                  &ldquo;
                </div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.author}</strong>
                  <span>{t.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring banner */}
      <section className="section">
        <div className="container">
          <div className="hiring-banner">
            <div className="hiring-banner__body">
              <span className="eyebrow eyebrow--light">Wir stellen ein 💛</span>
              <h2>Werde Teil unseres Teams</h2>
              <p>
                Du bist Physiotherapeut:in und suchst ein Team, in dem Wertschätzung,
                gute Laune und Zeit für Patient:innen keine Floskeln sind? Dann
                sollten wir uns kennenlernen.
              </p>
            </div>
            <div className="hiring-banner__cta">
              <Link href="/karriere" className="btn btn--primary">
                Zu den Vorteilen &amp; zur Bewerbung
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Bereit für den ersten Schritt?</h2>
            <p className="lead" style={{ margin: "0 auto 1.5rem", color: "rgba(255,255,255,0.85)" }}>
              Vereinbaren Sie jetzt Ihren Termin – wir freuen uns auf Sie.
            </p>
            <div className="hero__actions" style={{ justifyContent: "center" }}>
              <Link href="/kontakt" className="btn btn--primary">
                Termin buchen
              </Link>
              <a href={`tel:${site.phoneHref}`} className="btn btn--ghost btn--ghost-light">
                📞 {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
