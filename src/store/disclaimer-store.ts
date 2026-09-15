import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface DisclaimerState {
  acknowledged: boolean
  acknowledge: () => void
}

export const useDisclaimerStore = create<DisclaimerState>()(
  persist(
    (set) => ({
      acknowledged: false,
      acknowledge: () => set({ acknowledged: true }),
    }),
    {
      name: 'prasanghi-bci-disclaimer',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
