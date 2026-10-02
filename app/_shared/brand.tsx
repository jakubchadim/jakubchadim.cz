import Link from 'next/link'
import { now, profile } from '../content'

/** Pill of horizontal speed lines, as in the 3DAY.STUDIO wordmark. */
export function SpeedPill({ className = '' }: { className?: string }) {
  return <span aria-hidden className={`speed-lines inline-block rounded-full ${className}`} />
}

/** "JAKUB ≡ CHADIM" wordmark echoing "3DAY ≡ STUDIO". */
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <Link href='/' className={`inline-flex items-center gap-1.5 font-bold tracking-tight ${className}`}>
      JAKUB
      <SpeedPill className='h-[0.8em] w-[2.2em]' />
      CHADIM
    </Link>
  )
}

export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: 'https://jakubchadim.cz',
    image: `https://jakubchadim.cz${profile.photo}`,
    email: `mailto:${profile.email}`,
    jobTitle: profile.role,
    homeLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: profile.city, addressCountry: 'CZ' },
    },
    worksFor: now.map((n) => ({ '@type': 'Organization', name: n.name, url: n.url })),
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Hradec Králové' },
    knowsAbout: ['Product engineering', 'React', 'TypeScript', 'GraphQL', 'Structured data', 'AI'],
    sameAs: [profile.linkedin, profile.github],
  }
  // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function Pill({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] ${className}`}
    >
      {children}
    </span>
  )
}
