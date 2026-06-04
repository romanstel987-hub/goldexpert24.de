# Design-System — „The Curated Vault" (Gold & Weiß)

Verbindliche Designreferenz für GoldExpert24.de. Premium durch **Reduktion**, nicht Dekoration.
Positionierung: „The Apple of Gold Buyers" — ruhig, hochwertig, vertrauenswürdig.

## Leitprinzip

- **Weiß ist die Hauptfläche, Gold ist der Akzent — nie umgekehrt.** Ziel: ~90 % weiß/creme, ~10 % Gold (CTAs, dünne Linien, Zahlen, Hover).
- **Keine harten 1px-Sektionsrahmen.** Grenzen durch Flächenwechsel (`surface` → `surface-container-low`) und Abstand (40px+).
- **Schatten sind Licht, keine Kästen.** Ambient Glows: Blur ≥ 40px, Deckkraft 4–6 %, warm getönt. Keine harten Drop-Shadows.
- **Bewegung ist beiläufig.** Übergänge 150–250ms `ease-out`. Buttons `hover:scale-95`. Kein Bounce/Shake.
- **Zahlen immer in DM Mono** (Preis, Gewicht, %, €) — das „Vertrauens-Token".
- **`prefers-reduced-motion` respektieren** — keine Count-ups/Transitions.

## Farb-Token (Material-Design-3-Ableitung, in `tailwind.config` jeder Seite)

| Token | Hex | Verwendung |
|-------|-----|-----------|
| `background` / `surface` | `#fcf9f8` | Hauptfläche (warmes Weiß) |
| `surface-container-lowest` | `#ffffff` | Karten (reinweiß) |
| `surface-container-low` | `#f6f3f2` | Sekundäre Zonen |
| `surface-container` | `#f0eded` | Tertiäre Abgrenzung |
| `on-surface` | `#1c1b1b` | Fließtext (warmes Anthrazit — nie reines Schwarz) |
| `on-surface-variant` | `#4d4637` | Sekundärtext, Labels |
| `primary` | `#755b00` | Gold-Akzent dunkel (Text, Linien) |
| `primary-container` | `#c9a84c` | Gold hell (Gradient-Endpunkt) |
| `on-primary` | `#ffffff` | Text auf Gold-Buttons |
| `outline-variant` | `#d0c5b2` | „Ghost"-Rahmen (nur 20–50 % Deckkraft) |
| `error` | `#ba1a1a` | Fehlerlabel (sanft eingeblendet) |

**Gold-Gradient (primäre CTAs):** linear 45°, `primary` (#755b00) → `primary-container` (#c9a84c), Radius `0.25rem` (4px), kein Rahmen.

**Logo:** Wortmarke in Navy `#0B2333` (nicht Gold). Navy + Gold + Weiß ist die ruhigere, hochwertigere Kombi. **Logos nicht umfärben/ersetzen.** Dateien: `assets/logo-dark.svg` (Nav), `assets/logo-white.svg` (Footer), `assets/logo.svg`.

## Typografie

| Ebene | Font | Einsatz |
|-------|------|---------|
| Display / Headlines | **Noto Serif** | Wertversprechen, Sektionsüberschriften |
| Body | **Manrope** | Fließtext, Zeilenhöhe 1.6 |
| Zahlen/Preise | **DM Mono** | jede fluktuierende Ziffer / Betrag |
| Labels/Metadaten | **Inter** | kleine Uppercase-Labels, weites Tracking |

Token: `headline`, `body`, `mono`, `label`.

## Komponenten

- **Button primär:** Gold-Gradient, weißer Text, 4px Radius, kein Rahmen.
- **Button sekundär:** Ghost (outline-variant 20 %, Text `primary`).
- **Button tertiär:** Textlink mit Gold-Unterstrich, der beim Hover wächst.
- **Karten:** `surface-container-lowest` (weiß), 8px Radius, keine inneren Trennlinien, 32px+ Abstand.
- **Inputs:** nur unterer Rahmen (`outline-variant` 50 %), Fokus → `primary` 1px. Labels immer sichtbar (kein Placeholder-als-Label).
- Keine Pill-Buttons, keine dicken Rundungen — 4px für die präzise Anmutung.

## Do / Don't

**Do**
- Viel Negativraum; Weiß führen lassen.
- Gold sparsam und gezielt (CTA, Zahl, Linie, Hover).
- Zahlen in DM Mono.
- Sanfte, kurze Übergänge; reduzierte Bewegung respektieren.
- Ehrliche, verifizierbare Trust-Signale.

**Don't**
- Keine goldlastigen Flächen, keine Gold-auf-Gold-Logos.
- Keine harten Rahmen als Sektionstrenner, keine Kästchen-Optik.
- Keine erfundenen Bewertungen/Zertifikate/Badges (Trustpilot, BaFin, TÜV/ISO ohne Beleg).
- Keinen sichtbaren Prozentsatz / keine Rechenformel im Goldrechner.
- Kein Bounce, kein Error-Shake, keine grellen Alarme.
