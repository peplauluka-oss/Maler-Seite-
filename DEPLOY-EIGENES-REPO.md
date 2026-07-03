# Maler-Seite in ein eigenes Repository deployen

Die Maler-Seite bekommt so ein **eigenes GitHub-Repository** mit eigener,
unabhängiger GitHub-Pages-URL. Das Physio-Repo bleibt völlig unberührt.

Der Code ist bereits „neues-Repo-fähig":
- Der Pages-Unterpfad wird **automatisch aus dem Repo-Namen** abgeleitet
  (`next.config.mjs` liest `GITHUB_REPOSITORY`) – egal, wie du das Repo nennst.
- Der Deploy-Workflow (`.github/workflows/pages.yml`) triggert auf **`main`**.

## Schritt für Schritt

### 1. Neues Repo anlegen
Auf GitHub: **New repository** →
- Name z. B. `maler-heusser-berlin` (frei wählbar)
- **Public** (GitHub Pages ist im kostenlosen Plan nur für öffentliche Repos)
- **Ohne** README/`.gitignore`/Lizenz initialisieren (leer lassen)

### 2. Code aus dem Maler-Branch ins neue Repo pushen
Lokal im Terminal (Git erforderlich). `NEUES-REPO` durch den echten Namen ersetzen:

```bash
# Maler-Branch dieses Repos klonen
git clone -b claude/heusser-maler-berlin-relaunch-374x66 \
  https://github.com/peplauluka-oss/Physio-Websiten.git maler-site
cd maler-site

# Neues Repo als Ziel hinzufügen und als main pushen
git remote add maler https://github.com/peplauluka-oss/NEUES-REPO.git
git push maler claude/heusser-maler-berlin-relaunch-374x66:main
```

> Alternativ ohne CLI: die Dateien als ZIP herunterladen und über die
> GitHub-Weboberfläche („uploading an existing file") in das neue Repo laden –
> Branch `main`.

### 3. GitHub Pages aktivieren
Im **neuen** Repo: **Settings → Pages → Build and deployment → Source:
„GitHub Actions"**.

### 4. Fertig
Der Workflow läuft automatisch (Push auf `main`) und veröffentlicht die Seite.
Nach 1–2 Minuten ist sie live unter:

```
https://peplauluka-oss.github.io/NEUES-REPO/
```

Den Live-Status siehst du im neuen Repo unter **Actions**. Läuft der Deploy
nicht automatisch, einmalig **Actions → „Deploy to GitHub Pages" → Run workflow**.

## Optional: eigene Domain
Möchtest du später eine eigene Domain (z. B. `www.maler-heusser.de`), dann
im neuen Repo **Settings → Pages → Custom domain** eintragen und den
Build mit `PAGES_BASE_PATH=""` laufen lassen (dann entfällt der Unterpfad).
Sag Bescheid – ich passe den Workflow dafür an.
