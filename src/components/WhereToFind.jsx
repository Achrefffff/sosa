import React, { useState } from 'react';
import { MapPin, Store, Utensils, Sparkles, Send, CheckCircle2, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

export default function WhereToFind({ onOpenB2B }) {
  const [selectedCity, setSelectedCity] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const locations = [
    { name: 'Matsuri & Friends Sushi Bar', type: 'Restaurant & Poké Bar', city: 'paris', address: 'Rue de la Roquette, 75011 Paris', badge: 'Table Partenaire' },
    { name: 'L\'Atelier Épicerie Fine Asiatique', type: 'Épicerie Gourmande', city: 'paris', address: 'Boulevard Haussmann, 75009 Paris', badge: 'Corner Vente' },
    { name: 'Kōsen Poké Lab', type: 'Poké Bar Fusion', city: 'lyon', address: 'Presqu\'île, 69002 Lyon', badge: 'Table Partenaire' },
    { name: 'Comptoir Gourmet Méditerranée-Asie', type: 'Épicerie Fine', city: 'marseille', address: 'Quai du Port, 13002 Marseille', badge: 'Corner Vente' },
    { name: 'Bordeaux Bowl Club', type: 'Street Food & Poké', city: 'bordeaux', address: 'Place du Parlement, 33000 Bordeaux', badge: 'Table Partenaire' },
    { name: 'Wabi-Sabi Store & Tea', type: 'Concept Store Food', city: 'lille', address: 'Vieux-Lille, 59000 Lille', badge: 'Corner Vente' },
  ];

  const filtered = selectedCity === 'all'
    ? locations
    : locations.filter(l => l.city === selectedCity);

  return (
    <section id="trouver" className="pt-2 pb-16 sm:pt-4 sm:pb-20 relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--bg-body)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-zinc-300 border border-white/10 glass-pill mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Points de Vente & Dégustation
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Où savourer <br />
            <span className="title-accent-gradient font-serif-luxury italic font-normal lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400">
              les sauces SŌSA ?
            </span>
          </h2>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base">
            Retrouvez nos 6 créations dans les meilleurs restaurants de sushis, poké bars partenaires et épiceries fines.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center sm:justify-center gap-2 mb-8 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {[
            { id: 'all', label: 'Toutes les adresses' },
            { id: 'paris', label: 'Paris & Île-de-France' },
            { id: 'lyon', label: 'Lyon' },
            { id: 'marseille', label: 'Marseille' },
            { id: 'bordeaux', label: 'Bordeaux' },
            { id: 'lille', label: 'Lille' },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCity(c.id);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-200 ${selectedCity === c.id
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20 font-bold'
                  : 'glass-card text-zinc-300 hover:text-white hover:bg-white/10'
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Locations Grid: 3 cards by default on mobile, all on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 sm:mb-16">
          {filtered.map((item, idx) => {
            const isHiddenOnMobile = selectedCity === 'all' && !showAll && idx >= 3;
            return (
              <div
                key={idx}
                className={`${isHiddenOnMobile ? 'hidden sm:flex' : 'flex'} p-5 rounded-2xl glass-card border border-white/10 hover:border-amber-400/30 transition-all duration-200 hover:-translate-y-0.5 flex-col justify-between`}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {item.badge}
                    </span>
                    <span className="text-xs text-zinc-500 uppercase font-semibold">
                      {item.city}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-heading mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mb-3">{item.type}</p>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(item.name + ' ' + item.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs text-zinc-300 pt-3 border-t border-white/5 hover:text-amber-400 transition-colors group/link"
                  title="Ouvrir dans Google Maps"
                >
                  <div className="flex items-center gap-1.5 truncate pr-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{item.address}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all text-amber-400" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Mobile "Voir plus d'adresses" Button */}
        {selectedCity === 'all' && filtered.length > 3 && (
          <div className="flex sm:hidden justify-center -mt-2 mb-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider glass-panel border border-amber-500/30 text-amber-400 hover:text-white transition-all active:scale-95 flex items-center gap-2 shadow-lg"
            >
              {showAll ? (
                <>
                  <span>Afficher moins d'adresses</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Voir les {filtered.length - 3} autres adresses ({filtered.length} au total)</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Professional Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-amber-500/30 relative overflow-hidden bg-gradient-to-r from-stone-900/90 via-neutral-900/90 to-amber-950/40">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
                Restaurateurs • Poké Bars • Épiceries Fines • Distributeurs
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                Sublimez les créations de vos clients avec SŌSA.
              </h3>
              <p className="text-sm text-zinc-300 mt-2">
                Offrez à vos clients une alternative de prestige aux sauces industrielles. Échantillons gratuits disponibles sur demande pour les professionnels.
              </p>
            </div>
            <button
              onClick={onOpenB2B}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              Demander un coffret dégustation Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
