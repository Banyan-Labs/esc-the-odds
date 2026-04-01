# QA: Blog Frontend

**Ticket:** Blog Frontend — Subtasks 12.1–12.4
**Branch:** `feat/blog-frontend`
**Date:** 2026-02-20

---

## Acceptance Criteria

### Blog Landing Page `/blog`
- [ ] Page fetches published posts from Payload CMS
- [ ] Posts display title, excerpt, category, author, published date, and featured image
- [ ] Cards link to `/blog/[slug]` detail page
- [ ] Empty state shown when no posts exist
- [ ] Page renders without JavaScript errors
- [ ] Framer Motion animations work (hero fade-in, card stagger)
- [ ] SEO metadata (title, description) present in page source

### Blog Detail Page `/blog/[slug]`
- [ ] Page fetches single post by slug from Payload
- [ ] Rich text content renders correctly (paragraphs, headings, links)
- [ ] Featured image displayed as hero
- [ ] Category badge, author, and published date shown
- [ ] Back link navigates to `/blog`
- [ ] 404 returned for non-existent slugs
- [ ] Draft posts return 404 (not publicly accessible)
- [ ] SEO metadata uses seo fields with fallback to post title/excerpt/featuredImage

### Error Handling
- [ ] CMS fetch failure on landing page shows empty state (no crash)
- [ ] CMS fetch failure on detail page shows 404 (no crash)
- [ ] Errors logged to server console

---

## Pre-Requisites

1. Docker running with PostgreSQL container (`docker compose up -d`)
2. `npm run dev` running at `http://localhost:3000`
3. At least one published post exists (run `npm run seed` if needed)

---

## Test Cases

### TC-1: Blog landing page shows published posts
**Steps:**
1. Ensure at least one published post exists in Payload admin
2. Navigate to `http://localhost:3000/blog`

**Expected:**
- Published posts appear as cards in a 3-column grid
- Each card shows: featured image, category badge, author name, date, title, excerpt
- "READ ARTICLE" link visible on each card
- Hero section with "THE DISPATCH" heading visible

---

### TC-2: Blog card links to detail page
**Steps:**
1. Navigate to `/blog`
2. Click on a post card

**Expected:**
- Navigates to `/blog/{post-slug}`
- Detail page loads with full post content

---

### TC-3: Blog detail page renders correctly
**Steps:**
1. Navigate to `/blog/{valid-slug}` for a published post

**Expected:**
- Hero image displayed
- Post title in large heading
- Category badge shown
- Author name and published date visible
- Rich text body content rendered as HTML
- "Back to The Dispatch" link at top and bottom

---

### TC-4: Non-existent slug returns 404
**Steps:**
1. Navigate to `http://localhost:3000/blog/this-does-not-exist`

**Expected:**
- Next.js 404 page displayed
- No server crash or error in UI

---

### TC-5: Draft post returns 404
**Steps:**
1. Create a draft post in Payload admin (don't publish)
2. Navigate to `http://localhost:3000/blog/{draft-slug}`

**Expected:**
- 404 page displayed
- Draft post is NOT accessible to public

---

### TC-6: Empty state when no posts exist
**Steps:**
1. Delete all posts from Payload admin (or clear database)
2. Navigate to `http://localhost:3000/blog`

**Expected:**
- Hero section still visible
- Grid area shows "No posts published yet. Check back soon." message

---

### TC-7: SEO metadata on detail page
**Steps:**
1. Create a post with SEO fields filled in (metaTitle, metaDescription)
2. Navigate to `/blog/{slug}`
3. View page source

**Expected:**
- `<title>` uses seo.metaTitle (not post title)
- `<meta name="description">` uses seo.metaDescription (not excerpt)

---

### TC-8: SEO fallback when SEO fields are empty
**Steps:**
1. Create a post with no SEO fields
2. Navigate to `/blog/{slug}`
3. View page source

**Expected:**
- `<title>` uses post title
- `<meta name="description">` uses post excerpt

---

### TC-9: Blog landing page SEO metadata
**Steps:**
1. Navigate to `/blog`
2. View page source

**Expected:**
- `<title>` contains "The Dispatch | Escape The Odds"
- Meta description present
