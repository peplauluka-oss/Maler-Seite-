import { site } from "@/lib/site";

/** Rendert ein JSON-LD-Skript (Schema.org) serverseitig ins HTML. */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Wiederverwendbares LocalBusiness/HousePainter-Objekt für die NAP-Konsistenz. */
export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": `${site.domain}/#business`,
    name: site.name,
    description:
      "Meisterbetrieb für Malerarbeiten in Berlin: Fassadenanstrich, Altbausanierung, Wohnungs- und Büroanstrich, Tapezier- und Lackierarbeiten.",
    url: site.domain,
    telephone: site.phoneHref,
    email: site.email,
    image: `${site.domain}/og.svg`,
    priceRange: "€€",
    foundingDate: String(site.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressRegion: "Berlin",
      addressCountry: "DE",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: { "@type": "City", name: "Berlin" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(site.rating),
      reviewCount: String(site.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [] as string[],
  };
}

export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.domain}${it.url}`,
    })),
  };
}

export function faqPage(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
