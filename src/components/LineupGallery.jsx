import React, { useRef, useState } from 'react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Flame, Droplets, Utensils } from 'lucide-react';

export const SUCRE_PRODUCTS = [
  {
    id: 'originale',
    name: 'Originale',
    kanji: '甘',
    kanjiReading: 'AMAI',
    universe: 'sucre',
    universeLabel: '甘味 · SŌSA Sucré',
    type: 'Douce & légèrement sucrée',
    subtitle: 'Sauce Soja Sucrée',
    punchline: 'Saveur riche & parfaitement équilibrée',
    description: 'La recette signature qui redéfinit la sauce soja sucrée. Un équilibre d’orfèvre entre rondeur caramélisée et profondeur umami.',
    imageWebp: '/images/lineup/originale-sucre-800.webp',
    imagePng: '/images/lineup/originale-sucre.png',
    color: '#d4af37',
    glowColor: 'rgba(212, 175, 55, 0.4)',
    pairings: ['🍣 Sushis Saumon', '🥗 Poké Bowls', '🥢 Riz Sauté'],
    volume: '150 ML',
  },
  {
    id: 'hot-soja',
    name: 'Hot Soja',
    kanji: '辛',
    kanjiReading: 'KARA',
    universe: 'sucre',
    universeLabel: '甘味 · SŌSA Sucré',
    type: 'Sucrée & épicée',
    subtitle: 'Sauce Soja Sucrée Aromatisée',
    punchline: 'La douceur du soja relevée du piment',
    description: 'Une fusion ardente où la vivacité du piment rouge rencontre le velouté d’un soja doux. Pour sublimer sans masquer.',
    imageWebp: '/images/lineup/hot-soja-sucre-800.webp',
    imagePng: '/images/lineup/hot-soja-sucre.png',
    color: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    pairings: ['🌶️ Crispy Rolls', '🥭 Tartare Saumon', '🍢 Yakitori'],
    volume: '150 ML',
  },
  {
    id: 'ginger-yuzu',
    name: 'Ginger Yuzu',
    kanji: '柚',
    kanjiReading: 'YUZU',
    universe: 'sucre',
    universeLabel: '甘味 · SŌSA Sucré',
    type: 'Sucrée & acidulée',
    subtitle: 'Sauce Soja Sucrée Aromatisée',
    punchline: 'Fraîcheur vive du yuzu & peps du gingembre',
    description: 'L’éclat vivifiant du yuzu sauvage japonais marié au gingembre frais. Un twist acidulé d’une élégance rare.',
    imageWebp: '/images/lineup/ginger-yuzu-sucre-800.webp',
    imagePng: '/images/lineup/ginger-yuzu-sucre.png',
    color: '#84cc16',
    glowColor: 'rgba(132, 204, 22, 0.4)',
    pairings: ['🐟 Sashimis & Bar', '🍣 Saumon Cru', '🍋 Céviche'],
    volume: '150 ML',
  },
  {
    id: 'honey-mustard',
    name: 'Honey Mustard',
    kanji: '蜜',
    kanjiReading: 'MITSU',
    universe: 'sucre',
    universeLabel: '甘味 · SŌSA Sucré',
    type: 'Sucrée & épicée douce',
    subtitle: 'Sauce Soja Sucrée Aromatisée',
    punchline: 'Miel doré onctueux & grains de moutarde',
    description: 'L’accord audacieux du miel velouté et des graines de moutarde de caractère sur un fond de soja doux onctueux.',
    imageWebp: '/images/lineup/honey-mustard-sucre-800.webp',
    imagePng: '/images/lineup/honey-mustard-sucre.png',
    color: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.4)',
    pairings: ['🍗 Poulet Karaage', '🥑 Avocado Toast', '🔥 Saumon Rôti'],
    volume: '150 ML',
  },
  {
    id: 'sweet-oignon',
    name: 'Sweet Oignon',
    kanji: '葱',
    kanjiReading: 'NEGI',
    universe: 'sucre',
    universeLabel: '甘味 · SŌSA Sucré',
    type: 'Douce & caramélisée',
    subtitle: 'Sauce Soja Sucrée Aromatisée',
    punchline: 'Oignons doucement confits & caramélisés',
    description: 'Inspirée des réductions d’oignons doucement compotés au wok. Une suavité réconfortante et hautement gourmande.',
    imageWebp: '/images/lineup/sweet-oignon-sucre-800.webp',
    imagePng: '/images/lineup/sweet-oignon-sucre.png',
    color: '#cca362',
    glowColor: 'rgba(204, 163, 98, 0.4)',
    pairings: ['🍔 Bao Burgers', '🍤 Tempuras Crevettes', '🥑 Pokés'],
    volume: '150 ML',
  },
  {
    id: 'toasted-sesame',
    name: 'Toasted Sesame',
    kanji: '胡',
    kanjiReading: 'GOMA',
    universe: 'sucre',
    universeLabel: '甘味 · SŌSA Sucré',
    type: 'Douce & toastée',
    subtitle: 'Sauce Soja Sucrée Aromatisée',
    punchline: 'Sésame grillé caramélisé & touche sucrée',
    description: 'L’art de la torréfaction japonaise. Graines et huile de sésame blond grillé insufflent une rondeur noisettée incomparable.',
    imageWebp: '/images/lineup/toasted-sesame-sucre-800.webp',
    imagePng: '/images/lineup/toasted-sesame-sucre.png',
    color: '#d97706',
    glowColor: 'rgba(217, 119, 6, 0.4)',
    pairings: ['🥟 Gyozas Croustillants', '🥩 Tataki de Bœuf', '🥗 Salade Chou'],
    volume: '150 ML',
  },
];

