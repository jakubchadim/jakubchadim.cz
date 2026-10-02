import { ImageResponse } from 'next/og'

// Served as /apple-touch-icon.png; see app/og.png/route.tsx for why this isn't apple-icon.tsx.
export const dynamic = 'force-static'

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#101d22',
      }}
    >
      <div
        style={{
          width: 124,
          height: 74,
          borderRadius: 37,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ height: 16, background: '#ff3f2e' }} />
        ))}
      </div>
    </div>,
    { width: 180, height: 180 },
  )
}
