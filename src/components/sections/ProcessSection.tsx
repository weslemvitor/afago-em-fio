import { Check, MessageCircle, PackageCheck, Sparkles } from 'lucide-react'

import { processSteps } from '../../data/store'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const iconMap = {
  message: MessageCircle,
  check: Check,
  sparkles: Sparkles,
  package: PackageCheck,
}

export function ProcessSection() {
  return (
    <section id="processo" className="px-6 py-20 md:px-12 md:py-28">
      <SectionHeading
        label="Como funciona"
        title={
          <>
            Do fio ao
            <br />
            <em className="text-[var(--terracotta)]">seu lar</em>
          </>
        }
      />

      <div className="grid md:grid-cols-4">
        {processSteps.map((step, index) => {
          const Icon = iconMap[step.icon]

          return (
            <Reveal key={step.title} delay={index * 100}>
              <article className="h-full border-b border-[var(--sand)] py-10 md:border-b-0 md:border-r md:px-9 md:last:border-r-0">
                <div className="font-display mb-5 text-6xl font-light leading-none text-[var(--sand)]">{String(index + 1).padStart(2, '0')}</div>
                <Icon className="mb-5 text-[var(--terracotta)]" size={44} strokeWidth={1.7} />
                <h3 className="font-display mb-3 text-2xl text-[var(--deep-brown)]">{step.title}</h3>
                <p className="text-sm font-light leading-7 text-[var(--mocha)]">{step.description}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
