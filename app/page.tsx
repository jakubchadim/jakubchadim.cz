import { PersonJsonLd, Pill } from './_shared/brand'
import { CountUp, Reveal } from './_shared/motion'
import { metrics, next, now, principles, profile, stack, work } from './content'
import { EmberHero } from './_shared/hero'

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='mb-10 flex items-center gap-3 text-mist text-sm uppercase tracking-[0.18em]'>
      <span aria-hidden className='h-px w-8 bg-brand' />
      {children}
    </h2>
  )
}

export default function Home() {
  return (
    <main className='overflow-x-clip bg-ink text-fog'>
      <PersonJsonLd />
      <EmberHero />

      <div className='mx-auto max-w-6xl px-5 sm:px-10'>
        {/* Statement */}
        <section className='py-28 sm:py-40'>
          <Reveal>
            <p className='max-w-4xl text-[clamp(1.6rem,3.6vw,2.9rem)] text-fog leading-[1.25] tracking-[-0.015em]'>
              Founding frontend engineer at the <span className='accent'>fastest-growing</span> tech company in Central
              Europe. Scaled the product from zero to <span className='accent'>$31M ARR</span> and a $95M
              valuation. Now building toward my own <span className='accent accent-brand'>venture-scale</span>{' '}
              company.
            </p>
          </Reveal>
        </section>

        {/* Metrics */}
        <section className='grid grid-cols-2 border-white/10 border-t lg:grid-cols-4'>
          {metrics.map((m, i) => (
            <Reveal
              key={m.value}
              delay={i * 90}
              className='border-white/10 border-b py-10 pr-6 odd:border-r lg:border-r lg:last:border-r-0 lg:[&:not(:first-child)]:pl-8'
            >
              <p className='font-medium text-[clamp(2.4rem,5vw,4.2rem)] text-white leading-none tracking-[-0.04em]'>
                <CountUp value={m.value} />
              </p>
              <p className='mt-4 font-serif text-lg text-mist italic leading-snug'>{m.label}</p>
            </Reveal>
          ))}
        </section>

        {/* Now */}
        <section className='pt-32'>
          <Label>Now</Label>
          <ol>
            {now.map((n, i) => (
              <Reveal as='li' key={n.name} delay={i * 80}>
                <a
                  href={n.url}
                  target='_blank'
                  rel='noreferrer'
                  className='group grid gap-3 border-white/10 border-b py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-8'
                >
                  <span className='font-medium text-2xl text-brand-soft'>0{i + 1}</span>
                  <div>
                    <p className='font-medium text-3xl text-white uppercase tracking-tight transition-colors group-hover:text-brand-soft'>
                      {n.name}
                    </p>
                    <p className='mt-2 max-w-xl text-mist'>{n.text}</p>
                    <p className='mt-2 font-serif text-lg italic'>{n.role.toLowerCase()}</p>
                  </div>
                  <span className='text-2xl text-mist transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white'>
                    ↗
                  </span>
                </a>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Track record */}
        <section className='pt-32'>
          <Label>Track record</Label>
          <ol className='space-y-4'>
            {work.map((w, i) => (
              <Reveal as='li' key={w.name} delay={i * 60}>
                <article className='group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2/40 p-7 transition-colors duration-500 hover:border-brand/40 sm:p-10'>
                  <div className='-z-0 pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,#ff3f2e33,transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100' />
                  <div className='relative grid gap-6 lg:grid-cols-[1fr_1.4fr]'>
                    <div>
                      <div className='flex flex-wrap items-center gap-2 text-mist'>
                        <Pill>{w.period}</Pill>
                        <Pill>{w.role}</Pill>
                      </div>
                      <h3 className='mt-6 font-medium text-4xl text-white uppercase tracking-tight sm:text-5xl'>
                        {w.url ? (
                          <a href={w.url} target='_blank' rel='noreferrer' className='hover:text-brand-soft'>
                            {w.name}
                          </a>
                        ) : (
                          w.name
                        )}
                      </h3>
                      <p className='accent accent-brand mt-3 inline-block text-2xl'>{w.kicker}</p>
                    </div>
                    <div>
                      <p className='text-fog text-lg leading-relaxed'>{w.summary}</p>
                      {w.points.length > 0 && (
                        <ul className='mt-5 space-y-3 text-mist'>
                          {w.points.map((p) => (
                            <li key={p} className='flex gap-3 leading-relaxed'>
                              <span className='mt-2.5 h-px w-4 shrink-0 bg-brand' />
                              {p}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Principles */}
        <section className='pt-32'>
          <Label>How I build</Label>
          <div className='grid gap-10 md:grid-cols-3'>
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <p className='font-medium text-2xl text-brand-soft'>0{i + 1}</p>
                <p className='mt-3 font-medium text-2xl text-white uppercase tracking-tight'>{p.title}</p>
                <p className='mt-3 text-mist leading-relaxed'>{p.text}</p>
              </Reveal>
            ))}
          </div>
          <p className='mt-16 font-mono text-slate text-xs uppercase leading-loose tracking-[0.18em]'>{stack}</p>
        </section>
      </div>

      {/* CTA */}
      <section className='grain relative mt-32 overflow-hidden'>
        <div className='-z-0 absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_100%,#ff3f2e88,#b30f0044_45%,transparent_75%)]' />
        <div className='relative mx-auto max-w-6xl px-5 py-32 sm:px-10 sm:py-44'>
          <Reveal>
            <Label>{next.title}</Label>
            <p className='max-w-4xl font-medium text-[clamp(2.4rem,7vw,6rem)] text-white leading-[0.98] tracking-[-0.035em]'>
              Let’s build something <span className='accent'>big.</span>
            </p>
            <p className='mt-8 max-w-2xl text-fog text-lg leading-relaxed'>{next.text}</p>
            <div className='mt-12 flex flex-wrap items-center gap-4'>
              <a
                href={`mailto:${profile.email}`}
                className='rounded-2xl bg-white px-6 py-4 font-medium text-ink transition-transform hover:-translate-y-0.5'
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target='_blank'
                rel='noreferrer'
                className='rounded-2xl border border-white/20 px-6 py-4 transition-colors hover:border-white'
              >
                LinkedIn
              </a>
              <a
                href={profile.cv}
                target='_blank'
                rel='noreferrer'
                className='rounded-2xl border border-white/20 px-6 py-4 transition-colors hover:border-white'
              >
                CV.pdf
              </a>
            </div>
          </Reveal>
        </div>
        <footer className='relative mx-auto flex max-w-6xl justify-between px-5 pb-10 font-mono text-mist text-xs uppercase tracking-[0.18em] sm:px-10'>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
        </footer>
      </section>
    </main>
  )
}
