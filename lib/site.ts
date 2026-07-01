export const site = {
  name: "Physiotherapie Simone Rammelt",
  shortName: "Praxis Rammelt",
  owner: "Simone Rammelt",
  tagline: "Physiotherapie mit Herz in Prenzlauer Berg",
  phone: "030 445 39 23",
  phoneHref: "+493044539 23".replace(/\s/g, ""),
  fax: "030 34 39 92 52",
  email: "postfach@physio-praxis-rammelt.de",
  website: "www.physio-praxis-rammelt.de",
  rating: 4.3,
  reviewCount: 43,
  address: {
    street: "Paul-Robeson-Straße 5",
    city: "10439 Berlin",
    district: "Prenzlauer Berg",
  },
  // Google-Maps Einbettung (Suchbegriff)
  mapQuery: "Physiotherapie Simone Rammelt, Paul-Robeson-Straße 5, 10439 Berlin",
  hours: [
    { day: "Montag – Donnerstag", time: "08:00 – 19:00 Uhr" },
    { day: "Freitag", time: "08:00 – 14:00 Uhr" },
    { day: "Samstag & Sonntag", time: "Geschlossen" },
    { day: "Hausbesuche", time: "Nach Vereinbarung" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "manuelle-therapie",
    title: "Manuelle Therapie",
    short: "Gezielte Handgriffe zur Behandlung von Gelenk-, Muskel- und Nervenbeschwerden.",
    description:
      "Mit spezialisierten Handgrifftechniken lösen wir Blockaden, verbessern die Beweglichkeit Ihrer Gelenke und lindern Schmerzen an Muskeln und Nerven – schonend und nachhaltig.",
    icon: "🤲",
  },
  {
    slug: "krankengymnastik",
    title: "Krankengymnastik (KG)",
    short: "Aktive Übungstherapie zur Wiederherstellung Ihrer Bewegungsfreiheit.",
    description:
      "Individuell abgestimmte Übungsprogramme kräftigen Ihre Muskulatur, verbessern Koordination und Haltung und begleiten Sie zurück in einen schmerzfreien Alltag.",
    icon: "🧘",
  },
  {
    slug: "marnitz-therapie",
    title: "Marnitz-Therapie",
    short: "Tiefenwirksame Schlüsselzonenmassage für gezielte Schmerzlinderung.",
    description:
      "Die Marnitz-Therapie kombiniert sanfte Tiefenmassage mit gezielten Bewegungsübungen. Sie wirkt genau dort, wo Verspannungen und Schmerzen entstehen.",
    icon: "🎯",
  },
  {
    slug: "manuelle-lymphdrainage",
    title: "Manuelle Lymphdrainage",
    short: "Sanfte Entstauungstherapie zur Reduktion von Schwellungen.",
    description:
      "Mit rhythmischen, sanften Grifftechniken regen wir den Lymphfluss an und unterstützen den Abbau von Schwellungen – etwa nach Operationen, Verletzungen oder bei Ödemen.",
    icon: "🌿",
  },
  {
    slug: "klassische-massage",
    title: "Klassische Massage",
    short: "Wohltuende Massagetechniken für Muskeln und Bindegewebe.",
    description:
      "Unsere Massagen lösen Verspannungen, fördern die Durchblutung und schenken tiefe Entspannung – ideal als Ergänzung zu Ihrer Therapie oder zum Kräfte tanken.",
    icon: "💆",
  },
  {
    slug: "hot-stone-massage",
    title: "Hot-Stone-Massage",
    short: "Warme Steine für tiefe Entspannung und gelöste Muskeln.",
    description:
      "Erwärmte Basaltsteine geben ihre Wärme sanft an Ihren Körper ab, lockern die Muskulatur und sorgen für ein rundum wohliges Entspannungserlebnis.",
    icon: "🔥",
  },
  {
    slug: "dorn-therapie",
    title: "Dorn-Therapie",
    short: "Sanfte Methode zur Korrektur von Wirbel- und Gelenkfehlstellungen.",
    description:
      "Mit schonendem Druck und Bewegung bringen wir Wirbel und Gelenke zurück in ihre natürliche Position – eine sanfte Hilfe bei Rücken- und Haltungsbeschwerden.",
    icon: "🦴",
  },
  {
    slug: "bruegger-therapie",
    title: "Brügger-Therapie",
    short: "Haltungs- und Bewegungstherapie gegen Fehlbelastungen.",
    description:
      "Die Brügger-Therapie korrigiert schmerzauslösende Haltungs- und Bewegungsmuster – besonders wirksam bei Beschwerden durch einseitige Belastung im Alltag und Beruf.",
    icon: "🧍",
  },
  {
    slug: "bobath",
    title: "Bobath-Therapie",
    short: "Neurologische Therapie zur Wiederherstellung von Bewegungsabläufen.",
    description:
      "Das Bobath-Konzept unterstützt Menschen mit neurologischen Erkrankungen dabei, verlorene Bewegungsfähigkeiten wiederzuerlangen und den Alltag selbstständiger zu meistern.",
    icon: "🧠",
  },
  {
    slug: "waermetherapie",
    title: "Wärme & Fango-Packungen",
    short: "Wohltuende Wärmeanwendungen zur Muskelentspannung.",
    description:
      "Fango, Heißluft und Wärmepackungen fördern die Durchblutung, entspannen die Muskulatur und bereiten Ihren Körper optimal auf die weitere Behandlung vor.",
    icon: "♨️",
  },
  {
    slug: "elektrotherapie",
    title: "Elektro- & Ultraschalltherapie",
    short: "Kurzwelle und Ultraschall zur gezielten Schmerzbehandlung.",
    description:
      "Kurzwellen- und Ultraschallanwendungen regen die Durchblutung und den Stoffwechsel im Gewebe an, lindern Schmerzen und beschleunigen die Heilung.",
    icon: "⚡",
  },
  {
    slug: "hausbesuche",
    title: "Hausbesuche",
    short: "Physiotherapie bei Ihnen zu Hause im näheren Umkreis.",
    description:
      "Wenn der Weg zu uns nicht möglich ist, kommen wir zu Ihnen: Wir behandeln Sie nach ärztlicher Verordnung im näheren Umkreis bequem in Ihrem Zuhause.",
    icon: "🏡",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Simone Rammelt",
    role: "Inhaberin & Physiotherapeutin",
    bio: "Gründerin der Praxis mit langjähriger Erfahrung. Ihr Anspruch: Professionalität, die man spürt, und eine Behandlung, die wirkt.",
  },
  {
    name: "Bianca",
    role: "Physiotherapeutin",
    bio: "Einfühlsam, kompetent und mit einem offenen Ohr für jedes Anliegen – für nachhaltige Behandlungserfolge.",
  },
  {
    name: "Tina",
    role: "Physiotherapeutin",
    bio: "Engagiert und herzlich. Nimmt sich die Zeit, die es braucht, damit Sie sich rundum gut aufgehoben fühlen.",
  },
  {
    name: "Dorrit",
    role: "Physiotherapeutin",
    bio: "Bringt gute Laune und Fachwissen ins Behandlungszimmer – für Genesung, die Freude macht.",
  },
  {
    name: "Dana",
    role: "Empfang & Terminorganisation",
    bio: "Sorgt für unkomplizierte, flexible Termine und den herzlichen ersten Eindruck, den unsere Patient:innen so schätzen.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  source: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ich bin nun schon seit Längerem bei Frau Rammelt in der Praxis Patient. Ich fühle mich dort sehr gut aufgehoben und kann die Praxis nur weiterempfehlen. Alle Kolleginnen sind sehr nett und haben sehr gute Laune, von der ich mich anstecken lasse. Die Behandlungen waren bisher nachhaltig und wirksam. Professionalität wird hier großgeschrieben und ich werde auf keinen Fall mehr wechseln.",
    author: "Langjähriger Patient",
    source: "Google-Rezension",
  },
  {
    quote:
      "Ich bin so glücklich, die Praxis gefunden zu haben. Ich hatte schon die Hoffnung auf Besserung in der Schulter aufgegeben. Ein Bekannter hat mir die Praxis empfohlen und es wird besser von Tag zu Tag. Ich habe angerufen und sofort einen kurzfristigen Termin bekommen. Das Team ist super nett und es wird sich Zeit genommen. Vielen Dank an das Team von Frau Rammelt.",
    author: "Zufriedener Patient",
    source: "Google-Rezension",
  },
  {
    quote:
      "Ich kann die Praxis nur wärmstens empfehlen! Das gesamte Team hier ist absolut fantastisch – Bianca, Tina, Dorrit & Frau Rammelt selbst ♥️. Sie sind so kompetent, einfühlsam und engagiert. Sie haben mir geholfen, mich schnell zu erholen und meine Beweglichkeit wiederherzustellen. Auch die Terminplanung ist unkompliziert und flexibel, danke liebe Dana.",
    author: "Patientin nach Reha",
    source: "Google-Rezension",
  },
];

// Bild-Slots – hier lassen sich die Fotos der Praxis zentral eintragen.
// Fällt eine URL aus, zeigt die Photo-Komponente einen dezenten Verlauf.
export const images = {
  hero:
    "https://images.unsplash.com/photo-1512757776214-26d36777b513?w=1400&q=80&auto=format&fit=crop",
  treatment:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1200&q=80&auto=format&fit=crop",
  massage:
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=80&auto=format&fit=crop",
  practice:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop",
  team:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop",
  career:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=80&auto=format&fit=crop",
};

// Karriere / Stellenangebot
export const career = {
  headline: "Werde Teil unseres Teams",
  role: "Physiotherapeut:in (m/w/d)",
  employment: "Voll- oder Teilzeit · unbefristet",
  intro:
    "Wir sind ein herzliches, eingespieltes Team im Herzen von Prenzlauer Berg – und wir haben noch einen Platz frei: für dich. Bei uns zählt der Mensch, nicht der Minutentakt.",
  benefits: [
    {
      icon: "💶",
      title: "Faire, verlässliche Vergütung",
      text: "Überdurchschnittliches Gehalt plus Bonusmöglichkeiten – deine Arbeit ist uns viel wert.",
    },
    {
      icon: "🗓️",
      title: "Arbeitszeiten, die zum Leben passen",
      text: "Flexible Modelle in Voll- oder Teilzeit, keine Wochenenden, planbare Freizeit.",
    },
    {
      icon: "📚",
      title: "Fort- & Weiterbildung",
      text: "Wir übernehmen deine Fortbildungen und fördern deine Spezialisierung – von MT bis Lymphdrainage.",
    },
    {
      icon: "💛",
      title: "Ein Team, das dich trägt",
      text: "Gute Laune, echte Wertschätzung und Kolleginnen, die füreinander da sind – das bestätigen sogar unsere Patient:innen.",
    },
    {
      icon: "⏱️",
      title: "Zeit für deine Patient:innen",
      text: "Bei uns behandelst du in Ruhe. Qualität vor Quantität – so, wie du es gelernt hast.",
    },
    {
      icon: "🌟",
      title: "Moderne, gemütliche Praxis",
      text: "Helle, gut ausgestattete Räume, barrierefrei und zentral gelegen mit bester Anbindung.",
    },
  ],
  wishlist: [
    "Abgeschlossene Ausbildung oder Studium als Physiotherapeut:in",
    "Freude an der Arbeit mit Menschen und ein herzliches Auftreten",
    "Teamgeist und Lust, Teil einer eingeschworenen Truppe zu werden",
    "Zusatzqualifikationen (MT, MLD, Bobath …) sind willkommen – aber kein Muss",
    "Berufseinsteiger:innen und Wiedereinsteiger:innen sind ausdrücklich willkommen",
  ],
};
