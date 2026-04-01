# QA: Payload CMS Admin Roles

**Ticket:** Payload CMS Setup — Subtask 1: Initialize Payload project and admin user/roles
**Branch:** `feat/payload-cms-setup`
**Date:** 2026-02-20

---

## Acceptance Criteria

- [ ] Two roles exist: **admin** and **editor**
- [ ] Admin can create/edit/delete posts, media, and users
- [ ] Editor can create/edit posts and media but **cannot** delete them
- [ ] Editor **cannot** see or manage the Users collection
- [ ] First user created via onboarding is automatically assigned the admin role
- [ ] Subsequent users default to the editor role
- [ ] Auth session/cookies work correctly (login persists, logout clears session)

---

## Pre-Requisites

1. Docker running with PostgreSQL container (`docker compose up -d`)
2. `npm run dev` running at `http://localhost:3000`
3. Empty users table (fresh state) — run if needed:
   ```bash
   docker exec eto-postgres psql -U postgres -d esc_the_odds -c "DELETE FROM users;"
   ```

---

## Test Cases

### TC-1: First user gets admin role
**Steps:**
1. Ensure no users exist (see pre-requisites)
2. Navigate to `http://localhost:3000/admin`
3. Payload should show the "Create First User" onboarding screen
4. Fill in email and password, submit

**Expected:**
- User is created and logged in
- User has the **admin** role (visible in account page or by checking the database)
- Users collection is visible in the admin sidebar

---

### TC-2: Admin can create an editor user
**Steps:**
1. Log in as the admin user from TC-1
2. Navigate to Users collection in the sidebar
3. Click "Create New"
4. Fill in email and password
5. Set role to **Editor**
6. Save

**Expected:**
- New user is created with editor role
- User appears in the Users list

---

### TC-3: Editor cannot see Users collection
**Steps:**
1. Log out of admin account (`/admin/logout`)
2. Log in as the editor user created in TC-2

**Expected:**
- Admin sidebar does **not** show the Users collection
- Navigating directly to `/admin/collections/users` shows only the editor's own record (not the admin or other users)

---

### TC-4: Editor can create and edit posts
**Steps:**
1. While logged in as editor, navigate to Posts collection
2. Click "Create New"
3. Fill in all required fields (title, slug, featured image, excerpt, content, category, author)
4. Save the post
5. Edit the post title and save again

**Expected:**
- Post is created successfully
- Post can be edited and saved

---

### TC-5: Editor can create and edit media
**Steps:**
1. While logged in as editor, navigate to Media collection
2. Upload an image with alt text
3. Edit the alt text and save

**Expected:**
- Media item is created successfully
- Media item can be edited

---

### TC-6: Editor cannot delete posts or media
**Steps:**
1. While logged in as editor, open a post
2. Attempt to delete it
3. Open a media item
4. Attempt to delete it

**Expected:**
- Delete option is not available or returns an error/forbidden response

---

### TC-7: Admin has full CRUD on all collections
**Steps:**
1. Log out and log back in as admin
2. Create, edit, and delete a post
3. Create, edit, and delete a media item
4. Edit and delete a user

**Expected:**
- All operations succeed without errors

---

### TC-8: Editor can only update their own user profile
**Steps:**
1. Log in as editor
2. Navigate to account page (click avatar in sidebar)
3. Update email or password
4. Attempt to access another user's record via direct URL (e.g., `/admin/collections/users/{admin-id}`)

**Expected:**
- Editor can update their own profile
- Accessing another user's record returns not found or forbidden

---

### TC-9: Auth session behavior
**Steps:**
1. Log in as admin
2. Close the browser tab (don't log out)
3. Reopen `http://localhost:3000/admin`
4. Navigate to `/admin/logout`
5. Attempt to access `/admin/collections/posts`

**Expected:**
- Session persists after closing/reopening tab (user stays logged in)
- After logout, user is redirected to login screen
- Accessing protected routes after logout redirects to login
