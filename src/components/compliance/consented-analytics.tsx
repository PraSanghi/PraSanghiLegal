'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { useCookieConsentStore } from '@/store/cookie-consent-store'

// Vercel Web Analytics only loads once the visitor has opted in via the
// cookie consent banner — see compliance/cookie-consent-banner.tsx.
export function ConsentedAnalytics() {
  const analytics = useCookieConsentStore((state) => state.analytics)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated || !analytics) return null

  return <Analytics />
}
