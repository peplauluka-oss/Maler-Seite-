"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function ApplicationForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Ohne Backend: Versand wird simuliert. Für den Produktivbetrieb eine
    // API-Route oder einen E-Mail-Dienst anbinden.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success">
        <h3>Schön, dass du dich meldest! 💛</h3>
        <p>
          Deine Nachricht ist bei uns eingegangen. Wir melden uns persönlich bei dir
          – ganz unkompliziert. Wir freuen uns darauf, dich kennenzulernen!
        </p>
        <button className="btn btn--ghost" onClick={() => setSent(false)}>
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="ap-name">Name *</label>
        <input id="ap-name" name="name" type="text" required placeholder="Dein Name" />
      </div>

      <div className="two-col">
        <div className="field">
          <label htmlFor="ap-email">E-Mail *</label>
          <input id="ap-email" name="email" type="email" required placeholder="du@beispiel.de" />
        </div>
        <div className="field">
          <label htmlFor="ap-phone">Telefon</label>
          <input id="ap-phone" name="phone" type="tel" placeholder="Für einen Rückruf" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="ap-availability">Ich suche</label>
        <select id="ap-availability" name="availability" defaultValue="">
          <option value="" disabled>
            Bitte auswählen
          </option>
          <option value="vollzeit">Vollzeit</option>
          <option value="teilzeit">Teilzeit</option>
          <option value="minijob">Minijob / auf Stundenbasis</option>
          <option value="ausbildung">Berufseinstieg / Wiedereinstieg</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="ap-message">Deine Nachricht</label>
        <textarea
          id="ap-message"
          name="message"
          placeholder="Erzähl uns kurz von dir – Qualifikationen, Wünsche, ab wann du kannst. Ein formeller Lebenslauf muss noch nicht sein."
        />
      </div>

      <button type="submit" className="btn btn--primary">
        Unverbindlich bewerben
      </button>
      <p className="form-note">
        Lieber direkt? Ruf uns an unter{" "}
        <a href={`tel:${site.phoneHref}`}>{site.phone}</a> oder schreib an{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Auch eine
        Initiativbewerbung ist jederzeit willkommen.
      </p>
    </form>
  );
}
