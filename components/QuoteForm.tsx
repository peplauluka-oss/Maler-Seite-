"use client";

import { useState } from "react";
import { services, whatsappLink } from "@/lib/site";
import Icon, { serviceIconName } from "@/components/Icon";

const scopeOptions = [
  { v: "einzelraum", label: "Einzelner Raum" },
  { v: "wohnung", label: "Ganze Wohnung" },
  { v: "haus-fassade", label: "Haus / Fassade" },
  { v: "gewerbe", label: "Büro / Gewerbe" },
];

type Data = {
  service: string;
  scope: string;
  name: string;
  contact: string;
  message: string;
};

const empty: Data = { service: "", scope: "", name: "", contact: "", message: "" };

/**
 * Mehrstufiges Angebots-Formular (Leistung → Umfang → Kontakt) mit
 * Fortschrittsanzeige, Client-Validierung, Honeypot-Spamschutz und
 * klarem Success-State. Ohne Backend: reicht die Anfrage an WhatsApp/
 * E-Mail weiter (statisch hostbar). TODO: an echtes Formular-Backend
 * (z. B. Formspree/Netlify Forms/eigenes API) anbinden.
 */
export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [honey, setHoney] = useState("");

  const set = (k: keyof Data, v: string) => setData((d) => ({ ...d, [k]: v }));

  const validateStep = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 0 && !data.service) e.service = "Bitte wählen Sie eine Leistung.";
    if (step === 1 && !data.scope) e.scope = "Bitte wählen Sie den Umfang.";
    if (step === 2) {
      if (data.name.trim().length < 2) e.name = "Bitte geben Sie Ihren Namen an.";
      const c = data.contact.trim();
      const okMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);
      const okPhone = /^[+0-9][0-9\s/()-]{6,}$/.test(c);
      if (!okMail && !okPhone) e.contact = "Bitte Telefonnummer oder E-Mail angeben.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validateStep()) setStep((s) => Math.min(2, s + 1)); };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honey) return; // Bot erkannt – still verwerfen
    if (!validateStep()) return;
    setSent(true);
  };

  const serviceLabel = services.find((s) => s.slug === data.service)?.title ?? data.service;
  const scopeLabel = scopeOptions.find((s) => s.v === data.scope)?.label ?? data.scope;

  if (sent) {
    const prefill = `Leistung: ${serviceLabel}. Umfang: ${scopeLabel}. Name: ${data.name}. ${data.message}`.trim();
    return (
      <div className="form-card glass">
        <div className="form-success">
          <div className="form-success__icon" aria-hidden><Icon name="check" size={34} /></div>
          <h3>Anfrage bereit – vielen Dank, {data.name.split(" ")[0]}!</h3>
          <p>
            Wir melden uns innerhalb von 24 Stunden mit einer ersten Einschätzung.
            Am schnellsten geht es direkt über WhatsApp:
          </p>
          <div style={{ display: "flex", gap: "0.7rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.2rem" }}>
            <a href={whatsappLink(prefill)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
              Per WhatsApp senden
            </a>
            <button className="btn btn--ghost" onClick={() => { setSent(false); setStep(0); setData(empty); }}>
              Neue Anfrage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card glass" onSubmit={submit} noValidate>
      <div className="progress" aria-hidden>
        {[0, 1, 2].map((i) => (
          <div key={i} className={`progress__step ${i < step ? "progress__step--done" : i === step ? "progress__step--active" : ""}`}>
            <b />
          </div>
        ))}
      </div>
      <p className="progress__label">Schritt {step + 1} von 3</p>

      {step === 0 && (
        <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
          <legend style={{ marginBottom: "0.4rem", fontFamily: "var(--display)", fontWeight: 600 }}>
            Worum geht es?
          </legend>
          <p style={{ fontSize: "0.9rem", marginBottom: "1.1rem" }}>Wählen Sie Ihre gewünschte Leistung.</p>
          <div className="opts">
            {services.map((s) => (
              <div className="opt" key={s.slug}>
                <input
                  type="radio" name="service" id={`svc-${s.slug}`} value={s.slug}
                  checked={data.service === s.slug} onChange={() => set("service", s.slug)}
                />
                <label htmlFor={`svc-${s.slug}`}>
                  <span aria-hidden style={{ color: "var(--copper-bright)", display: "inline-flex" }}><Icon name={serviceIconName(s.slug)} size={20} /></span> {s.title.split(" & ")[0].split(" (")[0]}
                </label>
              </div>
            ))}
          </div>
          {errors.service && <p className="field__err">{errors.service}</p>}
        </fieldset>
      )}

      {step === 1 && (
        <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
          <legend style={{ marginBottom: "0.4rem", fontFamily: "var(--display)", fontWeight: 600 }}>
            Welcher Umfang?
          </legend>
          <p style={{ fontSize: "0.9rem", marginBottom: "1.1rem" }}>So können wir Ihre Anfrage besser einschätzen.</p>
          <div className="opts">
            {scopeOptions.map((o) => (
              <div className="opt" key={o.v}>
                <input
                  type="radio" name="scope" id={`sc-${o.v}`} value={o.v}
                  checked={data.scope === o.v} onChange={() => set("scope", o.v)}
                />
                <label htmlFor={`sc-${o.v}`}>{o.label}</label>
              </div>
            ))}
          </div>
          {errors.scope && <p className="field__err">{errors.scope}</p>}
        </fieldset>
      )}

      {step === 2 && (
        <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
          <legend style={{ marginBottom: "0.4rem", fontFamily: "var(--display)", fontWeight: 600 }}>
            Wie erreichen wir Sie?
          </legend>
          <p style={{ fontSize: "0.9rem", marginBottom: "1.1rem" }}>
            {serviceLabel && `${serviceLabel} · ${scopeLabel}`}
          </p>
          <div className="field">
            <label htmlFor="q-name">Name</label>
            <input id="q-name" type="text" autoComplete="name" value={data.name}
              onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} />
            {errors.name && <p className="field__err">{errors.name}</p>}
          </div>
          <div className="field">
            <label htmlFor="q-contact">Telefon oder E-Mail</label>
            <input id="q-contact" type="text" autoComplete="tel" value={data.contact}
              onChange={(e) => set("contact", e.target.value)} aria-invalid={!!errors.contact} />
            {errors.contact && <p className="field__err">{errors.contact}</p>}
          </div>
          <div className="field">
            <label htmlFor="q-msg">Ihre Nachricht (optional)</label>
            <textarea id="q-msg" rows={3} value={data.message}
              onChange={(e) => set("message", e.target.value)} placeholder="z. B. Adresse, gewünschter Zeitraum, Fläche …" />
          </div>
          {/* Honeypot – für Menschen unsichtbar */}
          <div className="hp" aria-hidden>
            <label htmlFor="company">Firma (bitte leer lassen)</label>
            <input id="company" tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
          </div>
        </fieldset>
      )}

      <div className="form-nav">
        {step > 0 ? (
          <button type="button" className="btn btn--ghost" onClick={back}>Zurück</button>
        ) : <span />}
        {step < 2 ? (
          <button type="button" className="btn btn--primary" onClick={next}>Weiter</button>
        ) : (
          <button type="submit" className="btn btn--primary">Angebot anfordern</button>
        )}
      </div>
    </form>
  );
}
