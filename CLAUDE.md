# Palm Design System

A React component library with a rolodex-style component browser, hosted on GitHub Pages, with full Figma integration.

---

## The Ethos

> **Classical efficiency and functional beauty.** Every pixel, every prop, every interaction is deliberate. Nothing is added because it looks interesting. Nothing is left unfinished because it won't be noticed. The UI carries the ethos — if someone uses Palm and feels that it simply *works*, with no friction, no confusion, no waste, we have succeeded.

This is not a style guide. It is a standard of care.

Details are not a finishing step — they are the work. A misaligned label, an inconsistent focus ring, a timing curve that's 50ms too slow: these are not small things. They are the difference between a tool that earns trust and one that quietly erodes it.

**When in doubt, do less, but do it perfectly.**

---

## Project Goals

1. **React component library** — TypeScript + Vite, production-quality components
2. **Rolodex browser** — local dev server styled as a physical rolodex card file, components in A–Z alphabetical order
3. **GitHub hosted** — source on GitHub, deployed to GitHub Pages via GitHub Actions
4. **Figma linked** — every component mirrored in a Figma library, connected via Figma Code Connect
5. **Dieter Rams principles** — the design philosophy that governs every decision (see below)

---

## Design Philosophy: Dieter Rams Applied

Every component, token, and UI decision must pass this lens:

| Principle | How it applies to Palm |
|---|---|
| **1 — Innovative** | Use modern React patterns (compound components, CSS custom properties) — innovation in service of usability, not novelty |
| **2 — Useful** | Every component solves a real need. No decorative-only components. Props expose only what users actually need |
| **3 — Aesthetic** | Rigorous typography, 8pt grid, intentional colour palette. Beauty emerges from precision, not decoration |
| **4 — Understandable** | Component APIs are self-documenting. Prop names explain intent. The rolodex browser makes the library instantly navigable |
| **5 — Unobtrusive** | Components are neutral canvases. They serve content, not themselves. Minimal chrome, generous whitespace |
| **6 — Honest** | No fake shadows implying depth that isn't there. No hover states promising interaction that isn't available |
| **7 — Long-lasting** | Avoid trendy visual treatments. Design tokens over hardcoded values. No CSS frameworks that will go stale |
| **8 — Thorough** | Every component ships with: all states (default, hover, focus, disabled, error), all responsive breakpoints, all a11y attributes |
| **9 — Environmentally friendly** | No unnecessary dependencies. Optimised bundle. Semantic HTML. WCAG 2.1 AA accessible |
| **10 — As little as possible** | Before adding any variant, ask: is this essential? Prefer composability over proliferating props |

**The ruling principle:** Function makes it beautiful. If it works perfectly, it looks perfect.

### Detail Obsession Checklist

Before any component, screen, or token is considered done, verify:

**Typography**
- [ ] Line-height checked at every font size — no collisions, no excess air
- [ ] Letter-spacing correct for all-caps labels (tracked out ~0.08em)
- [ ] Optical size: heading weights heavier than body, never the reverse
- [ ] No orphaned single words on wrapped lines in docs/descriptions

**Spacing**
- [ ] Every value comes from the 8pt grid — no magic numbers
- [ ] Padding is asymmetric only when there is a visual reason (e.g. icon offset)
- [ ] Components don't own their own external margin — that's the layout's job

