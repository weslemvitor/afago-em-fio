import type * as React from 'react'

import { cn } from '../../lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('overflow-hidden rounded bg-[var(--cream)]', className)} {...props} />
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('flex h-full flex-col p-9', className)} {...props} />
}

export { Card, CardContent }
