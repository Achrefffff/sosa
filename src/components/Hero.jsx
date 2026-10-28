import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';

export default function Hero({ onSelectFlavor }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => { });
    }
  }, [isMobile]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* 1. CINEMATIC BACKGROUND VIDEO (100% silencieux et continu) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          key={isMobile ? 'mobile-video' : 'desktop-video'}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center"
        >
          <source
            src={isMobile ? '/videomobile33.mp4' : '/gemini_generated_video_e6fe7aaa.mp4'}
            type="video/mp4"
          />
        </video>

        {/* Subtle Luxury Film Grade Overlays (subtle to keep video vivid) */}
        {/* Soft dark tint to ensure text contrast */}
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--hero-overlay)' }} />

        {/* Top Navbar blend */}
        <div className="absolute top-0 inset-x-0 h-32" style={{ background: `linear-gradient(to bottom, var(--hero-top-fade), var(--hero-top-fade, transparent) 50%, transparent)` }} />

        {/* Bottom Seamless Fade into Page Background */}
        <div className="absolute bottom-0 inset-x-0 h-28" style={{ background: `linear-gradient(to top, var(--bg-body), var(--bg-body, transparent) 70%, transparent)` }} />
      </div>

      {/* 2. HERO CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6 sm:pt-28 sm:pb-8 text-center flex flex-col items-center">

        {/* Main Punchy Headline */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[1.02] sm:leading-[0.95] max-w-4xl drop-shadow-2xl mb-5 sm:mb-6">
          Le twist qui révèle <br />
          <span className="hero-title-twist font-serif-luxury italic font-normal lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400">
            chaque
          </span>{' '}
          bouchée.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl font-light leading-relaxed mb-6 sm:mb-8 drop-shadow-md text-balance">
          Sauces soja d'exception infusées aux saveurs authentiques.
          Pensées pour sublimer vos sushis et pokés.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-4 sm:mb-6">
          <a
            href="#collection"
            className="w-full max-w-[240px] sm:max-w-none sm:w-auto px-5 sm:px-8 py-2.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-[11px] sm:text-sm uppercase tracking-wider sm:tracking-widest shadow-lg sm:shadow-xl shadow-amber-500/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:rotate-12" />
            <span>Explorer nos saveurs<span className="hidden sm:inline"> originales</span></span>
          </a>

          <a
            href="#trouver"
            className="hero-secondary-btn w-full max-w-[240px] sm:max-w-none sm:w-auto px-5 sm:px-8 py-2.5 sm:py-4 rounded-full font-semibold text-[11px] sm:text-sm uppercase tracking-wider sm:tracking-widest backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <Compass className="hero-btn-icon w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Où nous trouver</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <a
            href="#experience"
            className="hero-scroll-btn p-2.5 sm:p-3 rounded-full backdrop-blur-md transition-colors animate-bounce"
            aria-label="Découvrir la suite"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
