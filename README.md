# Malermeister Heußer – Website (Maler Berlin)

Hochwertige, conversion- und SEO-optimierte Premium-Website für den Berliner
**Malermeister Heußer** – Meisterbetrieb für Fassade, Altbau, Wohnraum und
Gewerbe. Gebaut mit [Next.js 14](https://nextjs.org/) (App Router, statisch
generiert) und TypeScript.

Referenz/Content-Quelle: <https://maler-heusser.de/>

> Design- und Umsetzungsentscheidungen (inkl. Abweichungen vom Briefing),
> Lighthouse-Check-Plan und die offene **TODO-Liste für den Betrieb** stehen in
> **[`DECISIONS.md`](DECISIONS.md)**.

## Seiten (32 statisch generierte Routen)

- 🏠 **Start** (`/`) – 3D-Hero, Trust-Zeile (4,87 ★ · 74 Bewertungen), Leistungen,
  Problem→Lösung→Beweis-Blöcke, Farrow & Ball, Prozess, Vorher/Nachher, swipebare
  Testimonials, Bezirke, FAQ, mehrstufiges Angebotsformular
- 🎨 **Leistungen** (`/leistungen`) + 6 Leistungs-Landingpages
  (`/leistungen/[slug]`): Fassadenanstrich, Innenraumgestaltung, Lackierarbeiten,
  Tapezierarbeiten, Altbausanierung, Büro & Gewerbe
- 📍 **Bezirke** (`/maler`) + 12 Bezirks-Landingpages (`/maler/[bezirk]`) mit
  unique lokalem Content: Mitte, Prenzlauer Berg, Pankow, Charlottenburg,
  Friedrichshain, Kreuzberg, Köpenick, Niederschönhausen, Lichtenberg, Spandau,
  Steglitz-Zehlendorf, Tempelhof-Schöneberg
- 🏢 **Gewerbekunden** (`/gewerbekunden`), 👋 **Über uns** (`/ueber-uns`),
  ✉️ **Kontakt** (`/kontakt`), **Impressum**, **Datenschutz**

## Merkmale

- **Conversion:** Hero-Doppel-CTA, Sticky-Mobile-Bar (Anrufen · WhatsApp · Angebot),
  vorbefüllter WhatsApp-CTA, mehrstufiges Angebotsformular mit Fortschritt & Honeypot,
  Prozess-Sektion, Farrow-&-Ball-Differenzierer, swipebare Google-Testimonials,
  Drag-/Swipe-Vorher-Nachher-Slider
- **Design:** futuristisch, edel, dark. Anthrazit + Kupfer/Amber-Akzent, Glassmorphism,
  große Display-Typografie (Sora/Inter, self-hosted), dezente 3D-Elemente
- **3D:** React Three Fiber Pigment-Welle im Hero – lazy als Island, mit WebGL- und
  Reduced-Motion-Fallback, **nicht** im First-Load-Bundle
- **Local SEO:** JSON-LD (`HousePainter`, `AggregateRating`, `Service`, `FAQPage`,
  `BreadcrumbList`), NAP-Konsistenz, unique Titles/Descriptions, `sitemap.xml`,
  `robots.txt`, OpenGraph/Twitter, saubere Heading-Hierarchie (eine H1/Seite),
  interne Verlinkung Leistungen ↔ Bezirke
- **Performance & A11y:** statisches HTML, self-hosted Fonts (`font-display: swap`,
  kein Google-CDN), native Swipe-Slider ohne Extra-Libraries, `prefers-reduced-motion`,
  aria-Labels, Tastaturbedienung

## Projektstruktur

```
app/
  layout.tsx              # Grundgerüst, self-hosted Fonts, globale Metadaten, StickyBar
  page.tsx                # Startseite (alle Conversion-Sektionen)
  globals.css             # Premium Design-System (Tokens, Komponenten, Responsive)
  leistungen/             # Übersicht + [slug] Detail-Template (Service + FAQ Schema)
  maler/                  # Bezirks-Übersicht + [bezirk] Template (unique local content)
  gewerbekunden/          # B2B-Landingpage
  ueber-uns/ kontakt/     # Über uns, Kontakt + Angebotsformular
  impressum/ datenschutz/ # Rechtstexte (mit TODO-Platzhaltern)
  sitemap.ts robots.ts    # Metadata-Routen (statisch generiert)
  icon.svg                # Favicon
components/
  Header, Footer, StickyBar        # Layout (Footer trägt NAP + LocalBusiness-JSON-LD)
  PaintHero, PaintScene            # 3D-Hero (lazy Island)
  TiltCard                         # 3D-Tilt-Leistungskarten
  TestimonialSlider                # swipebare Google-Bewertungen
  BeforeAfterSlider                # Vorher/Nachher (Drag/Touch/Keyboard)
  FaqAccordion, QuoteForm          # FAQ + mehrstufiges Angebotsformular
  JsonLd, Breadcrumbs, Stars       # SEO- & UI-Helfer
  Photo, Reveal, Motion, ...       # Bild-Fallback & Scroll-Animationen
lib/
  site.ts                 # ZENTRALE Inhalte: Firmendaten (NAP), Leistungen,
                          #  Bezirke, Testimonials, FAQ, Prozess, Galerie
  asset.ts                # Basepath-fähige Asset-URLs
```

## Entwicklung

Voraussetzung: Node.js 18.17 oder neuer.

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Entwicklungsserver auf http://localhost:3000
npm run build    # Produktions-Build (statische Generierung aller Seiten)
npm run start    # Produktionsserver
```

## Inhalte pflegen

Nahezu alle Inhalte – Firmendaten, Leistungen, Bezirke, Testimonials, FAQ, Prozess –
liegen zentral in [`lib/site.ts`](lib/site.ts). Änderungen dort wirken automatisch
auf alle Seiten inkl. Footer, JSON-LD und Sitemap.

### Eigene Fotos einbinden

Die SEO-optimierten Bild-Dateinamen sind in `lib/site.ts` vorgegeben (z. B.
`fassadenanstrich-berlin-altbau.avif`). Fotos einfach unter diesen Namen in
`public/images/` ablegen. Bis dahin zeigt die `Photo`-Komponente einen dezenten
Marken-Verlauf mit Icon – die Seite wirkt in jedem Zustand intentional.

Die vollständige Startliste offener Punkte steht in **[`DECISIONS.md`](DECISIONS.md)**.
