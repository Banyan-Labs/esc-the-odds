---
name: docs-only-no-code
description: When user says they're updating docs, do not touch source code — only edit documentation files
type: feedback
---

When the user asks to fix/update documents before pushing, only edit files in `docs/` and other documentation. Do not modify source code files (`.tsx`, `.ts`, etc.) unless explicitly asked.

**Why:** The website is a completed, signed-off, paid project. Code changes are not welcome during doc cleanup passes.

**How to apply:** If a doc review reveals code issues (e.g., stale text in a component), note it but don't edit the code. Only fix the docs themselves.
