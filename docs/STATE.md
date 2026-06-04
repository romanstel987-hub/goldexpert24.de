# STATE — Stand & offene Punkte

Stand: 2026-06-04. Branch `master`.

## Erledigt (dieser Durchgang)

### Landingpage (`index.html`)
- **Toter CTA behoben:** Neue Sektion `id="versandtasche"` gebaut; alle CTAs (Desktop-Nav, Mobile-Nav, Hero-Rechner) führen dorthin.
- **Versandtaschen-Formular:** Formspree (Platzhalter `YOUR_FORM_ID`), Felder Name/E-Mail/Telefon(opt.)/Beschreibung(opt.), **DSGVO-Pflicht-Checkbox** mit Link zur Datenschutzerklärung, **Honeypot** (`_gotcha`), AJAX-Submit mit sanfter Erfolgsmeldung, Fehleranzeige.
- **Fake-Trust entfernt:** „Trustpilot 4.9/5.0 / über 1.200 Bewertungen" raus. Ehrliche Trust-Bar: Versichert bis 500.000 € · Auszahlung in 48 h per SEPA · SSL-verschlüsselt · Geprüfter, gesetzeskonformer Ankauf. Platzhalter-Kommentar für echte Rezensionen gesetzt.
- **Claims vereinheitlicht:** überall „500.000 €" und „48 Stunden per SEPA". Meta-Description, Hero, Prozess-Schritt 4, FAQ angepasst (keine „24h"/„sofort"/„Blitzüberweisung" mehr).
- **Encoding:** alle ASCII-Umlaute im Fließtext korrigiert (für, über, Prüfung, Börse, Münzen, häufige, …).
- **Standort:** „Edelmetallzentrum München" entfernt; Footer-Kontakt = echte Stammdaten (KoschkaWeb, 92237 Sulzbach-Rosenberg). Erfundene 0800-Nummer durch echte Nummer ersetzt.
- **Footer-Rechtslinks:** Impressum/Datenschutz/Cookie-Einstellungen funktionieren; AGB- und Widerruf-Link ersetzt (Hinweis: kein Widerrufsrecht beim Ankauf). **Kein `href="#"` mehr.**
- **Transparenz-Sektion:** statischer „Live"-Preis ist jetzt dynamisch (`#spotDisplay` + „Stand: HH:MM"); Formel-Darstellung von „feste Handelsspanne" auf „Kategorie/Art" umgestellt (keine % / keine Formel sichtbar).
- **Erfundene Person entfernt:** „Stefan Hartmann, Chef-Gutachter" + Stockfoto → neutrale Team-Angabe.
- `prefers-reduced-motion` respektiert (Transitions/Scroll abgeschaltet).

### Goldrechner
- **Arten-spezifische Auszahlungssätze (intern, unsichtbar):** Feingold 95 % · Schmuck 75 % · Zahngold 50 %. Gold-Kategorieauswahl im UI; Silber/Platin nutzen Feingold-Satz (95 %).
- **Im UI kein Prozentsatz, keine Formel** — nur Euro-Ergebnis + neutraler Richtwert-Hinweis.
- **GoldAPI.io angebunden:** `GOLDAPI_KEY = "YOUR_API_KEY"` (Platzhalter), Endpunkte XAU/XAG/XPT in EUR, nutzt `price_gram_24k`. Fallback-Kurse, sessionStorage-Cache (5 Min), „Stand"-Zeitstempel. `Promise.allSettled` → Rechner bleibt bei API-Ausfall funktionsfähig.

### Rechtsseiten (neu)
- `impressum.html` (§5 DDG, KoschkaWeb-Stammdaten, USt-IdNr. DE363813013, OS-Plattform, Haftung/Urheberrecht).
- `datenschutz.html` (modular: Verantwortlicher, Rechtsgrundlagen, IONOS-Hosting, Logs, SSL, Formspree + US-Transfer/SCC/DPF, Fonts/Tailwind-CDN, GoldAPI client-seitig, Cookies, Betroffenenrechte, **BayLDA**).
- `cookies.html` + schlanker **Consent-Banner** (`assets/consent.js`, global auf allen Seiten): „Akzeptieren" / „Nur notwendige", Wahl in `localStorage`, kein erneutes Erscheinen, **Widerruf/Ändern** über cookies.html, **kein Cookie-Wall**.

