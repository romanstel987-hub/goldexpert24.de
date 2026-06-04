# CLAUDE.md — GoldExpert24.de

Leitfaden für Claude Code in diesem Repo. Kurz halten, vor Arbeit lesen.

## Was das ist

Landingpage für **GoldExpert24.de** — Edelmetallankauf (Gold/Silber/Platin) per versichertem
Postversand. Positionierung: „The Apple of Gold Buyers" — premium, ruhig, transparent.
Betreiber: **KoschkaWeb Technologies (Roman Stel)**, Sulzbach-Rosenberg.

## Stack (NICHT ändern)

- Vanilla HTML + **Tailwind via CDN** (`cdn.tailwindcss.com?plugins=forms,container-queries`).
- `tailwind.config` steht **inline im `<head>` jeder Seite** — Token-System erweitern, nicht ersetzen.
- Vanilla JS (kein npm, keine Module, kein Build-Schritt).
- Fonts: Noto Serif / Manrope / DM Mono / Inter (Google Fonts CDN). Material Symbols Outlined.
- Lokaler Test: `npx serve -l 3000 .`

## Seiten

- **In Scope:** `index.html` (Landingpage), `impressum.html`, `datenschutz.html`, `cookies.html`.
- **Bestehend, nicht ausbauen:** `preise.html`, `ablauf.html`, `sicherheit.html`, `ueber-uns.html`, `faq.html`.
  Nur saubere Verlinkung + repo-weite Korrekturen (Claims/Encoding/Fake-Trust) sicherstellen.

## Eiserne Regeln

1. **Keine erfundenen** Zahlen, Bewertungen, Zertifikate, Standorte, Telefonnummern. Lieber weglassen.
2. **Kein** Fake-Trustpilot, **kein** BaFin-Bezug (Edelmetallhändler sind nicht BaFin-reguliert), keine unbelegten TÜV/ISO-Badges.
3. Verbindliche Claims überall gleich: **„Versichert bis 500.000 €"**, **„Auszahlung in 48 Stunden per SEPA-Überweisung"** (nie 24h/sofort/bar).
4. **Goldrechner:** Auszahlungssätze sind **intern & unsichtbar** — kein Prozentsatz, keine Formel im UI. Nur das Euro-Ergebnis + neutraler Richtwert-Hinweis.
   - Feingold/Barren/Münzen **95 %**, Schmuck **75 %**, Zahngold/Bruchgold **50 %**.
5. Echte Umlaute (UTF-8), nicht ASCII-Behelf (für, über, Prüfung, …).
6. **Logos nicht** umfärben/ersetzen (Wortmarke ist Navy `#0B2333`, Absicht).
7. Design: **Weiß dominiert, Gold ist Akzent.** Details in `docs/DESIGN.md`.

## Live-Kurse (Goldrechner)

- GoldAPI.io (`XAU/XAG/XPT` in EUR), Header `x-access-token`. **CORS ist offen** (Client-Fetch ok).
- API-Key-Platzhalter `GOLDAPI_KEY = "YOUR_API_KEY"`. Fallback-Kurse + sessionStorage-Cache (5 Min) + „Stand: HH:MM".
- Optionaler PHP-Proxy `assets/goldprice.php` (Key serverseitig) via `USE_PHP_PROXY`-Schalter.

## Deployment (real)

- goldexpert24.de = IONOS-VPS, nginx, CloudPanel (Static), Docroot
  `/home/goldexpert24/htdocs/goldexpert24.de/`. **Kein** Auto-Deploy — Upload per SFTP/SSH.
- Commit/Push auf Branch `master`.

## Doku

- `docs/DESIGN.md` — Design-System (verbindlich).
- `docs/DISCOVERY.md` — Bestandsaufnahme.
- `docs/STATE.md` — Stand / offene Punkte / Changelog.
