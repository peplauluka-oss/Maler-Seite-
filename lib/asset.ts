// Sorgt dafür, dass lokale Bildpfade (z. B. "/images/team.jpg") auch dann
// funktionieren, wenn die Seite unter einem Unterpfad läuft (GitHub Pages:
// /Physio-Websiten). Externe URLs (http…) bleiben unverändert.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}
