// Central content for the WoubGet Holdings group site, based on the WoubGet Holdings company profile.
// To link a member company's own website, set its `website` below; its card and page switch to "Visit website".
//
// Copy rule: each fact appears once per page. A company's `tagline` is its card line and the heading of its
// About section, `intro` is the lead on its page, and `about`, `highlights` and `facts` each add something new.

export const group = {
  name: 'WoubGet Holdings',
  amharic: 'ውብ ጌጥ',
  legalName: 'WoubGet Holdings',
  tagline: 'Ethiopian companies in logistics, automotive, trade and industry, backed by global partners.',
  email: 'info@woubget.com',
  phones: ['+251 11 662 3517', '+251 11 662 3519', '+251 11 662 3522', '+251 11 662 9469'],
  poBox: 'P.O. Box 1768, Code 1250',
  address: 'Near Urael Church, Addis Ababa, Ethiopia',
  web: 'www.woubget.com',
};

export const nav = [
  { label: 'Companies', href: '/#companies' },
  { label: 'About', href: '/#about' },
  { label: 'Partners', href: '/#partners' },
  { label: 'Contact', href: '/#contact' },
];

export type Sector = 'Logistics & Transport' | 'Automotive' | 'Trade & Distribution' | 'Industry & Construction';
export const sectors: Sector[] = ['Logistics & Transport', 'Automotive', 'Trade & Distribution', 'Industry & Construction'];

