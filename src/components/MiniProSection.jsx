import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const MINI_PRO_ITEMS = [
  {
    num: '01',
    id: 'mini-epicee-rouge',
    name: 'Hot Soja',
    kanji: '赤',
    subtitle: 'Piment Rouge & Soja Doux',
    volume: '30 ML',
    image: '/images/minisosa/mini-epicee-rouge.png',
    accentColor: '#ef4444',
    accentGlow: 'rgba(239, 68, 68, 0.4)',
    tag: 'Épicée & Intense',
    intention: 'La touche pimentée parfaite pour relever vos crispy rolls tièdes, sashimis de thon spicy et tartares sans masquer la fraîcheur du poisson.',
    pairings: 'Crispy rolls tièdes, Thon spicy, Yakitoris grillés',
  },
  {
    num: '02',
    id: 'mini-gingembre',
    name: 'Ginger Yuzu',
    kanji: '柚',
    subtitle: 'Yuzu Sauvage & Gingembre Frais',
    volume: '30 ML',
    image: '/images/minisosa/mini-gingembre.png',
    accentColor: '#84cc16',
    accentGlow: 'rgba(132, 204, 22, 0.4)',
    tag: 'Fraîche & Pétillante',
    intention: 'L\'éclair d\'agrumes vifs du Japon et de gingembre râpé. La sauce indispensable pour trancher le gras du saumon et rehausser les sushis de poisson blanc.',
    pairings: 'Sushis saumon, Sashimis bar & daurade, California rolls',
  },
  {
    num: '03',
    id: 'mini-fumee',
    name: 'Smoked Soja',
    kanji: '煙',
    subtitle: 'Bois de Hêtre & Soja Ambré',
    volume: '30 ML',
    image: '/images/minisosa/mini-fumee.png',
    accentColor: '#d97706',
    accentGlow: 'rgba(217, 119, 6, 0.4)',
    tag: 'Notes Fumées au Bois',
    intention: 'Une note fumée originale au bois de hêtre qui transforme instantanément les saumons braisés au chalumeau, tatakis mi-cuits et makis grillés.',
    pairings: 'Saumon braisé au chalumeau, Tataki saumon & bœuf, Makis grillés',
  },
  {
    num: '04',
    id: 'mini-sweet-oignon',
    name: 'Sweet Oignon',
    kanji: '葱',
    subtitle: 'Compotée d\'Oignons Caramélisés',
    volume: '30 ML',
    image: '/images/minisosa/mini-sweet-oignon.png',
    accentColor: '#f59e0b',
    accentGlow: 'rgba(245, 158, 11, 0.4)',
    tag: 'Douce & Gourmande',
    intention: 'La douceur sucrée-salée caramélisée qui fait l\'unanimité auprès des clients. Idéale pour tremper gyozas, rolls avocat-cheese et tempuras croustillants.',
    pairings: 'Gyozas grillés, Rolls avocat-cheese, Tempuras crevettes',
  },
  {
    num: '05',
    id: 'mini-noire',
    name: 'Black Sesame',
    kanji: '黒',
    subtitle: 'Sésame Noir Grillé & Robe Ébène',
    volume: '30 ML',
    image: '/images/minisosa/mini-noire.png',
    accentColor: '#eab308',
    accentGlow: 'rgba(234, 179, 8, 0.4)',
    tag: 'Intense & Équilibrée',
    intention: 'Un noir d\'encre spectaculaire à l\'assiette et le goût toasté intense du sésame noir torréfié pour signer vos créations de rolls d\'exception et chirashis prestige.',
    pairings: 'Rolls signatures, California truffe, Chirashis prestige',
  },
];

// Configuration géométrique de l'arc de cercle — courbure accentuée & centrée verticalement
const ARC_CONFIG = [
  { yDesk: 20,  yMob: 10,  rot: -18, rotMob: -9,   rotY: -16, z: -8,  delay: 2.20 }, // 0: Hot Soja (1er - tout à gauche)
  { yDesk: -2,  yMob: -1,  rot: -9,  rotMob: -4.5, rotY: -8,  z: 8,   delay: 2.60 }, // 1: Ginger Yuzu (2ème - gauche)
  { yDesk: -22, yMob: -12, rot: 0,   rotMob: 0,    rotY: 0,   z: 20,  delay: 3.00 }, // 2: Smoked Soja (3ème - centre)
  { yDesk: -2,  yMob: -1,  rot: 9,   rotMob: 4.5,  rotY: 8,   z: 8,   delay: 3.40 }, // 3: Sweet Oignon (4ème - droite)
  { yDesk: 20,  yMob: 10,  rot: 18,  rotMob: 9,    rotY: 16,  z: -8,  delay: 3.80 }, // 4: Black Sesame (5ème - tout à droite)
];

