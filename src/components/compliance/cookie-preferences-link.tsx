'use client'

export function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
      className="hover:text-teal-400"
    >
      Cookie Preferences
    </button>
  )
}
