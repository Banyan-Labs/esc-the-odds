.PHONY: dev db-up db-stop db-logs db-shell seed help

# Default target
help:
	@echo "Available commands:"
	@echo "  make dev      - Start local development server"
	@echo "  make db-up    - Start local PostgreSQL in Docker"
	@echo "  make db-stop  - Stop local PostgreSQL"
	@echo "  make db-logs  - View database logs"
	@echo "  make db-shell - Enter database shell"
	@echo "  make seed     - Seed database with demo content"

# Start development environment
dev:
	npm run dev

# Database management
db-up:
	docker compose up -d

db-stop:
	docker compose stop

db-logs:
	docker compose logs -f db

db-shell:
	docker exec -it eto-postgres psql -U postgres -d esc_the_odds

# Seed database with demo content
seed:
	npm run seed
