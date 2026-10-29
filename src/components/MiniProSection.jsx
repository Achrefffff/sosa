import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const MINI_PRO_ITEMS = [
  {
    num: '01',
    id: 'mini-epicee-rouge',
    name: 'Hot Soja',
    kanji: '赤',
    subtitle: 'Piment Rouge & Soja Doux',
    volume: '30 ML',
    image: '/images/minisosa/mini-epicee-rouge.png',
    accentColor: '#ef4444',
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
    accentColor: '#c084fc',
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
    accentColor: '#94a3b8',
    intention: 'Un noir d\'encre spectaculaire à l\'assiette et le goût toasté intense du sésame noir torréfié pour signer vos créations de rolls d\'exception et chirashis prestige.',
    pairings: 'Rolls signatures, California truffe, Chirashis prestige',
  },
];

export default function MiniProSection({ onOpenB2B }) {
  const [activeItem, setActiveItem] = useState(MINI_PRO_ITEMS[0]);
  const [activeMoment, setActiveMoment] = useState('salle');

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
      title: '5 Recettes Signatures pour vos Menus',
      quote:
        'Piment doux, Yuzu japonais, Fumé au bois de hêtre, Oignon caramélisé ou Sésame noir. Offrez à vos clients un vrai choix de sauces originales pour accompagner sushis, makis, gyozas et chirashis.',
      detail: 'Accords sushis & makis • Goût unique en bouche • Différenciez votre carte',
    },
  };

  return (
    <section
      id="mini-pro"
      className="pt-6 pb-10 sm:pt-8 sm:pb-14 relative overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: 'var(--bg-body)' }}
    >
      {/* Subtle single ambient background lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none -z-10 opacity-20 transition-all duration-1000"
        style={{ backgroundColor: 'rgba(212, 175, 55, 0.25)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ==================================================================== */}
        {/* TITRE PENSÉ POUR LES RESTAURANTS JAPONAIS & SUSHI BARS               */}
        {/* ==================================================================== */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] sm:tracking-[0.3em] text-amber-400 block mb-3 font-semibold">
            Restaurateurs, faites la différence à chaque bouchée
          </span>
          <h2 className="mini-pro-title text-3xl sm:text-5xl md:text-6xl font-heading font-black uppercase text-white tracking-tight leading-[1.14] sm:leading-[1.16]">
            Le format 30 ml <br />
            <span className="title-accent-gradient inline-block pt-2 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400">
              pensé pour la livraison de vos sushis.
            </span>
          </h2>
          <p className="mini-pro-subtitle text-zinc-400 mt-4 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Finies les coupelles de soja renversées et les sachets plastiques pas pratique. 9 recettes uniques au format squeeze 30 ml — la dose idéale pour accompagner un plateau de sushis, en salle comme en livraison.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* LE COMPTOIR LAQUÉ : LES 5 FLACONS EN APESANTEUR                     */}
        {/* ==================================================================== */}
        <div className="relative mb-16 sm:mb-24">

          {/* Runway of the 5 Bottles standing in pure space */}
          <div className="relative flex items-end justify-between sm:justify-around gap-1 sm:gap-4 px-2 sm:px-8 pt-10 sm:pt-14 pb-4">
            {MINI_PRO_ITEMS.map((item) => {
              const isSelected = item.id === activeItem.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="relative flex-1 flex flex-col items-center cursor-pointer group select-none"
                >
                  {/* Japanese Kanji Calligraphy behind the active bottle */}
                  {isSelected && (
                    <span className="kanji-watermark absolute -top-14 sm:-top-20 text-7xl sm:text-9xl font-serif-luxury font-bold pointer-events-none select-none z-0">
                      {item.kanji}
                    </span>
                  )}

                  {/* Bottle Visual with elevation and scale */}
                  <motion.div
                    animate={{
                      y: isSelected ? -24 : 0,
                      scale: isSelected ? 1.22 : 1.05,
                      opacity: isSelected ? 1 : 0.88,
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="relative w-full h-[280px] sm:h-[370px] md:h-[440px] lg:h-[500px] flex items-end justify-center"
                  >
                    <img
                      src={item.image}
                      alt={`Flacon SŌSA ${item.name} 30 ml`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>

                </div>
              );
            })}
          </div>

          {/* Omakase Counter Razor-Thin Golden Edge */}
          <div className="omakase-counter-edge w-full h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent my-5" />
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-center pb-6 sm:pb-8"
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
                  <span className="mini-pro-spec-label">Format par commande</span>
                  <span className="mini-pro-spec-value text-white font-medium">30 ML</span>
                </div>
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
        <div className="flex items-center justify-center gap-3 my-6 sm:my-8 max-w-sm mx-auto select-none" aria-hidden="true">
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

            {/* Right Column : Delivery Photo */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/25 shadow-2xl bg-black/30 aspect-square">
                <img
                  src="/images/main-sushi.png"
                  alt="Dégustation sushi avec le flacon SŌSA Smoked 30 ml"
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

