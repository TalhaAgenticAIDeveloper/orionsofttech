import { describe, it, expect } from 'vitest';
import { products, getProductBySlug, searchProducts, getRelatedProducts } from '@/data/products/products';
import { productCategories, getCategoryBySlug, getSubcategories } from '@/data/categories/productCategories';
import { CATEGORY_GROUPS } from '@/pages/ITProducts/ITProductsPage';

describe('Comprehensive IT Product Catalog Audit', () => {
  it('contains over 100 enterprise IT products across categories A-T', () => {
    expect(products.length).toBeGreaterThanOrEqual(100);
  });

  it('guarantees 100% unique product IDs', () => {
    const ids = products.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(products.length);
  });

  it('guarantees 100% unique product slugs', () => {
    const slugs = products.map((p) => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(products.length);
  });

  it('verifies all products reference an existing category ID', () => {
    const categoryIds = new Set(productCategories.map((c) => c.id));
    products.forEach((p) => {
      expect(
        categoryIds.has(p.categoryId),
        `Product "${p.name}" has invalid categoryId: "${p.categoryId}"`
      ).toBe(true);
    });
  });

  it('verifies all products have valid specifications and use cases', () => {
    products.forEach((p) => {
      expect(p.name.trim().length).toBeGreaterThan(0);
      expect(p.shortDescription.trim().length).toBeGreaterThan(15);
      expect(p.fullDescription.trim().length).toBeGreaterThan(30);
      expect(p.specifications.length).toBeGreaterThanOrEqual(3);
      expect(p.useCases.length).toBeGreaterThanOrEqual(2);
      expect(p.seo.title.trim().length).toBeGreaterThan(10);
      expect(p.seo.description.trim().length).toBeGreaterThan(20);
      expect(p.seo.canonicalPath.startsWith('/it-products/')).toBe(true);
    });
  });

  it('verifies related products return valid items without self-reference', () => {
    const sampleProducts = products.slice(0, 10);
    sampleProducts.forEach((p) => {
      const related = getRelatedProducts(p.id);
      expect(related.some((r) => r.id === p.id)).toBe(false);
    });
  });

  it('verifies keyword search across newly expanded categories', () => {
    const hdmiResults = searchProducts('HDMI');
    expect(hdmiResults.length).toBeGreaterThan(0);

    const ddr5Results = searchProducts('DDR5');
    expect(ddr5Results.length).toBeGreaterThan(0);

    const audioResults = searchProducts('Jabra');
    expect(audioResults.length).toBeGreaterThan(0);

    const industrialResults = searchProducts('Advantech');
    expect(industrialResults.length).toBeGreaterThan(0);

    const securityResults = searchProducts('Sophos');
    expect(securityResults.length).toBeGreaterThan(0);
  });
});

describe('Product Categories Hierarchy Audit', () => {
  it('contains over 100 structured categories', () => {
    expect(productCategories.length).toBeGreaterThanOrEqual(100);
  });

  it('guarantees unique category IDs and slugs', () => {
    const cids = productCategories.map((c) => c.id);
    expect(new Set(cids).size).toBe(productCategories.length);

    const cslugs = productCategories.map((c) => c.slug);
    expect(new Set(cslugs).size).toBe(productCategories.length);
  });

  it('validates parent-child relationships in categories', () => {
    const allCids = new Set(productCategories.map((c) => c.id));
    productCategories.forEach((c) => {
      if (c.parentCategoryId) {
        expect(
          allCids.has(c.parentCategoryId),
          `Category "${c.name}" has invalid parent: "${c.parentCategoryId}"`
        ).toBe(true);
      }
    });
  });

  it('covers all 20 primary procurement sections in CATEGORY_GROUPS', () => {
    expect(CATEGORY_GROUPS.length).toBeGreaterThanOrEqual(20);
    CATEGORY_GROUPS.forEach((group) => {
      expect(group.slug.length).toBeGreaterThan(0);
      expect(group.name.length).toBeGreaterThan(0);
      expect(group.matches.length).toBeGreaterThan(0);
    });
  });
});

