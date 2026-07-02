"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/maler", label: "Bezirke" },
  { href: "/gewerbekunden", label: "Gewerbe" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label={`${site.name} – Startseite`}>
          <span className="brand__mark" aria-hidden>H</span>
          <span className="brand__text">
            Malermeister <strong>Heußer</strong>
            <small>Meisterbetrieb Berlin</small>
          </span>
        </Link>

        <button
          className="nav__toggle"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Hauptnavigation">
          <div className="nav__links">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav__link" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
          <a href={`tel:${site.phoneHref}`} className="nav__phone">
            <span aria-hidden>☎</span> {site.phone}
          </a>
          <Link href="/kontakt" className="btn btn--primary" onClick={() => setOpen(false)}>
            Angebot in 24 h
          </Link>
        </nav>
      </div>
    </header>
  );
}
