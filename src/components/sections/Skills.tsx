import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { SKILLS } from '@/lib/constants';
import FallingText from '@/components/ui/FallingText';
import reactLogo from '@/assets/react 01.png';
import typescriptLogo from '@/assets/typescript.jpg';
import htmlCssLogo from '@/assets/HTML AND CSS.jpg';
import javascriptLogo from '@/assets/JAVASCRIPT.jpg';
import wordpressLogo from '@/assets/WORDPRESS.jpg';
import tailwindLogo from '@/assets/Tailwind CSS.png';
import uiuxLogo from '@/assets/UI AND UX.svg';
import vueLogo from '@/assets/VUE.png';
import angularLogo from '@/assets/ANGULAR.svg';
import gsapLogo from '@/assets/GSAP.jpg';
import expressLogo from '@/assets/EXPRESS.png';
import nextLogo from '@/assets/NEXTJS.png';
import supabaseLogo from '@/assets/SUPABASE.png';
import mongoLogo from '@/assets/MONGODB.svg';
import nodeLogo from '@/assets/NODEJS.png';
import framerLogo from '@/assets/FRAMER-MOTION.jpg';

export function Skills() {
  const [skillsDone, setSkillsDone] = useState(false);
  const lastIndex = SKILLS.length - 1;

  return (
    <motion.section
      id="skills"
      className="py-20 neo-border border-x-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <motion.div
          className="flex items-center gap-4 mb-12 justify-end"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="h-2 flex-1 bg-[hsl(var(--border))]" />
          <h2 className="text-2xl md:text-5xl font-black bg-[hsl(var(--accent))] px-6 py-2 neo-border neo-shadow transform rotate-1 text-black">
            SKILLS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill: { name: string; level: number; logo: string }, index: number) => {
            const isLast = index === lastIndex;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                onAnimationComplete={() => {
                  if (isLast) setSkillsDone(true);
                }}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {/* Updated Logo Box */}
                      <div className="w-14 h-14 flex items-center justify-center bg-[hsl(var(--foreground))] neo-border p-2">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-black">{skill.name}</h3>
                    </div>

                    <div className="w-full bg-[hsl(var(--muted))] neo-border h-8 overflow-hidden">
                      <motion.div
                        className="h-full bg-[hsl(var(--secondary))] border-r-4 border-[hsl(var(--border))] flex items-center justify-end pr-3 font-black"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.08 + 0.3 }}
                      >
                        <span className="text-white text-sm">{skill.level}%</span>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 h-64 bg-[hsl(var(--background))]">
          {skillsDone && (
            <FallingText
              text="REACT TYPESCRIPT WORDPRESS UI/UX WEBGL JAVASCRIPT HTML/CSS NODE.JS EXPRESS EXPRESS ANGULAR FRAMER-MOTION TAILWIND"
              highlightWords={['REACT', 'TYPESCRIPT', 'FIGMA']}
              trigger="auto"
              gravity={1}
              fontSize="1.5rem"
              backgroundColor="transparent"
            />
          )}
        </div>

      </Container>
    </motion.section>
  );
}