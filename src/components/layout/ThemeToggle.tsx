import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 neo-border bg-[hsl(var(--primary))] shadow-[4px_4px_0px_0px_hsl(var(--border))] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
      title={isDark ? 'Switch to Light' : 'Switch to Dark'}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}