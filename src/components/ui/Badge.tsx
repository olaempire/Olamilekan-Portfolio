import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'solid';
  color?: 'primary' | 'secondary' | 'accent';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', color = 'primary', ...props }, ref) => {
    const variants = { default: 'bg-[hsl(var(--muted))] border-2', outline: 'bg-transparent border-2', solid: 'border-2' };
    const colors = {
      primary: 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-black',
      secondary: 'border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))] text-white',
      accent: 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))] text-black',
    };
    return <span ref={ref} className={cn('inline-flex items-center px-3 py-1 text-xs font-black uppercase', variants[variant], colors[color], className)} {...props} />;
  }
);
Badge.displayName = 'Badge';