# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Informel-tic.com is a Vite + React 19 multi-page website for a French IT services company offering B2B and B2C services ( dépannage, formation, IT security). Built with React Router 7 for routing, Sass for styling, and Vitest for testing.

## Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # Production build to dist/
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
npm run test     # Run all Vitest tests
npm run test -- src/components/Foo.test.jsx  # Run a specific test file
```

## Architecture

### Routing
React Router 7 handles all routing in `src/App.jsx`. Routes are grouped by audience:
- `/` — HomePage
- `/pros/*` — B2B section (Overview, Rayonner, Organiser, Securiser, Aides-aden)
- `/particuliers/*` — B2C section (Overview, Depannage, Formation)
- `/engagement`, `/contact`, `/mentions-legales`, `/politique-de-confidentialite`

Legacy redirects: `/a-propos` → AboutPage, `/offres` → PricingPage

### Pages and Components
- Pages live in `src/pages/` — one file per route
- Shared layout components in `src/components/` (Navbar, Footer, SEO, ScrollToTop)
- Home-specific section components in `src/components/home/` (Hero, CTABanner, ValuesSection, Testimonials, DualEntry, RisksAndSolutions)

### Styling
SCSS with modular partials imported via `@use` (not `@import`) in `src/main.scss`:
- `styles/_variables.scss` — CSS custom properties (colors, fonts, spacing)
- `styles/_base.scss` — reset and base typography
- `styles/_layout.scss` — containers, grids, section spacing utilities
- `styles/_components.scss` — reusable component styles
- `styles/_animations.scss` — keyframe animations
- `styles/_mixins.scss` — responsive breakpoint mixins (md, lg, max-md)

### Global Config
`src/config.js` exports shared public constants (CONTACT_EMAIL, CONTACT_PHONE, OWNER_NAME, SERVICE_AREA, FOUNDER_PHOTO). Replace placeholder values before deploying.

### SEO
`react-helmet-async` via HelmetProvider in `src/main.jsx`. Each page uses the `<SEO>` component for title/description meta tags.

### Testing
Vitest with jsdom environment. Global mocks (IntersectionObserver, matchMedia) are set up in `src/setupTests.js`. Tests colocated with components (`*.test.jsx`) plus integration tests in `src/__tests__/` (a11y, e2e, responsive, content).
