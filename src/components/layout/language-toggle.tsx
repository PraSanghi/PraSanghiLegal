'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'prasanghi-lang'

// Flips `html[data-lang]`, which globals.css uses to show/hide the
// .lang-en/.lang-hi spans every Bi() renders and to swap the brand
// typeface to its Devanagari cut — see that file for why. No route
// change, no client data fetch: every page stays a plain Server
// Component.
export function LanguageToggle() {
  const [lang, setLang] = useState<'en' | 'hi'>('en')

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-lang')
    if (current === 'hi') setLang('hi')
  }, [])

  function toggle() {
    const next = lang === 'en' ? 'hi' : 'en'
    setLang(next)
    document.documentElement.setAttribute('data-lang', next)
    document.documentElement.setAttribute('lang', next === 'hi' ? 'hi' : 'en-IN')
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Private browsing / storage disabled — the toggle still works for
      // this page view, it just won't be remembered on the next visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === 'en' ? 'हिंदी में देखें' : 'View this site in English'}
      className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-body-sm font-semibold transition-colors duration-150 ease-out hover:border-gold-500"
    >
      <span className={lang === 'en' ? 'text-ink-900' : 'text-muted-foreground'}>EN</span>
      <span className="text-border" aria-hidden="true">
        |
      </span>
      <span className={lang === 'hi' ? 'text-ink-900' : 'text-muted-foreground'}>हिं</span>
    </button>
  )
}
