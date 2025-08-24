'use client';

import { Mail, Linkedin, Github, Globe, Download, Send, FileDown } from 'lucide-react';
import resumeData from '@/data/resume.json';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Contact() {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/richard-karanu-resume.pdf';
    link.download = 'Richard-Karanu-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-5xl md:text-7xl font-black mb-8 font-space">
          <span className="gradient-text">Let's Connect</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Ready to build something amazing together?
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <MagneticButton>
            <a 
              href={`mailto:${resumeData.personal.email}`}
              className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
              <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </MagneticButton>
          
          <MagneticButton>
            <a 
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </MagneticButton>
          
          <MagneticButton>
            <a 
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </MagneticButton>
        </div>

        {/* Contact Card */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl" />
          <div className="relative glass rounded-2xl p-8">
            {/* Quick Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Location</span>
                </div>
                <p className="text-white font-medium">{resumeData.personal.location}</p>
              </div>
              
              <div className="group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Email</span>
                </div>
                <a 
                  href={`mailto:${resumeData.personal.email}`}
                  className="text-white font-medium hover:text-purple-400 transition-colors"
                >
                  {resumeData.personal.email}
                </a>
              </div>
              
              <div className="group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Download className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Resume</span>
                </div>
                <button 
                  onClick={handleDownloadResume}
                  className="group/btn inline-flex items-center gap-2 text-white font-medium hover:text-purple-400 transition-all"
                >
                  <span>Download PDF</span>
                  <FileDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl border border-purple-500/20">
              <div className="flex items-center justify-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <p className="text-white">
                  Currently available for{' '}
                  <span className="text-purple-400 font-semibold">
                    Full-time, Contract, and Freelance
                  </span>{' '}
                  opportunities
                </p>
              </div>
            </div>

            {/* Download Resume CTA Button - Alternative prominent placement */}
            <div className="mt-8">
              <MagneticButton>
                <button
                  onClick={handleDownloadResume}
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 text-white font-medium hover:border-purple-500/50 transition-all"
                >
                  <FileDown className="w-5 h-5" />
                  <span>Download Full Resume (PDF)</span>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                  </span>
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4">
            © 2025 {resumeData.personal.name}. Crafted with passion and code.
          </p>
          <div className="flex items-center justify-center gap-6">
            {resumeData.languages.map((lang, index) => (
              <span key={index} className="text-xs text-gray-600">
                {lang.name} ({lang.level})
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}