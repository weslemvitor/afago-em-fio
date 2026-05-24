import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

import { whatsappUrl } from '../../data/store'
import { HookHeartMotif } from '../illustrations/CrochetMotifs'
import { Card, CardContent } from '../ui/card'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function AboutSection() {
  return (
    <section id="sobre" className="px-6 py-20 md:px-12 md:py-28">
      <SectionHeading
        label="Nossa essencia"
        title={
          <>
            Arte que se toca,
            <br />
            <em className="text-[var(--terracotta)]">afeto que se sente</em>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <Card className="relative min-h-[480px] bg-[var(--sand)] transition duration-500 hover:-translate-y-1">
            <CardContent className="justify-between p-8 md:p-9">
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--terracotta)]">Sobre a Afago</span>
                <h3 className="font-display mt-6 text-5xl font-light leading-none text-[var(--deep-brown)] md:text-6xl">
                  afago
                </h3>
              </div>

              <div className="mt-8 max-w-xl">
                <p className="text-lg font-light leading-8 text-[var(--deep-brown)] md:text-xl">
                  Afago e carinho em gesto, toque ou atitude delicada. Um cuidado suave que transmite amor, protecao e
                  acolhimento.
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-base text-[var(--deep-brown)]">Pode ser:</p>
                  <ul className="grid gap-2 text-base font-light text-[var(--mocha)] sm:grid-cols-2">
                    <li className="flex gap-3">
                      <span className="mt-2 size-2 rotate-45 bg-[var(--terracotta)]" />
                      um cafune
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 size-2 rotate-45 bg-[var(--terracotta)]" />
                      um abraco apertado
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 size-2 rotate-45 bg-[var(--terracotta)]" />
                      uma palavra doce
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 size-2 rotate-45 bg-[var(--terracotta)]" />
                      um gesto atento
                    </li>
                  </ul>
                </div>

                <p className="mt-6 text-xl font-light leading-8 text-[var(--deep-brown)]">Mais que acao fisica, e expressao de afeto.</p>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal className="md:col-span-5" delay={100}>
          <Card className="min-h-[480px] bg-[var(--deep-brown)] text-[var(--cream)] transition duration-500 hover:-translate-y-1">
            <CardContent>
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--sand)] opacity-70">Diferencial</span>
              <HookHeartMotif />
              <h3 className="font-display mt-4 text-4xl font-light leading-tight">
                Feito so
                <br />
                <em>pra voce</em>
              </h3>
              <p className="mt-3 text-sm font-light leading-7 text-[var(--sand)]">
                Personalizamos cor, tamanho e detalhes de acordo com seu gosto.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[var(--blush)] opacity-80 transition hover:gap-3 hover:opacity-100"
              >
                Personalizar agora
                <ArrowRight size={15} />
              </a>
            </CardContent>
          </Card>
        </Reveal>

        <InfoCard label="Materiais" title="Fios selecionados" description="Algodao, linho e la merino de alta qualidade. Macios, duraveis e com cores que nao desbotam." delay={200} />
        <InfoCard
          label="Prazo"
          title="7 a 15 dias uteis"
          description="Do pedido a entrega, com carinho em cada etapa."
          delay={300}
          className="bg-[var(--terracotta)] text-white"
        />
      </div>
    </section>
  )
}

type InfoCardProps = {
  label: string
  title: string
  description: string
  delay: number
  className?: string
  extra?: ReactNode
}

function InfoCard({ label, title, description, delay, className = '', extra }: InfoCardProps) {
  return (
    <Reveal className="md:col-span-6" delay={delay}>
      <Card className={`min-h-72 transition duration-500 hover:-translate-y-1 ${className}`}>
        <CardContent>
          <span className="mb-auto text-xs uppercase tracking-[0.18em] opacity-60">{label}</span>
          <h3 className="font-display mt-4 text-3xl font-light leading-tight">{title}</h3>
          <p className="mt-3 text-sm font-light leading-7 opacity-75">{description}</p>
          {extra}
        </CardContent>
      </Card>
    </Reveal>
  )
}
