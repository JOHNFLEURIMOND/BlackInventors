# Analytics Measurement Specification

## Status and objectives

This document defines the analytics contract for BlackInventors. It reconciles
the existing local event queue with a small future GA4 event set; it does not
claim that events currently reach GA4.

Measure whether visitors search and filter the inventor collection, select an
inventor, and view an inventor detail page. Do not track every click, card
impression, sort operation, scroll, state change, or local data read.

## Current implementation

- The application pushes consented events to a local `window.dataLayer` queue.
  No GTM container, GA4 Measurement ID, `gtag` client, Tealium adapter, or outbound
  collector exists, so queued events do not reach GA4.
- Existing names are `page_view`, `inventor_click`, `search`, `filter`, and
  `timeline_interaction`. `timeline_interaction` has no call site.
- The current queue uses `eventName` instead of GTM's conventional `event` key.
  A future adapter must map this contract explicitly rather than exposing queue
  shape to components.
- Development logs accepted events; production does not. Neither environment has
  a destination.
- Inventor data is local JSON. There is no runtime inventor API and therefore no
  `inventor_api_error` event in this specification.
- Source records are not rendered as links. `source_link_click` is excluded until
  such an interaction exists.
- Tealium is not used.

## Repository audit evidence

Audit date: 2026-09-13. Current application source, tests, configuration, and
documentation were inspected. Generated `build`, `coverage`, and dependency
directories were excluded. Source searches covered analytics vendors and IDs,
all event exports and call sites, routes, filters, links, and data access.

