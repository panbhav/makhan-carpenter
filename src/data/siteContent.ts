import type {
  Project,
  ServiceItem,
  ProcessStep,
  BeforeAfterItem,
  MaterialItem,
  Testimonial,
  StatItem,
  FurnitureStyle,
  RoomPossibility
} from '../types';

export const siteConfig = {
  brandName: 'MAKHAN CARPENTER',
  brandShortName: 'Makhan',
  tagline: 'Crafted with Experience. Designed for Your Space.',
  subheading: 'Custom furniture and premium woodwork made with skill, precision and attention to detail.',
  experienceYears: '20+',
  projectsCompleted: '500+',
  
  location: {
    address: 'Rath Nagar, Alwar, Rajasthan, India',
    city: 'Alwar',
    state: 'Rajasthan',
    country: 'India',
    serviceAreas: 'Alwar, Rajasthan and Uttar Pradesh (UP)',
  },

  contact: {
    phonePrimary: '+91 6377935958',
    phonePrimaryRaw: '+916377935958',
    phoneSecondary: '+91 9310632611',
    phoneSecondaryRaw: '+919310632611',
    whatsappPrimary: '+91 6377935958',
    whatsappPrimaryRaw: '916377935958',
    email: 'contact@makhancarpenter.com',
    hours: 'Monday - Saturday: 8:30 AM – 8:00 PM (Sunday by Appointment)',
  },

  whatsappMessages: {
    en: 'Hello Makhan Carpenter, I would like to discuss a custom furniture project.',
    hi: 'नमस्ते Makhan Carpenter, मुझे अपने फर्नीचर के काम के बारे में जानकारी चाहिए।',
  },

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
};

