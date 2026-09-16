import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PracticeAreaCard } from './practice-area-card'

describe('PracticeAreaCard', () => {
  it('renders as a single accessible link with title and description', () => {
    render(
      <PracticeAreaCard
        title="Regulatory & Advisory"
        description="Fire safety certification, statutory registrations, and compliance counsel."
        href="/practice-areas/regulatory-advisory"
      />
    )
    const link = screen.getByRole('link', { name: /Regulatory & Advisory/i })
    expect(link).toHaveAttribute('href', '/practice-areas/regulatory-advisory')
    // Two matches are expected: the i18n Bi() helper always renders both an
    // English and a Hindi span (see components/i18n/bi.tsx) — CSS shows only
    // one, but with no descriptionHi passed here both fall back to the same
    // English text.
    expect(screen.getAllByText(/Fire safety certification/i).length).toBeGreaterThan(0)
  })
})
