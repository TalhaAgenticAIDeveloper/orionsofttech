import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Layers, Server, MessageSquare, X, ShieldCheck, Cpu } from 'lucide-react';
import { ProductCard } from '@/components/cards/ProductCard';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/buttons/Button';
import { products } from '@/data/products/products';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/utils/seo';
import { generateWhatsAppUrl, generateGeneralInquiryMessage } from '@/utils/whatsapp';

const CATEGORY_ALIASES: Record<string, string> = {
  // Power & UPS
  'ups-systems': 'power-backup-solutions',
  'ups': 'power-backup-solutions',
  'power-backup': 'power-backup-solutions',
  'power-backup-solutions': 'power-backup-solutions',
  'ups-replacement-batteries': 'power-backup-solutions',
  'voltage-regulators-stabilizers': 'power-backup-solutions',
  'surge-protectors-strips': 'power-backup-solutions',

  // Computers & Workstations
  'laptops-and-notebooks': 'laptops',
  'laptops': 'laptops',
  'notebooks': 'laptops',
  'desktops': 'desktops',
  'desktop-computers': 'desktops',
  'workstations': 'workstations',
  'mini-pcs-thin-clients': 'mini-pcs-thin-clients',
  'mini-pcs': 'mini-pcs-thin-clients',
  'thin-clients': 'mini-pcs-thin-clients',
  'laptop-accessories': 'peripherals-accessories',

  // Servers & Data Center
  'servers-and-server-components': 'servers-and-server-components',
  'servers-server-components': 'servers-and-server-components',
  'servers': 'servers-and-server-components',
  'rack-servers': 'servers-and-server-components',
  'tower-servers': 'servers-and-server-components',
  'server-components': 'servers-and-server-components',
  'server-power-supplies': 'servers-and-server-components',
  'rackmount-kvm-consoles': 'servers-and-server-components',
  'server-racks-cabinets': 'servers-and-server-components',

  // Networking
  'networking-equipment': 'networking-equipment',
  'networking': 'networking-equipment',
  'routers': 'networking-equipment',
  'network-switches': 'networking-equipment',
  'switches': 'networking-equipment',
  'wireless-access-points': 'networking-equipment',
  'sfp-transceivers-media-converters': 'networking-equipment',
  'patch-panels-keystones': 'networking-equipment',

  // Surveillance & Access
  'cctv-and-surveillance': 'cctv-and-surveillance',
  'cctv-surveillance': 'cctv-and-surveillance',
  'cctv': 'cctv-and-surveillance',
  'surveillance': 'cctv-and-surveillance',
  'ip-cameras': 'cctv-and-surveillance',
  'ptz-cameras': 'cctv-and-surveillance',
  'nvr-dvr': 'cctv-and-surveillance',
  'surveillance-storage': 'cctv-and-surveillance',

  // Biometrics & Access Control
  'biometric-access-control': 'biometric-access-control',
  'biometric-devices': 'biometric-access-control',
  'access-control': 'biometric-access-control',
  'time-attendance-terminals': 'biometric-access-control',
  'magnetic-door-locks': 'biometric-access-control',
  'rfid-cards-keyfobs': 'biometric-access-control',

  // Telecom & VoIP
  'telecom-and-voip': 'telecom-and-voip',
  'telecom': 'telecom-and-voip',
  'voip': 'telecom-and-voip',
  'ip-pbx-systems': 'telecom-and-voip',
  'ip-phones': 'telecom-and-voip',
  'voip-gateways-atas': 'telecom-and-voip',
  'two-way-radios': 'telecom-and-voip',

  // Storage
  'storage-and-memory': 'storage-and-memory',
  'storage': 'storage-and-memory',
  'storage-drives': 'storage-and-memory',
  'solid-state-drives': 'storage-and-memory',
  'external-portable-storage': 'storage-and-memory',
  'flash-drives-memory-cards': 'storage-and-memory',
  'nas-san-storage-systems': 'storage-and-memory',
  'storage-enclosures-docks': 'storage-and-memory',

  // Peripherals
  'peripherals-accessories': 'peripherals-accessories',
  'peripherals': 'peripherals-accessories',
  'keyboards': 'peripherals-accessories',
  'mice': 'peripherals-accessories',
  'desk-accessories': 'peripherals-accessories',
  'docking-stations-hubs': 'peripherals-accessories',
  'kvm-switches': 'peripherals-accessories',
  'monitor-arms-stands': 'peripherals-accessories',

  // Cables
  'cables-and-adapters': 'cables-and-adapters',
  'cables': 'cables-and-adapters',
  'display-video-cables': 'cables-and-adapters',
  'usb-thunderbolt-cables': 'cables-and-adapters',
  'ethernet-patch-cables': 'cables-and-adapters',
  'power-cords-adapters': 'cables-and-adapters',
  'serial-console-cables': 'cables-and-adapters',
  'structured-cabling': 'cables-and-adapters',

  // Audio & Communication
  'audio-and-communication': 'audio-and-communication',
  'audio-communication': 'audio-and-communication',
  'professional-headsets': 'audio-and-communication',
  'microphones': 'audio-and-communication',
  'conference-speakerphones': 'audio-and-communication',
  'desktop-audio-speakers': 'audio-and-communication',
  'audio-visual-equipment': 'audio-and-communication',
  'audio-visual': 'audio-and-communication',

  // Components
  'computer-components': 'computer-components',
  'components': 'computer-components',
  'processors': 'computer-components',
  'memory-ram': 'computer-components',
  'graphics-cards': 'computer-components',
  'motherboards': 'computer-components',
  'power-supplies': 'computer-components',
  'computer-cases': 'computer-components',
  'cooling-solutions': 'computer-components',

  // Displays & Monitors
  'monitors-and-displays': 'monitors-and-displays',
  'monitors-displays': 'monitors-and-displays',
  'monitors': 'monitors-and-displays',
  'projectors': 'monitors-and-displays',

  // Printers & Supplies
  'printers-and-scanners': 'printers-and-scanners',
  'printers-scanners': 'printers-and-scanners',
  'printers': 'printers-and-scanners',

  // POS & Retail
  'pos-and-retail-solutions': 'pos-and-retail-solutions',
  'pos-retail-solutions': 'pos-and-retail-solutions',
  'pos-terminals': 'pos-and-retail-solutions',
  'barcode-scanners': 'pos-and-retail-solutions',
  'receipt-printers': 'pos-and-retail-solutions',

  // Mobile & Tablet
  'mobile-tablet-accessories': 'mobile-tablet-accessories',
  'enterprise-tablets': 'mobile-tablet-accessories',

  // Security & Infrastructure
  'security-infrastructure': 'security-infrastructure',
  'firewalls': 'security-infrastructure',
  'server-room-monitoring': 'security-infrastructure',
  'wall-mount-network-cabinets': 'security-infrastructure',

  // Software & Licensing
  'software-and-licensing': 'software-and-licensing',

  // Tools & Consumables
  'tools-and-consumables': 'tools-and-consumables',
  'it-consumables-accessories': 'tools-and-consumables',

  // Specialized Industrial Tech
  'industrial-embedded-tech': 'industrial-embedded-tech',
};