export const statisticsData: StatItem[] = [
  {
    value: '20+',
    numericValue: 20,
    suffix: '+',
    label: 'Years of Experience',
    labelHi: 'वर्षों का अनुभव',
    description: 'Two decades of hands-on woodworking mastery in Alwar & UP.',
    descriptionHi: 'अलवर और उत्तर प्रदेश में दो दशकों से अधिक का लकड़ी कारीगरी का अनुभव।'
  },
  {
    value: '500+',
    numericValue: 500,
    suffix: '+',
    label: 'Projects Completed',
    labelHi: 'पूरे किए गए प्रोजेक्ट्स',
    description: 'Custom wardrobes, beds, modular kitchens & full home woodwork.',
    descriptionHi: '500 से अधिक सफल होम, विला और ऑफिस फर्नीचर प्रोजेक्ट्स।'
  },
  {
    value: '2',
    numericValue: 2,
    suffix: '',
    label: 'Major Service Regions',
    labelHi: 'प्रमुख सेवा क्षेत्र',
    description: 'Alwar, Rajasthan and across Uttar Pradesh (UP).',
    descriptionHi: 'अलवर (राजस्थान) और सम्पूर्ण उत्तर प्रदेश (UP)।'
  },
  {
    value: 'Custom',
    numericValue: 100,
    suffix: '',
    label: 'Furniture & Woodwork',
    labelHi: 'कस्टम फर्नीचर और वुडवर्क',
    description: 'Every piece made-to-measure according to your space.',
    descriptionHi: 'आपकी जगह, नाप और पसंद के अनुसार 100% अनुकूलित।'
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-furniture',
    number: '01',
    title: 'Custom Furniture',
    titleHi: 'कस्टम फर्नीचर',
    shortDesc: 'Furniture designed and built according to the customer\'s space and requirements.',
    shortDescHi: 'ग्राहक की जगह, नाप और आवश्यकतानुसार बनाया जाने वाला विशेष फर्नीचर।',
    fullDesc: 'We craft bespoke furniture pieces tailored to your exact floor plan, interior theme, and ergonomic requirements with durable joinery and hand-rubbed finishes.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80',
    features: [
      'Made-to-measure dimensions',
      'Solid wood joinery (Teak, Walnut, Oak)',
      'Custom stain & polish options',
      'Long-lasting structural strength'
    ],
    suitableFor: 'Living rooms, bedrooms, villas, commercial spaces',
    popularWoods: ['CP Teak (Sagwan)', 'Sheesham', 'American Walnut']
  },
  {
    id: 'beds',
    number: '02',
    title: 'Beds',
    titleHi: 'लकड़ी के बेड',
    shortDesc: 'Custom wooden beds in modern, classic and contemporary designs.',
    shortDescHi: 'मॉडर्न, क्लासिक और स्टोरेज वाले मजबूत लकड़ी के बेड।',
    fullDesc: 'Handcrafted solid wood beds engineered for zero creaking, featuring custom headboard paneling, hydraulic under-bed storage, and floating platform styles.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    features: [
      'Heavy-duty hydraulic lift storage options',
      'Acoustic slat understructure',
      'Designer cushioned / wooden headboards',
      'King, Queen & Custom sizes'
    ],
    suitableFor: 'Master bedrooms, guest rooms, kids rooms',
    popularWoods: ['Solid Teak Wood', 'White Oak', 'Hardwood Plywood']
  },
  {
    id: 'sofas',
    number: '03',
    title: 'Sofas',
    titleHi: 'सोफा फ्रेम्स और सेट',
    shortDesc: 'Custom-designed wooden sofa structures and premium furniture solutions.',
    shortDescHi: 'मजबूत लकड़ी के सोफा फ्रेम और सुंदर लिविंग रूम सिटिंग।',
    fullDesc: 'Custom-built solid timber sofa frameworks, L-shaped sectional sofa bases, and contemporary wooden accent seating made for comfort and generational longevity.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
    features: [
      'Heavy-duty solid hardwood inner frame',
      'L-shape sectional and 3+2+1 configurations',
      'Integrated armrest storage & cup holders',
      'Fabric & leatherette compatibility'
    ],
    suitableFor: 'Living rooms, drawing rooms, office lounges',
    popularWoods: ['Seasoned Teak', 'Marandi Hardwood', 'Sal Wood']
  },
  {
    id: 'wardrobes',
    number: '04',
    title: 'Wardrobes',
    titleHi: 'कस्टम अलमारियां',
    shortDesc: 'Custom wardrobes designed around available space, storage requirements and preferred style.',
    shortDescHi: 'उपलब्ध जगह और जरूरत के अनुसार बनाई गई फ्लोर-टू-सीलिंग अलमारियां।',
    fullDesc: 'Floor-to-ceiling sliding, hinged, and walk-in wardrobes with customized drawer organizers, sensor lights, and premium acrylic, veneer, or fluted shutters.',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=80',
    features: [
      'Floor-to-ceiling seamless storage',
      'Smooth soft-close sliding / hinged shutters',
      'Integrated jewelry trays & tie racks',
      'Fluted wood, glass, or laminate finishes'
    ],
    suitableFor: 'Master bedrooms, dressing areas, walk-in closets',
    popularWoods: ['BWP Marine Ply', 'Natural Veneer', 'Fluted Teak']
  },
  {
    id: 'modular-kitchens',
    number: '05',
    title: 'Modular Kitchens',
    titleHi: 'मॉड्यूलर किचन',
    shortDesc: 'Functional and stylish kitchen woodwork designed for individual spaces.',
    shortDescHi: 'वाटरप्रूफ मरीन प्लाई और आधुनिक फिटिंग्स से बनी मॉड्यूलर किचन।',
    fullDesc: 'Custom modular kitchens engineered for Indian cooking with 100% boiling-water-proof (IS:710) plywood, soft-close baskets, and corner carousel organizers.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
    features: [
      '100% BWP IS:710 Marine Grade Plywood',
      'Heavy-duty tandem drawer pull-outs',
      'Anti-fingerprint matte & acrylic shutters',
      'Ergonomic storage planning'
    ],
    suitableFor: 'Kitchens, pantry rooms, kitchen breakfast islands',
    popularWoods: ['IS:710 Marine Ply', 'Acrylic Surfaces', 'Solid Oak Trim']
  },
  {
    id: 'dining-tables',
    number: '06',
    title: 'Dining Tables',
    titleHi: 'डाइनिंग टेबल और कुर्सियां',
    shortDesc: 'Custom dining tables in different sizes, shapes, wood finishes and designs.',
    shortDescHi: 'ठोस लकड़ी से बनी 6, 8 व 10 सीटर डाइनिंग टेबल।',
    fullDesc: 'Solid wood 6, 8, 10, and 12-seater dining tables crafted with interlocking carpentry joinery, heat-resistant topcoats, and matching solid timber chairs and benches.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=900&q=80',
    features: [
      'Solid CP Teak & Walnut single-slab aesthetic',
      'Stain & heat-resistant protective clear finish',
      'Interlocking mortise & tenon leg joinery',
      'Custom matching seating benches & chairs'
    ],
    suitableFor: 'Dining rooms, open kitchen-diners, villas',
    popularWoods: ['CP Teak (Sagwan)', 'American Walnut', 'Sheesham']
  },
  {
    id: 'tv-units',
    number: '07',
    title: 'TV Units',
    titleHi: 'टीवी यूनिट्स और मीडिया वॉल',
    shortDesc: 'Modern and traditional TV units designed to complement the room.',
    shortDescHi: 'कमरे की सुंदरता बढ़ाने वाली मॉडर्न और ट्रेडिशनल टीवी यूनिट्स।',
    fullDesc: 'Floating TV consoles, floor-to-ceiling slatted back paneling, integrated ambient LED channels, and concealed cable routing for a clean living room look.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    features: [
      'Concealed wire management channels',
      'Floating media storage consoles',
      'Fluted wooden back panels with LED lighting',
      'Push-to-open soft-close drawers'
    ],
    suitableFor: 'Living rooms, master bedrooms, entertainment lounges',
    popularWoods: ['Oak Veneer', 'Fluted Battens', 'Matte Charcoal Panels']
  },
  {
    id: 'office-furniture',
    number: '08',
    title: 'Office Furniture',
    titleHi: 'ऑफिस फर्नीचर',
    shortDesc: 'Custom desks, storage units, cabinets, tables and other office woodwork.',
    shortDescHi: 'कस्टम एग्जीक्यूटिव डेस्क, बुकशेल्फ और वर्कस्टेशन।',
    fullDesc: 'Custom executive desks, conference tables, director study tables, and back-lit library display shelves built with clean wire grommets and lockable drawers.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    features: [
      'Integrated wire management channels',
      'Lockable drawer units & file organizers',
      'Floor-to-ceiling library display shelving',
      'Solid wood & veneer finishes'
    ],
    suitableFor: 'Home offices, chambers, corporate conference rooms',
    popularWoods: ['American Walnut', 'Teak Wood', 'Laminate on Marine Ply']
  },
  {
    id: 'wooden-doors',
    number: '09',
    title: 'Wooden Doors',
    titleHi: 'लकड़ी के मुख्य व अंदरूनी दरवाजे',
    shortDesc: 'Custom wooden doors with different traditional and modern design options.',
    shortDescHi: 'मजबूत सागवान की मुख्य pivot और अंदरूनी डिजाइनर दरवाजे।',
    fullDesc: 'Monumental main pivot entrance doors and interior flush doors with solid teak wood construction, carved geometric fluting, and heavy-duty brass pull handles.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    features: [
      'Anti-warp heavy solid teak construction',
      'Heavy-duty hydraulic pivot systems',
      '360-degree weather sealing',
      'Custom brass handle & lock integration'
    ],
    suitableFor: 'Main villa entrances, bedroom doors, pooja room doors',
    popularWoods: ['CP Teak (Sagwan)', 'Solid White Ash', 'Hardwood']
  },
  {
    id: 'interior-woodwork',
    number: '10',
    title: 'Interior Woodwork',
    titleHi: 'सम्पूर्ण इंटीरियर वुडवर्क',
    shortDesc: 'Complete woodwork solutions for homes, offices and other spaces.',
    shortDescHi: 'घर, ऑफिस और विला के लिए सम्पूर्ण लकड़ी का काम व पैनलिंग।',
    fullDesc: 'End-to-end architectural woodwork including ceiling rafters, decorative partition jaalis, fluted wall paneling, and concealed doorway paneling.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    features: [
      'Precision fluted wooden battens',
      'Suspended ceiling beams & rafters',
      'Decorative wooden partitions & jaalis',
      'Integrated LED channel illumination'
    ],
    suitableFor: 'Complete residences, stairwells, lobbies, duplexes',
    popularWoods: ['Natural Veneers', 'Solid Timber Battens', 'Marine Ply']
  },
  {
    id: 'kids-playrooms',
    number: '11',
    title: 'Kids\' Play Rooms',
    titleHi: 'बच्चों के प्लेरूम और स्टडी फर्नीचर',
    shortDesc: 'Custom wooden playroom furniture and creative wooden spaces designed for children.',
    shortDescHi: 'बच्चों के लिए सुरक्षित, राउंडेड कोनों वाले प्लेरूम व स्टडी यूनिट्स।',
    fullDesc: 'Safe, rounded-edge kids beds, multi-compartment toy organizers, study desks, and creative wooden playhouse structures built with non-toxic, child-safe finishes.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    features: [
      'Smooth rounded corners with zero sharp edges',
      'Multi-level toy & book storage units',
      'Ergonomic adjustable study workstations',
      'Child-safe eco-friendly non-toxic finishes'
    ],
    suitableFor: 'Children bedrooms, play areas, study corners',
    popularWoods: ['Solid Pine / Oak', 'Calibrated Hardwood Plywood', 'Soft-touch Laminate']
  },
  {
    id: 'other-custom-work',
    number: '12',
    title: 'Other Custom Work',
    titleHi: 'अन्य विशेष कस्टम कार्य',
    shortDesc: 'If a customer has a unique furniture idea, Makhan Carpenter can discuss and create a customized solution.',
    shortDescHi: 'यदि आपके पास कोई विशेष फर्नीचर आइडिया है, तो हम उसे तैयार कर सकते हैं।',
    fullDesc: 'Have a unique sketch, custom pooja mandir requirement, curved counter, or custom wooden staircase handrail? We discuss the concept, calculate measurements, and bring it to life.',
    image: 'https://images.unsplash.com/photo-1502005229762-ee1b2da9c5dd?auto=format&fit=crop&w=900&q=80',
    features: [
      'Custom pooja units & carved mandirs',
      'Unique curved counters & bar cabinets',
      'Custom staircase wooden cladding & railings',
      'Bespoke architectural requests'
    ],
    suitableFor: 'Unique spaces, specialty requirements, custom home corners',
    popularWoods: ['Custom as requested']
  }
];

