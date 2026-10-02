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
  const sun = await readFile(join(process.cwd(), 'public/brand/3day-sun.svg'))
  const [interMedium, interBold] = await Promise.all([
    readFile(join(process.cwd(), 'assets/fonts/Inter-Medium.ttf')),
    readFile(join(process.cwd(), 'assets/fonts/Inter-Bold.ttf')),
  ])

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        background: '#101d22',
        color: '#d8e7ec',
        fontFamily: 'Inter',
        fontWeight: 500,
      }}
    >
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
        <div
          style={{ display: 'flex', alignItems: 'flex-end', fontSize: 40, fontWeight: 700, letterSpacing: -1, color: 'white' }}
        >
          Jakub Chadim
          {/* biome-ignore lint/performance/noImgElement: satori */}
          <img
            src={`data:image/svg+xml;base64,${sun.toString('base64')}`}
            alt=''
            width={14}
            height={14}
            style={{ marginLeft: 4, marginBottom: 9 }}
          />
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
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: interMedium, weight: 500, style: 'normal' },
        { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
      ],
    },
  )
}
