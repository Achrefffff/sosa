import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

// x / y = position (en %) du haut de chaque tube sur la photo du coffret
const COFFRET_FLAVORS = [
  { id: 'ginger-yuzu', name: 'Ginger Yuzu', kanji: '柚', profile: 'Sucrée & acidulée', pairing: 'Sushis saumon, salades, poissons blancs', color: '#8fa63a', x: 10.7 },
  { id: 'honey-mustard', name: 'Honey Mustard', kanji: '蜜', profile: 'Sucrée & épicée', pairing: 'Poulet pané, wraps, bowls gourmands', color: '#e0a43a', x: 25.7 },
  { id: 'hot-soja', name: 'Hot Soja', kanji: '辛', profile: 'Sucrée & épicée', pairing: 'Pokés, nouilles sautées, crispy rolls', color: '#e0403a', x: 40.4 },
  { id: 'originale', name: 'Originale', kanji: '醤', profile: 'Douce & légèrement sucrée', pairing: 'Sushis, makis, sashimis', color: '#c9a24a', x: 54.4 },
  { id: 'sweet-oignon', name: 'Sweet Oignon', kanji: '葱', profile: 'Douce & caramélisée', pairing: 'Gyozas, grillades, tempuras', color: '#d9b98c', x: 69.3 },
  { id: 'toasted-sesame', name: 'Toasted Sesame', kanji: '胡', profile: 'Douce & toastée', pairing: 'Pokés, légumes rôtis, ramen', color: '#a8743f', x: 84.3 },
];

const PILLARS = [
  {
    num: '一',
    tag: 'Achat impulsion',
    title: 'Format nomade 30 ml',
    text: "Le mini tube qui déclenche l'achat coup de cœur : en zone caisse, au rayon traiteur sushi ou à côté des box déjeuner.",
  },
  {
    num: '二',
    tag: 'Signature unique',
    title: 'Recettes exclusives',
    text: 'Des twists de saveurs inédits (Yuzu, Fumé, Piment doux, Sésame...) qui dynamisent vos linéaires et créent la surprise.',
  },
  {
    num: '三',
    tag: 'Zéro montage',
    title: 'PLV prête à poser',
    text: "Le coffret présentoir 6 saveurs arrive prêt à l'emploi. Visibilité immédiate en tête de gondole, en caisse ou en rayon.",
  },
  {
    num: '四',
    tag: 'Savoir-faire',
    title: 'Fabriqué en France',
    text: "Élaboré avec passion en France, sans colorant artificiel. Une sélection d'ingrédients nobles pour une qualité irréprochable en rayon.",
  },
];

const RAYONS = [
  { kanji: '鮨', label: 'Rayon traiteur sushi' },
  { kanji: '棚', label: 'Tête de gondole' },
  { kanji: '会計', label: 'Zone caisse' },
  { kanji: '丼', label: 'Snacking & pokés' },
  { kanji: '食', label: 'Épicerie du monde' },
  { kanji: '車', label: 'Drive & e-commerce' },
];

const HOT_FEATURES = [
  { kanji: '火', title: 'Saveur puissante', text: 'Piment & soja doux : intense, sans masquer le produit.' },
  { kanji: '鮨', title: 'Sushis, pokés & wok', text: 'Les accords universels de la cuisine asiatique.' },
  { kanji: '携', title: 'Format à emporter', text: '30 ml qui se glissent dans le sac ou la box déjeuner.' },
];

const NOREN_LETTERS = ['S', 'Ō', 'S', 'A'];