export const furnitureStyles: FurnitureStyle[] = [
  {
    id: 'modern',
    name: 'Modern',
    nameHi: 'मॉडर्न (Modern)',
    description: 'Clean horizontal lines, sleek handleless surfaces, and uncluttered geometry for contemporary homes.',
    descriptionHi: 'साफ लाइनें और हैंडल-लेस आधुनिक डिज़ाइन।',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['Sleek Lines', 'Flush Panels', 'LED Accents']
  },
  {
    id: 'minimal',
    name: 'Minimal',
    nameHi: 'मिनिमल (Minimal)',
    description: 'Quiet elegance that focuses on proportion, functionality, and spaciousness with zero visual clutter.',
    descriptionHi: 'सरल, शांत और खुला डिज़ाइन।',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    tags: ['Pure Forms', 'Natural Tones', 'Hidden Storage']
  },
  {
    id: 'contemporary',
    name: 'Contemporary',
    nameHi: 'कंटेम्परेरी (Contemporary)',
    description: 'Fluid blend of current design trends with warm wood textures, fluted details, and matte contrasts.',
    descriptionHi: 'ट्रेंडी डिज़ाइन और लकड़ी की सुंदर फिनिश।',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
    tags: ['Fluted Profiles', 'Matte Surfaces', 'Smart Fittings']
  },
  {
    id: 'traditional',
    name: 'Traditional & Classic',
    nameHi: 'ट्रेडिशनल व क्लासिक (Traditional)',
    description: 'Timeless solid teak construction with authentic Indian woodcraft details, robust moldings, and rich tones.',
    descriptionHi: 'पारंपरिक भारतीय शैली, नक्काशी और मजबूत सागवान।',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    tags: ['Solid Teak', 'Classic Moldings', 'Heirloom Joinery']
  },
  {
    id: 'luxury',
    name: 'Luxury & Bespoke',
    nameHi: 'लक्ज़री (Luxury)',
    description: 'High-end American walnut, brushed brass trim, extra-clear glass inserts, and hand-rubbed hardwax finishes.',
    descriptionHi: 'प्रीमियम अखरोट, ब्रास वर्क और बेहतरीन फिनिश।',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    tags: ['Walnut Veneer', 'Brass Trim', 'Illuminated Niches']
  },
  {
    id: 'space-saving',
    name: 'Space-Saving',
    nameHi: 'स्पेस-सेविंग (Space-Saving)',
    description: 'Intelligent multi-functional storage, hydraulic beds, folding desks, and compact corner solutions.',
    descriptionHi: 'कम जगह में अधिक स्टोरेज और स्मार्ट फर्नीचर।',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    tags: ['Hydraulic Storage', 'Pull-out Desks', 'Corner Units']
  }
];

