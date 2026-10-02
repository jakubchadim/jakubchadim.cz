'use client'

import { useEffect } from 'react'
import { Pill, Wordmark } from './brand'
import { useScrollVelocityVar } from './motion'
import { profile } from '../content'

function Headline() {
  return (
    <>
      Product engineer.
      <br />
      Founder <span className='accent accent-brand'>in the making.</span>
    </>
  )
}

export function EmberHero() {
  const ref = useScrollVelocityVar<HTMLElement>()

  // Smoke glow follows the pointer.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
      el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
    }
    el.addEventListener('pointermove', onMove)
    return () => el.removeEventListener('pointermove', onMove)
  }, [ref])

  return (
    <section
      ref={ref}
      className='grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink'
      style={{ '--mx': '70%', '--my': '40%', '--v': 0 } as React.CSSProperties}
    >
      {/* Smoke */}
      <div className='-z-10 absolute inset-0'>
        <div className='absolute top-[-20%] right-[-10%] size-[90vmax] animate-drift rounded-full bg-[radial-gradient(closest-side,#ff3f2e55,#b30f0022_55%,transparent)] blur-2xl' />
        <div
          className='absolute inset-0 transition-[background] duration-300'
          style={{
            background:
              'radial-gradient(38vmax circle at var(--mx) var(--my), #ff6e6133, #ff3f2e14 45%, transparent 70%)',
          }}
        />
      </div>

      {/* Portrait */}
      <img
        src={profile.photo}
        alt={`${profile.name}, portrait`}
        fetchPriority='high'
        className='-z-10 absolute inset-y-0 right-0 h-full w-full object-cover object-[50%_25%] opacity-55 mix-blend-lighten [mask-image:linear-gradient(to_bottom,black_30%,transparent_85%)] md:w-[60%] md:opacity-100 md:[mask-image:linear-gradient(to_right,transparent,black_40%)]'
      />

      <header className='flex items-center justify-between gap-4 px-5 py-6 sm:px-10'>
        <Wordmark className='h-4 sm:h-[22px]' />
        <nav className='flex items-center gap-2 text-sm'>
          <a
            href='https://3day.studio'
            target='_blank'
            rel='noreferrer'
            className='rounded-xl border border-white/10 px-3 py-2 backdrop-blur transition-colors hover:border-white/30 hover:text-white sm:px-4'
          >
            3day.studio ↗
          </a>
          <a
            href={`mailto:${profile.email}`}
            className='rounded-xl border border-white/10 bg-ink-2/70 px-3 py-2 backdrop-blur transition-colors hover:border-brand hover:text-white sm:px-4'
          >
            Let’s talk ↗
          </a>
        </nav>
      </header>

      <div className='mt-auto px-5 pb-10 sm:px-10 sm:pb-16'>
        <div className='mb-6 flex flex-wrap gap-2 text-mist'>
          <Pill>Engineering</Pill>
          <Pill>Product</Pill>
          <Pill>15 years</Pill>
        </div>

        <h1 className='relative max-w-5xl font-medium text-[clamp(2.6rem,8.5vw,7.5rem)] text-white leading-[0.95] tracking-[-0.035em]'>
          {/* Motion-trail ghosts, echoing the long-exposure portrait */}
          <span
            aria-hidden
            className='pointer-events-none absolute inset-0 select-none text-brand opacity-30 blur-[3px]'
            style={{ transform: 'translateX(calc(-0.06em - var(--v) * 1.6px))' }}
          >
            <Headline />
          </span>
          <span
            aria-hidden
            className='pointer-events-none absolute inset-0 select-none text-brand-deep opacity-25 blur-[6px]'
            style={{ transform: 'translateX(calc(-0.14em - var(--v) * 3.4px))' }}
          >
            <Headline />
          </span>
          <span className='relative'>
            <Headline />
          </span>
        </h1>

        <div className='mt-10 flex flex-col justify-between gap-6 text-mist text-sm sm:flex-row sm:items-end'>
          <p className='max-w-md text-base leading-relaxed'>
            Founding frontend engineer behind a $31M ARR company. Co-founder of two SaaS products. Now building toward
            my own.
          </p>
          <p className='font-mono text-xs uppercase tracking-[0.2em]'>
            {profile.city} · CZ <span className='ml-3 inline-block animate-bounce'>↓</span>
          </p>
        </div>
      </div>
    </section>
  )
}
