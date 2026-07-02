// ============================================================
// Malermeister Heußer – Berlin
// Zentrale Datenquelle: Firmendaten, Leistungen, Bezirke,
// Bewertungen, FAQ, Prozess. Alle Seiten beziehen ihre Inhalte
// von hier – so bleiben NAP-Daten und Texte konsistent (Local SEO).
// ============================================================

export const site = {
  name: "Malermeister Heußer",
  legalName: "Malermeister Heußer",
  shortName: "Heußer",
  owner: "Malermeister Heußer",
  tagline: "Meisterhafte Malerarbeiten in Berlin",
  claim: "Berlins Meisterbetrieb für Fassade, Altbau & edle Wohnräume",
  foundedYear: 2001,
  experienceYears: 23,

  // NAP – exakt identisch auf jeder Seite (Google-Business-Profil)
  phone: "030 98 56 15 13",
  phoneHref: "+493098561513",
  mobile: "0173 901 34 24",
  mobileHref: "+491739013424",
  whatsapp: "491739013424",
  whatsappText:
    "Hallo Malermeister Heußer, ich interessiere mich für ein kostenloses Angebot. Mein Anliegen: ",
  email: "info@maler-heusser.de",
  website: "maler-heusser.de",
  domain: "https://www.maler-heusser.de",

  rating: 4.87,
  reviewCount: 74,

  // Hauptadresse (Geschäftsstelle Niederschönhausen) – TODO: exakte Hausnummer/PLZ bestätigen
  address: {
    street: "Dietzgenstraße 42", // TODO: echte Anschrift Geschäftsstelle bestätigen
    zip: "13156",
    city: "Berlin",
    district: "Niederschönhausen",
    country: "DE",
  },
  // Zweite Geschäftsstelle
  branch: {
    street: "Bahnhofstraße 10", // TODO: echte Anschrift Köpenick bestätigen
    zip: "12555",
    city: "Berlin",
    district: "Köpenick",
  },
  geo: { lat: 52.5906, lng: 13.4048 }, // Niederschönhausen (Näherung) – TODO verifizieren

  mapQuery: "Malermeister Heußer, Berlin",

  hours: [
    { day: "Montag – Freitag", time: "07:00 – 18:00 Uhr" },
    { day: "Samstag", time: "Nach Vereinbarung" },
    { day: "Sonntag", time: "Geschlossen" },
    { day: "Notdienst Graffiti", time: "Nach Absprache" },
  ],

  usps: [
    "Meisterbetrieb – geprüfte Qualität",
    "Über 23 Jahre Erfahrung",
    "Farrow & Ball Partner",
    "Festpreis-Garantie ohne Überraschungen",
    "Denkmalgerechte Malerarbeiten",
    "Sauberkeit & Termintreue",
  ],
};

