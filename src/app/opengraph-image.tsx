import { ImageResponse } from 'next/og'
import { siteName, siteTagline } from '@/lib/site-config'

export const alt = `${siteName} — ${siteTagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Sitewide fallback social-share card — any route without its own
// opengraph-image.tsx inherits this one. Colors are the brand's blue-900
// and teal-600 as plain hex (Satori, the renderer behind ImageResponse,
// doesn't support the oklch() functions globals.css uses for the same
// tokens).
export default function OpengraphImage() {
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
          backgroundColor: '#0f1e45',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 88,
            height: 6,
            backgroundColor: '#14b8a6',
            marginBottom: 40,
          }}
        />
        <div style={{ display: 'flex', fontSize: 88, fontWeight: 700, color: '#ffffff' }}>
          {siteName}
        </div>
        <div style={{ display: 'flex', fontSize: 36, color: '#a9b4d0', marginTop: 20 }}>
          {siteTagline}
        </div>
      </div>
    ),
    { ...size }
  )
}
