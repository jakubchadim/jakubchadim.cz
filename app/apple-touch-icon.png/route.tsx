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
        color: 'white',
        fontSize: 92,
        fontWeight: 700,
        letterSpacing: -4,
      }}
    >
      JC
      <div style={{ width: 18, height: 18, borderRadius: 9, background: '#ff3f2e', marginLeft: 6, marginTop: 44 }} />
    </div>,
    { width: 180, height: 180 },
  )
}