export function whatsappLink(prefill = ""): string {
  const text = encodeURIComponent(site.whatsappText + prefill);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

// ============================================================
// LEISTUNGEN
// ============================================================
export type FaqItem = { q: string; a: string };

export type Service = {
  slug: string;
  title: string; // Menü / Karte
  h1: string; // SEO-H1 der Detailseite
  metaTitle: string;
  metaDescription: string;
  keyword: string; // Hauptkeyword
  icon: string;
  teaser: string; // Kurz auf Startseite/Übersicht
  problem: string; // Kundenproblem
  solution: string; // Unsere Lösung (Absatz)
  bullets: string[]; // Leistungsdetails
  proof: string; // Beweis / Referenz-Satz
  priceHint?: string; // Preis-Orientierung
  image: string; // SEO-Dateiname
  imageAlt: string;
  faq: FaqItem[];
};

export const services: Service[] = [
  {
    slug: "fassadenanstrich",
    title: "Fassadenanstrich & Graffitientfernung",
    h1: "Fassadenanstrich Berlin – Fassade streichen vom Meisterbetrieb",
    metaTitle: "Fassadenanstrich Berlin | Fassade streichen – Malermeister Heußer",
    metaDescription:
      "Fassadenanstrich Berlin vom Meisterbetrieb: witterungsfeste Fassaden, Graffitientfernung & Schutz. Festpreis, saubere Arbeit. Jetzt kostenloses Angebot sichern!",
    keyword: "Fassadenanstrich Berlin",
    icon: "🏢",
    teaser:
      "Witterungsfester Anstrich, professionelle Graffitientfernung und langlebiger Fassadenschutz – damit Ihr Haus wieder repräsentiert.",
    problem:
      "Verwitterte, algige oder mit Graffiti verschmierte Fassaden lassen selbst schöne Gebäude ungepflegt wirken – und feuchte Stellen greifen mit der Zeit die Bausubstanz an.",
    solution:
      "Wir analysieren zuerst den Untergrund, beseitigen Algen, Risse und Altbeschichtungen fachgerecht und tragen ein auf Ihre Fassade abgestimmtes, atmungsaktives und witterungsbeständiges Beschichtungssystem auf. Für einen Anstrich, der jahrelang schützt und gut aussieht – inklusive optionalem Anti-Graffiti-Schutz.",
    bullets: [
      "Fassadenreinigung & Algenentfernung",
      "Riss-Sanierung und Untergrundvorbereitung",
      "Silikat-, Silikonharz- & Mineralfarben",
      "Graffitientfernung & vorbeugende Schutzbeschichtung",
      "Gerüststellung koordiniert aus einer Hand",
      "Farbberatung passend zum Kiez & Denkmalschutz",
    ],
    proof:
      "„Die Fassade unseres Einfamilienhauses sieht aus wie neu – saubere Arbeit, alles termingerecht.“ – Google-Bewertung",
    priceHint:
      "Ein Fassadenanstrich in Berlin kostet je nach Fläche, Zustand und Gerüst meist zwischen 40 und 90 € pro m². Sie erhalten von uns immer einen verbindlichen Festpreis nach Besichtigung.",
    image: "/images/fassadenanstrich-berlin-altbau.avif",
    imageAlt: "Frisch gestrichene Altbaufassade in Berlin vom Malermeister Heußer",
    faq: [
      {
        q: "Wie lange dauert ein Fassadenanstrich?",
        a: "Ein Einfamilienhaus ist – je nach Witterung und Zustand – meist in 1 bis 2 Wochen fertig. Größere Mehrfamilienhäuser planen wir individuell. Den genauen Zeitrahmen nennen wir Ihnen verbindlich bei der Besichtigung.",
      },
      {
        q: "Was kostet ein Fassadenanstrich in Berlin?",
        a: "Die Kosten hängen von Fläche, Fassadenzustand, Farbsystem und Gerüst ab. Als grobe Orientierung liegen sie bei 40–90 € pro m². Nach einer kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis.",
      },
      {
        q: "Entfernen Sie auch Graffiti?",
        a: "Ja. Wir entfernen Graffiti schonend vom jeweiligen Untergrund und bringen auf Wunsch eine transparente Anti-Graffiti-Schutzschicht auf, sodass künftige Schmierereien leichter zu beseitigen sind.",
      },
      {
        q: "Welche Farbe hält am längsten an der Fassade?",
        a: "Für Berliner Altbauten empfehlen wir meist mineralische Silikat- oder Silikonharzfarben – sie sind atmungsaktiv, algenhemmend und extrem witterungsbeständig. Welches System optimal ist, klären wir nach Untergrundprüfung.",
      },
    ],
  },
  {
    slug: "innenraumgestaltung",
    title: "Innenraumgestaltung & Wandanstrich",
    h1: "Wohnung streichen lassen in Berlin – Innenraumgestaltung vom Meister",
    metaTitle: "Wohnung streichen lassen Berlin | Maler Innenanstrich – Heußer",
    metaDescription:
      "Wohnung streichen lassen in Berlin: makellose Wände, edle Farbkonzepte & saubere Ausführung vom Meisterbetrieb. Festpreis & Termintreue. Jetzt Angebot anfordern!",
    keyword: "Wohnung streichen lassen Berlin",
    icon: "🎨",
    teaser:
      "Makellose Wände, harmonische Farbkonzepte und ein Ergebnis, das Ihren Räumen Charakter gibt – sauber und termintreu ausgeführt.",
    problem:
      "Vergilbte Wände, Flecken, Risse oder eine lieblose Raufaser nehmen jedem Raum die Wirkung – und beim Selbermachen werden Ecken, Übergänge und Deckenanschlüsse selten wirklich sauber.",
    solution:
      "Wir bereiten Ihre Wände professionell vor, spachteln, schleifen und grundieren, und setzen Ihr Farbkonzept mit deckenden, wohngesunden Farben präzise um – von der klassischen Weißvariante bis zum stimmungsvollen Farrow-&-Ball-Farbton. Möbel und Böden schützen wir sorgfältig, und wir hinterlassen Ihre Räume besenrein.",
    bullets: [
      "Wände & Decken spachteln, schleifen, streichen",
      "Individuelle Farb- und Raumkonzepte",
      "Wohngesunde, emissionsarme Farben",
      "Farrow & Ball Premium-Farbtöne",
      "Kreativtechniken: Lasuren, Spachteltechnik, Beton-Optik",
      "Staubarm arbeiten & besenreine Übergabe",
    ],
    proof:
      "„Unsere Altbauwohnung wurde mit einem Farrow-&-Ball-Farbkonzept renoviert – das Ergebnis ist einfach edel.“ – Google-Bewertung",
    priceHint:
      "Eine 3-Zimmer-Wohnung zu streichen kostet in Berlin – je nach Zustand, Vorarbeiten und Farbwunsch – meist zwischen 1.500 und 4.000 €. Nach der Besichtigung nennen wir Ihnen einen fairen Festpreis.",
    image: "/images/wohnung-streichen-berlin-innenanstrich.avif",
    imageAlt: "Frisch gestrichener heller Wohnraum in einer Berliner Altbauwohnung",
    faq: [
      {
        q: "Was kostet es, eine 3-Zimmer-Wohnung streichen zu lassen?",
        a: "Für eine typische 3-Zimmer-Wohnung in Berlin liegen die Kosten meist zwischen 1.500 und 4.000 € – abhängig von Fläche, Zustand der Wände, gewünschten Farben und Vorarbeiten wie Spachteln. Sie erhalten von uns immer einen verbindlichen Festpreis.",
      },
      {
        q: "Müssen die Möbel raus, wenn Sie streichen?",
        a: "Nein. In bewohnten Wohnungen rücken wir die Möbel zusammen, decken alles staubdicht ab und schützen Böden. Nur bei einer Komplettrenovierung leerer Räume geht es natürlich noch schneller.",
      },
      {
        q: "Wie lange dauert das Streichen einer Wohnung?",
        a: "Eine 3-Zimmer-Wohnung ist meist in 2 bis 4 Arbeitstagen fertig, inklusive Vorarbeiten und Trockenzeiten. Den genauen Ablauf stimmen wir vorab mit Ihnen ab.",
      },
      {
        q: "Welche Farbe ist für Wohnräume gesund?",
        a: "Wir verwenden emissionsarme, lösemittelfreie Innenfarben – auf Wunsch auch die besonders hochwertigen Farrow-&-Ball-Farben. So bleibt das Raumklima gesund, auch für Allergiker und Kinderzimmer.",
      },
    ],
  },
  {
    slug: "lackierarbeiten",
    title: "Lackierarbeiten & Oberflächenveredelung",
    h1: "Lackierarbeiten Berlin – Türen, Fenster & Holz professionell lackieren",
    metaTitle: "Lackierarbeiten Berlin | Türen & Fenster lackieren – Heußer",
    metaDescription:
      "Lackierarbeiten in Berlin vom Meisterbetrieb: Türen, Fenster, Heizkörper & Holz makellos lackiert. Seidige Oberflächen ohne Läufer. Jetzt Festpreis-Angebot holen!",
    keyword: "Lackierarbeiten Berlin",
    icon: "🪞",
    teaser:
      "Seidenmatte, widerstandsfähige Oberflächen für Türen, Fenster, Heizkörper und Holzbauteile – ohne Läufer, Staubeinschlüsse oder Pinselstriche.",
    problem:
      "Vergilbte Türen, abblätternde Fensterrahmen und zerkratzte Holzoberflächen wirken schnell alt – und ein misslungener Lackanstrich mit Läufern und Staubkörnern macht es oft schlimmer statt besser.",
    solution:
      "Wir bereiten jede Oberfläche gründlich vor – anschleifen, entfetten, grundieren – und lackieren staubarm mit hochwertigen Systemen. Das Ergebnis ist eine gleichmäßige, glatte Oberfläche, die lange schön bleibt und sich edel anfühlt. Auf Wunsch veredeln wir Holz mit Lasuren oder deckenden Lacken.",
    bullets: [
      "Türen, Zargen & Fenster lackieren",
      "Heizkörper- und Rohrlackierung",
      "Holztreppen, Geländer & Möbel aufarbeiten",
      "Deckende Lacke, Lasuren & Öle",
      "Staubarme Verarbeitung für glatte Oberflächen",
      "Aufbereitung statt Austausch – nachhaltig & günstiger",
    ],
    proof:
      "„Termintreu, sauber und wirklich präzise gearbeitet.“ – Google-Bewertung",
    priceHint:
      "Lackierarbeiten rechnen wir je nach Bauteil ab – eine Zimmertür inkl. Zarge liegt oft bei 120–250 €. Sie bekommen vorab einen klaren Festpreis.",
    image: "/images/lackierarbeiten-berlin-tueren-fenster.avif",
    imageAlt: "Frisch lackierte weiße Zimmertür mit seidenmatter Oberfläche in Berlin",
    faq: [
      {
        q: "Was kostet es, eine Tür lackieren zu lassen?",
        a: "Eine Zimmertür inklusive Zarge liegt – je nach Vorzustand und Aufwand – meist bei 120 bis 250 €. Bei mehreren Türen wird es pro Stück günstiger. Den genauen Preis nennen wir nach kurzer Besichtigung.",
      },
      {
        q: "Kann man alte Türen aufarbeiten statt austauschen?",
        a: "In den meisten Fällen ja. Wir schleifen an, füllern aus und lackieren neu – das ist deutlich günstiger und nachhaltiger als ein Austausch und erhält oft den originalen Altbaucharakter.",
      },
      {
        q: "Lackieren Sie auch Heizkörper?",
        a: "Ja. Wir lackieren Heizkörper mit hitzebeständigen Speziallacken, sodass sie nicht vergilben und die Oberfläche dauerhaft glatt bleibt.",
      },
    ],
  },
  {
    slug: "tapezierarbeiten",
    title: "Tapezierarbeiten & Designtapeten",
    h1: "Tapezierer Berlin – Designtapeten & Vliestapeten fachgerecht verlegt",
    metaTitle: "Tapezierer Berlin | Designtapeten & Vliestapeten – Heußer",
    metaDescription:
      "Tapezierer Berlin: Designtapeten, Vlies- & Fototapeten passgenau und fugenlos verlegt. Vom Meisterbetrieb, sauber & termintreu. Jetzt kostenloses Angebot anfordern!",
    keyword: "Tapezierer Berlin",
    icon: "📐",
    teaser:
      "Von der edlen Designtapete bis zur strukturierten Vliestapete – passgenau, fugenlos und mit perfektem Musterversatz verlegt.",
    problem:
      "Eine hochwertige Designtapete kann einen Raum verwandeln – aber sichtbare Nähte, versetzte Muster oder Blasen ruinieren den edlen Eindruck sofort. Und Raufaser, die überall gleich aussieht, wird der Wand oft nicht gerecht.",
    solution:
      "Wir bereiten den Untergrund sauber vor und verlegen Ihre Wunschtapete millimetergenau – mit korrektem Musteranschluss, ohne sichtbare Nähte und ohne Blasen. Ob edle Struktur-, Vlies-, Textil- oder Fototapete: Wir beraten Sie zu Material und Wirkung und setzen es handwerklich perfekt um.",
    bullets: [
      "Design-, Vlies-, Textil- & Fototapeten",
      "Präziser Musterversatz ohne sichtbare Nähte",
      "Untergrundvorbereitung & Altbelag entfernen",
      "Akzentwände & vollflächige Gestaltung",
      "Beratung zu Material, Muster & Wirkung",
      "Raufaser & Glattvlies als robuste Basis",
    ],
    proof:
      "„Absolut sauber gearbeitet, die Designtapete sitzt perfekt.“ – Google-Bewertung",
    priceHint:
      "Tapezierarbeiten liegen – je nach Tapetenart und Untergrund – meist bei 8–20 € pro m² zzgl. Material. Für Designtapeten kalkulieren wir individuell.",
    image: "/images/designtapeten-berlin-tapezierer.avif",
    imageAlt: "Elegante Designtapete an einer Akzentwand in einer Berliner Wohnung",
    faq: [
      {
        q: "Was kostet das Tapezieren pro Quadratmeter?",
        a: "Für das reine Tapezieren rechnen wir – je nach Tapetenart und Vorarbeiten – meist mit 8 bis 20 € pro m² zzgl. Material. Anspruchsvolle Designtapeten mit Musterversatz kalkulieren wir individuell.",
      },
      {
        q: "Muss die alte Tapete vorher runter?",
        a: "In der Regel ja – ein sauberer, tragfähiger Untergrund ist die Voraussetzung für ein makelloses Ergebnis. Das Entfernen des Altbelags und die Vorbereitung übernehmen wir für Sie.",
      },
      {
        q: "Verlegen Sie auch teure Designtapeten?",
        a: "Gerade dafür sind wir da. Hochwertige Tapeten verzeihen keine Fehler – wir verlegen sie mit korrektem Musteranschluss, fugenlos und blasenfrei, damit ihre Wirkung voll zur Geltung kommt.",
      },
    ],
  },
  {
    slug: "altbausanierung",
    title: "Altbausanierung & Stuckrestaurierung",
    h1: "Altbausanierung Berlin – Maler & Stuckrestaurierung vom Meisterbetrieb",
    metaTitle: "Altbausanierung Berlin | Stuckrestaurierung Maler – Heußer",
    metaDescription:
      "Altbausanierung & Stuckrestaurierung in Berlin: denkmalgerechte Malerarbeiten, Stuck aufarbeiten & historische Substanz erhalten. Meisterbetrieb. Jetzt anfragen!",
    keyword: "Altbausanierung Maler Berlin",
    icon: "🏛️",
    teaser:
      "Denkmalgerechte Malerarbeiten, Stuckrestaurierung und der Erhalt historischer Substanz – mit Erfahrung an Berlins schönsten Altbauten.",
    problem:
      "Berliner Altbauten sind kostbar – aber Stuck bröckelt, alte Farbschichten lösen sich und feuchte Wände bedrohen die Substanz. Wer hier mit den falschen Materialien arbeitet, zerstört unwiederbringlich Charakter und Wert.",
    solution:
      "Wir arbeiten mit Respekt vor der historischen Substanz: Stuckprofile werden ergänzt und restauriert, Wände mit diffusionsoffenen, denkmalverträglichen Systemen behandelt und Farbkonzepte historisch stimmig entwickelt. So bewahren wir den Altbaucharme – vom Hackeschen Markt bis in die Spandauer Vorstadt.",
    bullets: [
      "Stuckrestaurierung & Profilergänzung",
      "Denkmalgerechte, diffusionsoffene Anstriche",
      "Historische Farbkonzepte (Kalk, Leim, Silikat)",
      "Feuchte- & Salzschadensanierung an Wänden",
      "Aufarbeitung von Kastenfenstern & Holzelementen",
      "Erfahrung mit denkmalgeschützter Bausubstanz",
    ],
    proof:
      "„Man merkt die Erfahrung mit Altbauten – der Stuck wurde liebevoll wiederhergestellt.“ – Google-Bewertung",
    priceHint:
      "Altbau- und Stuckarbeiten sind individuell – wir besichtigen die Substanz vor Ort und erstellen ein transparentes Angebot Position für Position.",
    image: "/images/altbausanierung-berlin-stuckrestaurierung.avif",
    imageAlt: "Restaurierte Stuckdecke in einem Berliner Altbau nach Sanierung",
    faq: [
      {
        q: "Kann man beschädigten Stuck reparieren?",
        a: "Ja. Fehlende oder beschädigte Stuckprofile ergänzen wir – entweder mit passenden Fertigprofilen oder frei modelliert nach Vorlage. So bleibt der originale Charakter Ihres Altbaus erhalten.",
      },
      {
        q: "Welche Farben sind für den Altbau geeignet?",
        a: "Historische Bausubstanz braucht diffusionsoffene Systeme wie Kalk-, Leim- oder Silikatfarben, damit die Wände atmen können. Welches System passt, klären wir nach Prüfung von Untergrund und Denkmalauflagen.",
      },
      {
        q: "Arbeiten Sie auch bei Denkmalschutz?",
        a: "Ja, wir haben Erfahrung mit denkmalgeschützter Bausubstanz in Mitte, im Scheunenviertel und der Spandauer Vorstadt und stimmen Materialien und Farben mit den Anforderungen des Denkmalschutzes ab.",
      },
    ],
  },
  {
    slug: "buero-gewerbe",
    title: "Büro- & Gewerberäume",
    h1: "Büro streichen in Berlin – Malerarbeiten für Gewerbe ohne Betriebsstillstand",
    metaTitle: "Büro streichen Berlin | Maler für Gewerbe & Büro – Heußer",
    metaDescription:
      "Büro & Gewerbe streichen in Berlin: Malerarbeiten abends & am Wochenende, ohne Betriebsunterbrechung. Termintreu & sauber vom Meisterbetrieb. Jetzt Angebot holen!",
    keyword: "Büro streichen Berlin",
    icon: "🏬",
    teaser:
      "Malerarbeiten für Büros, Praxen, Läden und Gewerbeflächen – planbar, termintreu und auf Wunsch außerhalb Ihrer Geschäftszeiten.",
    problem:
      "Renovierung im laufenden Betrieb heißt oft: Staub, Lärm und Ausfall genau dann, wenn Kunden und Mitarbeitende da sind. Jeder Tag Stillstand kostet bares Geld.",
    solution:
      "Wir planen Gewerbeprojekte so, dass Ihr Betrieb weiterläuft: Wir arbeiten abschnittsweise, abends oder am Wochenende, staubarm und mit klaren Zeitfenstern. Vom einzelnen Besprechungsraum bis zur kompletten Bürofläche – termintreu und mit einer Abrechnung, die auch das Finanzamt gerne sieht.",
    bullets: [
      "Büros, Praxen, Kanzleien, Ladenflächen",
      "Arbeiten abends & am Wochenende möglich",
      "Abschnittsweise ohne Betriebsunterbrechung",
      "Robuste, strapazierfähige Beschichtungen",
      "Corporate-Farben & Markenauftritt an der Wand",
      "Zuverlässige Terminierung & saubere Abwicklung",
    ],
    proof:
      "„Als Tischlerei arbeiten wir regelmäßig mit Heußer zusammen – verlässlich und handwerklich top.“ – Google-Bewertung (B2B)",
    priceHint:
      "Gewerbeprojekte kalkulieren wir nach Fläche, Nutzung und Zeitfenster – transparent und mit ausweisbarer Rechnung. Angebot innerhalb von 24 Stunden.",
    image: "/images/buero-streichen-berlin-gewerbe.avif",
    imageAlt: "Modern gestaltetes Büro in Berlin nach Malerarbeiten vom Meisterbetrieb",
    faq: [
      {
        q: "Können Sie streichen, ohne dass unser Betrieb stillsteht?",
        a: "Ja. Wir arbeiten abschnittsweise und auf Wunsch abends oder am Wochenende, damit Ihr Geschäft weiterläuft. Den Ablauf planen wir vorab genau mit Ihnen ab.",
      },
      {
        q: "Bekommen wir eine Rechnung für die Buchhaltung?",
        a: "Selbstverständlich. Sie erhalten eine ordnungsgemäße, umsatzsteuerausweisende Rechnung – als Meisterbetrieb rechnen wir Gewerbeaufträge sauber und nachvollziehbar ab.",
      },
      {
        q: "Arbeiten Sie auch für andere Handwerksbetriebe?",
        a: "Ja, wir sind verlässlicher B2B-Partner für Tischlereien, Bauträger, Hausverwaltungen und andere Gewerke – mit termintreuer, sauberer Ausführung.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

// ============================================================
// BEZIRKE / KIEZE (Local Landingpages)
// ============================================================
export type District = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string; // 100-Wörter-Bereich, Keyword früh
  local: string; // UNIQUE lokaler Bezug
  buildingTypes: string[];
  landmarks: string[];
  featuredServices: string[];
};

export const districts: District[] = [
  {
    slug: "mitte",
    name: "Mitte",
    metaTitle: "Maler Berlin Mitte | Malermeister für Altbau & Fassade – Heußer",
    metaDescription:
      "Maler in Berlin Mitte: Meisterbetrieb für Altbausanierung, Fassade & Wohnungsanstrich rund um Hackescher Markt & Spandauer Vorstadt. Jetzt Festpreis-Angebot holen!",
    intro:
      "Als Maler in Berlin Mitte kennen wir die Ansprüche des Bezirks: Zwischen Hackeschem Markt, Scheunenviertel und Spandauer Vorstadt reihen sich denkmalgeschützte Altbauten an sanierte Gründerzeithäuser und moderne Gewerbeflächen. Wir sind der Meisterbetrieb, der beides beherrscht – historische Substanz behutsam restaurieren und zeitgemäße Wohn- und Büroräume edel gestalten.",
    local:
      "Mitte ist dicht bebaut und geschichtsträchtig: Viele Gebäude in der Spandauer Vorstadt stehen unter Denkmalschutz, mit reich verziertem Stuck, hohen Kastenfenstern und historischen Fassaden. Genau hier zahlt sich unsere Erfahrung mit denkmalgerechten Materialien aus – von diffusionsoffenen Silikatfarben an der Fassade bis zur filigranen Stuckrestaurierung im Treppenhaus. Für die vielen Ladenlokale, Galerien und Büros in Mitte arbeiten wir außerdem termintreu und auf Wunsch außerhalb der Öffnungszeiten.",
    buildingTypes: ["Denkmalgeschützte Altbauten", "Gründerzeit-Wohnhäuser", "Galerien & Ladenlokale", "Büro- & Gewerbeflächen"],
    landmarks: ["Hackescher Markt", "Scheunenviertel", "Spandauer Vorstadt", "Rosenthaler Platz"],
    featuredServices: ["altbausanierung", "fassadenanstrich", "innenraumgestaltung", "buero-gewerbe"],
  },
  {
    slug: "prenzlauer-berg",
    name: "Prenzlauer Berg",
    metaTitle: "Maler Prenzlauer Berg | Altbau & Wohnung streichen – Heußer",
    metaDescription:
      "Maler in Prenzlauer Berg: Meisterbetrieb für Altbauwohnungen, Stuck & edle Farbkonzepte. Sauber, termintreu, Farrow & Ball Partner. Jetzt kostenloses Angebot!",
    intro:
      "Als Maler in Prenzlauer Berg gestalten wir die sanierten Gründerzeitwohnungen des Kiezes so, wie sie es verdienen: mit Gefühl für hohe Decken, Stuck und Dielenböden. Ob edles Farrow-&-Ball-Farbkonzept, restaurierter Deckenstuck oder frischer Anstrich vor dem Einzug – wir bringen den typischen Prenzlberg-Altbau zum Strahlen.",
    local:
      "Kaum ein Berliner Bezirk ist so von der Gründerzeit geprägt wie Prenzlauer Berg. Rund um Kollwitzplatz und Helmholtzplatz dominieren hohe Altbauwohnungen mit Stuckdecken, Flügeltüren und Kastenfenstern. Viele wurden aufwendig saniert – entsprechend hoch ist der Anspruch der Bewohner an Malerarbeiten. Wir arbeiten hier besonders oft mit hochwertigen Designfarben und -tapeten und restaurieren historische Details, statt sie zu überstreichen.",
    buildingTypes: ["Sanierte Gründerzeit-Altbauten", "Stuckwohnungen", "Dachgeschoss-Ausbauten", "Cafés & Boutiquen"],
    landmarks: ["Kollwitzplatz", "Helmholtzplatz", "Kulturbrauerei", "Kastanienallee"],
    featuredServices: ["innenraumgestaltung", "altbausanierung", "tapezierarbeiten", "lackierarbeiten"],
  },
  {
    slug: "pankow",
    name: "Pankow",
    metaTitle: "Maler Pankow | Fassade & Wohnung streichen Berlin – Heußer",
    metaDescription:
      "Maler in Pankow: Meisterbetrieb für Fassadenanstrich, Wohnungsrenovierung & Altbau. Aus Niederschönhausen für ganz Pankow. Jetzt Festpreis-Angebot anfordern!",
    intro:
      "Als Maler in Pankow sind wir hier zu Hause – unsere Geschäftsstelle liegt in Niederschönhausen. Vom klassischen Einfamilienhaus über Stadtvillen bis zur Altbauwohnung streichen wir Fassaden und Innenräume in ganz Pankow zuverlässig, sauber und termintreu.",
    local:
      "Pankow ist vielfältig: In Niederschönhausen und rund um das Schloss prägen Stadtvillen, Einfamilienhäuser und großzügige Gärten das Bild, während sich in Richtung Innenstadt Gründerzeit-Altbauten und Wohnsiedlungen finden. Diese Mischung passt perfekt zu unserem Leistungsspektrum – vom witterungsfesten Fassadenanstrich am Eigenheim bis zur denkmalgerechten Altbausanierung. Als ortsansässiger Betrieb sind wir schnell vor Ort und kennen die Anforderungen der Pankower Bausubstanz genau.",
    buildingTypes: ["Stadtvillen", "Einfamilienhäuser", "Gründerzeit-Altbauten", "Wohnsiedlungen"],
    landmarks: ["Schloss Schönhausen", "Bürgerpark Pankow", "Niederschönhausen", "Florastraße"],
    featuredServices: ["fassadenanstrich", "innenraumgestaltung", "altbausanierung", "lackierarbeiten"],
  },
  {
    slug: "charlottenburg",
    name: "Charlottenburg",
    metaTitle: "Maler Charlottenburg | Altbau, Fassade & Stuck Berlin – Heußer",
    metaDescription:
      "Maler in Charlottenburg: Meisterbetrieb für herrschaftliche Altbauten, Stuckrestaurierung & Fassade. Farrow & Ball Partner. Jetzt kostenloses Angebot sichern!",
    intro:
      "Als Maler in Charlottenburg arbeiten wir an einigen der schönsten Altbauten Berlins. Die herrschaftlichen Wohnungen rund um Savignyplatz und Kurfürstendamm verlangen Sorgfalt und Stilgefühl – bei der Stuckrestaurierung ebenso wie beim edlen Wandanstrich mit Premium-Farben.",
    local:
      "Charlottenburg steht für großbürgerliche Eleganz: hohe Altbauetagen mit aufwendigem Stuck, repräsentative Fassaden und wertvolle Kastenfenster. Gerade in der westlichen City West ist der Anspruch an Qualität hoch. Wir restaurieren historische Stuckelemente, entwickeln stimmige Farbkonzepte und setzen edle Farrow-&-Ball-Töne ein, die zur klassischen Architektur passen. Auch für die vielen Praxen, Kanzleien und Ladenlokale der Gegend sind wir ein verlässlicher Partner.",
    buildingTypes: ["Herrschaftliche Altbauten", "Stuckvillen", "Praxen & Kanzleien", "Ladenlokale City West"],
    landmarks: ["Savignyplatz", "Kurfürstendamm", "Schloss Charlottenburg", "Lietzensee"],
    featuredServices: ["altbausanierung", "innenraumgestaltung", "fassadenanstrich", "buero-gewerbe"],
  },
  {
    slug: "friedrichshain",
    name: "Friedrichshain",
    metaTitle: "Maler Friedrichshain | Wohnung streichen & Altbau Berlin – Heußer",
    metaDescription:
      "Maler in Friedrichshain: Meisterbetrieb für Wohnungsanstrich, Altbau & Designtapeten. Sauber, termintreu, faire Festpreise. Jetzt kostenloses Angebot anfordern!",
    intro:
      "Als Maler in Friedrichshain streichen wir vom sanierten Gründerzeit-Altbau bis zur modernen Neubauwohnung. Rund um Boxhagener Platz und Simon-Dach-Straße renovieren wir Wohnungen frisch, sauber und termintreu – auch kurzfristig zur Wohnungsübergabe.",
    local:
      "Friedrichshain ist jung, dicht und im ständigen Wandel: Sanierte Altbauten treffen auf Plattenbauten rund um die Karl-Marx-Allee und moderne Neubauten am Spreeufer. Viele Wohnungen wechseln häufig die Mieter, entsprechend gefragt sind schnelle, saubere Renovierungen zur Übergabe. Wir sind darauf eingestellt – mit klaren Terminen, staubarmem Arbeiten und einem Ergebnis, das die Kaution sichert. Für Designfreunde setzen wir außerdem gern individuelle Farb- und Tapetenkonzepte um.",
    buildingTypes: ["Sanierte Altbauten", "Plattenbauten Karl-Marx-Allee", "Neubau am Spreeufer", "WG- & Mietwohnungen"],
    landmarks: ["Boxhagener Platz", "Simon-Dach-Straße", "Karl-Marx-Allee", "Ostkreuz"],
    featuredServices: ["innenraumgestaltung", "tapezierarbeiten", "altbausanierung", "lackierarbeiten"],
  },
  {
    slug: "kreuzberg",
    name: "Kreuzberg",
    metaTitle: "Maler Kreuzberg | Wohnung & Gewerbe streichen Berlin – Heußer",
    metaDescription:
      "Maler in Kreuzberg: Meisterbetrieb für Wohnungsanstrich, Altbau & Gewerbeflächen. Kreativ, sauber & termintreu. Jetzt kostenloses Festpreis-Angebot anfordern!",
    intro:
      "Als Maler in Kreuzberg gestalten wir Wohnungen, Ateliers und Gewerberäume mit Charakter. Zwischen Bergmannkiez und Görlitzer Park verbinden wir soliden Altbau-Anstrich mit kreativen Gestaltungsideen – von der Akzentwand bis zum kompletten Farbkonzept.",
    local:
      "Kreuzberg lebt vom Kontrast: gründerzeitliche Altbauten im Bergmannkiez, Gewerbehöfe, Ateliers und Ladenlokale rund um die Oranienstraße. Der Kiez ist kreativ und individuell – und genau das spiegelt sich in den Wünschen unserer Kunden wider. Wir setzen ausgefallene Farbkonzepte, Designtapeten und Spachteltechniken ebenso professionell um wie den klassischen, robusten Anstrich für stark genutzte Gewerbeflächen und Gastronomie.",
    buildingTypes: ["Altbauten Bergmannkiez", "Gewerbehöfe & Ateliers", "Ladenlokale & Gastronomie", "Mietwohnungen"],
    landmarks: ["Bergmannstraße", "Oranienstraße", "Görlitzer Park", "Viktoriapark"],
    featuredServices: ["innenraumgestaltung", "buero-gewerbe", "tapezierarbeiten", "altbausanierung"],
  },
  {
    slug: "koepenick",
    name: "Köpenick",
    metaTitle: "Maler Köpenick | Fassade & Haus streichen Berlin – Heußer",
    metaDescription:
      "Maler in Köpenick: Meisterbetrieb mit Geschäftsstelle vor Ort für Fassade, Einfamilienhaus & Wohnung. Schnell, sauber, termintreu. Jetzt Festpreis-Angebot holen!",
    intro:
      "Als Maler in Köpenick sind wir mit einer eigenen Geschäftsstelle direkt vor Ort. Von der Fassade am Einfamilienhaus über Gartenhäuser bis zur Wohnungsrenovierung streichen wir im gesamten Südosten Berlins – schnell erreichbar, sauber und termintreu.",
    local:
      "Köpenick ist Berlins grüner Südosten: viel Wasser, Wald und vor allem viele Eigenheime, Doppelhäuser und Villen in Gegenden wie der Altstadt Köpenick, Wendenschloss und am Müggelsee. Hier stehen Fassadenanstriche, Holzschutz und die Renovierung von Einfamilienhäusern im Vordergrund. Weil unsere Geschäftsstelle direkt in Köpenick liegt, sind wir besonders schnell vor Ort und kennen die typischen Anforderungen an witterungsfesten Fassadenschutz in Wassernähe.",
    buildingTypes: ["Einfamilien- & Doppelhäuser", "Villen am Wasser", "Gartenhäuser & Holzfassaden", "Altstadt-Gebäude"],
    landmarks: ["Altstadt Köpenick", "Müggelsee", "Wendenschloss", "Schloss Köpenick"],
    featuredServices: ["fassadenanstrich", "lackierarbeiten", "innenraumgestaltung", "altbausanierung"],
  },
  {
    slug: "niederschoenhausen",
    name: "Niederschönhausen",
    metaTitle: "Maler Niederschönhausen | Meisterbetrieb vor Ort – Heußer",
    metaDescription:
      "Maler in Niederschönhausen: Ihr Meisterbetrieb direkt im Kiez für Fassade, Villa & Wohnung. Kurze Wege, saubere Arbeit, faire Festpreise. Jetzt Angebot anfordern!",
    intro:
      "Als Maler in Niederschönhausen sind wir Ihr Betrieb direkt aus dem Kiez – hier befindet sich unsere Geschäftsstelle. Für die Stadtvillen und Einfamilienhäuser rund um das Schloss Schönhausen bieten wir Fassadenanstrich, Holzschutz und edle Innenraumgestaltung mit kürzesten Wegen.",
    local:
      "Niederschönhausen ist eine der grünsten und ruhigsten Wohnlagen Berlins: großzügige Stadtvillen, Einfamilienhäuser und Altbauten rund um den Schlosspark. Die repräsentative Bausubstanz verlangt hochwertige, langlebige Anstriche – innen wie außen. Als ortsansässiger Meisterbetrieb sind wir in wenigen Minuten vor Ort, beraten persönlich und stimmen Farbkonzepte auf den gehobenen Charakter der Gegend ab, gern mit Premium-Farben von Farrow & Ball.",
    buildingTypes: ["Stadtvillen", "Einfamilienhäuser", "Altbauten am Schlosspark", "Gehobene Wohnhäuser"],
    landmarks: ["Schloss Schönhausen", "Schlosspark", "Ossietzkystraße", "Majakowskiring"],
    featuredServices: ["fassadenanstrich", "innenraumgestaltung", "altbausanierung", "lackierarbeiten"],
  },
  {
    slug: "lichtenberg",
    name: "Lichtenberg",
    metaTitle: "Maler Lichtenberg | Wohnung & Fassade streichen Berlin – Heußer",
    metaDescription:
      "Maler in Lichtenberg: Meisterbetrieb für Wohnungsrenovierung, Fassade & Gewerbe. Faire Festpreise, saubere Arbeit, termintreu. Jetzt kostenloses Angebot anfordern!",
    intro:
      "Als Maler in Lichtenberg renovieren wir Wohnungen, Fassaden und Gewerbeflächen im ganzen Bezirk. Von den Wohnsiedlungen rund um die Frankfurter Allee bis zu den Altbauten in Rummelsburg arbeiten wir zuverlässig, sauber und zu fairen Festpreisen.",
    local:
      "Lichtenberg ist geprägt von großen Wohnsiedlungen, Plattenbauten und sanierten Altbauten – etwa in Rummelsburg und am Weitlingkiez. Hier sind vor allem effiziente, saubere Wohnungsrenovierungen und robuste Anstriche für Treppenhäuser und Gewerbe gefragt. Wir arbeiten termintreu und wirtschaftlich, ohne bei der Qualität Abstriche zu machen – ideal für Hausverwaltungen, Vermieter und Eigentümer, die auf Verlässlichkeit setzen.",
    buildingTypes: ["Wohnsiedlungen & Plattenbau", "Sanierte Altbauten Rummelsburg", "Treppenhäuser", "Gewerbeflächen"],
    landmarks: ["Frankfurter Allee", "Rummelsburg", "Weitlingkiez", "Tierpark"],
    featuredServices: ["innenraumgestaltung", "fassadenanstrich", "buero-gewerbe", "lackierarbeiten"],
  },
  {
    slug: "spandau",
    name: "Spandau",
    metaTitle: "Maler Spandau | Fassade & Haus streichen Berlin – Heußer",
    metaDescription:
      "Maler in Spandau: Meisterbetrieb für Fassadenanstrich, Einfamilienhaus & Wohnung. Witterungsfest, sauber & termintreu. Jetzt kostenloses Festpreis-Angebot holen!",
    intro:
      "Als Maler in Spandau streichen wir Fassaden, Einfamilienhäuser und Wohnungen im gesamten Westen Berlins. Von der historischen Altstadt bis zu den Siedlungshäusern in Kladow und Gatow liefern wir witterungsfeste Anstriche und saubere Innenraumgestaltung.",
    local:
      "Spandau hat einen eigenen Charakter: die historische Altstadt mit ihren denkmalgeschützten Häusern, dazu viele Einfamilienhaus-Siedlungen in Kladow, Gatow und Hakenfelde sowie Wohnanlagen. Entsprechend breit ist der Bedarf – von der denkmalgerechten Fassade in der Altstadt bis zum robusten Wetterschutz am Eigenheim im Grünen. Wir kalkulieren fair, arbeiten sauber und liefern langlebige Ergebnisse, die dem Berliner Westwetter standhalten.",
    buildingTypes: ["Altstadt-Denkmäler", "Einfamilienhaus-Siedlungen", "Wohnanlagen", "Reihenhäuser"],
    landmarks: ["Spandauer Altstadt", "Zitadelle Spandau", "Kladow", "Gatow"],
    featuredServices: ["fassadenanstrich", "altbausanierung", "innenraumgestaltung", "lackierarbeiten"],
  },
  {
    slug: "steglitz-zehlendorf",
    name: "Steglitz-Zehlendorf",
    metaTitle: "Maler Steglitz-Zehlendorf | Villa & Fassade streichen – Heußer",
    metaDescription:
      "Maler in Steglitz-Zehlendorf: Meisterbetrieb für Villen, Fassade & edle Innenräume. Premium-Farben, saubere Arbeit, Festpreis. Jetzt kostenloses Angebot anfordern!",
    intro:
      "Als Maler in Steglitz-Zehlendorf arbeiten wir an den repräsentativen Villen und Landhäusern im Südwesten Berlins. Ob hochwertiger Fassadenanstrich, edle Innenraumgestaltung mit Premium-Farben oder die Aufarbeitung wertvoller Holzelemente – hier zählt Qualität.",
    local:
      "Steglitz-Zehlendorf ist Berlins gehobene Wohngegend: Villenkolonien in Dahlem, Landhäuser in Zehlendorf und am Wannsee, viel Grün und anspruchsvolle Bauherren. Die wertvolle Bausubstanz verdient erstklassige Materialien und sorgfältige Ausführung. Wir setzen auf langlebige Fassadensysteme, edle Innenanstriche mit Farrow & Ball und die denkmalgerechte Aufarbeitung historischer Details – für ein Ergebnis, das dem Wert der Immobilie entspricht.",
    buildingTypes: ["Villen in Dahlem", "Landhäuser Zehlendorf", "Reihenhäuser", "Altbauten Steglitz"],
    landmarks: ["Dahlem", "Wannsee", "Botanischer Garten", "Schlossstraße"],
    featuredServices: ["fassadenanstrich", "innenraumgestaltung", "altbausanierung", "lackierarbeiten"],
  },
  {
    slug: "tempelhof-schoeneberg",
    name: "Tempelhof-Schöneberg",
    metaTitle: "Maler Schöneberg & Tempelhof | Wohnung & Altbau – Heußer",
    metaDescription:
      "Maler in Tempelhof-Schöneberg: Meisterbetrieb für Altbauwohnungen, Fassade & Gewerbe. Sauber, termintreu, Festpreis-Garantie. Jetzt kostenloses Angebot anfordern!",
    intro:
      "Als Maler in Tempelhof-Schöneberg renovieren wir Altbauwohnungen, Fassaden und Gewerbeflächen im ganzen Bezirk. Vom Stuckaltbau im Schöneberger Kiez bis zum Einfamilienhaus in Tempelhof arbeiten wir sauber, termintreu und mit Festpreis-Garantie.",
    local:
      "Tempelhof-Schöneberg vereint gründerzeitliche Altbauviertel rund um den Winterfeldtplatz mit den ruhigen Wohnsiedlungen und Einfamilienhäusern in Tempelhof und Mariendorf. Diese Mischung deckt sich genau mit unserem Angebot: edle Altbau-Innenraumgestaltung mit Stuck und Designfarben auf der einen Seite, solider Fassaden- und Wetterschutz am Eigenheim auf der anderen. Wir beraten persönlich und finden für jede Bausubstanz das passende System.",
    buildingTypes: ["Gründerzeit-Altbauten", "Einfamilienhäuser Tempelhof", "Wohnsiedlungen Mariendorf", "Ladenlokale"],
    landmarks: ["Winterfeldtplatz", "Tempelhofer Feld", "Rathaus Schöneberg", "Akazienstraße"],
    featuredServices: ["innenraumgestaltung", "altbausanierung", "fassadenanstrich", "buero-gewerbe"],
  },
];

export function getDistrict(slug: string) {
  return districts.find((d) => d.slug === slug);
}

// ============================================================
// BEWERTUNGEN (sinngemäß aus den echten Google-Rezensionen)
// ============================================================
export type Testimonial = {
  quote: string;
  author: string;
  context: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Unsere Altbauwohnung wurde komplett renoviert – inklusive eines wunderschönen Farbkonzepts mit Farrow-&-Ball-Farben. Das Team hat beraten, mitgedacht und wirklich edel gearbeitet. Das Ergebnis übertrifft unsere Erwartungen.",
    author: "Familie K.",
    context: "Altbau-Renovierung · Prenzlauer Berg",
    rating: 5,
  },
  {
    quote:
      "Die Fassade unseres Einfamilienhauses war stark verwittert. Nach der Sanierung sieht das Haus aus wie neu. Alles wurde termingerecht, extrem sauber und zu einem fairen Festpreis erledigt. Absolute Empfehlung.",
    author: "Herr M.",
    context: "Fassadensanierung · Einfamilienhaus",
    rating: 5,
  },
  {
    quote:
      "Unser Dachgeschoss wurde renoviert – von den Schrägen bis zu den Einbauten alles perfekt ausgeführt. Man merkt die Erfahrung. Sehr freundliches Team, das sauber und zuverlässig arbeitet.",
    author: "Frau S.",
    context: "Dachgeschoss-Renovierung · Pankow",
    rating: 5,
  },
  {
    quote:
      "Für die Wohnungsübergabe nach dem Auszug musste alles frisch gestrichen werden. Kurzfristiger Termin, blitzsauber gearbeitet, die Kaution gab es vollständig zurück. Vielen Dank!",
    author: "Herr T.",
    context: "Wohnungsübergabe · Auszug",
    rating: 5,
  },
  {
    quote:
      "Als Tischlerei arbeiten wir regelmäßig mit Malermeister Heußer zusammen. Verlässlich, termintreu und handwerklich auf höchstem Niveau. Ein Partner, auf den man sich zu 100 % verlassen kann.",
    author: "Tischlerei aus Berlin",
    context: "B2B-Zusammenarbeit · Gewerbe",
    rating: 5,
  },
  {
    quote:
      "Was uns am meisten beeindruckt hat: die Sauberkeit und Termintreue. Es wurde alles sorgfältig abgedeckt, jeden Abend aufgeräumt und der vereinbarte Endtermin exakt eingehalten. Sehr professionell.",
    author: "Frau B.",
    context: "Wohnungsrenovierung · Mitte",
    rating: 5,
  },
];

// ============================================================
// PROZESS
// ============================================================
export const process = [
  {
    step: "01",
    title: "Anfrage & kostenloses Angebot",
    text: "Sie schildern uns Ihr Vorhaben – telefonisch, per WhatsApp oder über das Formular. Innerhalb von 24 Stunden melden wir uns mit ersten Einschätzungen.",
    icon: "📞",
  },
  {
    step: "02",
    title: "Besichtigung & Festpreis",
    text: "Wir schauen uns Ihr Objekt vor Ort an, beraten zu Materialien und Farben und erstellen ein transparentes Angebot mit verbindlichem Festpreis – ohne versteckte Kosten.",
    icon: "📋",
  },
  {
    step: "03",
    title: "Saubere Ausführung",
    text: "Wir arbeiten termintreu, staubarm und sorgfältig abgedeckt. Zum vereinbarten Termin übergeben wir Ihre Räume besenrein – und Sie genießen das Ergebnis.",
    icon: "✨",
  },
];

// ============================================================
// FAQ – Startseite (allgemein, Long-Tail)
// ============================================================
export const homeFaq: FaqItem[] = [
  {
    q: "Was kostet es, eine 3-Zimmer-Wohnung streichen zu lassen?",
    a: "In Berlin liegen die Kosten für eine 3-Zimmer-Wohnung meist zwischen 1.500 und 4.000 € – je nach Fläche, Zustand der Wände, Farbwahl und nötigen Vorarbeiten. Als Meisterbetrieb geben wir Ihnen nach einer kostenlosen Besichtigung immer einen verbindlichen Festpreis, damit Sie planungssicher sind.",
  },
  {
    q: "Wer zahlt Malerarbeiten beim Auszug?",
    a: "Ob Sie beim Auszug streichen müssen, hängt vom Mietvertrag ab. Enthält er eine wirksame Klausel zu Schönheitsreparaturen und sind die Fristen abgelaufen, trägt in der Regel der Mieter die Kosten. Wir übernehmen die fachgerechte Renovierung zur Wohnungsübergabe zuverlässig und kurzfristig – damit die Kaution vollständig zurückkommt.",
  },
  {
    q: "Wie lange dauert ein Fassadenanstrich?",
    a: "Ein Einfamilienhaus ist – abhängig von Witterung, Fassadenzustand und Gerüst – meist in 1 bis 2 Wochen fertig. Größere Objekte planen wir individuell. Den verbindlichen Zeitrahmen nennen wir Ihnen bei der Besichtigung.",
  },
  {
    q: "Arbeiten Sie in ganz Berlin?",
    a: "Ja. Von unseren Geschäftsstellen in Niederschönhausen und Köpenick sind wir in ganz Berlin und im Umland für Sie im Einsatz – von Mitte über Prenzlauer Berg und Charlottenburg bis in den grünen Südosten.",
  },
  {
    q: "Warum ein Meisterbetrieb statt einer günstigen Kolonne?",
    a: "Als Meisterbetrieb mit über 23 Jahren Erfahrung haften wir für Qualität, arbeiten mit geprüften Fachkräften und geben Ihnen einen verbindlichen Festpreis. Sie erhalten eine ordentliche Rechnung, Gewährleistung und ein Ergebnis, das dauerhaft hält – statt böser Überraschungen.",
  },
  {
    q: "Bieten Sie eine Farbberatung an?",
    a: "Ja. Als Farrow & Ball Partner beraten wir Sie zu Farbwirkung, Materialien und Kombinationen und entwickeln auf Wunsch ein komplettes Farbkonzept für Ihre Räume oder Fassade – abgestimmt auf Licht, Nutzung und Architektur.",
  },
];

// ============================================================
// GALERIE / VORHER-NACHHER (Platzhalter – TODO echte Projektfotos)
// ============================================================
export const gallery = [
  { src: "/images/projekt-altbau-prenzlauer-berg.avif", label: "Altbau · Prenzlauer Berg", icon: "🏛️" },
  { src: "/images/projekt-fassade-einfamilienhaus.avif", label: "Fassade · Einfamilienhaus", icon: "🏢" },
  { src: "/images/projekt-designtapete-wohnzimmer.avif", label: "Designtapete · Wohnzimmer", icon: "📐" },
  { src: "/images/projekt-dachgeschoss-pankow.avif", label: "Dachgeschoss · Pankow", icon: "🎨" },
  { src: "/images/projekt-stuck-restaurierung.avif", label: "Stuckrestaurierung · Mitte", icon: "🏛️" },
  { src: "/images/projekt-buero-gewerbe.avif", label: "Büro · Gewerbe", icon: "🏬" },
];

export const beforeAfter = [
  {
    before: "/images/vorher-fassade-berlin.avif",
    after: "/images/nachher-fassade-berlin.avif",
    label: "Fassadensanierung Einfamilienhaus",
    icon: "🏢",
  },
  {
    before: "/images/vorher-altbau-wohnzimmer.avif",
    after: "/images/nachher-altbau-wohnzimmer.avif",
    label: "Altbau-Wohnzimmer mit Farrow & Ball",
    icon: "🎨",
  },
];
