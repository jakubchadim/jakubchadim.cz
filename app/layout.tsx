import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Source_Serif_4 } from 'next/font/google'
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
  '15 years of shipping software. Founding frontend engineer at Oddin.gg (0 → $31M ARR), co-founder of Schema Flow and Instant Schema. Building toward a venture-scale company.'

export const metadata: Metadata = {
  metadataBase: new URL('https://jakubchadim.cz'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://jakubchadim.cz',
    type: 'profile',
    images: ['/jakub_3day.jpg'],
  },
  twitter: { card: 'summary_large_image', title, description },
}

export const viewport: Viewport = { themeColor: '#101d22' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
