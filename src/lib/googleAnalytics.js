import { readAnalyticsConsent } from './analyticsConsent'

export const GA_MEASUREMENT_ID = 'G-Q1ZTCQG9RN'

const CONSENT_EVENT = 'analytics-consent-change'
const CONSENT_KEY = 'analytics-consent-v1'
const SCRIPT_ID = 'google-analytics-gtag'
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

function loadGoogleTag() {
  if (configured || readAnalyticsConsent() !== 'granted') return false

  gtag('consent', 'default', DENIED_CONSENT)
  gtag('consent', 'update', ANALYTICS_ONLY_CONSENT)
  gtag('set', 'ads_data_redaction', true)
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })

  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)
  }

  configured = true
  return true
}

function sendPageView({ path, title }) {
  if (readAnalyticsConsent() !== 'granted') return false
  if (!configured && !loadGoogleTag()) return false

  const pageLocation = sanitizePageLocation(path)
  if (pageLocation === lastPageLocation) return false

  const parameters = {
    page_location: pageLocation,
    page_title: title || document.title,
  }
  if (previousPageLocation) parameters.page_referrer = previousPageLocation

  gtag('event', 'page_view', parameters)
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
    if (!configured) loadGoogleTag()
    else gtag('consent', 'update', ANALYTICS_ONLY_CONSENT)
    flushPendingPageView()
    return
  }

  if (configured) gtag('consent', 'update', DENIED_CONSENT)
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
  if (
    typeof window === 'undefined' ||
    readAnalyticsConsent() !== 'granted'
  )
    return false
  if (!initialized) initializeGoogleAnalytics()
  if (!configured && !loadGoogleTag()) return false

  gtag('event', eventName, parameters)
  return true
}
