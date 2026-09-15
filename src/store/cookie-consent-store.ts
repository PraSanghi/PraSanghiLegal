import { create } from 'zustand'
import { persist, createJSONStorage, type StateStorage } from 'zustand/middleware'
import { getCookie, setCookie, deleteCookie } from '@/lib/cookies'

// A visitor's cookie choice is stored as a real first-party cookie (not
// localStorage) — 180-day expiry — so "we use cookies" is literally true,
// not a euphemism for browser storage. Analytics (Vercel Web Analytics) is
// gated on `analytics: true`.
const COOKIE_NAME = 'prasanghi_cookie_consent'

const cookieStorage: StateStorage = {
  getItem: (name) => (name === COOKIE_NAME ? getCookie(name) : null),
  setItem: (name, value) => {
    if (name === COOKIE_NAME) setCookie(name, value, 180)
  },
  removeItem: (name) => {
    if (name === COOKIE_NAME) deleteCookie(name)
  },
}

interface CookieConsentState {
  decided: boolean
  analytics: boolean
  acceptAll: () => void
  rejectNonEssential: () => void
  setAnalytics: (enabled: boolean) => void
}

export const useCookieConsentStore = create<CookieConsentState>()(
  persist(
    (set) => ({
      decided: false,
      analytics: false,
      acceptAll: () => set({ decided: true, analytics: true }),
      rejectNonEssential: () => set({ decided: true, analytics: false }),
      setAnalytics: (enabled) => set({ decided: true, analytics: enabled }),
    }),
    {
      name: COOKIE_NAME,
      storage: createJSONStorage(() => cookieStorage),
    }
  )
)
