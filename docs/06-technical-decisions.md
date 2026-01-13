# Escape the Odds: Technical Decisions Log

This document records significant technical decisions, architectural choices, and their rationale.

---

## Decision Log Format

Each entry should include:

- **ID**: Unique identifier (TD-XXX)
- **Date**: When decided
- **Decision**: What was chosen
- **Context**: What problem or question prompted this
- **Alternatives Considered**: What else was evaluated
- **Rationale**: Why this choice was made
- **Consequences**: Expected outcomes (positive and negative)
- **Status**: Proposed | Accepted | Deprecated | Superseded

---

## TD-001: Next.js 16 + Tailwind v4

**Date**: 2026-01-12
**Status**: Accepted

**Decision**: Build the marketing site using Next.js 16 (App Router) and Tailwind CSS v4.

**Context**:

- Need a modern, performant, and easily styled website.
- Need strict adherence to the new design system.

**Alternatives Considered**:

- **Plain HTML/CSS**: Too hard to maintain components.
- **WordPress**: Too heavy, security risks, harder to customize animations.

**Rationale**:

- Next.js provides excellent performance and SEO out of the box.
- Tailwind v4 offers a highly efficient developer experience with the new Oxide engine.
- React components allow for reusability (Navbar, Footer, Hero).

**Consequences**:

- ✅ Fast static build.
- ✅ Easy component management.
- ⚠️ Node.js version requirement strictly v20+ (resolved by upgrading).

---

## TD-002: Upcurve + GoHighLevel for Monentization

**Date**: 2026-01-12
**Status**: Accepted

**Decision**: Use Upcurve for Donations and GoHighLevel (GHL) for Video Gating/Courses.

**Context**:

- Need to accept donations and sell access to the documentary.
- Budget constraint: Minimal custom engineering in Phase 1-2.

**Alternatives Considered**:

- **Custom Stripe Checkout**: Requires significant backend/frontend work.
- **Vimeo OTT**: Expensive and separate ecosystem.

**Rationale**:

- **Upcurve**: Client's preferred donation platform, simple link integration.
- **GHL**: Client likely already uses it (or comparable CRM). It has native video gating and membership features that handle auth and payments without custom code.

**Consequences**:

- ✅ drastically reduced engineering effort.
- ✅ secure off-site handling of payments.
- ⚠️ User leaves the marketing site domain to pay (tradeoff accepted for simplicity).