export default function MiniProSection({ onOpenB2B }) {
  const [activeItem, setActiveItem] = useState(MINI_PRO_ITEMS[0]);
  const [activeMoment, setActiveMoment] = useState('salle');
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const moments = {
    salle: {
      num: '01',
      title: 'Sur Table & En Salle',
      quote:
        'Posez un flacon SŌSA 30 ml directement sur la table ou le comptoir. Vos clients dosent proprement avec précision et vous éliminez définitivement les coupelles de soja qui se renversent.',
      detail: 'Hygiène scellée • Zéro coupelle renversée • Table toujours impeccable',
    },
    livraison: {
      num: '02',
      title: 'En Livraison & À Emporter',
      quote:
        'Le bouchon vissé étanche garantit zéro fuite dans vos sacs de livraison. Vos clients reçoivent un flacon design qui valorise vos plateaux de sushis et augmente la valeur perçue de vos commandes.',
      detail: '0% de fuite garantie • Format compact pour box sushi • Valorise le panier moyen',
    },
    recettes: {
      num: '03',
      title: '9 Recettes Signatures pour vos Menus',
      quote:
        'Piment doux, Yuzu japonais, Fumé au bois de hêtre, Oignon caramélisé ou Sésame noir. Offrez à vos clients un vrai choix de sauces originales pour accompagner sushis, makis, gyozas et chirashis.',
      detail: 'Accords sushis & makis • Goût unique en bouche • Différenciez votre carte',
    },
  };

  const reduceMotion = useReducedMotion();

  const headerVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const getTubeItemVariants = (delay) => ({
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
        delay,
      },
    },
  });

  return (
    <section
      id="mini-pro"
      className="pt-6 pb-10 sm:pt-8 sm:pb-14 relative overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Subtle single ambient background lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] pointer-events-none -z-10 opacity-20 transition-all duration-1000"
        style={{ backgroundColor: 'rgba(212, 175, 55, 0.25)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ==================================================================== */}
        {/* TITRE PENSÉ POUR LES RESTAURANTS JAPONAIS & SUSHI BARS               */}
        {/* ==================================================================== */}
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={headerVariants}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] sm:tracking-[0.3em] text-amber-400 block mb-2.5 font-semibold">
            Restaurateurs, faites la différence à chaque bouchée
          </span>
          <h2 className="mini-pro-title text-2xl sm:text-4xl md:text-5xl font-heading font-black uppercase text-white tracking-tight leading-[1.14]">
            Le format 30 ml <br />
            <span className="title-accent-gradient inline-block pt-1.5 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400">
              pensé pour la livraison de vos sushis.
            </span>
          </h2>
          <p className="mini-pro-subtitle text-zinc-400 mt-3 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Finies les coupelles de soja renversées et les sachets plastiques pas pratique. 9 recettes uniques au format squeeze 30 ml — la dose idéale pour accompagner un plateau de sushis, en salle comme en livraison.
          </p>
        </motion.div>

        {/* ==================================================================== */}
        {/* LE COMPTOIR LAQUÉ : 2 COLONNES (TUBES EN ARC À GAUCHE • PHOTO À DROITE) */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-14">

          {/* Colonne Gauche (7 cols) : Les flacons 30 ml en arc avec accordéon */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="tubes-accordion relative w-full flex flex-col items-center justify-center">
              {/* Rideau traditionnel japonais (Noren 暖簾) qui masque le comptoir puis monte lentement */}
              <motion.div
                className="noren-curtain pointer-events-none absolute inset-x-0 -top-3 h-[290px] sm:h-[350px] lg:h-[400px] z-30 flex flex-col items-center"
                initial={reduceMotion ? false : { y: '0%', opacity: 1 }}
                whileInView={{
                  y: '-140%',
                  opacity: [1, 1, 1, 0],
                }}
                viewport={{ once: true, amount: 0.25, margin: '0px 0px -40px 0px' }}
                transition={{
                  duration: 2.3,
                  delay: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  opacity: { duration: 2.3, times: [0, 0.75, 0.95, 1] },
                }}
              >
                {/* Tringle en bambou & embouts laiton */}
                <div className="noren-curtain__rod w-full max-w-[290px] sm:max-w-[460px] lg:max-w-[550px] h-2.5 bg-gradient-to-r from-amber-950 via-amber-800 to-amber-950 rounded-full shadow-lg border-b border-amber-500/30 flex items-center justify-between px-3 relative z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                  <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-amber-200/70 font-bold">暖 簾 • S Ō S A</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                </div>

                {/* Les 3 pans de lin suspendus (Noren slits) */}
                <div className="noren-curtain__panels w-full max-w-[275px] sm:max-w-[440px] lg:max-w-[530px] flex-1 flex gap-1.5 -mt-0.5">
                  {/* Pan Gauche */}
                  <div className="noren-curtain__panel flex-1 h-full flex flex-col justify-between items-center py-5">
                    <span className="noren-curtain__kanji-vertical">特撰</span>
                    <span className="noren-curtain__hem" />
                  </div>

                  {/* Pan Central avec Sceau Doré Omakase */}
                  <div className="noren-curtain__panel flex-1 h-full flex flex-col justify-between items-center py-4 border-amber-500/25">
                    <div className="w-10 h-10 rounded-full border border-amber-400/60 bg-amber-500/10 flex items-center justify-center shadow-[0_0_15px_rgba(217,119,6,0.25)]">
                      <span className="text-amber-300 font-serif font-black text-sm">職人</span>
                    </div>
                    <div className="text-lg sm:text-2xl font-heading font-black tracking-[0.25em] text-white select-none inline-flex items-center justify-center drop-shadow-lg">
                      <span>S</span>
                      <span className="relative inline-flex items-center justify-center mx-[1.5px]">
                        <span>O</span>
                        <span
                          className="absolute -top-[4px] sm:-top-[5px] left-1/2 -translate-x-1/2 w-[75%] h-[2.5px] sm:h-[3px] bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.95)]"
                          aria-hidden="true"
                        />
                      </span>
                      <span>SA</span>
                    </div>
                    <span className="noren-curtain__hem gold" />
                  </div>

                  {/* Pan Droit */}
                  <div className="noren-curtain__panel flex-1 h-full flex flex-col justify-between items-center py-5">
                    <span className="noren-curtain__kanji-vertical">秘伝</span>
                    <span className="noren-curtain__hem" />
                  </div>
                </div>
              </motion.div>

              <motion.ul
                className="tubes-accordion__row"
                role="region"
                aria-label="Collection des 5 tubes 30 ml en demi-cercle"
                initial={reduceMotion ? false : 'hidden'}
                whileInView="show"
                viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
              >
                {MINI_PRO_ITEMS.map((item, index) => {
                  const isSelected = item.id === activeItem.id;
                  const arc = ARC_CONFIG[index];

                  return (
                    <motion.li
                      key={item.id}
                      className="tubes-accordion__panel"
                      data-active={isSelected}
                      onClick={() => setActiveItem(item)}
                      onMouseEnter={() => setActiveItem(item)}
                      variants={getTubeItemVariants(arc.delay)}
                      style={{
                        '--panel-accent': item.accentColor,
                        '--panel-glow': item.accentGlow,
                        transformOrigin: 'bottom center',
                      }}
                    >
                      <motion.div
                        className="tubes-accordion__tube-wrap"
                        tabIndex={0}
                        role="button"
                        aria-label={`Flacon SŌSA ${item.name} 30 ml`}
                        animate={{
                          y: (isMobile ? arc.yMob : arc.yDesk) + (isSelected ? -10 : 0),
                          rotate: isMobile ? arc.rotMob : arc.rot,
                          rotateY: isMobile ? Math.round(arc.rotY * 0.5) : arc.rotY,
                          z: isSelected ? 36 : arc.z,
                          scale: isSelected ? 1.04 : 1,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 240,
                          damping: 22,
                        }}
                        style={{
                          transformOrigin: 'bottom center',
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActiveItem(item);
                          }
                        }}
                      >
                        {/* Floating Japanese Kanji watermark in the background */}
                        <span className="tubes-accordion__kanji" aria-hidden="true">
                          {item.kanji}
                        </span>

                        {/* Tube visual */}
                        <div className="tubes-accordion__img-wrap">
                          <img
                            src={item.image}
                            alt={`Flacon SŌSA ${item.name} 30 ml`}
                            loading="lazy"
                            decoding="async"
                            className="tubes-accordion__img"
                          />
                        </div>
                      </motion.div>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Liseré Omakase courbé en arc de demi-cercle compact */}
              <div className="relative w-full max-w-[275px] sm:max-w-[440px] lg:max-w-[530px] mx-auto h-8 sm:h-12 -mt-3 sm:-mt-6 mb-2 flex items-center justify-center pointer-events-none select-none">
                <svg
                  viewBox="0 0 700 95"
                  fill="none"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 28 82 Q 350 6 672 82"
                    stroke="url(#counterArcGlow)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    className="opacity-40 blur-[3px]"
                    initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 2.2, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.path
                    d="M 28 82 Q 350 6 672 82"
                    stroke="url(#counterArcGold)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 2.1, delay: 2.05, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <defs>
                    <linearGradient id="counterArcGold" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#d97706" stopOpacity="0" />
                      <stop offset="15%" stopColor="#f59e0b" stopOpacity="0.45" />
                      <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.95" />
                      <stop offset="85%" stopColor="#f59e0b" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="counterArcGlow" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                      <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

            </div>
          </div>

          {/* Colonne Droite (5 cols) : Photo sushi de dégustation */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-400/25 shadow-2xl bg-black/40 aspect-[4/3] sm:aspect-square lg:aspect-[4/3] xl:aspect-square">
              <img
                src="/images/main-sushi.png"
                alt="Dégustation sushi avec le flacon SŌSA 30 ml"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Tag */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-xl glass-panel border border-white/10 flex items-center justify-between backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white font-semibold">
                    Format Pro 30 ML
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300 font-semibold">
                  Idéal Livraison & Table
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ==================================================================== */}
        {/* LE DIALOGUE DU CHEF SUSHI : ACCORDS & CARACTÉRISTIQUES               */}
        {/* ==================================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-center pb-6 sm:pb-8"
          >
            {/* Left Column : Recipe identity & culinary intention */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-amber-400 font-bold">
                  {activeItem.num}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold">
                  Flacon 30 ML
                </span>
              </div>

              <h3 className="mini-pro-title text-2xl sm:text-4xl font-heading font-black uppercase text-white tracking-tight">
                {activeItem.name} —{' '}
                <span className="mini-pro-subtitle text-zinc-400 font-light text-base sm:text-xl capitalize">
                  {activeItem.subtitle}
                </span>
              </h3>

              <p className="mini-pro-text text-zinc-300 text-sm sm:text-base leading-relaxed font-light mt-2 max-w-2xl">
                {activeItem.intention}
              </p>

              <div className="mt-3 pt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="mini-pro-spec-label text-zinc-400 font-medium">Accords sushis recommandés :</span>
                <span className="mini-pro-text text-zinc-200 font-medium">
                  {activeItem.pairings}
                </span>
              </div>
            </div>

            {/* Right Column : Pro specs & direct CTA */}
            <div className="lg:col-span-5 flex flex-col gap-4 justify-center lg:pl-8 lg:border-l lg:border-white/5">
              <div className="space-y-2 text-xs text-zinc-400 font-light">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="mini-pro-spec-label">Sécurité transport</span>
                  <span className="mini-pro-spec-value text-white font-medium">Bouchon vissé • 0% fuite en sac</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="mini-pro-spec-label">Conditionnement pro</span>
                  <span className="mini-pro-spec-value text-white font-medium">Cartons sushi de 120 / 300 pcs</span>
                </div>
              </div>

              <button
                onClick={onOpenB2B}
                className="mt-2 inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border border-amber-400/50 hover:border-amber-400 text-xs uppercase tracking-[0.2em] text-white hover:text-amber-300 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 cursor-pointer font-medium w-full sm:w-auto"
              >
                <span>Demander le pack dégustation sushi (5 × 30 ml)</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ==================================================================== */}
        {/* SÉPARATEUR FIN & ÉLÉGANT À LA JAPONAISE (KANSO / WABI-SABI)           */}
        {/* ==================================================================== */}
        <div className="hidden sm:flex items-center justify-center gap-3 my-6 sm:my-8 max-w-sm mx-auto select-none" aria-hidden="true">
          <span className="japanese-divider-line h-[1px] flex-1" />
          <span className="flex items-center gap-1.5 px-1.5">
            <span className="japanese-divider-dot w-1 h-1 rounded-full" />
            <span className="japanese-divider-diamond w-1.5 h-1.5 rotate-45 border" />
            <span className="japanese-divider-dot w-1 h-1 rounded-full" />
          </span>
          <span className="japanese-divider-line right h-[1px] flex-1" />
        </div>

        {/* ==================================================================== */}
        {/* LA SCÉNOGRAPHIE DES 3 MOMENTS SUSHI (SALLE • LIVRAISON • MENUS)      */}
        {/* ==================================================================== */}
        <div className="pt-2 sm:pt-4 max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 block mb-2">
              Optimisé Pour Restaurants de Sushi
            </span>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black uppercase tracking-tight text-white">
              Une présence pensée pour booster l'expérience de vos sushis.
            </h4>
          </div>

          {/* Interactive Moment Switcher (Minimalist tabs, zero card boxes) */}
          <div className="flex justify-center gap-4 sm:gap-8 mb-8 sm:mb-10 border-b border-white/5 pb-4 overflow-x-auto scrollbar-none">
            {Object.keys(moments).map((key) => {
              const m = moments[key];
              const isCurrent = activeMoment === key;

              return (
                <button
                  key={key}
                  onClick={() => setActiveMoment(key)}
                  className={`text-xs sm:text-sm uppercase tracking-wider font-heading transition-colors cursor-pointer py-1 relative whitespace-nowrap ${isCurrent ? 'text-amber-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                  <span className="font-mono text-[10px] mr-1.5 opacity-70">{m.num}</span>
                  {m.title}
                  {isCurrent && (
                    <motion.div
                      layoutId="momentUnderline"
                      className="absolute bottom-[-17px] inset-x-0 h-[2px] bg-amber-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* 2-Columns : Content on the Left, Delivery Photo on the Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column : Editorial Quote & Bullet Points */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMoment}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-amber-400 border border-amber-400/20 bg-amber-400/5 w-fit">
                    <span>{moments[activeMoment].num}</span>
                    <span className="opacity-40">•</span>
                    <span>{moments[activeMoment].title}</span>
                  </div>

                  <p className="mini-pro-text text-base sm:text-xl text-zinc-200 font-light italic font-serif-luxury leading-relaxed">
                    "{moments[activeMoment].quote}"
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="mini-pro-spec-label text-[11px] font-mono uppercase tracking-widest text-zinc-400 block font-semibold">
                      Bénéfices constatés en restaurant :
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {moments[activeMoment].detail.split(' • ').map((item, idx) => (
                        <span
                          key={idx}
                          className="mini-pro-spec-badge inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-200 font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column : Delivery Box Photo */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/25 shadow-2xl bg-black/30 aspect-square">
                <img
                  src="/images/minisosa/Sushi%20delivery%20et%20sauces%20S%C3%96SA%20(1).png"
                  alt="Box sushi delivery avec les sauces SŌSA 30 ml"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Tag */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-md glass-panel border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white font-semibold">
                      Pack 5 × 30 ML
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300 font-semibold">
                    Format Box Sushi
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ==================================================================== */}
        {/* INVITATION FINALE AUX RESTAURANTS DE SUSHI                            */}
        {/* ==================================================================== */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <h5 className="text-lg sm:text-xl font-heading font-black uppercase tracking-tight text-white mb-1">
              Gérants de sushi bars & restaurants japonais : testez les 5 flacons.
            </h5>
            <p className="text-xs text-zinc-400 font-light">
              Recevez gratuitement votre pack dégustation pro 5 × 30 ml pour tester avec votre équipe sur vos créations de sushis.
            </p>
          </div>

          <button
            onClick={onOpenB2B}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-amber-400/40 hover:border-amber-400 text-xs uppercase tracking-[0.2em] text-white hover:text-amber-300 bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 cursor-pointer font-medium shrink-0"
          >
            <span>Demander un échantillon sushi pro</span>
            <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* ==================================================================== */}
        {/* SÉPARATEUR FIN & ÉLÉGANT À LA JAPONAISE (TRANSITION VERS COLLECTION)  */}
        {/* ==================================================================== */}
        <div className="flex items-center justify-center gap-3 max-w-sm mx-auto select-none pt-2" aria-hidden="true">
          <span className="japanese-divider-line h-[1px] flex-1" />
          <span className="flex items-center gap-1.5 px-1.5">
            <span className="japanese-divider-dot w-1 h-1 rounded-full" />
            <span className="japanese-divider-diamond w-1.5 h-1.5 rotate-45 border" />
            <span className="japanese-divider-dot w-1 h-1 rounded-full" />
          </span>
          <span className="japanese-divider-line right h-[1px] flex-1" />
        </div>

      </div>
    </section>
  );
}

