import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getColorClass(color: 'pink' | 'cyan' | 'orange' | 'yellow'): string {
  const colorMap = {
    pink: 'bg-[hsl(var(--secondary))]',
    cyan: 'bg-[hsl(var(--accent))]',
    orange: 'bg-orange-400',
    yellow: 'bg-[hsl(var(--primary))]',
  };
  return colorMap[color] ?? 'bg-[hsl(var(--muted))]';
}