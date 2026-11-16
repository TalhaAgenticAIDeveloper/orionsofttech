import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Server, ShieldCheck, ArrowRight, CheckCircle2, Wrench, MessageSquare, FileText, ArrowLeft } from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/buttons/Button';
import { hardwareCategories, type HardwareCategory } from '@/data/products/hardwareCategories';
import { HardwareCategoryCard } from '@/components/cards/HardwareCategoryCard';
import { CategoryDetailShowcase } from '@/components/common/CategoryDetailShowcase';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/utils/seo';
import { generateWhatsAppUrl, generateCategoryInquiryMessage, generateGeneralInquiryMessage } from '@/utils/whatsapp';

export const CATEGORY_ALIASES: Record<string, string> = {
  'ups-systems': 'power-backup-solutions',
  'ups': 'power-backup-solutions',
  'power-backup': 'power-backup-solutions',
  'power-backup-solutions': 'power-backup-solutions',
  'laptops-and-notebooks': 'laptops',
  'laptops': 'laptops',
  'notebooks': 'laptops',
  'desktops': 'laptops',
  'desktop-computers': 'laptops',
  'workstations': 'laptops',
  'mini-pcs-thin-clients': 'laptops',
  'servers-and-server-components': 'servers-and-server-components',
  'servers-server-components': 'servers-and-server-components',
  'servers': 'servers-and-server-components',
  'networking-equipment': 'networking-equipment',
  'networking': 'networking-equipment',
  'cctv-and-surveillance': 'cctv-and-surveillance',
  'cctv': 'cctv-and-surveillance',
  'biometric-access-control': 'biometric-access-control',
  'biometrics': 'biometric-access-control',
  'telecom-and-voip': 'telecom-and-voip',
  'voip': 'telecom-and-voip',
  'pos-and-retail-solutions': 'pos-and-retail-solutions',
  'pos': 'pos-and-retail-solutions',
  'computer-components': 'computer-components',
  'peripherals-accessories': 'computer-components',
  'storage-and-memory': 'servers-and-server-components',
};

// Kept for test suite backward compatibility
export const CATEGORY_GROUPS = [
  { slug: 'networking-equipment', name: 'Networking & Infrastructure', matches: ['networking-equipment'] },
  { slug: 'laptops', name: 'Computers, Laptops & Workstations', matches: ['laptops', 'desktops', 'workstations'] },
  { slug: 'servers-and-server-components', name: 'Servers & Data Center Storage', matches: ['servers-and-server-components'] },
  { slug: 'cctv-and-surveillance', name: 'CCTV & Security Surveillance', matches: ['cctv-and-surveillance'] },
  { slug: 'biometric-access-control', name: 'Biometrics & Access Control', matches: ['biometric-access-control'] },
  { slug: 'power-backup-solutions', name: 'UPS & Power Solutions', matches: ['power-backup-solutions'] },
  { slug: 'telecom-and-voip', name: 'Telecommunication & VoIP', matches: ['telecom-and-voip'] },
  { slug: 'pos-and-retail-solutions', name: 'POS & Retail Systems', matches: ['pos-and-retail-solutions'] },
  { slug: 'computer-components', name: 'Components & Peripherals', matches: ['computer-components'] },
  { slug: 'desktops', name: 'Desktop Computers', matches: ['desktops'] },
  { slug: 'workstations', name: 'Workstations', matches: ['workstations'] },
  { slug: 'mini-pcs-thin-clients', name: 'Mini PCs', matches: ['mini-pcs-thin-clients'] },
  { slug: 'storage-and-memory', name: 'Storage & Drives', matches: ['storage-and-memory'] },
  { slug: 'peripherals-accessories', name: 'Keyboards & Peripherals', matches: ['peripherals-accessories'] },
  { slug: 'cables-and-adapters', name: 'Cables & Adapters', matches: ['cables-and-adapters'] },
  { slug: 'audio-and-communication', name: 'Audio & Communication', matches: ['audio-and-communication'] },
  { slug: 'monitors-and-displays', name: 'Monitors & Displays', matches: ['monitors-and-displays'] },
  { slug: 'printers-and-scanners', name: 'Printers & Scanners', matches: ['printers-and-scanners'] },
  { slug: 'security-infrastructure', name: 'Security Infrastructure', matches: ['security-infrastructure'] },
  { slug: 'software-and-licensing', name: 'Software & Licensing', matches: ['software-and-licensing'] },
  { slug: 'tools-and-consumables', name: 'Tools & Consumables', matches: ['tools-and-consumables'] },
  { slug: 'industrial-embedded-tech', name: 'Industrial Tech', matches: ['industrial-embedded-tech'] },
];

