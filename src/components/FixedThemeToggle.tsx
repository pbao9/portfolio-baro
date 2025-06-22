import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { gsap } from 'gsap';

const FixedThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(toggleRef.current,
      {
        scale: 0,
        opacity: 0,
        rotation: -180
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1
      }
    );
  }, []);

  const handleToggle = () => {
    // Click animation
    gsap.to(toggleRef.current, {
      scale: 0.9,
      duration: 0.1,
      ease: "power2.out",
      onComplete: () => {
        toggleTheme();
        gsap.to(toggleRef.current, {
          scale: 1,
          duration: 0.1,
          ease: "power2.out"
        });
      }
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        ref={toggleRef}
        onClick={handleToggle}
        className="relative inline-flex h-12 w-20 items-center rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 backdrop-blur-md"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(55, 65, 81, 0.9)' : 'rgba(251, 191, 36, 0.9)',
        }}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        
        <span
          className={`relative inline-block h-10 w-10 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
            theme === 'dark' ? 'translate-x-10' : 'translate-x-1'
          }`}
        >
          {/* Sun icon for light mode */}
          {theme === 'dark' && (
            <svg
              className="h-5 w-5 text-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
          
          {/* Moon icon for dark mode */}
          {theme === 'light' && (
            <svg
              className="h-5 w-5 text-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </span>
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </div>
    </div>
  );
};

export default FixedThemeToggle; 