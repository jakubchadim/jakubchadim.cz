import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sans = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

const title = 'Jakub Chadim — Product engineer & founder'
const description =
  '15 years of shipping software. First developer at Oddin.gg (0 → $31M ARR), co-founder of Schema Flow and Instant Schema. Building toward a venture-scale company.'

export const metadata: Metadata = {
  metadataBase: new URL('https://jakubchadim.cz'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://jakubchadim.cz',
    type: 'profile',
    images: ['/jakub_chadim.jpg'],
  },
  twitter: { card: 'summary', title, description },
}

export const viewport: Viewport = { themeColor: '#0b0b0c' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
