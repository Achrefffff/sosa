import React from 'react';
import { Heart, Sparkles, Award, ShieldCheck, Leaf } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="philosophie" className="pt-10 pb-8 sm:py-24 relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--bg-body)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual with storytelling accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-3 shadow-2xl">
              <img
                src="/images/all-lineup.webp"
                alt="Histoire de la marque SŌSA"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 rounded-3xl">
                <div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500 text-black inline-block mb-2">
                    L'Excellence à la française
                  </span>
                  <p className="text-white text-sm font-serif-luxury italic">
                    "Ne changez pas vos plats, changez le twist qui les sublime."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl glass-panel border border-amber-500/30 shadow-2xl" style={{ backgroundColor: 'var(--bg-modal)', opacity: 0.9 }}>
              <span className="inline-flex w-7 h-5 rounded overflow-hidden shadow shrink-0 border border-white/20">
                <span className="w-1/3 h-full bg-[#002654]"></span>
                <span className="w-1/3 h-full bg-white"></span>
                <span className="w-1/3 h-full bg-[#ce1126]"></span>
              </span>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Élaboré en France</div>
                <div className="text-[11px] text-zinc-400">Recettes exclusives déposées</div>
              </div>
            </div>
          </div>

          {/* Right Column: Philosophy Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-300 border border-amber-500/30 glass-pill w-fit">
              <Heart className="w-3.5 h-3.5" />
              L'Esprit & Le Manifeste SŌSA
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Une révolution <br />
              <span className="title-accent-gradient font-serif-luxury italic font-normal lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400">
                dans chaque goutte.
              </span>
            </h2>

            <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Pendant des décennies, la sauce soja sucrée est restée figée : des flacons en verre impossibles à doser avec précision, des sachets plastiques déchirés à la va-vite, ou des sauces industrielles surchargées d'additifs artificiels.
              </p>
              <p>
                <strong className="text-white font-semibold">SŌSA est née d'une vision culinaire sans compromis :</strong>{' '}
                offrir aux amateurs de sushis, de pokés et de cuisine fusion une sauce soja d'une texture veloutée parfaite, aromatisée avec audace — du piquant vibrant du piment à la fraîcheur ciselée du yuzu japonais.
              </p>
              <p>
                Conditionnée en France dans un format squeeze de 150ml ergonomique, SŌSA permet un nappage précis, propre et artistique digne des tables étoilées.
              </p>
            </div>

            {/* 4 Pastilles / Chips d'engagements SŌSA - Parfaitement alignées */}
            <div className="pt-4 border-t border-white/10">
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 max-w-sm sm:max-w-md">
                <div className="brand-pillar-chip px-3 py-2 rounded-full backdrop-blur-md flex items-center justify-center sm:justify-start gap-2 transition-all duration-300 hover:scale-[1.02]">
                  <span className="inline-flex w-3.5 h-2.5 rounded-[2px] overflow-hidden shadow-sm shrink-0 border border-white/20">
                    <span className="w-1/3 h-full bg-[#002654]"></span>
                    <span className="w-1/3 h-full bg-white"></span>
                    <span className="w-1/3 h-full bg-[#ce1126]"></span>
                  </span>
                  <span className="font-heading font-bold text-[11px] sm:text-xs tracking-wide whitespace-nowrap">
                    Fabriqué en France
                  </span>
                </div>

                <div className="brand-pillar-chip px-3 py-2 rounded-full backdrop-blur-md flex items-center justify-center sm:justify-start gap-2 transition-all duration-300 hover:scale-[1.02]">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="font-heading font-bold text-[11px] sm:text-xs tracking-wide whitespace-nowrap">
                    100% Végétal
                  </span>
                </div>

                <div className="brand-pillar-chip px-3 py-2 rounded-full backdrop-blur-md flex items-center justify-center sm:justify-start gap-2 transition-all duration-300 hover:scale-[1.02]">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="font-heading font-bold text-[11px] sm:text-xs tracking-wide whitespace-nowrap">
                    Clean Recipe
                  </span>
                </div>

                <div className="brand-pillar-chip px-3 py-2 rounded-full backdrop-blur-md flex items-center justify-center sm:justify-start gap-2 transition-all duration-300 hover:scale-[1.02]">
                  <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-heading font-bold text-[11px] sm:text-xs tracking-wide whitespace-nowrap">
                    Format Squeeze
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

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