export const CATEGORY_GROUPS = [
  { slug: 'laptops', name: 'Laptops & Notebooks', matches: ['laptops', 'cat-laptops'] },
  { slug: 'desktops', name: 'Desktop Computers', matches: ['desktops', 'cat-desktops'] },
  { slug: 'workstations', name: 'Workstations', matches: ['workstations', 'cat-workstations'] },
  { slug: 'mini-pcs-thin-clients', name: 'Mini PCs & Thin Clients', matches: ['mini-pcs-thin-clients', 'cat-mini-pcs'] },
  { slug: 'servers-and-server-components', name: 'Servers & Data Center', matches: ['servers-and-server-components', 'servers-server-components', 'cat-servers', 'cat-rack-servers', 'cat-tower-servers', 'cat-server-components', 'server-components', 'cat-server-power', 'server-power-supplies', 'cat-kvm-consoles', 'rackmount-kvm-consoles', 'cat-racks', 'server-racks-cabinets', 'cat-racks-cabinets'] },
  { slug: 'computer-components', name: 'Computer Components', matches: ['computer-components', 'cat-components', 'cat-cpus', 'processors', 'cat-ram', 'memory-ram', 'cat-gpus', 'graphics-cards', 'cat-motherboards', 'motherboards', 'cat-psus', 'power-supplies', 'cat-cases', 'computer-cases', 'cat-cooling', 'cooling-solutions'] },
  { slug: 'storage-and-memory', name: 'Storage & Drives', matches: ['storage-and-memory', 'cat-storage', 'cat-storage-drives', 'storage-drives', 'cat-ssds', 'solid-state-drives', 'cat-hard-drives', 'cat-external-storage', 'external-portable-storage', 'cat-flash-memory-cards', 'flash-drives-memory-cards', 'cat-nas-san-storage', 'nas-san-storage-systems', 'cat-storage-enclosures', 'storage-enclosures-docks'] },
  { slug: 'peripherals-accessories', name: 'Keyboards, Mice & Docks', matches: ['peripherals-accessories', 'cat-peripherals', 'cat-keyboards', 'keyboards', 'cat-mice', 'mice', 'cat-desk-accessories', 'desk-accessories', 'cat-docking-stations', 'docking-stations-hubs', 'cat-kvm-switches', 'kvm-switches', 'cat-monitor-arms', 'monitor-arms-stands', 'cat-laptop-accessories', 'laptop-accessories'] },
  { slug: 'cables-and-adapters', name: 'Cables & Adapters', matches: ['cables-and-adapters', 'cat-cables-adapters', 'cat-display-cables', 'display-video-cables', 'cat-usb-cables', 'usb-thunderbolt-cables', 'cat-ethernet-patch-cables', 'ethernet-patch-cables', 'cat-power-cables', 'power-cords-adapters', 'cat-serial-console-cables', 'serial-console-cables', 'cat-cabling', 'structured-cabling'] },
  { slug: 'audio-and-communication', name: 'Audio & Communication', matches: ['audio-and-communication', 'cat-audio-communication', 'cat-headsets', 'professional-headsets', 'cat-microphones', 'microphones', 'cat-conference-audio', 'conference-speakerphones', 'cat-desktop-speakers', 'desktop-audio-speakers', 'cat-conferencing', 'audio-visual-equipment', 'video-conferencing'] },
  { slug: 'monitors-and-displays', name: 'Monitors & Displays', matches: ['monitors-and-displays', 'monitors-displays', 'cat-monitors', 'cat-projectors', 'projectors'] },
  { slug: 'printers-and-scanners', name: 'Printers, Scanners & Supplies', matches: ['printers-and-scanners', 'printers-scanners', 'cat-printers', 'cat-consumables', 'it-consumables-accessories'] },
  { slug: 'networking-equipment', name: 'Networking Equipment', matches: ['networking-equipment', 'cat-networking', 'cat-routers', 'routers', 'cat-switches', 'network-switches', 'cat-wireless', 'wireless-access-points', 'cat-transceivers-sfp', 'sfp-transceivers-media-converters', 'cat-patch-panels-accessories', 'patch-panels-keystones', 'cat-network-testers'] },
  { slug: 'power-backup-solutions', name: 'UPS & Power Solutions', matches: ['power-backup-solutions', 'power-backup', 'ups-systems', 'cat-power', 'cat-ups', 'cat-ups-batteries', 'ups-replacement-batteries', 'cat-surge-protectors', 'surge-protectors-strips', 'cat-voltage-stabilizers', 'voltage-regulators-stabilizers'] },
  { slug: 'cctv-and-surveillance', name: 'CCTV & Surveillance', matches: ['cctv-and-surveillance', 'cctv-surveillance', 'cat-cctv', 'cat-cameras', 'ip-cameras', 'cat-nvr', 'nvr-dvr', 'cat-ptz-cameras', 'ptz-cameras', 'cat-surveillance-storage', 'surveillance-storage'] },
  { slug: 'biometric-access-control', name: 'Biometrics & Access Control', matches: ['biometric-access-control', 'cat-biometric', 'biometric-devices', 'cat-biometric-access', 'cat-attendance-terminals', 'time-attendance-terminals', 'cat-door-locks', 'magnetic-door-locks', 'cat-rfid-smartcards', 'rfid-cards-keyfobs'] },
  { slug: 'telecom-and-voip', name: 'Telecommunication & VoIP', matches: ['telecom-and-voip', 'cat-telecom-voip', 'cat-ip-pbx', 'ip-pbx-systems', 'cat-ip-phones', 'ip-phones', 'cat-voip-gateways', 'voip-gateways-atas', 'cat-walkie-talkies', 'two-way-radios'] },
  { slug: 'mobile-tablet-accessories', name: 'Mobile & Enterprise Tablets', matches: ['mobile-tablet-accessories', 'cat-mobile-accessories', 'cat-enterprise-tablets', 'enterprise-tablets', 'cat-fast-chargers', 'gan-fast-chargers', 'cat-power-banks', 'high-capacity-power-banks'] },
  { slug: 'security-infrastructure', name: 'Security & Infrastructure', matches: ['security-infrastructure', 'cat-security-infra', 'cat-firewalls', 'firewalls', 'cat-server-room-monitoring', 'server-room-monitoring', 'cat-wall-cabinets', 'wall-mount-network-cabinets'] },
  { slug: 'pos-and-retail-solutions', name: 'POS & Retail Systems', matches: ['pos-and-retail-solutions', 'pos-retail-solutions', 'cat-pos', 'cat-pos-systems', 'pos-terminals', 'cat-receipt-printers', 'receipt-printers', 'cat-scanners-pos', 'barcode-scanners'] },
  { slug: 'software-and-licensing', name: 'Software & Digital Licensing', matches: ['software-and-licensing', 'cat-software-licenses', 'cat-os-licenses', 'operating-system-licenses', 'cat-productivity-software', 'office-productivity-suites', 'cat-server-licenses', 'server-os-cals', 'cat-endpoint-security', 'endpoint-security-antivirus'] },
  { slug: 'tools-and-consumables', name: 'Tools, Testers & Supplies', matches: ['tools-and-consumables', 'cat-tools-consumables', 'cat-it-toolkits', 'precision-repair-toolkits', 'cat-crimpers-strippers', 'network-crimpers-strippers', 'cat-network-testers', 'cable-testers-toners', 'cat-thermal-pastes', 'thermal-compounds-pads', 'cat-cable-ties-labels', 'cable-ties-labels'] },
  { slug: 'industrial-embedded-tech', name: 'Industrial & Embedded Tech', matches: ['industrial-embedded-tech', 'cat-industrial-tech', 'cat-industrial-pcs', 'industrial-embedded-pcs', 'cat-single-board-computers', 'single-board-computers', 'cat-industrial-switches', 'industrial-ethernet-switches', 'cat-serial-converters', 'serial-rs485-converters'] },
];

