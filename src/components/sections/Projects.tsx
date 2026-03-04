import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PROJECTS } from '@/lib/constants';
import { getColorClass } from '@/lib/utils';

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>

        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-2xl md:text-5xl font-black bg-[hsl(var(--primary))] px-6 py-2 neo-border neo-shadow transform -rotate-1">PROJECTS</h2>
          <div className="h-2 flex-1 bg-[hsl(var(--border))]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            >
              <Card className="group h-full flex flex-col">

                {/* Project logo area */}
                <div className={`h-48 ${getColorClass(project.color)} border-b-4 border-[hsl(var(--border))] flex items-center justify-center overflow-hidden`}>
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <svg
                      viewBox="0 0 100 80"
                      className="w-28 h-28 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="50,5 90,30 70,75 30,75 10,30" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2"/>
                      <line x1="10" y1="30" x2="90" y2="30" />
                      <line x1="10" y1="30" x2="30" y2="5" />
                      <line x1="90" y1="30" x2="70" y2="5" />
                      <line x1="30" y1="5" x2="50" y2="30" />
                      <line x1="70" y1="5" x2="50" y2="30" />
                      <line x1="50" y1="30" x2="30" y2="75" />
                      <line x1="50" y1="30" x2="70" y2="75" />
                      <line x1="10" y1="30" x2="50" y2="30" />
                      <line x1="50" y1="30" x2="90" y2="30" />
                    </svg>
                  )}
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" color="secondary">{project.category}</Badge>
                    <span className="font-black opacity-50">{project.year}</span>
                  </div>
                  <CardTitle className="group-hover:underline decoration-4 underline-offset-4">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="font-bold mb-4 opacity-80">{project.description}</p>
                  <div className="flex items-center gap-2 font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW PROJECT <ArrowRight size={16} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}