export const ITProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCat = searchParams.get('category');
  const initialCategory = rawCat
    ? CATEGORY_ALIASES[rawCat.toLowerCase()] || rawCat
    : 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  useEffect(() => {
    const raw = searchParams.get('category');
    if (raw) {
      const resolved = CATEGORY_ALIASES[raw.toLowerCase()] || raw;
      setSelectedCategory(resolved);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);

    const showcaseEl = document.getElementById('hardware-showcase');
    if (showcaseEl) {
      showcaseEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeCategory = useMemo<HardwareCategory | null>(() => {
    if (selectedCategory === 'all') return null;
    return (
      hardwareCategories.find(
        (c) =>
          c.slug === selectedCategory ||
          c.id === selectedCategory ||
          CATEGORY_ALIASES[selectedCategory] === c.slug
      ) || null
    );
  }, [selectedCategory]);

  const generalWhatsappUrl = generateWhatsAppUrl(generateGeneralInquiryMessage());
  const activeWhatsappUrl = activeCategory
    ? generateWhatsAppUrl(generateCategoryInquiryMessage(activeCategory.name))
    : generalWhatsappUrl;

  const breadcrumbItems = [{ label: 'IT Hardware Solutions' }];

  const pageSchema = generateWebPageSchema({
    name: 'IT Hardware & Infrastructure Solutions | Orion Software & Trading',
    description:
      'Commercial IT hardware supply in Lahore and Pakistan. Networking equipment, business laptops, servers, CCTV surveillance, biometrics, and power backup solutions.',
    url: '/it-products',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'IT Hardware Solutions', url: '/it-products' },
  ]);

  return (
    <>
      <SEOHead
        title="IT Hardware & Infrastructure Solutions | Orion Software & Trading"
        description="Commercial IT hardware supply in Lahore and across Pakistan. Enterprise networking, servers, laptops, CCTV surveillance, biometrics, and UPS power backups."
        canonicalPath="/it-products"
        ogImage="/images/og/og-hardware.jpg"
        schema={[pageSchema, breadcrumbSchema]}
      />

      {/* Header Banner */}
      <section className="bg-slate-50 dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800 py-8 sm:py-10 lg:py-12 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4 sm:mt-5">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Server className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Commercial IT Hardware Supply &amp; Installation
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Enterprise Hardware &amp; <span className="text-emerald-600 dark:text-emerald-400">Infrastructure</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                We supply tier-one commercial IT equipment across 9 specialized technology divisions — backed by on-site physical installation, structured cabling, warranty coverage, and 24/7 technical support.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button href={generalWhatsappUrl} variant="whatsapp" size="md" icon={<MessageSquare className="w-4 h-4" />}>
                WhatsApp Hardware Inquiry
              </Button>
              <Button to="/contact?type=it-hardware" variant="outline" size="md" icon={<FileText className="w-4 h-4" />}>
                Request Corporate Quotation (BOQ)
              </Button>
            </div>
          </div>

          {/* Quick Category Navigation Pills */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
              Quick Filter By Technology Division:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleCategorySelect('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                All Divisions ({hardwareCategories.length})
              </button>
              {hardwareCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategorySelect(cat.slug)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat.slug || selectedCategory === cat.id
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Hardware Section */}
      <section id="hardware-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 scroll-mt-20">
        {activeCategory ? (
          /* ─── SINGLE CATEGORY DETAILED VIEW ─── */
          <div>
            <CategoryDetailShowcase
              category={activeCategory}
              onBackToAll={() => handleCategorySelect('all')}
            />

            {/* Other Categories Grid */}
            <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6">
                Explore Other Hardware Divisions:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {hardwareCategories
                  .filter((c) => c.slug !== activeCategory.slug)
                  .map((category) => (
                    <HardwareCategoryCard
                      key={category.id}
                      category={category}
                      onSelect={(slug) => handleCategorySelect(slug)}
                    />
                  ))}
              </div>
            </div>
          </div>
        ) : (
          /* ─── ALL 9 HARDWARE DIVISIONS OVERVIEW GRID ─── */
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Complete Hardware Portfolio
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                9 Enterprise Hardware Divisions
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Click any division below to view what equipment we provide, supported brands, on-site services, and quotation options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {hardwareCategories.map((category) => (
                <HardwareCategoryCard
                  key={category.id}
                  category={category}
                  onSelect={(slug) => handleCategorySelect(slug)}
                />
              ))}
            </div>

            {/* Custom BOQ Procurement Notice */}
            <div className="mt-14 p-8 rounded-3xl bg-slate-50 dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 text-center max-w-3xl mx-auto shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Have a Commercial Tender or Equipment BOQ?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Send your bill of quantities or hardware specifications. We provide complete sourcing, verified warranties, and on-site deployment in Lahore and across Pakistan.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button to="/contact?type=it-hardware" variant="primary" size="md">
                  Submit Hardware BOQ
                </Button>
                <Button href={generalWhatsappUrl} variant="whatsapp" size="md" icon={<MessageSquare className="w-4 h-4" />}>
                  WhatsApp Procurement Team
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
