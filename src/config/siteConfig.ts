export const siteConfig = {
  companyName: 'Orion Software & Trading',
  companyShortName: 'Orion',
  tagline: 'Complete Technology Solutions. From Software to Infrastructure.',
  description:
    'Orion Software & Trading delivers custom software solutions, IT hardware, professional installation, system configuration, and ongoing technical support — all under one roof.',
  url: 'https://www.orionsoftware.com', // placeholder - owner must configure
  logo: '/images/orion-logo.png',

  // Contact - ALL MUST BE CONFIGURED BY OWNER
  contact: {
    phone: '', // Owner must provide
    whatsapp: '', // Owner must provide
    email: '', // Owner must provide
    address: '', // Owner must provide
    city: '', // Owner must provide
    country: '', // Owner must provide
    mapUrl: '', // Owner must provide Google Maps embed URL
    mapLink: '', // Owner must provide Google Maps link
  },

  social: {
    facebook: '', // Owner must provide
    twitter: '', // Owner must provide
    linkedin: '', // Owner must provide
    instagram: '', // Owner must provide
    youtube: '', // Owner must provide
  },

  // Analytics - Owner must provide
  analytics: {
    googleAnalyticsId: '', // e.g., 'G-XXXXXXXXXX'
    googleTagManagerId: '', // e.g., 'GTM-XXXXXXX'
    googleSearchConsoleVerification: '',
  },

  seo: {
    defaultTitle: 'Orion Software & Trading | Complete Technology Solutions',
    titleTemplate: '%s | Orion Software & Trading',
    defaultDescription:
      'Orion Software & Trading provides custom software development, IT hardware supply, professional installation, and ongoing technical support for businesses.',
    defaultKeywords: [
      'software development company',
      'custom software development',
      'IT hardware supplier',
      'IT equipment supplier',
      'network installation',
      'server installation',
      'technical support services',
      'web development',
      'mobile app development',
      'ERP software',
      'CRM development',
    ],
    locale: 'en_US',
    type: 'website',
  },
} as const;
