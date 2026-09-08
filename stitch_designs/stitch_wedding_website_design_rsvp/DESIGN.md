---
name: Ethereal Earth
colors:
  surface: '#fcf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fcf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e5e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#55433c'
  inverse-surface: '#31312d'
  inverse-on-surface: '#f3f0ea'
  outline: '#88726b'
  outline-variant: '#dbc1b8'
  surface-tint: '#974723'
  primary: '#944521'
  on-primary: '#ffffff'
  primary-container: '#b35c37'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb598'
  secondary: '#546347'
  on-secondary: '#ffffff'
  secondary-container: '#d7e8c5'
  on-secondary-container: '#5a694d'
  tertiary: '#70573f'
  on-tertiary: '#ffffff'
  tertiary-container: '#8a7055'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb598'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#79300e'
  secondary-fixed: '#d7e8c5'
  secondary-fixed-dim: '#bbccaa'
  on-secondary-fixed: '#121f09'
  on-secondary-fixed-variant: '#3d4b31'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#e1c1a2'
  on-tertiary-fixed: '#291805'
  on-tertiary-fixed-variant: '#59422b'
  background: '#fcf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e5e2dc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  accent-script:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The design system is rooted in the "Boho-Chic" aesthetic, blending organic warmth with refined editorial structure. It targets couples seeking an intimate, intentional, and romantic digital presence for their wedding. The emotional response is one of calm, hospitality, and timelessness.

The style leverages **Minimalism** with **Tactile** influences. It prioritizes generous whitespace (breathing room) to allow botanical elements and photography to take center stage. Visual interest is generated through subtle grain textures, soft layered surfaces, and a balance between structured layouts and fluid, hand-drawn accents.

## Colors
The palette is derived from natural pigments and sun-drenched landscapes.
- **Primary (Terracotta):** Used for primary actions, emphasis, and key brand moments.
- **Secondary (Sage Green):** Used for botanical accents, success states, and secondary navigational elements.
- **Tertiary (Sandy Beige):** Used for subtle dividers, borders, and decorative backgrounds.
- **Neutral (Cream):** The foundation of the UI, providing a softer, warmer alternative to pure white to reduce eye strain and evoke a "paper-like" feel.

Text should primarily use a deep charcoal-brown rather than pure black to maintain the organic warmth of the design system.

## Typography
The typographic hierarchy relies on the contrast between an authoritative Serif and an approachable Sans-Serif.
- **Headlines:** Playfair Display provides a literary, high-contrast elegance.
- **Accents:** Bricolage Grotesque (used in italics or specific weights) mimics the organic, slightly irregular nature of handwriting for quotes and small annotations.
- **Body:** Plus Jakarta Sans offers a soft, rounded geometric structure that ensures legibility while maintaining the "friendly" brand persona.

Maintain a loose line-height to reinforce the sense of "breathing room" across all text blocks.

## Layout & Spacing
The layout follows a **Fluid Grid** model with significant outer margins to create a "framed" effect, similar to a physical wedding invitation. 

- **Desktop:** 12-column grid with wide margins (64px+) to keep content centered and premium.
- **Mobile:** Single column with 20px margins; botanical illustrations should bleed off the edges of the screen to create depth.
- **Rhythm:** Use an 8px spacing scale. Vertical spacing between sections should be aggressive (80px - 120px) to prevent the UI from feeling cluttered.

## Elevation & Depth
This design system avoids heavy shadows, opting instead for **Tonal Layers** and **Soft Textures**.
- **Surfaces:** Depth is created by placing Cream containers over Sandy Beige backgrounds.
- **Shadows:** When necessary (e.g., modals), use a "Sun-Drenched" shadow: a very soft, diffused drop shadow with a slight Terracotta or Sage tint (`rgba(198, 107, 68, 0.08)`) rather than gray.
- **Blurs:** Use a soft background blur (8px) on navigation bars to create a frosted, airy feel as the user scrolls over photography.

## Shapes
Shapes are inspired by river stones and organic forms.
- **Cards & Containers:** Use a default 16px (`rounded-lg`) radius.
- **Buttons:** Use fully rounded (Pill-shaped) or a soft 8px radius depending on the visual weight required.
- **Images:** Apply a "soft mask" or high corner radius (24px+) to photography to move away from the harshness of digital rectangles. Use occasional arch-shaped masks for hero images to evoke classic architectural wedding venues.

## Components
- **Buttons:** Primary buttons use a solid Terracotta fill with Cream text. Secondary buttons use a Sage Green outline with a subtle Sandy Beige hover state.
- **Input Fields:** Use "Soft-bottom" styling—only a bottom border in Sandy Beige that turns Terracotta on focus, or a fully enclosed field with a very light cream fill.
- **Chips/Tags:** Used for "Registry," "Dietary Needs," or "Timeline" tags. These should have a secondary Sage Green background with a low opacity (15%) and matching dark-green text.
- **Cards:** Cards should be borderless with a subtle cream-to-beige gradient or a very fine 1px Sandy Beige stroke.
- **Botanical Accents:** A specialized component for placing SVG illustrations (leaves, vines) that overlap containers, breaking the grid to reinforce the "Natural" identity.
- **RSVP Form:** Prioritize accessibility with large tap targets and clear, descriptive labels in Plus Jakarta Sans.