export const SALE_PRODUCTS = [
  {
    id: 'original-sale',
    name: 'Original Salé',
    kanji: '塩',
    kanjiReading: 'SHIO',
    universe: 'sale',
    universeLabel: '塩味 · SŌSA Salé',
    type: 'Umami & équilibrée',
    subtitle: 'Sauce Soja Salée Aromatisée',
    punchline: 'L’essence du soja salé révélée avec finesse',
    description: 'La pureté saline et la richesse umami authentique. Une précision chirurgicale qui magnifie la texture et le gras naturel des poissons.',
    imageWebp: '/images/lineup/original-sale-800.webp',
    imagePng: '/images/lineup/original-sale.png',
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    pairings: ['🐟 Sashimis Thon & Daurade', '🥟 Gyozas Vapeur', '🍜 Bouillons Ramen'],
    volume: '150 ML',
  },
  {
    id: 'smoked',
    name: 'Smoked',
    kanji: '煙',
    kanjiReading: 'KEMURI',
    universe: 'sale',
    universeLabel: '塩味 · SŌSA Salé',
    type: 'Notes fumées au bois',
    subtitle: 'Sauce Soja Salée Aromatisée',
    punchline: 'Infusion fumée au bois noble & umami profond',
    description: 'Une immersion boisée d’une élégance rare. Infusée aux bois nobles, elle apporte des notes de feu de bois subtiles et captivantes.',
    imageWebp: '/images/lineup/smoked-sale-800.webp',
    imagePng: '/images/lineup/smoked-sale.png',
    color: '#ea580c',
    glowColor: 'rgba(234, 88, 12, 0.4)',
    pairings: ['🐟 Saumon Gravlax', '🍔 Smash Burgers', '🥕 Légumes Rôtis'],
    volume: '150 ML',
  },
  {
    id: 'black-sesame',
    name: 'Black Sesame',
    kanji: '黒',
    kanjiReading: 'KURO',
    universe: 'sale',
    universeLabel: '塩味 · SŌSA Salé',
    type: 'Intense & gourmande',
    subtitle: 'Sauce Soja Salée Aromatisée',
    punchline: 'Sésame noir torréfié & salinité racée',
    description: 'Le magnétisme absolu du sésame noir torréfié. Accents minéraux et noisette sombre sur un soja salé d’une prodigieuse onctuosité.',
    imageWebp: '/images/lineup/black-sesame-sale-800.webp',
    imagePng: '/images/lineup/black-sesame-sale.png',
    color: '#94a3b8',
    glowColor: 'rgba(148, 163, 184, 0.4)',
    pairings: ['🍜 Noodles Soba & Udon', '🍄 Tofu & Shiitaké', '🥩 Carpaccio Wagyu'],
    volume: '150 ML',
  },
];

