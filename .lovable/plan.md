# Paisa.ai site — build in-app with the 4 requested changes

The uploaded folder is a 5-page static site (index, how-it-works, use-cases, trust, company) with one shared stylesheet, one JS file and a logo. The current project is still the blank starter, so step one is porting the site into the app as real routes, then applying your four changes.

## 1. Port the site

- `/` → home, `/how-it-works`, `/use-cases`, `/trust`, `/team` (was company).
- Shared header/footer/theme-toggle become a layout in the root route; the interactive bits (hero step ticker, payment lifecycle player with Sequence/Lifecycle tabs, reveal-on-scroll) become React state instead of the inline scripts.
- The stylesheet becomes the design system (its colours, gradients, glass cards and mono/display type carried over as tokens) so the look is unchanged.
- The logo is registered as a hosted asset rather than committed as a binary.

## 2. "Company" → "Team"

Nav link, mobile menu, footer link, page heading, page title/description and the URL all become Team.

## 3. Zoom: ship at ~75% and treat that as 100%

Global type/spacing scale is reduced to ~0.75 of current by scaling the root font size and converting the fixed pixel sizes in the stylesheet to rem-based values, so at browser 100% the page reads like today's 75% view. Container max-width is widened slightly so the smaller type does not leave over-long line lengths, and mobile breakpoints are re-checked at the new scale. Nothing is done with CSS `zoom` or transform hacks — those break layout and accessibility.

## 4. Trim repetition and text weight

Confirmed repeats across the pages:

- The "Detect → Decide → Authorise → Pay → Prove" chain appears on home (hero card + signature strip), how-it-works (hero, lifecycle, again in the tabs) and use-cases ("the common pattern"). Keep it once as a visual on home and once as the lifecycle on how-it-works; drop the prose restatements.
- "Authority, not access" / "grant, enforce and audit bounded financial authority" appears in the home hero card, section 02, section 03 and again on trust. Keep the hero card and the trust pillar; cut the middle two paragraphs down to a single line.
- "₹5,000 / month, ₹2,000 per purchase, Groceries, 30 days" mandate block is shown twice on home and again on use-cases — keep it in the home hero card only.
- Home section 01 (three cards: capability / decision / barrier) restates the hero lead — compress to a single short strip.
- Two-rail "UPI funding + card execution" explanation appears on home, how-it-works and trust — full version stays on trust, the others get a one-line pointer.
- use-cases industrial cards repeat the same "detect → order → check → pay" sentence three times — reduce each card to a title, one sentence and the flow strip.

Overall target: roughly 35–40% less body copy, with leads capped at ~2 sentences and no paragraph repeating a claim already made on the same page.

## 5. Hero headline

Home H1 becomes **"Payment Infrastructure for Autonomous Agents."** The kicker above it currently says the same sentence, so it changes to a short qualifier ("Bounded authority for machine-initiated payments") to avoid an immediate duplicate.

## Technical notes

- TanStack Start file routes under `src/routes`; tokens in `src/styles.css`; per-route `head()` with unique title/description/OG tags.
- Lifecycle player state (9 events, 4 actors, play/pause/step, failure paths) reimplemented as a typed React component with the event list in a data file.
- Dark/light toggle preserved, reading stored preference after hydration.
