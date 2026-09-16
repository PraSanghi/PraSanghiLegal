'use client'

import { Bi } from '@/components/i18n/bi'

export function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
      className="hover:text-teal-400"
    >
      <Bi en="Cookie Preferences" hi="कुकी प्राथमिकताएँ" />
    </button>
  )
}