### Repo-weite Korrekturen (auch Nicht-Scope-Seiten)
- **BaFin-Behauptungen entfernt** (faq.html, sicherheit.html) — Edelmetallhändler sind nicht BaFin-reguliert.
- **TÜV-/ISO-9001-/ISO-27001-Badges entfernt** (sicherheit.html) → durch ehrliche Aussagen ersetzt.
- **„Handelsregister B / Amtsgericht München" / „seit 15 Jahren" entfernt** (faq.html, sicherheit.html).
- 0800-Nummer, „24h/sofort"-Claims und tote/404-Links (`agb.html`, `widerruf.html`, `href="#"`) auf allen Seiten bereinigt; CTAs zeigen auf `index.html#versandtasche`.
- Consent-Banner auf allen Seiten eingebunden.

### Doku
- `CLAUDE.md`, `docs/DESIGN.md`, `docs/DISCOVERY.md`, `docs/STATE.md` erstellt.

## CORS-Entscheidung (GoldAPI.io)
- **Getestet:** GoldAPI.io sendet `Access-Control-Allow-Origin: *` und erlaubt Header `x-access-token`. **Direkter Browser-`fetch` funktioniert** (kein CORS-Blocker).
- **Default = Client-Fetch** (`USE_PHP_PROXY = false`). Nachteil: Der Key steht öffentlich im Client-JS.
- **Optionaler PHP-Proxy** `assets/goldprice.php` liegt bei (Key serverseitig). **Achtung:** Erst auf `USE_PHP_PROXY = true` stellen, **wenn PHP auf der Domain aktiv ist** — sonst würde nginx die .php als Klartext ausliefern und den Key zeigen. Auf dem aktuellen CloudPanel-„Static"-Setup ist PHP vermutlich nicht aktiv.

## Offene Punkte (vor finalem Launch)
1. **GoldAPI.io-Key eintragen** (`GOLDAPI_KEY` in `index.html`, oder in `assets/goldprice.php` bei PHP-Proxy). Bis dahin laufen Fallback-Kurse.
2. **Formspree-Form-ID eintragen** (`action="https://formspree.io/f/YOUR_FORM_ID"` in `index.html`). Ohne ID zeigt das Formular einen Hinweis statt zu senden.
3. **API-Key-Sicherheit:** Empfehlung — PHP auf der Domain aktivieren und PHP-Proxy nutzen (`USE_PHP_PROXY = true`), damit der Key nicht öffentlich ist. Key bei Bedarf rotieren.
4. **Google Fonts lokal einbinden** (`/assets/fonts/`) — dann entfällt die einwilligungspflichtige externe Einbindung (Google-Fonts-Urteil) und der Banner ist reine Transparenz. Aktuell extern via CDN (in Datenschutzerklärung abgedeckt).
5. **AGB fehlen** (nicht im Scope) — später ergänzen und im Footer verlinken.
6. **Silber-/Platin-Auszahlungssätze:** aktuell Feingold-Satz (95 %) als Default — kundenspezifische Sätze können nachgereicht werden.
7. **Rechtstexte sind sorgfältige Vorlagen, keine Rechtsberatung** — vor finalem Launch anwaltlich/extern prüfen lassen, insbesondere wegen Edelmetall-Ankauf (GwG), Formspree-US-Transfer und Google-Fonts.
8. **Nicht-Scope-Seiten** (preise/ablauf/sicherheit/ueber-uns/faq): Pflicht-Korrekturen (Fake-Trust, Claims, Links) erledigt; ein vollständiger inhaltlicher Feinschliff wurde gemäß Scope nicht vorgenommen. Statische Preisbeispiele dort ggf. noch prüfen.
9. **Team-/Bildmaterial:** Kategorie- und Team-Bilder auf der Landingpage sind externe `googleusercontent`-Platzhalter — vor Launch durch eigene Bilder ersetzen.

## Deployment-Hinweis (wichtig — Brief-Annahme korrigiert)
- Es gibt **keinen** GitHub-Auto-Deploy. goldexpert24.de = IONOS-VPS (nginx, CloudPanel „Static"), Docroot `/home/goldexpert24/htdocs/goldexpert24.de/`. Deploy = statische Dateien per SFTP/SSH (User `goldexpert24`, kein root). SPA-Fallback in nginx vorhanden, SSL (Let's Encrypt) gültig.
