# Contact Page

## Overview
The contact page (`/contact`) serves as the primary inquiry form for all audiences — organizations, institutions, press, and individuals. The form is powered by GoHighLevel (GHL) via an embedded form widget.

## Key Files
- `src/app/(website)/contact/page.tsx` — Contact page with embedded GHL form (client component)
- `src/app/(website)/contact/layout.tsx` — SEO metadata

## Page Sections
```
Hero (eyebrow "CONTACT", H1 "GET IN TOUCH" — Image_26 background)
Two-column layout:
  Left: Contact info + Media/Press email + Headquarters + Individual Learners block
  Right: Embedded GHL inquiry form (iframe)
```

### Hero
- Background: Image_26 (Aaron at correctional facility) at opacity-30
- Eyebrow: "CONTACT"
- H1: "GET IN TOUCH" (gold accent on "TOUCH")
- Subtitle: "Structured Engagement Begins with Clear Alignment"

## Form Integration — GoHighLevel (GHL)

The contact form is an **embedded GHL form widget** loaded via iframe:
- **Form URL:** `https://api.leadconnectorhq.com/widget/form/x1ZdvqzrJf7kyUROy2Es`
- **Location ID:** `44Hvb8BcRFwtgVAzxIpG`
- **Form ID:** `deeR4T7HIQvO5ctkrSfd`

GHL handles all form validation, captcha, submission, and CRM routing. No API keys or server-side code needed.

### GHL Custom Field IDs
| Field ID | Label |
|----------|-------|
| `LkTrGoJOhfarzsppkKLc` | Organization Name |
| `B8g1Ag99YdcgSd4rU2tB` | Title / Role |
| `DATll64T24fHNFfcpNdO` | Program of Interest |
| `kiWUx8JvoRqLyupp3DWb` | Estimated Audience Size |
| `68QArVl7RkYH8xQhBsWu` | Decision-Making Role |
| `wOmRjzP9SAVzRgcETUpX` | Additional Notes |

### GHL Developer Contact
Any changes to the form (button text, consent language, fields) must be made by the GHL developer in the GHL form builder — we cannot modify the iframe content.

## Inquiry Categories (in GHL form)
1. HOST THE ESCAPING THE ODDS DOCUMENTARY – IMPACT SERIES
2. LICENSE THE BOUNCE FORWARD PLAN CURRICULUM
3. EXPLORE VOCATIONAL PATHWAYS
4. INDIVIDUAL LEARNING (BOOKS & COURSES)
5. MEDIA / PRESS
6. GENERAL INQUIRY

## Left Column Content

### Media / Press
- Mail icon with hover effect
- Label: "For interviews, speaking, and press"
- Email: `info@escapetheodds.com`

### Headquarters
- MapPin icon with hover effect
- Location: "CHICAGO, ILLINOIS • USA"

### Individual Learners Block
- Gold-bordered card with BookOpen icon
- Text: "For books and self-paced courses, please visit our learning platform."
- CTA: "EXPLORE INDIVIDUAL LEARNING" → `https://courses.escapetheodds.com/home` (external)

## Changes Log

### March 16, 2026
- Replaced custom form with embedded GHL form widget (iframe)
- Removed server action (`actions.ts`) and GHL webhook integration
- Removed `GHL_WEBHOOK_URL` environment variable — no longer needed
- Individual Learners link updated to external GHL courses platform
- First Name / Last Name split (was Full Name)
- Timeline field removed (not in GHL form)
- City field (was City / State)

### March 9, 2026
- H1 changed: "CONTACT ESCAPE THE ODDS" → "GET IN TOUCH" (eyebrow dedup)
- Audience Size field added
- Individual Learners link updated

## Last Updated
March 16, 2026
