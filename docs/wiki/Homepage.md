# Homepage

## Overview
The homepage is composed of section components rendered in sequence. The page itself (`src/app/(website)/page.tsx`) is a **server component** that exports metadata. Individual section components are client components using Framer Motion for animations and Lucide React for icons.

## Section Order
1. **Navbar** — `src/components/Navbar.tsx` (active page highlighted in gold)
2. **Hero** — `src/components/Hero.tsx` (image carousel with CTAs, logo displayed)
3. **TheFilm** — `src/components/sections/TheFilm.tsx` (film intro with video player + "Share the Trailer" button)
4. **AwarenessToImplementation** — `src/components/sections/AwarenessToImplementation.tsx` (transition section)
5. **TheExperience** — `src/components/sections/TheExperience.tsx` (3-step: Mirror, Inquiry, Map)
6. **Ecosystem** — `src/components/sections/Ecosystem.tsx` (3 engagement cards with mobile image positioning)
7. **Testimonials** — `src/components/sections/Testimonials.tsx` (featured testimonial + 6 quotes)
8. **TargetAudience** — `src/components/sections/TargetAudience.tsx` (Correctional, Workforce, Community)
9. **ContactCTA** — `src/components/sections/ContactCTA.tsx` (CTA with logo)
10. **Footer** — `src/components/Footer.tsx`

## Navigation
```
HOME → /
THE FILM EXPERIENCE → /film
PROGRAMS → /programs
FOR ORGANIZATIONS → /organizations
ABOUT → /about
TESTIMONIALS → /#testimonials
BLOG → /blog
CONTACT → /contact
CTA: HOST THE FILM → /contact
```
- Flat nav, no dropdowns
- Active page highlighted in gold via `usePathname()`
- Hash links (Testimonials) do not show active state

## Key Sections

### Hero (`Hero.tsx`)
- Image carousel: COOKCOUNTY-SHERIFF-PIC.png, Image_4, Image_10, Image_19, Image_5, Image_7
- AnimatePresence for slide transitions
- H1: "ESCAPING THE ODDS OF RECIDIVISM"
- Logo displayed in hero section

### TheFilm (`sections/TheFilm.tsx`)
- Film preview section with anchor `id="the-film"`
- Working video player for trailer
- **"Share the Trailer" button** — gold/bold styling (`border-2 border-gold bg-gold/10 text-gold font-bold hover:bg-gold hover:text-black`)
- Uses `navigator.share` API with clipboard fallback
- Share URL points to `/#the-film` (homepage film section)

### TheExperience (`sections/TheExperience.tsx`)
Eyebrow: "HOW IT WORKS", H2: "THE EXPERIENCE"
| Card | Image | Description |
|------|-------|-------------|
| The Mirror (Film) | Image_26.jpeg | Documentary experience |
| The Inquiry (Dialogue) | AaronSpeaking.png (position: center 15%) | Panel dialogue — Aaron speaking at podium |
| The Map (Curriculum) | IMG_1830.JPG (position: 40% 20%) | Aaron teaching in front of class |

### Ecosystem (`sections/Ecosystem.tsx`)
Eyebrow: "OUR OFFERINGS", H2: "ENGAGE WITH US"
| Card | Image | Link |
|------|-------|------|
| Impact Series | IMG_1826.JPG | `/film` |
| Curriculum | Image_9.jpeg | `/contact` |
| Vocational Pathways | IMG_1825.JPG | `/programs` |

- Supports `mobileImagePosition` via inline `<style>` tag with media query for responsive `object-position` overrides
- Film card uses `mobileImagePosition: "center 35%"` to prevent head cutoff on mobile

### Testimonials (`sections/Testimonials.tsx`)
- **Featured testimonial:** Kwante W. (Program Graduate, California) — full-width card with truck image (Image_12) on left, gold border, larger text
- 6 additional quotes in 3-column grid below
- Sources: Carl C. (Box Truck), An Arizona Correctional Facility Participant (Box Truck), Charles S. (House Hacking), Londell H. (Financial Empowerment), A Mississippi Correctional Facility Participant (Box Truck), A Tennessee Correctional Facility Participant (Box Truck)
- Background: Image_12.jpeg (also used as featured testimonial image)
- Data: `src/lib/constants/home.ts` — `Testimonial` interface includes `featured`, `image` optional fields

### TargetAudience (`sections/TargetAudience.tsx`)
- Background: Image_14
- 3 audience cards: Correctional Systems, Workforce & Employers, Community & Reentry Partners

## Universal Open Graph Image
- `src/app/(website)/opengraph-image.tsx` generates a dynamic OG image for all pages
- Uses Next.js `ImageResponse` API — black background, gold accent lines, centered logo, "ESCAPE THE ODDS" title, gold tagline
- Logo loaded from `public/assets/logo-notxt.png` and converted to base64
- Size: 1200×630px, PNG format
- Per-page layout files defer to this universal image (no `images` in openGraph/twitter metadata)

## Footer
Links: INSTITUTIONAL PARTNERS (`/organizations`), BLOG (`/blog`), CONTACT (`/contact`)
Social: INSTAGRAM (`@escapetheoddsmedia`), LINKEDIN (`/company/escaping-the-odds-media/`)

## Homepage Images (all unique on page)
carousel (COOKCOUNTY-SHERIFF-PIC.png, Image_4, Image_10, Image_19, Image_5, Image_7), Image_26.jpeg (The Mirror), AaronSpeaking.png (The Inquiry), IMG_1830.JPG (The Map), IMG_1826.JPG (Ecosystem: Impact Series), Image_9.jpeg (Ecosystem: Curriculum), IMG_1825.JPG (Ecosystem: Vocational), Image_12.jpeg (Testimonials background + featured), Image_14 (TargetAudience background), logo-notxt.png (ContactCTA)

## Last Updated
March 19, 2026
