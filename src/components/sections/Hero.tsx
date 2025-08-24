'use client';

import { ChevronDown, Sparkles, ArrowRight, Mail } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedText from '@/components/ui/AnimatedText';
import resumeData from '@/data/resume.json';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Status Badge */}
        <div className="mb-8 inline-block animate-slide-up">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 animate-pulse" />
            <div className="relative bg-black px-6 py-2 rounded-lg border border-purple-500/50">
              <span className="text-purple-400 font-mono text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Available for Opportunities
              </span>
            </div>
          </div>
        </div>
        
        {/* Name Animation */}
        <AnimatedText>
          <h1 className="text-7xl md:text-9xl font-black mb-6 font-space">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {resumeData.personal.name.split(' ')[0]}
            </span>
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {resumeData.personal.name.split(' ')[1]}
            </span>
          </h1>
        </AnimatedText>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light tracking-wide animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {resumeData.personal.title}
        </p>
        
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {resumeData.personal.bio}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {resumeData.highlights.map((stat, index) => (
            <div 
              key={index} 
              className="group relative animate-slide-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000" />
              <div className="relative bg-black rounded-lg p-6 border border-white/10 hover-lift">
                <div className="text-3xl font-bold gradient-text font-space">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <MagneticButton>
            <a 
              href="#experience"
              className="group relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all hover:scale-105"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>
          
          <MagneticButton>
            <a 
              href={`mailto:${resumeData.personal.email}`}
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </div>
    </section>
  );
}