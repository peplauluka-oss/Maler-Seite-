import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

/** Immer sichtbare Handlungsleiste auf Mobilgeräten: Anrufen · WhatsApp · Angebot. */
export default function StickyBar() {
  return (
    <div className="mobilebar" role="navigation" aria-label="Schnellkontakt">
      <a href={`tel:${site.phoneHref}`} className="mobilebar__call">
        <span className="ico" aria-hidden>☎</span>
        Anrufen
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mobilebar__wa">
        <span className="ico" aria-hidden>✆</span>
        WhatsApp
      </a>
      <Link href="/kontakt" className="mobilebar__quote">
        <span className="ico" aria-hidden>✦</span>
        Angebot
      </Link>
    </div>
  );
}
