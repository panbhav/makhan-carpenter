import type {
  Project,
  ServiceItem,
  ProcessStep,
  BeforeAfterItem,
  MaterialItem,
  Testimonial,
  StatItem
} from '../types';

export const siteConfig = {
  brandName: 'Makhan Carpenter',
  brandShortName: 'Makhan',
  brandSubtitle: 'Bespoke Furniture & Architectural Woodwork',
  tagline: 'Crafted by Hand. Designed for Life.',
  subheading: 'Premium custom furniture and expert wood craftsmanship by Makhan Carpenter. Over 20 years of mastery across Uttar Pradesh and Alwar (Rajasthan).',
  experienceYears: '20+',
  locationsServed: 'Alwar (Rajasthan), Uttar Pradesh (UP), Delhi NCR & surrounding regions',
  
  contact: {
    phoneDisplay: '+91 98765 43210',
    phoneRaw: '+919876543210',
    whatsappDisplay: '+91 98765 43210',
    whatsappRaw: '919876543210',
    email: 'contact@makhancarpenter.com',
    workshopAddress: 'Near Industrial Area, Alwar, Rajasthan - 301001',
    serviceCoverage: 'On-site measurement and project execution available across UP & Rajasthan',
    hours: 'Monday - Saturday: 8:30 AM – 7:30 PM (Sunday by Appointment)',
  },

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    pinterest: 'https://pinterest.com',
  },

  whatsappDefaultMessage: 'Hello Makhan Carpenter, I would like to discuss a custom furniture project for my home/office.',
};

