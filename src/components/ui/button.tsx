import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-2xl border-0 text-sm font-semibold ring-offset-background transition-[transform,box-shadow,background] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-[-4px_-4px_12px_rgba(255,255,255,0.85),4px_4px_12px_rgba(74,58,72,0.08)] hover:shadow-[-6px_-6px_16px_rgba(255,255,255,0.9),6px_6px_16px_rgba(74,58,72,0.1)]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-0 bg-background text-foreground shadow-[-3px_-3px_10px_rgba(255,255,255,0.8),3px_3px_10px_rgba(74,58,72,0.06)] hover:bg-accent',
        secondary:
          'bg-secondary text-secondary-foreground shadow-[-3px_-3px_10px_rgba(255,255,255,0.75),3px_3px_10px_rgba(74,58,72,0.06)] hover:bg-secondary/90',
        ghost:
          'shadow-none hover:bg-accent/80 hover:shadow-[-2px_-2px_8px_rgba(255,255,255,0.7),2px_2px_8px_rgba(74,58,72,0.05)]',
        link: 'text-primary underline-offset-4 shadow-none hover:underline',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 rounded-xl px-3.5',
        lg: 'h-11 rounded-2xl px-8',
        icon: 'h-10 w-10 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
