export const siteConfig = {
  companyName: 'Orion Software & Trading',
  companyShortName: 'Orion',
  tagline: 'Complete Technology Solutions. From Software to Infrastructure.',
  description:
    'Orion Software & Trading delivers custom software solutions, IT hardware supply, professional installation, system configuration, and ongoing technical support — all under one roof.',
  url: 'https://orionswtrading.com',
  logo: '/images/orion-logo.png',
  logoWebp: '/images/orion-logo.webp',
  defaultOgImage: '/images/og/og-default.jpg',

  // Corporate NAP & Official Verification Data
  contact: {
    phone: '+971 4 234 5678',
    whatsapp: '+971 50 123 4567',
    email: 'info@orionswtrading.com',
    supportEmail: 'support@orionswtrading.com',
    salesEmail: 'sales@orionswtrading.com',
    address: 'Office 1402, Iris Bay Tower, Business Bay',
    city: 'Dubai',
    state: 'Dubai',
    country: 'United Arab Emirates',
    postalCode: '415234',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785536481745!2d55.2631!3d25.1872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def9f5a77%3A0x8892f3b92482!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1680000000000!5m2!1sen!2sae',
    mapLink: 'https://maps.google.com/?q=Orion+Software+Trading+Business+Bay+Dubai',
    latitude: 25.1872,
    longitude: 55.2631,
    openingHours: 'Mo-Sa 09:00-18:00',
    foundingYear: '2018',
  },

  social: {
    facebook: 'https://www.facebook.com/orionswtrading',
    twitter: 'https://x.com/orionswtrading',
    linkedin: 'https://www.linkedin.com/company/orionswtrading',
    instagram: 'https://www.instagram.com/orionswtrading',
    youtube: 'https://www.youtube.com/@orionswtrading',
  },

  // Analytics & Webmaster Verification
  analytics: {
    googleAnalyticsId: 'G-ORION01TR',
    googleTagManagerId: 'GTM-ORION01',
    googleSearchConsoleVerification: 'gsc-orionswtrading-v1-verified',
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
