# Entscheidungen – Relaunch Malermeister Heußer

Dieses Dokument hält die wichtigsten Umsetzungsentscheidungen fest (im Sinne von
Conversion & SEO), inklusive bewusster Abweichungen vom ursprünglichen Briefing.

## Tech-Stack

| Thema | Entscheidung | Begründung |
| --- | --- | --- |
| **Framework** | **Next.js 14 App Router mit SSG** (statt Astro) | Das Repository brachte bereits eine saubere Next-14-Basis mit React-Islands-fähigem Setup, `output: export`, R3F, Framer Motion und Lenis mit. Das Briefing erlaubt Next.js 14 App Router mit SSG ausdrücklich als Alternative. Kein Neuaufbau der Toolchain → mehr Zeit für Inhalte, SEO und Design. Alle Seiten werden statisch generiert (32 Routen, siehe Build-Log). |
| **Styling** | **Custom CSS Design-Tokens** (statt Tailwind) | Das bestehende Projekt nutzt ein durchdachtes, tokenbasiertes CSS-System. Ein zusätzliches Tailwind-Setup wäre redundant, würde CSS-Gewicht/Build-Komplexität erhöhen und die vorhandene Token-Architektur duplizieren. Das Ergebnis ist bewusst „design-system-first" (siehe `app/globals.css`) und wirkt dadurch weniger nach Template. |
| **3D** | **React Three Fiber + drei**, lazy als Island | Genau ein 3D-Element im Hero (`components/PaintScene.tsx`): eine langsam rotierende, weich verformte „Pigment-Welle" in Kupfer/Amber mit schwebenden Partikeln. Wird erst nach dem First Paint clientseitig geladen (`dynamic`, `ssr:false`) und liegt **nicht** im First-Load-Bundle. Fällt bei WebGL-Fehlern und `prefers-reduced-motion` sauber weg (CSS-Verlauf als Fallback). |
| **Swipe/Touch** | **Native Scroll-Snap + Pointer-Events** (statt Embla/Swiper) | Testimonials nutzen natives `scroll-snap` mit Touch, Pfeil- und Tastaturbedienung; der Vorher/Nachher-Slider nutzt Pointer-/Touch-Events. Ergebnis: null zusätzliche JS-Abhängigkeiten, bessere Core Web Vitals, volle Barrierefreiheit. |
| **Fonts** | **`next/font/google` (self-hosted, `display: swap`)** | Next lädt Sora (Display) & Inter (Body) zur Build-Zeit herunter und hostet sie selbst. Im Browser gibt es **keinen** Request an Google – DSGVO-konform und ohne Render-Blocking. Verifiziert: kein `fonts.googleapis.com` im ausgelieferten HTML. |
| **Formular** | **Client-only mit WhatsApp-/Mail-Weiterleitung** | Mehrstufiges Angebotsformular (Leistung → Umfang → Kontakt) mit Fortschrittsanzeige, Client-Validierung, Honeypot und Success-State. Ohne Backend statisch hostbar; die fertige Anfrage wird per WhatsApp (vorbefüllt) übergeben. **TODO:** an ein echtes Formular-Backend anbinden (siehe unten). |

## Design

- **Look:** Dark-Mode-Basis (tiefes Anthrazit `#0b0c10`) mit warmem Kupfer/Amber-Akzent
  (`#e0a86a`) und kühlem Stahlblau als Sekundärton für Tiefe. Glassmorphism-Panels,
  feine Gradients, große Display-Typografie, viel Weißraum.
- **Problemorientiertes Storytelling:** Jede Kern-Sektion folgt dem Muster
  **Problem → Lösung → Beweis (Review) → CTA** (siehe Startseite `ProblemBlock` und
  die Leistungsseiten).
- **Motion:** Scroll-Reveals (`Reveal`), dezenter Parallax/Float, 3D-Tilt-Cards bei den
  Leistungen. `prefers-reduced-motion` wird global respektiert.

## SEO / Local SEO

- **Seitenarchitektur:** Startseite + 6 Leistungs-Landingpages (`/leistungen/[slug]`)
  + 12 Bezirks-Landingpages (`/maler/[bezirk]`) mit **unique lokalem Content**
  (Architektur, typische Gebäudetypen, Landmarks) + Über uns, Gewerbekunden, Kontakt,
  Impressum, Datenschutz.
- **Schema.org (JSON-LD):** `HousePainter` (LocalBusiness) mit `AggregateRating`
  (4,87 / 74), `OpeningHoursSpecification`, `GeoCoordinates`; pro Leistungsseite
  `Service` + `FAQPage`; auf allen Unterseiten `BreadcrumbList`. Verifiziert im Build.
- **NAP-Konsistenz:** Name/Adresse/Telefon zentral in `lib/site.ts`, identisch im
  Footer jeder Seite und im JSON-LD.
