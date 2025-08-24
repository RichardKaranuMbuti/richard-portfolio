'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Glow */}
      <div
        className="pointer-events-none fixed z-30 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="h-[400px] w-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-10 blur-3xl rounded-full" />
        </div>
      </div>

      {/* Secondary Trailing Glow */}
      <div
        className="pointer-events-none fixed z-30 transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          opacity: isVisible ? 0.5 : 0,
        }}
      >
        <div className="h-[300px] w-[300px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-5 blur-2xl rounded-full" />
        </div>
      </div>

      {/* Custom Cursor Dot */}
      <div
        className="pointer-events-none fixed z-50 hidden lg:block"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="h-2 w-2 bg-white rounded-full mix-blend-difference" />
      </div>
    </>
  );
}