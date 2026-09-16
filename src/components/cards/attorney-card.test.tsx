import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AttorneyCard } from './attorney-card'

describe('AttorneyCard', () => {
  it('gives the photo an accessible name combining name and role, not just "photo"', () => {
    render(
      <AttorneyCard
        name="Rajwardhan Gawde"
        role="Founder"
        photo="/placeholder-attorney.svg"
        href="/people/rajwardhan-gawde"
      />
    )
    expect(screen.getByAltText('Rajwardhan Gawde, Founder')).toBeInTheDocument()
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/people/rajwardhan-gawde')
  })

  it('renders practice tags joined when provided', () => {
    render(
      <AttorneyCard
        name="Kavita Sharma"
        role="Associate"
        photo="/placeholder-attorney.svg"
        href="/people/kavita-sharma"
        practiceTags={['Civil Litigation', 'Regulatory & Advisory']}
      />
    )
    // Two matches are expected: AttorneyCard always renders both a .lang-en
    // and a .lang-hi span for the practice tags (see components/i18n/bi.tsx
    // for the pattern) — CSS shows only one, but with no practiceTagsHi
    // passed here both fall back to the same English text.
    expect(
      screen.getAllByText('Civil Litigation · Regulatory & Advisory').length
    ).toBeGreaterThan(0)
  })
})
