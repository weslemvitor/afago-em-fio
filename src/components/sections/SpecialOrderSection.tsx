import { MessageCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'

import { whatsappUrl } from '../../data/store'
import { Button } from '../ui/button'
import { Reveal } from './Reveal'

export function SpecialOrderSection() {
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

      const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.25
      node.style.transform = `translateY(${offset}px)`
    }

    update()
    window.addEventListener('scroll', update, { passive: true })

    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
      <div ref={backgroundRef} className="parallax-dark absolute -inset-[30%] will-change-transform" />
      <div className="relative z-10 max-w-2xl px-6 md:px-12">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--blush)]">Encomenda especial</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mb-9 text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-[1.08] text-[var(--warm-white)]">
            Tem algo em
            <br />
            <em className="text-[var(--terracotta)]">mente?</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mb-9 max-w-xl text-base font-light leading-8 text-[var(--sand)]">
            Personalizamos qualquer peca do jeito que voce imaginar. Escolha as cores, o tamanho, o ponto. Vamos criar
            juntos algo unico so para voce.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <Button asChild>
            <a
              href={`${whatsappUrl}?text=${encodeURIComponent('Ola! Gostaria de fazer uma encomenda personalizada de croche.')}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