export const roomPossibilities: RoomPossibility[] = [
  {
    id: 'bedroom',
    roomName: 'Bedroom',
    roomNameHi: 'बेडरूम (Bedroom)',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description: 'Create a restful sanctuary with made-to-measure beds, wardrobes, and bedside woodwork.',
    descriptionHi: 'आरामदायक बेडरूम के लिए कस्टम बेड, अलमारियां और साइड टेबल्स।',
    items: ['Modern & classic beds', 'Storage beds with hydraulics', 'Designer headboards', 'Bedside units & dressers', 'Full bedroom woodwork'],
    itemsHi: ['मॉडर्न व क्लासिक बेड', 'हाइड्रोलिक स्टोरेज बेड', 'डिज़ाइनर हेडबोर्ड', 'बेडसाइड यूनिट्स व ड्रेसर', 'सम्पूर्ण बेडरूम वुडवर्क']
  },
  {
    id: 'living',
    roomName: 'Living Room',
    roomNameHi: 'लिविंग रूम (Living Room)',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    description: 'Transform your main living area into an inviting, impressive space for family and guests.',
    descriptionHi: 'परिवार और मेहमानों के लिए शानदार और आरामदायक लिविंग स्पेस।',
    items: ['TV units & media walls', 'Wooden sofa frameworks', 'Acoustic wall panels', 'Crockery & display units', 'Shoe cabinets with seating'],
    itemsHi: ['टीवी यूनिट्स व मीडिया वॉल', 'लकड़ी के सोफा फ्रेम', 'वॉल पैनल्स व शेल्फ', 'डिस्प्ले व शोकेस यूनिट्स', 'शू कैबिनेट्स']
  },
  {
    id: 'kitchen',
    roomName: 'Kitchen',
    roomNameHi: 'किचन (Kitchen)',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
    description: 'Efficient, durable modular kitchens designed around your specific cooking habits and storage needs.',
    descriptionHi: 'टिकाऊ और सुविधाजनक मॉड्यूलर किचन, भारतीय कुकिंग के अनुकूल।',
    items: ['Complete modular kitchens', 'Storage & pantry cabinets', 'Hydraulic overhead wall units', 'Kitchen breakfast islands', 'Cutlery & spice pull-outs'],
    itemsHi: ['सम्पूर्ण मॉड्यूलर किचन', 'स्टोरेज व पैंट्री कैबिनेट्स', 'हाइड्रोलिक वॉल यूनिट्स', 'किचन ब्रेकफास्ट आइलैंड', 'स्पाइस व कटलरी पुल-आउट्स']
  },
  {
    id: 'dining',
    roomName: 'Dining Room',
    roomNameHi: 'डाइनिंग (Dining)',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=900&q=80',
    description: 'Sturdy solid timber dining tables and seating built for lasting family gatherings.',
    descriptionHi: 'परिवार के लिए मजबूत और खूबसूरत सॉलिड वुड डाइनिंग टेबल।',
    items: ['Solid teak dining tables', 'Custom seating benches & chairs', 'Dining crockery storage', 'Bar cabinets & credenzas'],
    itemsHi: ['सॉलिड सागवान डाइनिंग टेबल', 'कस्टम सिटिंग बेंच व कुर्सियां', 'क्रॉकरी स्टोरेज अलमारी', 'बार कैबिनेट्स']
  },
  {
    id: 'kids',
    roomName: 'Kids Room',
    roomNameHi: 'बच्चों का कमरा (Kids)',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    description: 'Safe, creative, and functional wooden play and study solutions for children.',
    descriptionHi: 'बच्चों के लिए सुरक्षित, गोल कोनों वाले प्लेरूम व स्टडी फर्नीचर।',
    items: ['Playroom wooden furniture', 'Toy & book storage units', 'Integrated study workstations', 'Custom bunk beds & single beds'],
    itemsHi: ['प्लेरूम फर्नीचर', 'खिलौने व किताब स्टोरेज यूनिट्स', 'स्टडी वर्कस्टेशन व टेबल', 'कस्टम बंक बेड']
  },
  {
    id: 'office',
    roomName: 'Office & Study',
    roomNameHi: 'ऑफिस व स्टडी (Office)',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    description: 'Productive and dignified work environments with customized executive desks and bookshelves.',
    descriptionHi: 'व्यवस्थित और सुंदर ऑफिस के लिए कस्टम डेस्क व लाइब्रेरी।',
    items: ['Executive & study desks', 'Floor-to-ceiling bookshelves', 'Filing & lockable storage', 'Conference & meeting tables'],
    itemsHi: ['एग्जीक्यूटिव व स्टडी डेस्क', 'फुल-हाइट बुकशेल्फ व लाइब्रेरी', 'लॉक वाले स्टोरेज कैबिनेट्स', 'कॉन्फ्रेंस टेबल्स']
  }
];

