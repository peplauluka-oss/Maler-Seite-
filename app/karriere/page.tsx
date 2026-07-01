import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import ApplicationForm from "@/components/ApplicationForm";
import { career, site, team, images, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Karriere · Physiotherapeut:in (m/w/d) gesucht",
  description:
    "Wir suchen Physiotherapeut:innen (m/w/d) in Voll- oder Teilzeit für unsere Praxis in Prenzlauer Berg. Herzliches Team, faire Vergütung, Fortbildungen, keine Wochenenden. Jetzt unverbindlich bewerben.",
};

export default function CareerPage() {
  return (
    <>
      {/* Hero */}
      <section className="career-hero">
        <div className="container career-hero__grid">
          <div>
            <span className="badge badge--light">Wir stellen ein · {career.employment}</span>
            <h1>
              {career.headline} <span aria-hidden>💛</span>
            </h1>
            <p className="lead">{career.intro}</p>
            <div className="hero__actions">
              <a href="#bewerben" className="btn btn--primary">
                Jetzt unverbindlich bewerben
              </a>
              <a href={`tel:${site.phoneHref}`} className="btn btn--ghost btn--ghost-light">
                📞 {site.phone}
              </a>
            </div>
            <p className="career-hero__note">
              Kein perfekter Lebenslauf nötig. Ein „Hallo&ldquo; genügt – den Rest
              besprechen wir persönlich.
            </p>
          </div>
          <div className="career-hero__media">
            <Photo
              src={images.career}
              alt="Physiotherapeut:in bei der Arbeit"
              icon="🤝"
              ratio="4 / 5"
            />
          </div>
        </div>
      </section>

      {/* Position */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">Deine Stelle</span>
          <h2>{career.role}</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            Für unsere Praxis in {site.address.district} suchen wir Verstärkung –
            {" "}{career.employment.toLowerCase()}. Ob erfahren oder frisch aus der
            Ausbildung: Bei uns bist du willkommen.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section--muted">
        <div className="container">
          <div className="section__head center">
            <span className="eyebrow">Warum du zu uns kommen solltest</span>
            <h2>Das bieten wir dir</h2>
          </div>
          <div className="grid grid--3">
            {career.benefits.map((b) => (
              <article className="card" key={b.title}>
                <div className="card__icon" aria-hidden>
                  {b.icon}
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Culture / team voice */}
      <section className="section">
        <div className="container split">
          <div className="split__media">
            <Photo
              src={images.team}
              alt="Das Team der Praxis Rammelt"
              icon="👥"
              ratio="4 / 3"
            />
          </div>
          <div className="split__body">
            <span className="eyebrow">Unser Team</span>
            <h2>Hier wirst du dich wohlfühlen</h2>
            <p>
              Das Schönste an unserer Praxis? Das Miteinander. Was Patient:innen über
              uns sagen, gilt genauso für den Arbeitsalltag:
            </p>
            <figure className="quote-inline">
              <blockquote>
                „Alle Kolleginnen sind sehr nett und haben sehr gute Laune, von der
                ich mich anstecken lasse.&ldquo;
              </blockquote>
              <figcaption>— aus einer Google-Rezension über unser Team</figcaption>
            </figure>
            <p>
              Bei uns arbeitest du mit {team.slice(1).map((t) => t.name.split(" ")[0]).join(", ")}
              {" "}und Simone zusammen – einem Team, das sich gegenseitig unterstützt
              und den Beruf noch mit Herzblut lebt.
            </p>
          </div>
        </div>
      </section>

      {/* Wishlist */}
      <section className="section section--teal">
        <div className="container split">
          <div className="split__body">
            <span className="eyebrow">Passt das zu dir?</span>
            <h2>Was du mitbringst</h2>
            <ul className="check-list">
              {career.wishlist.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <p style={{ marginTop: "1rem" }}>
              Du erkennst dich nur teilweise wieder? Bewirb dich trotzdem – uns ist der
              Mensch wichtiger als die Checkliste.
            </p>
          </div>
          <div className="split__media">
            <div className="hero__card">
              <h3>Auf einen Blick</h3>
              <ul className="info-list">
                <li><span className="ic">📌</span> {career.role}</li>
                <li><span className="ic">🕒</span> {career.employment}</li>
                <li><span className="ic">📍</span> {site.address.street}, {site.address.city}</li>
                <li><span className="ic">🚉</span> Zentral in Prenzlauer Berg, top Anbindung</li>
                <li><span className="ic">💛</span> Herzliches, eingespieltes Team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="section" id="bewerben">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">Bewirb dich</span>
              <h2>Lass uns kennenlernen</h2>
              <p>
                Wir machen es dir so einfach wie möglich: Schreib uns ein paar Zeilen
                über dich – ganz ohne Bewerbungs-Marathon. Wir melden uns persönlich
                und unkompliziert zurück.
              </p>
              <p>
                Lieber direkt sprechen? {site.owner} und das Team freuen sich über
                deinen Anruf unter{" "}
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>.
              </p>
              <figure className="quote-inline">
                <blockquote>
                  „Professionalität wird hier großgeschrieben.&ldquo;
                </blockquote>
                <figcaption>— {testimonials[0].source}</figcaption>
              </figure>
            </div>
            <div className="hero__card">
              <h3>Deine Bewerbung</h3>
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Wir freuen uns auf dich!</h2>
            <p className="lead" style={{ margin: "0 auto 1.5rem", color: "rgba(255,255,255,0.85)" }}>
              Werde Teil eines Teams, das den Beruf noch liebt. Melde dich – der erste
              Schritt ist ganz leicht.
            </p>
            <div className="hero__actions" style={{ justifyContent: "center" }}>
              <a href="#bewerben" className="btn btn--primary">
                Jetzt bewerben
              </a>
              <Link href="/ueber-uns" className="btn btn--ghost btn--ghost-light">
                Team kennenlernen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
