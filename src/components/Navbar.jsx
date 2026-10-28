import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenB2B }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Palette de Saveurs', href: '#experience' },
    { name: 'GMS & Rayons', href: '#grande-distribution' },
    { name: 'La Collection', href: '#collection' },
    { name: 'L\'Esprit SŌSA', href: '#philosophie' },
    { name: 'Où nous trouver', href: '#trouver' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'backdrop-blur-xl py-3 shadow-2xl'
          : 'bg-transparent py-5'
          }`}
        style={{
          backgroundColor: isScrolled ? 'var(--bg-navbar)' : 'transparent',
          boxShadow: isScrolled ? '0 25px 50px -12px rgba(0,0,0,0.5)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
          {/* Brand Logo & Origin Tag */}
          <div className="flex items-center gap-5 shrink-0">
            <a href="#" className="flex flex-col group">
              <span className="text-2xl sm:text-3xl font-black tracking-[0.25em] text-white font-heading transition-transform group-hover:scale-105">
                S<span className="text-amber-400">Ō</span>SA
              </span>
              <span className="text-[9px] tracking-[0.53em] uppercase font-semibold -mt-1 group-hover:text-amber-200/90 transition-colors" style={{ color: 'var(--text-dim)' }}>
                SAUCES SOJA
              </span>
            </a>

            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border text-white font-bold text-[11px] tracking-wider uppercase shadow-inner" style={{ backgroundColor: 'var(--glass-pill-bg)', borderColor: 'var(--glass-border)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Made in France</span>
              <span style={{ color: 'var(--text-dim)' }}>•</span>
              <span className="inline-flex items-center gap-1.5 text-amber-300 font-extrabold">
                <span>FR</span>
                <span className="inline-flex w-4 h-2.5 rounded-[2px] overflow-hidden shadow-sm shrink-0 border border-white/20">
                  <span className="w-1/3 h-full bg-[#002654]"></span>
                  <span className="w-1/3 h-full bg-white"></span>
                  <span className="w-1/3 h-full bg-[#ce1126]"></span>
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Nav with ample spacing and no text wrap */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors relative py-1.5 whitespace-nowrap group text-xs xl:text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle + B2B Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Theme Toggle Switch */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              data-active={theme}
              aria-label={`Passer au thème ${theme === 'dark' ? 'chaud' : 'sombre'}`}
              title={theme === 'dark' ? 'Thème Chaud' : 'Thème Sombre'}
            >
              <span className="toggle-knob">
                {theme === 'dark' ? (
                  <Moon className="w-3 h-3 text-zinc-700" />
                ) : (
                  <Sun className="w-3 h-3 text-amber-700" />
                )}
              </span>
            </button>

            <button
              onClick={onOpenB2B}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 active:scale-95 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Espace Pro & B2B
              </span>
            </button>
          </div>

          {/* Mobile hamburger + toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              data-active={theme}
              aria-label={`Passer au thème ${theme === 'dark' ? 'chaud' : 'sombre'}`}
            >
              <span className="toggle-knob">
                {theme === 'dark' ? (
                  <Moon className="w-3 h-3 text-zinc-700" />
                ) : (
                  <Sun className="w-3 h-3 text-amber-700" />
                )}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border"
              style={{ backgroundColor: 'var(--glass-pill-bg)', borderColor: 'var(--glass-border)', color: 'var(--text-muted)' }}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden backdrop-blur-2xl border-b px-6 py-6 transition-all duration-300" style={{ backgroundColor: 'var(--bg-navbar-mobile)', borderColor: 'var(--border-light)' }}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium py-2 border-b hover:text-amber-400 transition-colors"
                  style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-subtle)' }}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenB2B();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
                >
                  <Send className="w-4 h-4" />
                  Espace Pro & Restaurateurs
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