export const featuredProjects: Project[] = [
  {
    id: 'walnut-fluted-wardrobe',
    title: 'Custom Fluted Walnut Wardrobe Wall',
    titleHi: 'कस्टम फ्लूटेड वॉलनट अलमारी',
    slug: 'custom-fluted-walnut-wardrobe',
    category: 'Wardrobes',
    designStyle: 'Contemporary & Luxury',
    subtitle: 'Floor-to-ceiling custom storage with integrated soft LED profiles',
    shortDescription: 'Custom-designed floor-to-ceiling master wardrobe with fluted door fronts and soft-close internal organizers.',
    shortDescriptionHi: 'सॉफ्ट-क्लोज फिटिंग्स और गर्म एलईडी लाइटिंग के साथ बनाई गई शानदार अलमारी।',
    coverImage: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=85',
        caption: 'Full front perspective with fluted paneling and ambient linear lighting',
        tag: 'Full View'
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
        caption: 'Interior drawer configuration with velvet-lined jewelry trays',
        tag: 'Internal Storage'
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
        caption: 'Milled vertical wood battens and concealed soft-close hinges',
        tag: 'Craftsmanship Detail'
      }
    ],
    projectStory: 'Built according to the customer\'s master suite measurements in Alwar, maximizing vertical storage with clean fluted door detailing.',
    clientRequirement: 'Full wall wardrobe with his-and-her internal sections, sensor lighting, and custom handle design.',
    customRequirements: 'Integrated internal drawers with safety locks and sensor-operated profile lighting.',
    craftsmanshipHighlight: 'Accurate batten alignment and calibrated marine plywood internal carcass.',
    materials: ['Walnut Veneer', 'BWP Marine Grade Plywood', 'Soft-close German Hinges'],
    finish: 'Natural Matte Hardwax Oil & Polyurethane Sealant',
    dimensions: '14 ft (W) × 9.5 ft (H)',
    location: 'Alwar, Rajasthan',
    year: '2025',
    featured: true,
  },
  {
    id: 'solid-teak-dining-table',
    title: 'Solid Teak Eight-Seater Dining Table',
    titleHi: 'सॉलिड सागवान 8-सीटर डाइनिंग टेबल',
    slug: 'solid-teak-dining-table',
    category: 'Dining',
    designStyle: 'Traditional & Modern Blend',
    subtitle: 'Handcrafted solid Sagwan wood table with sturdy interlocking wooden joinery',
    shortDescription: 'Solid Teak (Sagwan) dining table with smooth chamfered edges and durable protective finish.',
    shortDescriptionHi: 'सागवान की पक्की लकड़ी से बनी 8-सीटर मजबूत डाइनिंग टेबल।',
    coverImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1400&q=85',
        caption: '8-seater centerpiece dining table with natural teak grain',
        tag: 'Full Table'
      },
      {
        url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=85',
        caption: 'Hand-planed top surface highlighting authentic wood grain',
        tag: 'Grain Detail'
      }
    ],
    projectStory: 'Crafted for a family home in Uttar Pradesh requiring a durable, generational dining table capable of everyday family meals and formal hosting.',
    clientRequirement: 'Sturdy 8-seater table with stain-resistant top and zero wobbling.',
    customRequirements: 'Heat and water-resistant protective topcoat for daily hot cookware placement.',
    craftsmanshipHighlight: 'Classical interlocking mortise and tenon leg joints without loose metal fittings.',
    materials: ['Seasoned CP Teak (Sagwan)', 'Hardwood Joinery'],
    finish: 'Satin Heat-Resistant Protective Clear Coat',
    dimensions: '8.5 ft (L) × 3.8 ft (W) × 30 in (H)',
    location: 'Uttar Pradesh (UP)',
    year: '2025',
    featured: true,
  },
  {
    id: 'oak-platform-storage-bed',
    title: 'White Oak Platform Bed with Storage',
    titleHi: 'व्हाइट ओक स्टोरेज प्लेटफॉर्म बेड',
    slug: 'white-oak-platform-storage-bed',
    category: 'Bedroom',
    designStyle: 'Minimal & Contemporary',
    subtitle: 'King-size wooden bed with integrated floating nightstands and smooth hydraulic storage',
    shortDescription: 'Custom European Oak platform bed engineered with acoustic slats and hydraulic storage lift.',
    shortDescriptionHi: 'हाइड्रोलिक स्टोरेज और फ्लोटिंग साइड टेबल्स के साथ किंग साइज बेड।',
    coverImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
        caption: 'Low-profile minimalist silhouette with integrated side tables',
        tag: 'Full View'
      },
      {
        url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=85',
        caption: 'Bedside drawer detail with soft-glide runners',
        tag: 'Nightstand'
      }
    ],
    projectStory: 'Designed for a customer seeking a clean, noise-free wooden bed with effortless under-bed storage access.',
    clientRequirement: 'King-size bed, hydraulic lift mechanism, and matching back paneling.',
    customRequirements: 'Integrated charging cable wire slots in both floating side tables.',
    craftsmanshipHighlight: 'Reinforced wooden skeleton ensuring zero creaks and easy hydraulic operation.',
    materials: ['White Oak Timber & Veneer', 'Heavy Hydraulic Lift Pistons'],
    finish: 'Silky Ultra-Matte Clear Finish',
    dimensions: 'King Size (78 in × 72 in mattress)',
    location: 'Alwar, Rajasthan',
    year: '2024',
    featured: true,
  },
  {
    id: 'charcoal-matte-modular-kitchen',
    title: 'Custom Matte Charcoal & Oak Modular Kitchen',
    titleHi: 'मॉड्यूलर किचन (चारकोल व ओक)',
    slug: 'custom-charcoal-modular-kitchen',
    category: 'Kitchen',
    designStyle: 'Modern & Ergonomic',
    subtitle: '100% boiling-water-proof kitchen cabinetry with soft-close tandem runners',
    shortDescription: 'High-performance modular kitchen with anti-scratch matte shutters and fluted oak breakfast island.',
    shortDescriptionHi: '100% वाटरप्रूफ मरीन प्लाई और सॉफ्ट-क्लोज फिटिंग्स के साथ बनी किचन।',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
        caption: 'L-shaped layout with custom center island and fluted breakfast bar',
        tag: 'Kitchen View'
      }
    ],
    projectStory: 'Custom-fit to the room\'s exact brick dimensions with waterproof marine grade plywood for long durability.',
    clientRequirement: 'Heavy-duty storage with smooth drawers, tall pantry unit, and spice pullouts.',
    customRequirements: 'Dedicated corner carousel unit and soft-close cutlery organizers.',
    craftsmanshipHighlight: '100% BWP IS:710 Marine Grade Plywood carcass with waterproof edge sealing.',
    materials: ['IS:710 Marine Plywood', 'Matte Acrylic Finish', 'Soft-close Tandem Hardware'],
    finish: 'Super-Matte Anti-Scratch Finish',
    dimensions: '15 ft × 11 ft Kitchen Layout',
    location: 'Alwar, Rajasthan',
    year: '2025',
    featured: true,
  },
  {
    id: 'slatted-tv-unit-media-wall',
    title: 'Acoustic Slatted Wooden TV Media Unit',
    titleHi: 'स्लेटेड वुडन टीवी मीडिया यूनिट',
    slug: 'slatted-tv-media-wall',
    category: 'TV Units',
    designStyle: 'Contemporary',
    subtitle: 'Wall-mounted floating media console with floor-to-ceiling slatted back panel',
    shortDescription: 'Living room centerpiece with vertical slatted wooden battens and hidden wire management.',
    shortDescriptionHi: 'छिपी हुई वायरिंग और फ्लोटिंग कंसोल के साथ सुंदर टीवी मीडिया वॉल।',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
        caption: 'Full feature wall with warm ambient back-lighting and floating console',
        tag: 'TV Unit'
      }
    ],
    projectStory: 'Custom built to conceal all television cords, set-top box wires, and soundbar cables seamlessly.',
    clientRequirement: 'Clean modern wall accommodating a 65-inch screen with storage for media devices.',
    customRequirements: 'Routed LED channels behind the wooden slats for soft evening lighting.',
    craftsmanshipHighlight: 'Evenly spaced precision vertical battens and 45-degree mitered floating cabinet edges.',
    materials: ['Natural Oak Veneer', 'Solid Hardwood Battens', 'Concealed LED Tracks'],
    finish: 'Natural Matte Lacquer',
    dimensions: '12 ft (W) × 9.5 ft (H)',
    location: 'Uttar Pradesh (UP)',
    year: '2025',
    featured: true,
  },
  {
    id: 'teak-pivot-entrance-door',
    title: 'Solid Teak Pivot Main Entrance Door',
    titleHi: 'सॉलिड सागवान मुख्य प्रवेश दरवाजा',
    slug: 'solid-teak-pivot-main-door',
    category: 'Doors',
    designStyle: 'Traditional & Monumental',
    subtitle: '9-foot heavy solid Sagwan entrance door with fluted relief and heavy brass handle',
    shortDescription: 'Handcrafted solid teak main door with heavy-duty hydraulic pivot mechanism.',
    shortDescriptionHi: 'सागवान की लकड़ी से बना 9 फीट ऊंचा मजबूत मुख्य दरवाजा।',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
        caption: '9-foot grand entrance pivot door in solid teak wood',
        tag: 'Main Door'
      }
    ],
    projectStory: 'Crafted for a residence entrance in Alwar, combining traditional solid wood strength with modern pivot hardware.',
    clientRequirement: 'Heavy, secure entrance door operating smoothly with fingertip touch.',
    customRequirements: 'Weather-sealed exterior perimeter to resist sun and rain.',
    craftsmanshipHighlight: 'Anti-warp seasoned timber construction and precision floor spring alignment.',
    materials: ['100% Seasoned CP Teak', 'Heavy-Duty Floor Pivot', 'Solid Brass Pull Handle'],
    finish: 'Exterior UV-Resistant Polyurethane Matt Varnish',
    dimensions: '9 ft (H) × 4.5 ft (W) × 50 mm',
    location: 'Alwar, Rajasthan',
    year: '2024',
    featured: false,
  }
];

