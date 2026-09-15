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
    expect(screen.getByText(/Fire safety certification/i)).toBeInTheDocument()
  })
})
