import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, it } from 'vitest'
import PrivacyPolicy from './PrivacyPolicy'

it('describes opt-in analytics and accessible consent controls', () => {
  render(
    <MemoryRouter>
      <PrivacyPolicy />
    </MemoryRouter>
  )

  expect(screen.getByRole('heading', { name: 'Privacy policy' })).toBeTruthy()
  expect(screen.getByText(/Analytics is off unless/)).toBeTruthy()
  expect(screen.getByText(/exclude query strings and fragments/)).toBeTruthy()
  expect(screen.getByText(/Cookie settings/)).toBeTruthy()
  expect(screen.getByText(/do not use the site to sell/)).toBeTruthy()
})
