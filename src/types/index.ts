export type CustomerType = 
  | 'Student' 
  | 'Startup' 
  | 'Business' 
  | 'Individual' 
  | 'Other';

export type ServiceRequired =
  | 'Resume Build'
  | 'Portfolio Website'
  | 'College Project'
  | 'Training & Learn'
  | 'Business Website'
  | 'E-commerce Website'
  | 'AI Application'
  | 'Custom Web Application'
  | 'Other';

export type BudgetTier =
  | 'Below ₹500'
  | '₹500–₹1,000'
  | '₹1,000–₹3,000'
  | '₹3,000–₹5,000'
  | 'Above ₹5,000'
  | 'Not Decided';

export type ContactMethod = 'WhatsApp' | 'Email' | 'Instagram';

export type EnquiryStatus = 'new' | 'in-progress' | 'completed' | 'cancelled';

export interface Enquiry {
  id: string;
  enquiry_number: string;
  full_name: string;
  whatsapp_number: string;
  email: string;
  customer_type: CustomerType;
  service_required: ServiceRequired;
  budget: BudgetTier;
  project_description: string;
  contact_preference: ContactMethod;
  delivery_date?: string | null;
  reference_url?: string | null;
  attachment_path?: string | null;
  status: EnquiryStatus;
  notes?: string | null;
  created_at: string;
  updated_at: string;
}

export interface ServiceItem {
  id: string;
  key: string;
  title: string;
  tagline: string;
  priceFormatted: string;
  numericPrice: number;
  priceNote?: string;
  description: string;
  features: string[];
  popular?: boolean;
  category: 'Student' | 'Career' | 'Academic' | 'Education' | 'Business';
  gradient: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  client: string;
  tagline: string;
  description: string;
  category: 'E-Commerce' | 'Portfolio' | 'AI Application' | 'Academic' | 'Business' | 'Healthcare' | 'Cybersecurity' | 'Utility' | 'Multi-Agent';
  badge?: string;
  isLive?: boolean;
  iconName?: string;
  featured: boolean;
  published: boolean;
  thumbnail: string;
  bannerImage?: string;
  screenshots: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  keyFeatures: { title: string; description: string; icon?: string }[];
  adminFeatures?: string[];
  results?: string[];
  completedAt: string;
}

export interface TeamMember {
  name: string;
  role: string;
  college: string;
  degree: string;
  batch: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  portfolio: string;
  avatar: string;
  skills: string[];
  strengths: string[];
  tagline: string;
}
