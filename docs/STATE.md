# STATE — Stand & offene Punkte

Stand: 2026-06-04. Branch `master`.

## Erledigt — Runde 1 (Launchfähig)
- **index.html:** echte Versandtaschen-Sektion (`#versandtasche`) mit Formular (DSGVO-Checkbox, Honeypot); Fake-Trustpilot raus, ehrliche Trust-Bar; Claims überall „500.000 €" / „48 Stunden per SEPA"; Encoding/Umlaute korrigiert; erfundene 0800-Nummer + „München" raus → echte KoschkaWeb-Stammdaten; keine toten `href="#"`; erfundene Person („Stefan Hartmann") neutralisiert; `prefers-reduced-motion` respektiert.
- **Goldrechner:** arten-spezifische Auszahlungssätze (Feingold 95 % / Schmuck 75 % / Zahngold 50 %, **intern & unsichtbar**); nur Euro-Ergebnis + Richtwert-Hinweis.
- **Rechtsseiten:** impressum.html, datenschutz.html, cookies.html + globaler Consent-Banner.
- **Repo-weit:** BaFin-/TÜV-/ISO-Badges, „Handelsregister B/München", 0800-Nummer, „24h/sofort"-Claims und tote/404-Links bereinigt.
- **Doku:** CLAUDE.md, docs/DESIGN.md, docs/DISCOVERY.md, docs/STATE.md.

## Erledigt — Runde 2 (offene Punkte autonom abgearbeitet)
1. **Live-Kurse ohne API-Key (gelöst):** Standardquelle ist jetzt **schlüssellos** —
   `gold-api.com` (XAU/XAG/XPT in USD/oz) + `frankfurter.dev` (USD→EUR, EZB). Umrechnung in
   EUR/g im Client. **Kein Key nötig, funktioniert sofort, kein Key im Quelltext.** GoldAPI.io
   bleibt optional verfügbar (`USE_GOLDAPI`) inkl. PHP-Proxy (`USE_PHP_PROXY`). Fallback-Kurse,
   sessionStorage-Cache (5 Min) und „Stand: HH:MM" weiterhin aktiv.
2. **Key-Sicherheit (gelöst):** Da die Standardquelle keinen Key braucht, gibt es kein
   Key-Leak-Risiko mehr. PHP-Proxy nur noch optional (für GoldAPI.io).
3. **Google Fonts lokal eingebunden (gelöst):** Alle Schriften (Noto Serif, Manrope, DM Mono,
   Inter, Material Symbols) liegen lokal unter `assets/fonts/` und werden via `assets/fonts.css`
   geladen. **Keine externe Verbindung zu Google mehr.** Datenschutzerklärung entsprechend
   aktualisiert (nur noch Tailwind als CDN verbleibt).
4. **Selbst gehostete Bilder (gelöst):** Alle Kategorie- und Team-Bilder liegen lokal unter
   `assets/img/`; sämtliche externen `googleusercontent`-URLs entfernt.
5. **AGB erstellt:** `agb.html` (Vorlage für Edelmetall-Ankauf von Privatpersonen) + Footer-Link
   auf allen Seiten. Hinweis: Vorlage, vor Launch anwaltlich prüfen.
6. **Formular-Fallback:** Solange keine Formspree-ID gesetzt ist, öffnet der CTA eine
   vorausgefüllte E-Mail an info@goldexpert24.de — der Button läuft nie ins Leere.

## Offene Punkte (verbleibend)
1. **Formspree-Form-ID (optional):** In `index.html` `action="https://formspree.io/f/YOUR_FORM_ID"`
   eintragen, sobald ein Formspree-Konto besteht. Bis dahin greift der **mailto-Fallback**
   (voll funktionsfähig). Alternativ kann das Formular dauerhaft auf mailto bleiben.
2. **Silber-/Platin-Auszahlungssätze:** aktuell Feingold-Satz (95 %) als Default — kundenspezifische
   Sätze sind eine **kaufmännische Entscheidung** und wurden bewusst nicht erfunden. Bei Bedarf
   in `PAYOUT_RATES`/Logik ergänzen.
3. **Anwaltliche Prüfung der Rechtstexte** (Impressum, Datenschutz, AGB, Cookies): sind sorgfältige
   Vorlagen, keine Rechtsberatung — vor finalem Launch extern prüfen lassen (GwG, Formspree-US-Transfer).
4. **Tailwind via CDN:** weiterhin extern (cdn.tailwindcss.com). Optional kann Tailwind später
   lokal gebaut/eingebunden werden; in der Datenschutzerklärung abgedeckt.
5. **Nicht-Scope-Seiten** (preise/ablauf/sicherheit/ueber-uns/faq): Pflicht-Korrekturen erledigt
   (Fake-Trust, Claims, Links, Telefon, lokale Fonts, gstatic entfernt); inhaltlicher Feinschliff
   gemäß Scope nicht durchgeführt. **Hinweis:** Diese Seiten binden teils noch externe Platzhalter-
   Bilder ein (googleusercontent/unsplash). Die in-scope-Fläche (index + Rechtsseiten) ist komplett
   frei von externen Bildern/Fonts. Vor Launch ggf. auch dort durch eigene Bilder ersetzen.

## Deployment
- goldexpert24.de = IONOS-VPS (nginx, CloudPanel „Static"), Docroot
  `/home/goldexpert24/htdocs/goldexpert24.de/`. Deploy = statische Dateien per SFTP/SSH
  (User `goldexpert24`, kein root). SPA-Fallback in nginx vorhanden, SSL (Let's Encrypt) gültig.
  Kein GitHub-Auto-Deploy.
