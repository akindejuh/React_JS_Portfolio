# Portfolio Redesign: Dark Luxurious Edition

## Overview
Complete UI overhaul of AGMA's portfolio. Dark & luxurious aesthetic inspired by Awwwards-winning portfolios (Dennis Snellenberg, Gregory Lalle). Near-black background (#0a0a0a) with electric blue accent (#455CE9). GSAP + Lenis + SplitType for animations.

## Color System
- Background: #0a0a0a
- Elevated: #111111
- Text: #e5e5e5
- Muted: #737373
- Accent: #455CE9
- Accent glow: #455CE920
- Border: #1a1a1a

## Typography
Space Grotesk (existing). Fluid sizing with clamp(). Hero: 120px desktop / 48px mobile.

## New Dependencies
- gsap (with ScrollTrigger plugin)
- @studio-freight/lenis (smooth scroll)
- split-type (character splitting for text reveals)

## Sections
1. **Hero** — Full viewport, massive split-character name reveal, magnetic CTA button, grain overlay
2. **About Me** — Refined bio, animated stat counters (15+ apps, 3M+ users, 4+ years, 46 repos), parallax profile image
3. **Experience** — Vertical timeline, company logos (Benmore, Lendsqr, Assurdly, Provenier), alternating slide-in
4. **Projects** — 6-8 featured, 3D tilt on hover, tech stack pills, staggered entrance
5. **Skills** — Animated grid + infinite marquee, grouped by category
6. **Contact** — Large CTA text, magnetic social links, gradient animation

## Global Effects
- Magnetic custom cursor (desktop only)
- Lenis smooth scroll
- Scroll progress bar (accent)
- Split-character text reveals on all headings
- Subtle parallax on decorative elements
- Film grain noise overlay
- Mobile: graceful degradation, hamburger overlay, touch-optimized

## Data Sources
- Resume PDF + LinkedIn research for experience details
- Current codebase projects.ts for project data
- GitHub profile for repo count and open source work
- Company websites for logos/branding
