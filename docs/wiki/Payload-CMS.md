# Payload CMS

## Overview
Payload CMS 3.77.0 is integrated as a Next.js route group at `src/app/(payload)/`. It provides the admin panel at `/admin` and REST API at `/api`.

## Collections

### Users
- **Auth enabled** — handles login, registration, session management
- **Roles:** `admin`, `editor` (multi-select field)
- **First user hook:** The `beforeChange` hook automatically assigns the admin role to the first user created
- **Admin panel visibility:** Users collection is hidden from editors in the sidebar
- **Access:** Editors can only read/update their own profile. Admins have full CRUD.

### Posts
- **Fields:** title, slug, featured image (upload), excerpt, content (rich text), category, author (relationship to users), publishedAt
- **Categories:** Mindset, Business, Courses, Lifestyle
- **Access:** Public read (published only). Editors can create/edit all posts. Only admins can delete.
- **Publishing workflow:** Payload's built-in drafts system (`versions: { drafts: true }`)
  - Admin panel shows "Save Draft" and "Publish" buttons
  - `publishedAt` auto-set on publish, cleared on revert to draft
  - Public API (`/api/posts`) returns only published posts by default
  - Add `?draft=true` (authenticated) to include drafts
- **Auto-slug:** If slug is left blank, it auto-generates from the title
- **SEO fields** (optional group): `metaTitle`, `metaDescription`, `ogImage`
  - Falls back to post title, excerpt, and featured image when blank
  - Used by blog detail page `generateMetadata` — see [Blog](./Blog.md)

### Media
- **Upload enabled** with required alt text
- **Access:** Public read. Editors can create/edit. Only admins can delete.

## Access Control
All access control helpers are centralized in `src/payload/access/index.ts`. Collections import from this module rather than defining inline functions.

## Admin Panel
- **URL:** `/admin`
- **Logout:** `/admin/logout` or click avatar in sidebar → account page → Logout button
- **Onboarding:** When no users exist, visiting `/admin` shows the "Create First User" screen

## Database
- **Local:** PostgreSQL 15 via Docker (`docker-compose.yml`)
- **Production:** Cloud SQL (PostgreSQL) via Cloud Functions (2nd Gen)
- **Connection:** `DATABASE_URI` environment variable

## Seed Script
The seed script creates demo content for **local development only**. Production has its own admin user configured separately. It runs via Payload's `onInit` hook when `SEED_DB=true`.

**Usage:**
```bash
npm run seed    # or: make seed
```

**What it creates:**
- 1 admin user (`admin@escapetheodds.com` / `password`)
- 2 demo posts with featured images:
  - "The Power of Mindset in Reentry" (Mindset category)
  - "Building a Business After Incarceration" (Business category)
- 2 placeholder media items

**Behavior:**
- Idempotent — skips if posts already exist
- Creates admin user only if no users exist, otherwise uses the first existing user
- Runs on first request after server starts, then the server continues normally

**Files:**
- `src/payload/seed/index.ts` — seed function
- `src/payload/seed/placeholder-1.jpg` / `placeholder-2.jpg` — placeholder images
- `payload.config.ts` — `onInit` hook that triggers seed when `SEED_DB=true`
