import Image from 'next/image'

/**
 * First-load splash: the PraSanghi monogram and wordmark fade in, then the
 * orange dot on the "i" (hidden until then) pops into place and the screen
 * lifts away to reveal the site.
 *
 * Pure CSS (keyframes in globals.css, `.splash*`). It is server-rendered, so
 * it covers the page from the very first paint with no flash, and needs no
 * JavaScript to finish: the last keyframe hides it. The inline script in
 * layout.tsx sets `data-splash-seen` on <html> for the rest of the browser
 * session, so it plays once per visit, not on every reload.
 *
 * The dot's position comes from the wordmark artwork (492 × 164 px): centre
 * at (471.5, 39.5), diameter ≈ 19 px. `prasanghi-wordmark-nodot.png` is the
 * same artwork with the dot removed.
 */
export function SplashLoader() {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash__lockup">
        <div className="splash__mark">
          <Image
            src="/brand/prasanghi-mark.png"
            alt=""
            width={337}
            height={293}
            priority
            className="h-auto w-full"
          />
          <span className="splash__sheen" />
        </div>
        <div className="splash__word">
          <Image
            src="/brand/prasanghi-wordmark-nodot.png"
            alt=""
            width={492}
            height={164}
            priority
            className="splash__word-img h-auto w-full"
          />
          <span className="splash__dot-anchor">
            <span className="splash__ring" />
            <span className="splash__dot" />
          </span>
        </div>
      </div>
    </div>
  )
}
