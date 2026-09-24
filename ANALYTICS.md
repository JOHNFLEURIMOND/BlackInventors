# Analytics contract

## Status and inventory

Source audit: 2026-09-24, starting from `master` at
`949846a331350542831c520fa0f60b472e4e8f4c`.

BlackInventors is a React 19 / React Router 7 / Vite 8 SPA hosted using Netlify
configuration. The documented production origin is
`https://blackinventors.netlify.app`; that URL returned HTTP 404 during the audit.
The current production URL and deployed commit remain unconfirmed.

- Application-owned GTM container: `GTM-5RGK52GJ`.
- GTM account, numeric container ID, workspace and published version: unverified.
- GA4 property, Measurement ID, custom definitions and key events: unverified.
- Engineering, analytics and privacy owners: not recorded in this repository.
- No direct `gtag.js` loader or second application-owned container was found.
- Live GTM tags, attached destinations and piggybacked vendors were not inspected.
- Source data is bundled JSON; there is no inventor API to instrument.

This document describes the branch implementation, not verified production delivery.

## Business questions

Measure whether visitors discover profiles through search, filters or the featured
story, and whether selections lead to rendered detail views. These are engagement
signals, not business conversions. No event is a key event by default.

## Environment and consent boundary

`googleAnalytics.js` loads GTM only when Vite's `PROD` flag is true, the browser
origin exactly matches `VITE_ANALYTICS_ORIGIN` (defaulting to the documented origin),
and `readAnalyticsConsent()` returns `granted`. Development, ordinary tests,
localhost previews and Netlify deploy-preview origins are blocked. Never set the
production origin to a preview URL to test against a production destination.
If the actual production origin differs, set the public build variable and rebuild.

Unknown, malformed, unreadable and denied consent fail closed. The existing custom
banner supports grant, rejection and reopening settings. Google commands use
`arguments` objects; application events use plain objects with an `event` key.
Defaults deny all four consent purposes before GTM loads. Analytics grant leaves
advertising purposes denied and disables Google signals and ad personalization.

Revocation updates Google consent, removes the loader and reloads to unload vendor
code. Application events stop immediately, including while reload is pending.
Cross-tab storage changes and bfcache restores recheck consent. Existing consent
storage fallbacks and readable GA-cookie cleanup remain in `analyticsConsent.js`.
Browser enforcement and vendor requests during revocation still require live QA.

Blocked interaction events are not replayed. The latest current route is retained
for a page view on grant; a mounted detail screen can emit its current detail view.
Pending search timers are cancelled on explicit consent changes.

## Event and parameter contract

Every accepted event includes `app_name=black_inventors`,
`environment=production`, `page_type`, `page_path`, `page_location`, `page_title`
and a sanitized `page_referrer` (empty when unavailable). Page types are
`inventor_list`, `inventor_detail`, and `not_found`. Paths are `/`, a known catalog
profile path, or `/not-found`. Queries, fragments and arbitrary unknown paths are
never copied into application payloads. Titles come from the catalog and fixed
strings, not arbitrary DOM text.

| Event                   | Trigger and count                                                                                                           | Event-specific parameters                                                        |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `page_view`             | Initial route, current route on grant, or router navigation; suppress repeated effects for the same navigation key and path | Shared page context                                                              |
| `inventor_search`       | Changed trimmed, case-normalized query after 500 ms; no mount or filter-only search                                         | `query_length_bucket`, `result_count`                                            |
| `inventor_filter_apply` | A committed era/category change; one event per changed filter, including chip removal/reset                                 | `filter_name`, `filter_value`, `previous_value`, `result_count`                  |
| `inventor_select`       | Link activation in list, featured story or related profiles                                                                 | `inventor_id`, `selection_source`; optional `list_position`, `inventor_category` |
| `inventor_detail_view`  | Successfully rendered detail, once per navigation and inventor; current detail on grant                                     | `inventor_id`; optional `inventor_category`                                      |

