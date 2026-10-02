import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { profile } from '../content'

// Served as /og.png (a route handler rather than opengraph-image.tsx so the
// static export keeps the .png extension and GitHub Pages sends image/png).
export const dynamic = 'force-static'

export async function GET() {
  const photo = await readFile(join(process.cwd(), 'public', profile.photo))
  const src = `data:image/jpeg;base64,${photo.toString('base64')}`

  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', background: '#101d22', color: '#d8e7ec' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 520, height: 630, display: 'flex' }}>
        {/* biome-ignore lint/performance/noImgElement: satori */}
        <img src={src} alt='' width={520} height={630} style={{ objectFit: 'cover', objectPosition: '50% 25%' }} />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 520,
            height: 630,
            background: 'linear-gradient(to right, #101d22 0%, rgba(16,29,34,0.6) 25%, rgba(16,29,34,0) 60%)',
          }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          width: 760,
          padding: '60px 0 60px 72px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 500, letterSpacing: -0.5, color: 'white' }}>
          Jakub Chadim
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 70, lineHeight: 1.04, letterSpacing: -2.5, color: 'white' }}>Product engineer.</div>
          <div style={{ fontSize: 70, lineHeight: 1.04, letterSpacing: -2.5, color: 'white' }}>Founder</div>
          <div style={{ fontSize: 70, lineHeight: 1.04, letterSpacing: -2.5, color: '#ff6e61' }}>in the making.</div>
          <div style={{ marginTop: 30, fontSize: 26, lineHeight: 1.4, color: '#a5b5bc', maxWidth: 560 }}>
            Founding frontend engineer behind a $31M ARR company. Co-founder of two SaaS products.
          </div>
        </div>

        <div style={{ fontSize: 20, letterSpacing: 4, color: '#6a7e86' }}>JAKUBCHADIM.CZ</div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  )
}
