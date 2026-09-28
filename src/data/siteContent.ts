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

export const getAssetUrl = (path: string) =>
  path.startsWith('http') ? path : `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const siteConfig = {
  brandName: 'MAKHAN CARPENTER',
  brandShortName: 'Makhan',
  tagline: 'Crafted with Experience. Designed for Your Space.',
  subheading: 'Custom furniture and premium woodwork made with skill, precision and attention to detail.',
  experienceYears: '20+',
  projectsCompleted: '500+',
  
  location: {
    address: 'Raath Nagar, Alwar, Rajasthan, India',
    city: 'Alwar',
    state: 'Rajasthan',
    country: 'India',
    serviceAreas: 'Raath Nagar & Alwar, Rajasthan',
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
    description: 'Two decades of hands-on woodworking mastery in Alwar, Rajasthan.',
    descriptionHi: 'अलवर (राजस्थान) में दो दशकों से अधिक का लकड़ी कारीगरी का अनुभव।'
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
    value: 'Alwar',
    numericValue: 1,
    suffix: '',
    label: 'Primary Service Region',
    labelHi: 'मुख्य सेवा क्षेत्र',
    description: 'Raath Nagar and across Alwar (Rajasthan).',
    descriptionHi: 'राठ नगर और सम्पूर्ण अलवर (राजस्थान)।'
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
    image: getAssetUrl('projects/wooden-dressing-unit.jpg'),
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
    image: getAssetUrl('projects/designer-jali-bed.jpg'),
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
    image: getAssetUrl('projects/custom-sectional-sofa.jpg'),
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
    image: getAssetUrl('projects/walnut-modular-wardrobe.jpg'),
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
    image: getAssetUrl('projects/modular-kitchen-white.jpg'),
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
    image: getAssetUrl('projects/luxury-fluted-entertainment-wall.jpg'),
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
    image: getAssetUrl('projects/fluted-marble-tv-unit.jpg'),
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
    image: getAssetUrl('projects/backlit-wall-showcase-niche.jpg'),
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
    name: 'Modern & Minimal',
    nameHi: 'मॉडर्न व मिनिमल (Modern)',
    description: 'Clean horizontal lines, sleek handleless surfaces, and uncluttered geometry for contemporary homes.',
    descriptionHi: 'साफ लाइनें और आधुनिक स्टडी व वॉर्डरोब डिज़ाइन।',
    image: getAssetUrl('projects/study-desk-wardrobe.jpg'),
    tags: ['Sleek Lines', 'Flush Panels', 'Study Unit']
  },
  {
    id: 'minimal',
    name: 'Master Suite Luxury',
    nameHi: 'मास्टर सुइट लक्ज़री (Master Suite)',
    description: 'Custom king beds with diamond-tufting or CNC backlit jali panels and matching side units.',
    descriptionHi: 'डायमंड टफ्टिंग और बैक-लिट जाली हेडबोर्ड बेड।',
    image: getAssetUrl('projects/designer-jali-bed.jpg'),
    tags: ['Backlit Jali', 'Velvet Padding', 'King Size']
  },
  {
    id: 'contemporary',
    name: 'Contemporary Living',
    nameHi: 'कंटेम्परेरी लिविंग (Living)',
    description: 'Fluid blend of current design trends with vertical channel tufted seating and storage ottomans.',
    descriptionHi: 'चैनल टफ्टेड एल-शेप सोफा और सेंटर ओटोमन टेबल।',
    image: getAssetUrl('projects/custom-sectional-sofa.jpg'),
    tags: ['L-Shape Sectional', 'Channel Tufting', 'Center Table']
  },
  {
    id: 'traditional',
    name: 'Traditional & Classic',
    nameHi: 'ट्रेडिशनल व क्लासिक (Traditional)',
    description: 'Timeless solid teak dressing vanity and heirloom woodwork details with rich natural grain.',
    descriptionHi: 'पारंपरिक नक्काशी, फुल-हाइट मिरर और मजबूत लकड़ी का ड्रेसर।',
    image: getAssetUrl('projects/wooden-dressing-unit.jpg'),
    tags: ['Full Mirror', 'Teak Grain', 'Heirloom Finish']
  },
  {
    id: 'luxury',
    name: 'Luxury Wardrobes',
    nameHi: 'लक्ज़री वॉर्डरोब (Wardrobes)',
    description: 'Floor-to-ceiling modular wardrobes with top loft storage, dark walnut veneer, and sleek hardware.',
    descriptionHi: 'फ्लोर-टू-सीलिंग मॉड्यूलर अलमारी और टॉप लॉफ्ट कैबिनेट्स।',
    image: getAssetUrl('projects/walnut-modular-wardrobe.jpg'),
    tags: ['Walnut Veneer', 'Top Loft', 'Space Maximized']
  },
  {
    id: 'space-saving',
    name: 'Space-Saving Kitchens & Desks',
    nameHi: 'मॉड्यूलर किचन व स्टोरेज (Kitchens)',
    description: 'High-gloss white acrylic modular kitchens and multi-tier bookshelf storage towers.',
    descriptionHi: '100% वाटरप्रूफ हाई-ग्लॉस किचन और मल्टी-टियर स्टोरेज टावर।',
    image: getAssetUrl('projects/modular-kitchen-white.jpg'),
    tags: ['Gloss Acrylic', 'Waterproof Marine Ply', 'Soft Close']
  }
];

export const roomPossibilities: RoomPossibility[] = [
  {
    id: 'bedroom',
    roomName: 'Bedroom',
    roomNameHi: 'बेडरूम (Bedroom)',
    image: getAssetUrl('projects/designer-jali-bed.jpg'),
    description: 'Create a restful sanctuary with made-to-measure beds, wardrobes, and bedside woodwork.',
    descriptionHi: 'आरामदायक बेडरूम के लिए कस्टम बेड, अलमारियां और साइड टेबल्स।',
    items: ['Modern & classic beds', 'Designer backlit jali headboards', 'Diamond-tufted velvet king beds', 'Bedside units & dressers', 'Full bedroom woodwork'],
    itemsHi: ['मॉडर्न व क्लासिक बेड', 'बैक-लिट जाली हेडबोर्ड बेड', 'डायमंड टफ्टेड किंग बेड', 'बेडसाइड यूनिट्स व ड्रेसर', 'सम्पूर्ण बेडरूम वुडवर्क']
  },
  {
    id: 'living',
    roomName: 'Living Room',
    roomNameHi: 'लिविंग रूम (Living Room)',
    image: getAssetUrl('projects/custom-sectional-sofa.jpg'),
    description: 'Transform your main living area into an inviting, impressive space for family and guests.',
    descriptionHi: 'परिवार और मेहमानों के लिए शानदार और आरामदायक लिविंग स्पेस।',
    items: ['L-shaped channel tufted sofas', 'Matching storage ottomans', 'TV units & media walls', 'Display & bookshelf towers', 'Custom coffee tables'],
    itemsHi: ['एल-शेप्ड चैनल टफ्टेड सोफा', 'मैचिंग सेंटर ओटोमन टेबल', 'टीवी यूनिट्स व मीडिया वॉल', 'डिस्प्ले व बुकशेल्फ टावर', 'कस्टम टेबल']
  },
  {
    id: 'kitchen',
    roomName: 'Kitchen',
    roomNameHi: 'किचन (Kitchen)',
    image: getAssetUrl('projects/modular-kitchen-white.jpg'),
    description: 'Efficient, durable modular kitchens designed around your specific cooking habits and storage needs.',
    descriptionHi: 'टिकाऊ और सुविधाजनक मॉड्यूलर किचन, भारतीय कुकिंग के अनुकूल।',
    items: ['Complete modular kitchens', 'High-gloss acrylic shutters', 'Glass-framed display units', 'Storage & pantry cabinets', 'Hydraulic overhead wall units'],
    itemsHi: ['सम्पूर्ण मॉड्यूलर किचन', 'हाई-ग्लॉस ऐक्रेलिक शटर', 'कांच वाले डिस्प्ले कैबिनेट्स', 'स्टोरेज व पैंट्री अलमारी', 'हाइड्रोलिक वॉल यूनिट्स']
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
    roomName: 'Kids Room & Study',
    roomNameHi: 'बच्चों का कमरा व स्टडी (Kids & Study)',
    image: getAssetUrl('projects/study-desk-wardrobe.jpg'),
    description: 'Safe, creative, and functional wooden study workstations, wardrobes, and storage solutions.',
    descriptionHi: 'बच्चों और स्टडी के लिए सुंदर डेस्क, वॉर्डरोब और बुकशेल्फ।',
    items: ['Integrated study workstations', 'Multi-tier bookshelf towers', 'Built-in wardrobe combinations', 'Study drawers & organizer shelves'],
    itemsHi: ['स्टडी वर्कस्टेशन व टेबल', 'मल्टी-टियर बुकशेल्फ टावर', 'इनबिल्ट वॉर्डरोब कॉम्बो', 'स्टडी ड्रॉअर्स व शेल्फ']
  },
  {
    id: 'office',
    roomName: 'Office & Library',
    roomNameHi: 'ऑफिस व लाइब्रेरी (Office)',
    image: getAssetUrl('projects/bookshelf-storage-tower.jpg'),
    description: 'Productive and dignified work environments with customized executive desks and bookshelves.',
    descriptionHi: 'व्यवस्थित और सुंदर ऑफिस के लिए कस्टम डेस्क व लाइब्रेरी।',
    items: ['Executive & study desks', 'Tall bookshelf storage towers', 'Lockable filing cabinets', 'Custom conference tables'],
    itemsHi: ['एग्जीक्यूटिव व स्टडी डेस्क', 'टॉल बुकशेल्फ स्टोरेज टावर', 'लॉक वाले स्टोरेज कैबिनेट्स', 'कस्टम टेबल्स']
  }
];

export const featuredProjects: Project[] = [
  {
    id: 'designer-backlit-jali-bed',
    title: 'Designer Backlit CNC Floral Jali King Bed',
    titleHi: 'बैक-लिट सीएनसी जाली किंग बेड',
    slug: 'designer-backlit-jali-king-bed',
    category: 'Bedroom',
    designStyle: 'Luxury & Architectural',
    subtitle: 'Extra-tall charcoal grey velvet headboard with backlit CNC floral jali side panels and floating walnut drawers',
    shortDescription: 'Custom architectural master bed with horizontal channel tufted headboard, illuminated floral lattice wings, and floating nightstands.',
    shortDescriptionHi: 'चारकोल ग्रे वेलवेट हेडबोर्ड, बैक-लिट फ्लोरल जाली और फ्लोटिंग साइड ड्रॉअर्स के साथ मास्टर बेड।',
    coverImage: getAssetUrl('projects/designer-jali-bed.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/designer-jali-bed.jpg'),
        caption: 'Full master suite view with illuminated warm floral jali panels and crisp hotel-grade linens',
        tag: 'Master Bed'
      }
    ],
    projectStory: 'Commissioned for a luxury residence in Alwar. The client wanted a signature centerpiece bed combining modern channel upholstery with traditional Indian illuminated lattice artwork.',
    clientRequirement: 'Extra-tall headboard with integrated nightstands, warm ambient reading lights, and heavy mattress support.',
    customRequirements: 'CNC precision-routed floral acrylic jali with concealed warm-white LED channel diffusers and separate bedside switches.',
    craftsmanshipHighlight: 'Flush seamless joinery between padded velvet panels and high-density wooden lattice borders.',
    materials: ['Charcoal Velvet Upholstery', 'CNC Acrylic Lattice', 'Seasoned Teak Frame', 'Marine Grade Plywood'],
    finish: 'Natural Matte Walnut Lacquer & Soft Velvet',
    dimensions: 'King Size (78 in × 72 in)',
    location: 'Raath Nagar, Alwar',
    year: '2025',
    featured: true,
  },
  {
    id: 'diamond-tufted-walnut-bed',
    title: 'Diamond-Tufted Suede & Walnut King Bed',
    titleHi: 'डायमंड टफ्टेड वॉलनट किंग बेड',
    slug: 'diamond-tufted-walnut-bed',
    category: 'Bedroom',
    designStyle: 'Classic & Luxury',
    subtitle: 'Warm champagne suede diamond-tufted headboard & footboard with rich dark walnut wooden frame',
    shortDescription: 'Luxury king-size bed featuring crystal button diamond tufting on headboard and footboard with solid walnut framing.',
    shortDescriptionHi: 'क्रिस्टल बटन टफ्टिंग और वॉलनट वुडन बॉर्डर के साथ क्लासिक किंग साइज बेड।',
    coverImage: getAssetUrl('projects/tufted-wooden-bed.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/tufted-wooden-bed.jpg'),
        caption: 'Front perspective showing diamond button tufting and matching footboard panel',
        tag: 'Full View'
      }
    ],
    projectStory: 'Built for a private villa master bedroom in Alwar, focusing on ergonomic back comfort and stately classic proportions.',
    clientRequirement: 'Heavy solid wood structure with plush padded headboard for comfortable late-night reading.',
    customRequirements: 'Matching tufted footboard panel and concealed reinforcement beneath the mattress platform.',
    craftsmanshipHighlight: 'Hand-pulled diamond tufts with reinforced crystal buttons on heavy-density foam backing.',
    materials: ['Seasoned Hardwood Frame', 'Champagne Suede Upholstery', 'Crystal Buttons', 'IS:710 Marine Plywood'],
    finish: 'Dark Walnut Rich Polish',
    dimensions: 'King Size (82 in × 76 in)',
    location: 'Alwar, Rajasthan',
    year: '2025',
    featured: true,
  },
  {
    id: 'custom-sectional-sofa',
    title: 'Custom Channel-Tufted Sectional Sofa with Storage Ottoman',
    titleHi: 'चैनल टफ्टेड एल-शेप सोफा व सेंटर टेबल',
    slug: 'custom-sectional-sofa-storage-ottoman',
    category: 'Living Room',
    designStyle: 'Modern Contemporary',
    subtitle: 'L-shaped mocha velvet sectional sofa with vertical fluted backrest and matching modular center table / pouf set',
    shortDescription: 'Custom-built L-shaped sectional sofa with vertical channel tufting and space-saving modular center ottoman unit.',
    shortDescriptionHi: 'मजबूत लकड़ी के फ्रेम और मोका वेलवेट अपहोल्स्ट्री से बना एल-शेप सोफा व ओटोमन टेबल।',
    coverImage: getAssetUrl('projects/custom-sectional-sofa.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/custom-sectional-sofa.jpg'),
        caption: 'L-shaped configuration with vertical channel tufting and matching nested center table',
        tag: 'Living Suite'
      }
    ],
    projectStory: 'Custom-measured to fit a living room corner in Alwar, maximizing seating capacity while maintaining an open, elegant aesthetic.',
    clientRequirement: 'Comfortable family corner sofa with firm back support and matching center coffee table.',
    customRequirements: 'High-density 40D foam cushioning with durable, stain-resistant mocha velvet fabric.',
    craftsmanshipHighlight: 'Kiln-dried solid hardwood internal structural framework with reinforced cross-members.',
    materials: ['Solid Hardwood Internal Frame', 'Mocha Velvet Fabric', '40-Density Polyurethane Foam'],
    finish: 'Tactile Silk Velvet Upholstery',
    dimensions: '10 ft × 8.5 ft L-Shape Sectional',
    location: 'Alwar, Rajasthan',
    year: '2025',
    featured: true,
  },
  {
    id: 'walnut-study-wardrobe-suite',
    title: 'Integrated Walnut Study Desk & Wardrobe Suite',
    titleHi: 'स्टडी डेस्क व वॉर्डरोब कॉम्बिनेशन',
    slug: 'walnut-study-wardrobe-suite',
    category: 'Wardrobes',
    designStyle: 'Modern & Minimal',
    subtitle: 'Multi-functional bedroom unit with study desk, open display shelving, overhead lofts, and wardrobe tower',
    shortDescription: 'Dual-tone dark walnut and cream modular study station with integrated storage drawers, book display, and wardrobe.',
    shortDescriptionHi: 'स्टडी डेस्क, बुक शेल्फ, ड्रॉअर्स और अलमारी का शानदार डुअल-टोन कॉम्बो।',
    coverImage: getAssetUrl('projects/study-desk-wardrobe.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/study-desk-wardrobe.jpg'),
        caption: 'Full-wall study suite with organized open shelving and wardrobe cabinetry',
        tag: 'Study Suite'
      }
    ],
    projectStory: 'Engineered for a student/work-from-home room in Alwar to consolidate study, books, and clothing into a single unified wall.',
    clientRequirement: 'Full-wall solution with dedicated laptop area, drawers with safety locks, open book niches, and wardrobe.',
    customRequirements: 'Concealed power conduit channels and dual-tone walnut with ivory edge banding.',
    craftsmanshipHighlight: 'Precision alignment of horizontal and vertical dividing partitions without sagging.',
    materials: ['Walnut Grain Textured Laminate', 'Matte Cream Laminate', 'IS:710 Marine Calibrated Plywood'],
    finish: 'Silky Matte Laminate Finish',
    dimensions: '13 ft (W) × 9.5 ft (H)',
    location: 'Raath Nagar, Alwar',
    year: '2024',
    featured: true,
  },
  {
    id: 'gloss-white-modular-kitchen',
    title: 'High-Gloss White Acrylic Modular Kitchen',
    titleHi: 'हाई-ग्लॉस व्हाइट मॉड्यूलर किचन',
    slug: 'gloss-white-modular-kitchen',
    category: 'Kitchen',
    designStyle: 'Modern Ergonomic',
    subtitle: '100% boiling-water-proof overhead kitchen cabinetry with glass display units and under-cabinet strip lighting',
    shortDescription: 'Modern modular kitchen upper cabinets with high-gloss white acrylic shutters and illuminated glass crockery display.',
    shortDescriptionHi: '100% वाटरप्रूफ मरीन प्लाई, हाई-ग्लॉस ऐक्रेलिक शटर और कांच के डिस्प्ले कैबिनेट्स।',
    coverImage: getAssetUrl('projects/modular-kitchen-white.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/modular-kitchen-white.jpg'),
        caption: 'Overhead kitchen layout with glass display shutters and warm LED task lighting',
        tag: 'Kitchen View'
      }
    ],
    projectStory: 'Installed in a newly renovated residence in Alwar with 100% waterproof Marine Grade calibrated plywood to resist steam and moisture.',
    clientRequirement: 'Bright, reflective, easy-to-clean kitchen overhead storage with glass display for fine dinnerware.',
    customRequirements: 'Warm under-cabinet LED profile lighting with concealed electrical drivers.',
    craftsmanshipHighlight: 'Zero-joint edge banding on acrylic shutters ensuring 100% moisture resistance.',
    materials: ['IS:710 Marine Plywood', 'High-Gloss Acrylic Shutters', 'Toughened Fluted Glass', 'Soft-Close German Hinges'],
    finish: 'Ultra-Gloss Scratch-Resistant Acrylic',
    dimensions: '12 ft × 8 ft Kitchen Layout',
    location: 'Alwar, Rajasthan',
    year: '2025',
    featured: true,
  },
  {
    id: 'walnut-modular-loft-wardrobe',
    title: 'Floor-to-Ceiling Walnut Modular Wardrobe with Top Loft',
    titleHi: 'फ्लोर-टू-सीलिंग वॉलनट मॉड्यूलर अलमारी',
    slug: 'walnut-modular-loft-wardrobe',
    category: 'Wardrobes',
    designStyle: 'Contemporary',
    subtitle: 'Tall double-door bedroom wardrobe with top overhead loft cabinets and sleek vertical black handles',
    shortDescription: 'Custom-built vertical wardrobe in dark walnut grain with cream borders and overhead storage to maximize room height.',
    shortDescriptionHi: 'ऊंचाई तक बनी मॉड्यूलर अलमारी और टॉप लॉफ्ट स्टोरेज।',
    coverImage: getAssetUrl('projects/walnut-modular-wardrobe.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/walnut-modular-wardrobe.jpg'),
        caption: 'Full-height view with upper loft storage and modern vertical handles',
        tag: 'Wardrobe'
      }
    ],
    projectStory: 'Built for a bedroom with 10-foot ceilings in Alwar to store suitcases and seasonal blankets in the upper loft while keeping daily wear accessible.',
    clientRequirement: 'Full-height vertical storage with smooth hinges, internal hanger rods, and lockable drawers.',
    customRequirements: 'Integrated security lock on main shutter and bottom drawer.',
    craftsmanshipHighlight: 'Floor-to-ceiling flush alignment with reinforced structural top-carcass.',
    materials: ['Dark Walnut Grain Laminate', 'Marine Grade Plywood', 'Matte Black Bar Handles'],
    finish: 'Textured Natural Wood Grain',
    dimensions: '4.5 ft (W) × 10 ft (H) × 24 in (D)',
    location: 'Alwar, Rajasthan',
    year: '2024',
    featured: true,
  },
  {
    id: 'teak-dressing-table-vanity',
    title: 'Solid Wood Dressing Vanity with Full-Height Mirror',
    titleHi: 'सॉलिड वुड ड्रेसिंग टेबल व फुल मिरर',
    slug: 'solid-wood-dressing-table-vanity',
    category: 'Custom Furniture',
    designStyle: 'Traditional & Classic',
    subtitle: 'Handcrafted dressing unit with full-length mirror door, frosted glass vanity cabinet, and smooth drawers',
    shortDescription: 'Custom wooden dressing table in warm oak/teak finish with full-length mirror, cosmetic storage, and cornice lighting.',
    shortDescriptionHi: 'फुल-लेंथ ड्रेसिंग मिरर, कॉस्मेटिक स्टोरेज और वॉर्म लाइटिंग के साथ बनी ड्रेसिंग टेबल।',
    coverImage: getAssetUrl('projects/wooden-dressing-unit.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/wooden-dressing-unit.jpg'),
        caption: 'Full-length mirror door and internal vanity cabinet with soft top spotlighting',
        tag: 'Dressing Table'
      }
    ],
    projectStory: 'Crafted for a master dressing corner in Alwar, integrating full grooming reflection with concealed cosmetic shelves.',
    clientRequirement: 'Full-length reflection, frosted glass accent door, and pull-out drawers for accessories.',
    customRequirements: 'Concealed top cornice spotlight for clear facial illumination during dressing.',
    craftsmanshipHighlight: 'Precision mitered border moldings and smooth magnetic door catches.',
    materials: ['Seasoned Teak Timber & Veneer', 'Belgian Mirror Glass', 'Frosted Glass Shutter'],
    finish: 'Warm Teak Satin Lacquer',
    dimensions: '3.5 ft (W) × 7 ft (H) × 18 in (D)',
    location: 'Raath Nagar, Alwar',
    year: '2024',
    featured: false,
  },
  {
    id: 'bookshelf-storage-tower-unit',
    title: 'Multi-Tier Bookshelf & Storage Cabinet Tower',
    titleHi: 'मल्टी-टियर बुकशेल्फ व स्टोरेज टावर',
    slug: 'bookshelf-storage-tower-unit',
    category: 'Office',
    designStyle: 'Modern & Functional',
    subtitle: 'Vertical storage tower with double-door upper cabinets, deep open book shelves, and cream frame accents',
    shortDescription: 'Tall wooden storage tower featuring top closed cabinets and heavy-duty open display shelves for books and decor.',
    shortDescriptionHi: 'किताबों और शोपीस के लिए मजबूत ओपन शेल्व्स और ऊपर बंद स्टोरेज कैबिनेट।',
    coverImage: getAssetUrl('projects/bookshelf-storage-tower.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/bookshelf-storage-tower.jpg'),
        caption: 'Vertical bookshelf tower with dark walnut backing and ivory trim',
        tag: 'Bookshelf'
      }
    ],
    projectStory: 'Built to utilize vertical wall space in a study corner, providing heavy-duty shelf support for law and medical reference books.',
    clientRequirement: 'Sturdy shelves that never sag under heavy books, with closed cabinets above for documents.',
    customRequirements: 'Reinforced 18mm plywood shelf battens with solid wood front lip.',
    craftsmanshipHighlight: 'Rigid dado joint shelf mortising for zero-sag heavy weight capacity.',
    materials: ['Dark Walnut Grain Laminate', '18mm Calibrated Hardwood Plywood', 'Soft-Close Hinges'],
    finish: 'Natural Matte Finish',
    dimensions: '3 ft (W) × 8.5 ft (H) × 16 in (D)',
    location: 'Alwar, Rajasthan',
    year: '2024',
    featured: false,
  },
  {
    id: 'crafted-wooden-bedside-cabinet',
    title: 'Crafted Teak Bedside Table Cabinet with Drawer',
    titleHi: 'सागवान वुडन बेडसाइड टेबल कैबिनेट',
    slug: 'crafted-teak-bedside-table-cabinet',
    category: 'Custom Furniture',
    designStyle: 'Classic & Sturdy',
    subtitle: 'Compact solid wood nightstand with top pull-out drawer, bottom shutter cabinet, and beaded frame border',
    shortDescription: 'Handcrafted bedside nightstand in natural teak finish with raised moulding border and satin chrome knobs.',
    shortDescriptionHi: 'ऊपर ड्रॉर और नीचे कैबिनेट के साथ बनी मजबूत लकड़ी की बेडसाइड टेबल।',
    coverImage: getAssetUrl('projects/wooden-bedside-table.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/wooden-bedside-table.jpg'),
        caption: 'Solid teak bedside nightstand with smooth drawer and cabinet storage',
        tag: 'Bedside Table'
      }
    ],
    projectStory: 'Custom-crafted to match a master bed suite, providing convenient bedside lamp placement and night storage.',
    clientRequirement: 'Compact nightstand with both a drawer for remotes and a cabinet for books.',
    customRequirements: 'Raised solid wood beading perimeter around the front facade.',
    craftsmanshipHighlight: 'Dovetail drawer joinery with smooth bottom runners.',
    materials: ['Natural Teak Veneer & Solid Wood Beading', 'Satin Chrome Knobs', 'Calibrated Hardwood Carcass'],
    finish: 'Silky Hand-Rubbed Teak Finish',
    dimensions: '18 in (W) × 24 in (H) × 16 in (D)',
    location: 'Alwar, Rajasthan',
    year: '2025',
    featured: false,
  },
  {
    id: 'fluted-marble-tv-unit',
    title: 'Modern Fluted Battens & Italian Marble TV Unit',
    titleHi: 'मॉडर्न फ्लूटेड व इटैलियन मार्बल टीवी यूनिट',
    slug: 'fluted-marble-tv-unit',
    category: 'TV Units',
    designStyle: 'Modern & Minimal',
    subtitle: 'Sleek charcoal fluted acoustic panel with white Italian marble backdrop, golden halo LED lighting, illuminated glass display tower, and floating console',
    shortDescription: 'Designer TV wall unit with vertical acoustic fluted panels, polished Italian marble, warm backlighting, and a multi-tier glass display showcase.',
    shortDescriptionHi: 'चारकोल फ्लूटेड पैनल्स, इटैलियन मार्बल, वॉर्म बैक-लाइटिंग और ग्लास डिस्प्ले टॉवर के साथ निर्मित आधुनिक टीवी यूनिट।',
    coverImage: getAssetUrl('projects/fluted-marble-tv-unit.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/fluted-marble-tv-unit.jpg'),
        caption: 'Modern fluted panel TV console with warm golden LED backlighting and illuminated glass shelving',
        tag: 'TV Unit'
      }
    ],
    projectStory: 'Custom designed for a contemporary apartment living room in Alwar. The homeowner wanted an ultra-clean, wire-free media focal point with integrated mood lighting and space for curated decor.',
    clientRequirement: 'Floating media unit with hidden wire management, display shelves for crystal decor, and warm ambient illumination.',
    customRequirements: 'Concealed internal cable raceways, high-CRI warm LED strip diffusers, and push-to-open handleless drawers.',
    craftsmanshipHighlight: 'Seamless flush joint between fluted timber louvers and polished Italian marble slab.',
    materials: ['Italian Marble Finish Panel', 'High-Density Acoustic Fluted Battens', 'Toughened Glass Shelves', 'Marine Calibrated Plywood'],
    finish: 'High-Gloss Marble & Matte Charcoal Fluting',
    dimensions: '8 ft (W) × 9 ft (H) × 16 in (D)',
    location: 'Raath Nagar, Alwar',
    year: '2025',
    featured: true,
  },
  {
    id: 'grand-teak-tv-entertainment-center',
    title: 'Grand Teak & Marble Entertainment Center with Display Tower',
    titleHi: 'भव्य सागवान व मार्बल टीवी एंटरटेनमेंट सेंटर',
    slug: 'grand-teak-tv-entertainment-center',
    category: 'TV Units',
    designStyle: 'Contemporary Luxury',
    subtitle: 'Full-wall bespoke entertainment unit in rich seasoned teak wood with fluted slat panel, marble TV wall, 4-tier open display tower, and 4 wide marble drawers',
    shortDescription: 'Grand living room TV entertainment center handcrafted in solid teak wood with book-matched marble backdrop, full-height display tower, and spacious base drawers.',
    shortDescriptionHi: 'मजबूत सागवान लकड़ी, इटैलियन मार्बल बैकड्रॉप, 4-लेवल ओपन डिस्प्ले टावर और 4 चौड़े ड्रॉअर्स से बना भव्य टीवी यूनिट।',
    coverImage: getAssetUrl('projects/grand-teak-tv-entertainment-center.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/grand-teak-tv-entertainment-center.jpg'),
        caption: 'Full living room perspective showcasing seasoned teak wood framing, open plant display tower, and marble drawer fronts',
        tag: 'Full Suite'
      }
    ],
    projectStory: 'Commissioned for a spacious villa hall in Alwar. The client desired a majestic, long-lasting focal wall combining classic solid wood warmth with contemporary marble accents.',
    clientRequirement: 'Ample open shelving for indoor bonsai and decor, deep drawers for gaming consoles, and heavy solid wood structure.',
    customRequirements: 'Reinforced heavy-duty drawer slides, matching top display bridge with hand-carved accents, and durable heat-resistant polish.',
    craftsmanshipHighlight: 'Hand-rubbed natural teak finish with precision mitered corner joints and zero sagging across wide spans.',
    materials: ['Seasoned Teak Timber & Veneer', 'High-Grade Calibrated Marine Plywood', 'Statuario Marble Panels', 'Heavy-Duty Telescopic Channels'],
    finish: 'Hand-Rubbed Satin Teak Polish & Gloss Marble',
    dimensions: '11 ft (W) × 8.5 ft (H) × 18 in (D)',
    location: 'Alwar, Rajasthan',
    year: '2025',
    featured: true,
  },
  {
    id: 'backlit-wall-showcase-niche',
    title: 'Built-In Backlit Architectural Wall Showcase Niche',
    titleHi: 'बिल्ट-इन बैक-लिट वॉल शोकेस व ट्रॉफी आला',
    slug: 'backlit-wall-showcase-niche',
    category: 'Interior Woodwork',
    designStyle: 'Architectural Elegance',
    subtitle: 'Recessed illuminated wall display niche with Italian marble back panel, staggered floating dark timber shelves, and warm top spotlights for trophies and heritage decor',
    shortDescription: 'Custom recessed architectural wall showcase framed with dark espresso moldings, marble back wall, and warm spotlights illuminating staggered floating shelves.',
    shortDescriptionHi: 'दीवार में बना हुआ खूबसूरत शोकेस, मार्बल बैक, फ्लोटिंग वुडन शेल्व्स और ट्रॉफियों के लिए वॉर्म स्पॉटलाइट्स।',
    coverImage: getAssetUrl('projects/backlit-wall-showcase-niche.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/backlit-wall-showcase-niche.jpg'),
        caption: 'Recessed wall showcase with warm spotlighting highlighting trophies and artistic brass artifacts',
        tag: 'Showcase Niche'
      }
    ],
    projectStory: 'Built into the living room wall of an avid sports and community leader in Alwar to elegantly showcase awards, trophies, and family memorabilia in an illuminated architectural frame.',
    clientRequirement: 'Dust-free recessed wall niche that highlights achievements and awards with gallery-grade lighting.',
    customRequirements: 'Concealed micro-spotlight diffusers, staggered cantilevered shelf brackets with hidden wall anchors.',
    craftsmanshipHighlight: 'Precision floating shelf load engineering with zero visible brackets on the marble backdrop.',
    materials: ['Dark Walnut Timber Trim', 'Polished Marble Backing', 'Recessed Low-Heat LED Spotlights', 'IS:710 Marine Plywood'],
    finish: 'Dark Walnut Semi-Gloss & Gilded Beading',
    dimensions: '5 ft (W) × 5.5 ft (H) × 10 in (D)',
    location: 'Raath Nagar, Alwar',
    year: '2025',
    featured: true,
  },
  {
    id: 'luxury-fluted-entertainment-wall',
    title: 'Luxury Fluted Oak & Statuario Marble Entertainment Wall',
    titleHi: 'लक्ज़री फ्लूटेड ओक व मार्बल एंटरटेनमेंट वॉल',
    slug: 'luxury-fluted-entertainment-wall',
    category: 'TV Units',
    designStyle: 'Modern Contemporary',
    subtitle: 'Architectural vertical fluted oak louvers with book-matched Statuario marble centerpiece, dual display towers with warm spotlights, and floating console with under-glow',
    shortDescription: 'Floor-to-ceiling architectural entertainment wall featuring vertical fluted oak battens, Statuario marble TV panel with halo lighting, and twin illuminated display niches.',
    shortDescriptionHi: 'फ्लोर-टू-सीलिंग फ्लूटेड ओक वुडवर्क, स्टैचूएरी मार्बल टीवी पैनल, बैक-लाइटिंग और फ्लोटिंग फ्लोर-ग्लो कंसोल।',
    coverImage: getAssetUrl('projects/luxury-fluted-entertainment-wall.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/luxury-fluted-entertainment-wall.jpg'),
        caption: 'Full architectural view of the fluted entertainment center with dual warm-lit display niches and floating floor-lit credenza',
        tag: 'Architectural Wall'
      }
    ],
    projectStory: 'Custom engineered for an upscale residence in Alwar. The goal was to produce a premier hotel-suite level feature wall combining acoustics, rich oak textures, and dramatic multi-zone LED lighting.',
    clientRequirement: 'Statement living room entertainment wall that conceals all wiring, TV boxes, and soundbars while delivering luxury ambient lighting.',
    customRequirements: 'Dual symmetrical display towers with precision warm spotlights, soft floor kickboard illumination, and acoustic fluting.',
    craftsmanshipHighlight: 'Continuous grain alignment on the base console drawers and shadow-gap ceiling integration.',
    materials: ['Natural Oak Veneered Louvers', 'Book-Matched Statuario Marble Slabs', 'High-CRI Ambient LED Channels', 'Marine Plywood Structure'],
    finish: 'Matte Natural Oak & High-Reflectivity Marble',
    dimensions: '14 ft (W) × 10 ft (H) × 18 in (D)',
    location: 'Alwar, Rajasthan',
    year: '2026',
    featured: true,
  },
  {
    id: 'contemporary-walnut-tv-console',
    title: 'Contemporary Dark Walnut & Italian Marble TV Console',
    titleHi: 'डार्क वॉलनट व इटैलियन मार्बल टीवी कंसोल',
    slug: 'contemporary-walnut-tv-console',
    category: 'TV Units',
    designStyle: 'Modern Minimalist',
    subtitle: 'Wall-mounted dark walnut TV console with open display shelving tower, glossy gold-veined marble backdrop, and 3-drawer floating credenza',
    shortDescription: 'Custom wall-mounted media console combining deep chocolate walnut woodwork, glossy Italian marble TV panel, vertical acoustic accents, and 3 wide storage drawers.',
    shortDescriptionHi: 'डार्क वॉलनट लकड़ी, गोल्डन-वेन मार्बल बैक पैनल, 4-कम्पार्टमेंट डिस्प्ले टावर और 3 फ्लोटिंग ड्रॉअर्स से बनी टीवी कंसोल।',
    coverImage: getAssetUrl('projects/contemporary-walnut-tv-console.jpg'),
    galleryImages: [
      {
        url: getAssetUrl('projects/contemporary-walnut-tv-console.jpg'),
        caption: 'Wall-hung dark walnut media console with marble panel and side open shelf tower on wooden parquet flooring',
        tag: 'Living Console'
      }
    ],
    projectStory: 'Installed in Shalimar, Alwar for a client looking for a sleek, contemporary media setup that leaves the floor open and easy to clean while offering organized storage.',
    clientRequirement: 'Floating wall-hung media unit with display niche for ceramics and books, and hidden wire management.',
    customRequirements: 'Heavy-duty wall anchor bracket system capable of supporting heavy loads with zero wall vibration.',
    craftsmanshipHighlight: 'Precision edge-banded miters and smooth ball-bearing drawer runners.',
    materials: ['Dark Walnut Grain Laminate & Timber', 'Italian Marble Gloss Cladding', 'Heavy-Duty Wall Mounting Brackets', '18mm BWP Plywood'],
    finish: 'Deep Walnut Satin Finish & Gloss Marble',
    dimensions: '7.5 ft (W) × 8 ft (H) × 15 in (D)',
    location: 'Shalimar, Alwar',
    year: '2025',
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
    location: 'Alwar, Rajasthan',
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
    beforeImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80',
    beforeLabel: 'Raw Timber Slabs',
    afterLabel: 'Handcrafted Table',
    location: 'Alwar, Rajasthan',
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
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=800&q=80',
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
    id: 't-pankaj',
    name: 'Pankaj',
    location: 'Shalimar, Alwar (Rajasthan)',
    projectType: 'Complete Home Woodwork & Wardrobe Suite',
    quote: 'Makhan Carpenter crafted our wardrobes, bedroom woodwork, and study unit in Shalimar Alwar with exceptional quality. His 20+ years of experience is visible in every corner, smooth soft-close shutter, and fine edge finish.',
    quoteHi: 'माखन कारपेंटर ने शालीमार अलवर में हमारे घर की अलमारियां और बेडरूम का पूरा वुडवर्क बहुत ही बारीकी और मजबूती से तैयार किया। काम की फिनिशिंग और ईमानदारी वाकई काबिले तारीफ है।',
    rating: 5,
    date: 'Verified Client'
  },
  {
    id: 't-1',
    name: 'Alwar Residence',
    location: 'Raath Nagar, Alwar (Rajasthan)',
    projectType: 'Custom Wardrobes & Modular Kitchen',
    quote: 'Makhan Carpenter completed our complete home woodwork on time with great precision and smooth finishing. Very honest and trustworthy work.',
    quoteHi: 'माखन कारपेंटर ने हमारे घर का पूरा फर्नीचर समय पर और बहुत ही सुंदर फिनिशिंग के साथ तैयार किया। बहुत ही ईमानदार और भरोसेमंद काम।',
    rating: 5,
    date: 'Verified Client'
  },
  {
    id: 't-2',
    name: 'Alwar Villa Client',
    location: 'Alwar (Rajasthan)',
    projectType: 'Solid Teak Dining Table & Master Bed',
    quote: 'The quality of solid teak and joinery in our 8-seater dining table is outstanding. Truly skilled craftsmanship that you rarely find today.',
    quoteHi: 'डाइनिंग टेबल और बेड की मजबूती और लकड़ी की क्वालिटी बहुत शानदार है। पारंपरिक सागवान का काम बहुत ही बढ़िया किया।',
    rating: 5,
    date: 'Verified Client'
  },
  {
    id: 't-3',
    name: 'Alwar Villa Project',
    location: 'Alwar (Rajasthan)',
    projectType: 'Fluted TV Unit & Kids Room',
    quote: 'Understood our design requirements clearly and gave practical suggestions for space utilization. The backlit floral jali bed looks stunning.',
    quoteHi: 'हमारी पसंद के अनुसार नाप लेकर एकदम सही टीवी यूनिट और बेडरूम फर्नीचर बनाया। काम में बहुत सफाई है।',
    rating: 5,
    date: 'Verified Client'
  }
];

export const galleryImages = [
  {
    url: getAssetUrl('projects/designer-jali-bed.jpg'),
    title: 'Designer Backlit CNC Jali King Bed',
    titleHi: 'बैक-लिट सीएनसी जाली किंग बेड',
    category: 'Bedroom',
    location: 'Raath Nagar, Alwar'
  },
  {
    url: getAssetUrl('projects/tufted-wooden-bed.jpg'),
    title: 'Diamond-Tufted Velvet & Walnut King Bed',
    titleHi: 'डायमंड टफ्टेड वॉलनट किंग बेड',
    category: 'Bedroom',
    location: 'Alwar, Rajasthan'
  },
  {
    url: getAssetUrl('projects/custom-sectional-sofa.jpg'),
    title: 'Channel-Tufted Sectional Sofa & Ottoman',
    titleHi: 'चैनल टफ्टेड सोफा व सेंटर टेबल',
    category: 'Living Room',
    location: 'Alwar, Rajasthan'
  },
  {
    url: getAssetUrl('projects/study-desk-wardrobe.jpg'),
    title: 'Integrated Walnut Study Desk & Wardrobe Suite',
    titleHi: 'स्टडी डेस्क व वॉर्डरोब कॉम्बो',
    category: 'Wardrobes',
    location: 'Raath Nagar, Alwar'
  },
  {
    url: getAssetUrl('projects/modular-kitchen-white.jpg'),
    title: 'High-Gloss White Acrylic Modular Kitchen',
    titleHi: 'हाई-ग्लॉस व्हाइट मॉड्यूलर किचन',
    category: 'Kitchen',
    location: 'Alwar, Rajasthan'
  },
  {
    url: getAssetUrl('projects/walnut-modular-wardrobe.jpg'),
    title: 'Floor-to-Ceiling Walnut Modular Wardrobe',
    titleHi: 'फ्लोर-टू-सीलिंग मॉड्यूलर अलमारी',
    category: 'Wardrobes',
    location: 'Alwar, Rajasthan'
  },
  {
    url: getAssetUrl('projects/wooden-dressing-unit.jpg'),
    title: 'Solid Wood Dressing Table with Full Mirror',
    titleHi: 'सॉलिड वुड ड्रेसिंग टेबल व फुल मिरर',
    category: 'Custom Furniture',
    location: 'Raath Nagar, Alwar'
  },
  {
    url: getAssetUrl('projects/bookshelf-storage-tower.jpg'),
    title: 'Multi-Tier Bookshelf & Storage Tower',
    titleHi: 'मल्टी-टियर बुकशेल्फ व स्टोरेज टावर',
    category: 'Office',
    location: 'Alwar, Rajasthan'
  },
  {
    url: getAssetUrl('projects/wooden-bedside-table.jpg'),
    title: 'Crafted Teak Bedside Table Cabinet',
    titleHi: 'सागवान वुडन बेडसाइड टेबल',
    category: 'Custom Furniture',
    location: 'Raath Nagar, Alwar'
  },
  {
    url: getAssetUrl('projects/fluted-marble-tv-unit.jpg'),
    title: 'Modern Fluted Battens & Italian Marble TV Unit',
    titleHi: 'मॉडर्न फ्लूटेड व इटैलियन मार्बल टीवी यूनिट',
    category: 'TV Units',
    location: 'Raath Nagar, Alwar'
  },
  {
    url: getAssetUrl('projects/grand-teak-tv-entertainment-center.jpg'),
    title: 'Grand Teak & Marble Entertainment Center',
    titleHi: 'भव्य सागवान व मार्बल टीवी एंटरटेनमेंट सेंटर',
    category: 'TV Units',
    location: 'Alwar, Rajasthan'
  },
  {
    url: getAssetUrl('projects/backlit-wall-showcase-niche.jpg'),
    title: 'Built-In Backlit Wall Showcase Niche',
    titleHi: 'बिल्ट-इन बैक-लिट वॉल शोकेस',
    category: 'Interior Woodwork',
    location: 'Raath Nagar, Alwar'
  },
  {
    url: getAssetUrl('projects/luxury-fluted-entertainment-wall.jpg'),
    title: 'Luxury Fluted Oak Entertainment Wall',
    titleHi: 'लक्ज़री फ्लूटेड ओक एंटरटेनमेंट वॉल',
    category: 'TV Units',
    location: 'Alwar, Rajasthan'
  },
  {
    url: getAssetUrl('projects/contemporary-walnut-tv-console.jpg'),
    title: 'Contemporary Dark Walnut TV Console',
    titleHi: 'डार्क वॉलनट टीवी कंसोल',
    category: 'TV Units',
    location: 'Shalimar, Alwar'
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
    description: 'Makhan Carpenter conducts on-site measurements across Alwar to record exact wall angles and levels.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    keyAction: 'On-site laser survey across Alwar'
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
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=800&q=80',
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
    description: 'Practical woodcraft mastery honed across two decades of custom carpentry in Raath Nagar and Alwar.'
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
