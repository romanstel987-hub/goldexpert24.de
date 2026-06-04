# Discovery — GoldExpert24.de

Bestandsaufnahme vor dem Umbau (aus Repo-Sichtung + Live-Server).

## Repo & Stack

- **Repo:** `github.com/romanstel987-hub/goldexpert24.de`, Branch `master`.
- **Stack:** Vanilla HTML + Tailwind via CDN (`cdn.tailwindcss.com?plugins=forms,container-queries`), Vanilla JS. Kein Build-Schritt, kein npm.
- **Fonts:** Noto Serif, Manrope, DM Mono, Inter (Google Fonts CDN). Material Symbols Outlined.
- **`tailwind.config`** steht inline im `<head>` jeder Seite (Token-System „The Curated Vault").
- **Seiten:** `index.html` (Landingpage), `preise.html`, `ablauf.html`, `sicherheit.html`, `ueber-uns.html`, `faq.html`. Branches `stitch`/`stitch2` = Design-Vorstufen.
- **Assets:** `assets/logo-dark.svg`, `logo-white.svg`, `logo.svg`.

## Scope (Kundenauftrag)

Nur **Landingpage + Impressum + Datenschutz + Cookies**. Die übrigen Seiten bleiben bestehen, werden aber nicht ausgebaut — nur ihre Verlinkung bleibt sauber.

## Hosting / Deployment (real, vom Live-Server verifiziert)

- Domain **goldexpert24.de** läuft auf einem **IONOS-VPS** (IP 217.154.194.248), Webserver **nginx**, verwaltet via **CloudPanel** (Site-Typ „Static").
- Docroot: `/home/goldexpert24/htdocs/goldexpert24.de/`. Deploy = statische Dateien dorthin.
- **Kein echter GitHub-Auto-Deploy** (entgegen Annahme im Brief) — Dateien müssen per SFTP/SSH hochgeladen werden (User `goldexpert24`, kein root/sudo).
- nginx hat bereits SPA-/Fallback-Verhalten; `.htaccess` greift nicht (nicht Apache).
- SSL: gültiges Let's-Encrypt-Zertifikat vorhanden.
- **PHP:** Für den CloudPanel-„Static"-Site-Typ vermutlich **nicht** aktiviert → PHP-Proxy nur nach Aktivierung nutzbar (siehe STATE.md).

## Vorgefundene Pre-Launch-Blocker (Audit)

| # | Problem | Ort |
|---|---------|-----|
| 4.1 | CTA `#versandtasche` → Ziel existiert nicht | index.html Nav (Desktop+Mobile), Hero, Rechner |
| 4.2 | Fake „Trustpilot 4.9/5.0 — über 1.200 Bewertungen" | index.html Trust-Band (~Z.212), auch ablauf/preise |
| 4.2 | BaFin-Erwähnung (Edelmetallhändler sind nicht BaFin-reguliert) | faq.html, sicherheit.html |
| 4.3 | „24h"-Auszahlung statt „48 h SEPA" | alle Seiten + Meta-Description |
| 4.4 | ASCII-Umlaute im Fließtext (für→fur, über→uber, Prüfung→Prufung, …) | alle Seiten |
| 4.5 | Statischer Goldpreis 67,42 €/g neben „Live"-Label | index.html Transparenz-Sektion |
| 4.6 | Falscher Standort „Edelmetallzentrum München" (echte Stammdaten: Oberpfalz) | Footer aller Seiten |
| 4.7 | Footer-Rechtslinks `href="#"` | alle Seiten |
| 4.8 | Erfundene Telefonnummer „0800 123 456 78" | Footer aller Seiten |

## Goldrechner (Bestand)

- Vanilla-JS-Rechner in `index.html` (Metall-Tabs, Legierungs-Buttons, Gewicht, Count-up-Ergebnis).
- Hartkodiert: `PRICES = { gold: 67.42, silber: 0.83, platin: 29.50 }`, globaler `FACTOR = 0.95`.
- Umbau: arten-spezifische Sätze (Feingold 95 % / Schmuck 75 % / Zahngold 50 %, **intern, unsichtbar**) + GoldAPI.io-Live-Kurse + Fallback + sessionStorage-Cache + „Stand"-Zeitstempel.

## GoldAPI.io — CORS-Test (verifiziert)

- `OPTIONS`/`GET` liefern `Access-Control-Allow-Origin: *` und erlauben Header `x-access-token`.
- **CORS ist KEIN Blocker** — direkter Browser-`fetch` funktioniert. Einziger Nachteil von Client-Fetch: API-Key ist öffentlich im JS sichtbar.
- Entscheidung: Client-Fetch als Default + optionaler PHP-Proxy (`assets/goldprice.php`, umschaltbar via `USE_PHP_PROXY`). Details/Empfehlung in STATE.md.

## Verbindliche Stammdaten (Betreiber)

Roman Stel – KoschkaWeb Technologies, Vogelherdstr. 8, 92237 Sulzbach-Rosenberg.
USt-IdNr. DE363813013, roman.stel@koschkaweb.com, +49 176 47601824.
Aufsicht: Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Ansbach.
