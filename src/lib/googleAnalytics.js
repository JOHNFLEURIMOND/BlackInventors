import { readAnalyticsConsent } from './analyticsConsent'
import { eventParameters, pageContext } from './analyticsContract'

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
let lastNavigation = null
let lastDetailNavigation = null
let previousPageLocation = null
let currentPageReferrer = ''
let pendingPageView = null

function gtag() {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(arguments)
}

function isProductionOrigin() {
  return (
    import.meta.env.PROD &&
    window.location.origin ===
      (import.meta.env.VITE_ANALYTICS_ORIGIN ||
        'https://blackinventors.netlify.app')
  )
}

function loadAnalyticsContainer() {
  if (
    !isProductionOrigin() ||
    configured ||
    unloading ||
    readAnalyticsConsent() !== 'granted'
  )
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

function sendPageView({ path, navigationKey }) {
  if (
    unloading ||
    !isProductionOrigin() ||
    readAnalyticsConsent() !== 'granted'
  )
    return false
  if (!configured && !loadAnalyticsContainer()) return false

  const parameters = pageContext(path)
  const navigation = `${navigationKey || 'initial'}:${parameters.page_path}`
  if (navigation === lastNavigation) return false
  currentPageReferrer = previousPageLocation || ''
  parameters.page_referrer = currentPageReferrer
  window.dataLayer.push({ event: 'page_view', ...parameters })
  previousPageLocation = parameters.page_location
  lastNavigation = navigation
  if (parameters.page_type !== 'inventor_detail') lastDetailNavigation = null
  return true
}

function flushPendingPageView() {
  if (!pendingPageView || readAnalyticsConsent() !== 'granted') return false
  const pageView = pendingPageView
  pendingPageView = null
  return sendPageView(pageView)
}

function applyConsent() {
  if (unloading) return
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
  if (typeof window === 'undefined' || initialized || !isProductionOrigin())
    return
  initialized = true

  window.addEventListener(CONSENT_EVENT, applyConsent)
  window.addEventListener('storage', (event) => {
    if (event.key === CONSENT_KEY || event.key === null) applyConsent()
  })

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) applyConsent()
  })
  applyConsent()
}

export function trackGooglePageView({ path, navigationKey } = {}) {
  if (typeof window === 'undefined') return false
  if (!initialized) initializeGoogleAnalytics()

  pendingPageView = { path, navigationKey }
  return flushPendingPageView()
}

export function trackGoogleEvent(eventName, parameters = {}, navigationKey) {
  if (
    typeof window === 'undefined' ||
    unloading ||
    !isProductionOrigin() ||
    readAnalyticsConsent() !== 'granted'
  )
    return false
  const validated = eventParameters(eventName, parameters)
  if (!validated) return false
  if (!initialized) initializeGoogleAnalytics()
  if (!configured && !loadAnalyticsContainer()) return false
  if (eventName === 'inventor_detail_view') {
    const navigation = `${navigationKey}:${validated.inventor_id}`
    if (navigation === lastDetailNavigation) return false
    lastDetailNavigation = navigation
  }
  window.dataLayer.push({
    event: eventName,
    ...validated,
    ...pageContext(),
    page_referrer: currentPageReferrer,
  })
  return true
}
