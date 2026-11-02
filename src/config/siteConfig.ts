export const siteConfig = {
  companyName: 'Orion Software & Trading',
  companyShortName: 'Orion SoftTech',
  tagline: 'Complete Technology Solutions. From Software to Infrastructure.',
  description:
    'Orion Software & Trading delivers custom software solutions, IT hardware supply, professional installation, system configuration, and ongoing technical support — all under one roof.',
  url: 'https://orionsofttech.com',
  logo: '/images/orion-logo.png',
  logoWebp: '/images/orion-logo.webp',
  defaultOgImage: '/images/og/og-default.jpg',

  // Corporate NAP & Official Verification Data
  contact: {
    phone: '042 35522792',
    phoneIntl: '+92 42 35522792',
    whatsapp: '+92 339 4022705',
    whatsappDigits: '923394022705',
    email: 'info@orionsofttech.com',
    supportEmail: 'support@orionsofttech.com',
    salesEmail: 'sales@orionsofttech.com',
    address: '3rd Floor, 13-A/C, Commercial Area, Block-E, Mohafiz Town Phase-I, Canal Road',
    city: 'Lahore',
    state: 'Punjab',
    country: 'Pakistan',
    countryCode: 'PK',
    postalCode: '54000',
    mapUrl:
      'https://maps.google.com/maps?q=3rd+Floor,+13-A/C,+Commercial+Area,+Block-E,+Mohafiz+Town+Phase-I,+Canal+Road,+Lahore,+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapLink:
      'https://maps.google.com/?q=Mohafiz+Town+Phase+1+Canal+Road+Lahore+Pakistan',
    latitude: 31.4697,
    longitude: 74.2415,
    openingHours: 'Mo-Sa 09:00-18:00',
    foundingYear: '2018',
  },

  social: {
    facebook: 'https://www.facebook.com/orionsofttech',
    twitter: 'https://x.com/orionsofttech',
    linkedin: 'https://www.linkedin.com/company/orionsofttech',
    instagram: 'https://www.instagram.com/orionsofttech',
    youtube: 'https://www.youtube.com/@orionsofttech',
  },

  // Analytics & Webmaster Verification
  analytics: {
    googleAnalyticsId: 'G-ORIONST01',
    googleTagManagerId: 'GTM-ORION01',
    googleSearchConsoleVerification: 'gsc-orionsofttech-v1-verified',
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
