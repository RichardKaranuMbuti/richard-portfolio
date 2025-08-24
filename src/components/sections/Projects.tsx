'use client';

import { ExternalLink, Github, Users, TrendingUp, Clock } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';

// Featured projects based on your experience
const projects = [
  {
    title: "AI Resume Matcher",
    company: "Resmatcha",
    description: "Built AI-driven job-resume matching platform processing 1,000+ resumes daily with 97% accuracy",
    impact: "1000+ daily resumes",
    tech: ["Python", "FastAPI", "LangChain", "Next.js", "Azure"],
    metrics: {
      users: "5000+",
      performance: "97%",
      uptime: "99.9%"
    },
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Compliance AI Platform",
    company: "Complasset",
    description: "AI-powered compliance platform reducing document review time by 20x for financial institutions",
    impact: "20x faster reviews",
    tech: ["Django", "React", "Azure Cognitive Services", "PostgreSQL"],
    metrics: {
      users: "1000+",
      performance: "95%",
      uptime: "99.9%"
    },
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Multi-tenant API Infrastructure",
    company: "Kreatoors AI",
    description: "Secure multi-tenant API infrastructure with optimized performance from 800ms to 200ms",
    impact: "75% faster response",
    tech: ["Node.js", "TypeScript", "MongoDB", "AWS"],
    metrics: {
      users: "20000+",
      performance: "200ms",
      uptime: "99.9%"
    },
    gradient: "from-green-600 to-teal-600"
  },
  {
    title: "Context-Aware AI Agents",
    company: "Miksi AI",
    description: "AI agents for BI tasks achieving 90% SQL generation accuracy across 100+ test cases",
    impact: "90% accuracy",
    tech: ["Python", "LangGraph", "FastAPI", "Azure"],
    metrics: {
      users: "1000+",
      performance: "90%",
      uptime: "99.9%"
    },
    gradient: "from-orange-600 to-red-600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-4 font-space">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Real products shipped to production</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlowCard key={index}>
              <div className="p-8 h-full flex flex-col">
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 font-space">
                        {project.title}
                      </h3>
                      <p className="text-purple-400 text-sm font-medium">
                        @ {project.company}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Impact Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full border border-purple-500/20">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400 font-medium">
                      {project.impact}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Users className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">{project.metrics.users}</div>
                    <div className="text-xs text-gray-500">Active Users</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">{project.metrics.performance}</div>
                    <div className="text-xs text-gray-500">Performance</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">{project.metrics.uptime}</div>
                    <div className="text-xs text-gray-500">Uptime</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, tIndex) => (
                    <span 
                      key={tIndex}
                      className="px-3 py-1 bg-white/5 text-xs text-gray-400 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Want to see more? Check out my GitHub for open source contributions
          </p>
          <a 
            href="https://github.com/RichardKaranuMbuti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/20 hover:bg-white/10 transition-all group"
          >
            <Github className="w-5 h-5" />
            <span>View GitHub Profile</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}