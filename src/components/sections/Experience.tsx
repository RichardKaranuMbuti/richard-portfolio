'use client';

import { Zap, Calendar, MapPin, Building } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import resumeData from '@/data/resume.json';
import { useEffect, useRef, useState } from 'react';

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section id="experience" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-4 font-space">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">Building products that matter</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-30" />

          {/* Experience Items */}
          <div className="space-y-12">
            {resumeData.experience.map((job, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                  // Return nothing (void) to satisfy TypeScript
                }}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:text-right'
                } ${
                  visibleItems.includes(index) ? 'animate-slide-up' : 'opacity-0'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-ping" />
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0">
                  <GlowCard>
                    <div className="p-8">
                      {/* Header */}
                      <div className={`mb-6 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                        <h3 className="text-2xl font-bold text-white mb-2 font-space">
                          {job.role}
                        </h3>
                        <div className={`flex flex-wrap items-center gap-3 text-sm ${
                          index % 2 !== 0 ? 'md:justify-end' : ''
                        }`}>
                          <span className="flex items-center gap-1 text-purple-400 font-medium">
                            <Building className="w-4 h-4" />
                            {job.company}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">{job.type}</span>
                          <span className="text-gray-500">•</span>
                          <span className="flex items-center gap-1 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                        </div>
                        <div className={`mt-3 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                          <span className="inline-flex items-center gap-1 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium">
                            <Calendar className="w-4 h-4" />
                            {job.period}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className={`space-y-3 mb-6 ${index % 2 !== 0 ? 'md:text-left' : ''}`}>
                        {job.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-3 text-gray-300">
                            <Zap className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 !== 0 ? 'md:justify-end' : ''
                      }`}>
                        {job.tech.map((tech, tIndex) => (
                          <span 
                            key={tIndex}
                            className="px-3 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-xs text-gray-300 rounded-full border border-white/10 hover:border-purple-500/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}