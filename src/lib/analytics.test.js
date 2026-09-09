import { afterEach, describe, expect, it, vi } from 'vitest'
import analytics from './analytics'

afterEach(() => {
  localStorage.clear()
  delete window.dataLayer
  document.getElementById('google-analytics-gtag')?.remove()
  vi.restoreAllMocks()
})

describe('analytics consent gate', () => {
  it.each([null, 'denied', 'invalid'])(
    'does not queue or log for %s',
    (choice) => {
      if (choice) localStorage.setItem('analytics-consent-v1', choice)
      const log = vi.spyOn(console, 'info').mockImplementation(() => {})
      for (const track of Object.values(analytics)) {
        expect(track({})).toBeNull()
      }
      expect(window.dataLayer).toBeUndefined()
      expect(log).not.toHaveBeenCalled()
    }
  )

  it('fails closed when storage cannot be read', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage unavailable')
    })
    expect(
      analytics.trackSearch({ query: 'fictional private search' })
    ).toBeNull()
    expect(window.dataLayer).toBeUndefined()
  })

  it('sends the correct GA4 event after opt-in without raw search text', () => {
    localStorage.setItem('analytics-consent-v1', 'granted')
    vi.spyOn(console, 'info').mockImplementation(() => {})

    const event = analytics.trackSearch({ query: 'fictional private search' })
    const internalEvent = window.dataLayer.find(
      (entry) => entry?.eventName === 'search'
    )
    const consentUpdate = window.dataLayer.find(
      (entry) =>
        Array.isArray(entry) &&
        entry[0] === 'consent' &&
        entry[1] === 'update'
    )
    const gaEvent = window.dataLayer.find(
      (entry) =>
        Array.isArray(entry) && entry[0] === 'event' && entry[1] === 'search'
    )

    expect(event.payload).toEqual({})
    expect(internalEvent).toEqual(event)
    expect(consentUpdate[2]).toEqual({
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'granted',
    })
    expect(gaEvent).toEqual(['event', 'search', {}])
    expect(JSON.stringify(window.dataLayer)).not.toContain(
      'fictional private search'
    )
  })
})