export const beforeAfterCases: BeforeAfterItem[] = [
  {
    id: 'wardrobe-transformation',
    title: 'Empty Space → Finished Custom Wardrobe',
    titleHi: 'खाली जगह → तैयार कस्टम अलमारी',
    category: 'Wardrobes',
    description: 'Transforming a bare wall with uneven civil plaster into a flush floor-to-ceiling wardrobe with sensor lighting.',
    descriptionHi: 'साधारण खाली दीवार को खूबसूरत फ्लोर-टू-सीलिंग अलमारी में बदला गया।',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=80',
    beforeLabel: 'Empty Wall Space',
    afterLabel: 'Finished Wardrobe',
    location: 'Alwar, Rajasthan',
    resultSummary: 'Optimized 100% vertical space with seamless flush alignment.'
  },
  {
    id: 'kitchen-transformation',
    title: 'Raw Space → Finished Modular Kitchen',
    titleHi: 'कच्चा स्पेस → तैयार मॉड्यूलर किचन',
    category: 'Kitchen',
    description: 'From an unfinished brick shell to a fully functional, waterproof modular kitchen with soft-close drawers.',
    descriptionHi: 'कच्ची ईंटों वाले कमरे को आधुनिक वाटरप्रूफ किचन में बदला गया।',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    beforeLabel: 'Raw Brick Shell',
    afterLabel: 'Completed Kitchen',
    location: 'Uttar Pradesh (UP)',
    resultSummary: 'Boiling-water-proof construction with German hardware.'
  },
  {
    id: 'tv-unit-transformation',
    title: 'Empty Wall → Custom TV Unit',
    titleHi: 'साधारण दीवार → कस्टम टीवी यूनिट',
    category: 'TV Units',
    description: 'Converting a plain white wall with dangling cables into an architectural slatted oak media wall with ambient lighting.',
    descriptionHi: 'दीवार पर फैले तारों को छुपाकर सुंदर स्लेटेड टीवी यूनिट बनाई गई।',
    beforeImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    beforeLabel: 'Plain Wall with Wires',
    afterLabel: 'Finished Media Wall',
    location: 'Alwar, Rajasthan',
    resultSummary: 'Completely concealed wiring with ambient back-lighting.'
  },
  {
    id: 'dining-transformation',
    title: 'Raw Wood → Solid Teak Dining Table',
    titleHi: 'कच्ची लकड़ी → तैयार सॉलिड सागवान डाइनिंग',
    category: 'Dining',
    description: 'Rough-sawn seasoned teak logs hand-planed and assembled into a smooth, generational 8-seater dining table.',
    descriptionHi: 'कच्ची लकड़ी को तराश कर मजबूत डाइनिंग टेबल तैयार की गई।',
    beforeImage: 'https://images.unsplash.com/photo-1502005229762-ee1b2da9c5dd?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80',
    beforeLabel: 'Raw Timber Slabs',
    afterLabel: 'Handcrafted Table',
    location: 'Uttar Pradesh (UP)',
    resultSummary: 'Traditional interlocking joinery with silky smooth top.'
  }
];

