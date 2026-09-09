# Black Inventors Archive

> A modern interactive archive celebrating the innovators, engineers, scientists, and creators whose inventions shaped history.

🔗 **Live Demo:** https://johnfleurimond.com/

## Overview

The **Black Inventors Archive** is a modern React-powered experience designed to make the stories and contributions of Black inventors easier to discover, explore, and share.

The application transforms historical records into an interactive archive featuring inventor profiles, searchable collections, and a clean user experience built with modern frontend technologies.

The goal is simple:

**Preserve history. Improve discoverability. Inspire future innovators.**

---

# Features

## 🔎 Discover Inventors

Explore a curated collection of Black inventors and innovators across different eras and industries.

Users can:

- Browse inventor profiles
- Search inventors by name
- Filter by historical era
- Explore individual inventor detail pages

---

## 📚 Detailed Inventor Profiles

Each profile provides a focused view into an inventor's:

- Background
- Contributions
- Innovations
- Historical impact

The profile experience is designed to make complex historical information approachable and engaging.

---

## ⚡ Fast Modern Experience

Built with a modern frontend stack focused on:

- Fast page loads
- Responsive layouts
- Component-driven architecture
- Maintainable code organization

---

## 📊 Lightweight Analytics Layer

The application includes a custom analytics foundation to track meaningful user interactions.

Tracked events include:

- Page views
- Search interactions
- Filters
- Inventor selections

Events enter the local queue, and development logs, only after explicit analytics
opt-in. No collector or GA destination is configured. `trackSearch({ query })`
remains callable, but search events have an empty payload: raw search text is
never queued or logged. Events blocked before consent are not replayed.

### Cookie Consent

`src/lib/analyticsConsent.js` exports:

- `readAnalyticsConsent()`: returns `granted`, `denied`, or `unknown`.
- `setAnalyticsConsent(choice)`: accepts only `granted` or `denied`, returns
      `{ analytics, persisted }`, and dispatches `analytics-consent-change` with
      detail `{ analytics: choice }` after an explicit choice.
- `initializeAnalyticsConsent()`: initializes denial cleanup and cross-tab/page
      restore handling once, before React renders.

The nonmodal banner offers equally styled Accept analytics and Reject analytics
buttons. Cookie settings remains available; reopening focuses the heading and
closing returns focus to that control. Closing alone does not grant consent.

`analytics-consent-v1` stores `granted` or `denied` in local storage. A denial-only
session-storage override protects against stale grants if local storage fails.
Unreadable or malformed storage does not authorize analytics. Explicit acceptance
may apply in memory only. If both stores fail on denial, a denial-only
`analytics-consent-v1=denied` URL parameter protects reloads. The banner reports
failed permanent persistence. With storage disabled, choices cannot be guaranteed
across new tabs or independently opened URLs.

Denial empties the custom queue and expires JavaScript-accessible `_ga` and
`_ga_*` cookies at the current host, parent domains, and root/current ancestor
paths. Other cookies remain untouched. HttpOnly cookies, unrelated domains, and
cookies hidden at other paths cannot be removed by this client helper.

Advertising is not enabled. Do not add a collector, measurement ID, or `gtag`
initialization until the authorized GA property exists and its configuration is
reviewed. Any future collector must honor this gate and keep `ad_storage`,
`ad_user_data`, and `ad_personalization` denied, with `analytics_storage` denied
by default.

Focused checks: `npm test -- src/lib/analytics.test.js src/lib/analyticsConsent.test.js src/component/CookieConsent.test.jsx`.

---

## 🔍 Search & Discovery Experience

The archive includes:

- Real-time search
- Historical filtering
- Dynamic inventor loading
- User-friendly navigation

Designed to help users quickly find stories that interest them.

---

# Tech Stack

## Frontend

- React 18
- React Router
- styled-components
- Vite 8
- JavaScript (ES6+)

## Testing

- Vitest
- React Testing Library

## Code Quality

- ESLint
- Prettier
- Husky
- lint-staged

## Tooling

- Node.js 22
- npm
- GitHub Actions CI

---

# Screenshots

_Add screenshots or GIF demonstrations here._

Recommended examples:

- Archive homepage
- Search experience
- Inventor detail page
- Mobile responsive view

---

# Installation

Clone the repository:

```bash
git clone https://github.com/JOHNFLEURIMOND/BlackInventors.git

cd BlackInventors
```

Install dependencies:

```bash
npm install
```

---

# Development

Start the local development server:

```bash
npm run dev
```

The application will be available locally through the Vite development server.

---

# Production Build

Create an optimized production build:

```bash
npm run build
```

---

# Quality Checks

Before committing changes, run:

```bash
npm run lint
npm run test
npm run build
npm run audit
```

These checks validate:

- Code quality
- Application behavior
- Production builds
- Dependency security

---

# Architecture

The project follows a component-based React architecture:

```text
src/
├── component/       # Reusable UI components
├── containers/      # Page-level layouts
├── hooks/           # Reusable React hooks
├── lib/             # Application utilities and services
├── pages/           # Route-based pages
├── data/            # Archive data sources
└── styles/          # Global styling
```

---

# Data Flow

The application follows a simple data pipeline:

```
Archive Data
      |
      ↓
Data Loader
      |
      ↓
React Components
      |
      ↓
User Interaction
      |
      ↓
Analytics Events
```

This keeps data processing, presentation, and tracking separated.

---

# Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Add required environment values before running the application.

Never commit `.env` files containing private credentials.

---

# SEO

The application includes static SEO resources:

```
/robots.txt
/sitemap.xml
```

These improve:

- Search engine discoverability
- Site indexing
- Public accessibility

---

# Testing Strategy

The project includes automated coverage for:

- Data loading behavior
- Component rendering
- User interactions
- Navigation flows

Example:

```bash
npm run test
```

---

# Future Improvements

Potential enhancements:

- Additional inventor collections
- Timeline exploration
- Industry/category filtering
- More detailed historical sources
- Accessibility improvements
- Progressive Web App support

---

# Why This Project Exists

History is often shaped by innovation, but many innovators do not receive equal visibility.

The Black Inventors Archive is an effort to create a modern, accessible way to learn about the people behind important ideas and technologies.

---

# License

© Fleurimond 2026
