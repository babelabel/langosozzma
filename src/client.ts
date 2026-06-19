/**
 * Client configuration — single source of truth for the LÁNGOSozzMA concept homepage.
 *
 * Concept redesign: the menu, prices, address, opening hours and rating reflect the
 * real venue. Prices are transcribed from the on-site menu boards (photos provided by
 * the owner). Fields that still need confirmation are marked with `VERIFY:`.
 *
 * This is an INFORMATIONAL site: visitors browse the menu and come in to order in
 * person. There is no online ordering and no home delivery — every order is taken and
 * paid for on site, so nothing is cooked before payment is guaranteed.
 */

export interface BrandPalette {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
}

export interface NavAction {
  label: string;
  href: string;
  icon?: string;
  target?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
}

export interface Selling {
  title: string;
  description: string;
  icon: string;
}

export interface MenuItem {
  name: string;
  /** Numeric price in HUF; formatted for display in the UI. */
  price: number;
  description?: string;
  /** Marks the item with a "Népszerű" (popular) ribbon. */
  popular?: boolean;
}

export interface MenuExtra {
  name: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  title: string;
  tagline?: string;
  icon?: string;
  description?: string;
  image?: string;
  items: MenuItem[];
  extrasTitle?: string;
  extras?: MenuExtra[];
}

export interface Stat {
  amount: string;
  label: string;
}

