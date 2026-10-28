import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { siteName, siteSlogan, siteTagline } from '@/lib/site-config'

export const alt = `${siteName} — ${siteTagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Sitewide fallback social-share card — any route without its own
// opengraph-image.tsx inherits this one. Plain hex: Satori, the renderer
// behind ImageResponse, doesn't read globals.css tokens (ink-900, gold-300).
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/brand/prasanghi-lockup-light.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#15171c',
          fontFamily: 'serif',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={369} height={343} alt="" />
        <div style={{ display: 'flex', width: 88, height: 2, backgroundColor: '#bc9a53', marginTop: 36 }} />
        <div style={{ display: 'flex', fontSize: 36, fontStyle: 'italic', color: '#d9bc78', marginTop: 28 }}>
          {siteSlogan}
        </div>
      </div>
    ),
    { ...size }
  )
}
