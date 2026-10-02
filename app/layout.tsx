import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Source_Serif_4 } from 'next/font/google'
import { profile, siteUrl } from './content'
import './globals.css'

const sans = Inter({ subsets: ['latin', 'latin-ext'], axes: ['opsz'], variable: '--font-inter' })
const serif = Source_Serif_4({
  subsets: ['latin', 'latin-ext'],
  style: ['italic'],
  axes: ['opsz'],
  variable: '--font-source-serif',
})
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

const title = 'Jakub Chadim — Product engineer & founder'
const description =
  'Product engineer from Kostelec nad Orlicí with 15 years of shipping software. Founding frontend engineer at Oddin.gg (0 → $31M ARR), co-founder of Schema Flow and Instant Schema, building toward a venture-scale company.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: profile.name,
    locale: 'en_US',
    type: 'profile',
    firstName: 'Jakub',
    lastName: 'Chadim',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
  icons: { icon: { url: '/icon.svg', type: 'image/svg+xml' }, apple: '/apple-touch-icon.png' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#101d22' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