export type Company = {
  slug: string;
  name: string;
  shortName: string;
  monogram: string;
  sector: Sector;
  accent: string;
  /** One line on what the company does: used on its card and as its About heading. */
  tagline: string;
  /** The lead on its own page: why it matters, with the strongest proof. */
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
    tagline: 'Air cargo and freight forwarding to and from every major business hub.',
    intro: 'An IATA-accredited cargo agent and the general sales agent for six airlines, delivering door to door to any destination.',
    about: [
      'Tradepath builds a complete foreign-trade service around each client: scheduled or chartered air freight, in-house customs clearance, and warehousing backed by IT automation.',
      'When a shipment is urgent or complex, such as project cargo or dangerous goods, the team designs a solution for it.',
    ],
    services: [
      'International freight forwarding',
      'Air cargo chartering',
      'Shipping and air cargo agency',
      'Project and dangerous goods (DGR) cargo',
      'Cargo terminal operations',
      'Consolidation and deconsolidation',
      'Warehousing and distribution',
      'Customs clearance',
    ],
    highlights: [
      { value: '6', label: 'Airlines represented' },
      { value: 'Charter', label: 'Aircraft chartered on demand' },
      { value: 'In-house', label: 'Customs clearance' },
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
    tagline: 'Temperature-controlled trucking for Ethiopia’s perishable exports.',
    intro: 'Flowerport carries around 60% of Ethiopia’s flower exports from farm to airport, cold the whole way.',
    about: [
      'Flower farms, meat exporters and vegetable growers choose Flowerport because their product is only as good as its delivery. Its inland routes link into a global network, so one booking covers the journey.',
      'An automated monitoring system tracks every truck in its modern fleet, and large multinationals use Flowerport as a preferred distributor.',
    ],
    services: [
      'Temperature-controlled trucking',
      'Handling of temperature-sensitive goods',
      'Door-to-door, airport-to-door and door-to-airport delivery',
      'Distribution for multinational companies',
    ],
    highlights: [
      { value: '60%', label: 'Of flower exports, farm to airport' },
      { value: '3', label: 'Delivery modes' },
      { value: 'Automated', label: 'Fleet monitoring' },
    ],
    website: 'https://eyob6117.github.io/flowerport/',
  },
  {
    slug: 'honest-logistics',
    name: 'Honest Logistics',
    shortName: 'Honest',
    monogram: 'HL',
    sector: 'Logistics & Transport',
    accent: '#2a5a9e',
    tagline: 'Customs clearing, sea freight and heavy-cargo haulage since 2000.',
    intro: 'Specialists in project, heavy-lift and out-of-gauge cargo, including shipments for the Grand Ethiopian Renaissance Dam.',
    about: [
      'Honest Trade Enterprise Plc. has more than 40 specialised staff at four dry-port offices, handling uni-modal, multi-modal and rail shipments. It also serves the industrial zones, bringing in raw materials and exporting finished goods such as textiles.',
      'Its own 40-tonne trucks run to and from Djibouti, backed by a partner fleet and a screened network of road, rail and sea carriers chosen for the fastest, most cost-effective route.',
    ],
    services: [
      'Customs clearing',
      'Freight forwarding and sea freight',
      'Project, heavy-lift and out-of-gauge cargo',
      'Inland haulage to and from Djibouti',
      'Port handling',
      'Consolidation and deconsolidation',
      'Forklift rental',
      'Packing, moving and storage',
    ],
    highlights: [
      { value: '300+', label: 'Import containers a month' },
      { value: '50–100', label: 'Export containers a month' },
      { value: '20+', label: 'Years in operation' },
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
    tagline: 'Auto care, paints, tyres and parts from globally recognised brands.',
    intro: 'Authorized dealer for BMW, Goodyear, Axalta (Duxone) and Armor All, with a modern auto care centre near the Imperial Hotel roundabout.',
    about: [
      'Crystal combines retail and service under one roof: car wash, detailing, oil and tyre service, alongside paints, refinish systems, accessories and workshop equipment for other garages.',
      'Its Gerji branch offers the same products and service.',
    ],
    services: [
      'Car wash, detailing, oil and tyre service',
      'Automotive care products',
      'Car paints and refinish systems',
      'Vehicle import, spare parts and accessories',
      'Automotive workshop equipment',
    ],
    highlights: [
      { value: '4', label: 'Global brands represented' },
      { value: '2', label: 'Branches: Imperial and Gerji' },
      { value: 'One stop', label: 'Service, parts and paint' },
    ],
  },
  {
    slug: 'bmw-ethiopia',
    name: 'BMW Ethiopia',
    shortName: 'BMW Ethiopia',
    monogram: 'BMW',
    sector: 'Automotive',
    accent: '#1c69d4',
    tagline: 'New BMW models, sold and serviced by the authorized dealer.',
    intro: 'Crystal Automotive is BMW’s authorized dealer in Ethiopia, so buyers get new models with service backed locally.',
    about: ['Every car comes with after-sales support from a fully equipped, modern service centre in Addis Ababa.'],
    services: ['Sales of new BMW models', 'Authorized service and maintenance', 'Genuine parts and accessories'],
    highlights: [
      { value: 'Authorized', label: 'BMW dealer' },
      { value: 'New', label: 'Current model range' },
      { value: 'Full', label: 'After-sales service' },
    ],
  },
  {
    slug: 'logix-express',
    name: 'Logix Express',
    shortName: 'Logix',
    monogram: 'LX',
    sector: 'Logistics & Transport',
    accent: '#d2232a',
    tagline: 'International and domestic express delivery on the Aramex network.',
    intro: 'Logix Express gives businesses and shoppers in Ethiopia access to Aramex’s global express and logistics network.',
    about: [
      'Aramex started as an express operator and grew into a global brand known for customised services. Through Logix Express, that network carries documents, parcels, freight and online orders to and from Ethiopia.',
    ],
    services: [
      'International and domestic express',
      'Freight forwarding',
      'Integrated logistics',
      'Document management',
      'E-commerce delivery',
    ],
    highlights: [
      { value: '354+', label: 'Aramex offices worldwide' },
      { value: '13,900+', label: 'People in the network' },
      { value: '1982', label: 'Aramex founded' },
    ],
  },
  {
    slug: 'gcc-sport-surfaces',
    name: 'GCC Sport Surfaces Ethiopia',
    shortName: 'GCC',
    monogram: 'GCC',
    sector: 'Industry & Construction',
    accent: '#7fb53a',
    tagline: 'Athletics tracks, artificial turf and sports floors to international standards.',
    intro: 'An IAAF-certified installer behind many of Ethiopia’s running tracks and stadium pitches, from Bahir Dar to Awasa.',
    about: [
      'GCC’s engineers install, renovate and maintain synthetic surfaces for athletics, football, hockey, basketball, swimming and skating, including multifunctional floors on rooftops. Work follows the NOC*NSF standard and the VCA** health, safety and environment certificate.',
    ],
    services: [
      'Athletics running tracks',
      'Artificial turf pitches',
      'Hockey and basketball courts',
      'Playgrounds and multifunctional floors',
      'Renovation and maintenance',
    ],
    highlights: [
      { value: '10+', label: 'Projects in Ethiopia' },
      { value: 'VCA**', label: 'Safety and environment certified' },
      { value: '100,000s', label: 'Square metres installed worldwide' },
    ],
    facts: {
      label: 'Projects in Ethiopia',
      items: [
        'Assela Running Track',
        'Kenenisa Sport Village',
        'Addis Ababa National Stadium',
        'Bahir Dar National Stadium',
        'Awasa National Stadium',
        'Awasa Kenema Stadium',
        'Ambo Stadium',
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
    tagline: 'Sourcing and importing machinery, equipment and goods at the best value.',
    intro: 'For more than 17 years, Dealmode has supplied companies such as Diageo, Heineken and Awash Winery with what they need from abroad.',
    about: [
      'Dealmode starts from the client’s need, finds reputable vendors with quality products and negotiates the best value-for-money deal. It also supplies its sister companies across WoubGet Holdings.',
    ],
    services: [
      'Generators and industrial machinery',
      'Refrigeration, chillers and dispensers',
      'Furniture and office equipment',
      'Industrial chemicals',
      'Spare parts, pumps and compressors',
      'Branded and promotional items',
    ],
    highlights: [
      { value: '17+', label: 'Years importing' },
      { value: 'Vetted', label: 'Reputable vendors only' },
      { value: 'Best value', label: 'Negotiated for each client' },
    ],
    facts: { label: 'Clients include', items: ['Diageo / Meta Abo Brewery', 'Heineken', 'Awash Winery', 'NOC & United Petroleum', 'Saeed Mohamed Al Ghandi & Sons', 'Contractors'] },
  },
  {
    slug: 'dun-distributor',
    name: 'Dun Soft & Alcohol Drinks Distributor',
    shortName: 'DUN',
    monogram: 'DUN',
    sector: 'Trade & Distribution',
    accent: '#b07d24',
    tagline: 'Heineken’s distribution agent for southern Addis Ababa.',
    intro: 'Since 2014, Dun has distributed Heineken’s beer and malt brands across southern Addis Ababa with full-service delivery.',
    about: [
      'Dun works from Nifas Silk-Lafto, with a second warehouse in Akaki-Kality, and backs every delivery with marketing support that helps its outlets sell more.',
    ],
    services: [
      'Beverage distribution',
      'Promotion ideas and co-op advertising',
      'Custom banners and posters',
      'Samples and point-of-sale for new releases',
    ],
    highlights: [
      { value: '6', label: 'Brands distributed' },
      { value: '5,000 ft²', label: 'Warehouse space' },
      { value: '2', label: 'Warehouses' },
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
    tagline: 'Recycling PET and paper into quality, affordable products.',
    intro: 'EcoGuard is building a scalable recycling plant, funded through EXIM Bank in the UAE, to turn Ethiopia’s waste into products and jobs.',
    about: [
      'Its plan covers recycled paper and PET products that replace imports, a waste-to-energy plant with a German partner, and awareness programmes that make keeping the environment clean good business.',
    ],
    services: [
      'Recycled paper and PET products',
      'Waste-to-energy',
      'Waste management',
      'Environmental awareness programmes',
    ],
    highlights: [
      { value: 'PET & paper', label: 'Recycled products' },
      { value: 'Phased', label: 'Plant build-out' },
      { value: 'Local jobs', label: 'And import substitution' },
    ],
  },
];

// Proof points for the group, each from a different company.
export const groupStats = [
  { value: 60, suffix: '%', label: 'Of Ethiopia’s flower exports moved by Flowerport' },
  { value: 6, suffix: '', label: 'Airlines represented by Tradepath' },
  { value: 300, suffix: '+', label: 'Import containers cleared a month by Honest' },
  { value: 20, suffix: '+', label: 'Years on the ground in Ethiopia' },
];

export const airlines = ['Ethiopian Airlines', 'Qatar Airways', 'Turkish Airlines', 'Yemenia', 'EgyptAir', 'Air India'];
export const brands = ['BMW', 'Goodyear', 'Axalta', 'Armor All', 'Heineken', 'Aramex'];

export const values = [
  { title: 'New industries for Ethiopia', body: 'Cold-chain trucking, synthetic sports surfaces and PET recycling: we bring in what the market is missing.' },
  { title: 'Global standards, local delivery', body: 'Working with world leaders lets our teams learn their methods and apply them here.' },
  { title: 'One group, end to end', body: 'Import, clear, fly, truck and distribute. Our companies hand work to each other, so clients deal with one group.' },
];
