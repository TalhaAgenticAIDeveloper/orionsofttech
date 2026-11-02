import { describe, it, expect } from 'vitest';
import { softwareServices, getServiceBySlug } from '@/data/services/softwareServices';
import { products, getProductBySlug, searchProducts, getRelatedProducts } from '@/data/products/products';
import { contactFormSchema } from '@/schemas/contactSchema';
import { generateWhatsAppUrl, generateProductInquiryMessage, generateServiceInquiryMessage } from '@/utils/whatsapp';
import { footerProductLinks, footerServiceLinks, footerQuickLinks } from '@/config/navigationConfig';

describe('Software Services Data', () => {
  it('contains exactly 16 software services', () => {
    expect(softwareServices.length).toBe(16);
  });

  it('can look up services by slug', () => {
    const erp = getServiceBySlug('erp-solutions');
    expect(erp).toBeDefined();
    expect(erp?.name).toContain('Enterprise Resource Planning');
    expect(erp?.features.length).toBeGreaterThan(4);
    expect(erp?.faqs.length).toBeGreaterThan(3);
  });

  it('returns undefined for non-existent service slug', () => {
    const invalid = getServiceBySlug('non-existent-slug');
    expect(invalid).toBeUndefined();
  });
});

describe('Product Catalog Data', () => {
  it('contains products across enterprise categories', () => {
    expect(products.length).toBeGreaterThan(15);
  });

  it('retrieves products by slug', () => {
    const laptop = getProductBySlug('dell-latitude-5540-laptop');
    expect(laptop).toBeDefined();
    expect(laptop?.brand).toBe('Dell');
    expect(laptop?.specifications.length).toBeGreaterThan(3);
  });

  it('searches products by brand and keywords', () => {
    const results = searchProducts('cisco');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].brand).toBe('Cisco');
  });

  it('retrieves related products without self-reference', () => {
    const related = getRelatedProducts('prod-dell-latitude-5540');
    expect(related.length).toBeGreaterThan(0);
    expect(related.some((p) => p.id === 'prod-dell-latitude-5540')).toBe(false);
  });
});

describe('Contact Form Validation Schema', () => {
  it('validates correct submission payload', () => {
    const validData = {
      fullName: 'John Doe',
      email: 'john.doe@company.com',
      phone: '+923001234567',
      company: 'Enterprise Corp',
      inquiryType: 'software-development' as const,
      subject: 'Custom ERP Development Inquiry',
      message: 'We require a custom inventory and accounting ERP system for 3 branches.',
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects invalid email addresses', () => {
    const invalidData = {
      fullName: 'John Doe',
      email: 'not-an-email',
      phone: '+923001234567',
      inquiryType: 'software-development' as const,
      subject: 'Inquiry',
      message: 'Valid message content goes here for testing.',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('rejects short messages', () => {
    const invalidData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+923001234567',
      inquiryType: 'general-inquiry' as const,
      subject: 'Inquiry',
      message: 'Short',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe('WhatsApp Integration Utilities', () => {
  it('generates properly formatted product inquiry messages', () => {
    const msg = generateProductInquiryMessage('Dell PowerEdge R760');
    expect(msg).toContain('Dell PowerEdge R760');
    expect(msg).toContain('availability, specifications, and quotation');
  });

  it('generates properly formatted service inquiry messages', () => {
    const msg = generateServiceInquiryMessage('Custom Software Development');
    expect(msg).toContain('Custom Software Development');
  });
});

describe('Footer Navigation Links', () => {
  it('has valid target paths for all product categories', () => {
    for (const link of footerProductLinks) {
      expect(link.path).toMatch(/^\/it-products(\?category=[a-z0-9-]+)?$/);
    }
  });

  it('contains UPS and POS systems category links pointing to valid categories', () => {
    const ups = footerProductLinks.find((l) => l.label.includes('UPS'));
    expect(ups).toBeDefined();
    expect(ups?.path).toBe('/it-products?category=power-backup-solutions');

    const pos = footerProductLinks.find((l) => l.label.includes('POS'));
    expect(pos).toBeDefined();
    expect(pos?.path).toBe('/it-products?category=pos-and-retail-solutions');
  });
});

