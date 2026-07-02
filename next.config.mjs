/** @type {import('next').NextConfig} */

// Nur beim GitHub-Pages-Build (Umgebungsvariable GITHUB_PAGES=true) wird statisch
// exportiert und der Repo-Unterpfad als basePath gesetzt. Lokal & auf Vercel
// bleibt die Konfiguration unverändert (voller Next.js-Funktionsumfang).
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "Physio-Websiten";

const nextConfig = {
  reactStrictMode: true,
  ...(isPages
    ? {
        output: "export",
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