/* -------------------------------------------------------------------------- */
/* DECOR — Seigaiha (青海波) wave pattern                                      */
/* -------------------------------------------------------------------------- */
function Seigaiha() {
  const R = 28;
  const centers = [
    [R, -R / 2],
    [0, 0],
    [2 * R, 0],
    [R, R / 2],
    [0, R],
    [2 * R, R],
    [R, 1.5 * R],
  ];
  return (
    <svg className="gd-seigaiha absolute inset-x-0 top-0 h-[70%] w-full pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id="gd-seigaiha-pattern" width={2 * R} height={R} patternUnits="userSpaceOnUse">
          {centers.map(([cx, cy], i) => (
            <g key={i}>
              {[R, R * 0.75, R * 0.5, R * 0.25].map((r) => (
                <circle key={r} cx={cx} cy={cy} r={r} style={{ fill: 'var(--gd-bg)' }} stroke="currentColor" strokeWidth="1.2" />
              ))}
            </g>
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gd-seigaiha-pattern)" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN SECTION                                                               */
/* -------------------------------------------------------------------------- */
export default function GrandeDistribution({ onOpenB2B }) {
  const reduceMotion = useReducedMotion();
  const frameRef = useRef(null);
  const isRevealed = useInView(frameRef, { once: true, amount: 0.45 });
  const isFrameVisible = useInView(frameRef, { amount: 0.3 });

  const [activeIndex, setActiveIndex] = useState(2); // Hot Soja par défaut
  const [userInteracted, setUserInteracted] = useState(false);
  const active = COFFRET_FLAVORS[activeIndex];
  const showUI = isRevealed || reduceMotion;

  // Défilement automatique des saveurs tant que l'utilisateur n'a pas interagi
  useEffect(() => {
    if (!isFrameVisible || userInteracted || reduceMotion || !isRevealed) return undefined;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % COFFRET_FLAVORS.length);
    }, 3200);
    return () => clearInterval(id);
  }, [isFrameVisible, userInteracted, reduceMotion, isRevealed]);

  const selectFlavor = (index) => {
    setUserInteracted(true);
    setActiveIndex(index);
  };

  const pillarsContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09 } },
  };
  const pillarItem = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="grande-distribution"
      aria-labelledby="gd-title"
      className="gd-section relative overflow-hidden pt-14 pb-16 sm:pt-24 sm:pb-24 transition-colors duration-700"
    >
      <Seigaiha />

      {/* Vertical calligraphy — desktop only */}
      <div className="hidden xl:flex absolute left-6 top-28 flex-col items-center gap-4 select-none pointer-events-none" aria-hidden="true">
        <span className="gd-kanji gd-vertical gd-muted text-sm tracking-[0.6em]">量販店のために</span>
        <span className="w-px h-24 gd-seam" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================================================================ */}
        {/* HEADER                                                           */}
        {/* ================================================================ */}
        <header className="relative grid grid-cols-12 gap-4 items-end mb-10 sm:mb-14">
          <div className="col-span-10 md:col-span-9">
            <div className="flex items-center gap-3 mb-4">
              <span className="gd-hanko-mini gd-kanji" aria-hidden="true">量</span>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.24em] sm:tracking-[0.3em] font-semibold gd-shu">
                Grande Distribution — GMS & Centrales
              </span>
            </div>

            <h2
              id="gd-title"
              className="font-heading font-black uppercase tracking-tight leading-[1.02] text-2xl sm:text-4xl md:text-5xl lg:text-6xl gd-text"
            >
              Animez vos corners sushi et têtes de gondole <br />
              <span className="gd-title-accent">avec nos innovations.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed font-light gd-muted">
              Le coffret découverte SŌSA transforme le linéaire en vitrine japonaise : 6 mini tubes de 30 ml, un
              packaging premium qui arrête le regard et séduit vos clients dès le premier coup d'œil.
            </p>
          </div>

          {/* Big outlined vertical kanji */}
          <div className="col-span-2 md:col-span-3 flex justify-end self-start" aria-hidden="true">
            <span className="gd-kanji gd-vertical gd-outline-kanji text-5xl sm:text-7xl lg:text-8xl select-none">
              量販
            </span>
          </div>
        </header>

        {/* ================================================================ */}
        {/* NOREN REVEAL — COFFRET INTERACTIF                                */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="lg:col-span-8 relative">
            {/* Hanko stamp */}
            <motion.div
              className="gd-hanko absolute -top-4 -right-1 sm:-top-6 sm:-right-4 z-30 select-none"
              initial={reduceMotion ? false : { scale: 2.4, opacity: 0, rotate: -24 }}
              animate={showUI ? { scale: 1, opacity: 1, rotate: -9 } : undefined}
              transition={{ delay: reduceMotion ? 0 : 1.25, type: 'spring', stiffness: 420, damping: 15 }}
              aria-hidden="true"
            >
              <span className="gd-kanji text-lg sm:text-2xl leading-none">推奨</span>
              <span className="text-[8px] sm:text-[10px] font-heading font-black tracking-[0.2em] mt-1">GMS</span>
            </motion.div>

            <div ref={frameRef} className="gd-frame relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[3/2]">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/gd/coffretgd-800.webp 800w, /images/gd/coffretgd-1600.webp 1600w"
                  sizes="(min-width: 1024px) 860px, 100vw"
                />
                <img
                  src="/images/coffretgd.png"
                  alt="Coffret présentoir SŌSA pour la grande distribution : 6 mini tubes de 30 ml — Ginger Yuzu, Honey Mustard, Hot Soja, Originale, Sweet Oignon et Toasted Sesame"
                  width="1536"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </picture>

              {/* Spotlight on the active tube */}
              {showUI && (
                <motion.div
                  className="gd-spotlight absolute z-10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, left: `${active.x - 7.4}%` }}
                  transition={{ type: 'spring', stiffness: 170, damping: 24, opacity: { duration: 0.6, delay: 0.9 } }}
                  style={{ '--spot': active.color }}
                />
              )}

              {/* Hotspots */}
              {showUI && (
                <div className="absolute inset-0 z-20">
                  {COFFRET_FLAVORS.map((f, i) => (
                    <motion.button
                      key={f.id}
                      type="button"
                      onClick={() => selectFlavor(i)}
                      className="gd-hotspot absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{ left: `${f.x}%`, top: '39.5%', '--spot': f.color }}
                      data-active={i === activeIndex}
                      aria-label={`Découvrir ${f.name}`}
                      aria-pressed={i === activeIndex}
                      initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: reduceMotion ? 0 : 1 + i * 0.07, type: 'spring', stiffness: 380, damping: 20 }}
                    >
                      {i === activeIndex && <span className="gd-hotspot-ring" />}
                      <span className="gd-hotspot-dot" />
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Noren curtain (暖簾) — lifts on scroll to reveal the display */}
              {!reduceMotion && (
                <div className="gd-noren absolute inset-0 z-40 flex gap-[2px] pointer-events-none" aria-hidden="true">
                  {NOREN_LETTERS.map((letter, i) => (
                    <motion.div
                      key={i}
                      className="gd-noren-panel relative flex-1 h-full overflow-hidden"
                      initial={{ y: '0%', rotate: 0 }}
                      animate={isRevealed ? { y: '-104%', rotate: i < 2 ? -1.5 : 1.5 } : undefined}
                      transition={{ duration: 1.1, delay: 0.15 + (i === 0 || i === 3 ? 0.14 : 0), ease: [0.76, 0, 0.24, 1] }}
                    >
                      <span className="gd-noren-letter absolute left-1/2 top-[20%] -translate-x-1/2 font-heading font-black text-4xl sm:text-6xl lg:text-7xl">
                        {letter}
                      </span>
                      {i === 1 && (
                        <span className="gd-noren-mon gd-kanji absolute" style={{ right: 'calc(var(--mon) / -2)' }}>量</span>
                      )}
                      {i === 2 && (
                        <span className="gd-noren-mon gd-kanji absolute" style={{ left: 'calc(var(--mon) / -2)' }}>量</span>
                      )}
                    </motion.div>
                  ))}
                  <motion.span
                    className="gd-noren-rod absolute inset-x-0 top-0 h-1.5 sm:h-2"
                    initial={{ opacity: 1 }}
                    animate={isRevealed ? { opacity: 0 } : undefined}
                    transition={{ delay: 0.9, duration: 0.4 }}
                  />
                </div>
              )}
            </div>

            <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.2em] gd-muted text-center lg:text-left">
              Touchez un tube pour découvrir sa saveur
            </p>
          </div>

          {/* Flavor detail + chips */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Chips — horizontal snap scroll on mobile */}
            <div
              className="flex lg:flex-wrap gap-2 overflow-x-auto scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 order-2 lg:order-1"
              role="group"
              aria-label="Saveurs du coffret"
            >
              {COFFRET_FLAVORS.map((f, i) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => selectFlavor(i)}
                  data-active={i === activeIndex}
                  aria-pressed={i === activeIndex}
                  className="gd-chip snap-start shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider cursor-pointer transition-all duration-300"
                  style={{ '--chip': f.color }}
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: f.color }} />
                  {f.name}
                </button>
              ))}
            </div>

            {/* Active flavor card */}
            <div className="gd-card relative rounded-2xl p-5 sm:p-6 overflow-hidden order-1 lg:order-2 min-h-[168px]" aria-live="polite">
              <span className="gd-card-accent absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: active.color }} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28 }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <span
                    className="gd-kanji text-6xl sm:text-7xl font-bold shrink-0 leading-none"
                    style={{ color: `color-mix(in srgb, ${active.color} 78%, var(--gd-text))` }}
                    aria-hidden="true"
                  >
                    {active.kanji}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono tracking-widest gd-muted">
                        0{activeIndex + 1} / 06
                      </span>
                      <span className="gd-badge text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded">30 ML</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight gd-text leading-none">
                      {active.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold mt-1.5 gd-shu">{active.profile}</p>
                    <p className="text-xs sm:text-sm font-light mt-2 gd-muted leading-relaxed">
                      <span className="font-semibold gd-text">Idéal avec : </span>
                      {active.pairing}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mini stats */}
            <dl className="grid grid-cols-3 gap-2 order-3">
              {[
                { v: '6', l: 'Saveurs' },
                { v: '30', l: 'ml / tube' },
                { v: 'FR', l: 'Origine France' },
              ].map((s) => (
                <div key={s.l} className="gd-stat rounded-xl px-3 py-3 text-center">
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="font-heading font-black text-2xl sm:text-3xl gd-text leading-none">{s.v}</dd>
                  <dd className="text-[10px] font-mono uppercase tracking-wider gd-muted mt-1">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 4 RAISONS — EMA (絵馬) TABLETS                                    */}
        {/* ================================================================ */}
        <div className="mt-16 sm:mt-24">
          <div className="flex items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="gd-kanji text-sm tracking-[0.4em] gd-shu block mb-2">四つの理由</span>
              <h3 className="text-2xl sm:text-4xl font-heading font-black uppercase tracking-tight gd-text leading-none">
                4 raisons de référencer SŌSA
              </h3>
            </div>
            <span className="lg:hidden text-[10px] font-mono uppercase tracking-widest gd-muted shrink-0 pb-1">
              Glissez →
            </span>
          </div>

          <motion.div
            className="flex lg:grid lg:grid-cols-4 gap-3 sm:gap-5 overflow-x-auto lg:overflow-visible scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 pb-4 pt-1"
            variants={pillarsContainer}
            initial={reduceMotion ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {PILLARS.map((p) => (
              <motion.article
                key={p.num}
                variants={pillarItem}
                className="gd-ema snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-auto"
              >
                <div className="gd-ema-border h-full">
                  <div className="gd-ema-inner h-full flex flex-col px-5 pb-6 pt-12 sm:pt-14">
                    <span className="gd-ema-hole" aria-hidden="true" />
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="gd-kanji text-5xl gd-shu leading-none" aria-hidden="true">{p.num}</span>
                      <span className="gd-badge text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded mt-1">
                        {p.tag}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-heading font-black uppercase tracking-tight gd-text leading-tight">
                      {p.title}
                    </h4>
                    <p className="text-[13px] sm:text-sm font-light leading-relaxed mt-2 gd-muted">{p.text}</p>
                    <span className="gd-ema-stroke mt-auto pt-5 block" aria-hidden="true" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* CROSSING MARQUEE BANDS — rayons cibles                             */}
      {/* ================================================================== */}
      <div className="relative my-14 sm:my-20 h-[110px] sm:h-[130px]" aria-label="Rayons conseillés pour SŌSA">
        <div className="gd-marquee gd-marquee-back absolute left-[-5%] w-[110%] top-1/2 -translate-y-1/2 rotate-[2.5deg]" aria-hidden="true">
          <div className="gd-marquee-track gd-marquee-reverse flex w-max">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center shrink-0">
                {RAYONS.map((r) => (
                  <span key={r.label} className="flex items-center gap-3 px-5 py-2.5 whitespace-nowrap text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em]">
                    <span className="gd-kanji text-sm">{r.kanji}</span>
                    {r.label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="gd-marquee gd-marquee-front absolute left-[-5%] w-[110%] top-1/2 -translate-y-1/2 -rotate-[2.5deg]">
          <div className="gd-marquee-track flex w-max">
            {[0, 1].map((dup) => (
              <ul key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
                {RAYONS.map((r) => (
                  <li key={r.label} className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm sm:text-base font-heading font-black uppercase tracking-[0.16em]">
                    <span className="gd-kanji text-base sm:text-lg font-normal opacity-80" aria-hidden="true">{r.kanji}</span>
                    {r.label}
                    <span className="gd-marquee-sep" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================================================================ */}
        {/* HOT SOJA SPOTLIGHT — 看板商品                                    */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            className="lg:col-span-7 relative"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Hinomaru disc peeking behind the frame */}
            <motion.span
              className="gd-hinomaru absolute -top-8 -right-4 sm:-top-12 sm:-right-8 w-32 h-32 sm:w-52 sm:h-52 rounded-full"
              initial={reduceMotion ? false : { scale: 0.4, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            />

            <div className="gd-frame relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/5] sm:aspect-[16/9] group">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/gd/gd2-900.webp 900w, /images/gd/gd2-1600.webp 1600w"
                  sizes="(min-width: 1024px) 760px, 100vw"
                />
                <img
                  src="/images/gd2.png"
                  alt="Tube SŌSA Hot Soja 30 ml, sauce épicée et intense pour la grande distribution, entouré de sushis et piments"
                  width="1672"
                  height="941"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-[52%_50%] sm:object-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                />
              </picture>

              {/* Mobile-only caption (le visuel desktop contient déjà son texte) */}
              <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20 pointer-events-none" />
              <div className="sm:hidden absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="gd-kanji text-xs tracking-[0.3em] text-[#ff8a7a] block mb-1">看板商品</span>
                  <span className="font-heading font-black uppercase text-2xl leading-none text-[#fdf7f1]">Hot Soja</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#fdf7f1] border border-white/30 rounded-full px-2.5 py-1 backdrop-blur-sm bg-black/30">
                  Épicée & intense
                </span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 relative">
            <span
              className="gd-kanji gd-vertical gd-outline-kanji absolute -top-2 right-0 text-6xl sm:text-7xl select-none pointer-events-none"
              aria-hidden="true"
            >
              辛口
            </span>

            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] font-semibold gd-shu block mb-3">
              Produit d'appel — 看板商品
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tight gd-text leading-[1] pr-16">
              Hot Soja, la tendance épicée qui fait tourner le rayon.
            </h3>
            <p className="mt-4 text-sm sm:text-base font-light leading-relaxed gd-muted">
              Le piment est la saveur qui monte. Hot Soja capte les amateurs de sensations fortes et s'invite sur
              les sushis, pokés et plats asiatiques — le produit d'appel idéal pour animer vos têtes de gondole.
            </p>

            <ul className="mt-6 space-y-3">
              {HOT_FEATURES.map((f, i) => (
                <motion.li
                  key={f.title}
                  className="flex items-center gap-4"
                  initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                >
                  <span className="gd-feature-seal gd-kanji shrink-0" aria-hidden="true">{f.kanji}</span>
                  <div>
                    <span className="block text-sm sm:text-base font-heading font-bold uppercase tracking-wide gd-text">{f.title}</span>
                    <span className="block text-xs sm:text-sm font-light gd-muted">{f.text}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================================================================ */}
        {/* CTA — ENSŌ (円相)                                                 */}
        {/* ================================================================ */}
        <div className="gd-cta relative mt-16 sm:mt-24 rounded-2xl sm:rounded-3xl overflow-hidden px-6 py-12 sm:px-12 sm:py-16 text-center">
          <svg
            viewBox="0 0 200 200"
            className="gd-enso absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <filter id="gd-brush-filter">
                <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
              </filter>
            </defs>
            <motion.circle
              cx="100"
              cy="100"
              r="84"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              filter="url(#gd-brush-filter)"
              transform="rotate(-65 100 100)"
              initial={reduceMotion ? { pathLength: 0.88 } : { pathLength: 0 }}
              whileInView={{ pathLength: 0.88 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
            />
          </svg>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.24em] gd-on-ink-muted block mb-4">
              Hypermarchés · Supermarchés · Proximité · Drive
            </span>
            <h4 className="font-heading font-black uppercase tracking-tight leading-[1] text-3xl sm:text-5xl gd-on-ink">
              Faites entrer SŌSA
              <br />
              dans vos rayons.
            </h4>
            <p className="mt-4 text-sm sm:text-base font-light leading-relaxed gd-on-ink-muted">
              Recevez notre fiche référencement (EAN, logistique, PLV) et un coffret échantillon pour votre équipe achats.
            </p>

            <button
              type="button"
              onClick={onOpenB2B}
              className="gd-btn-shu mt-8 inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-heading font-black uppercase tracking-[0.18em] cursor-pointer active:scale-[0.97] transition-transform"
            >
              Demander le kit référencement
              <ArrowRight className="w-4 h-4" />
            </button>

            <ul className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest gd-on-ink-muted">
              <li>Fiche EAN & logistique</li>
              <li aria-hidden="true">・</li>
              <li>Coffret échantillon</li>
              <li aria-hidden="true">・</li>
              <li>Conditions centrales</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
