import type { MetadataRoute } from 'next'
import { profile } from './content'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.name,
    short_name: 'Jakub Chadim',
    description: `${profile.name} — ${profile.role}`,
    start_url: '/',
    display: 'browser',
    background_color: '#101d22',
    theme_color: '#101d22',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
