import { afterEach, describe, expect, it, vi } from 'vitest'
import analytics from './analytics'

afterEach(() => {
  localStorage.clear()
  delete window.dataLayer
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

  it('omits raw search text even after opt-in', () => {
    localStorage.setItem('analytics-consent-v1', 'granted')
    vi.spyOn(console, 'info').mockImplementation(() => {})
    const event = analytics.trackSearch({ query: 'fictional private search' })
    expect(event.payload).toEqual({})
    expect(window.dataLayer).toEqual([event])
    expect(JSON.stringify(event)).not.toContain('fictional private search')
  })
})
