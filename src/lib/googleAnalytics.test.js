import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

beforeEach(() => {
  vi.resetModules()
  localStorage.clear()
  sessionStorage.clear()
  delete window.dataLayer
  document.getElementById('analytics-gtm')?.remove()
  window.history.replaceState(
    null,
    '',
    '/inventors?query=fictional-private-search#results'
  )
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Google Tag Manager client', () => {
  it('does not load or queue GTM before consent', async () => {
    const { initializeGoogleAnalytics, trackGooglePageView } =
      await import('./googleAnalytics')

    initializeGoogleAnalytics()
    trackGooglePageView({ path: '/inventors', title: 'Black inventors' })

    expect(document.getElementById('analytics-gtm')).toBeNull()
    expect(window.dataLayer).toBeUndefined()
  })

  it('loads only the GTM container and queues a sanitized pageview after consent', async () => {
    localStorage.setItem('analytics-consent-v1', 'granted')
    const { GTM_CONTAINER_ID, initializeGoogleAnalytics, trackGooglePageView } =
      await import('./googleAnalytics')

    initializeGoogleAnalytics()
    trackGooglePageView({
      path: '/inventors?query=fictional-private-search#results',
      title: 'Black inventors',
    })

    expect(GTM_CONTAINER_ID).toBe('GTM-5RGK52GJ')
    expect(document.getElementById('analytics-gtm')?.src).toBe(
      'https://www.googletagmanager.com/gtm.js?id=GTM-5RGK52GJ'
    )

    const consentUpdate = window.dataLayer.find(
      (entry) =>
        Array.isArray(entry) && entry[0] === 'consent' && entry[1] === 'update'
    )
    const pageView = window.dataLayer.find(
      (entry) => entry?.event === 'page_view'
    )

    expect(consentUpdate[2]).toEqual({
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'granted',
    })
    expect(pageView).toMatchObject({
      page_location: 'http://localhost:3000/inventors',
      page_title: 'Black inventors',
    })
    expect(JSON.stringify(window.dataLayer)).not.toContain(
      'fictional-private-search'
    )
    expect(
      window.dataLayer.some(
        (entry) => Array.isArray(entry) && entry[0] === 'config'
      )
    ).toBe(false)
  })
})
