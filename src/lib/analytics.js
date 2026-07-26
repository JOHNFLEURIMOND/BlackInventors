const EVENT_NAMESPACE = 'black-inventors'

function emit(eventName, payload = {}) {
  const event = {
    namespace: EVENT_NAMESPACE,
    eventName,
    timestamp: new Date().toISOString(),
    payload,
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

export function trackPageView({ path, title }) {
  return emit('page_view', { path, title })
}

export function trackInventorClick({ inventorId, category, position }) {
  return emit('inventor_click', { inventorId, category, position })
}

export function trackSearch({ query }) {
  return emit('search', { query })
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
