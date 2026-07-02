import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description:
    "Physiotherapie Simone Rammelt – Ihre Frauen-Praxis in Berlin Prenzlauer Berg. Sanfte, herzliche Behandlung in wohltuender Wellness-Atmosphäre. Jetzt Termin vereinbaren.",
  keywords: [
    "Physiotherapie",
    "Wellness",
    "Frauenpraxis",
    "Massage",
    "Lymphdrainage",
    "Prenzlauer Berg",
    "Berlin",
  ],
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description: "Sanfte, herzliche Physiotherapie in Prenzlauer Berg.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" data-theme="blossom">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Nunito+Sans:wght@400;500;600;700;800&family=Caveat:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Ohne JavaScript sollen die per Scroll eingeblendeten Inhalte sichtbar sein */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
