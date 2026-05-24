import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap px-7 text-xs font-medium uppercase tracking-[0.12em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--terracotta)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-[var(--terracotta)] text-white hover:bg-[var(--deep-brown)] hover:-translate-y-0.5',
        ghost: 'px-0 text-[var(--mocha)] hover:gap-3',
        whatsapp: 'bg-[#25d366] text-white hover:bg-[#1fac55] hover:-translate-y-0.5',
        outline:
          'border border-[rgba(196,113,74,0.35)] bg-transparent text-[var(--deep-brown)] hover:border-[var(--terracotta)] hover:text-[var(--terracotta)]',
      },
      size: {
        default: 'h-12',
        sm: 'h-10 px-5 text-[0.7rem]',
        lg: 'h-14 px-9',
        icon: 'size-11 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({ asChild = false, className, size, variant, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button }
