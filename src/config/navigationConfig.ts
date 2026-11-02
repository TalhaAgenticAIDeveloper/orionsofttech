import type { NavItem } from '@/types';

export const mainNavItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Software Solutions', path: '/software-solutions' },
  { label: 'IT Products', path: '/it-products' },
  { label: 'Technical Support', path: '/technical-support' },
  { label: 'Contact', path: '/contact' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Software Solutions', path: '/software-solutions' },
  { label: 'IT Products', path: '/it-products' },
  { label: 'Technical Support', path: '/technical-support' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-and-conditions' },
];

export const footerServiceLinks: NavItem[] = [
  {
    label: 'Custom Software Development',
    path: '/software-solutions/custom-software-development',
  },
  { label: 'Web Application Development', path: '/software-solutions/web-development' },
  { label: 'Mobile App Development', path: '/software-solutions/mobile-app-development' },
  { label: 'ERP Solutions', path: '/software-solutions/erp-solutions' },
  { label: 'AI Solutions', path: '/software-solutions/ai-solutions' },
  { label: 'Cloud Applications', path: '/software-solutions/cloud-applications' },
];

export const footerProductLinks: NavItem[] = [
  { label: 'Laptops & Notebooks', path: '/it-products?category=laptops' },
  {
    label: 'Servers & Components',
    path: '/it-products?category=servers-and-server-components',
  },
  { label: 'Networking Equipment', path: '/it-products?category=networking-equipment' },
  { label: 'CCTV & Surveillance', path: '/it-products?category=cctv-and-surveillance' },
  { label: 'UPS & Power Systems', path: '/it-products?category=power-backup-solutions' },
  { label: 'POS & Retail Systems', path: '/it-products?category=pos-and-retail-solutions' },
];
