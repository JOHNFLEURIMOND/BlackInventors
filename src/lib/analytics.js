import { trackGoogleEvent, trackGooglePageView } from './googleAnalytics'

export function trackPageView({ path, navigationKey } = {}) {
  return trackGooglePageView({ path, navigationKey })
}

export function trackInventorClick({
  inventorId,
  position,
  selectionSource = 'list',
} = {}) {
  return trackGoogleEvent('inventor_select', {
    inventor_id: inventorId,
    list_position: position,
    selection_source: selectionSource,
  })
}

export function trackInventorDetailView({ inventorId, navigationKey } = {}) {
  return trackGoogleEvent(
    'inventor_detail_view',
    { inventor_id: inventorId },
    navigationKey
  )
}

export function trackSearch({ query = '', resultCount = 0 } = {}) {
  if (typeof query !== 'string') return false
  const length = query.trim().length
  return trackGoogleEvent('inventor_search', {
    query_length_bucket:
      length === 0
        ? 'empty'
        : length <= 3
          ? '1_3'
          : length <= 10
            ? '4_10'
            : '11_plus',
    result_count: resultCount,
  })
}

export function trackFilter({ type, value, previousValue, resultCount } = {}) {
  return trackGoogleEvent('inventor_filter_apply', {
    filter_name: type,
    filter_value: value,
    previous_value: previousValue,
    result_count: resultCount,
  })
}

export default {
  trackPageView,
  trackInventorClick,
  trackInventorDetailView,
  trackSearch,
  trackFilter,
}
