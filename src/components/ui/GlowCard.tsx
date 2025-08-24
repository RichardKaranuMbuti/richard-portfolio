'use client';

import { ReactNode, useState } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export default function GlowCard({ 
  children, 
  className = '', 
  gradient = 'from-purple-600/20 to-blue-600/20' 
}: GlowCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className={`group relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Glow */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000`} />
      
      {/* Mouse Follow Glow */}
      {isHovered && (
        <div
          className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            background: `radial-gradient(circle at center, rgba(168, 85, 247, 0.15), transparent 70%)`,
            filter: 'blur(40px)',
          }}
        />
      )}
      
      {/* Card Content */}
      <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
        
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
}