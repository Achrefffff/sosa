import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

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
    <section className="relative min-h-[92dvh] sm:min-h-[100dvh] flex flex-col justify-end items-center overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      {/* 1. CINEMATIC BACKGROUND VIDEO (100% silencieux et continu avec fondu transparent) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 98%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 98%)',
        }}
      >
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
        <div className="absolute top-0 inset-x-0 h-32" style={{ background: `linear-gradient(to bottom, var(--hero-top-fade), transparent)` }} />
      </div>

      {/* 2. HERO CONTENT — Positionné en bas pour dégager la vidéo et les flacons au centre */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 sm:pb-6 text-center flex flex-col items-center w-full">

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

        {/* Scroll Indicator & Trait Lumineux Doré vers la suite */}
        <div className="flex flex-col items-center gap-1.5 mt-1">
          <a
            href="#experience"
            className="hero-scroll-btn p-2.5 sm:p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
            aria-label="Découvrir la suite"
          >
            <ArrowDown className="w-4 h-4 text-amber-400" />
          </a>

          {/* Ligne verticale dorée japonaise reliant le Hero à « L'Expérience Sensorielle » */}
          <div className="flex flex-col items-center pointer-events-none mt-1" aria-hidden="true">
            <span className="w-px h-10 sm:h-14 bg-gradient-to-b from-amber-400 via-amber-500/50 to-transparent shadow-[0_0_8px_rgba(245,158,11,0.6)] animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.9)] -mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
