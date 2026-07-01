# Physio-Praxis Rammelt – Website

Moderne, conversion-orientierte Website für die **Praxis für Physiotherapie
Simone Rammelt** in Berlin Prenzlauer Berg. Gebaut mit
[Next.js](https://nextjs.org/) (App Router) und TypeScript.

Vorbild/Referenz: <https://www.physio-praxis-rammelt.de/>

## Seiten

- 🏠 **Start** (`/`) – Hero mit Bewertung, Vertrauenssignale, Leistungen,
  „So einfach geht's&ldquo;, echte Patientenstimmen, Recruiting-Banner und CTA
- 💆 **Leistungen** (`/leistungen`) – alle Therapien (Manuelle Therapie,
  Marnitz, Lymphdrainage, Hot-Stone, Dorn, Brügger, Bobath, Wärme/Elektro,
  Hausbesuche …)
- 👥 **Über uns** (`/ueber-uns`) – Philosophie und Team (Simone Rammelt,
  Bianca, Tina, Dorrit, Dana)
- 💛 **Karriere** (`/karriere`) – freundliche, überzeugende Landingpage für
  die Personalsuche „Physiotherapeut:in (m/w/d)&ldquo; mit Vorteilen,
  Team-Einblick und unkompliziertem Bewerbungsformular
- 📅 **Kontakt & Termin** (`/kontakt`) – echte Kontaktdaten, Öffnungszeiten,
  Google-Maps-Anfahrt und Terminanfrage-Formular

## Merkmale

- Konversionsfokus: klare CTAs, Telefonnummer überall, Vertrauenssignale
  (4,3 ★ · 43 Bewertungen), kurze Wege zur Terminbuchung
- Warmes, einladendes Design (beruhigendes Grün + herzliches Korall-Akzent)
- Vollständig responsive inkl. mobiler Navigation
- Echte Inhalte: Adresse, Öffnungszeiten, Leistungen und Original-Rezensionen
- Barrierefreundliche Grundstruktur (semantisches HTML, `aria`-Labels,
  Sternebewertung als beschriftetes SVG)

## Projektstruktur

```
app/
  layout.tsx           # Grundgerüst mit Header & Footer + SEO-Metadaten
  page.tsx             # Startseite
  globals.css          # Globales Design-System
  leistungen/          # Leistungen
  ueber-uns/           # Über uns / Team
  karriere/            # Recruiting-Landingpage
  kontakt/             # Kontakt, Anfahrt & Terminformular
components/
  Header.tsx           # Navigation (mit mobilem Menü)
  Footer.tsx           # Fußzeile
  Photo.tsx            # Bild mit sanftem Marken-Fallback
  Stars.tsx            # Sternebewertung (SVG)
  BookingForm.tsx      # Terminanfrage
  ApplicationForm.tsx  # Bewerbungsformular (Karriere)
lib/
  site.ts              # ZENTRALE Inhalte: Praxisdaten, Leistungen, Team,
                       # Rezensionen, Bild-URLs und Stellenangebot
```

## Entwicklung

Voraussetzung: Node.js 18.17 oder neuer.

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Entwicklungsserver auf http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktionsserver
```

## Inhalte pflegen

Alle Texte, Kontaktdaten, Leistungen, Teammitglieder, Rezensionen und das
Stellenangebot liegen zentral in [`lib/site.ts`](lib/site.ts) – hier lässt sich
fast alles ohne Eingriff in die einzelnen Seiten ändern.

### Eigene Fotos einbinden

Die Bild-URLs stehen gebündelt im Objekt `images` in
[`lib/site.ts`](lib/site.ts). Aktuell werden Platzhalter-Fotos verwendet.
So hinterlegst du die echten Praxisfotos:

1. Fotos unter `public/images/` ablegen (z. B. `public/images/hero.jpg`).
2. In `lib/site.ts` die Pfade eintragen, z. B. `hero: "/images/hero.jpg"`.

Die `Photo`-Komponente zeigt automatisch einen dezenten Marken-Verlauf mit
Icon, falls ein Bild einmal nicht geladen werden kann – die Seite wirkt also
nie „kaputt".

> **Hinweise für den Produktivbetrieb**
> - Termin- und Bewerbungsformular simulieren aktuell den Versand. Für den
>   Live-Betrieb eine API-Route oder einen E-Mail-/Formulardienst anbinden.
> - Ein rechtssicheres **Impressum** und eine **Datenschutzerklärung**
>   ergänzen (Pflicht in Deutschland).
> - Verwendete Fotos vor Veröffentlichung auf Nutzungsrechte prüfen.
