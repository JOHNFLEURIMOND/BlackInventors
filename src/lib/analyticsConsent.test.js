import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

let consent

beforeEach(async () => {
  vi.resetModules()
  localStorage.clear()
  sessionStorage.clear()
  window.history.replaceState(null, '', '/')
  consent = await import('./analyticsConsent')
})

afterEach(() => {
  vi.restoreAllMocks()
  delete window.dataLayer
})

describe('analytics consent contract', () => {
  it('reads only valid stored choices', () => {
    expect(consent.readAnalyticsConsent()).toBe('unknown')
    localStorage.setItem('analytics-consent-v1', 'invalid')
    expect(consent.readAnalyticsConsent()).toBe('unknown')
    localStorage.setItem('analytics-consent-v1', 'granted')
    expect(consent.readAnalyticsConsent()).toBe('granted')
  })

  it('persists explicit choices and emits the exact event detail', () => {
    const listener = vi.fn()
    window.addEventListener('analytics-consent-change', listener)
    expect(consent.setAnalyticsConsent('granted')).toEqual({
      analytics: 'granted',
      persisted: true,
    })
    expect(localStorage.getItem('analytics-consent-v1')).toBe('granted')
    expect(listener.mock.calls[0][0].detail).toEqual({ analytics: 'granted' })
    window.dataLayer = [{ eventName: 'search' }]
    document.cookie = '_ga=fictional; Path=/'
    document.cookie = '_ga_TEST=fictional; Path=/'
    document.cookie = 'essential=keep; Path=/'
    consent.setAnalyticsConsent('denied')
    expect(consent.readAnalyticsConsent()).toBe('denied')
    expect(window.dataLayer).toEqual([])
    expect(document.cookie).not.toContain('_ga')
    expect(document.cookie).toContain('essential=keep')
    expect(listener.mock.calls[1][0].detail).toEqual({ analytics: 'denied' })
    window.removeEventListener('analytics-consent-change', listener)
  })

  it('fails closed on reads and permits explicit in-memory choices on write failure', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Blocked')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Blocked')
    })
    expect(consent.readAnalyticsConsent()).toBe('unknown')
    expect(consent.setAnalyticsConsent('granted').persisted).toBe(false)
    expect(consent.readAnalyticsConsent()).toBe('granted')
    expect(consent.setAnalyticsConsent('denied').persisted).toBe(false)
    expect(consent.readAnalyticsConsent()).toBe('denied')
  })

  it('retains a session denial over an older persistent grant', async () => {
    localStorage.setItem('analytics-consent-v1', 'granted')
    const setItem = Storage.prototype.setItem
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(
      function (key, value) {
        if (this === localStorage) throw new Error('Blocked')
        setItem.call(this, key, value)
      }
    )
    consent.setAnalyticsConsent('denied')
    vi.resetModules()
    expect((await import('./analyticsConsent')).readAnalyticsConsent()).toBe(
      'denied'
    )
  })

  it('rejects invalid input without changing storage', () => {
    expect(() => consent.setAnalyticsConsent('yes')).toThrow(TypeError)
    expect(consent.readAnalyticsConsent()).toBe('unknown')
  })

  it('retains denial on reload even when both storage writes fail', async () => {
    localStorage.setItem('analytics-consent-v1', 'granted')
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Blocked')
    })
    consent.setAnalyticsConsent('denied')
    vi.resetModules()
    expect((await import('./analyticsConsent')).readAnalyticsConsent()).toBe(
      'denied'
    )
    expect(
      new URL(window.location.href).searchParams.get('analytics-consent-v1')
    ).toBe('denied')
  })
})