export const materialsData: MaterialItem[] = [
  {
    id: 'cp-teak-sagwan',
    name: 'Seasoned CP Teak (Sagwan)',
    category: 'Natural Solid Wood',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    description: 'The golden standard of Indian woodworking. Naturally resistant to termites, moisture, and warping across decades.',
    grainCharacter: 'Distinct straight to wavy golden-brown grain with rich natural luster',
    durability: 'Generational (50+ years)',
    bestFor: 'Dining tables, entrance doors, solid wood beds, heritage furniture',
    finishType: 'Hardwax oil, PU clear coat, natural polish'
  },
  {
    id: 'american-walnut',
    name: 'American Black Walnut',
    category: 'Natural Solid Wood',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
    description: 'A prized luxury timber celebrated worldwide for its deep chocolate brown hues and silky hand-feel.',
    grainCharacter: 'Tight, flowing curls and rich dark espresso undertones',
    durability: 'High (40+ years)',
    bestFor: 'Executive desks, fluted wardrobe shutters, accent furniture',
    finishType: 'Ultra-matte polyurethane, organic oil'
  },
  {
    id: 'marine-plywood-710',
    name: 'IS:710 Marine Grade BWP Plywood',
    category: 'Engineered Wood',
    image: 'https://images.unsplash.com/photo-1502005229762-ee1b2da9c5dd?auto=format&fit=crop&w=800&q=80',
    description: 'Boiling Water Proof calibrated hardwood plywood bonded with phenolic resins. Immune to borer, termite, and severe moisture.',
    grainCharacter: 'Calibrated ultra-flat cross-laminated hardwood layers',
    durability: 'Lifetime Structural (30+ years)',
    bestFor: 'Modular kitchen carcasses, bathroom vanities, wardrobe carcasses',
    finishType: 'Laminate pressed, veneer pressed, PU lacquered'
  },
  {
    id: 'natural-wood-veneers',
    name: 'Hand-Matched Natural Wood Veneers',
    category: 'Finishes & Veneer',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    description: 'Real sliced tree cross-sections providing authentic grain warmth on seamless panels.',
    grainCharacter: 'Book-matched, slip-matched, and crown-cut natural wood patterns',
    durability: 'High (protected by multi-coat lacquer)',
    bestFor: 'Living room wall paneling, wardrobe doors, console tops',
    finishType: 'Polyester high gloss, open-pore matte'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: '[Customer Name - Alwar Residence]',
    location: 'Rath Nagar, Alwar (Rajasthan)',
    projectType: 'Custom Wardrobes & Modular Kitchen',
    quote: '[Customer Review: "Makhan Carpenter completed our complete home woodwork on time with great precision and smooth finishing."]',
    quoteHi: '[ग्राहक समीक्षा: "माखन कारपेंटर ने हमारे घर का पूरा फर्नीचर समय पर और बहुत ही सुंदर फिनिशिंग के साथ तैयार किया।"]',
    rating: 5,
    date: 'Verified Client'
  },
  {
    id: 't-2',
    name: '[Customer Name - UP Villa]',
    location: 'Uttar Pradesh (UP)',
    projectType: 'Solid Teak Dining Table & Master Bed',
    quote: '[Customer Review: "The quality of solid teak and joinery in our 8-seater dining table is outstanding. Truly skilled craftsmanship."]',
    quoteHi: '[ग्राहक समीक्षा: "डाइनिंग टेबल और बेड की मजबूती और लकड़ी की क्वालिटी बहुत शानदार है।"]',
    rating: 5,
    date: 'Verified Client'
  },
  {
    id: 't-3',
    name: '[Customer Name - Alwar]',
    location: 'Alwar (Rajasthan)',
    projectType: 'Fluted TV Unit & Kids Play Room',
    quote: '[Customer Review: "Understood our design requirements clearly and gave practical suggestions for space utilization."]',
    quoteHi: '[ग्राहक समीक्षा: "हमारी पसंद के अनुसार नाप लेकर एकदम सही टीवी यूनिट और बच्चों का फर्नीचर बनाया।"]',
    rating: 5,
    date: 'Verified Client'
  },
  {
    id: 't-4',
    name: '[Customer Name - UP Home]',
    location: 'Uttar Pradesh (UP)',
    projectType: 'Main Wooden Pivot Door & Wardrobe Suite',
    quote: '[Customer Review: "Very trustworthy, honest pricing, and personal attention to every single detail."]',
    quoteHi: '[ग्राहक समीक्षा: "ईमानदार कारीगर, सही दाम और काम में बहुत सफाई।"]',
    rating: 5,
    date: 'Verified Client'
  }
];

