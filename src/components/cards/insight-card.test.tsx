import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InsightCard } from './insight-card'

describe('InsightCard', () => {
  it('renders a real <time> element with a machine-readable datetime', () => {
    render(
      <InsightCard
        contentType="Legal Update"
        date="2026-09-01"
        headline="Amendment to the Fire Safety Compliance Rules"
        href="/insights/fire-safety-compliance-amendment"
      />
    )
    const time = screen.getByText(/01 Sept? 2026/i)
    expect(time.tagName.toLowerCase()).toBe('time')
    expect(time).toHaveAttribute('datetime', '2026-09-01')
  })

  it('links to the correct href and shows the content-type label as real text, not color alone', () => {
    render(
      <InsightCard
        contentType="Article"
        date="2026-08-15"
        headline="Understanding the Fire Safety NOC Process"
        href="/insights/fire-safety-noc-process"
      />
    )
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/insights/fire-safety-noc-process'
    )
    expect(screen.getByText('Article')).toBeInTheDocument()
  })
})
