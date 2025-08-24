'use client';

import { Code2, Layers, Server, Cloud, Database, Brain, Rocket } from 'lucide-react';
import resumeData from '@/data/resume.json';
import { useState } from 'react';

const skillIcons: Record<string, any> = {
  languages: Code2,
  frontend: Layers,
  backend: Server,
  infrastructure: Cloud,
  databases: Database,
  ai: Brain,
  learning: Rocket,
};

const skillColors: Record<string, string> = {
  languages: 'from-purple-500 to-purple-600',
  frontend: 'from-blue-500 to-blue-600',
  backend: 'from-green-500 to-green-600',
  infrastructure: 'from-orange-500 to-orange-600',
  databases: 'from-red-500 to-red-600',
  ai: 'from-purple-500 to-pink-600',
  learning: 'from-yellow-500 to-yellow-600',
};

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-4 font-space">
            <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with daily</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(resumeData.skills).map(([category, skills], index) => {
            const Icon = skillIcons[category];
            const gradientColor = skillColors[category];
            
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradientColor} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500`} />
                
                {/* Card Content */}
                <div className="relative glass rounded-xl p-6 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${gradientColor}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold capitalize text-white font-space">
                      {category === 'ai' ? 'AI & ML' : category}
                    </h3>
                  </div>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {(skills as string[]).map((skill, sIndex) => (
                      <button
                        key={sIndex}
                        onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
                        className={`px-3 py-1.5 text-xs rounded-full border transition-all cursor-pointer ${
                          skill === selectedSkill
                            ? `bg-gradient-to-r ${gradientColor} text-white border-transparent`
                            : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30 hover:bg-white/10'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>

                  {/* Skill Level Indicator */}
                  {hoveredCategory === category && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>Proficiency</span>
                        <span>Expert</span>
                      </div>
                      <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${gradientColor} rounded-full transition-all duration-1000`}
                          style={{ 
                            width: category === 'learning' ? '60%' : '90%',
                            animation: 'slideInFromLeft 1s ease-out'
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Skills */}
        <div className="mt-16 p-8 glass rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center font-space">
            <span className="gradient-text">Core Expertise</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Python', 'TypeScript', 'React.js', 'AWS'].map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500" />
                  <div className="relative bg-black rounded-lg px-6 py-3">
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            width: 0;
          }
        }
      `}</style>
    </section>
  );
}