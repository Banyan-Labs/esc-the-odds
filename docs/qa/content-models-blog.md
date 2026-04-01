# QA: Content Models (Blog)

**Ticket:** Content Models (Blog) — Subtasks 10.1 + 10.2
**Branch:** `feat/content-models-blog`
**Date:** 2026-02-20

---

## Acceptance Criteria

### Publishing Workflow
- [ ] Posts collection includes: title, slug, excerpt, featuredImage, content, author, status (draft/published)
- [ ] Slug auto-generates from title when left blank
- [ ] Slug remains editable after auto-generation
- [ ] `publishedAt` auto-set when post is published
- [ ] `publishedAt` cleared when post reverts to draft
- [ ] Only published posts returned by public API queries
- [ ] Admin panel shows "Save Draft" and "Publish" buttons

### SEO Fields
- [ ] `metaTitle`, `metaDescription`, `ogImage` fields present in SEO group
- [ ] All SEO fields are optional
- [ ] SEO group is collapsible in admin

---

## Pre-Requisites

1. Docker running with PostgreSQL container (`docker compose up -d`)
2. `npm run dev` running at `http://localhost:3000`

---

## Test Cases

### TC-1: Draft and publish workflow
**Steps:**
1. Log in as admin at `/admin`
2. Navigate to Posts → Create New
3. Fill in required fields (title, slug, featured image, excerpt, content, category, author)
4. Click "Save Draft"
5. Verify post is saved with status "Draft"
6. Click "Publish"

**Expected:**
- Post status changes to "Published"
- `publishedAt` field in sidebar shows current date/time
- Admin panel list shows `_status` column

---

### TC-2: Auto-slug generation
**Steps:**
1. Create a new post
2. Enter title: "My First Blog Post"
3. Leave the slug field empty
4. Save the post

**Expected:**
- Slug auto-populates with `my-first-blog-post`
- Slug field is editable after auto-generation

---

### TC-3: Slug remains when manually set
**Steps:**
1. Create a new post
2. Enter title: "Another Post Title"
3. Manually set slug to: `custom-slug-here`
4. Save the post

**Expected:**
- Slug remains `custom-slug-here` (not overwritten by auto-generation)

---

### TC-4: Public API only returns published posts
**Steps:**
1. Create one draft post and one published post
2. Open browser: `http://localhost:3000/api/posts`

**Expected:**
- Only the published post appears in the response
- Draft post is not included

---

### TC-5: Authenticated API returns drafts
**Steps:**
1. While logged in as admin, open: `http://localhost:3000/api/posts?draft=true`

**Expected:**
- Both draft and published posts appear

---

### TC-6: publishedAt clears on revert to draft
**Steps:**
1. Open a published post
2. Change status back to "Draft" and save

**Expected:**
- `publishedAt` field is cleared (null/empty)

---

### TC-7: SEO fields present and optional
**Steps:**
1. Create or edit a post
2. Scroll to the SEO field group
3. Leave all SEO fields empty
4. Save the post

**Expected:**
- SEO group is visible with `metaTitle`, `metaDescription`, `ogImage` fields
- Post saves successfully with empty SEO fields
- SEO group shows helpful description text

---

### TC-8: SEO fields accept values
**Steps:**
1. Edit a post
2. Fill in:
   - metaTitle: "Custom SEO Title"
   - metaDescription: "Custom description for search engines"
   - ogImage: upload an image
3. Save the post

**Expected:**
- All SEO fields save correctly
- Values persist after page reload

---

### TC-9: Seed script creates published posts
**Steps:**
1. Clear database:
   ```bash
   docker exec eto-postgres psql -U postgres -d esc_the_odds -c "DROP TABLE IF EXISTS _posts_v; DELETE FROM posts; DELETE FROM media; DELETE FROM users;"
   ```
2. Run seed: `npm run seed`
3. Wait for `[seed] Complete`, make a request to trigger init

**Expected:**
- 2 demo posts created with `_status: published`
- `publishedAt` populated on both posts
- Posts visible in public API (`/api/posts`)