const CATEGORY_NAMES: Record<string, string> = Object.fromEntries(
  CATEGORY_GROUPS.map((g) => [g.slug, g.name])
);
export const ITProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawInitialCategory = searchParams.get('category');
  const initialCategory = rawInitialCategory
    ? CATEGORY_ALIASES[rawInitialCategory.toLowerCase()] || rawInitialCategory
    : 'all';
  const initialBrand = searchParams.get('brand') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);

  // Synchronize state when query params change (e.g. from footer links or browser navigation)
  useEffect(() => {
    const rawCat = searchParams.get('category');
    if (rawCat) {
      const resolved = CATEGORY_ALIASES[rawCat.toLowerCase()] || rawCat;
      setSelectedCategory(resolved);
    } else {
      setSelectedCategory('all');
    }

    const brand = searchParams.get('brand');
    setSelectedBrand(brand || 'all');

    const q = searchParams.get('q');
    setSearchQuery(q || '');
  }, [searchParams]);

  const breadcrumbItems = [{ label: 'IT Hardware & Products' }];
  const whatsappUrl = generateWhatsAppUrl(generateGeneralInquiryMessage());

  // Extract unique brands from products
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    products.forEach((p) => {
      if (p.brand) brandsSet.add(p.brand);
    });
    return Array.from(brandsSet).sort();
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory !== 'all') {
        const group = CATEGORY_GROUPS.find((g) => g.slug === selectedCategory);
        if (group) {
          const matchesGroup =
            group.matches.includes(product.categorySlug) ||
            group.matches.includes(product.categoryId);
          if (!matchesGroup) return false;
        } else {
          const matchesCategory =
            product.categorySlug === selectedCategory ||
            product.categoryId === selectedCategory;
          if (!matchesCategory) return false;
        }
      }

      if (selectedBrand !== 'all') {
        if (product.brand?.toLowerCase() !== selectedBrand.toLowerCase()) {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesQuery =
          product.name.toLowerCase().includes(q) ||
          (product.brand && product.brand.toLowerCase().includes(q)) ||
          product.shortDescription.toLowerCase().includes(q) ||
          product.specifications.some(
            (s) =>
              s.label.toLowerCase().includes(q) ||
              s.value.toLowerCase().includes(q)
          );
        if (!matchesQuery) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    if (categorySlug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categorySlug);
    }
    setSearchParams(searchParams);

    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    if (brand === 'all') {
      searchParams.delete('brand');
    } else {
      searchParams.set('brand', brand);
    }
    setSearchParams(searchParams);

    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSearchQuery('');
    setSearchParams({});
  };

  const pageSchema = generateWebPageSchema({
    name: 'IT Hardware & Products Catalog | Orion Software & Trading',
    description:
      'Enterprise IT hardware discovery catalog. Computers, workstations, servers, networking switches, CCTV surveillance, power backup UPS, and POS equipment.',
    url: '/it-products',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'IT Hardware Catalog', url: '/it-products' },
  ]);

  return (
    <>
      <SEOHead
        title="IT Hardware & Equipment Catalog | Orion Software & Trading"
        description="Browse enterprise IT hardware catalog. Servers, business laptops, Cisco switches, CCTV cameras, UPS power systems. Inquire for availability and quotations."
        canonicalPath="/it-products"
        ogImage="/images/og/og-hardware.jpg"
        schema={[pageSchema, breadcrumbSchema]}
      />

      {/* Header Banner */}
      <section className="bg-slate-50 dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800 py-8 sm:py-10 lg:py-12 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mt-4 sm:mt-5">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Server className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                IT Hardware Supply &amp; Procurement
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Enterprise IT <span className="text-emerald-600 dark:text-emerald-400">Hardware Catalog</span>
              </h1>
              <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Commercial computing, networking, surveillance, and power infrastructure. Sourced directly from tier-one enterprise manufacturers.
              </p>

              {/* Crucial Pricing Policy Notice */}
              <div className="mt-4 p-3.5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-3 shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-bold">Commercial Procurement Notice:</strong>{' '}
                  Prices vary based on quantity and configuration. Submit your bill of quantities (BOQ) for live availability and corporate pricing.
                </div>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group">
                <img
                  src="/images/heroes/hardware-hero.jpg"
                  alt="Enterprise IT Hardware and Rack Server Architecture"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-3.5 right-3.5 backdrop-blur-md bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700 text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>115+ Commercial Categories</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 backdrop-blur-md bg-slate-900/90 p-3 rounded-2xl border border-slate-700/80 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Genuine Commercial Hardware</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Dell &bull; HP &bull; Cisco &bull; Fortinet &bull; APC</p>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Sidebar Filters + Product Grid */}
      <div id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column: Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <h2 className="sr-only">Filter Hardware Catalog by Category and Manufacturer</h2>
            {/* Search Input */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-2xs">
              <label htmlFor="catalog-search" className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
                Search Products
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="catalog-search"
                  type="text"
                  placeholder="e.g. Latitude, Dell, Cisco..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Categories Filter */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Categories
                </h3>
                {selectedCategory !== 'all' && (
                  <button
                    type="button"
                    onClick={() => handleCategoryChange('all')}
                    className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                  >
                    Reset
                  </button>
                )}
              </div>

              <div className="space-y-1 max-h-80 overflow-y-auto pr-1 no-scrollbar text-xs">
                <button
                  type="button"
                  onClick={() => handleCategoryChange('all')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200/60 dark:border-emerald-800/60'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  All Categories ({products.length})
                </button>

                {CATEGORY_GROUPS.map((cat) => {
                  const count = products.filter(
                    (p) =>
                      cat.matches.includes(p.categorySlug) ||
                      cat.matches.includes(p.categoryId)
                  ).length;
                  return (
                    <button
                      key={cat.slug}
                      type="button"
                      onClick={() => handleCategoryChange(cat.slug)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl font-medium transition-colors flex items-center justify-between ${
                        selectedCategory === cat.slug
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200/60 dark:border-emerald-800/60'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[11px] opacity-70">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Brands Filter */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Manufacturer / Brand
                </h3>
                {selectedBrand !== 'all' && (
                  <button
                    type="button"
                    onClick={() => handleBrandChange('all')}
                    className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                  >
                    Reset
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => handleBrandChange('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedBrand === 'all'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 dark:bg-[#0B0F19] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-transparent dark:border-slate-800'
                  }`}
                >
                  All
                </button>
                {availableBrands.map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => handleBrandChange(brand)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      selectedBrand === brand
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 dark:bg-[#0B0F19] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-transparent dark:border-slate-800'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Assistance Box */}
            <div className="p-6 rounded-3xl bg-emerald-950 text-white border border-emerald-800 shadow-md">
              <h4 className="text-base font-bold">Need a Custom BOQ Quote?</h4>
              <p className="mt-2 text-xs sm:text-sm text-emerald-200 leading-relaxed">
                Send us your equipment specifications or tender documents for rapid quotation and procurement.
              </p>
              <Link
                to="/contact?type=it-hardware"
                className="mt-4 inline-block text-xs font-bold text-slate-950 bg-white hover:bg-emerald-50 px-4 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                Submit Hardware Request &rarr;
              </Link>
            </div>
          </aside>

          {/* Right Column: Product Grid */}
          <main className="lg:col-span-3">
            {/* Catalog Section Header */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Commercial Hardware Catalog
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Showing <strong className="text-slate-900 dark:text-white font-bold">{filteredProducts.length}</strong> verified enterprise items
                </p>
              </div>
            </div>

            {/* Active Filters Bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs">

              {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-slate-500">Active filters:</span>
                  {selectedCategory !== 'all' && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      Category: {CATEGORY_NAMES[selectedCategory] || selectedCategory}
                      <button onClick={() => handleCategoryChange('all')}><X className="w-3 h-3" /></button>
                    </span>
                  )}
                  {selectedBrand !== 'all' && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      Brand: {selectedBrand}
                      <button onClick={() => handleBrandChange('all')}><X className="w-3 h-3" /></button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      Query: &ldquo;{searchQuery}&rdquo;
                      <button onClick={() => setSearchQuery('')}><X className="w-3 h-3" /></button>
                    </span>
                  )}
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-red-500 hover:underline font-semibold ml-1"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  No products found
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                  No products matched your filters. Contact our team directly — we source 45+ categories of enterprise hardware.
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <Button variant="outline" size="sm" onClick={clearAllFilters}>
                    Clear Filters
                  </Button>
                  <Button to="/contact?type=it-hardware" variant="primary" size="sm">
                    Inquire About Sourcing
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};
