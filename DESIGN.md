---
name: Premium Architectural Armor
colors:
  surface: '#18120b'
  surface-dim: '#18120b'
  surface-bright: '#403830'
  surface-container-lowest: '#130d07'
  surface-container-low: '#211a13'
  surface-container: '#251e17'
  surface-container-high: '#302921'
  surface-container-highest: '#3b332b'
  on-surface: '#eee0d4'
  on-surface-variant: '#d6c4b0'
  inverse-surface: '#eee0d4'
  inverse-on-surface: '#362f27'
  outline: '#9e8e7c'
  outline-variant: '#514536'
  surface-tint: '#ffb954'
  primary: '#ffc87f'
  on-primary: '#452b00'
  primary-container: '#efa83d'
  on-primary-container: '#644000'
  inverse-primary: '#835500'
  secondary: '#e8c08d'
  on-secondary: '#442b05'
  secondary-container: '#5d421a'
  on-secondary-container: '#d5af7d'
  tertiary: '#a9d7ff'
  on-tertiary: '#003450'
  tertiary-container: '#68befd'
  on-tertiary-container: '#004c72'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb4'
  primary-fixed-dim: '#ffb954'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#633f00'
  secondary-fixed: '#ffddb4'
  secondary-fixed-dim: '#e8c08d'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#5d421a'
  tertiary-fixed: '#cbe6ff'
  tertiary-fixed-dim: '#8fcdff'
  on-tertiary-fixed: '#001e30'
  on-tertiary-fixed-variant: '#004b71'
  background: '#18120b'
  on-background: '#eee0d4'
  surface-variant: '#3b332b'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
---

## Brand & Style

The design system is engineered to project strength, precision, and high-end craftsmanship. It targets homeowners and commercial property developers looking for permanent, high-quality architectural solutions. The visual narrative combines **Corporate Modern** structure with **High-Contrast** luxury, utilizing the visual weight of architectural materials like weathered steel, bronze, and copper.

The emotional response is one of absolute reliability and elite status. By utilizing earthy, muted tones and sharp metallic accents, the UI mirrors the physical durability of the fencing products themselves. The aesthetic is "Architectural Premium"—functional enough for a construction site, yet sophisticated enough for a luxury estate.

## Colors

The palette is rooted in a "Dark Mode" philosophy to project a sense of prestige, depth, and nighttime security. The dark surfaces emphasize the metallic highlights, making the structural elements feel illuminated and high-end.

- **Primary Bronze (#b57702):** Used for CTAs, critical highlights, and brand iconography. It represents the "premium" promise and the warmth of high-end metalwork against a dark backdrop.
- **Secondary Ochre (#927145):** Provides a sophisticated, earthy complement to the primary bronze, used for supporting interactive elements and containers.
- **Tertiary Sky (#68befd):** A technical accent color used for secondary details, reflecting the blue sky often seen through architectural railings.
- **Functional Neutrals (#7f756b):** A range of deep grays and stone tones that ground the interface in the physical reality of construction materials.

Gradients should be used sparingly on high-impact elements like buttons or "Free Quote" badges to simulate a brushed-metal finish emerging from the shadows.

## Typography

This design system uses **Hanken Grotesk** for headlines to convey modern engineering and precision. Its sharp terminals and balanced geometry feel architectural. **Manrope** is selected for body text due to its exceptional readability and clean, professional character.

Display styles should use tight letter spacing and heavy weights to command attention. Labels, especially for categories like "PVC FENCE" or "CUSTOM RAILING", should always be set in all-caps with generous letter spacing to evoke the feeling of engraved metal plates.

## Layout & Spacing

The layout follows a **Fixed Grid** system for desktop (12 columns) to maintain a controlled, high-end editorial feel. Content is centered within a 1280px container.

- **Rhythm:** An 8px base unit drives all padding and margins.
- **Sectioning:** Large vertical breathing room (120px) between sections ensures the premium imagery is the focal point.
- **Responsive Behavior:** On tablet, the grid shifts to 8 columns with 48px margins. On mobile, it collapses to a single column with 20px margins, and display typography scales down for legibility.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Structural Outlines** rather than traditional soft shadows, emphasizing a clean, sophisticated architectural workspace.

- **Level 0 (Background):** Deep charcoal or dark stone surface.
- **Level 1 (Cards/Sections):** Subtle "Surface-Container" tiers using slightly lighter dark-gray backgrounds or a fine 1px border in stone tones.
- **Level 2 (Active States):** High-contrast bronze borders or subtle metallic gradients that mimic the edge of a machined metal part.
- **Depth:** Minimal use of shadows; depth is instead achieved by stacking dark, rectilinear containers.

## Shapes

The shape language is strictly **Sharp (0px)**. This reflects the industrial, structural nature of fencing and railing. 

- **Containers:** All service cards, images, and input fields feature 90-degree corners.
- **Accents:** Use 45-degree chamfered corners (angled clips) on decorative elements or category badges to mimic the look of machined metal parts.
- **Buttons:** Rectangular with no radius, reinforcing the "built to last" brand promise.

## Components

### Buttons
- **Primary:** Solid Bronze gradient background, white all-caps text, sharp corners.
- **Secondary:** Transparent background, 2px Bronze or Stone border, bronze/stone text.
- **Hover State:** Subtle lightening of the metallic surface or a shift to a higher-contrast border.

### Service Cards
Cards for services like "Custom Railing" or "PVC Fence" must feature high-resolution imagery. In dark mode, these should be housed in containers with 1px stone borders. The title should be placed in a bronze-bordered "nameplate".

### Contact Sections
Use a deep neutral surface color for the background to differentiate from the main page body. Input fields should be darker with 1px stone borders that turn bronze upon focus. Labels should be small, all-caps, and placed above the field.

### Call-to-Action (Free Quote)
The "Free Quote" component is the most important element. In dark mode, use strong Bronze backgrounds to ensure it is the most prominent element on the page, contrasting sharply against the dark background.

### Iconography
Icons should be thin-stroke, geometric, and strictly in Bronze or Sky blue. Avoid rounded or "cutesy" icons; opt for those that look like technical blueprints or architectural symbols.