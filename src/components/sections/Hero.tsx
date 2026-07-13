import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import profilePic from '@/assets/OLA-AFRICA.jpg';

const titles = ['CREATIVE', 'FRONTEND', 'BACKEND'];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 60);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">

              <span className="block min-h-[1.1em]">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-[4px] h-[0.8em] bg-[hsl(var(--foreground))] ml-1 align-middle"
                />
              </span>

              <motion.span
                className="block text-transparent bg-clip-text text-stroke-lg"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #fc1d00, #740A03, #1aff00, #C3110C, #E6501B, #098258)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{
                  backgroundPosition: ['0% center', '200% center'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                DEVELOPER
              </motion.span>

            </h1>

            <p className="text-xl font-bold border-l-8 border-[hsl(var(--border))] pl-6 py-4 bg-[hsl(var(--muted))] neo-border neo-shadow">
              YOU NEED A WEBSITE FOR YOUR BUSINESS? I AM YOUR GUY
            </p>

            <div className="flex flex-wrap gap-4">
              <a href='#projects'>
              <Button size="lg" className="group bg-[hsl(var(--primary))]">
                VIEW PROJECTS <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              </a>
              
              <a
                href="https://wa.me/2348134251219"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">CONTACT ME</Button>
              </a>
            </div>
          </motion.div>

          {/* Photo Side */}
          <div className="relative w-full">
            <div className="relative w-full max-w-sm mx-auto lg:max-w-md aspect-square">

              <motion.img
                src={profilePic}
                alt="Adeyanju Profile"
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  rotate: [2, -2, 2],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.3 },
                  rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                }}
              />

              {/* Decorative dot grid */}
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 z-0 opacity-40"
                style={{
                  backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1.5px, transparent 1.5px)',
                  backgroundSize: '8px 8px',
                }}
              />

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}