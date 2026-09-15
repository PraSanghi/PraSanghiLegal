import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BciDisclaimerModal } from './bci-disclaimer-modal'
import { useDisclaimerStore } from '@/store/disclaimer-store'

describe('BciDisclaimerModal', () => {
  beforeEach(() => {
    useDisclaimerStore.setState({ acknowledged: false })
    sessionStorage.clear()
  })

  it('shows the disclaimer dialog when not yet acknowledged', async () => {
    render(<BciDisclaimerModal />)
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })
    expect(screen.getByText(/Bar Council of India/i)).toBeInTheDocument()
  })

  it('hides the dialog and updates the store after clicking "I Agree"', async () => {
    const user = userEvent.setup()
    render(<BciDisclaimerModal />)
    await waitFor(() => screen.getByRole('dialog'))
    await user.click(screen.getByRole('button', { name: /i agree/i }))
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
    expect(useDisclaimerStore.getState().acknowledged).toBe(true)
  })

  it('does not render a dialog when already acknowledged', () => {
    useDisclaimerStore.setState({ acknowledged: true })
    render(<BciDisclaimerModal />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
