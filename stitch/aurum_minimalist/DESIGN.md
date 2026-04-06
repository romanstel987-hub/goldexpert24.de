# Design System Strategy: The Digital Goldsmith

## 1. Overview & Creative North Star
**Creative North Star: "The Curated Vault"**

This design system moves away from the aggressive "we buy gold" tropes of high-contrast yellow buttons and cluttered layouts. Instead, it positions the platform as a high-end digital vault—an editorial experience where gold is treated with the same reverence as fine art.

To achieve the "Apple of Gold Buyers" aesthetic, we break the "template" look by utilizing intentional asymmetry, expansive negative space, and a refined focus on "The Precision of the Detail." We do not use boxes to contain content; we use atmosphere. The experience should feel whispered, not shouted, emphasizing transparency through clarity and premium value through restraint.

---

## 2. Colors & Surface Philosophy
The palette is rooted in tonal sophistication, moving beyond flat hex codes into a system of tactile surfaces.

### Surface Hierarchy & Nesting
We reject the standard grid. Instead, we use **Tonal Layering**.
*   **The "No-Line" Rule:** Do not use 1px solid borders to section off large areas of the site. Boundaries must be defined solely through background shifts. Use `surface` (#fcf9f8) for the main canvas and transition to `surface-container-low` (#f6f3f2) to define secondary content zones.
*   **Layering Principle:** Treat the UI as a series of physical layers. A `surface-container-lowest` (Pure White) card sitting on a `surface-container` background creates a natural, soft lift.
*   **The "Glass & Gradient" Rule:** For floating navigation or modal overlays, use **Glassmorphism**. Apply `surface` with 80% opacity and a `20px` backdrop-blur. 
*   **Signature Textures:** Main CTAs should not be flat. Use a subtle linear gradient from `primary` (#755b00) to `primary-container` (#c9a84c) at a 45-degree angle to give the button a "metallic" soul.

---

## 3. Typography: Editorial Authority
Our typography is a dialogue between heritage (Serif) and precision (Mono).

*   **Display & Headlines (Noto Serif / Playfair):** Used for value propositions and section headers. High contrast between sizes creates an editorial feel.
*   **Body (Manrope / DM Sans):** Optimized for readability and trust. Large line-heights (1.6) are required to maintain the "luxury" of space.
*   **Numbers (DM Mono):** This is our "Precision Token." Every time a gold price, weight, or currency is displayed, it must use DM Mono. This signals technical accuracy and transparency.

| Level | Token | Font | Size | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display LG** | `display-lg` | Noto Serif | 3.5rem | Hero value propositions |
| **Headline MD**| `headline-md` | Noto Serif | 1.75rem | Section storytelling |
| **Title MD**   | `title-md` | Manrope | 1.125rem | Sub-navigation/Card headers |
| **Body LG**    | `body-lg` | Manrope | 1.0rem | Descriptive trust text |
| **Label MD**   | `label-md` | Inter | 0.75rem | Data descriptors/Metadata |

---

## 4. Elevation & Depth
In this design system, shadows are light, and lines are "ghosts."

*   **Ambient Shadows:** We avoid traditional "Drop Shadows." Instead, use **Ambient Glows**. Shadows must have a blur radius of at least `40px` with an opacity of `4-6%`. The color should be a tinted version of `on-surface` (warm charcoal) to feel like natural light.
*   **The "Ghost Border" Fallback:** If a container requires a border for accessibility (e.g., input fields), use the `outline-variant` (#d0c5b2) at **20% opacity**. Never use 100% opaque borders.
*   **Intentional Asymmetry:** Break the vertical flow. Allow images of gold bars or coins to bleed off the edge of their containers or overlap background transitions to create a sense of depth and physical presence.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary-container`. `0.25rem` (4px) radius. No border. Text in `on-primary` (White).
*   **Secondary:** Ghost style. `outline-variant` border (20% opacity). Text in `primary`.
*   **Tertiary:** Text only with a 1px `primary-container` underline that expands on hover.

### Cards
*   **Rule:** Forbid the use of divider lines within cards.
*   **Styling:** Background of `surface-container-lowest`. `0.5rem` (8px) corner radius. Use vertical spacing (32px+) to separate the image, title, and price.

### Input Fields
*   **Styling:** Minimalist. Only a bottom border of `outline-variant` (50% opacity). When focused, the border transitions to `primary` (#755b00) 1px. Labels should be `label-md` and always visible.

### Data Displays (Gold Ticker)
*   **Styling:** Background `surface-dim` with a `surface-bright` inner container. Use `DM Mono` for all fluctuating digits.
*   **Animation:** Use a "Count-up" JS transition for prices to emphasize real-time transparency.

### Additional Signature Component: The "Expert Seal"
A floating, semi-transparent chip (Glassmorphism) containing a Lucide "Shield" icon and the text "Certified Value." This should be placed overlapping the corner of product images to reinforce the "Trustworthy" pillar.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical padding (e.g., more top padding than bottom) to create an upscale, rhythmic flow.
*   **Do** use Lucide icons with a 1.5px stroke weight in `primary` or `slate`.
*   **Do** allow for "Dead Space." If a section feels empty, it’s likely working.

### Don't
*   **Don't** use pure black (#000). Use `on-background` (#1c1b1b) for text to maintain warmth.
*   **Don't** use standard "shaking" error animations. Use a soft fade-in of an `error` (#ba1a1a) colored label.
*   **Don't** use harsh 1px dividers. Use a 40px vertical gap or a change from `surface` to `surface-container-low` instead.
*   **Don't** use heavy, rounded "Pill" buttons. Stay at `0.25rem` (4px) to maintain the architectural, precise feel.