import { readAnalyticsConsent } from './analyticsConsent'

export const GTM_CONTAINER_ID = 'GTM-5RGK52GJ'

const CONSENT_EVENT = 'analytics-consent-change'
const CONSENT_KEY = 'analytics-consent-v1'
const SCRIPT_ID = 'analytics-gtm'
const DENIED_CONSENT = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
}
const ANALYTICS_ONLY_CONSENT = {
  ...DENIED_CONSENT,
  analytics_storage: 'granted',
}

let initialized = false
let configured = false
let unloading = false
let lastPageLocation = null
let previousPageLocation = null
let pendingPageView = null

function gtag(...args) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

function sanitizePageLocation(path) {
  const pathname =
    typeof path === 'string' && path.startsWith('/')
      ? path.split(/[?#]/, 1)[0]
      : window.location.pathname
  return new URL(pathname, window.location.origin).href
}

function loadAnalyticsContainer() {
  if (configured || unloading || readAnalyticsConsent() !== 'granted')
    return false

  gtag('consent', 'default', DENIED_CONSENT)
  gtag('consent', 'update', ANALYTICS_ONLY_CONSENT)
  gtag('set', 'ads_data_redaction', true)
  gtag('set', 'allow_google_signals', false)
  gtag('set', 'allow_ad_personalization_signals', false)
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`
    document.head.appendChild(script)
  }

  configured = true
  return true
}

function sendPageView({ path, title }) {
  if (readAnalyticsConsent() !== 'granted') return false
  if (!configured && !loadAnalyticsContainer()) return false

  const pageLocation = sanitizePageLocation(path)
  if (pageLocation === lastPageLocation) return false

  const parameters = {
    page_location: pageLocation,
    page_title: title || document.title,
  }
  if (previousPageLocation) parameters.page_referrer = previousPageLocation

  window.dataLayer.push({ event: 'page_view', ...parameters })
  previousPageLocation = pageLocation
  lastPageLocation = pageLocation
  return true
}

function flushPendingPageView() {
  if (!pendingPageView || readAnalyticsConsent() !== 'granted') return false
  const pageView = pendingPageView
  pendingPageView = null
  return sendPageView(pageView)
}

function applyConsent() {
  const consent = readAnalyticsConsent()

  if (consent === 'granted') {
    if (!configured) loadAnalyticsContainer()
    else gtag('consent', 'update', ANALYTICS_ONLY_CONSENT)
    flushPendingPageView()
    return
  }

  if (configured && !unloading) {
    unloading = true
    gtag('consent', 'update', DENIED_CONSENT)
    document.getElementById(SCRIPT_ID)?.remove()
    window.location.reload()
  }
}

export function initializeGoogleAnalytics() {
  if (typeof window === 'undefined' || initialized) return
  initialized = true

  window.addEventListener(CONSENT_EVENT, applyConsent)
  window.addEventListener('storage', (event) => {
    if (event.key === CONSENT_KEY || event.key === null) applyConsent()
  })

  applyConsent()
}

export function trackGooglePageView({ path, title } = {}) {
  if (typeof window === 'undefined') return false
  if (!initialized) initializeGoogleAnalytics()

  pendingPageView = { path, title }
  return flushPendingPageView()
}

export function trackGoogleEvent(eventName, parameters = {}) {
  if (typeof window === 'undefined' || readAnalyticsConsent() !== 'granted')
    return false
  if (!initialized) initializeGoogleAnalytics()
  if (!configured && !loadAnalyticsContainer()) return false

  window.dataLayer.push({
    event: eventName,
    ...parameters,
    page_location: sanitizePageLocation(),
  })
  return true
}
