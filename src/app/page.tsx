'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import FloatingNav from '@/components/ui/FloatingNav';
import GridBackground from '@/components/effects/GridBackground';
import CursorGlow from '@/components/effects/CursorGlow';
import ParallaxScroll from '@/components/effects/ParallaxScroll';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Handle initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Handle scroll progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalScroll;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl animate-pulse" />
          <div className="relative text-4xl font-bold gradient-text">RK</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Background Effects */}
      <GridBackground />
      <CursorGlow />
      
      {/* Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <ParallaxScroll>
        <main className="relative z-10">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </ParallaxScroll>
    </>
  );
}