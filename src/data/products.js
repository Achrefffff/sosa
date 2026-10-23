export const PRODUCTS = [
  {
    id: 'hot-soja',
    name: 'Hot Soja',
    subtitle: 'Sauce Soja Sucrée Aromatisée',
    type: 'Sucrée & épicée',
    volume: '150 ML',
    tagline: 'Met le feu à ton saumon',
    punchline: 'La douceur du soja relevée du piment',
    description: 'Une explosion sensorielle où la chaleur vive du piment rouge fusionne avec le velouté d\'un soja doux. Pour tous ceux qui veulent faire vibrer leurs papilles sans masquer les saveurs.',
    image: '/images/sauce-hot-soja.webp',
    showcaseImage: '/images/tubesansfond/hot soja sans fond .webp',
    color: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    bgGradient: 'from-red-950/50 via-neutral-900/60 to-black',
    accentBadge: 'bg-red-500/10 text-red-400 border-red-500/30',
    intensity: {
      sweetness: 3,
      spiciness: 4,
      umami: 4,
    },
    notes: ['Piments rouges soigneusement dosés', 'Caramel chaud', 'Pointe fumée'],
    pairings: [
      { name: 'Crispy Rolls & Thon Spicy', icon: '🌶️', tip: 'À déposer en zig-zag sur la chapelure panko croustillante.' },
      { name: 'Tartare de Saumon & Mangue', icon: '🥭', tip: 'Le contraste piment-mangue crée une dépendance immédiate.' },
      { name: 'Brochettes Yakitori & Viandes grillées', icon: '🍢', tip: 'Laque épicée caramélisant au contact du grill.' }
    ],
    features: ['Sans conservateur', 'Sans colorant', 'Vegan Friendly', 'Fabriqué en France', 'Format Squeeze 150 ML'],
    chefQuote: 'Le kick parfait qui transforme un simple roll en un moment de pure intensité.'
  },
  {
    id: 'ginger-yuzu',
    name: 'Ginger Yuzu',
    subtitle: 'Sauce Soja Sucrée Aromatisée',
    type: 'Sucrée & acidulée',
    volume: '150 ML',
    tagline: 'L\'éclair d\'agrumes du Japon',
    punchline: 'Fraîcheur vive du yuzu & peps du gingembre',
    description: 'La rencontre électrique du yuzu japonais, agrume rare aux notes de mandarine et pamplemousse sauvage, et du gingembre frais râpé. Un twist acidulé d\'une fraîcheur incomparable.',
    image: '/images/sauce-ginger-yuzu.webp',
    showcaseImage: '/images/tubesansfond/ginger yuzu sans fond .webp',
    color: '#84cc16',
    glowColor: 'rgba(132, 204, 22, 0.35)',
    bgGradient: 'from-emerald-950/40 via-stone-900/60 to-black',
    accentBadge: 'bg-lime-500/10 text-lime-400 border-lime-500/30',
    intensity: {
      sweetness: 3,
      spiciness: 1,
      umami: 4,
    },
    notes: ['Zeste de yuzu sauvage', 'Gingembre piquant frais', 'Acidité vivifiante'],
    pairings: [
      { name: 'Carpaccio de Saint-Jacques & Bar', icon: '🐟', tip: 'Quelques gouttes de précision pour révéler la finesse du poisson cru.' },
      { name: 'Sashimis de Saumon sauvage', icon: '🍣', tip: 'Casse la richesse du saumon avec éclat.' },
      { name: 'Céviche & Tartare acidulé', icon: '🍋', tip: 'Idéal en marinade minute avec coriandre fraîche.' }
    ],
    features: ['Sans conservateur', 'Sans colorant', 'Vegan Friendly', 'Fabriqué en France', 'Format Squeeze 150 ML'],
    chefQuote: 'Le coup de fouet aromatique indispensable pour les amateurs de poisson cru ultra-frais.'
  },
  {
    id: 'honey-mustard',
    name: 'Honey Mustard',
    subtitle: 'Sauce Soja Sucrée Aromatisée',
    type: 'Sucrée & épicée',
    volume: '150 ML',
    tagline: 'Le mariage audacieux',
    punchline: 'Miel doré onctueux & grains de moutarde',
    description: 'Une relecture résolument contemporaine des classiques bistrotiers twistée à la sauce soja. La rondeur florale du miel s\'allie au croquant délicat des graines de moutarde de caractère.',
    image: '/images/sauce-honey-mustard.webp',
    showcaseImage: '/images/tubesansfond/honey mustard sans fond .webp',
    color: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.35)',
    bgGradient: 'from-yellow-900/40 via-stone-900/60 to-black',
    accentBadge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    intensity: {
      sweetness: 4,
      spiciness: 2,
      umami: 3,
    },
    notes: ['Miel toutes fleurs velouté', 'Graines de moutarde entières', 'Fines herbes'],
    pairings: [
      { name: 'Poulet Karaage & Yakitori', icon: '🍗', tip: 'Dipping irrésistible pour les beignets de volaille croustillants.' },
      { name: 'Avocado Toast & Œuf mollet', icon: '🥑', tip: 'Drizzle artistique pour un brunch haut de gamme.' },
      { name: 'Saumon rôti au four', icon: '🔥', tip: 'Badigeonner avant enfournement pour une croûte caramélisée.' }
    ],
    features: ['Sans conservateur', 'Sans colorant', 'Vegan Friendly', 'Fabriqué en France', 'Format Squeeze 150 ML'],
    chefQuote: 'L\'alliance inattendue qui fait le pont parfait entre street-food festive et finesse culinaire.'
  },
  {
    id: 'toasted-sesame',
    name: 'Toasted Sesame',
    subtitle: 'Sauce Soja Sucrée Aromatisée',
    type: 'Douce & légèrement sucrée',
    volume: '150 ML',
    tagline: 'Le parfum envoûtant du grillé',
    punchline: 'Sésame grillé caramélisé & touche sucrée',
    description: 'L\'élégance absolue de la torréfaction. L\'huile et les graines de sésame doré grillé insufflent une rondeur noisettée incomparable à cette sauce soja sucrée ultra-gourmande.',
    image: '/images/sauce-toasted-sesame.webp',
    showcaseImage: '/images/tubesansfond/sesame sans fond .webp',
    color: '#d97706',
    glowColor: 'rgba(217, 119, 6, 0.35)',
    bgGradient: 'from-yellow-950/40 via-stone-900/60 to-black',
    accentBadge: 'bg-amber-600/10 text-amber-400 border-amber-600/30',
    intensity: {
      sweetness: 4,
      spiciness: 0,
      umami: 5,
    },
    notes: ['Sésame blond et doré torréfié', 'Arôme noisette grillée', 'Douceur miellée'],
    pairings: [
      { name: 'Gyozas grillés & Dim Sum', icon: '🥟', tip: 'Le dipping sauce ultime pour les pâtes fines dorées à la poêle.' },
      { name: 'Tataki de Thon ou Bœuf', icon: '🥩', tip: 'Souligne la croûte saisie et le cœur fondant.' },
      { name: 'Salade de Chou Japonaise', icon: '🥗', tip: 'Dressing onctueux pour un croquant parfait.' }
    ],
    features: ['Sans conservateur', 'Sans colorant', 'Vegan Friendly', 'Fabriqué en France', 'Format Squeeze 150 ML'],
    chefQuote: 'Une longueur en bouche bluffante grâce à la chaleur du sésame artisanal torréfié.'
  },
  {
    id: 'sweet-oignon',
    name: 'Sweet Oignon',
    subtitle: 'Sauce Soja Sucrée Aromatisée',
    type: 'Douce & caramélisée',
    volume: '150 ML',
    tagline: 'Gourmandise réconfortante',
    punchline: 'Oignons doucement confits & caramélisés',
    description: 'Inspirée des réductions d\'oignons frémissants au wok. Cette création dévoile un profil suave, légèrement compoté, qui apporte un confort gustatif immédiat et chaleureux.',
    image: '/images/sauce-sweet-oignon.webp',
    showcaseImage: '/images/tubesansfond/sweat oignon sans fond .webp',
    color: '#cca362',
    glowColor: 'rgba(204, 163, 98, 0.35)',
    bgGradient: 'from-amber-900/30 via-neutral-900/60 to-black',
    accentBadge: 'bg-amber-200/10 text-amber-200 border-amber-300/30',
    intensity: {
      sweetness: 5,
      spiciness: 0,
      umami: 4,
    },
    notes: ['Oignon rouge confit', 'Fondue d\'échalote douce', 'Caramel doré'],
    pairings: [
      { name: 'Bao Burgers & Poulet croustillant', icon: '🍔', tip: 'Nappage généreux dans le pain bao vapeur encore chaud.' },
      { name: 'Poké Végétarien & Tofu fumé', icon: '🥑', tip: 'Sublime l\'avocat et le tofu grillé.' },
      { name: 'Tempuras de Crevettes', icon: '🍤', tip: 'L\'accord croustillant-fondant le plus addictif.' }
    ],
    features: ['Sans conservateur', 'Sans colorant', 'Vegan Friendly', 'Fabriqué en France', 'Format Squeeze 150 ML'],
    chefQuote: 'La sauce réconfort par excellence, douce et régressive avec une touche gastronomique.'
  },
  {
    id: 'originale',
    name: 'Originale',
    subtitle: 'Sauce Soja Sucrée',
    type: 'Douce & légèrement sucrée',
    volume: '150 ML',
    tagline: 'L\'Umami authentique',
    punchline: 'Saveur riche & parfaitement équilibrée',
    description: 'La recette signature qui redéfinit la sauce soja sucrée. Un équilibre parfait entre rondeur caramélisée et profondeur umami, conçue pour magnifier chaque grain de riz et chaque pièce de poisson noble.',
    image: '/images/sauce-originale.webp',
    showcaseImage: '/images/tubesansfond/originale sans fond .webp',
    color: '#d4af37',
    glowColor: 'rgba(212, 175, 55, 0.35)',
    bgGradient: 'from-amber-950/40 via-stone-900/60 to-black',
    accentBadge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    intensity: {
      sweetness: 4,
      spiciness: 0,
      umami: 5,
    },
    notes: ['Soja fermenté traditionnel', 'Sucre caramélisé délicat', 'Notes boisées & maltées'],
    pairings: [
      { name: 'Sushis Saumon & Thon', icon: '🍣', tip: 'Un filet précis sur le poisson pour réveiller le gras naturel.' },
      { name: 'Poké Bowl Hawaïen', icon: '🥗', tip: 'En base assaisonnée sur le riz tiède vinaigré.' },
      { name: 'Riz sauté & Wok de légumes', icon: '🥢', tip: 'En fin de cuisson pour une laque brillante et savoureuse.' }
    ],
    features: ['Sans conservateur', 'Sans colorant', 'Vegan Friendly', 'Fabriqué en France', 'Format Squeeze 150 ML'],
    chefQuote: 'La quintessence du soja sucré. Une texture soyeuse qui nappe sans jamais saturer le palais.'
  },
  {
    id: 'smoked',
    name: 'Smoked',
    subtitle: 'Sauce Soja Salée Aromatisée',
    type: 'Notes fumées au bois',
    volume: '150 ML',
    tagline: 'Le souffle boisé du feu de bois',
    punchline: 'Infusion fumée au bois noble & umami profond',
    description: 'Une immersion fumée fascinante. Conçue avec une infusion naturelle aux bois nobles, cette sauce soja salée dévoile des arômes de barbecue d\'exception, ronds et envoûtants, apportant une profondeur incomparable.',
    image: '/images/SMOKED.webp',
    showcaseImage: '/images/tubesansfond/smoked sans fond .webp',
    color: '#ea580c',
    glowColor: 'rgba(234, 88, 12, 0.35)',
    bgGradient: 'from-stone-950 via-neutral-900/70 to-black',
    accentBadge: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    intensity: {
      sweetness: 2,
      spiciness: 1,
      umami: 5,
    },
    notes: ['Bois de cerisier & chêne fumé', 'Soja salé vieilli', 'Notes torréfiées chaleureuses'],
    pairings: [
      { name: 'Saumon Gravlax & Grillé', icon: '🐟', tip: 'Sublime le côté fumé naturel du poisson.' },
      { name: 'Smash Burgers & Barbecue', icon: '🍔', tip: 'Une touche fumée gastronomique dans vos sauces burger.' },
      { name: 'Légumes racines rôtis', icon: '🥕', tip: 'Caramélisation et parfum de braise irrésistible.' }
    ],
    features: ['Sans conservateur', 'Sans colorant', 'Vegan Friendly', 'Fabriqué en France', 'Format Squeeze 150 ML'],
    chefQuote: 'Une signature aromatique unique qui donne à n\'importe quel plat un goût de cuisson au feu de bois.'
  },
  {
    id: 'black-sesame',
    name: 'Black Sesame',
    subtitle: 'Sauce Soja Salée Aromatisée',
    type: 'Intense & gourmande',
    volume: '150 ML',
    tagline: 'La profondeur mystique du sésame noir',
    punchline: 'Sésame noir torréfié & salinité racée',
    description: 'Une recette d\'une intensité spectaculaire. Le sésame noir torréfié apporte des notes minérales, grillées et boisées sur une base de sauce soja salée onctueuse. Une expérience visuelle et gustative captivante.',
    image: '/images/BLACK SESAME .webp',
    showcaseImage: '/images/tubesansfond/BLACK SESAME sans fond .webp',
    color: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    bgGradient: 'from-zinc-950 via-neutral-900/80 to-black',
    accentBadge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    intensity: {
      sweetness: 2,
      spiciness: 0,
      umami: 5,
    },
    notes: ['Sésame noir fraîchement torréfié', 'Accents minéraux & noisette intense', 'Notes boisées sombres'],
    pairings: [
      { name: 'Noodles froides Soba & Udon', icon: '🍜', tip: 'Enrobe les nouilles d\'un voile sombre soyeux et aromatique.' },
      { name: 'Tofu grillé & Champignons Shiitaké', icon: '🍄', tip: 'Amplifie le goût boisé et la texture fondante.' },
      { name: 'Carpaccio de Bœuf Wagyu', icon: '🥩', tip: 'Un contraste visuel et un accord gras-minéral sublime.' }
    ],
    features: ['Sans conservateur', 'Sans colorant', 'Vegan Friendly', 'Fabriqué en France', 'Format Squeeze 150 ML'],
    chefQuote: 'Le sésame noir apporte une rusticité noble et un relief aromatique hors du commun.'
  },
  {
    id: 'original-sale',
    name: 'Original Salé',
    subtitle: 'Sauce Soja Salée Aromatisée',
    type: 'Umami & équilibrée',
    volume: '150 ML',
    tagline: 'La pureté salée & umami',
    punchline: 'L\'essence du soja salé révélée avec finesse',
    description: 'Une sauce soja salée aromatisée d\'une pureté remarquable. Sa salinité maîtrisée et sa richesse umami exaltent instantanément la chair des poissons crus, les raviolis vapeur et les bouillons raffinés.',
    image: '/images/ORIGINALE SALEE.webp',
    showcaseImage: '/images/tubesansfond/originale salée sans fond .webp',
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    bgGradient: 'from-sky-950/40 via-stone-900/60 to-black',
    accentBadge: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    intensity: {
      sweetness: 1,
      spiciness: 0,
      umami: 5,
    },
    notes: ['Soja fermenté traditionnel', 'Sel marin pur', 'Notes umami intenses'],
    pairings: [
      { name: 'Sashimis Thon & Daurade', icon: '🐟', tip: 'Sublime la chair délicate sans masquer la fraîcheur.' },
      { name: 'Gyozas Vapeur', icon: '🥟', tip: 'Dipping sauce nette et saline pour les farces juteuses.' },
      { name: 'Ramen & Bouillons clairs', icon: '🍜', tip: 'Une touche finale pour approfondir le bouillon.' }
    ],
    features: ['Sans conservateur', 'Sans colorant', 'Vegan Friendly', 'Fabriqué en France', 'Format Squeeze 150 ML'],
    chefQuote: 'La précision chirurgicale de la sauce salée : ni trop agressive, ni effacée, la définition même de l\'équilibre.'
  }
];

export const BRAND_PILLARS = [
  {
    title: 'Format Squeeze 150 ML',
    subtitle: 'La précision au millimètre',
    desc: 'Fini les bouteilles en verre qui dégoulinent ou se renversent. Le tube ergonomique SŌSA permet un nappage net, propre et artistique digne d\'un grand restaurant.',
    icon: 'Droplet'
  },
  {
    title: 'Fabriqué en France 🇫🇷',
    subtitle: 'Savoir-faire artisanal',
    desc: 'Élaboré et conditionné en France dans le respect des normes les plus exigeantes, avec des matières premières soigneusement sélectionnées.',
    icon: 'ShieldCheck'
  },
  {
    title: '100% Vegan & Sans Additifs',
    subtitle: 'Pureté des ingrédients',
    desc: 'Aucun colorant artificiel, aucun conservateur chimique. Une composition saine qui sublime le goût brut de chaque condiment.',
    icon: 'Leaf'
  },
  {
    title: 'Créé pour Sushis & Pokés',
    subtitle: 'L\'accord mets-sauce idéal',
    desc: 'Chaque recette a été dosée au gramme près pour matcher parfaitement avec le riz vinaigré, les poissons gras et les garnitures croquantes.',
    icon: 'Sparkles'
  }
];