function ProductCard({ prod, onSelectFlavor, priority = false }) {
  return (
    <div
      onClick={() => {
        onSelectFlavor(prod.id);
        const el = document.getElementById('experience');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}
      className="jp-card-lacquer w-[84vw] max-w-[340px] sm:w-auto sm:max-w-none shrink-0 snap-center group cursor-pointer rounded-3xl p-5 relative overflow-hidden flex flex-col justify-between"
      style={{
        '--card-glow': prod.glowColor,
      }}
    >
      {/* Background Japanese Kanji Watermark */}
      <div
        className="jp-kanji-watermark absolute -top-4 -right-2 text-8xl sm:text-9xl select-none"
        style={{ color: prod.color }}
      >
        {prod.kanji}
      </div>

      <div>
        {/* Visual Frame */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black/40 mb-5 border border-white/10 group-hover:border-white/20 transition-colors">
          <picture>
            <source srcSet={prod.imageWebp} type="image/webp" />
            <img
              src={prod.imagePng}
              alt={`SŌSA ${prod.name} 150ml`}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = prod.imagePng;
              }}
            />
          </picture>

          {/* Universe Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md border shadow-sm"
              style={{
                backgroundColor: `${prod.color}22`,
                borderColor: `${prod.color}66`,
                color: prod.color,
              }}
            >
              {prod.universe === 'sucre' ? '甘味 · SŌSA Sucré' : '塩味 · SŌSA Salé'}
            </span>
          </div>

          {/* Japanese Artisan Seal (Hanko) */}
          <div className="absolute top-3 right-3 z-10">
            <span className="jp-hanko-seal" title="Authentique SŌSA">
              匠 SŌSA
            </span>
          </div>

          {/* Volume Badge */}
          <div className="absolute bottom-3 right-3 z-10">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/85 text-zinc-300 backdrop-blur-md border border-white/15">
              {prod.volume}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mb-2 relative z-10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              {prod.kanjiReading} · {prod.subtitle}
            </span>
            <span
              className="text-xs font-black px-2 py-0.5 rounded-md border"
              style={{
                backgroundColor: `${prod.color}15`,
                borderColor: `${prod.color}40`,
                color: prod.color,
              }}
            >
              {prod.kanji}
            </span>
          </div>

          <h3 className="text-2xl font-black text-white font-heading group-hover:text-amber-300 transition-colors">
            SŌSA {prod.name}
          </h3>

          <div className="mt-1 mb-2">
            <span
              className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border"
              style={{
                backgroundColor: `${prod.color}15`,
                borderColor: `${prod.color}50`,
                color: prod.color,
              }}
            >
              {prod.type}
            </span>
          </div>

          <p className="text-xs font-serif-luxury italic mb-3 text-zinc-300 group-hover:text-amber-200 transition-colors">
            "{prod.punchline}"
          </p>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
            {prod.description}
          </p>

          {/* Culinary Pairings */}
          <div className="pt-3 border-t border-white/5 mb-2">
            <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-2 flex items-center gap-1">
              <Utensils className="w-3 h-3 text-amber-400" />
              Accords conseillés :
            </div>
            <div className="flex flex-wrap gap-1.5">
              {prod.pairings.map((pairing, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-medium"
                >
                  {pairing}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors relative z-10">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Déguster la recette
        </span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
}

export default function LineupGallery({ onSelectFlavor }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'sucre' | 'sale'

  const sucreScrollRef = useRef(null);
  const saleScrollRef = useRef(null);
  const [activeSucreIndex, setActiveSucreIndex] = useState(0);
  const [activeSaleIndex, setActiveSaleIndex] = useState(0);

  const handleSucreScroll = () => {
    if (!sucreScrollRef.current) return;
    const container = sucreScrollRef.current;
    const cards = container.children;
    if (!cards || cards.length === 0) return;
    const cardWidth = cards[0].offsetWidth + 20;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveSucreIndex(Math.min(Math.max(index, 0), SUCRE_PRODUCTS.length - 1));
  };

  const handleSaleScroll = () => {
    if (!saleScrollRef.current) return;
    const container = saleScrollRef.current;
    const cards = container.children;
    if (!cards || cards.length === 0) return;
    const cardWidth = cards[0].offsetWidth + 20;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveSaleIndex(Math.min(Math.max(index, 0), SALE_PRODUCTS.length - 1));
  };

  const scrollSucreToIndex = (index) => {
    if (!sucreScrollRef.current) return;
    const targetIdx = Math.min(Math.max(index, 0), SUCRE_PRODUCTS.length - 1);
    const container = sucreScrollRef.current;
    const cards = container.children;
    if (cards && cards[targetIdx]) {
      cards[targetIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveSucreIndex(targetIdx);
    }
  };

  const scrollSaleToIndex = (index) => {
    if (!saleScrollRef.current) return;
    const targetIdx = Math.min(Math.max(index, 0), SALE_PRODUCTS.length - 1);
    const container = saleScrollRef.current;
    const cards = container.children;
    if (cards && cards[targetIdx]) {
      cards[targetIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveSaleIndex(targetIdx);
    }
  };

  return (
    <section
      id="collection"
      className="pt-4 pb-8 sm:pt-6 sm:pb-12 relative overflow-hidden subtle-grid transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-body)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Japanese Inspiration */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-zinc-300 border border-white/10 glass-pill mb-4 shadow-sm">
            <span className="text-amber-400 font-serif">和食</span>
            <span className="w-1 h-1 rounded-full bg-amber-400/60" />
            <span>L'Art des Deux Mondes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            SŌSA Sucré{' '}
            <span className="font-serif-luxury italic font-normal lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400">
              &
            </span>{' '}
            SŌSA Salé.
          </h2>

          <p className="text-zinc-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
            La collection SŌSA explore la dualité parfaite
            entre <span className="text-amber-300 font-semibold">douceur caramélisée (甘味)</span> et{' '}
            <span className="sale-accent-text font-semibold">intensité umami salée (塩味)</span>.
            9 flacons souples 150 ml conçus pour tous les passionnés de goût.
          </p>

          {/* Interactive Japanese Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl glass-panel border border-white/10 shadow-2xl gap-1 sm:gap-2 max-w-full overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shrink-0 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-amber-500/25 to-yellow-500/20 text-amber-300 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                  : 'text-zinc-400 hover:text-white border border-transparent hover:bg-white/5'
              }`}
            >
              <span className="font-serif text-sm">両味</span>
              <span>Toute la collection (9)</span>
            </button>

            <button
              onClick={() => setActiveTab('sucre')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shrink-0 ${
                activeTab === 'sucre'
                  ? 'bg-gradient-to-r from-amber-600/30 to-red-600/20 text-amber-200 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                  : 'text-zinc-400 hover:text-white border border-transparent hover:bg-white/5'
              }`}
            >
              <span className="text-amber-400 font-serif text-sm">甘味</span>
              <span>SŌSA Sucré (6)</span>
            </button>

            <button
              onClick={() => setActiveTab('sale')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shrink-0 ${
                activeTab === 'sale'
                  ? 'bg-gradient-to-r from-sky-600/30 to-blue-600/20 text-sky-200 border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                  : 'text-zinc-400 hover:text-white border border-transparent hover:bg-white/5'
              }`}
            >
              <span className="text-sky-400 font-serif text-sm">塩味</span>
              <span>SŌSA Salé (3)</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            SECTION 1: SŌSA SUCRÉ (甘味 - AMAMI)
            ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'sucre') && (
          <div className="mb-14 sm:mb-20">
            {/* Universe Sub-header */}
            <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-amber-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                  <span className="text-2xl font-serif text-amber-400 font-black">甘</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                      甘味 · AMAMI
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      6 Recettes
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mt-0.5">
                    L'Univers SŌSA Sucré
                  </h3>
                </div>
              </div>
            </div>

            {/* Sucre Cards Carousel (Mobile) / Grid (Desktop) */}
            <div
              ref={sucreScrollRef}
              onScroll={handleSucreScroll}
              className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 mb-4 sm:mb-8 scroll-smooth"
            >
              {SUCRE_PRODUCTS.map((prod, index) => (
                <ProductCard
                  key={prod.id}
                  prod={prod}
                  onSelectFlavor={onSelectFlavor}
                  priority={index === 0}
                />
              ))}
            </div>

            {/* Mobile Navigation Arrows & Dots for Sucre */}
            <div className="flex sm:hidden items-center justify-between mb-8 px-1">
              <button
                onClick={() => scrollSucreToIndex(activeSucreIndex - 1)}
                disabled={activeSucreIndex === 0}
                className={`p-2.5 rounded-full border border-white/10 glass-panel transition-all active:scale-90 ${
                  activeSucreIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:border-amber-400/40 text-amber-400'
                }`}
                aria-label="Sauce sucrée précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {SUCRE_PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => scrollSucreToIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === activeSucreIndex ? 'w-6 h-2' : 'w-2 h-2 opacity-40 hover:opacity-75'
                    }`}
                    style={{
                      backgroundColor: idx === activeSucreIndex ? prod.color : 'var(--text-muted)',
                    }}
                    aria-label={`Aller à la saveur ${prod.name}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scrollSucreToIndex(activeSucreIndex + 1)}
                disabled={activeSucreIndex === SUCRE_PRODUCTS.length - 1}
                className={`p-2.5 rounded-full border border-white/10 glass-panel transition-all active:scale-90 ${
                  activeSucreIndex === SUCRE_PRODUCTS.length - 1
                    ? 'opacity-30 cursor-not-allowed'
                    : 'opacity-100 hover:border-amber-400/40 text-amber-400'
                }`}
                aria-label="Sauce sucrée suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Japanese Transition Divider between Universes (when viewing all) */}
        {activeTab === 'all' && (
          <div className="my-10 sm:my-16 flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-r from-transparent to-amber-500/30" />
            <div className="flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 glass-pill text-xs font-serif text-zinc-300">
              <span className="text-amber-400">甘</span>
              <span className="text-zinc-500">·</span>
              <span className="text-sky-400">塩</span>
            </div>
            <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-l from-transparent to-sky-500/30" />
          </div>
        )}

        {/* =========================================================================
            SECTION 2: SŌSA SALÉ (塩味 - SHIOMI)
            ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'sale') && (
          <div>
            {/* Universe Sub-header */}
            <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-sky-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                  <span className="text-2xl font-serif text-sky-400 font-black">塩</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                      塩味 · SHIOMI
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/15 text-sky-300 border border-sky-500/30">
                      3 Recettes
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mt-0.5">
                    L'Univers SŌSA Salé
                  </h3>
                </div>
              </div>
            </div>

            {/* Sale Cards Carousel (Mobile) / Grid (Desktop) */}
            <div
              ref={saleScrollRef}
              onScroll={handleSaleScroll}
              className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 mb-4 sm:mb-8 scroll-smooth"
            >
              {SALE_PRODUCTS.map((prod, index) => (
                <ProductCard
                  key={prod.id}
                  prod={prod}
                  onSelectFlavor={onSelectFlavor}
                  priority={index === 0}
                />
              ))}
            </div>

            {/* Mobile Navigation Arrows & Dots for Sale */}
            <div className="flex sm:hidden items-center justify-between mb-8 px-1">
              <button
                onClick={() => scrollSaleToIndex(activeSaleIndex - 1)}
                disabled={activeSaleIndex === 0}
                className={`p-2.5 rounded-full border border-white/10 glass-panel transition-all active:scale-90 ${
                  activeSaleIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:border-sky-400/40 text-sky-400'
                }`}
                aria-label="Sauce salée précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {SALE_PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => scrollSaleToIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === activeSaleIndex ? 'w-6 h-2' : 'w-2 h-2 opacity-40 hover:opacity-75'
                    }`}
                    style={{
                      backgroundColor: idx === activeSaleIndex ? prod.color : 'var(--text-muted)',
                    }}
                    aria-label={`Aller à la saveur ${prod.name}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scrollSaleToIndex(activeSaleIndex + 1)}
                disabled={activeSaleIndex === SALE_PRODUCTS.length - 1}
                className={`p-2.5 rounded-full border border-white/10 glass-panel transition-all active:scale-90 ${
                  activeSaleIndex === SALE_PRODUCTS.length - 1
                    ? 'opacity-30 cursor-not-allowed'
                    : 'opacity-100 hover:border-sky-400/40 text-sky-400'
                }`}
                aria-label="Sauce salée suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Section Bottom Transition Divider */}
        <div className="section-divider mt-8 sm:mt-14 flex items-center justify-center gap-3">
          <div className="divider-line h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent to-amber-400/35" />
          <div className="divider-dot w-1.5 h-1.5 rounded-full bg-amber-400/60 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          <div className="divider-line-rev h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent to-amber-400/35" />
        </div>
      </div>
    </section>
  );
}
