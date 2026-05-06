@AGENTS.md

# M Berglund Inc. — Project Reference

## Overview
Marketing/contact website for M Berglund Inc., a specialist legal cost consultant and taxation attorney practice in Pretoria, South Africa. Director: Mia Poggenpoel (LPC No. 73001). Phone: 084 604 5555. Email: mia@mberglundcosts.co.za.

## Stack
- **Framework:** Next.js App Router — read `node_modules/next/dist/docs/` before writing Next.js-specific code
- **Styling:** Tailwind CSS v4 — uses `@import "tailwindcss"` and `@theme inline` (not `tailwind.config.js`)
- **Fonts:** Inter (sans) + Playfair Display (serif) via `next/font/google`, injected as CSS variables
- **Language:** TypeScript

## Design System
- **Backgrounds:** White (`#FFFFFF`) primary; light gray (`#F8F9FA`) for alternating sections
- **Separators:** `border-[#E0E0E0]` lines only — no dark/black background banners
- **Text:** `#0A0A0A` primary, `#6B6B6B` muted/secondary
- **Accent:** `#1D4ED8` (blue) — CTAs, active nav state, blockquote borders, tags
- **Headings font:** Playfair Display — globals.css applies it to `h1, h2, h3` globally; no need for inline `style={{ fontFamily }}` on those elements
- **Body font:** Inter

## Pages & Structure
| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero, about snippet, services teaser, CTA |
| `/about` | `app/about/page.tsx` | Mia profile with photo, values grid |
| `/services` | `app/services/page.tsx` | 6-service grid, coverage area |
| `/contact` | `app/contact/page.tsx` | Enquiry form + Google Maps embed |

## Components
- `Navbar` — white sticky header, `border-b border-[#E0E0E0]`, blue underline for active route
- `Footer` — `#F8F9FA` bg with `border-t border-[#E0E0E0]`
- `ServiceCard` — white card; rendered in grid using `gap-px bg-[#E0E0E0]` for hairline dividers
- `SectionHeader` — label / title / subtitle; `light` prop is vestigial (no dark sections remain)
- `ContactForm` — `"use client"` enquiry form

## External Assets
- Firm photos hosted at `www.attorneys.co.za/ImageUploads/` — allowed via `remotePatterns` in `next.config.ts`
  - Pic1 (profile/office): `M-Berglund-Inc-Pretoria-Pic1-ab05ec.jpg`
  - Pic2: `M-Berglund-Inc---Cost-Consultant--Taxation-Specialist-Pretoria-Pic2-a5242f.jpg`
  - Pic3: `M-Berglund-Inc---Cost-Consultant--Taxation-Specialist-Pretoria-Pic3-e48bc0.jpg`
- Google Maps embed (no API key required): `https://maps.google.com/maps?q=-25.7865,28.2819&z=16&output=embed`

## Layout Conventions
- Max content width: `max-w-6xl mx-auto px-6`
- Standard section padding: `py-20`; compact (CTA rows): `py-16`
- Uppercase eyebrow labels: `text-xs uppercase tracking-[0.2em] text-[#6B6B6B]`
- Page hero headers: white bg, `border-b border-[#E0E0E0]`, black text
- Primary buttons: `bg-[#1D4ED8] text-white hover:bg-[#1e40af]`
- Ghost buttons: `border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white`
