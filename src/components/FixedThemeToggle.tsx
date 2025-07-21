import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const FixedThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: theme === 'dark' ? '#222' : '#ffd600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        cursor: 'pointer',
        transition: 'background 0.3s',
      }}
    >
      {theme === 'dark' ? (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="6" fill="#ffd600" />
        </svg>
      ) : (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" fill="#222" />
        </svg>
      )}
    </button>
  );
};

export default FixedThemeToggle; 