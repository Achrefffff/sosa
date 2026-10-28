import React, { useRef, useState } from 'react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function LineupGallery({ onSelectFlavor }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (!cards || cards.length === 0) return;
    const cardWidth = cards[0].offsetWidth + 20; // 20px is gap-5
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), PRODUCTS.length - 1));
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const targetIdx = Math.min(Math.max(index, 0), PRODUCTS.length - 1);
    const container = scrollRef.current;
    const cards = container.children;
    if (cards && cards[targetIdx]) {
      cards[targetIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveIndex(targetIdx);
    }
  };

  return (
    <section id="collection" className="pt-10 pb-8 sm:pt-14 sm:pb-24 relative overflow-hidden subtle-grid transition-colors duration-500" style={{ backgroundColor: 'var(--bg-body)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-zinc-300 border border-white/10 glass-pill mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            La Collection SŌSA Originale
          </div>
          <h2 className="title-accent-gradient text-3xl sm:text-5xl md:text-6xl font-serif-luxury italic font-normal tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400">
            Une œuvre de goût.
          </h2>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base">
            Des flacons souples pensés pour tous les gourmands, les passionnés de cuisine et les tablées conviviales.
          </p>
        </div>

        {/* 6 Products Carousel (Mobile Snap Scroll) / Grid (Desktop) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 mb-4 sm:mb-12 scroll-smooth"
        >
          {PRODUCTS.map((prod, index) => (
            <div
              key={prod.id}
              onClick={() => {
                onSelectFlavor(prod.id);
                const el = document.getElementById('experience');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-[82vw] max-w-[340px] sm:w-auto sm:max-w-none shrink-0 snap-center group cursor-pointer rounded-3xl p-5 glass-card border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-black/40 mb-5 border border-white/5">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={`w-full h-full ${prod.image.includes('tubesansfond') ? 'object-contain p-4 group-hover:scale-105' : 'object-cover object-top group-hover:brightness-105 group-hover:scale-105'} transition-all duration-500`}
                  />
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase bg-black/80 text-zinc-300 backdrop-blur-md border border-white/10">
                      {prod.volume || '150 ML'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-2">
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 border"
                    style={{
                      backgroundColor: `${prod.color}18`,
                      borderColor: `${prod.color}55`,
                      color: prod.color
                    }}
                  >
                    {prod.type}
                  </span>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-xl font-black text-white font-heading group-hover:text-amber-300 transition-colors">
                      SŌSA {prod.name}
                    </h3>
                  </div>
                </div>
                <p className="text-xs font-serif-luxury italic mb-3 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  "{prod.punchline}"
                </p>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                  {prod.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-amber-300">
                <span>Découvrir la saveur</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Dots & Arrows */}
        <div className="flex sm:hidden items-center justify-between mb-8 px-1">
          <button
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className={`p-2.5 rounded-full border border-white/10 glass-panel transition-all active:scale-90 ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:border-amber-400/40 text-amber-400'}`}
            aria-label="Sauce précédente"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {PRODUCTS.map((prod, idx) => (
              <button
                key={prod.id}
                onClick={() => scrollToIndex(idx)}
                className={`transition-all duration-300 rounded-full ${idx === activeIndex ? 'w-6 h-2' : 'w-2 h-2 opacity-40 hover:opacity-75'}`}
                style={{
                  backgroundColor: idx === activeIndex ? prod.color : 'var(--text-muted)'
                }}
                aria-label={`Aller à la saveur ${prod.name}`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === PRODUCTS.length - 1}
            className={`p-2.5 rounded-full border border-white/10 glass-panel transition-all active:scale-90 ${activeIndex === PRODUCTS.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:border-amber-400/40 text-amber-400'}`}
            aria-label="Sauce suivante"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Subtle Luxury Section Transition Divider */}
        <div className="section-divider mt-4 sm:mt-8 flex items-center justify-center gap-3">
          <div className="divider-line h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent to-amber-400/35" />
          <div className="divider-dot w-1.5 h-1.5 rounded-full bg-amber-400/60 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          <div className="divider-line-rev h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent to-amber-400/35" />
        </div>
      </div>
    </section>
  );
}
