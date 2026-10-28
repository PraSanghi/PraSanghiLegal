'use client'

import { useSyncExternalStore } from 'react'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'prasanghi-theme'

type Theme = 'brand' | 'classic'

// Read straight from `html[data-theme]` (set before first paint by the
// inline script in layout.tsx), so the button never disagrees with what's
// on screen and needs no setState-in-effect sync.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}
const getSnapshot = (): Theme =>
  document.documentElement.getAttribute('data-theme') === 'classic' ? 'classic' : 'brand'
const getServerSnapshot = (): Theme => 'brand'

// Switches between the logo palette (gold / ink / ivory, the default) and
// the original navy / teal palette — globals.css `html[data-theme='classic']`
// remaps the same tokens, so no component markup changes.
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  function toggle() {
    const next: Theme = theme === 'brand' ? 'classic' : 'brand'
    if (next === 'classic') document.documentElement.setAttribute('data-theme', 'classic')
    else document.documentElement.removeAttribute('data-theme')
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage disabled — the switch still applies to this page view.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'brand' ? 'Switch to the classic navy colour theme' : 'Switch to the gold logo colour theme'}
      title={theme === 'brand' ? 'Classic theme' : 'Logo theme'}
      className={cn(
        'flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-150 ease-out hover:border-gold-500',
        className
      )}
    >
      {/* Shows the palette you'd switch TO */}
      <span
        aria-hidden="true"
        className="size-4 rounded-full ring-1 ring-black/10"
        style={{
          background:
            theme === 'brand'
              ? 'linear-gradient(135deg, oklch(0.248 0.076 265.364) 50%, oklch(0.536 0.089 205.032) 50%)'
              : 'linear-gradient(135deg, #15171c 50%, #bc9a53 50%)',
        }}
      />
    </button>
  )
}
