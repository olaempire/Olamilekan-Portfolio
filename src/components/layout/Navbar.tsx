import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from './ThemeToggle';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-[hsl(var(--background))]/95 backdrop-blur-sm' : 'bg-[hsl(var(--background))]')}>
      <div className="neo-border border-t-0 border-x-0">
        <Container>
          <div className="flex justify-between items-center h-20">
            <motion.a href="#" className="group relative" whileHover={{ rotate: 0 }} initial={{ rotate: -2 }}>
              <div className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))] px-4 py-2 neo-border 
              shadow-[4px_4px_0px_0px_hsl(var(--border))] group-hover:shadow-none group-hover:translate-x-1 
              group-hover:translate-y-1 transition-all duration-200">
                <span className="text-1xl font-black tracking-tighter">OLAMILEKAN ISHOLA</span>
              </div>
            </motion.a>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                {NAV_ITEMS.map((item: string) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 font-black text-sm neo-button">
                    {item}
                  </a>
                ))}
              </div>
              <div className="w-px h-8 bg-[hsl(var(--border))]" />
              <ThemeToggle />
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 neo-border bg-[hsl(var(--secondary))] text-white shadow-[4px_4px_0px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </Container>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[hsl(var(--accent))] neo-border border-x-0 overflow-hidden">
            <Container className="py-4">
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item: string, index: number) => (
                  <motion.a key={item} href={`#${item.toLowerCase()}`}
                    initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }} onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-4 font-black text-xl neo-button bg-[hsl(var(--background))]">
                    {item}
                  </motion.a>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}