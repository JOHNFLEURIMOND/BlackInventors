import {
  getAllInventors,
  getInventorById,
  getInventorBySlug,
} from './dataLoader'

const inventory = getAllInventors()
const categories = new Set(inventory.flatMap((item) => item.categories))
const eras = new Set(['all', '1700s', '1800s', '1900s', '2000+'])
const countIsValid = (value) =>
  Number.isInteger(value) && value >= 0 && value <= inventory.length

export function pageContext(path = window.location.pathname) {
  const pathname = typeof path === 'string' ? path.split(/[?#]/, 1)[0] : ''
  const slug = /^\/inventor\/([^/]+)\/?$/.exec(pathname)?.[1]
  const candidate = slug ? getInventorBySlug(slug) : null
  const inventor = candidate?.slug === slug ? candidate : null
  const pagePath =
    pathname === '/'
      ? '/'
      : inventor
        ? `/inventor/${inventor.slug}`
        : '/not-found'
  return {
    app_name: 'black_inventors',
    environment: 'production',
    page_type:
      pathname === '/'
        ? 'inventor_list'
        : inventor
          ? 'inventor_detail'
          : 'not_found',
    page_path: pagePath,
    page_location: `${window.location.origin}${pagePath}`,
    page_title: inventor
      ? `${inventor.displayName} | Black Inventors Archive`
      : pathname === '/'
        ? 'Black Inventors Archive'
        : 'Page Not Found | Black Inventors Archive',
  }
}

export function eventParameters(name, payload = {}) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload))
    return null
  if (name === 'inventor_search') {
    if (
      !['empty', '1_3', '4_10', '11_plus'].includes(
        payload.query_length_bucket
      ) ||
      !countIsValid(payload.result_count)
    )
      return null
    return {
      query_length_bucket: payload.query_length_bucket,
      result_count: payload.result_count,
    }
  }
  if (name === 'inventor_filter_apply') {
    const allowed =
      payload.filter_name === 'era'
        ? eras
        : payload.filter_name === 'category'
          ? new Set(['all', ...categories])
          : null
    if (
      !allowed?.has(payload.filter_value) ||
      !countIsValid(payload.result_count)
    )
      return null
    const result = {
      filter_name: payload.filter_name,
      filter_value: payload.filter_value,
      result_count: payload.result_count,
    }
    if (allowed.has(payload.previous_value))
      result.previous_value = payload.previous_value
    return result
  }
  if (name === 'inventor_select' || name === 'inventor_detail_view') {
    if (typeof payload.inventor_id !== 'string') return null
    const inventor = getInventorById(payload.inventor_id)
    if (!inventor || inventor.id !== payload.inventor_id) return null
    const result = { inventor_id: inventor.id }
    if (name === 'inventor_select') {
      if (!['list', 'featured', 'related'].includes(payload.selection_source))
        return null
      result.selection_source = payload.selection_source
      if (countIsValid(payload.list_position) && payload.list_position > 0)
        result.list_position = payload.list_position
    }
    if (categories.has(inventor.categories[0]))
      result.inventor_category = inventor.categories[0]
    return result
  }
  return null
}
