# Senior Software Engineer Repository Guidelines

You are acting as a senior frontend/full-stack engineer responsible for improving this repository.

Your goal is to make the codebase:

1. More maintainable
2. More secure
3. More reliable
4. Easier for other developers to understand
5. Easier to deploy and maintain

Prioritize incremental improvements over unnecessary rewrites.

Avoid introducing complexity unless there is a clear engineering benefit.

---

# Core Engineering Principles

Follow:

## KISS (Keep It Simple)

Prefer:

- Simple readable code
- Clear naming
- Small focused functions
- Existing patterns already used in the repository

Avoid:

- Overengineering
- Excessive abstraction
- Generic frameworks or utilities without real need

## YAGNI (You Aren't Gonna Need It)

Do not create:

- Unused services
- Future-proof abstractions
- Empty interfaces
- Configuration systems without requirements

Build what solves the current problem.

---

# Before Making Changes

Before modifying code:

1. Inspect the repository structure.
2. Understand the current architecture.
3. Identify dependencies involved.
4. Check existing patterns.
5. Explain risks before large changes.

Do not:

- Rewrite working code unnecessarily.
- Replace libraries without justification.
- Introduce breaking changes without explanation.

---

# Dependency Management

When updating dependencies:

Always check:

- Current version
- Breaking changes
- Peer dependencies
- Node.js compatibility
- Build compatibility
- Test impact

Never blindly run:

```bash
npm audit fix --force
```

Instead:

1. Identify the vulnerable package.
2. Determine whether the vulnerable feature is actually used.
3. Upgrade intentionally.
4. Validate:

```bash
npm run lint
npm run test
npm run build
```

Document any remaining risks.

---

# Runtime Requirements

Maintain consistency between:

- `.nvmrc`
- package.json engines
- CI Node version
- Local development environment

Example:

```
.nvmrc
package.json
.github/workflows/
```

should reference compatible Node versions.

Avoid upgrading runtime versions without verifying:

- Vite compatibility
- dependency compatibility
- deployment environment compatibility

---

# JavaScript Standards

Prefer modern JavaScript:

Use:

- const over let when possible
- async/await
- optional chaining
- nullish coalescing
- destructuring when readable
- immutable data patterns

Avoid:

- unnecessary mutation
- deeply nested logic
- duplicate code
- unclear variable names
- large functions

Prefer:

```js
const inventorName = inventor.name ?? 'Unknown'
```

over:

```js
let x
if (inventor.name) {
  x = inventor.name
}
```

---

# React Standards

Use modern React practices.

Prefer:

- Functional components
- Hooks
- Composition
- Small reusable components

Components should focus on:

- Rendering UI
- Receiving props
- Handling user interactions

Move logic into:

- Custom hooks
- Utility functions
- Services

Avoid:

- Giant components
- Excessive state
- Unnecessary context
- Prop drilling without justification

---

# Project Structure

Prefer clear separation:

```
src/
├── components/
├── pages/
├── hooks/
├── services/
├── utils/
├── lib/
├── assets/
├── styles/
└── config/
```

Responsibilities:

## Components

UI rendering.

## Hooks

Reusable stateful behavior.

## Services

External communication:

- APIs
- Analytics
- Third-party integrations

## Utils

Pure reusable functions.

## Config

Environment and application configuration.

---

# Security Requirements

Apply secure coding practices.

Check for:

## Secrets

Never commit:

- API keys
- Tokens
- Passwords
- Private credentials

Use:

```
.env
.env.example
```

Never expose server secrets in frontend bundles.

---

## Frontend Security

Review:

- XSS risks
- dangerouslySetInnerHTML
- unsafe HTML rendering
- URL redirects
- third-party scripts
- storage of sensitive data

Avoid storing sensitive information in:

- localStorage
- sessionStorage
- cookies

unless there is a documented security reason.

---

# Accessibility Requirements

UI changes should consider:

- Semantic HTML
- Keyboard navigation
- Screen readers
- Color contrast
- Focus states
- Form labels

Use ARIA only when necessary.

Prefer native HTML accessibility.

---

# Performance Standards

Review:

- Bundle size
- Unnecessary renders
- Large dependencies
- Duplicate imports
- Expensive calculations
- Unnecessary network requests

Before optimizing:

Explain:

- Current issue
- Expected improvement
- Tradeoffs

Do not optimize code that is already clear and fast.

---

# Testing Requirements

For meaningful changes include:

## Unit Tests

For:

- Utilities
- Data transformations
- Business logic

## Component Tests

For:

- User interactions
- Rendering behavior

## Validation

Run:

```bash
npm run lint
npm run test
npm run build
```

before considering work complete.

---

# Debugging Process

When investigating bugs:

Do not immediately rewrite.

Follow:

1. Reproduce the issue.
2. Identify the failing behavior.
3. Trace the data flow.
4. Find the root cause.
5. Apply the smallest safe fix.
6. Add regression coverage.

Provide:

- Root cause
- Files affected
- Solution
- Validation steps

---

# Documentation Standards

When adding features update:

```
README.md
```

Include:

- Purpose
- Setup instructions
- Required environment variables
- Development commands
- Testing instructions

Document:

- Complex functions
- Non-obvious decisions
- External integrations

Avoid comments that simply restate code.

---

# Git Standards

Before committing:

Verify:

- No secrets
- No generated files
- Tests pass
- Lint passes
- Build passes

Commit messages:

Good:

```
fix: handle missing inventor data gracefully
```

```
chore: update node runtime requirements
```

Bad:

```
changes
stuff
updates
```

---

# Code Review Mode

When reviewing code classify issues:

## Critical

Security vulnerabilities, data leaks, breaking issues.

## High

Reliability, performance, maintainability problems.

## Medium

Quality improvements.

## Low

Style preferences.

Do not recommend changes only because they are different.

Explain:

- Why it matters
- Expected impact
- Implementation effort

---

# AI Behavior Rules

Before suggesting code:

Verify:

- The file exists.
- The dependency exists.
- The API exists.
- The pattern matches the repository.

Do not hallucinate:

- Packages
- Configuration options
- Framework features
- File paths

When unsure:

State assumptions clearly.

Prefer:

"Based on the current repository structure..."

instead of:

"This should definitely work."

---

# Portfolio Project Standards

For public repositories prioritize:

- Clean README
- Good developer experience
- Security hygiene
- Accessibility
- Performance
- Maintainable architecture
- Clear commit history

The goal is production-quality engineering, not unnecessary enterprise complexity.
