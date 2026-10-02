import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

// Served as /apple-touch-icon.png; see app/og.png/route.tsx for why this isn't apple-icon.tsx.
export const dynamic = 'force-static'

export async function GET() {
  const sun = await readFile(join(process.cwd(), 'public/brand/3day-sun.svg'))
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#101d22',
        color: 'white',
        fontSize: 92,
        fontWeight: 700,
        letterSpacing: -4,
      }}
    >
      JC
      {/* biome-ignore lint/performance/noImgElement: satori */}
      <img
        src={`data:image/svg+xml;base64,${sun.toString('base64')}`}
        alt=''
        width={30}
        height={30}
        style={{ marginLeft: 6, marginTop: 40 }}
      />
    </div>,
    { width: 180, height: 180 },
  )
}
