export type Language = 'en' | 'hi';

export type ProjectCategory = 
  | 'All'
  | 'Bedroom'
  | 'Living Room'
  | 'Wardrobes'
  | 'Kitchen'
  | 'Dining'
  | 'TV Units'
  | 'Office'
  | 'Doors'
  | 'Interior Woodwork'
  | 'Kids'
  | 'Custom Furniture';

export interface ProjectImage {
  url: string;
  caption: string;
  tag?: string;
}

export interface Project {
  id: string;
  title: string;
  titleHi?: string;
  slug: string;
  category: ProjectCategory;
  designStyle: string;
  subtitle: string;
  shortDescription: string;
  shortDescriptionHi?: string;
  coverImage: string;
  galleryImages: ProjectImage[];
  projectStory: string;
  projectStoryHi?: string;
  clientRequirement: string;
  customRequirements?: string;
  craftsmanshipHighlight: string;
  materials: string[];
  finish: string;
  dimensions?: string;
  location: string;
  year?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  titleHi: string;
  shortDesc: string;
  shortDescHi: string;
  fullDesc: string;
  fullDescHi?: string;
  image: string;
  features: string[];
  featuresHi?: string[];
  suitableFor: string;
  popularWoods: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  titleHi?: string;
  subtitle: string;
  description: string;
  descriptionHi?: string;
  image: string;
  keyAction: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  titleHi?: string;
  category: string;
  description: string;
  descriptionHi?: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  location: string;
  resultSummary: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  category: 'Natural Solid Wood' | 'Engineered Wood' | 'Finishes & Veneer' | 'Architectural Hardware';
  image: string;
  description: string;
  grainCharacter: string;
  durability: string;
  bestFor: string;
  finishType: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  projectType: string;
  quote: string;
  quoteHi?: string;
  rating: number;
  date?: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  labelHi: string;
  description: string;
  descriptionHi: string;
}

export interface FurnitureStyle {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  descriptionHi: string;
  image: string;
  tags: string[];
}

export interface RoomPossibility {
  id: string;
  roomName: string;
  roomNameHi: string;
  image: string;
  items: string[];
  itemsHi: string[];
  description: string;
  descriptionHi: string;
}

export interface QuoteFormData {
  furnitureType: string;
  dimensions: string;
  woodPreference: string;
  projectDescription: string;
  name: string;
  phone: string;
  preferredContact: 'Call' | 'WhatsApp';
  location: string;
  hasReferenceImage?: boolean;
}
