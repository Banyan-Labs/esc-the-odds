# Development Setup

## Prerequisites
- Node.js 18.20.2+ or 20.9.0+
- Docker & Docker Compose
- npm

## Getting Started

1. **Clone and install:**
   ```bash
   git clone git@github-banyan:rblaylock-banyanlabs/esc-the-odds.git
   cd esc-the-odds
   npm install
   ```

2. **Set up environment variables:**
   Create `.env.local` with:
   ```
   DATABASE_URI=postgresql://postgres:postgres@localhost:5432/esc_the_odds
   PAYLOAD_SECRET=<your-secret-here>
   ```

   > **Note:** The project uses `.env` for production (Firebase deploy includes it via the `"!.env"` exception in `firebase.json`). For local development, use `.env.local` which takes precedence over `.env` per Next.js conventions.

3. **Start PostgreSQL:**
   ```bash
   docker compose up -d
   ```

4. **Start dev server:**
   ```bash
   npm run dev
   ```

5. **Seed the database (optional):**
   ```bash
   npm run seed
   ```
   This starts the dev server with `SEED_DB=true`. On first request, it creates an admin user (`admin@escapetheodds.com` / `password`) and 2 demo posts. Press Ctrl+C after you see `[seed] Complete`.

   > **Note:** The seed script is for **local development only**. Production has its own admin user configured separately.

6. **Or create admin user manually:**
   - Visit `http://localhost:3000/admin`
   - The first user created automatically gets the admin role

## Common Commands

| Command | Description |
|---------|------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run seed` | Seed database with demo content |
| `make seed` | Same as above (Makefile shorthand) |
| `npx tsc --noEmit` | TypeScript type check |
| `docker compose up -d` | Start PostgreSQL container |
| `docker compose down` | Stop PostgreSQL container |

## Troubleshooting

### `.next` cache corruption
If you see `routes-manifest.json` errors or stale module errors:
```bash
rm -rf .next node_modules/.cache
npm run dev
```

### Reset admin user
```bash
docker exec eto-postgres psql -U postgres -d esc_the_odds -c "DELETE FROM users;"
```
Then visit `/admin` to create a new admin user.
