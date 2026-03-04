import React from 'react';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { WireframeBackground } from '@/components/ui/WireframeBackground';
import Skater from '@/components/ui/Skater';

function AppContent() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] relative">
      <WireframeBackground darkMode={isDark} />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
                <main>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
          <Skater />
          <Footer />
        </main>
        
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;