`query_length_bucket` is `empty`, `1_3`, `4_10`, or `11_plus`.
Counts are integers from zero through catalog size; positions start at one.
IDs must exist in the catalog. Selection sources are `list`, `featured`, `related`.
Filter names are `era` or `category`; era values are `all`, `1700s`, `1800s`,
`1900s`, `2000+`; categories come from the catalog plus `all`.
The current catalog has no category or related-profile enrichment, so those
controls/links have limited or no populated choices. No data enrichment is included.

`analyticsContract.js` validates names and values and reconstructs allowlisted
payloads. Invalid required values reject the event; invalid optional fields are
omitted. It drops raw search text, arbitrary fields, form values, raw errors and
objects. No logging of accepted analytics payloads remains.

Legacy `search`, `filter`, `inventor_click`, and unused `timeline_interaction`
are not emitted. Sort, timeline display, source links and API errors are outside
this contract. There are no source links or runtime API calls to instrument.

## Page-view ownership and downstream configuration

The application owns page views. Before release, inspect the existing live GTM
container and compare its event names and mappings to this contract. Do not create
another container or add direct GA4 code.

Required GTM configuration, not applied or verified in this change:

1. One approved GA4 destination, represented by a constant Measurement ID variable.
2. Disable automatic Google-tag page views with `send_page_view=false`.
3. Route only `^(?:page_view|inventor_search|inventor_filter_apply|inventor_select|inventor_detail_view)$`.
4. Map the shared and event-specific Data Layer Variables. Map the sanitized
   location, title and referrer explicitly; do not fall back to raw browser URLs.
   Scope optional parameter mappings by event name so GTM does not reuse a prior
   event's ID, position, category or filter value from its persistent data model.
5. Require analytics consent and once-per-event firing. Keep advertising denied.
6. Disable overlapping history/DOM tracking and Enhanced Measurement behaviors
   that duplicate these events or collect raw URL/search/link text.
7. Inspect additional Google-tag destinations, Ads, Floodlight, custom HTML and
   vendor tags. Application source inspection cannot prove absence of piggybacking.

Publish only after the matching application commit is deployed and preview QA
passes. Record the previous/new GTM versions, publisher, timestamp and deployed
commit. Roll back using the previous application release and matching GTM version.

## Reporting

Candidate event-scoped dimensions, only when a report requires them:
`app_name`, `environment`, `page_type`, `filter_name`, `filter_value`,
`selection_source`, `inventor_category`.

Keep IDs, positions, counts, paths and query buckets as parameters unless justified
by a reporting requirement. No custom definitions or key events were created.

## Validation and release

Use Node 22.23.1 and npm 10, as specified by the repository:

```sh
npm ci
npm run lint
npm test
npm run build
npm run verify:build
npm run audit
```

Unit and component coverage includes consent blocking, development/preview
blocking, command ordering, payload redaction, invalid data, current-page grant,
page/detail deduplication, revocation suppression, and search/filter event counts.
Tests emulate a production origin in jsdom; they do not load remote GTM or prove
GA4 collection. jsdom cannot perform reload; the revocation test checks the denied
command and immediate collection block and reports its navigation limitation.

Before merge/release, confirm CI and deploy preview, then validate the actual
production journey: unknown/denied consent (zero requests), grant, repeated grant,
SPA navigation/back, pointer and keyboard selection, search, filters, detail,
revocation and return visits. Count data-layer events and network requests, check
the intended Measurement ID and redacted payload, then confirm DebugView, Realtime
and processed reporting. Repeat representative mobile and desktop checks.

Outstanding evidence: live URL, deployed commit, GTM inventory/version, GA4 property
and destination, vendor network traffic, DebugView, Realtime and standard reports.
A queued event or fired tag is not proof of collection.

Known limitation: GTM script failure has no retry or delivery acknowledgement.
Queued events must not be reported as delivered. The application cannot constrain
arbitrary code already published inside the GTM container.

## References

- [Google data-layer guidance](https://developers.google.com/tag-platform/tag-manager/datalayer)
- [Google consent implementation](https://developers.google.com/tag-platform/security/guides/consent)
