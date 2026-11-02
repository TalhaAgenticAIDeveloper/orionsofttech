// Service types
export interface SoftwareService {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Lucide icon name
  heroImage?: string;
  problems: string[];
  features: Feature[];
  benefits: Benefit[];
  useCases: UseCase[];
  developmentApproach: DevelopmentStep[];
  technologies?: string[];
  faqs: FAQ[];
  seo: SEOMetadata;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

export interface UseCase {
  title: string;
  description: string;
  industry?: string;
}

export interface DevelopmentStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  ogImage?: string;
}

// Product types
export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  image?: string;
  parentCategoryId?: string;
  subcategories?: string[];
  seo: SEOMetadata;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  categorySlug: string;
  brand?: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
  images?: string[];
  specifications: ProductSpecification[];
  useCases: string[];
  relatedProductIds?: string[];
  seo: SEOMetadata;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

// Support types
export interface SupportService {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

// Contact types
export interface InquiryType {
  value: string;
  label: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  inquiryType: string;
  subject: string;
  message: string;
  honeypot?: string; // spam protection
}

// Navigation types
export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

// Industry types
export interface Industry {
  name: string;
  description: string;
  icon: string;
}

// Theme
export type Theme = 'light' | 'dark';
