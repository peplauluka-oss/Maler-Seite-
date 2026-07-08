import type { Metadata } from "next";
import { Sora, Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import { site } from "@/lib/site";

// Fonts werden von Next.js beim Build heruntergeladen und selbst gehostet
// (kein Google-CDN-Request im Browser → DSGVO + Performance). font-display: swap.
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
// Editorial-Serifenschrift für große Display-Überschriften (Malerei-Atmosphäre).
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} · Maler Berlin – Meisterbetrieb für Fassade & Altbau`,
    template: `%s · ${site.name}`,
  },
  description:
    "Malermeister Heußer – Ihr Meisterbetrieb für Malerarbeiten in Berlin. Fassadenanstrich, Altbausanierung, Wohnungs- & Büroanstrich. 4,87 ★ bei 74 Google-Bewertungen. Jetzt kostenloses Angebot in 24 h!",
  keywords: [
    "Maler Berlin",
    "Malermeister Berlin",
    "Fassadenanstrich Berlin",
    "Wohnung streichen lassen Berlin",
    "Altbausanierung Berlin",
    "Malerfirma Berlin",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} · Maler Berlin – Meisterbetrieb`,
    description:
      "Fassade, Altbau & edle Wohnräume vom Berliner Meisterbetrieb. 4,87 ★ · 74 Google-Bewertungen · Farrow & Ball Partner.",
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    url: site.domain,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Maler Berlin`,
    description: "Meisterhafte Malerarbeiten in Berlin – Fassade, Altbau, Wohnraum.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${sora.variable} ${inter.variable} ${fraunces.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