export const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85',
    title: 'Custom Fluted Walnut Wardrobe',
    titleHi: 'कस्टम फ्लूटेड अलमारी',
    category: 'Wardrobes',
    location: 'Alwar, Rajasthan'
  },
  {
    url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85',
    title: 'Solid Teak 8-Seater Dining Table',
    titleHi: 'सागवान 8-सीटर डाइनिंग टेबल',
    category: 'Dining',
    location: 'Uttar Pradesh'
  },
  {
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    title: 'White Oak Storage Platform Bed',
    titleHi: 'व्हाइट ओक स्टोरेज बेड',
    category: 'Bedroom',
    location: 'Alwar, Rajasthan'
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    title: 'Custom Matte Charcoal Modular Kitchen',
    titleHi: 'मॉड्यूलर किचन (वाटरप्रूफ)',
    category: 'Kitchen',
    location: 'Alwar, Rajasthan'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    title: 'Slatted Oak TV Media Unit',
    titleHi: 'स्लेटेड टीवी मीडिया यूनिट',
    category: 'TV Units',
    location: 'Uttar Pradesh'
  },
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    title: 'Solid Teak Pivot Main Door',
    titleHi: 'सागवान मुख्य प्रवेश द्वार',
    category: 'Doors',
    location: 'Alwar, Rajasthan'
  },
  {
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
    title: 'Executive Study Desk & Bookshelf',
    titleHi: 'स्टडी डेस्क व बुकशेल्फ',
    category: 'Office',
    location: 'Uttar Pradesh'
  },
  {
    url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
    title: 'Custom Wooden Sofa Structure',
    titleHi: 'कस्टम लकड़ी का सोफा फ्रेम',
    category: 'Living Room',
    location: 'Alwar, Rajasthan'
  },
  {
    url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85',
    title: 'Master Carpenter at the Workshop',
    titleHi: 'कारीगर लकड़ी पर काम करते हुए',
    category: 'Custom Furniture',
    location: 'Rath Nagar, Alwar'
  }
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Requirement & Space Discussion',
    subtitle: 'Understanding Your Space & Vision',
    description: 'We listen to your storage needs, design inspirations, and functional requirements over call or WhatsApp.',
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Design brief & material alignment'
  },
  {
    stepNumber: '02',
    title: 'On-Site Laser Measurement',
    subtitle: 'Millimeter-Accurate Site Survey',
    description: 'Makhan Carpenter conducts on-site measurements across Alwar & UP to record exact wall angles and levels.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    keyAction: 'On-site laser survey in Alwar & UP'
  },
  {
    stepNumber: '03',
    title: 'Timber & Material Selection',
    subtitle: 'Selecting Only Cured Hardwoods',
    description: 'We personally inspect seasoned CP Teak, Walnut, and certified IS:710 Marine Grade calibrated plywood.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Quality timber selection & moisture check'
  },
  {
    stepNumber: '04',
    title: 'Precision Sizing & Shaping',
    subtitle: 'Hand-Planed Accuracy',
    description: 'Using traditional hand planes and precision saw machines, wood is sized and planed to smooth tolerances.',
    image: 'https://images.unsplash.com/photo-1502005229762-ee1b2da9c5dd?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Hand-planing & batten milling'
  },
  {
    stepNumber: '05',
    title: 'Interlocking Joinery Assembly',
    subtitle: 'Durable Structural Strength',
    description: 'Classic mortise-and-tenon and reinforced biscuit joinery so furniture never loosens or wobbles.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Traditional wooden joinery'
  },
  {
    stepNumber: '06',
    title: 'Multi-Stage Sanding & Finish',
    subtitle: 'Tactile Silk Finish',
    description: 'Hand-sanding up to fine grits followed by Italian PU clear coat or natural organic polish.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Protective topcoats & hardwax oils'
  },
  {
    stepNumber: '07',
    title: 'Careful On-Site Installation',
    subtitle: 'Flush Fit On Location',
    description: 'Our team transports and installs the finished woodwork cleanly in your home with zero mess.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    keyAction: 'White-glove alignment & clean-up'
  },
  {
    stepNumber: '08',
    title: 'Final Quality Inspection',
    subtitle: 'Handover with Complete Satisfaction',
    description: 'Makhan personally inspects every drawer slide, hinge, and edge finish before handing over.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    keyAction: 'Client walkthrough & maintenance guidance'
  }
];

export const whyChoosePillars = [
  {
    icon: 'Hammer',
    title: '20+ Years Experience',
    description: 'Practical woodcraft mastery honed across two decades of custom carpentry in Alwar and Uttar Pradesh.'
  },
  {
    icon: 'Ruler',
    title: '100% Made-to-Measure',
    description: 'Every wardrobe, kitchen, and bed is tailored to your unique room contours for a seamless flush fit.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Cured Hardwoods & Marine Ply',
    description: 'We strictly work with seasoned CP Teak (Sagwan), American Walnut, and certified IS:710 Marine Grade plywood.'
  },
  {
    icon: 'Compass',
    title: 'Precision Joinery',
    description: 'Classic mortise-and-tenon and interlocking joinery for generational durability without loose fasteners.'
  },
  {
    icon: 'Sparkles',
    title: 'Hand-Rubbed Finish',
    description: 'Progressive hand-sanding and premium protective finishes that enhance the natural beauty of real wood.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Honest Craftsman Trust',
    description: 'Direct craftsman pricing with transparent material breakdown, 500+ completed projects, and on-time handover.'
  }
];
