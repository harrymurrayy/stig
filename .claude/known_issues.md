---
name: known-issues
description: Identified issues with the codebase as of May 2026
metadata: 
  node_type: memory
  type: project
  originSessionId: 8e1590c2-9237-4ea4-b192-b3abe6455428
---

## Critical — Non-functional
1. **Contact form doesn't submit** — `ContactForm.tsx:60` fakes submission, `email` prop unused, no API call.
2. **Donate button is dead** — `Donate.tsx:99` button has no handler; placeholder text "Stripe / GoCardless integration to follow" is live.
3. **Social links go nowhere** — `Footer.tsx:32-40` all use `href="#"`.
4. **Placeholder charity number is live** — `Footer.tsx:46`: "Registered Charity [number TBC]" showing on deployed site.

## Architectural — Wrong approach
5. **Tailwind not used** — Entire site is custom CSS in `globals.css`. Only `@import "tailwindcss"` exists. Every component uses hand-written class names. Major issue — needs full migration to Tailwind utilities.
6. **Plain `<a>` tags instead of Next.js `<Link>`** — Nav, Footer, Involved etc. all use bare anchors. Full page reloads, no prefetching.
7. **`<img>` instead of Next.js `<Image>`** — `Logo.tsx:11` and `Logo.tsx:29`. Missing optimisation, lazy loading, WebP.

## Code Quality
8. **Logo.tsx duplicates JSX** — footer/non-footer variants are identical except `href`.
9. **`role="dialog"` on mobile nav** — `Nav.tsx:57` is wrong; should be `<nav>` or nothing.
10. **`turbopack.root: process.cwd()`** — `next.config.ts:5` is unnecessary default.
11. **Email domain mismatch** — components use `@stiginitiative.org` but site is at `thestigfoundation.com`.

**Why:** Caught during initial codebase audit, May 2026.
**How to apply:** Reference when planning work; don't introduce new custom CSS classes — use Tailwind utilities. Tick off issues as they're resolved.
