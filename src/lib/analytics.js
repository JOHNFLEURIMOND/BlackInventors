import { readAnalyticsConsent } from './analyticsConsent'
import { trackGoogleEvent, trackGooglePageView } from './googleAnalytics'

const EVENT_NAMESPACE = 'black-inventors'

function toGoogleParameters(eventName, payload) {
  switch (eventName) {
    case 'inventor_click':
      return {
        inventor_id: payload.inventorId,
        category: payload.category,
        position: payload.position,
      }
    case 'filter':
      return {
        filter_type: payload.type,
        filter_value: payload.value,
      }
    case 'timeline_interaction':
      return {
        inventor_id: payload.inventorId,
        action: payload.action,
      }
    default:
      return {}
  }
}

function emit(eventName, payload = {}) {
  if (readAnalyticsConsent() !== 'granted') return null

  const event = {
    namespace: EVENT_NAMESPACE,
    eventName,
    timestamp: new Date().toISOString(),
    payload,
  }

  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(event)
    trackGoogleEvent(eventName, toGoogleParameters(eventName, payload))
  }

  if (import.meta.env.DEV) {
    console.info('analytics:event', event)
  }

  return event
}

export function trackPageView({ path, title }) {
  trackGooglePageView({ path, title })

  if (readAnalyticsConsent() !== 'granted') return null

  const event = {
    namespace: EVENT_NAMESPACE,
    eventName: 'page_view',
    timestamp: new Date().toISOString(),
    payload: { path, title },
  }

  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(event)
  }

  if (import.meta.env.DEV) {
    console.info('analytics:event', event)
  }

  return event
}

export function trackInventorClick({ inventorId, category, position }) {
  return emit('inventor_click', { inventorId, category, position })
}

export function trackSearch(_options = {}) {
  return emit('search')
}

export function trackFilter({ type, value }) {
  return emit('filter', { type, value })
}

export function trackTimelineInteraction({ inventorId, action }) {
  return emit('timeline_interaction', { inventorId, action })
}

export default {
  trackPageView,
  trackInventorClick,
  trackSearch,
  trackFilter,
  trackTimelineInteraction,
}
