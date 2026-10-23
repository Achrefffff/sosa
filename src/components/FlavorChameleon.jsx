import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Droplet, Sparkles, Award, Utensils, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function FlavorChameleon({ selectedId, onSelectFlavor, onOpenB2B }) {
  const [mobileTab, setMobileTab] = useState('profil');
  const activeProduct = PRODUCTS.find((p) => p.id === selectedId) || PRODUCTS[0];

  return (
    <section id="experience" className="pt-6 pb-10 sm:py-24 relative overflow-hidden transition-colors duration-1000" style={{ backgroundColor: 'var(--bg-body)' }}>
      {/* Dynamic Colored Ambient Halos based on active product */}
      <div
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full blur-[60px] sm:blur-[140px] pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: activeProduct.glowColor }}
      />
      <div
        className="absolute bottom-10 -right-48 w-96 h-96 rounded-full blur-[60px] sm:blur-[140px] pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: activeProduct.glowColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-zinc-300 border border-white/10 glass-pill mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            L'Expérience Sensorielle
          </div>
          <h2 className="text-2xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Palette de Saveurs.{' '}
            <span
              className="font-serif-luxury italic font-normal lowercase tracking-normal transition-colors duration-700"
              style={{ color: activeProduct.color }}
            >
              Caractère Unique.
            </span>
          </h2>
          <p className="text-zinc-400 mt-2 sm:mt-3 text-xs sm:text-base">
            Sélectionnez une sauce pour plonger dans son univers gustatif, son profil aromatique et ses accords recommandés.
          </p>
        </div>

        {/* Flavour Selector Tabs (Grille compacte 3x3 sur mobile, flex centré sur desktop) */}
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-6 sm:mb-12">
          {PRODUCTS.map((prod) => {
            const isActive = prod.id === activeProduct.id;

            if (isActive) {
              return (
                <button
                  key={prod.id}
                  onClick={() => onSelectFlavor(prod.id)}
                  className="group snake-pill-active w-full sm:w-auto text-[10px] sm:text-sm font-bold tracking-tight sm:tracking-wide"
                  style={{
                    '--pill-color': prod.color,
                    '--pill-glow': prod.glowColor || 'rgba(212, 175, 55, 0.4)',
                  }}
                  aria-pressed="true"
                  aria-label={`${prod.name} (sélectionnée)`}
                >
                  {/* Base subtle track border */}
                  <div className="snake-pill-track" />

                  {/* Snake glowing ambient aura */}
                  <div className="snake-streamer-glow" />

                  {/* Snake sharp neon head & body */}
                  <div className="snake-streamer-crisp" />

                  {/* Inner pill content core */}
                  <div className="active-pill-core w-full justify-center">
                    <span
                      className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-transform group-hover:scale-125 shrink-0"
                      style={{
                        backgroundColor: prod.color,
                        boxShadow: `0 0 10px ${prod.color}, 0 0 3px ${prod.color}`,
                      }}
                    />
                    <span className="font-heading truncate">{prod.name}</span>
                  </div>
                </button>
              );
            }

            return (
              <button
                key={prod.id}
                onClick={() => onSelectFlavor(prod.id)}
                className="group flavor-pill-inactive w-full sm:w-auto justify-center text-[10px] sm:text-sm tracking-tight sm:tracking-wide"
                aria-pressed="false"
                aria-label={prod.name}
              >
                <span
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-transform group-hover:scale-125 shrink-0"
                  style={{ backgroundColor: prod.color }}
                />
                <span className="font-heading truncate">{prod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Showcase Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
          >
            {/* Left Column: Product Visual (grand format valorisé sur mobile, plein format desktop) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-lg flex items-center justify-center">
                {/* Vibrant ambient glow behind bottle */}
                <div
                  className="absolute inset-0 opacity-40 blur-3xl -z-10 transition-colors duration-700 pointer-events-none rounded-full scale-95 sm:scale-110"
                  style={{ backgroundColor: activeProduct.color }}
                />

                <div className="relative w-full max-w-[360px] sm:max-w-[440px] h-[390px] sm:h-[520px] lg:h-[580px] flex items-center justify-center">
                  <img
                    src={activeProduct.showcaseImage || activeProduct.image}
                    alt={`Sauce SŌSA ${activeProduct.name}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.75)] transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: In-depth Story, Intensity Gauges & Culinary Pairings */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
              {/* Product Header (Always visible) */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                    style={{
                      borderColor: `${activeProduct.color}60`,
                      color: activeProduct.color,
                      backgroundColor: `${activeProduct.color}15`
                    }}
                  >
                    {activeProduct.subtitle}
                  </span>
                  <span className="text-zinc-500 text-xs">•</span>
                  <span className="text-zinc-400 text-xs uppercase tracking-wider font-semibold">
                    {activeProduct.volume || '150 ML'}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight mb-1 sm:mb-2">
                  SŌSA {activeProduct.name}
                </h3>

                <p
                  className="text-base sm:text-xl font-serif-luxury italic mb-2 sm:mb-4"
                  style={{ color: activeProduct.color }}
                >
                  "{activeProduct.punchline}"
                </p>
              </div>

              {/* Mobile 2-Tab Switcher (Option 2 - Invisible sur Desktop) */}
              <div className="flex sm:hidden items-center p-1 rounded-2xl glass-panel border border-white/10 my-1 bg-black/40 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setMobileTab('profil')}
                  className={`chameleon-subtab flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${mobileTab === 'profil'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-md font-extrabold'
                    : 'chameleon-subtab-inactive text-zinc-400 hover:text-white'
                    }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Profil & Intensité</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMobileTab('accords')}
                  className={`chameleon-subtab flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${mobileTab === 'accords'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-md font-extrabold'
                    : 'chameleon-subtab-inactive text-zinc-400 hover:text-white'
                    }`}
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Accords & Dégustation</span>
                </button>
              </div>

              {/* ONGLET 1 : Profil & Intensité (Mobile: tab 'profil' / Desktop: toujours visible) */}
              <div className={`${mobileTab === 'profil' ? 'flex flex-col' : 'hidden'} sm:flex sm:flex-col gap-4 sm:gap-6`}>
                <p className="text-zinc-300 text-xs sm:text-base leading-relaxed">
                  {activeProduct.description}
                </p>

                {/* Flavor Profile Gauges (Douceur, Piquant, Umami) */}
                <div className="p-3.5 sm:p-5 rounded-2xl glass-panel border border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 sm:mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    Profil Sensoriel & Équilibre
                  </h4>

                  <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                    {/* Douceur */}
                    <div>
                      <div className="flex justify-between text-[11px] sm:text-xs text-zinc-300 font-medium mb-1.5">
                        <span className="truncate sm:overflow-visible">Douceur</span>
                        <span className="font-bold text-amber-400">{activeProduct.intensity.sweetness}/5</span>
                      </div>
                      <div className="h-1.5 sm:h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-200 rounded-full transition-all duration-700"
                          style={{ width: `${(activeProduct.intensity.sweetness / 5) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Piquant */}
                    <div>
                      <div className="flex justify-between text-[11px] sm:text-xs text-zinc-300 font-medium mb-1.5">
                        <span className="truncate sm:overflow-visible">Piment</span>
                        <span className="font-bold text-red-400">{activeProduct.intensity.spiciness}/5</span>
                      </div>
                      <div className="h-1.5 sm:h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-500 to-orange-400 rounded-full transition-all duration-700"
                          style={{ width: `${(activeProduct.intensity.spiciness / 5) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Umami */}
                    <div>
                      <div className="flex justify-between text-[11px] sm:text-xs text-zinc-300 font-medium mb-1.5">
                        <span className="truncate sm:overflow-visible">Umami</span>
                        <span className="font-bold text-amber-300">{activeProduct.intensity.umami}/5</span>
                      </div>
                      <div className="h-1.5 sm:h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full transition-all duration-700"
                          style={{ width: `${(activeProduct.intensity.umami / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Aromatic notes pills */}
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5 flex flex-wrap gap-1.5 sm:gap-2 items-center">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mr-1">
                      Notes aromatiques :
                    </span>
                    {activeProduct.notes.map((note, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-medium bg-white/5 border border-white/10 text-zinc-200"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ONGLET 2 : Accords & Dégustation (Mobile: tab 'accords' / Desktop: toujours visible) */}
              <div className={`${mobileTab === 'accords' ? 'flex flex-col' : 'hidden'} sm:flex sm:flex-col gap-4 sm:gap-6`}>
                {/* Chef's pairings */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5 sm:mb-3 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-amber-400" />
                      Accords Signature Recommandés
                    </span>
                    <span className="text-[10px] text-zinc-500 sm:hidden">Glisser →</span>
                  </h4>
                  <div className="flex sm:grid sm:grid-cols-3 gap-3 overflow-x-auto sm:overflow-visible snap-x scrollbar-none pb-2 -mx-1 px-1 sm:mx-0 sm:px-0">
                    {activeProduct.pairings.map((pair, idx) => (
                      <div
                        key={idx}
                        className="w-[72vw] max-w-[240px] sm:w-auto sm:max-w-none shrink-0 snap-center p-3 sm:p-3.5 rounded-xl glass-card border border-white/10 hover:border-amber-400/40 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-2xl mb-1">{pair.icon}</div>
                          <div className="text-xs font-bold text-white mb-1">{pair.name}</div>
                          <p className="text-[11px] text-zinc-400 leading-snug">{pair.tip}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chef quote */}
                <div
                  className="chef-quote-card p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm italic font-serif-luxury leading-relaxed"
                  style={{
                    borderColor: `${activeProduct.color}45`
                  }}
                >
                  <span className="chef-quote-label font-bold font-sans not-italic text-[10px] tracking-widest uppercase block mb-1 text-zinc-400">
                    L'avis de dégustation SŌSA :
                  </span>
                  <span className="chef-quote-text">
                    "{activeProduct.chefQuote}"
                  </span>
                </div>

                {/* Action B2B */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <button
                    onClick={onOpenB2B}
                    className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black shadow-lg shadow-amber-500/20 active:scale-95"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Commander pour mon restaurant / épicerie
                  </button>
                  <a
                    href="#trouver"
                    className="text-xs font-semibold text-zinc-300 hover:text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1 group py-1.5 sm:py-2 text-center"
                  >
                    Où déguster cette sauce ?
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-amber-400" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Subtle Luxury Section Transition Divider */}
        <div className="section-divider mt-8 sm:mt-16 flex items-center justify-center gap-3">
          <div className="divider-line h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent to-amber-400/35" />
          <div className="divider-dot w-1.5 h-1.5 rounded-full bg-amber-400/60 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          <div className="divider-line-rev h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent to-amber-400/35" />
        </div>
      </div>
    </section>
  );
}
