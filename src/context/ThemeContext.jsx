import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        // Clear any old stuck dark settings in localStorage
        localStorage.removeItem('sosa-theme');
        localStorage.removeItem('sosa-theme-v2');
        const session = sessionStorage.getItem('sosa-theme');
        return session || 'warm';
      } catch (e) {
        return 'warm';
      }
    }
    return 'warm';
  });

  useEffect(() => {
    try {
      sessionStorage.setItem('sosa-theme', theme);
    } catch (e) {}
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'warm' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
