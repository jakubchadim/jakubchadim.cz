import { headline, metrics, next, now, principles, profile, stack, work } from './content'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: 'https://jakubchadim.cz',
  image: `https://jakubchadim.cz${profile.photo}`,
  email: `mailto:${profile.email}`,
  jobTitle: profile.role,
  address: { '@type': 'PostalAddress', addressLocality: 'Prague', addressCountry: 'CZ' },
  worksFor: now.map((n) => ({ '@type': 'Organization', name: n.name, url: n.url })),
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Hradec Králové' },
  knowsAbout: ['Product engineering', 'React', 'TypeScript', 'GraphQL', 'Structured data', 'AI'],
  sameAs: [profile.linkedin, profile.github],
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className='mb-8 font-mono text-muted text-xs uppercase tracking-[0.2em]'>{children}</h2>
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'
    >
      {children}
    </a>
  )
}

export default function Home() {
  return (
    <main className='mx-auto max-w-4xl px-5 sm:px-8'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <header className='flex items-center justify-between py-8 font-mono text-sm'>
        <span>jakubchadim.cz</span>
        <a href={`mailto:${profile.email}`} className='text-muted transition-colors hover:text-accent'>
          {profile.email}
        </a>
      </header>

      {/* Hero */}
      <section className='pt-16 pb-20 sm:pt-28'>
        <div className='mb-10 flex items-center gap-4'>
          <img
            src={profile.photo}
            alt={profile.name}
            width={56}
            height={56}
            className='size-14 rounded-full object-cover object-top'
          />
          <div>
            <p className='font-medium'>{profile.name}</p>
            <p className='text-muted text-sm'>
              {profile.role} · {profile.location}
            </p>
          </div>
        </div>
        <h1 className='max-w-3xl font-semibold text-4xl leading-[1.05] tracking-tight sm:text-6xl'>
          {headline.title}
        </h1>
        <p className='mt-8 max-w-2xl text-lg text-muted leading-relaxed sm:text-xl'>{headline.lead}</p>
        <div className='mt-10 flex flex-wrap gap-3'>
          <a
            href={`mailto:${profile.email}`}
            className='rounded-full bg-accent px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90'
          >
            Get in touch
          </a>
          <a
            href={profile.cv}
            target='_blank'
            rel='noreferrer'
            className='rounded-full border border-line px-5 py-2.5 transition-colors hover:border-fg'
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Metrics */}
      <section className='grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4'>
        {metrics.map((m) => (
          <div key={m.value} className='bg-bg p-5 sm:p-6'>
            <p className='font-semibold text-3xl tracking-tight sm:text-4xl'>{m.value}</p>
            <p className='mt-2 text-muted text-sm leading-snug'>{m.label}</p>
          </div>
        ))}
      </section>

      {/* Now */}
      <section className='pt-24'>
        <SectionLabel>Now</SectionLabel>
        <div className='grid gap-4 sm:grid-cols-3'>
          {now.map((n) => (
            <a
              key={n.name}
              href={n.url}
              target='_blank'
              rel='noreferrer'
              className='group rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent'
            >
              <div className='flex items-baseline justify-between gap-2'>
                <p className='font-semibold group-hover:text-accent'>{n.name} ↗</p>
                {n.since && <p className='font-mono text-muted text-xs'>{n.since}</p>}
              </div>
              <p className='mt-1 text-sm'>{n.role}</p>
              <p className='mt-4 text-muted text-sm leading-relaxed'>{n.text}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Track record */}
      <section className='pt-24'>
        <SectionLabel>Track record</SectionLabel>
        <ol className='divide-y divide-line border-line border-y'>
          {work.map((w) => (
            <li key={w.name} className='grid gap-2 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8'>
              <p className='font-mono text-muted text-sm'>{w.period}</p>
              <div>
                <p className='font-semibold text-xl'>
                  {w.url ? <ExternalLink href={w.url}>{w.name}</ExternalLink> : w.name}
                  <span className='font-normal text-muted'> — {w.role}</span>
                </p>
                <p className='mt-3 max-w-2xl leading-relaxed'>{w.summary}</p>
                {w.points.length > 0 && (
                  <ul className='mt-4 max-w-2xl space-y-2 text-muted'>
                    {w.points.map((p) => (
                      <li key={p} className='relative pl-5 leading-relaxed'>
                        <span className='absolute left-0 text-accent'>›</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* How I build */}
      <section className='pt-24'>
        <SectionLabel>How I build</SectionLabel>
        <div className='grid gap-8 sm:grid-cols-3'>
          {principles.map((p, i) => (
            <div key={p.title}>
              <p className='font-mono text-accent text-sm'>0{i + 1}</p>
              <p className='mt-2 font-semibold text-lg'>{p.title}</p>
              <p className='mt-2 text-muted leading-relaxed'>{p.text}</p>
            </div>
          ))}
        </div>
        <p className='mt-12 font-mono text-muted text-sm leading-relaxed'>{stack}</p>
      </section>

      {/* Next */}
      <section className='py-24'>
        <div className='rounded-3xl border border-line bg-surface p-8 sm:p-12'>
          <SectionLabel>{next.title}</SectionLabel>
          <p className='max-w-2xl text-xl leading-relaxed sm:text-2xl'>{next.text}</p>
          <div className='mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm'>
            <a href={`mailto:${profile.email}`} className='text-accent hover:underline'>
              {profile.email}
            </a>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.cv}>CV (PDF)</ExternalLink>
          </div>
        </div>
      </section>

      <footer className='border-line border-t py-8 font-mono text-muted text-xs'>
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </main>
  )
}
