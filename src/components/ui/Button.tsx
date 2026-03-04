import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('neo-button inline-flex items-center justify-center gap-2', {
  variants: {
    variant: {
      default: 'bg-[hsl(var(--background))] hover:bg-[hsl(var(--muted))]',
      primary: 'bg-[hsl(var(--primary))]',
      secondary: 'bg-[hsl(var(--secondary))] text-white',
      accent: 'bg-[hsl(var(--accent))]',
      outline: 'bg-transparent',
      ghost: 'shadow-none border-0 hover:bg-[hsl(var(--muted))]',
    },
    size: {
      default: 'px-6 py-3 text-sm',
      sm: 'px-4 py-2 text-xs',
      lg: 'px-8 py-4 text-base',
      icon: 'p-2',
    },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
        className: cn(buttonVariants({ variant, size, className })),
      });
    }
    return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>{children}</button>;
  }
);
Button.displayName = 'Button';
export { buttonVariants };