- **Meta:** Pro Seite unique Title (50–60 Zeichen, `absolute` gesetzt, damit kein
  doppelter Marken-Suffix entsteht) und Meta-Description (~150–160 Zeichen mit CTA);
  OpenGraph + Twitter Cards; Canonicals; `sitemap.xml` & `robots.txt` generiert.
- **Bild-SEO:** sprechende Dateinamen (`fassadenanstrich-berlin-altbau.avif`) und
  Alt-Texte mit Keyword+Ort. Die `Photo`-Komponente zeigt bis zum Vorliegen echter
  Fotos einen markigen Verlauf mit Icon (jeder Zustand wirkt intentional).
- **Interne Verlinkung:** Leistungsseiten verlinken auf Bezirke und umgekehrt;
  Bezirksseiten verlinken relevante Leistungen und Nachbarbezirke.

## Content

- Alle Texte final auf Deutsch, verkaufsstark und problemorientiert – **keine
  Lorem-Ipsum-Platzhalter**. Business-Daten, USPs und Rezensionen aus dem Briefing
  (sinngemäß aus den echten Google-Bewertungen) übernommen.

---

## Lighthouse-Check-Plan (vor Go-Live durchführen)

1. **Build & lokal prüfen:** `npm run build && npm start`, dann in Chrome DevTools
   → Lighthouse → *Mobile* laufen lassen (Performance, SEO, Accessibility, Best Practices).
2. **Zielwerte:** Performance ≥ 90, SEO = 100, Accessibility ≥ 95. LCP < 2,0 s,
   CLS < 0,05, INP < 200 ms.
3. **Nach Einpflegen echter Fotos:** Bilder als AVIF/WebP exportieren, korrekte
   `width`/`height` bzw. `aspect-ratio` (bereits via `Photo ratio`), Hero-Bild ggf.
   `priority`/preload. LCP erneut messen.
4. **Feld-Daten:** Nach Deployment CrUX / PageSpeed Insights beobachten (INP real).
5. **Rich Results:** JSON-LD mit dem [Google Rich Results Test](https://search.google.com/test/rich-results)
   und [Schema Validator](https://validator.schema.org/) prüfen.
6. **Search Console:** Property anlegen, `sitemap.xml` einreichen, Bezirks-/Leistungs-URLs indexieren.

---

## TODO – Vom Betrieb zu liefern / vor Go-Live zu ergänzen

### Rechtsverbindliche Daten (kritisch)
- [ ] **Impressum** vervollständigen: exakter Inhaber-/Firmenname, ladungsfähige
      Anschrift der Hauptgeschäftsstelle, Handwerkskammer, Betriebsnummer/Handwerksrolle,
      USt-IdNr., redaktionell Verantwortlicher. (`app/impressum/page.tsx`, alle `TODO`)
- [ ] **Datenschutzerklärung** rechtlich prüfen und Hoster/AV-Vertrag ergänzen.
      (`app/datenschutz/page.tsx`)
- [ ] **Adresse & Geo-Koordinaten** in `lib/site.ts` verifizieren (Straße, PLZ, Lat/Lng)
      – muss 1:1 zum Google-Business-Profil passen (NAP-Konsistenz).

### Inhalte / Assets
- [ ] **Echte Projektfotos** als AVIF/WebP einpflegen (Dateinamen sind SEO-optimiert
      bereits in `lib/site.ts` vorgegeben, u. a. `fassadenanstrich-berlin-altbau.avif`,
      `wohnung-streichen-berlin-innenanstrich.avif`, sowie Vorher/Nachher-Paare
      `vorher-*.avif` / `nachher-*.avif`). Ablage in `public/images/`.
- [ ] **OG-Bild als PNG/JPG** (1200×630) exportieren – aktuell `public/og.svg` als
      Vorlage (manche Crawler rendern kein SVG). Danach in `app/layout.tsx` referenzieren.
- [ ] **E-Mail-Adresse** bestätigen (`info@maler-heusser.de` angenommen).
- [ ] Optional: echte Kundennamen/Freigaben für Testimonials, weitere Google-Reviews.

### Technik
- [ ] **Formular-Backend** anbinden (z. B. Formspree, Netlify Forms oder eigene
      API-Route), damit Anfragen auch per E-Mail eingehen (aktuell WhatsApp-Weiterleitung).
      (`components/QuoteForm.tsx`)
- [ ] Domain `www.maler-heusser.de` in `lib/site.ts` (`domain`) bestätigen; sie steuert
      `metadataBase`, Canonicals, Sitemap & JSON-LD.
- [ ] Google Business Profil verknüpfen (im JSON-LD `sameAs` ergänzen) und ggf.
      Bewertungs-Widget einbinden.
