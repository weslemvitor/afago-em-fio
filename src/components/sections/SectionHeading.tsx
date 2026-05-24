import { Reveal } from './Reveal'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  label: string
  title: ReactNode
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <>
      <Reveal>
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--terracotta)]">{label}</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-display mb-14 text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-[1.08] text-[var(--deep-brown)]">
          {title}
        </h2>
      </Reveal>
    </>
  )
}
