# QA: Payload Database & Seed Script

**Ticket:** Payload CMS Setup — Subtask 2: Configure database for Payload
**Branch:** `feat/payload-cms-setup`
**Date:** 2026-02-20

---

## Acceptance Criteria

- [ ] PostgreSQL database configured for local dev (Docker) and production (Cloud SQL)
- [ ] CRUD operations work through Payload admin panel
- [ ] Seed script creates admin user and at least 2 demo posts
- [ ] Seed is idempotent (running again skips if data exists)

---

## Pre-Requisites

1. Docker running with PostgreSQL container (`docker compose up -d`)
2. `.env.local` configured with `DATABASE_URI` and `PAYLOAD_SECRET`

---

## Test Cases

### TC-1: Seed creates admin user and 2 demo posts
**Steps:**
1. Clear the database:
   ```bash
   docker exec eto-postgres psql -U postgres -d esc_the_odds -c "DELETE FROM posts; DELETE FROM media; DELETE FROM users;"
   ```
2. Run the seed:
   ```bash
   npm run seed
   ```
3. Wait for `[seed] Complete` message, then hit Ctrl+C to stop the server

**Expected:**
- Console shows: `[seed] Creating admin user...`, `[seed] Admin user created: admin@esctheodds.com`
- Console shows upload and creation of 2 posts
- Console shows `[seed] Complete — 2 demo posts created.`

---

### TC-2: Seed is idempotent
**Steps:**
1. With data already seeded from TC-1, run seed again:
   ```bash
   npm run seed
   ```
2. Wait for Payload to initialize (make a request to `/api/users/me` if needed)

**Expected:**
- Console shows `[seed] Skipped — 2 post(s) already exist.`
- No duplicate data created

---

### TC-3: Seeded admin user can log in
**Steps:**
1. Start the dev server: `npm run dev`
2. Navigate to `http://localhost:3000/admin`
3. Log in with:
   - Email: `admin@esctheodds.com`
   - Password: `password`

**Expected:**
- Login succeeds
- Admin panel loads with Users, Posts, and Media collections visible

---

### TC-4: Seeded posts appear in admin panel
**Steps:**
1. While logged in as admin, navigate to Posts collection

**Expected:**
- 2 posts visible:
  - "The Power of Mindset in Reentry" (category: Mindset)
  - "Building a Business After Incarceration" (category: Business)
- Each post has a featured image, excerpt, content, and author assigned

---

### TC-5: Seeded media items appear
**Steps:**
1. Navigate to Media collection

**Expected:**
- 2 media items with alt text:
  - "Person looking forward toward a bright horizon, symbolizing a fresh start"
  - "Entrepreneur working at a desk, planning their next business move"

---

### TC-6: CRUD operations work on seeded data
**Steps:**
1. Edit "The Power of Mindset in Reentry" — change the title
2. Save the post
3. Create a new post with all required fields
4. Delete the new post (as admin)

**Expected:**
- Edit saves successfully
- New post creates successfully
- Delete succeeds

---

### TC-7: Normal dev server does not seed
**Steps:**
1. Clear the database (see TC-1 step 1)
2. Start normal dev server: `npm run dev` (without SEED_DB)
3. Make a request to trigger Payload init

**Expected:**
- No seed output in console
- Database remains empty (no auto-seeding)

---

## Seed Command Reference

| Command | Description |
|---------|------------|
| `npm run seed` | Start dev server with seeding enabled |
| `make seed` | Same as above (Makefile shorthand) |

**Note:** The seed runs via Payload's `onInit` hook when `SEED_DB=true`. The dev server starts and seeds on first request, then continues running. Press Ctrl+C to stop after seeding completes.
