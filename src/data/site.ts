// Central content for the WoubGet Holdings group site, based on the WoubGet Holdings company profile.
// To link a member company's own website, set its `website` below; its card and page switch to "Visit website".

export const group = {
  name: 'WoubGet Holdings',
  amharic: 'ውብጌት ሆልዲንግስ',
  legalName: 'WoubGet Holdings',
  tagline: 'A group of Ethiopian companies in transport, logistics, trade, automotive and modern services.',
  email: 'info@woubget.com',
  phones: ['+251 11 662 3517', '+251 11 662 3519', '+251 11 662 3522', '+251 11 662 9469'],
  poBox: 'P.O. Box 1768, Code 1250',
  address: 'Near Urael Church, Addis Ababa, Ethiopia',
  web: 'www.woubget.com',
};

export const nav = [
  { label: 'Companies', href: '/#companies' },
  { label: 'Sectors', href: '/#sectors' },
  { label: 'About', href: '/#about' },
  { label: 'Global Partners', href: '/#partners' },
  { label: 'Contact', href: '/#contact' },
];

export type Sector = 'Logistics & Transport' | 'Automotive' | 'Trade & Distribution' | 'Industry & Construction';

export const sectors: { name: Sector; body: string; icon: 'truck' | 'car' | 'box' | 'factory' }[] = [
  { name: 'Logistics & Transport', icon: 'truck', body: 'Air, sea, road and express freight, customs clearing and cold-chain trucking that connect Ethiopia to the world.' },
  { name: 'Automotive', icon: 'car', body: 'Auto care, paints and refinish systems, tyres and spare parts, and the authorized BMW dealership in Ethiopia.' },
  { name: 'Trade & Distribution', icon: 'box', body: 'General import of machinery, equipment and consumer goods, and full-service beverage distribution in Addis Ababa.' },
  { name: 'Industry & Construction', icon: 'factory', body: 'Synthetic sports surfaces for stadiums and tracks, and recycling and manufacturing for a cleaner Ethiopia.' },
];

export type Company = {
  slug: string;
  name: string;
  shortName: string;
  monogram: string;
  sector: Sector;
  accent: string;
  tagline: string;
  intro: string;
  about: string[];
  services: string[];
  highlights: { value: string; label: string }[];
  facts?: { label: string; items: string[] };
  /** The company's own website. Leave undefined until it is live. */
  website?: string;
};

