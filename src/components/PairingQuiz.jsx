import React, { useState } from 'react';
import { Sparkles, Utensils, Check, ArrowRight, Heart, ChefHat } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function PairingQuiz({ onSelectFlavor }) {
  const [selectedDish, setSelectedDish] = useState('sushis');
  const [selectedVibe, setSelectedVibe] = useState('spicy');

  const dishes = [
    { id: 'sushis', label: 'Sushis & Sashimis', icon: '🍣', image: '/images/sushi-platter.jpg' },
    { id: 'poke', label: 'Poké Bowl & Bowls', icon: '🥗', image: '/images/poke-bowl.jpg' },
    { id: 'tataki', label: 'Tataki & Viandes grillées', icon: '🥩', image: '/images/sushi-platter.jpg' },
    { id: 'gyoza', label: 'Gyozas & Tempuras', icon: '🥟', image: '/images/poke-bowl.jpg' },
    { id: 'bao', label: 'Bao & Street Food Fusion', icon: '🍔', image: '/images/poke-bowl.jpg' },
  ];

  const vibes = [
    { id: 'spicy', label: 'Coup de fouet épicé', icon: '🌶️', desc: 'Du piquant qui réveille' },
    { id: 'umami', label: 'Classique Umami pur', icon: '🥢', desc: 'L\'équilibre parfait' },
    { id: 'salty', label: 'Salinité pure & franche', icon: '🌊', desc: 'La pureté du soja salé' },
    { id: 'citrus', label: 'Fraîcheur acidulée', icon: '🍋', desc: 'Notes de yuzu vivifiantes' },
    { id: 'roasted', label: 'Arômes grillés & sésame', icon: '🌰', desc: 'Rondeur torréfiée' },
    { id: 'black-sesame', label: 'Sésame noir intense', icon: '🖤', desc: 'Minéral & boisé' },
    { id: 'smoked', label: 'Feu de bois & fumé', icon: '🪵', desc: 'Infusion boisée profonde' },
    { id: 'caramel', label: 'Douceur confite', icon: '🧅', desc: 'Oignons fondants' },
    { id: 'honey', label: 'Gourmandise au miel', icon: '🍯', desc: 'Peps de moutarde douce' },
  ];

  // Logic to determine best matching sauce
  const getRecommendation = () => {
    if (selectedVibe === 'spicy') return PRODUCTS.find(p => p.id === 'hot-soja');
    if (selectedVibe === 'citrus') return PRODUCTS.find(p => p.id === 'ginger-yuzu');
    if (selectedVibe === 'roasted') return PRODUCTS.find(p => p.id === 'toasted-sesame');
    if (selectedVibe === 'caramel') return PRODUCTS.find(p => p.id === 'sweet-oignon');
    if (selectedVibe === 'honey') return PRODUCTS.find(p => p.id === 'honey-mustard');
    if (selectedVibe === 'salty') return PRODUCTS.find(p => p.id === 'original-sale');
    if (selectedVibe === 'black-sesame') return PRODUCTS.find(p => p.id === 'black-sesame');
    if (selectedVibe === 'smoked') return PRODUCTS.find(p => p.id === 'smoked');
    
    // Default or based on dish
    if (selectedDish === 'tataki' || selectedDish === 'gyoza') return PRODUCTS.find(p => p.id === 'toasted-sesame');
    if (selectedDish === 'poke') return PRODUCTS.find(p => p.id === 'sweet-oignon');
    return PRODUCTS.find(p => p.id === 'originale');
  };

  const match = getRecommendation() || PRODUCTS[0];
  const activeDishObj = dishes.find(d => d.id === selectedDish);

  return (
    <section id="pairing" className="py-24 relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--bg-section-alt)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-300 border border-amber-500/30 glass-pill mb-4">
            <ChefHat className="w-3.5 h-3.5" />
            Sommelier des Saveurs
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Quel twist pour <br />
            <span className="title-accent-gradient font-serif-luxury italic font-normal lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400">
              votre plat ?
            </span>
          </h2>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base">
            Configurez votre repas et laissez l'algorithme gustatif SŌSA vous révéler le mariage idéal.
          </p>
        </div>

        {/* Quiz selectors grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Dish + Vibe */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Step 1: Dish Selection */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-black text-[11px] font-extrabold flex items-center justify-center">1</span>
                Choisissez votre plat du moment
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {dishes.map((dish) => {
                  const isSelected = selectedDish === dish.id;
                  return (
                    <button
                      key={dish.id}
                      onClick={() => setSelectedDish(dish.id)}
                      className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between h-24 ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                          : 'bg-white/[0.02] border-white/10 text-zinc-300 hover:bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-2xl">{dish.icon}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                      </div>
                      <span className="text-xs font-bold tracking-tight">{dish.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Vibe Selection */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-black text-[11px] font-extrabold flex items-center justify-center">2</span>
                Quelle sensation recherchez-vous ?
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {vibes.map((vibe) => {
                  const isSelected = selectedVibe === vibe.id;
                  return (
                    <button
                      key={vibe.id}
                      onClick={() => setSelectedVibe(vibe.id)}
                      className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between h-24 ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                          : 'bg-white/[0.02] border-white/10 text-zinc-300 hover:bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xl">{vibe.icon}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold tracking-tight">{vibe.label}</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">{vibe.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card: Matched Sauce & Plated Inspiration */}
          <div className="lg:col-span-5">
            <div
              className="p-6 sm:p-8 rounded-3xl glass-panel border relative overflow-hidden shadow-2xl transition-all duration-500"
              style={{ borderColor: `${match.color}50` }}
            >
              {/* Glow Accent */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ backgroundColor: match.color }}
              />

              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 border border-white/15 text-white flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Accord Recommandé
                </span>
                <span className="text-xs text-zinc-400 font-semibold uppercase">
                  100% Match
                </span>
              </div>

              {/* Product Preview Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/10 mb-6">
                <img
                  src={match.showcaseImage || match.image}
                  alt={match.name}
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-24 object-contain rounded-xl drop-shadow-md"
                />
                <div>
                  <div className="text-[11px] uppercase font-bold tracking-wider" style={{ color: match.color }}>
                    {match.type}
                  </div>
                  <h4 className="text-xl font-black text-white font-heading">
                    SŌSA {match.name}
                  </h4>
                  <p className="text-xs text-zinc-300 mt-0.5 line-clamp-2">
                    "{match.punchline}"
                  </p>
                </div>
              </div>

              {/* Plated Culinary visual */}
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video border border-white/10">
                <img
                  src={activeDishObj?.image || '/images/poke-bowl.webp'}
                  alt={activeDishObj?.label}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs text-white/90 font-medium">
                    Inspiration dressage : <span className="font-bold">{activeDishObj?.label}</span> nappé de <span className="font-bold" style={{ color: match.color }}>SŌSA {match.name}</span>
                  </p>
                </div>
              </div>

              {/* Chef Dressing Tip */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-6 text-xs text-zinc-300 leading-relaxed">
                <span className="font-bold text-amber-300 block mb-1">
                  💡 L'Astuce du Chef :
                </span>
                Grâce au bouchon squeeze de 150ml, réalisez 3 fins zig-zags à 45° sur la garniture tiède pour libérer les arômes dès la première vapeur.
              </div>

              {/* Button: Discover this sauce in detail */}
              <button
                onClick={() => {
                  onSelectFlavor(match.id);
                  const el = document.getElementById('experience');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 text-black shadow-xl active:scale-95"
                style={{ backgroundColor: match.color }}
              >
                Explorer la sauce {match.name} en détail
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
