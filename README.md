# Black Inventors Archive

A modern React + Vite digital archive highlighting Black inventors, their impact, and discoverable inventor profiles.

## Tech Stack

- React 18
- React Router 6
- styled-components
- Vite
- Vitest + Testing Library

## Current Capabilities

- Hero-first homepage with lazy-loaded archive section
- Search, era filter, and sorting for inventor discovery
- Canonical slug/id normalization via a single data loader
- Detail route for inventor profiles (`/inventor/:slug`)
- Basic analytics event layer (dataLayer-based)
- SEO support files (`robots.txt`, `sitemap.xml`)

## Getting Started

### Requirements

- Node.js 20+
- npm 10+

### Install

```bash
git clone https://github.com/JOHNFLEURIMOND/BlackInventors.git
cd BlackInventors
npm install
```

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production assets to `dist/`
- `npm run preview` - Serve the production build locally
- `npm test` - Run test suite
- `npm run lint` - Run lint checks
- `npm run format` - Run Prettier

## Build + Verify

```bash
npm run build
```

After build, verify these files exist:

- `dist/robots.txt`
- `dist/sitemap.xml`

## SEO Files

Source files:

- `public/robots.txt`
- `public/sitemap.xml`

Expected endpoints in preview/production:

- `/robots.txt`
- `/sitemap.xml`

## Netlify Deployment Notes

If you do not see your latest changes on Netlify, check branch configuration first.

1. Open Site settings -> Build and deploy -> Continuous Deployment.
2. Confirm the production branch matches your working branch.
3. Confirm build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Trigger a clear-cache deploy if needed.

If production is still on an older branch (for example `master` while your work is on `redesign/modern-ui`), Netlify will deploy old code even if local build is correct.

## Testing Coverage

Current tests include:

- data loader slug uniqueness and duplicate handling
- inventor card rendering
- search/filter behavior
- route navigation to detail page

## Project Structure

```text
src/
  component/
  containers/
  hooks/
  lib/
  pages/
  data/
public/
dist/
```

## License

Fleurimond 2026