export const companies: Company[] = [
  {
    slug: 'tradepath',
    name: 'Tradepath International',
    shortName: 'Tradepath',
    monogram: 'TP',
    sector: 'Logistics & Transport',
    accent: '#3f9a4a',
    tagline: 'Air cargo logistics and freight forwarding, door to door, to any destination.',
    intro: 'One of Ethiopia’s leading air cargo logistics and freight forwarding companies, and an accredited IATA cargo agent.',
    about: [
      'Tradepath International offers its customers a comprehensive foreign trade service tailored to the needs of each client. It provides air freight to and from all major business hubs around the world, and can charter carriers to meet specific logistical requirements.',
      'Its air cargo service offers door-to-door delivery to any global destination through an efficient worldwide agency network. Tradepath is the cargo GSA for Ethiopian Airlines, Qatar Airways, Turkish Airlines, Yemenia and EgyptAir, and an offline GSA for Air India’s passenger and cargo services.',
    ],
    services: [
      'International freight forwarding for import and export trade',
      'Global supply chain solutions',
      'Air cargo freight chartering',
      'Shipping agency and air cargo agency',
      'Project cargo handling',
      'Dangerous goods (DGR) cargo handling',
      'Cargo terminal operations',
      'Consolidation and deconsolidation',
      'Warehouse management and distribution backed by IT automation',
      'In-house customs clearance for import and export',
    ],
    highlights: [
      { value: 'IATA', label: 'Accredited cargo agent' },
      { value: '6', label: 'Airlines represented as GSA' },
      { value: 'Door-to-door', label: 'Delivery to any global destination' },
    ],
    facts: { label: 'Airlines represented', items: ['Ethiopian Airlines', 'Qatar Airways', 'Turkish Airlines', 'Yemenia', 'EgyptAir', 'Air India (offline GSA)'] },
  },
  {
    slug: 'flowerport',
    name: 'Flowerport Transport',
    shortName: 'Flowerport',
    monogram: 'FP',
    sector: 'Logistics & Transport',
    accent: '#8b3a78',
    tagline: 'Temperature-controlled road transport for Ethiopia’s perishable exports.',
    intro: 'Road transportation within Ethiopia for flower farms, meat exporters and vegetable growers, moving around 60% of the country’s flower exports from farm to airport.',
    about: [
      'Flowerport Transport focuses on road transportation within Ethiopia. Its customers are flower farms, meat exporters, vegetable growers and others whose product quality depends on fresh and timely delivery.',
      'Flowerport offers a complete service package, where its inland transport links with a global network to meet clients’ needs economically. It maintains a modern, automated monitoring and control system for its expanding fleet, and is a preferred distributor for large multinational companies.',
    ],
    services: [
      'Temperature-controlled trucking',
      'Handling and managing temperature-sensitive products',
      'Door-to-Door, Airport-to-Door and Door-to-Airport delivery',
      'Distribution for multinational companies',
    ],
    highlights: [
      { value: '60%', label: 'Of Ethiopia’s flower exports moved farm to airport' },
      { value: '3 modes', label: 'Door-to-door, airport-to-door, door-to-airport' },
      { value: 'Automated', label: 'Fleet monitoring and control' },
    ],
    facts: { label: 'Industries served', items: ['Flower farms', 'Meat exporters', 'Fruit & vegetable growers', 'Multinational companies'] },
    website: 'https://eyob6117.github.io/flowerport/',
  },
  {
    slug: 'honest-logistics',
    name: 'Honest Logistics',
    shortName: 'Honest',
    monogram: 'HL',
    sector: 'Logistics & Transport',
    accent: '#2a5a9e',
    tagline: 'Customs clearing, freight forwarding and inland haulage since 2000.',
    intro: 'Honest Trade Enterprise Plc., formed in July 2000, specialises in project, heavy-lift and out-of-gauge cargo through four offices at Ethiopia’s dry ports.',
    about: [
      'Honest Logistics is engaged in customs clearing and freight forwarding, commission agency and inland transportation. With more than 20 years of experience, over 40 specialised staff and offices at the Modjo, Semera, Kaliti and Gelan dry ports, it serves uni-modal, multi-modal and rail shipments.',
      'Honest is heavily involved in the Grand Ethiopian Renaissance Dam (GERD) and serves the industrial zones with raw-material imports and finished-goods exports, especially textiles. It runs its own 40-tonne trucks to and from Djibouti, manages a partner fleet for bulk container moves, and works with a screened network of road, rail and sea freight carriers.',
    ],
    services: [
      'Freight forwarding',
      'Sea freight',
      'Customs clearing',
      'Consolidation and deconsolidation',
      'Port handling',
      'Inland haulage to and from Djibouti',
      'Project, heavy-lift and out-of-gauge cargo',
      'Forklift rental',
      'Packing, moving and storage',
    ],
    highlights: [
      { value: '300+', label: 'Import containers handled per month' },
      { value: '50–100', label: 'Export containers per month' },
      { value: '4', label: 'Dry-port offices' },
    ],
    facts: { label: 'Dry-port offices', items: ['Modjo', 'Semera', 'Kaliti', 'Gelan'] },
  },
  {
    slug: 'crystal-automotive',
    name: 'Crystal Automotive',
    shortName: 'Crystal',
    monogram: 'CA',
    sector: 'Automotive',
    accent: '#c7951c',
    tagline: 'Modern, professional auto care, paints, parts and equipment.',
    intro: 'A modern auto care service provider and authorized dealer for globally renowned brands, with a state-of-the-art centre near the Imperial Hotel roundabout.',
    about: [
      'Crystal Automotive supplies industry-standard auto care products, auto paints and refinish systems, accessories and a range of automotive service equipment.',
      'Its state-of-the-art auto care centre near the Imperial Hotel roundabout, and its Gerji branch, are equipped with modern machines and offer industry-standard products and solutions. Crystal is the authorized dealer for Armor All, Axalta Coating Systems (Duxone), BMW and Goodyear.',
    ],
    services: [
      'Car wash, auto detailing, oil and tyre service',
      'Supply of automotive care products',
      'Supply of car paints and paint accessories',
      'Import of cars, spare parts and modern auto accessories',
      'Supply of automotive equipment',
    ],
    highlights: [
      { value: '4', label: 'Global brands represented' },
      { value: '2', label: 'Locations: Imperial and Gerji' },
      { value: 'BMW', label: 'Authorized dealer in Ethiopia' },
    ],
    facts: { label: 'Authorized dealer for', items: ['BMW', 'Goodyear', 'Axalta Coating Systems (Duxone)', 'Armor All'] },
  },
  {
    slug: 'bmw-ethiopia',
    name: 'BMW Ethiopia',
    shortName: 'BMW Ethiopia',
    monogram: 'BMW',
    sector: 'Automotive',
    accent: '#1c69d4',
    tagline: 'New BMW models with full service support, through Crystal Automotive.',
    intro: 'Crystal Automotive is the authorized dealer of BMW in Ethiopia.',
    about: [
      'Through Crystal Automotive, BMW Ethiopia offers a range of brand-new BMW models to customers in Ethiopia.',
      'Every vehicle is backed by service support from a fully equipped, modern service centre.',
    ],
    services: ['Sales of brand-new BMW models', 'Authorized service and maintenance', 'Genuine parts and accessories'],
    highlights: [
      { value: 'Authorized', label: 'BMW dealer in Ethiopia' },
      { value: 'New', label: 'Range of current BMW models' },
      { value: 'Full', label: 'Service support in a modern centre' },
    ],
  },
  {
    slug: 'logix-express',
    name: 'Logix Express',
    shortName: 'Logix',
    monogram: 'LX',
    sector: 'Logistics & Transport',
    accent: '#d2232a',
    tagline: 'Express delivery and logistics in Ethiopia, with the Aramex global network.',
    intro: 'Logix Express brings Aramex’s comprehensive logistics and transportation solutions to customers in Ethiopia.',
    about: [
      'Aramex was established in 1982 as an express operator and grew into a global brand known for customised services and an innovative multi-product offering. In 1997 it became the first Arab-based international company to list on NASDAQ, and in 2005 it went public on the Dubai Financial Market.',
      'Today the Aramex network spans more than 354 offices and over 13,900 people, serving retail and wholesale customers worldwide.',
    ],
    services: [
      'International and domestic express delivery',
      'Freight forwarding',
      'Integrated logistics solutions',
      'Information and document management',
      'Consumer retail services',
      'E-commerce solutions',
    ],
    highlights: [
      { value: '354+', label: 'Aramex offices worldwide' },
      { value: '13,900+', label: 'People in the Aramex network' },
      { value: '1982', label: 'Aramex founded as an express operator' },
    ],
  },
  {
    slug: 'gcc-sport-surfaces',
    name: 'GCC Sport Surfaces Ethiopia',
    shortName: 'GCC',
    monogram: 'GCC',
    sector: 'Industry & Construction',
    accent: '#7fb53a',
    tagline: 'Synthetic sports surfaces for Ethiopia’s tracks, pitches and stadiums.',
    intro: 'Installation, renovation and maintenance of synthetic floors, with hundreds of thousands of square metres installed worldwide.',
    about: [
      'GCC Sport Surfaces specialises in the installation, renovation and maintenance of synthetic floor constructions: hockey pitches, playgrounds, basketball courts, football pitches, swimming pools, athletics tracks and skating rinks, as well as sports floors on the roofs of buildings.',
      'Skilled engineers and professional installers work with state-of-the-art equipment. GCC is certified by the IAAF and NOC*NSF and holds the VCA** certificate, because professionalism, health and safety and the environment are paramount during installation.',
    ],
    services: [
      'Athletics running tracks',
      'Artificial turf football pitches',
      'Hockey pitches and basketball courts',
      'Playgrounds and multifunctional sports floors',
      'Swimming pool and skating rink surfaces',
      'Renovation and maintenance',
    ],
    highlights: [
      { value: 'IAAF', label: 'Certified installer' },
      { value: '10+', label: 'Stadium and track projects in Ethiopia' },
      { value: 'VCA**', label: 'Health, safety and environment certificate' },
    ],
    facts: {
      label: 'Projects in Ethiopia',
      items: [
        'Assela Running Track',
        'Kenenisa Sport Village',
        'Addis Ababa National Stadium track',
        'Bahir Dar National Stadium track',
        'Awasa National Stadium track',
        'Awasa Kenema Stadium turf',
        'Ambo Stadium turf',
        'Dire Dawa National Stadium',
        'Assosa, Gambella and Mekelle',
        'New Addis Ababa National Stadium',
      ],
    },
  },
  {
    slug: 'dealmode-importer',
    name: 'Dealmode Importer',
    shortName: 'Dealmode',
    monogram: 'DM',
    sector: 'Trade & Distribution',
    accent: '#2f63ad',
    tagline: 'General import of machinery, equipment and consumer goods, sourced for value.',
    intro: 'A general importer with more than 17 years of experience, supplying leading brands, contractors and its sister companies.',
    about: [
      'Dealmode Importer specialises in a wide range of goods, including residential and industrial machinery such as generators, furniture, consumer goods and appliances, industrial chemicals, spare parts and promotional items.',
      'Dealmode works by assessing each client’s needs, sourcing reputable vendors with top-quality products and securing the best value-for-money deal. It also supplies consumer and industrial goods, accessories and promotional items to its sister companies in WoubGet Holdings.',
    ],
    services: [
      'Generators and industrial machinery',
      'Refrigeration, chillers and dispensers',
      'Furniture and office equipment',
      'Industrial chemicals',
      'Spare parts, pumps, lifts and compressors',
      'Branded and promotional items',
    ],
    highlights: [
      { value: '17+', label: 'Years in the import business' },
      { value: 'Sourcing', label: 'Reputable vendors, best value' },
      { value: 'Group', label: 'Supplier to sister companies' },
    ],
    facts: { label: 'Clients supplied', items: ['Diageo / Meta Abo Brewery', 'Heineken', 'Awash Winery', 'NOC & United Petroleum', 'Saeed Mohamed Al Ghandi & Sons', 'Contractors'] },
  },
  {
    slug: 'dun-distributor',
    name: 'Dun Soft & Alcohol Drinks Distributor',
    shortName: 'DUN',
    monogram: 'DUN',
    sector: 'Trade & Distribution',
    accent: '#b07d24',
    tagline: 'Full-service beverage distribution for Heineken in southern Addis Ababa.',
    intro: 'Established in December 2014, Dun is Heineken’s distribution agent for the southern part of Addis Ababa.',
    about: [
      'Dun Soft and Alcohol Drinks Distributor Private Limited Company provides high-quality, full-service distribution of soft and alcoholic drinks, specialty beverages and beverage-related supplies.',
      'Based in Nifas Silk-Lafto sub-city with a second warehouse in Akaki-Kality, its facilities include about 5,000 square feet of warehouse space and 1,400 square feet of office and retail space.',
    ],
    services: [
      'Distribution of Heineken-owned brands',
      'Consultation on promotions and co-op advertising',
      'Custom marketing material: banners and posters',
      'Samples and point-of-sale for new product releases',
    ],
    highlights: [
      { value: '2014', label: 'Established in Addis Ababa' },
      { value: '5,000 ft²', label: 'Warehouse space' },
      { value: '2', label: 'Sites: Nifas Silk-Lafto and Kality' },
    ],
    facts: { label: 'Brands distributed', items: ['Walia', 'Bedele', 'Harar', 'Heineken', 'Sofi Malt', 'Buckler'] },
  },
  {
    slug: 'ecoguard-manufacturing',
    name: 'EcoGuard Manufacturing',
    shortName: 'EcoGuard',
    monogram: 'EG',
    sector: 'Industry & Construction',
    accent: '#3b9a3a',
    tagline: 'Recycling and manufacturing for a cleaner, more productive Ethiopia.',
    intro: 'A recycling and manufacturing company producing affordable, quality products alongside environmental and social initiatives.',
    about: [
      'EcoGuard aims to produce affordable and quality products with an extensive programme of environmental and social initiatives that improve the community and the environment.',
      'It will increase the country’s supply of recycled PET bottles, its capacity in waste management, environmental sustainability and employment. EcoGuard has secured core funding through EXIM Bank in the UAE and will set up its scalable recycling plant phase by phase.',
    ],
    services: [
      'Recycled paper and PET plastic products',
      'Waste-to-energy plant, with a German partner',
      'Import substitution and job creation',
      'Environmental awareness programmes',
    ],
    highlights: [
      { value: 'PET', label: 'Bottle recycling at scale' },
      { value: 'Waste-to-energy', label: 'Plant planned with a German partner' },
      { value: 'Phased', label: 'Plant build-out, funded via UAE EXIM Bank' },
    ],
  },
];

