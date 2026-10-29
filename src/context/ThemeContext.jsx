import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem('sosa-theme');
        const saved = localStorage.getItem('sosa-theme');
        return saved === 'warm' || saved === 'dark' ? saved : 'dark';
      } catch (e) {
        return 'dark';
      }
    }
    return 'dark';
  });

  useEffect(() => {
    try {
      localStorage.setItem('sosa-theme', theme);
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
