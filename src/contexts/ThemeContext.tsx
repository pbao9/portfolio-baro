import React, { createContext, useContext, useEffect, ReactNode } from 'react';

type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme: Theme = 'dark';

  useEffect(() => {
    // Set theme to dark always (minimal dark theme)
    localStorage.setItem('theme', 'dark');
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', 'dark');
    
    // Set theme color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#1a1a1a');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 