export const featuredProjects: Project[] = [
  {
    id: 'walnut-fluted-wardrobe',
    title: 'The Sovereign Fluted Walnut Wardrobe',
    slug: 'sovereign-fluted-walnut-wardrobe',
    category: 'Wardrobes',
    subtitle: 'Floor-to-ceiling custom storage with integrated warm LED profiles and brass handles',
    shortDescription: 'Custom-designed floor-to-ceiling master wardrobe with fluted American walnut door fronts and soft-close internal organizers.',
    coverImage: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=85',
        caption: 'Full front perspective with fluted walnut paneling and ambient linear lighting',
        tag: 'Full View'
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
        caption: 'Interior drawer configuration with velvet-lined jewelry trays and sensor lights',
        tag: 'Internal Storage'
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
        caption: 'Milled fluted vertical battens and concealed soft-close German hinges',
        tag: 'Craftsmanship Detail'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
        caption: 'Natural hand-rubbed hardwax matte oil finish highlighting authentic grain',
        tag: 'Wood Finish'
      }
    ],
    projectStory: 'The client wanted a luxurious, monolithic wardrobe wall for their master suite in Alwar that provided clutter-free organization without overwhelming the room. Makhan Carpenter hand-selected matching walnut veneers and precision-milled over 120 vertical fluted solid wood battens to achieve seamless visual continuity.',
    clientRequirement: 'Complete floor-to-ceiling wardrobe with integrated sensor lighting, his-and-her sections, lockable compartments, and custom handles.',
    craftsmanshipHighlight: 'Continuous grain-matched veneer fronts with acoustic dampening backing and custom recessed bronze profile handles.',
    materials: ['American Black Walnut Veneer', 'BWP Marine Grade Plywood', 'Solid Brass Inset Hardware', 'Hafele Soft-close Runners'],
    finish: 'Natural Matte Polyurethane & Hand-rubbed Hardwax Oil',
    dimensions: '14 ft (W) × 9.5 ft (H) × 2 ft (D)',
    location: 'Alwar, Rajasthan',
    year: '2025',
    featured: true,
  },
  {
    id: 'solid-teak-live-edge-dining',
    title: 'Artisanal Teak Ten-Seater Dining Table',
    slug: 'artisanal-teak-dining-table',
    category: 'Dining',
    subtitle: 'Hand-shaped single-slab aesthetic with traditional mortise-and-tenon understructure',
    shortDescription: 'Monolithic solid Sagwan (Teak) dining table with sculpted chamfered edges and hand-turned solid wood base.',
    coverImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1400&q=85',
        caption: '10-seater solid teak centerpiece table with natural undulating grain',
        tag: 'Full View'
      },
      {
        url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=85',
        caption: 'Hand-planed top surface revealing natural golden-brown teak medullary rays',
        tag: 'Grain Detail'
      },
      {
        url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=1400&q=85',
        caption: 'Double-tenon interlocking leg joints with zero visible mechanical screws',
        tag: 'Joinery'
      }
    ],
    projectStory: 'Commissioned for a sprawling family villa in Uttar Pradesh, this table was built to serve as a generational heirloom. Makhan Carpenter hand-cured seasoned CP teak wood for optimal moisture equilibrium, followed by seven rounds of progressive hand-sanding down to 2000-grit.',
    clientRequirement: 'Durable, grand 10-seater dining surface capable of enduring daily family meals while serving as a formal hosting centerpiece.',
    craftsmanshipHighlight: '100% screwless interlocking carpentry joinery ensuring stability across seasonal moisture variations.',
    materials: ['First-Quality Seasoned CP Teak (Sagwan)', 'Traditional Mortise & Tenon Joinery', 'Food-safe Heat Resistant Topcoat'],
    finish: 'Satin Organic Hardwax Oil & Heat-Resistant Protective Sealant',
    dimensions: '10 ft (L) × 4 ft (W) × 30 in (H)',
    location: 'Lucknow, Uttar Pradesh',
    year: '2025',
    featured: true,
  },
  {
    id: 'scandinavian-oak-platform-bed',
    title: 'Nordic White Oak Floating Platform Bed',
    slug: 'nordic-white-oak-platform-bed',
    category: 'Bedroom',
    subtitle: 'Integrated floating cantilever nightstands and inclined acoustic upholstered headboard',
    shortDescription: 'Custom European White Oak king-size platform bed with concealed sub-frame support giving an effortless floating illusion.',
    coverImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
        caption: 'Minimalist low-profile floating silhouette with integrated soft base illumination',
        tag: 'Full View'
      },
      {
        url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=85',
        caption: 'Seamless bedside table with concealed wireless charging doc and soft-glide drawer',
        tag: 'Nightstand'
      },
      {
        url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85',
        caption: 'Finger-jointed solid oak corner detail demonstrating tight tolerances',
        tag: 'Corner Joinery'
      }
    ],
    projectStory: 'The homeowner sought a clean, tranquil retreat with serene Nordic aesthetics. Makhan Carpenter engineered a recessed steel-reinforced internal wooden skeleton that supports over 600 kg while keeping the outer oak frame hovering 8 inches above the floor.',
    clientRequirement: 'Floating platform bed, custom extended headboard wall, and noise-free acoustic bed slats.',
    craftsmanshipHighlight: 'Precision mitered 45-degree waterfall edges on both cantilevered side tables.',
    materials: ['European White Oak Solid Timber & Quarter-Cut Veneer', 'Kiln-Dried Hardwood Slats', 'German Hardware'],
    finish: 'Ultra-Matte Waterborne Polyurethane (Zero Yellowing)',
    dimensions: 'King Size (78 in × 72 in mattress size) with 11 ft Headboard Paneling',
    location: 'Noida (NCR / UP)',
    year: '2024',
    featured: true,
  },
  {
    id: 'matte-charcoal-modular-kitchen',
    title: 'Architectural Charcoal & Warm Oak Kitchen',
    slug: 'architectural-charcoal-oak-kitchen',
    category: 'Kitchen',
    subtitle: 'Bespoke handleless cabinetry with hydraulic bi-fold lift-ups and corner magic carousels',
    shortDescription: 'High-performance modular kitchen with anti-fingerprint acrylic charcoal base units and natural fluted oak island.',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
        caption: 'Open-concept layout showcasing seamless island countertop and fluted bar backing',
        tag: 'Full Kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
        caption: 'Pantry tall unit with tandem inner pull-outs holding up to 70kg per shelf',
        tag: 'Pantry System'
      },
      {
        url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85',
        caption: 'Under-cabinet routed micro-channel LED diffusers casting shadowless task light',
        tag: 'Lighting Detail'
      }
    ],
    projectStory: 'Transforming an outdated kitchen into an ergonomic culinary studio. Makhan Carpenter laser-measured the uneven structural brick walls, engineered custom filler profiles, and installed 100% moisture-proof marine ply carcasses with German Blum motion systems.',
    clientRequirement: 'Heavy-duty Indian kitchen durability with high-end European aesthetic, spice pullouts, and breakfast island.',
    craftsmanshipHighlight: '100% boiling-water-proof (BWP 710) internal carcasses with polyurethane edge banding for lifelong moisture seal.',
    materials: ['IS:710 Marine Grade Plywood', 'Soft-touch Anti-scratch Acrylic', 'Natural Oak Accents', 'Blum Tandembox Runners'],
    finish: 'Super-Matte Anti-Fingerprint & Natural PU Timber Finish',
    dimensions: '16 ft × 12 ft L-Shape with 8 ft × 3.5 ft Island',
    location: 'Alwar, Rajasthan',
    year: '2025',
    featured: true,
  },
  {
    id: 'executive-walnut-study',
    title: 'The Atelier Executive Desk & Library',
    slug: 'atelier-executive-desk-library',
    category: 'Office Furniture',
    subtitle: 'Cantilevered desk with wire management channels and floor-to-ceiling library shelving',
    shortDescription: 'Custom executive home office suite featuring a solid walnut floating desk, leather writing blotter inlay, and back-lit open shelving.',
    coverImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85',
        caption: 'Full study room panorama showing uninterrupted walnut grain across desk and bookshelf',
        tag: 'Executive Suite'
      },
      {
        url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1400&q=85',
        caption: 'Custom hidden magnetic cable channel and integrated flip-up charging ports',
        tag: 'Smart Detail'
      }
    ],
    projectStory: 'Built for a senior architect who required both functional drafting space and a dignified backdrop for client conferences. Makhan Carpenter engineered custom brass tension rods for the 9-foot shelving units to maintain absolute rigidity under heavy book loads.',
    clientRequirement: 'Heavy storage capacity, concealed wiring, elegant executive aura with warm wooden presence.',
    craftsmanshipHighlight: 'Concealed magnetic wire trays and hand-stitched saddle leather writing pad set flush into the walnut desktop.',
    materials: ['American Black Walnut', 'Vegetable-Tanned Saddle Leather', 'Brushed Brass Accents', 'Hardwood Veneer'],
    finish: 'Silky Hand-Rubbed Linseed & Wax Polish',
    dimensions: 'Desk: 7 ft × 3.5 ft | Library Wall: 12 ft × 9 ft',
    location: 'Agra, Uttar Pradesh',
    year: '2024',
    featured: true,
  },
  {
    id: 'carved-teak-pivot-door',
    title: 'Heritage Monolith Teak Pivot Entrance Door',
    slug: 'heritage-monolith-teak-pivot-door',
    category: 'Doors',
    subtitle: '9-foot oversized heavy pivot door with geometric relief carving and 360-degree weather sealing',
    shortDescription: 'Grand entrance pivot door handcrafted from seasoned CP Teak with subtle geometric fluting and a heavy brass pull bar.',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
        caption: '9-foot entrance with heavy-duty hydraulic floor pivot capable of handling 250kg',
        tag: 'Entrance View'
      },
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
        caption: 'Subtle hand-carved rhythmic flutes creating dynamic play of sunlight and shadow',
        tag: 'Carving Detail'
      }
    ],
    projectStory: 'Entrance doors establish the soul of a home. For this modern Haveli-inspired residence, Makhan Carpenter combined traditional Rajasthani woodcarving finesse with contemporary German floor-spring pivot technology.',
    clientRequirement: 'Monumental entrance door with effortless fingertip operation and extreme durability against exterior weather.',
    craftsmanshipHighlight: 'Internal anti-warp steel ladder core encapsulated in 45mm solid seasoned teak wood.',
    materials: ['100% Seasoned CP Teak Wood', 'Heavy-Duty Hydraulic Floor Spring', 'Solid Antiqued Brass 6ft Pull Handle'],
    finish: 'Exterior UV-Resistant Polyurethane Matt Varnish with Anti-fungal Sealant',
    dimensions: '9.5 ft (H) × 5 ft (W) × 65 mm (Thickness)',
    location: 'Alwar, Rajasthan',
    year: '2025',
    featured: false,
  },
  {
    id: 'slatted-wood-acoustic-media-unit',
    title: 'Bespoke Slatted Media Wall & Floating Credenza',
    slug: 'slatted-acoustic-media-wall',
    category: 'Living Room',
    subtitle: 'Acoustically tuned acoustic wooden battens with concealed speaker enclosures and floating console',
    shortDescription: 'Living room centerpiece with floor-to-ceiling slatted oak acoustic panels and a floating mitered entertainment console.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
        caption: 'Harmonious living room feature wall with warm ambient back-glow',
        tag: 'Full Living Area'
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
        caption: 'Mitered 45-degree seamless edges on the 10-foot floating TV console',
        tag: 'Joinery Detail'
      }
    ],
    projectStory: 'The client wanted an audiophile-grade media room that looked like a boutique art gallery. Makhan Carpenter calculated batten spacing for optimal acoustic diffusion and built concealed fabric speaker niches within the wooden wall.',
    clientRequirement: 'Hide all messy cables, accommodate a 75-inch display, integrate soundbar and subwoofers cleanly.',
    craftsmanshipHighlight: 'Push-to-open acoustic fabric-faced wooden doors that permit IR remote signals and audio pass-through.',
    materials: ['Natural White Oak', 'Acoustic Felt Backing', 'Moisture Resistant High-Density Board', 'Concealed LED Tracks'],
    finish: 'Natural Matte Hardwax Clear Sealant',
    dimensions: '14 ft (W) × 10 ft (H)',
    location: 'Ghaziabad (UP / NCR)',
    year: '2025',
    featured: true,
  },
  {
    id: 'bespoke-vanity-dressing-island',
    title: 'Custom Dressing Room & Jewelry Island',
    slug: 'custom-dressing-room-island',
    category: 'Wooden Interiors',
    subtitle: 'Glass-topped central display island with curved wooden fluted corners and motorized accessory trays',
    shortDescription: 'Walk-in dressing sanctuary featuring central glass jewelry island, fluted corners, and framed glass-fronted illuminated wardrobes.',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
        caption: 'Central accessory island with ultra-clear tempered glass top and fluted wooden radius',
        tag: 'Island View'
      },
      {
        url: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=85',
        caption: 'Full dressing room perimeter with custom vanity table and mirror frame',
        tag: 'Dressing Suite'
      }
    ],
    projectStory: 'A private client wanted a luxury boutique walk-in dressing suite. Makhan Carpenter crafted steam-bent curved wood corners for the central island to ensure smooth circulation and zero sharp edges.',
    clientRequirement: 'High-end dressing room with specialized compartments for watches, jewelry, ties, and handbags.',
    craftsmanshipHighlight: 'Steam-bent solid hardwood curved corners with precision CNC fluting and velvet inserts.',
    materials: ['Smoked Ash Veneer', 'Extra-Clear Low Iron Glass', 'Italian Velvet Drawer Lining', 'Solid Brass Trim'],
    finish: 'Smoked Ash Matte Lacquer',
    dimensions: 'Island: 5 ft × 3 ft | Dressing Room: 16 ft × 14 ft',
    location: 'Alwar, Rajasthan',
    year: '2024',
    featured: false,
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-furniture',
    title: 'Custom Furniture',
    shortDesc: 'Bespoke, made-to-measure furniture designed and handcrafted to match your space, style, and functional needs perfectly.',
    fullDesc: 'From unique sculptural credenzas to custom statement accent chairs, we craft one-of-a-kind furniture tailored to your exact architectural space, lifestyle, and aesthetic sensibilities.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80',
    features: [
      '100% Made-to-measure custom dimensions',
      'Handcrafted solid wood joinery (Sagwan, Walnut, Oak)',
      '3D ergonomic prototyping & sample wood approval',
      'Lifelong structural warranty'
    ],
    suitableFor: 'Living rooms, luxury villas, boutique lounges, executive suites',
    popularWoods: ['CP Teak (Sagwan)', 'American Walnut', 'White Oak', 'Rosewood (Sheesham)']
  },
  {
    id: 'wardrobes',
    title: 'Wardrobes & Closets',
    shortDesc: 'Modern sliding, walk-in, and hinged wardrobes with customized storage layouts, sensor lighting, and premium finishes.',
    fullDesc: 'We design intelligent wardrobe solutions that maximize vertical storage while adding architectural elegance to your bedroom. Incorporating velvet organizers, pull-down hanging rails, and integrated ambient lighting.',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=80',
    features: [
      'Floor-to-ceiling seamless configurations',
      'Fluted wood, tinted glass, or veneer shutters',
      'Heavy-duty soft-close German sliding/hinge mechanisms',
      'Smart sensor LED lighting profiles'
    ],
    suitableFor: 'Master suites, guest bedrooms, walk-in closets, dressing suites',
    popularWoods: ['Walnut Veneer', 'BWP Marine Ply', 'Smoked Ash', 'Fluted Teak']
  },
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens',
    shortDesc: 'High-end functional kitchen woodwork engineered with water-resistant marine ply, anti-scratch finishes, and smart organizers.',
    fullDesc: 'Kitchens built specifically for Indian cooking habits. We use 100% Boiling Water Proof (BWP IS:710) plywood, waterproof PU edge sealing, and smooth Blum/Hafele hardware for decades of effortless cooking.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
    features: [
      'IS:710 Certified 100% Marine Grade Plywood',
      'Anti-fingerprint acrylic & fluted wooden accents',
      'Corner magic carousels & heavy tandem pull-outs',
      'Ergonomic workflow planning (Work Triangle)'
    ],
    suitableFor: 'Modern residences, luxury apartments, farmhouses',
    popularWoods: ['BWP Marine Ply', 'Natural Oak Accents', 'High-Gloss & Matte Acrylic']
  },
  {
    id: 'wooden-beds',
    title: 'Wooden Beds & Headboards',
    shortDesc: 'Strong, elegant, and custom-designed wooden beds with floating platforms, storage hydraulic systems, and statement headboards.',
    fullDesc: 'Experience deep rest on handcrafted wooden beds engineered for zero creaking. From low-slung Japanese platform beds to grand upholstered headboard frames, every piece is built for generational comfort.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    features: [
      'Heavy-duty hydraulic lift storage options',
      'Reinforced internal skeletons with acoustic slats',
      'Integrated floating nightstands & wireless power slots',
      'Custom fabric / leatherette upholstered backrests'
    ],
    suitableFor: 'Master bedrooms, luxury guest suites, vacation homes',
    popularWoods: ['Solid Teak Wood', 'American Walnut', 'White Oak', 'Steamed Beech']
  },
  {
    id: 'dining-tables',
    title: 'Dining Tables & Seating',
    shortDesc: 'Handcrafted solid wood dining tables designed for memorable family gatherings and luxury residential spaces.',
    fullDesc: 'Dining tables are the heart of family memories. We hand-select solid slabs of seasoned Teak and Walnut, sculpting delicate chamfered edges and rock-solid interlocking joinery without flimsy hardware.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=900&q=80',
    features: [
      '6, 8, 10 & 12-seater custom configurations',
      'Heat, stain, and water-resistant protective finishes',
      'Matching solid wood benches and ergonomic chairs',
      'Live-edge and contemporary rectangular profiles'
    ],
    suitableFor: 'Dining rooms, formal banquet spaces, open-plan kitchen diners',
    popularWoods: ['CP Teak (Sagwan)', 'American Walnut', 'Sheesham', 'Acacia Hardwood']
  },
  {
    id: 'office-furniture',
    title: 'Office Furniture & Workstations',
    shortDesc: 'Custom executive desks, conference tables, library shelving, and ergonomic storage solutions.',
    fullDesc: 'Elevate your workday with bespoke executive desks, floating credenzas, and custom study libraries designed with concealed cable canals and tactile natural timber surfaces.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    features: [
      'Concealed magnetic cable management channels',
      'Floor-to-ceiling library display shelving with back-lighting',
      'Leather inlay work surfaces & soft-glide drawers',
      'Custom acoustic wooden paneling for privacy'
    ],
    suitableFor: 'Home offices, corporate director chambers, legal libraries',
    popularWoods: ['American Walnut', 'Smoked Oak', 'Rosewood', 'Matte Laminate on Marine Ply']
  },
  {
    id: 'wooden-doors',
    title: 'Main & Interior Wooden Doors',
    shortDesc: 'Monumental main pivot doors and interior flush doors with custom carving, fluting, and premium hardware.',
    fullDesc: 'Make a magnificent first impression. We construct anti-warp solid teak pivot doors and sound-insulating internal doors with hand-carved textures and high-security German locks.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    features: [
      'Heavy pivot doors up to 10-feet tall',
      'Anti-warp steel reinforced internal cores',
      '360-degree weather sealing & acoustic gaskets',
      'Custom brass pull handles and luxury digital lock integration'
    ],
    suitableFor: 'Villa main entrances, grand bedroom doors, pooja room doors',
    popularWoods: ['CP Teak (Sagwan)', 'Solid White Ash', 'Solid Mahogany']
  },
  {
    id: 'interior-woodwork',
    title: 'Interior Woodwork & Paneling',
    shortDesc: 'Complete architectural woodwork solutions including fluted wall paneling, ceiling rafters, TV units, and partitions.',
    fullDesc: 'Transform plain bare walls into warm, luxurious architectural statements with our custom fluted wooden panels, slatted room dividers, concealed jib doors, and suspended timber ceiling baffles.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    features: [
      'Precision CNC and hand-crafted fluted battens',
      'Acoustic felt-backed wooden sound dampening panels',
      'Seamless invisible jib doors flush with walls',
      'Integrated LED channel illumination'
    ],
    suitableFor: 'Living room feature walls, corridors, home theaters, stairwells',
    popularWoods: ['Natural Wood Veneers', 'Solid Oak Slats', 'Charcoal & PU Panels']
  }
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Requirement & Consultation',
    subtitle: 'Listening to Your Vision',
    description: 'We discuss your lifestyle needs, aesthetic preferences, spatial constraints, and functional requirements in detail over coffee or call.',
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Design brief & material moodboard alignment'
  },
  {
    stepNumber: '02',
    title: 'Laser Precision Measurement',
    subtitle: 'Millimeter-Accurate Site Survey',
    description: 'Makhan Carpenter conducts a rigorous on-site laser survey to map exact wall angles, plumbing lines, electrical points, and ceiling levels.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    keyAction: 'On-site digital measurement in UP / Alwar'
  },
  {
    stepNumber: '03',
    title: 'Material & Grain Curation',
    subtitle: 'Selecting Only the Finest Timbers',
    description: 'We personally inspect and select seasoned teak, walnut, oak, and marine-grade plywood with ideal grain character and moisture balance.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Curing & hand-selecting prime timber logs'
  },
  {
    stepNumber: '04',
    title: 'Precision Cutting & Shaping',
    subtitle: 'Master Woodcraft at the Workshop',
    description: 'Using high-precision saws and traditional hand planes, raw wood is sized, jointed, and planed to glass-smooth flatness.',
    image: 'https://images.unsplash.com/photo-1502005229762-ee1b2da9c5dd?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Hand-planing & precision angle milling'
  },
  {
    stepNumber: '05',
    title: 'Traditional Joinery & Assembly',
    subtitle: 'Rock-Solid Structural Integrity',
    description: 'We employ classic mortise-and-tenon, dovetail, and reinforced biscuit joinery so your furniture never sags, wobbles, or creaks.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Interlocking wood joinery without flimsy screws'
  },
  {
    stepNumber: '06',
    title: 'Multi-Stage Sanding & Finishing',
    subtitle: 'Tactile Silk-Smooth Touch',
    description: 'Up to 5 rounds of progressive hand-sanding followed by premium Italian PU, hardwax oil, or natural polish to bring out rich wood grain.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Hand-rubbed organic oils & protective topcoats'
  },
  {
    stepNumber: '07',
    title: 'White-Glove Site Installation',
    subtitle: 'Flawless Fit on Location',
    description: 'Our trusted team carefully transports, aligns, and secures the furniture in your home with zero mess and immaculate clean-up.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Careful transport & zero-dust installation'
  },
  {
    stepNumber: '08',
    title: 'Final Quality Inspection & Handover',
    subtitle: 'Delivering Perfection',
    description: 'Makhan Carpenter personally inspects every hinge, drawer slide, surface finish, and edge before handing over your bespoke piece.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Client walkthrough & maintenance guidance'
  }
];

