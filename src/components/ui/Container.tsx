import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'sm' | 'lg' | 'full';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'default', ...props }, ref) => {
    const sizes = { sm: 'max-w-3xl', default: 'max-w-7xl', lg: 'max-w-[100rem]', full: 'max-w-none' };
    return <div ref={ref} className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)} {...props} />;
  }
);
Container.displayName = 'Container';