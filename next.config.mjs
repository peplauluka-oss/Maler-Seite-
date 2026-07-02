/** @type {import('next').NextConfig} */

// Nur beim GitHub-Pages-Build (Umgebungsvariable GITHUB_PAGES=true) wird statisch
// exportiert und der Repo-Unterpfad als basePath gesetzt. Lokal & auf Vercel
// bleibt die Konfiguration unverändert (voller Next.js-Funktionsumfang).
const isPages = process.env.GITHUB_PAGES === "true";

// Der Pages-Unterpfad ergibt sich automatisch aus dem Repo-Namen:
// GitHub Actions setzt GITHUB_REPOSITORY = "owner/repo". Dadurch funktioniert
// die Seite in JEDEM Repository ohne Codeänderung. Fallback für lokale Tests.
// Für eine eigene Domain (Custom Domain) einfach PAGES_BASE_PATH="" setzen.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "Physio-Websiten";
const basePath =
  process.env.PAGES_BASE_PATH !== undefined ? process.env.PAGES_BASE_PATH : `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  ...(isPages
    ? {
        output: "export",
        ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
        images: { unoptimized: true },
        trailingSlash: true,
        env: { NEXT_PUBLIC_BASE_PATH: basePath },
      }
    : {}),
};

export default nextConfig;