export const beforeAfterCases: BeforeAfterItem[] = [
  {
    id: 'wardrobe-transformation',
    title: 'Empty Bedroom Wall → Bespoke Fluted Wardrobe',
    category: 'Wardrobes',
    description: 'From an awkward, bare concrete wall with exposed beams to a majestic floor-to-ceiling fluted walnut wardrobe with warm LED channel illumination.',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80',
    beforeLabel: 'Bare Wall Space',
    afterLabel: 'Custom Finished Wardrobe',
    location: 'Alwar, Rajasthan',
    resultSummary: 'Increased storage capacity by 300% with seamless wall integration.'
  },
  {
    id: 'kitchen-transformation',
    title: 'Bare Civil Shell → Luxury Minimalist Modular Kitchen',
    category: 'Kitchen',
    description: 'Transforming an unfinished concrete shell into an ultra-modern modular kitchen featuring soft-touch charcoal cabinets and fluted oak breakfast island.',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    beforeLabel: 'Raw Brick Shell',
    afterLabel: 'Completed Modular Kitchen',
    location: 'Noida (NCR / UP)',
    resultSummary: '100% boiling-water-proof construction with soft-close German fittings.'
  },
  {
    id: 'timber-dining-transformation',
    title: 'Raw Timber Slabs → 10-Seater Heirloom Teak Dining Table',
    category: 'Dining',
    description: 'Witnessing rough-sawn raw logs transformed into a silky smooth, hand-planed 10-seater CP Teak dining table with traditional mortise-and-tenon joints.',
    beforeImage: 'https://images.unsplash.com/photo-1502005229762-ee1b2da9c5dd?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80',
    beforeLabel: 'Raw Lumber',
    afterLabel: 'Finished Hand-Rubbed Table',
    location: 'Lucknow, Uttar Pradesh',
    resultSummary: 'Natural grain emphasized with zero synthetic stain; sealed for decades.'
  },
  {
    id: 'living-wall-transformation',
    title: 'Plain Wall → Slatted Acoustic Wall & Floating Console',
    category: 'Living Room',
    description: 'Converting a plain white plaster wall with dangling wires into an acoustically treated slatted oak architectural feature with concealed wiring and ambient back-glow.',
    beforeImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    beforeLabel: 'Plain Plaster Wall',
    afterLabel: 'Architectural Media Wall',
    location: 'Alwar, Rajasthan',
    resultSummary: 'Eliminated all messy cords while improving living room acoustics.'
  }
];

