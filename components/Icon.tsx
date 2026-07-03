import type { SVGProps } from "react";

/**
 * Zentrales SVG-Icon-Set (Linien-Stil, currentColor) – ersetzt alle Emojis.
 * Einheitlicher 24er-Viewport, stroke-basiert für einen edlen, klaren Look.
 */
export type IconName =
  | "building" | "roller" | "brush" | "wallpaper" | "column" | "office"
  | "phone" | "whatsapp" | "mail" | "pin" | "clock" | "arrow"
  | "check" | "star" | "clipboard" | "sparkles" | "chat" | "alert"
  | "plus" | "swap" | "shield" | "broom" | "euro" | "spray" | "menu" | "close";

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function Icon({ name, size = 24, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden focusable="false" {...rest}>
      {ICONS[name]}
    </svg>
  );
}

const ICONS: Record<IconName, JSX.Element> = {
  // Fassade / Mehrfamilienhaus
  building: (
    <g {...P}>
      <path d="M4 21V6l7-3 7 3v15" />
      <path d="M4 21h16" />
      <path d="M8 9h0M8 13h0M8 17h0M14 9h0M14 13h0M14 17h0" />
    </g>
  ),
  // Innenraum / Malerrolle
  roller: (
    <g {...P}>
      <rect x="4" y="4" width="13" height="5" rx="1.2" />
      <path d="M17 6.5h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 19 11.5h-6" />
      <path d="M10.5 11.5V14a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 0 6.5 17v3" />
    </g>
  ),
  // Lackierarbeiten / Pinsel
  brush: (
    <g {...P}>
      <path d="M14.5 3.5 20.5 9.5" />
      <path d="M13 5 5.5 12.5a2 2 0 0 0 0 2.8l.2.2a2 2 0 0 0 2.8 0L16 8" />
      <path d="M5.5 15.3C4 16.5 4 19 2.7 20.3c2 0.6 4.6 0.3 5.9-1a2.7 2.7 0 0 0-3.1-4z" />
    </g>
  ),
  // Tapezierarbeiten / Tapetenrolle
  wallpaper: (
    <g {...P}>
      <path d="M7 4h9a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9" />
      <path d="M7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V7" />
      <path d="M16 10v7a3 3 0 0 1-3 3H7" />
    </g>
  ),
  // Altbau / Säule
  column: (
    <g {...P}>
      <path d="M4 6h16" />
      <path d="M5 6 12 3l7 3" />
      <path d="M7 6v11M12 6v11M17 6v11" />
      <path d="M4 17h16M4 21h16" />
    </g>
  ),
  // Büro & Gewerbe
  office: (
    <g {...P}>
      <rect x="4" y="3" width="16" height="18" rx="1.4" />
      <path d="M8 7h0M12 7h0M16 7h0M8 11h0M12 11h0M16 11h0M8 15h0M16 15h0" />
      <path d="M10.5 21v-3a1.5 1.5 0 0 1 3 0v3" />
    </g>
  ),
  phone: (
    <g {...P}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z" />
    </g>
  ),
  whatsapp: (
    <g {...P}>
      <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20z" />
      <path d="M9 8.5c0 4 2.5 6.5 6.5 6.5.6 0 1-.6.8-1.1l-.5-1.1a.8.8 0 0 0-1-.4l-.9.4a4.7 4.7 0 0 1-2.2-2.2l.4-.9a.8.8 0 0 0-.4-1l-1.1-.5c-.5-.2-1.1.2-1.1.8z" />
    </g>
  ),
  mail: (
    <g {...P}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </g>
  ),
  pin: (
    <g {...P}>
      <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </g>
  ),
  clock: (
    <g {...P}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </g>
  ),
  arrow: (
    <g {...P}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </g>
  ),
  check: (
    <g {...P}>
      <path d="M4.5 12.5l4.5 4.5 10-10.5" />
    </g>
  ),
  star: (
    <path d="M12 3.5l2.5 5.3 5.8.7-4.3 4 1.1 5.8L12 16.6 6.9 19.3 8 13.5 3.7 9.5l5.8-.7z" fill="currentColor" stroke="none" />
  ),
  clipboard: (
    <g {...P}>
      <rect x="5" y="4.5" width="14" height="16" rx="2" />
      <path d="M9 4.5V3.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M8.5 10h7M8.5 13.5h7M8.5 17h4" />
    </g>
  ),
  sparkles: (
    <g {...P}>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M18 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </g>
  ),
  chat: (
    <g {...P}>
      <path d="M4.5 5.5h15a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H9l-4 3v-3H4.5A1.5 1.5 0 0 1 3 14V7a1.5 1.5 0 0 1 1.5-1.5z" />
    </g>
  ),
  alert: (
    <g {...P}>
      <path d="M12 4l9 15.5H3z" />
      <path d="M12 10v4M12 17h0" />
    </g>
  ),
  plus: (
    <g {...P}>
      <path d="M12 5v14M5 12h14" />
    </g>
  ),
  swap: (
    <g {...P}>
      <path d="M7 8h11l-3-3M17 16H6l3 3" />
    </g>
  ),
  shield: (
    <g {...P}>
      <path d="M12 3l7 2.5v5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-5z" />
      <path d="M9 12l2 2 4-4.5" />
    </g>
  ),
  broom: (
    <g {...P}>
      <path d="M15 3l6 6-2 2-6-6z" />
      <path d="M13 7 5.5 14.5a3 3 0 0 0-.8 1.5L4 20l3.9-.7a3 3 0 0 0 1.6-.8L17 11" />
    </g>
  ),
  euro: (
    <g {...P}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5a4 4 0 1 0 0 7M7.5 11h6M7.5 13.5h5" />
    </g>
  ),
  spray: (
    <g {...P}>
      <rect x="8" y="8" width="7" height="12" rx="1.4" />
      <path d="M8 8V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2" />
      <path d="M17 6h2M17 9h2M18 4v0" />
    </g>
  ),
  menu: (
    <g {...P}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </g>
  ),
  close: (
    <g {...P}>
      <path d="M6 6l12 12M18 6L6 18" />
    </g>
  ),
};

/** Emoji-freies Icon je Leistung (per Slug). */
export function serviceIconName(slug: string): IconName {
  const map: Record<string, IconName> = {
    fassadenanstrich: "building",
    innenraumgestaltung: "roller",
    lackierarbeiten: "brush",
    tapezierarbeiten: "wallpaper",
    altbausanierung: "column",
    "buero-gewerbe": "office",
  };
  return map[slug] ?? "roller";
}
