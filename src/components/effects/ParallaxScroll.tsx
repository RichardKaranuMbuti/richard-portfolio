'use client';

import { ReactNode, useEffect, useRef } from 'react';

interface ParallaxScrollProps {
  children: ReactNode;
}

export default function ParallaxScroll({ children }: ParallaxScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrolled = window.scrollY;
      const parallaxElements = containerRef.current.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-parallax') || '0.5';
        const yPos = -(scrolled * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
}