export const materialsData: MaterialItem[] = [
  {
    id: 'cp-teak-sagwan',
    name: 'Seasoned CP Teak (Sagwan)',
    category: 'Natural Solid Wood',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    description: 'The golden standard of Indian woodcraft. Naturally rich in protective oils, highly resistant to termites, moisture, and warping across decades.',
    grainCharacter: 'Distinct straight to wavy golden-brown grain with rich natural luster',
    durability: 'Generational (50+ years)',
    bestFor: 'Dining tables, entrance doors, solid wood beds, heritage furniture',
    finishType: 'Hardwax oil, PU clear coat, natural beeswax polish'
  },
  {
    id: 'american-walnut',
    name: 'American Black Walnut',
    category: 'Natural Solid Wood',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
    description: 'A prized luxury timber celebrated worldwide for its deep chocolate brown hues, silky hand-feel, and exceptional dimensional stability.',
    grainCharacter: 'Tight, flowing curls and rich dark espresso undertones',
    durability: 'High (40+ years)',
    bestFor: 'Executive desks, fluted wardrobe shutters, accent chairs, credenzas',
    finishType: 'Ultra-matte polyurethane, organic Danish oil'
  },
  {
    id: 'european-white-oak',
    name: 'European White Oak',
    category: 'Natural Solid Wood',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    description: 'Crisp, contemporary, and exceptionally durable. Perfect for Scandinavian, Japandi, and modern minimalist architectural interiors.',
    grainCharacter: 'Prominent ray fleck patterns with warm sandy-beige undertones',
    durability: 'Very High (40+ years)',
    bestFor: 'Floating platform beds, acoustic slatted paneling, dining chairs',
    finishType: 'Waterborne invisible matte finish, bleached white wash'
  },
  {
    id: 'marine-plywood-710',
    name: 'IS:710 Marine Grade BWP Plywood',
    category: 'Engineered Wood',
    image: 'https://images.unsplash.com/photo-1502005229762-ee1b2da9c5dd?auto=format&fit=crop&w=800&q=80',
    description: 'Boiling Water Proof calibrated hardwood plywood bonded with phenolic resins. Immune to borer, termite attacks, and severe moisture.',
    grainCharacter: 'Calibrated ultra-flat cross-laminated hardwood veneers',
    durability: 'Lifetime Structural (30+ years)',
    bestFor: 'Modular kitchen carcasses, bathroom vanities, wardrobe internal carcasses',
    finishType: 'Laminate pressed, veneer pressed, PU lacquered'
  },
  {
    id: 'natural-wood-veneers',
    name: 'Hand-Matched Natural Wood Veneers',
    category: 'Finishes & Veneer',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    description: 'Real sliced tree cross-sections providing authentic grain warmth on large seamless panels without excessive weight or forest depletion.',
    grainCharacter: 'Book-matched, slip-matched, and crown-cut natural wood patterns',
    durability: 'High (protected by multi-coat lacquer)',
    bestFor: 'Living room wall paneling, wardrobe doors, console tops',
    finishType: 'Polyester high gloss, open-pore matte, textured wire-brushed'
  },
  {
    id: 'architectural-hardware',
    name: 'Architectural German & Brass Hardware',
    category: 'Architectural Hardware',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    description: 'Precision-tested soft-close hinges, concealed drawer runners, heavy-duty floor pivots, and solid brushed brass handles.',
    grainCharacter: 'Brushed matte brass, antiqued bronze, and concealed zinc alloy',
    durability: '200,000+ cycle tested (25+ years)',
    bestFor: 'All drawer runners, door hinges, lift-up cabinets, wardrobe sliding gear',
    finishType: 'PVD Coated Brushed Gold, Matte Charcoal, Antique Bronze'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rajesh & Meenakshi Sharma',
    location: 'Alwar, Rajasthan',
    projectType: 'Complete Villa Woodwork & Modular Kitchen',
    quote: 'Makhan Carpenter delivered woodwork of exceptional quality for our new residence in Alwar. His attention to joint precision, smooth drawer movement, and wood finish exceeded our expectations. Truly a master craftsman.',
    rating: 5,
    date: 'January 2025'
  },
  {
    id: 't-2',
    name: 'Vikramaditya Singhania',
    location: 'Lucknow, Uttar Pradesh',
    projectType: 'Custom Teak Dining & Master Wardrobe Suite',
    quote: 'We commissioned a 10-seater solid CP teak dining table and fluted master wardrobes. The grain matching and silky hand-feel are equivalent to international luxury furniture studios. Makhan is honest, punctual, and remarkably skilled.',
    rating: 5,
    date: 'November 2024'
  },
  {
    id: 't-3',
    name: 'Ananya Verma (Architect)',
    location: 'Noida (UP / NCR)',
    projectType: 'Scandinavian Platform Bed & Acoustic Media Wall',
    quote: 'As an architect, I am extremely particular about millimeter clearances and edge finishing. Makhan executed our custom floating bed and slatted media wall with zero errors. He understands drawings effortlessly.',
    rating: 5,
    date: 'December 2024'
  },
  {
    id: 't-4',
    name: 'Col. Harshvardhan Rathore (Retd.)',
    location: 'Alwar, Rajasthan',
    projectType: 'Heirloom Teak Entrance Door & Study Library',
    quote: 'The 9-foot heavy pivot door Makhan built for our home is admired by every single guest. It moves with the gentle touch of a finger. Outstanding craftsmanship and reliable after-service.',
    rating: 5,
    date: 'February 2025'
  }
];

