import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const stats = [
  { label: 'YEARS EXP.', value: 3, suffix: '+' },
  { label: 'PROJECTS', value: 15, suffix: '+' },
  { label: 'CLIENTS', value: 9, suffix: '+' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-5xl font-black bg-[hsl(var(--secondary))] text-white px-6 py-2 neo-border neo-shadow transform rotate-1">ABOUT</h2>
          <div className="h-2 flex-1 bg-[hsl(var(--border))]" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <p className="text-xl font-bold leading-relaxed border-l-8 border-[hsl(var(--border))] pl-6 py-2">
              I'M A FRONTEND DEVELOPER WHO BUILDS BOLD, UNCONVENTIONAL DIGITAL EXPERIENCES.
            </p>
            <p className="font-bold opacity-80 leading-relaxed">
              I TURN IDEAS INTO HIGH-PERFORMANCE DIGITAL PRODUCTS —
              FROM E-COMMERCE STORES TO FINTECH APPS.
              PASSIONATE ABOUT CREATING UNIQUE WEB EXPERIENCES
              THAT BALANCE CREATIVITY, PERFORMANCE, AND USABILITY.
              A MASTER AT CRAFTING USER INTERFACES WITH PRECISION AND EDGE.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-3 gap-4">
            {stats.map(({ label, value, suffix }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="neo-border neo-shadow bg-[hsl(var(--muted))] p-6 text-center"
              >
                <div className="text-3xl font-black text-[hsl(var(--secondary))]">
                  <CountUp target={value} suffix={suffix} />
                </div>
                <div className="text-xs font-black mt-2 opacity-70">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}