export interface Step {
  title: string;
  description: string;
  icon: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface OpeningDay {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface Client {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    palette: BrandPalette;
  };
  seo: {
    title: string;
    description: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    actions: NavAction[];
  };
  stats: Stat[];
  why: {
    tagline: string;
    title: string;
    subtitle: string;
    items: Selling[];
  };
  menu: {
    tagline: string;
    title: string;
    subtitle: string;
    categories: MenuCategory[];
    packagingNote: string;
    note: string;
  };
  about: {
    tagline: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
    image: string;
    imageAlt: string;
  };
  visit: {
    tagline: string;
    title: string;
    subtitle: string;
    steps: Step[];
    image: string;
    imageAlt: string;
    note: string;
  };
  faqs: {
    tagline: string;
    title: string;
    items: Faq[];
  };
  contact: {
    tagline: string;
    title: string;
    subtitle: string;
    address: string;
    district: string;
    phone: string;
    email: string;
    mapHref: string;
    openingHours: OpeningDay[];
  };
  cta: {
    title: string;
    subtitle: string;
    actions: NavAction[];
  };
  social: {
    facebook?: string;
    instagram?: string;
  };
}

const palette: BrandPalette = {
  primary: '#C8451D', // Paprika — warm, appetising fried-crust red
  secondary: '#A6381A', // Deep paprika — derived darker shade for hover/depth
  accent: '#E8A33D', // Fried Gold — golden, retro-diner warmth
  dark: '#2B2118', // Roasted Brown — grounded, premium near-black
};

const MAP_HREF = 'https://www.google.com/maps/search/?api=1&query=L%C3%81NGOSozzMA+%C3%9Ajsz%C3%A1sz+utca+87+Budapest';

export const client: Client = {
  brand: {
    name: 'LÁNGOSozzMA',
    shortName: 'LÁNGOSozzMA',
    tagline: 'Frissen sütött, ropogós lángos a XVI. kerület szívében',
    palette,
  },

  seo: {
    title: 'LÁNGOSozzMA — Frissen sütött lángos, gyros és retro burger Budapesten',
    description:
      'Ropogós, mindig frissen sütött burgonyás lángos, bőséges gyros és igazi retro burger Budapest XVI. kerületében, a Mátyásföldön. Nézd meg az étlapunkat, és ugorj be hozzánk frissen sütött falatért!',
  },

  hero: {
    tagline: 'Mátyásföld · Újszász utca 87',
    title: 'Ropogós lángos,<br /> ahogy a nagyié — <span class="text-primary">csak frissebben</span>',
    subtitle:
      'Kézzel nyújtott, burgonyás tészta, forró olaj, bőséges feltétek. Minden lángos, gyros és burger helyben, rendelésre, frissen készül. Nézd meg az étlapot, és ugorj be hozzánk az Újszász utcába!',
    image: '~/assets/images/langos-hero.jpg',
    imageAlt: 'Frissen sütött, sajtos-tejfölös burgonyás lángos közelről',
    actions: [
      { label: 'Megnézem az étlapot', href: '#etlap', icon: 'tabler:tools-kitchen-2', variant: 'primary' },
      { label: 'Útvonal térképen', href: MAP_HREF, target: '_blank', icon: 'tabler:map-pin', variant: 'secondary' },
    ],
  },

  stats: [
    { amount: '4,6★', label: 'Vendégeink értékelése' },
    { amount: '130+', label: 'Elégedett vendég' },
    { amount: '890 Ft', label: 'Lángos már ennyitől' },
    { amount: 'K–P', label: '9:00–18:00 nyitva' },
  ],

  why: {
    tagline: 'Miért hozzánk?',
    title: 'Lángos, amiért érdemes visszatérni',
    subtitle: 'Nem tömeggyártás, hanem kézművesség. Minden adag akkor készül, amikor megrendeled — a pultnál.',
    items: [
      {
        title: 'Mindig frissen sütve',
        description:
          'A tészta kézzel nyújtva, rendelésre kerül a forró olajba — ezért lesz kívül ropogós, belül foszlós.',
        icon: 'tabler:flame',
      },
      {
        title: 'Bőséges feltétek',
        description: 'Nem spórolunk a sajttal és a tejföllel, és tucatnyi extra feltétből válogathatsz.',
        icon: 'tabler:cheese',
      },
      {
        title: 'Lángos, gyros és burger',
        description: 'A klasszikus burgonyás lángos mellett bőséges gyros tálak és igazi retro burgerek.',
        icon: 'tabler:burger',
      },
      {
        title: 'Barátságos árak',
        description: 'Laktató, kézműves utcai étel már 890 Ft-tól — minőség, ami nem veri szét a pénztárcát.',
        icon: 'tabler:coin',
      },
      {
        title: 'Gyors, kedves kiszolgálás',
        description: 'Beugrasz, megrendeled a pultnál, pár perc és viheted — figyelmes, családias kiszolgálással.',
        icon: 'tabler:clock-hour-4',
      },
      {
        title: 'Könnyű parkolás',
        description: 'Bőséges parkolási lehetőség a környéken, így pár percre is nyugodtan beugorhatsz.',
        icon: 'tabler:parking',
      },
    ],
  },

  menu: {
    tagline: 'Étlap',
    title: 'Ami a forró olajból érkezik',
    subtitle: 'A teljes kínálat — burgonyás lángos, bőséges gyros és igazi retro burgerek.',
    packagingNote: 'Csomagolás: 100 Ft / db (elvitelnél).',
    note: 'Minden étel helyben, frissen készül — gyere be hozzánk az Újszász utcába. Online rendelést és házhozszállítást nem vállalunk.',
    categories: [
      {
        id: 'langos',
        title: 'Lángos (burgonyás)',
        tagline: 'A főszereplő',
        icon: 'tabler:bread',
        description: 'Kézzel nyújtott, burgonyás tésztából, mindig frissen sütve.',
        image: '~/assets/images/langos-hero.jpg',
        items: [
          {
            name: 'Sima / Fokhagymás',
            price: 890,
            description: 'A ropogós alap — fokhagymás kenettel kérheted.',
            popular: true,
          },
          { name: 'Tejfölös', price: 1180, description: 'Bőséges tejföllel a tetején.' },
          { name: 'Sajtos', price: 1280, description: 'Rengeteg reszelt sajttal.' },
          {
            name: 'Sajtos-tejfölös',
            price: 1570,
            description: 'A nagy kedvenc: tejföl és sajt egyben.',
            popular: true,
          },
        ],
        extrasTitle: 'Extra feltétek',
        extras: [
          { name: 'Káposzta', price: 390 },
          { name: 'Virsli', price: 390 },
          { name: 'Kolbász', price: 390 },
          { name: 'Bacon', price: 390 },
          { name: 'Lilahagyma', price: 290 },
          { name: 'Tépett hús', price: 1190 },
        ],
      },
      {
        id: 'gyros',
        title: 'Gyros',
        tagline: 'Bőséges és laktató',
        icon: 'tabler:meat',
        description: 'Pirított hús, friss feltétek, házi öntetek — pitában vagy tálon.',
        image: '~/assets/images/gyros.jpg',
        items: [
          {
            name: 'Gyros pitában',
            price: 1350,
            description: 'Puha pitában, friss feltétekkel és öntettel.',
            popular: true,
          },
          {
            name: 'Gyros tál',
            price: 2290,
            description:
              'Sült burgonyával, tzatzikivel, paradicsommal, salátával, káposztával, lilahagymával és öntetekkel.',
          },
          { name: 'Tépett húsos tál', price: 2790, description: 'Lassan sült, omlós tépett hússal.' },
          { name: 'Csirkehúsos tál', price: 2790, description: 'Pirított csirkehússal, bőséges körettel.' },
          { name: 'Gyros burger', price: 2290, description: 'Gyros hús egy laktató burgerben.' },
        ],
        extrasTitle: 'Dupla gyros hús',
        extras: [
          { name: 'Pitába', price: 790 },
          { name: 'Tálra', price: 990 },
        ],
      },
      {
        id: 'burger',
        title: 'Retro Hamburger',
        tagline: 'A régi idők íze',
        icon: 'tabler:burger',
        description: 'Vastag húspogácsa, friss zöldségek, pirított zsemle.',
        image: '~/assets/images/retro-burger.jpg',
        items: [
          {
            name: 'Retro Hamburger',
            price: 1990,
            description: 'A klasszikus: vastag húspogácsa, friss zöldségek, házi szósz.',
            popular: true,
          },
          { name: 'Csirkés burger', price: 2190, description: 'Ropogós-szaftos csirkehússal.' },
          { name: 'Tépett húsos burger', price: 2690, description: 'Omlós tépett hússal megpakolva.' },
          { name: 'Gyros húsos burger', price: 2290, description: 'Gyros hús burger formában.' },
        ],
        extrasTitle: 'Extra feltétek',
        extras: [
          { name: 'Sajt', price: 390 },
          { name: 'Bacon', price: 390 },
          { name: 'Hús (dupla)', price: 990 },
        ],
      },
    ],
  },

  about: {
    tagline: 'Rólunk',
    title: 'Egy kis lángosozó nagy szívvel',
    paragraphs: [
      'A LÁNGOSozzMA egy családias hangulatú lángosozó Budapest XVI. kerületében, a mátyásföldi Újszász utcában. Nálunk a lángos nem gyorséttermi tömegtermék, hanem kézműves fogás: minden adag frissen, rendelésre sül.',
      'Hiszünk benne, hogy egy jó lángoshoz nem kell sok titok — csak jó tészta, forró olaj, bőséges feltét és kedves kiszolgálás. Nézd meg az étlapot, gyere be hozzánk, és pár perc alatt frissen, melegen elkészítjük, amit kértél.',
    ],
    highlights: [
      'Kézzel nyújtott, frissen sütött tészta',
      'Bőséges, nem fukar feltétek',
      'Minden helyben, frissen készül',
      'A környék kedvence — 4,6★ értékelés',
    ],
    image: '~/assets/images/about-shop.jpg',
    imageAlt: 'Kézzel nyújtott lángostészta a forró olaj felett',
  },

  visit: {
    tagline: 'Jó tudni',
    title: 'Így jutsz friss lángoshoz',
    subtitle: 'Nézd meg az étlapot, ugorj be hozzánk — a többit ránk bízhatod.',
    steps: [
      {
        title: 'Nézd meg az étlapot',
        description:
          'Böngészd át a kínálatot, és válaszd ki a kedvenced — a klasszikus sajtos-tejfölöstől a gyros tálig.',
        icon: 'tabler:list-check',
      },
      {
        title: 'Ugorj be hozzánk',
        description: 'Keddtől péntekig 9:00–18:00 között várunk az Újszász utca 87. szám alatt, a Mátyásföldön.',
        icon: 'tabler:map-pin',
      },
      {
        title: 'Frissen elkészítjük',
        description: 'A pultnál rendelsz és fizetsz, mi pedig pár perc alatt frissen, melegen elkészítjük.',
        icon: 'tabler:tools-kitchen-2',
      },
    ],
    image: '~/assets/images/gyros.jpg',
    imageAlt: 'Frissen elkészített gyros pita a pultnál',
    note: 'Minden rendelést a helyszínen veszünk fel és készítünk el — így mindig friss, amit kapsz. Online rendelés és házhozszállítás nincs.',
  },

  faqs: {
    tagline: 'Gyakori kérdések',
    title: 'Amit jó tudni',
    items: [
      {
        question: 'Mikor vagytok nyitva?',
        answer: 'Keddtől péntekig 9:00–18:00 között várunk. Hétfőn, szombaton és vasárnap zárva tartunk.',
      },
      {
        question: 'Hol találunk meg titeket?',
        answer:
          'Budapest XVI. kerület, Mátyásföld, Újszász utca 87. (1165). A környéken bőséges a parkolási lehetőség.',
      },
      {
        question: 'Lehet online rendelni vagy előre rendelni?',
        answer:
          'Az ételeket helyben, frissen készítjük, ezért online rendelést és előrendelést nem veszünk fel. Nézd meg az étlapot, gyere be, és pár perc alatt elkészítjük a pultnál.',
      },
      {
        question: 'Van házhozszállítás?',
        answer: 'Nincs házhozszállítás — nálunk helyben, frissen sütve kapod meg a lángost, gyrost és burgert.',
      },
      {
        question: 'Mennyibe kerül a csomagolás?',
        answer: 'A csomagolás 100 Ft / db, ezt elvitelnél számoljuk fel.',
      },
      {
        question: 'Vannak vegetáriánus lehetőségek?',
        answer: 'Természetesen — a sima, fokhagymás, tejfölös és sajtos lángosaink mind húsmentesek.',
      },
    ],
  },

  contact: {
    tagline: 'Kapcsolat',
    title: 'Ugorj be egy friss lángosért',
    subtitle: 'Kérdésed van? Hívj minket, vagy nézz be hozzánk az alábbi címen — szeretettel várunk.',
    address: 'Újszász utca 87, 1165',
    district: 'Budapest, XVI. kerület — Mátyásföld',
    phone: '+36 XX XXX XXXX', // VERIFY: a valós telefonszámot pótold
    email: 'hello@langosozzma.hu', // VERIFY: a valós e-mail címet pótold
    mapHref: MAP_HREF,
    openingHours: [
      { day: 'Hétfő', hours: 'Zárva', closed: true },
      { day: 'Kedd', hours: '9:00 – 18:00' },
      { day: 'Szerda', hours: '9:00 – 18:00' },
      { day: 'Csütörtök', hours: '9:00 – 18:00' },
      { day: 'Péntek', hours: '9:00 – 18:00' },
      { day: 'Szombat', hours: 'Zárva', closed: true },
      { day: 'Vasárnap', hours: 'Zárva', closed: true },
    ],
  },

  cta: {
    title: 'Megkívántad a friss lángost?',
    subtitle: 'Ugorj be hozzánk az Újszász utcába — keddtől péntekig 9-től 18-ig, frissen sütve várunk.',
    actions: [
      { label: 'Megnézem az étlapot', href: '#etlap', icon: 'tabler:tools-kitchen-2', variant: 'primary' },
      { label: 'Útvonal térképen', href: MAP_HREF, target: '_blank', icon: 'tabler:map-pin', variant: 'secondary' },
    ],
  },

  social: {
    facebook: '', // VERIFY: a valós Facebook oldal linkje
    instagram: '', // VERIFY: a valós Instagram oldal linkje
  },
};

export default client;
