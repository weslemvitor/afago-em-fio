import { useEffect, useRef, useState } from 'react'
import type { PropsWithChildren } from 'react'

import { cn } from '../../lib/utils'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.12 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn('reveal', visible && 'visible', className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
