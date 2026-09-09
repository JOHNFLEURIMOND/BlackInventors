import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import CookieConsent from './CookieConsent'
import {
  readAnalyticsConsent,
  setAnalyticsConsent,
} from '../lib/analyticsConsent'

vi.mock('../lib/analyticsConsent', () => ({
  readAnalyticsConsent: vi.fn(),
  setAnalyticsConsent: vi.fn(),
}))

beforeEach(() => {
  readAnalyticsConsent.mockReturnValue('unknown')
  setAnalyticsConsent.mockImplementation((analytics) => ({
    analytics,
    persisted: true,
  }))
})
afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

it('offers equal explicit choices and keeps settings available with focus restoration', () => {
  render(<CookieConsent />)
  expect(screen.getByRole('button', { name: 'Accept analytics' })).toBeTruthy()
  fireEvent.click(screen.getByRole('button', { name: 'Reject analytics' }))
  expect(setAnalyticsConsent).toHaveBeenCalledWith('denied')
  const settings = screen.getByRole('button', { name: 'Cookie settings' })
  expect(document.activeElement).toBe(settings)
  expect(screen.queryByRole('button', { name: 'Accept analytics' })).toBeNull()
  fireEvent.click(settings)
  const heading = screen.getByRole('heading', { name: 'Analytics cookies' })
  expect(document.activeElement).toBe(heading)
  fireEvent.keyDown(heading, { key: 'Escape' })
  expect(document.activeElement).toBe(settings)
})

it('does not reopen automatically for a saved choice, but permits revocation', () => {
  readAnalyticsConsent.mockReturnValue('granted')
  render(<CookieConsent />)
  expect(screen.queryByRole('button', { name: 'Reject analytics' })).toBeNull()
  fireEvent.click(screen.getByRole('button', { name: 'Cookie settings' }))
  fireEvent.click(screen.getByRole('button', { name: 'Reject analytics' }))
  expect(setAnalyticsConsent).toHaveBeenCalledWith('denied')
})

it('reports a storage failure without hiding the settings control', () => {
  setAnalyticsConsent.mockReturnValue({
    analytics: 'granted',
    persisted: false,
  })
  render(<CookieConsent />)
  fireEvent.click(screen.getByRole('button', { name: 'Accept analytics' }))
  expect(screen.getByRole('status').textContent).toContain('could not save')
  expect(screen.getByRole('button', { name: 'Cookie settings' })).toBeTruthy()
})

it.each([
  'Cookie settings',
  'Close settings',
  'Accept analytics',
  'Reject analytics',
])('closes without granting consent when Escape is pressed on %s', (name) => {
  render(<CookieConsent />)
  const control = screen.getByRole('button', { name })
  control.focus()
  fireEvent.keyDown(control, { key: 'Escape' })
  expect(screen.queryByRole('button', { name: 'Accept analytics' })).toBeNull()
  expect(document.activeElement).toBe(
    screen.getByRole('button', { name: 'Cookie settings' })
  )
  expect(setAnalyticsConsent).not.toHaveBeenCalled()
})
