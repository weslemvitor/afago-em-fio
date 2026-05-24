import { useEffect, useRef } from 'react'

import { Reveal } from './Reveal'

export function QuoteSection() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const node = backgroundRef.current

      if (!node) {
        return
      }

      const section = node.closest('section')
      const rect = section?.getBoundingClientRect()

      if (!rect) {
        return
      }

      const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.3
      node.style.transform = `translateY(${offset}px)`
    }

    update()
    window.addEventListener('scroll', update, { passive: true })

    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
      <div ref={backgroundRef} className="parallax-soft absolute -inset-[20%] will-change-transform" />
      <Reveal className="relative z-10 max-w-3xl px-6 text-center md:px-12">
        <p className="font-display text-[clamp(2rem,4vw,3.4rem)] font-light italic leading-snug text-[var(--deep-brown)]">
          "O croche nao e apenas uma tecnica: e uma meditacao, uma forma de transformar fio em abraco."
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--terracotta)]">Afago em Fio - Artesanato com alma</p>
      </Reveal>
    </section>
  )
}