export const statisticsData: StatItem[] = [
  {
    value: '20+',
    numericValue: 20,
    suffix: '+',
    label: 'Years of Woodworking Mastery',
    description: 'Two decades of dedicated craftsmanship across Uttar Pradesh & Rajasthan.'
  },
  {
    value: '450+',
    numericValue: 450,
    suffix: '+',
    label: 'Bespoke Projects Delivered',
    description: 'Custom residences, luxury apartments, and boutique commercial spaces.'
  },
  {
    value: '380+',
    numericValue: 380,
    suffix: '+',
    label: 'Delighted Homeowners',
    description: 'Generational clients who trust Makhan for every wooden addition in their homes.'
  },
  {
    value: '100%',
    numericValue: 100,
    suffix: '%',
    label: 'Made-to-Measure Precision',
    description: 'Zero generic mass-production. Every piece engineered for your exact space.'
  }
];

export const whyChoosePillars = [
  {
    icon: 'Hammer',
    title: '20+ Years Master Craftsmanship',
    description: 'Hands-on expertise honed over two decades of fine carpentry across UP and Alwar, solving complex architectural challenges with ease.'
  },
  {
    icon: 'Ruler',
    title: '100% Made-to-Measure',
    description: 'Every wardrobe, kitchen, and bed is measured and tailored to your unique room contours for seamless, flush integration.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Authentic Cured Timber',
    description: 'We strictly work with seasoned CP Teak, authentic American Walnut, White Oak, and certified IS:710 Marine Grade plywood.'
  },
  {
    icon: 'Compass',
    title: 'Millimeter Precision Joinery',
    description: 'Classical interlocking mortise-and-tenon and dovetail joinery for structural stability that outlasts cheap fasteners.'
  },
  {
    icon: 'Sparkles',
    title: 'Hand-Rubbed Luxury Finish',
    description: 'Multi-stage sanding up to 2000 grit, finished with Italian Polyurethane, Danish oils, and protective organic waxes.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Transparent Pricing & Trust',
    description: 'Direct craftsman pricing with clear material breakdown, zero hidden markups, and reliable on-time handover.'
  }
];

