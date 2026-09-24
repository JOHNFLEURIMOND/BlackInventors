import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

let listeners
beforeEach(() => {
  vi.resetModules()
  vi.stubEnv('PROD', true)
  vi.stubEnv('VITE_ANALYTICS_ORIGIN', window.location.origin)
  localStorage.clear()
  sessionStorage.clear()
  delete window.dataLayer
  document.getElementById('analytics-gtm')?.remove()
  window.history.replaceState(null, '', '/')
  listeners = []
  const add = window.addEventListener.bind(window)
  vi.spyOn(window, 'addEventListener').mockImplementation(
    (type, listener, options) => {
      listeners.push([type, listener, options])
      add(type, listener, options)
    }
  )
})
afterEach(() => {
  for (const args of listeners) window.removeEventListener(...args)
  vi.restoreAllMocks()
  vi.unstubAllEnvs()
})
const events = (name) =>
  (window.dataLayer || []).filter((item) => item.event === name)
const grant = () => localStorage.setItem('analytics-consent-v1', 'granted')

describe('GTM boundary', () => {
  it.each([null, 'denied', 'invalid'])(
    'blocks unknown or denied consent: %s',
    async (choice) => {
      if (choice) localStorage.setItem('analytics-consent-v1', choice)
      const client = await import('./googleAnalytics')
      client.trackGooglePageView({ path: '/', navigationKey: 'a' })
      expect(
        client.trackGoogleEvent('inventor_search', {
          query_length_bucket: '1_3',
          result_count: 1,
        })
      ).toBe(false)
      expect(window.dataLayer).toBeUndefined()
      expect(document.getElementById('analytics-gtm')).toBeNull()
    }
  )
  it.each(['development', 'preview'])('blocks %s traffic', async (mode) => {
    grant()
    if (mode === 'development') vi.stubEnv('PROD', false)
    else vi.stubEnv('VITE_ANALYTICS_ORIGIN', 'https://production.example')
    const client = await import('./googleAnalytics')
    client.trackGooglePageView({ path: '/' })
    expect(
      client.trackGoogleEvent('inventor_search', {
        query_length_bucket: 'empty',
        result_count: 0,
      })
    ).toBe(false)
    expect(window.dataLayer).toBeUndefined()
    expect(document.getElementById('analytics-gtm')).toBeNull()
  })
  it('queues argument commands before GTM and deduplicates by navigation identity', async () => {
    grant()
    const client = await import('./googleAnalytics')
    client.trackGooglePageView({
      path: '/?private=value#secret',
      navigationKey: 'a',
    })
    client.trackGooglePageView({ path: '/', navigationKey: 'a' })
    client.trackGooglePageView({ path: '/', navigationKey: 'b' })
    expect(events('page_view')).toHaveLength(2)
    expect(document.querySelectorAll('#analytics-gtm')).toHaveLength(1)
    expect(Object.prototype.toString.call(window.dataLayer[0])).toBe(
      '[object Arguments]'
    )
    expect(window.dataLayer[0][1]).toBe('default')
    expect(window.dataLayer[0][2].analytics_storage).toBe('denied')
    expect(window.dataLayer[1][2]).toEqual({
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
    expect(events('page_view')[0]).toMatchObject({
      app_name: 'black_inventors',
      environment: 'production',
      page_type: 'inventor_list',
      page_path: '/',
      page_referrer: '',
    })
    expect(JSON.stringify(window.dataLayer)).not.toMatch(/private|secret/)
  })
  it('grants only the current page and does not replay blocked interactions', async () => {
    const client = await import('./googleAnalytics')
    client.trackGooglePageView({ path: '/', navigationKey: 'a' })
    client.trackGooglePageView({
      path: '/inventor/lewis-latimer',
      navigationKey: 'b',
    })
    client.trackGoogleEvent('inventor_search', {
      query_length_bucket: '1_3',
      result_count: 1,
    })
    grant()
    window.dispatchEvent(new Event('analytics-consent-change'))
    expect(events('page_view')).toHaveLength(1)
    expect(events('page_view')[0].page_path).toBe('/inventor/lewis-latimer')
    expect(events('inventor_search')).toHaveLength(0)
  })
  it('blocks collection immediately on revocation, including a regrant before reload', async () => {
    grant()
    const client = await import('./googleAnalytics')
    client.trackGooglePageView({ path: '/', navigationKey: 'a' })
    vi.spyOn(console, 'error').mockImplementation(() => {}) // jsdom cannot navigate.
    localStorage.setItem('analytics-consent-v1', 'denied')
    window.dispatchEvent(new Event('analytics-consent-change'))
    expect(document.getElementById('analytics-gtm')).toBeNull()
    expect(window.dataLayer.at(-1)[2].analytics_storage).toBe('denied')
    grant()
    expect(client.trackGooglePageView({ path: '/', navigationKey: 'b' })).toBe(
      false
    )
    expect(
      client.trackGoogleEvent('inventor_search', {
        query_length_bucket: 'empty',
        result_count: 0,
      })
    ).toBe(false)
  })
  it('buckets raw search text and fails closed when storage is inaccessible', async () => {
    grant()
    const { trackSearch } = await import('./analytics')
    expect(
      trackSearch({ query: 'fictional private search', resultCount: 0 })
    ).toBe(true)
    expect(events('inventor_search')[0]).toMatchObject({
      query_length_bucket: '11_plus',
      result_count: 0,
    })
    expect(JSON.stringify(window.dataLayer)).not.toContain(
      'fictional private search'
    )
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Unavailable')
    })
    expect(trackSearch({ query: 'new' })).toBe(false)
    expect(events('inventor_search')).toHaveLength(1)
  })

  it('deduplicates detail renders but permits a return visit', async () => {
    grant()
    const client = await import('./googleAnalytics')
    const params = { inventor_id: 'lewis-latimer' }
    client.trackGoogleEvent('inventor_detail_view', params, 'a')
    client.trackGoogleEvent('inventor_detail_view', params, 'a')
    client.trackGooglePageView({ path: '/', navigationKey: 'b' })
    client.trackGoogleEvent('inventor_detail_view', params, 'a')
    expect(events('inventor_detail_view')).toHaveLength(2)
  })
})
