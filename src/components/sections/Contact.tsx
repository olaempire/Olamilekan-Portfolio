import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, Send } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const socialLinks = [
  { icon: Github, href: 'https://github.com/olaempire', label: 'GitHub', color: 'bg-[hsl(var(--secondary))]' },
  { icon: Twitter, href: 'https://twitter.com/OlaEmpire0', label: 'Twitter', color: 'bg-[hsl(var(--accent))]' },
  { icon: Linkedin, href: 'https://linkedin.com/in/abdulganiu', label: 'LinkedIn', color: 'bg-[hsl(var(--primary))]' },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"
      style={{ position: 'relative', zIndex: 2 }}
    >
      <Container size="sm" className="text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-6xl font-black mb-8 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] inline-block px-6 py-2 neo-border neo-shadow transform rotate-1">
            LET'S TALK
          </h2>

          <p className="text-xl font-bold mb-12 max-w-2xl mx-auto opacity-90">
            HAVE A PROJECT IN MIND? WANT TO COLLABORATE?
          </p>
          <p className="text-xl font-bold mb-12 max-w-2xl mx-auto opacity-90">
            OR WANT TO MAKE INQUIRY?
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:isholaganiu20018@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-black text-base neo-border bg-[hsl(var(--primary))] text-black neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              <Mail size={20} /> EMAIL ME
            </a>

            <a
              href="https://wa.me/2348134251219"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-black text-base border-4 border-[hsl(var(--background))] text-[hsl(var(--background))] hover:bg-[hsl(var(--background))] hover:text-[hsl(var(--foreground))] shadow-[6px_6px_0px_0px_hsl(var(--background))] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              <Send size={20} /> SCHEDULE CALL
            </a>
          </div>

          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 ${color} neo-border flex items-center justify-center text-[hsl(var(--foreground))] shadow-[4px_4px_0px_0px_hsl(var(--background))] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all`}
                aria-label={label}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}