export const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85',
    title: 'Floor-to-Ceiling Fluted Walnut Wardrobe',
    category: 'Wardrobes',
    location: 'Alwar, Rajasthan'
  },
  {
    url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85',
    title: '10-Seater Solid Sagwan Dining Table',
    category: 'Dining',
    location: 'Lucknow, UP'
  },
  {
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    title: 'European White Oak Floating Platform Bed',
    category: 'Bedroom',
    location: 'Noida (UP)'
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    title: 'Charcoal & Oak Minimalist Modular Kitchen',
    category: 'Kitchens',
    location: 'Alwar, Rajasthan'
  },
  {
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
    title: 'Executive Study Desk & Integrated Bookshelf',
    category: 'Offices',
    location: 'Agra, UP'
  },
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    title: 'Carved Teak Grand Pivot Main Door',
    category: 'Doors',
    location: 'Alwar, Rajasthan'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    title: 'Acoustic Slatted Oak Media Wall Paneling',
    category: 'Woodwork',
    location: 'Ghaziabad, UP'
  },
  {
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    title: 'Boutique Dressing Suite & Glass Jewelry Island',
    category: 'Furniture',
    location: 'Alwar, Rajasthan'
  },
  {
    url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85',
    title: 'Master Carpenter Hand-Planing Seasoned Timber',
    category: 'Details',
    location: 'Workshop Atelier'
  }
];
