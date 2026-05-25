# Clip & Code — Website

A premium consulting agency website for **Clip & Code** — a senior software consultancy specializing in enterprise applications, AI systems, data engineering and modern product experiences.

This repository contains the **Next.js 14 + Tailwind + Framer Motion** scaffold with a world-class homepage built out end-to-end. Other routes (Services, Case Studies, About, Contact, Insights, AI & Automation, Enterprise Data Solutions, UI/UX & Product Engineering) are linked via anchors on the homepage today, ready to be promoted into full pages.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom dark design system (ink/accent palette, gradients, glassmorphism, motion utilities)
- **Framer Motion** for scroll-triggered reveals, counters and floating UI
- **lucide-react** for the icon system
- Optimized for SEO, accessibility (skip-link, reduced-motion) and Core Web Vitals

## Run locally

```bash
# Node 18.17+ recommended
npm install
npm run dev
```

Then open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, metadata, nav + footer mount
  page.tsx          # Homepage composition
  globals.css       # Design tokens, utility components, motion
components/
  Navigation.tsx    # Sticky glass nav with mobile drawer
  Hero.tsx          # Animated hero + floating product visual
  TrustedExperience.tsx
  Services.tsx      # 9-card service grid with hover glow
  Industries.tsx
  CaseStudies.tsx   # Storytelling cards w/ metrics + visuals
  WhyUs.tsx         # Differentiators + founder card
  Testimonials.tsx
  CTABanner.tsx     # Discovery-call conversion module
  Footer.tsx
  Counter.tsx
  Logo.tsx
  SectionHeader.tsx
lib/
  utils.ts          # cn() className helper
tailwind.config.ts  # Brand tokens, custom keyframes, gradients
```

## Brand system (at a glance)

- **Primary inks:** `#0B0F19`, `#0F172A`, `#111827`
- **Accents:** `#3B82F6` (blue), `#8B5CF6` (violet), `#06B6D4` (cyan), `#14B8A6` (teal)
- **Type:** Inter (loaded via `next/font`) — display sizes clamp from mobile to desktop
- **Motion:** Framer Motion enter-on-scroll, animated counters, floating dashboard, gradient pan, conic borders

All motion respects `prefers-reduced-motion`.

## Next steps

1. Promote anchor sections to dedicated routes under `app/services/`, `app/case-studies/`, etc. — components are already isolated and reusable.
2. Replace the Calendly placeholder in `CTABanner.tsx` with a real embed.
3. Swap the avatar illustration in `WhyUs.tsx` for a real founder photo.
4. Wire `metadata` URLs to the production domain.
5. Add a `/blog` route fed by MDX or your CMS of choice for the Insights pillar.

---

© Clip & Code — Engineering Digital Growth.