| Area                       | Source evidence                                                                                                                                                                                                         | Finding                                                                                                                                                                                                                    |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework and entry point  | [package.json](package.json#L1-L43), [src/main.jsx](src/main.jsx#L1-L30)                                                                                                                                                | React 19, Vite, React Router, styled-components, and Vitest render under `StrictMode` and `BrowserRouter`; consent initializes before render.                                                                              |
| Routes and screens         | [src/Routes.jsx](src/Routes.jsx#L1-L29)                                                                                                                                                                                 | The app has `/`, `/inventor/:slug`, and a not-found screen.                                                                                                                                                                |
| Event utility              | [src/lib/analytics.js](src/lib/analytics.js#L1-L54)                                                                                                                                                                     | Consented events use the names `page_view`, `inventor_click`, `search`, `filter`, and `timeline_interaction`. They are pushed to a local envelope with `eventName`; development also logs them. No vendor request is made. |
| Page-view call             | [src/App.jsx](src/App.jsx#L1-L47)                                                                                                                                                                                       | A pathname effect calls `trackPageView`. `StrictMode` can execute the initial effect twice in development, and the utility has no deduplication.                                                                           |
| Consent implementation     | [src/lib/analyticsConsent.js](src/lib/analyticsConsent.js#L1-L123), [src/component/CookieConsent.jsx](src/component/CookieConsent.jsx#L1-L218)                                                                          | Unknown or denied consent clears the queue and readable GA cookies. Local, session, and denial-only URL fallbacks protect consent state. Blocked events are not replayed.                                                  |
| Search and filters         | [src/component/Inventors.jsx](src/component/Inventors.jsx#L149-L213), [src/component/Inventors.jsx](src/component/Inventors.jsx#L216-L288)                                                                              | Search calls `trackSearch` on every input change; era and category call `trackFilter`. Sort, chip removal, reset, and clear are untracked. Raw query is passed to the wrapper but the current wrapper discards it.         |
| Card selection             | [src/component/Inventors.jsx](src/component/Inventors.jsx#L294-L308), [src/component/InventorCard.jsx](src/component/InventorCard.jsx#L32-L43)                                                                          | List-card navigation calls `trackInventorClick` with stable ID, first category, and one-based position. Featured and related-inventor links do not call it.                                                                |
| Detail and source behavior | [src/pages/InventorDetail.jsx](src/pages/InventorDetail.jsx#L1-L131)                                                                                                                                                    | Detail pages show categories, inventions, timeline entries, and related inventors. Timeline entries are display-only, and source records are not rendered as links.                                                        |
| Data source                | [src/hooks/useInventors.js](src/hooks/useInventors.js#L1-L35), [src/lib/dataLoader.js](src/lib/dataLoader.js#L1-L14)                                                                                                    | Inventor records come from bundled JSON and are normalized synchronously. There is no runtime inventor API to instrument.                                                                                                  |
| Existing tests             | [src/lib/analytics.test.js](src/lib/analytics.test.js#L1-L43), [src/lib/analyticsConsent.test.js](src/lib/analyticsConsent.test.js#L1-L99), [src/component/Inventors.test.jsx](src/component/Inventors.test.jsx#L1-L49) | Tests cover consent suppression, local queue shape, cookie cleanup, and omission of raw search text. They do not validate a collector, network request, GA4 property, or exact UI event counts.                            |

### Audit findings

1. **High - confirmed collection failure:** accepted events stop in the local
   `dataLayer`; no GTM, GA4, Tealium, or other collector sends them.
2. **High - integration mismatch:** queue entries use `eventName`, not GTM's
   conventional `event` key. A future destination requires an explicit adapter.
3. **Medium - volume and duplicate risk:** `search` fires once per keystroke, and
   the initial `page_view` has no StrictMode deduplication.
4. **Medium - inconsistent taxonomy:** current generic `search` and `filter`
   names and camelCase payload keys do not match the approved contract.
5. **Medium - coverage gaps:** featured and related selections are untracked;
   `timeline_interaction` is exported but has no call site.
6. **Unconfirmed downstream state:** no browser request, Measurement ID, GA4 data
   stream, DebugView event, or production report can be validated without a
   configured destination.

No source-level `Menu_Link_Click`, GTM container, GA4 Measurement ID, Tealium
call, runtime inventor API, or rendered source link was found.

## Event-name reconciliation

- Retain `page_view`.
- Replace `search` with `inventor_search`.
- Replace `filter` with `inventor_filter_apply`.
- Replace `inventor_click` with `inventor_select`.
- Do not implement `timeline_interaction` until a distinct, reportable timeline
  control exists. Do not emit old and new names for the same action.

## Consent and privacy

- Require explicit analytics consent before queueing or sending events.
- Unknown, denied, malformed, and inaccessible consent states fail closed.
- Blocked events are not replayed after consent.
- Never send raw search text, inventor source text, full URLs, query strings,
  local data objects, or personal or sensitive user information.
- Public inventor IDs, controlled categories, counts, and query-length buckets are
  permitted.

## Naming and parameter rules

- Use lowercase snake_case event and parameter names through one vendor-neutral
  adapter.
- Include `app_name=black_inventors`, bounded `page_type`, and
  `environment=production|development|test` on every event.
- Use `inventor_id` as a string. Positions and result counts are finite,
  nonnegative integers. Enums must use documented values.
- Omit unavailable optional parameters. Never send `undefined`, `null`, objects,
  arrays, or unrestricted strings.
- Category and era values must be normalized against the application data's
  allowlist before collection.

## Event specification

| Event name              | Application    | Trigger                                                                                      | Required parameters                                                                   | Optional parameters                  | Parameter types                                                                                                                                   | Consent requirement        | Duplicate rule                                                                                                        | GA4 conversion? | Validation method                                                                                |
| ----------------------- | -------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------ |
| `page_view`             | BlackInventors | A resolved initial route or client-side route change to home, inventor detail, or not-found  | `app_name`, `page_type`, `page_path`, `environment`                                   | `inventor_id`                        | Shared strings; `page_type`: `inventor_list\|inventor_detail\|not_found`; `page_path`: path-only string; `inventor_id`: string                    | Analytics consent required | One event per router navigation key; suppress StrictMode duplicates and use one page-view owner                       | No              | Verify one queue entry, one outbound request after a destination exists, and one DebugView event |
| `inventor_search`       | BlackInventors | A debounced search term changes the visible result set                                       | `app_name`, `page_type`, `environment`, `query_length_bucket`, `result_count`         | None                                 | `query_length_bucket`: `empty\|1_3\|4_10\|11_plus`; `result_count`: integer `0..total_inventory`                                                  | Analytics consent required | One event after debounce for a changed normalized term; never fire per keystroke or include the term                  | No              | Type a fictional query and verify one event after debounce with no raw text                      |
| `inventor_filter_apply` | BlackInventors | The user changes an era or category filter and the visible result set updates                | `app_name`, `page_type`, `environment`, `filter_name`, `filter_value`, `result_count` | `previous_value`                     | `filter_name`: `era\|category`; values: normalized allowlisted strings; `result_count`: integer `0..total_inventory`                              | Analytics consent required | Emit only for a changed normalized value; one event owns each filter change                                           | No              | Apply each filter type and verify one request per changed value                                  |
| `inventor_select`       | BlackInventors | The user opens an inventor detail page from a list, featured story, or related-inventor link | `app_name`, `page_type`, `environment`, `inventor_id`, `selection_source`             | `list_position`, `inventor_category` | `inventor_id`: string; `selection_source`: `list\|featured\|related`; `list_position`: integer `1..total_inventory`; category: allowlisted string | Analytics consent required | One event per activated link; pointer and keyboard use the same handler; do not also emit the legacy `inventor_click` | No              | Activate each source type and verify exactly one event with no display name                      |
| `inventor_detail_view`  | BlackInventors | An inventor detail record successfully renders for the first time on a navigation            | `app_name`, `page_type`, `environment`, `inventor_id`                                 | `inventor_category`                  | `inventor_id`: string; category: allowlisted string                                                                                               | Analytics consent required | Once per inventor ID and router navigation key; suppress rerender and StrictMode duplicates                           | No              | Open a detail route and verify one event after content renders, distinct from `page_view`        |

## Expected frequency

- `page_view`: once per resolved route navigation.
- `inventor_search`: zero or more times per session, once per debounced changed term.
- `inventor_filter_apply`: zero or more times per session, once per changed filter.
- `inventor_select`: zero or more times per session, once per deliberate selection.
- `inventor_detail_view`: at most once per detail navigation.

## GA4 custom dimensions

- Shared: `app_name`, `page_type`, `environment`, `filter_name`, `filter_value`,
  `selection_source`.
- App-specific: `inventor_category`.

Keep `inventor_id`, `page_path`, `list_position`, `result_count`, and
`query_length_bucket` as event parameters unless a defined report requires them.

## Conversion policy

Do not mark these events as GA4 conversions. Searches, filter changes, inventor
selections, and detail views are engagement signals, not verified business
outcomes.

## Validation and release gates

1. Add and verify a destination only after the vendor-neutral adapter is approved.
2. Confirm unknown or denied consent creates no queued or outbound event.
3. With consent granted, verify exact names, values, types, and event counts.
4. Inspect browser Network for one request to the approved GA4 Measurement ID;
   confirm that no raw search text, full URL, or local JSON object is present.
5. Confirm one matching event in DebugView and later production reporting.
6. Test initial load, SPA navigation, repeated clicks, debounced search, filters,
   no-result states, detail navigation, grant, denial, and revocation on mobile
   and desktop.
7. Separate development/test traffic from production.

A local queue entry or console log alone is not a passing result.

## Known gaps, assumptions, and risks

- No Measurement ID or destination source exists. Production requests, DebugView,
  and reporting are unvalidated.
- Current search tracking fires on every input change and must be replaced, not
  supplemented, to prevent duplicate and high-volume events.
- Accepting analytics after initial render does not currently replay a page view.
- Existing parameters have no runtime schema or bound enforcement.
- Generated coverage output contains stale code and is not an implementation
  source of truth.
- Sort, filter-chip removal, reset, source links, timeline controls, and API errors
  remain outside the initial specification.
