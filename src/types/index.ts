export type ProjectCategory = 
  | 'All'
  | 'Living Room'
  | 'Bedroom'
  | 'Wardrobes'
  | 'Dining'
  | 'Kitchen'
  | 'Office Furniture'
  | 'Doors'
  | 'Custom Furniture'
  | 'Wooden Interiors';

export interface ProjectImage {
  url: string;
  caption: string;
  tag?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  subtitle: string;
  shortDescription: string;
  coverImage: string;
  galleryImages: ProjectImage[];
  projectStory: string;
  clientRequirement: string;
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
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  suitableFor: string;
  popularWoods: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  keyAction: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
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
  rating: number;
  date?: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface QuoteFormData {
  furnitureType: string[];
  roomType: string;
  dimensions: string;
  woodPreference: string;
  finishPreference: string;
  budgetRange: string;
  timeframe: string;
  projectDescription: string;
  name: string;
  phone: string;
  email: string;
  location: string;
}
