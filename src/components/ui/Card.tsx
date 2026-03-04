import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  color?: 'default' | 'pink' | 'cyan' | 'yellow' | 'orange';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, color = 'default', children, ...props }, ref) => {
    const colorClasses = { default: '', pink: 'bg-pink-500', cyan: 'bg-cyan-400', yellow: 'bg-yellow-400', orange: 'bg-orange-400' };
    return <div ref={ref} className={cn('neo-card overflow-hidden', hover && 'cursor-pointer', color !== 'default' && colorClasses[color], className)} {...props}>{children}</div>;
  }
);
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-6', className)} {...props} />
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h3 ref={ref} className={cn('text-2xl font-black mb-2', className)} {...props} />
);
CardTitle.displayName = 'CardTitle';

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
);
CardContent.displayName = 'CardContent';