import { describe, it, expect } from 'vitest';
import { siteConfig } from '@/config/siteConfig';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateProductSchema,
} from '@/utils/seo';
import { productCategories } from '@/data/categories/productCategories';
import {
  supportServices,
  getSupportServiceBySlug,
  getRelatedSupportServices,
} from '@/data/services/supportServices';

describe('Technical & On-Page SEO Verification', () => {
  it('has verified primary production domain configured', () => {
    expect(siteConfig.url).toBe('https://orionswtrading.com');
    expect(siteConfig.url.startsWith('https://')).toBe(true);
    expect(siteConfig.url.includes('placeholder')).toBe(false);
  });

  it('has full official corporate NAP data populated for E-E-A-T signals', () => {
    expect(siteConfig.contact.phone).toBeTruthy();
    expect(siteConfig.contact.whatsapp).toBeTruthy();
    expect(siteConfig.contact.email).toBeTruthy();
    expect(siteConfig.contact.address).toBeTruthy();
    expect(siteConfig.contact.city).toBeTruthy();
    expect(siteConfig.contact.country).toBeTruthy();
    expect(siteConfig.contact.latitude).toBeGreaterThan(0);
    expect(siteConfig.contact.longitude).toBeGreaterThan(0);
  });

  it('generates compliant Organization schema with NAP and sameAs profiles', () => {
    const org = generateOrganizationSchema();
    expect(org['@type']).toBe('Organization');
    expect(org.name).toBe(siteConfig.companyName);
    expect(org.email).toBe(siteConfig.contact.email);
    expect(org.telephone).toBe(siteConfig.contact.phone);
    expect(org.address['@type']).toBe('PostalAddress');
    expect(org.address.streetAddress).toBe(siteConfig.contact.address);
    expect(org.address.addressLocality).toBe(siteConfig.contact.city);
    expect(org.address.addressCountry).toBe(siteConfig.contact.country);
    expect(org.sameAs.length).toBeGreaterThanOrEqual(3);
  });

  it('generates compliant LocalBusiness schema for Google Local Pack eligibility', () => {
    const local = generateLocalBusinessSchema();
    expect(local['@type']).toContain('LocalBusiness');
    expect(local['@type']).toContain('ProfessionalService');
    expect(local.geo['@type']).toBe('GeoCoordinates');
    expect(local.geo.latitude).toBe(siteConfig.contact.latitude);
    expect(local.geo.longitude).toBe(siteConfig.contact.longitude);
    expect(local.openingHoursSpecification.length).toBeGreaterThan(0);
  });

  it('generates valid BreadcrumbList schema with absolute URLs', () => {
    const breadcrumb = generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'IT Products', url: '/it-products' },
      { name: 'Laptops', url: '/it-products?category=laptops' },
    ]);
    expect(breadcrumb['@type']).toBe('BreadcrumbList');
    expect(breadcrumb.itemListElement.length).toBe(3);
    expect(breadcrumb.itemListElement[0].position).toBe(1);
    expect(breadcrumb.itemListElement[0].item).toBe(`${siteConfig.url}/`);
    expect(breadcrumb.itemListElement[1].item).toBe(`${siteConfig.url}/it-products`);
  });

  it('generates compliant B2B Product schema with quotation offers', () => {
    const prod = generateProductSchema({
      name: 'Dell Latitude 5540 Laptop',
      description: 'Enterprise 15.6 business laptop',
      brand: 'Dell',
      sku: 'dell-latitude-5540',
      category: 'laptops',
      url: '/it-products/laptops/dell-latitude-5540-laptop',
    });
    expect(prod['@type']).toBe('Product');
    expect(prod.name).toBe('Dell Latitude 5540 Laptop');
    expect(prod.brand?.name).toBe('Dell');
    expect(prod.offers['@type']).toBe('Offer');
    expect(prod.offers.priceSpecification['@type']).toBe('UnitPriceSpecification');
    expect(prod.offers.availability).toBe('https://schema.org/InStock');
  });

  it('verifies all category canonicals point to /it-products?category=', () => {
    productCategories.forEach((cat) => {
      expect(cat.seo.canonicalPath.startsWith('/it-products?category=')).toBe(true);
      expect(cat.seo.canonicalPath.includes('/products/')).toBe(false);
    });
  });

  it('provides dedicated landing page support for technical support services', () => {
    expect(supportServices.length).toBeGreaterThanOrEqual(10);
    const cctv = getSupportServiceBySlug('cctv-installation');
    expect(cctv).toBeDefined();
    expect(cctv?.name).toBe('CCTV Installation');

    const server = getSupportServiceBySlug('server-setup');
    expect(server).toBeDefined();

    const related = getRelatedSupportServices('cctv-installation', 3);
    expect(related.length).toBe(3);
    expect(related.some((s) => s.slug === 'cctv-installation')).toBe(false);
  });
});
