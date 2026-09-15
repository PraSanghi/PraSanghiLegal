import { describe, it, expect, beforeEach } from 'vitest'
import { useDisclaimerStore } from './disclaimer-store'

describe('useDisclaimerStore', () => {
  beforeEach(() => {
    useDisclaimerStore.setState({ acknowledged: false })
    sessionStorage.clear()
  })

  it('starts unacknowledged', () => {
    expect(useDisclaimerStore.getState().acknowledged).toBe(false)
  })

  it('sets acknowledged to true after acknowledge() is called', () => {
    useDisclaimerStore.getState().acknowledge()
    expect(useDisclaimerStore.getState().acknowledged).toBe(true)
  })

  it('persists acknowledgment to sessionStorage', () => {
    useDisclaimerStore.getState().acknowledge()
    const raw = sessionStorage.getItem('prasanghi-bci-disclaimer')
    expect(raw).not.toBeNull()
    expect(JSON.parse(raw as string).state.acknowledged).toBe(true)
  })
})
