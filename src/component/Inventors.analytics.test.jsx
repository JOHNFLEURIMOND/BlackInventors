import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import Inventors from './Inventors'
import { trackFilter, trackSearch } from '../lib/analytics'
import { readAnalyticsConsent } from '../lib/analyticsConsent'

vi.mock('../lib/analytics', () => ({
  trackFilter: vi.fn(),
  trackSearch: vi.fn(),
  trackInventorClick: vi.fn(),
}))
vi.mock('../lib/analyticsConsent', () => ({
  readAnalyticsConsent: vi.fn(() => 'granted'),
}))
beforeEach(() => {
  vi.useFakeTimers()
  vi.clearAllMocks()
  vi.mocked(readAnalyticsConsent).mockReturnValue('granted')
  render(
    <StrictMode>
      <BrowserRouter>
        <Inventors />
      </BrowserRouter>
    </StrictMode>
  )
})
afterEach(() => {
  cleanup()
  vi.useRealTimers()
})
const advance = () => act(() => vi.advanceTimersByTime(600))
it('does not emit a search on mount, filter changes or repeated filter selection', () => {
  advance()
  expect(trackSearch).not.toHaveBeenCalled()
  const select = screen.getByRole('combobox', { name: /^era$/i })
  fireEvent.change(select, { target: { value: '1700s' } })
  advance()
  expect(trackSearch).not.toHaveBeenCalled()
  expect(trackFilter).toHaveBeenCalledTimes(1)
  expect(trackFilter).toHaveBeenLastCalledWith(
    expect.objectContaining({
      type: 'era',
      value: '1700s',
      previousValue: 'all',
      resultCount: expect.any(Number),
    })
  )
  fireEvent.click(screen.getByRole('button', { name: /^1700s/ }))
  expect(trackFilter).toHaveBeenCalledTimes(1)
})
it('debounces changed normalized queries with the final result count', () => {
  const input = screen.getByRole('searchbox')
  fireEvent.change(input, { target: { value: 'Lati' } })
  fireEvent.change(input, { target: { value: 'Latimer' } })
  advance()
  expect(trackSearch).toHaveBeenCalledExactlyOnceWith({
    query: 'latimer',
    resultCount: 1,
  })
  fireEvent.change(input, { target: { value: ' LATIMER ' } })
  advance()
  expect(trackSearch).toHaveBeenCalledTimes(1)
})
it('does not replay a pre-consent search or a pending search across consent changes', () => {
  vi.mocked(readAnalyticsConsent).mockReturnValue('denied')
  fireEvent.change(screen.getByRole('searchbox'), {
    target: { value: 'Latimer' },
  })
  vi.mocked(readAnalyticsConsent).mockReturnValue('granted')
  advance()
  expect(trackSearch).not.toHaveBeenCalled()
  fireEvent.change(screen.getByRole('searchbox'), {
    target: { value: 'Lewis' },
  })
  act(() => window.dispatchEvent(new Event('analytics-consent-change')))
  advance()
  expect(trackSearch).not.toHaveBeenCalled()
})