export const groupStats = [
  { value: 10, suffix: '', label: 'Member companies across transport, trade, automotive and industry' },
  { value: 6, suffix: '', label: 'International airlines represented by Tradepath' },
  { value: 60, suffix: '%', label: 'Of Ethiopia’s flower exports moved by Flowerport' },
  { value: 20, suffix: '+', label: 'Years of experience, since Honest Logistics in 2000' },
];

export const airlines = ['Ethiopian Airlines', 'Qatar Airways', 'Turkish Airlines', 'Yemenia', 'EgyptAir', 'Air India'];
export const brands = ['BMW', 'Goodyear', 'Axalta', 'Armor All', 'Heineken', 'Aramex'];

export const values = [
  { title: 'Trailblazing new industries', body: 'We introduce unique industries to Ethiopia, from cold-chain trucking to synthetic sports surfaces and recycling.' },
  { title: 'Technology transfer', body: 'Each company works with and learns from leading pioneers around the globe, the building block of Ethiopia’s fast-track development.' },
  { title: 'A global network', body: 'Airlines, carriers and brands from around the world, matched with deep experience operating on the ground in Ethiopia.' },
  { title: 'Complementary companies', body: 'Our members work in sectors that reinforce each other, so clients get one connected partner from sourcing to delivery.' },
];

export const companyBySlug = (slug: string) => companies.find((c) => c.slug === slug);
