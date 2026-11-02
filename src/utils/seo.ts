import { siteConfig } from '@/config/siteConfig';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.companyName,
    alternateName: siteConfig.companyShortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logoWebp || siteConfig.logo}`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    foundingDate: siteConfig.contact.foundingYear,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: siteConfig.contact.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'customer support',
        email: siteConfig.contact.supportEmail || siteConfig.contact.email,
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.whatsapp,
        contactType: 'sales',
        email: siteConfig.contact.salesEmail || siteConfig.contact.email,
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.companyName,
    alternateName: siteConfig.companyShortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logoWebp || siteConfig.logo}`,
    image: `${siteConfig.url}/images/og/og-home.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Wire Transfer, Bank Transfer',
    currenciesAccepted: 'AED, USD, EUR, GBP',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: siteConfig.contact.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.contact.latitude,
      longitude: siteConfig.contact.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Middle East',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Worldwide',
      },
    ],
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.companyName,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.companyName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/it-products?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}${service.url}#service`,
    name: service.name,
    description: service.description,
    serviceType: service.serviceType || 'IT & Software Engineering Services',
    provider: {
      '@type': 'Organization',
      name: siteConfig.companyName,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Global',
    },
    url: `${siteConfig.url}${service.url}`,
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  brand?: string;
  url: string;
  image?: string;
  sku?: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${siteConfig.url}${product.url}#product`,
    name: product.name,
    description: product.description,
    ...(product.sku ? { sku: product.sku } : {}),
    ...(product.category ? { category: product.category } : {}),
    ...(product.brand
      ? {
          brand: {
            '@type': 'Brand',
            name: product.brand,
          },
        }
      : {}),
    ...(product.image
      ? {
          image: product.image.startsWith('http')
            ? product.image
            : `${siteConfig.url}${product.image}`,
        }
      : {}),
    url: `${siteConfig.url}${product.url}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0.00',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceType: 'https://schema.org/InvoicePrice',
        description: 'Available upon commercial inquiry and bill of quantities (BOQ) quotation',
      },
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}${product.url}`,
      seller: {
        '@type': 'Organization',
        name: siteConfig.companyName,
        url: siteConfig.url,
      },
    },
  };
}

export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}${page.url}#webpage`,
    name: page.name,
    description: page.description,
    url: `${siteConfig.url}${page.url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.companyName,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.companyName,
      url: siteConfig.url,
    },
  };
}

export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteConfig.url}/contact#webpage`,
    name: 'Contact Orion Software & Trading | Quotations & Inquiries',
    description:
      'Contact Orion Software & Trading for software development inquiries, IT hardware quotations, installation services, and technical support.',
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.companyName,
      url: siteConfig.url,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address,
        addressLocality: siteConfig.contact.city,
        addressRegion: siteConfig.contact.state,
        postalCode: siteConfig.contact.postalCode,
        addressCountry: siteConfig.contact.country,
      },
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
