import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

import { whatsappUrl } from '../../data/store'
import { YarnBall } from '../illustrations/YarnBall'
import { Button } from '../ui/button'

export function HeroSection() {
  const yarnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      if (yarnRef.current) {
        yarnRef.current.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.25}px))`
      }
    }

    update()
    window.addEventListener('scroll', update, { passive: true })

    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section className="hero-surface relative flex min-h-svh items-end overflow-hidden px-6 pb-16 pt-32 md:px-12">
      <div className="hero-texture absolute inset-0" />

      <div ref={yarnRef} className="absolute right-[5%] top-1/2 w-56 opacity-55 md:right-[8%] md:w-[420px] md:opacity-100">
        <YarnBall />
      </div>

      <div className="relative z-10 max-w-3xl">
        <p className="fade-up mb-5 text-xs uppercase tracking-[0.25em] text-[var(--terracotta)] [animation-delay:0.3s]">
          Croche artesanal sob encomenda
        </p>
        <h1 className="fade-up font-display text-[clamp(4rem,8vw,8rem)] font-light leading-[0.92] text-[var(--deep-brown)] [animation-delay:0.5s]">
          Cada ponto,
          <br />
          <em className="text-[var(--terracotta)]">uma historia</em>
        </h1>
        <p className="fade-up mt-7 max-w-sm text-base font-light leading-7 text-[var(--mocha)] [animation-delay:0.7s]">
          Pecas unicas feitas a mao com cuidado e amor. Do fio a sua casa, encomende pelo WhatsApp e receba algo
          verdadeiramente especial.
        </p>
        <div className="fade-up mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5 [animation-delay:0.9s]">
          <Button asChild size="lg">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Fazer encomenda
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#produtos">
              Ver colecao
              <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </div>

      <p className="fade-up absolute bottom-10 right-6 hidden [writing-mode:vertical-rl] text-xs uppercase tracking-[0.2em] text-[var(--mocha)] opacity-50 md:block md:right-12 [animation-delay:1.2s]">
        Role para explorar
      </p>
    </section>
  )
}
