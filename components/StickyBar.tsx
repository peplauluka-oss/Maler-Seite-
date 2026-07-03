import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import Icon from "@/components/Icon";

/** Immer sichtbare Handlungsleiste auf Mobilgeräten: Anruffen · WhatsApp · Angebot. */
export default function StickyBar() {
  return (
    <div className="mobilebar" role="navigation" aria-label="Schnellkontakt">
      <a href={`tel:${site.phoneHref}`} className="mobilebar__call">
        <span className="ico" aria-hidden><Icon name="phone" size={20} /></span>
        Anrufen
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mobilebar__wa">
        <span className="ico" aria-hidden><Icon name="whatsapp" size={20} /></span>
        WhatsApp
      </a>
      <Link href="/kontakt" className="mobilebar__quote">
        <span className="ico" aria-hidden><Icon name="sparkles" size={20} /></span>
        Angebot
      </Link>
    </div>
  );
}
