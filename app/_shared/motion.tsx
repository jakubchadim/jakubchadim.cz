'use client'

import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Fades + un-blurs its child in when it enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'p' | 'span'
}) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = 'shown'
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag
      // biome-ignore lint/suspicious/noExplicitAny: polymorphic ref
      ref={ref as any}
      data-reveal=''
      className={className}
      style={{ '--delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}

/** Counts "$31M", "300+", "100k+" up from zero once visible. */
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/)
  const prefix = match?.[1] ?? ''
  const target = Number((match?.[2] ?? '0').replace(/,/g, ''))
  const suffix = match?.[3] ?? ''
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(target)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    setN(0)
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t: number) => {
        const k = Math.min(1, (t - start) / duration)
        setN(Math.round(target * (1 - (1 - k) ** 4)))
        if (k < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className='tabular-nums'>
      {prefix}
      {n.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

/** Smoothed scroll velocity (px/frame), written to a CSS variable on the element. */
export function useScrollVelocityVar<T extends HTMLElement>(name = '--v') {
  const ref = useRef<T>(null)
  useEffect(() => {
    if (prefersReducedMotion()) return
    let last = window.scrollY
    let v = 0
    let raf = 0
    const loop = () => {
      const y = window.scrollY
      v += (y - last - v) * 0.12
      last = y
      if (Math.abs(v) < 0.01) v = 0
      ref.current?.style.setProperty(name, v.toFixed(3))
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [name])
  return ref
}
