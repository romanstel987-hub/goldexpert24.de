# GoldExpert24.de — Website

Premium-Website für den Online-Goldankauf. Editorial Design mit "The Curated Vault"-Ästhetik.

## Projekt

**GoldExpert24.de** ist ein Online-Goldankauf-Service aus München. Kunden verkaufen Gold, Silber und Platin bequem per versichertem Postversand.

**Positionierung:** "The Apple of Gold Buyers" — Transparenz, Live-Börsenkurse, keine versteckten Gebühren.

## Seiten

| Datei | Seite | Beschreibung |
|-------|-------|-------------|
| `index.html` | Startseite | Hero mit Rechner, 4-Schritte-Prozess, Kategorien, Team-Teaser, FAQ |
| `preise.html` | Preise & Rechner | Live-Goldkurs, Goldwert-Rechner, Preistabelle, Preisentwicklungs-Chart |
| `ablauf.html` | So funktioniert es | 4 detaillierte Schritte, Video-Bereich, Sicherheit, FAQ, CTA |
| `ueber-uns.html` | Über uns | Team, Labor-Galerie, Mission, Compliance-Badges, Kontakt |
| `sicherheit.html` | Sicherheit | Sicherheits-Säulen, Prozess-Timeline, Versicherung, Zertifikate |
| `faq.html` | FAQ | 11 FAQ-Einträge mit Kategorie-Filter und Akkordeon |

## Design-System

- **Fonts:** Noto Serif (Headlines), Manrope (Body), DM Mono (Preise/Zahlen), Inter (Labels)
- **Farben:** Primary `#755b00`, Gold `#c9a84c`, Surface `#fcf9f8`, On-Surface `#1c1b1b`
- **Prinzipien:** Tonal Layering, Glassmorphism-Navigation, keine harten Borders, asymmetrisches Layout
- **Icons:** Material Symbols Outlined

## Tech-Stack

- Vanilla HTML + Tailwind CSS (CDN)
- Google Fonts + Material Symbols
- Kein Build-Prozess erforderlich — statische HTML-Dateien

## Projektstruktur

```
├── index.html              Startseite
├── preise.html              Preise & Goldrechner
├── ablauf.html              So funktioniert es
├── ueber-uns.html           Über uns
├── sicherheit.html          Sicherheit
├── faq.html                 FAQ
├── assets/
│   ├── logo.svg             Original-Logo (vollständig)
│   ├── logo-dark.svg        Logo für helle Hintergründe (Navigation)
│   └── logo-white.svg       Logo für dunkle Hintergründe (Footer)
└── stitch/                  Design-Quelldateien & Referenzen
    ├── aurum_minimalist/    Design-System Dokumentation
    ├── startseite/          Startseite Referenz-Design
    ├── preise_rechner/      Preise Referenz-Design
    ├── so_funktioniert_es/  Ablauf Referenz-Design
    └── ber_uns/             Über uns Referenz-Design
```

## Lokal starten

```bash
npx serve -l 3000 .
```

Dann öffnen: [http://localhost:3000](http://localhost:3000)
