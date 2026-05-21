---
name: known-issues
description: Identified issues with the codebase as of May 2026
metadata: 
  node_type: memory
  type: project
  originSessionId: 8e1590c2-9237-4ea4-b192-b3abe6455428
---

## Critical — Non-functional (pending)
1. **Contact form doesn't submit** — `ContactForm.tsx` fakes submission, no API call wired up.
2. **Donate button is dead** — `Donate.tsx` button has no handler; placeholder text "Stripe / GoCardless integration to follow" is live.
3. **Social links go nowhere** — `Footer.tsx` all social links use `href="#"`.
4. **Placeholder charity number is live** — `Footer.tsx`: "Registered Charity [number TBC]" showing on deployed site.

## Resolved (feat/tailwind-migration, commit cca89f5)
- ~~5. Tailwind not used~~ — Full migration to Tailwind v4 utilities done; `globals.css` stripped to `@theme` tokens + `@utility container` only.
- ~~6. Plain `<a>` tags~~ — All internal links now use Next.js `<Link>`.
- ~~7. `<img>` instead of `<Image>`~~ — `Logo.tsx` updated to use `next/image`.
- ~~8. Logo.tsx JSX duplication~~ — Unified to single component with `footer` prop.
- ~~9. `role="dialog"` on mobile nav~~ — Fixed in Nav rewrite.
- ~~10. Turbopack config~~ — Removed from `next.config.ts`.
- ~~11. Email domain mismatch~~ — All components updated to `thestigfoundation.com`.
- ~~Button white text~~ — Removed unlayered `a { color: inherit }` / `button { font: inherit }` from globals.
- ~~About lede too large~~ — Fixed to `text-[22px]`.
- ~~Card arrow icons~~ — Removed from Involved cards.

**Why:** Caught during initial codebase audit, May 2026.
**How to apply:** Reference when planning work; don't introduce new custom CSS classes — use Tailwind utilities. Items 1–4 are the remaining gaps before site is production-ready.
