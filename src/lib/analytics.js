import { readAnalyticsConsent } from './analyticsConsent'
import { trackGoogleEvent, trackGooglePageView } from './googleAnalytics'

function toGoogleParameters(eventName, payload) {
  switch (eventName) {
    case 'inventor_select':
      return {
        inventor_id: payload.inventorId,
        inventor_category: payload.category,
        list_position: payload.position,
        selection_source: payload.selectionSource || 'list',
      }
    case 'inventor_filter_apply':
      return {
        filter_name: payload.type,
        filter_value: payload.value,
      }
    case 'inventor_search':
      return {
        query_length_bucket: payload.queryLengthBucket,
        result_count: payload.resultCount,
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

  const parameters = toGoogleParameters(eventName, payload)

  if (typeof window !== 'undefined') {
    trackGoogleEvent(eventName, parameters)
  }

  if (import.meta.env.DEV) {
    console.info('analytics:event', { event: eventName, ...parameters })
  }

  return { event: eventName, ...parameters }
}

export function trackPageView({ path, title }) {
  trackGooglePageView({ path, title })

  if (readAnalyticsConsent() !== 'granted') return null

  return { event: 'page_view', path, title }
}

export function trackInventorClick({
  inventorId,
  category,
  position,
  selectionSource,
}) {
  return emit('inventor_select', {
    inventorId,
    category,
    position,
    selectionSource,
  })
}

export function trackSearch({ query = '', resultCount = 0 } = {}) {
  const length = query.trim().length
  const queryLengthBucket =
    length === 0
      ? 'empty'
      : length <= 3
        ? '1_3'
        : length <= 10
          ? '4_10'
          : '11_plus'
  return emit('inventor_search', { queryLengthBucket, resultCount })
}

export function trackFilter({ type, value }) {
  return emit('inventor_filter_apply', { type, value })
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