**Colour**
- [ ] Contrast ratios checked: 4.5:1 minimum for body text, 3:1 for large text and UI elements
- [ ] No pure black (#000) or pure white (#fff) — use ink/paper tokens
- [ ] Accent colour used for one thing: primary action. Not decoration.
- [ ] All states (hover, focus, active, disabled) have visually distinct, token-based colours

**Interaction**
- [ ] Focus ring visible on keyboard navigation for every interactive element
- [ ] Hover states don't move content (no layout shift)
- [ ] Active/pressed state perceptibly different from hover
- [ ] Disabled state: reduced opacity + cursor:not-allowed, never just grey

**Motion**
- [ ] Duration: 100ms for micro (tooltips, toggles), 200ms for standard, 300ms max for panels
- [ ] No animation that doesn't serve comprehension — if removal loses nothing, remove it
- [ ] `prefers-reduced-motion` respected on every animated element

**Accessibility**
- [ ] All interactive elements reachable and operable by keyboard
- [ ] ARIA roles, labels, and descriptions correct and tested with VoiceOver/NVDA
- [ ] Error messages associated with inputs via `aria-describedby`
- [ ] Colour is never the sole means of conveying information

**Code quality**
- [ ] No hardcoded values — everything references a token
- [ ] Props are named for intent, not implementation (`variant="danger"` not `color="red"`)
- [ ] Component renders no DOM wrapper unless structurally necessary
- [ ] Zero TypeScript `any` types

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | React 18 + TypeScript | Type-safe, industry standard |
| Bundler | Vite | Fast dev server, clean builds |
| Styling | CSS custom properties + CSS Modules | No runtime, tokens-first, long-lasting (Rams #7) |
| Component browser | Custom Rolodex UI | Built in-house — the browser IS a showcase of the design system |
| Testing | Vitest + Testing Library | Lightweight, Vite-native |
| Hosting | GitHub Pages (gh-pages branch) | Zero-cost, version-controlled |
| CI/CD | GitHub Actions | Lint → type-check → build → deploy |
| Figma | Figma library + Code Connect | Design ↔ code single source of truth |

---

## Project Structure (target)

```
palm-design-system/
├── src/
│   ├── components/         # All design system components
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Card/
│   │   └── ...             # One folder per component
│   ├── tokens/             # Design tokens (color, type, spacing, motion)
│   ├── browser/            # Rolodex browser app (dev only)
│   └── index.ts            # Public package exports
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI: lint → build → deploy to Pages
├── CLAUDE.md               # This file
└── package.json
```

Each component folder contains:
- `ComponentName.tsx` — implementation
- `ComponentName.module.css` — styles
- `ComponentName.stories.tsx` — browser examples (used by rolodex)
- `ComponentName.test.tsx` — unit tests
- `index.ts` — re-export

---

## Rolodex Browser Design

The component browser mimics a physical rolodex card file:
- **A–Z tabs** on the right edge — click to jump to that letter section
- **Cards** flip or slide into view for each component
- **Each card** shows: component name, description, live interactive demo, props table
- **Search bar** at top — filters cards in real time
- **Aesthetic:** warm off-white card stock, mechanical tab typography, fine rule lines — timeless, not retro-kitsch
- **No heavy frameworks** — the browser itself demonstrates the design system's own tokens

---

## Component Checklist

The first application of Palm is a **product designer's online portfolio**. Every component must serve that context first — then generalise. Components are grouped by function, listed alphabetically within each group.

### Foundation
Primitive building blocks everything else composes from.

- [ ] Avatar — profile image with fallback initials, sizes S/M/L
- [ ] Badge — status labels, counts, availability indicators
- [ ] Button — primary, secondary, ghost, danger; sizes S/M/L; icon variants
- [ ] Checkbox — single and indeterminate states
- [ ] Chip / Tag — skill tags, category filters, keyword labels
- [ ] Divider — horizontal and vertical, with optional label
- [ ] Icon — icon wrapper with size + colour tokens; no bundled icon set
- [ ] Input — text, email, textarea; with label, helper text, error state
- [ ] Link — inline and standalone; external indicator
- [ ] Radio — single and group
- [ ] Select — native + custom styled
- [ ] Spinner — loading indicator, inline and full-area
- [ ] Switch / Toggle — boolean preference control
- [ ] Tooltip — on hover/focus; directional; max-width constrained

### Typography
Treated as components, not just CSS classes — enforces scale discipline.

- [ ] Display — hero-scale headings (D1, D2); tight tracking, high optical weight
- [ ] Eyebrow — small-caps label used above headings to establish context
- [ ] Heading — H1–H4, semantic + presentational variants
- [ ] Body — default reading text; regular and large sizes
- [ ] Caption — supporting text below images, in tables, in footnotes
- [ ] Code — inline and block; monospaced; used for process documentation

### Layout & Navigation
Structural components that define the skeleton of every page.

- [ ] Footer — contact links, social links, copyright; minimal chrome
- [ ] Grid — responsive column grid with gap tokens; 4/8/12 column variants
- [ ] Nav — top navigation; desktop horizontal, mobile drawer; active state
- [ ] Section — full-width page section wrapper with vertical padding tokens
- [ ] Sidebar — fixed or scrollable side panel; used for case study navigation
- [ ] Stack — vertical or horizontal spacing primitive (replaces ad-hoc margin)

### Content & Display
The components that carry portfolio content — the ones visitors actually see and read.

- [ ] Accordion — collapsible Q&A, process steps, detailed specs
- [ ] Card — generic content card; composable with any content
- [ ] Case Study Card — project thumbnail, title, tags, brief outcome; primary portfolio unit
- [ ] Device Mockup — browser, mobile, or tablet frame for showing UI work in context
- [ ] Gallery — responsive image grid; masonry or uniform; lazy loaded
- [ ] Image — managed img with aspect ratio lock, lazy load, caption slot, alt enforcement
- [ ] Lightbox — full-screen image viewer triggered from Gallery or Image
- [ ] Metric / Stat — large number + label; for impact statements ("↑ 42% task completion")
- [ ] Process Step — numbered step in a design process flow; icon + title + description
- [ ] Quote / Testimonial — pull quote with attribution; used for client or user quotes
- [ ] Skeleton — loading placeholder matching the shape of real content
- [ ] Tab Panel — tabbed content switching; used for showing Before/After, process stages
- [ ] Timeline — chronological work history or project phases; vertical layout
- [ ] Video Embed — responsive iframe wrapper for Vimeo/YouTube; no layout shift

### Feedback & Overlay
- [ ] Modal — dialog overlay; focus-trapped; accessible
- [ ] Toast / Notification — ephemeral feedback messages; top-right, auto-dismiss

### Forms & Contact
- [ ] Contact Form — composite: name, email, message, submit; with validation states
- [ ] Field Group — label + input + helper/error text; the unit all form fields are built from
- [ ] Form — layout wrapper managing spacing between Field Groups

### Portfolio-Specific Composites
Higher-order components built from the primitives above. Not in the rolodex as separate entries — documented as compositions.

- [ ] **Hero** — Display headline + Eyebrow + Body + Button CTA + optional background image
- [ ] **About Section** — Avatar + Heading + Body + Chip list (skills)
- [ ] **Case Study Grid** — Grid + Case Study Cards; filterable by Chip tags
- [ ] **Experience Timeline** — Timeline entries with role, company, dates, description
- [ ] **Social Links** — row of Icon + Link pairs; LinkedIn, Dribbble, GitHub, email
- [ ] **Back to Top** — fixed-position scroll shortcut; appears after 300px scroll depth

---

## Build Phases

### Phase 1 — Foundation
- [ ] Vite + React + TypeScript scaffold
- [ ] GitHub repo created and pushed
- [ ] GitHub Pages + Actions configured
- [ ] Design tokens file (`tokens/index.css`)

### Phase 2 — Rolodex Browser
- [ ] Browser shell with A–Z tab navigation
- [ ] Card component for browser entries
- [ ] Live search/filter
- [ ] Responsive layout

### Phase 3 — Core Components
- [ ] All components in checklist above
- [ ] Full state coverage (default, hover, focus, disabled, error)
- [ ] Accessibility (ARIA, keyboard navigation)
- [ ] Prop documentation on each browser card

### Phase 4 — Figma Integration
- [ ] Figma file: Palm Design System library
- [ ] Design tokens as Figma variables
- [ ] All components built in Figma matching React 1:1
- [ ] Figma Code Connect configured and published
- [ ] Dieter Rams audit across both Figma and React

---

## Design Tokens (draft)

```css
/* tokens/index.css */
:root {
  /* Colour */
  --color-ink-900: #1a1a1a;
  --color-ink-600: #4a4a4a;
  --color-ink-300: #a0a0a0;
  --color-paper-100: #fafaf8;   /* off-white card stock */
  --color-paper-200: #f0ede8;
  --color-rule: #e0dbd4;
  --color-accent: #2d5be3;      /* single action colour */
  --color-danger: #c0392b;

  /* Typography */
  --font-family-base: 'IBM Plex Sans', system-ui, sans-serif;
  --font-family-mono: 'IBM Plex Mono', monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;

  /* Spacing (8pt grid) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;

  /* Shadow (honest depth, no theatrics) */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.08);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.10);

  /* Motion */
  --duration-fast: 100ms;
  --duration-base: 200ms;
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Working Principles for Claude

- **Obsess over the details.** A misaligned element, a wrong line-height, an inconsistent focus ring — these are not acceptable. Catch them.
- **No new component without a real use case** (Rams #2, #10)
- **Tokens first** — never hardcode a colour, size, or duration. If a token doesn't exist, create it.
- **Every state ships.** Default, hover, focus, active, disabled, error, loading — all of them, always.
- **Accessibility is not optional** — every component ships WCAG 2.1 AA. Keyboard navigation, ARIA, contrast.
- **The browser IS the documentation** — if it can't be shown in the rolodex, it's not done
- **Figma is the design source of truth** — but Code Connect keeps it honest
- **Run the Detail Obsession Checklist before any component is marked done**
- **Run a Rams audit before any phase is called complete**
- **If something feels slightly off, it is off. Fix it.**
