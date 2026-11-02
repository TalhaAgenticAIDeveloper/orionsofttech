import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Truck,
  CheckCircle2,
  Layers,
  PhoneCall,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/buttons/Button';
import { ProductCard } from '@/components/cards/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products/products';
import { generateProductSchema, generateBreadcrumbSchema } from '@/utils/seo';
import { generateWhatsAppUrl, generateProductInquiryMessage } from '@/utils/whatsapp';
import { siteConfig } from '@/config/siteConfig';

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

export const ProductDetailPage: React.FC = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug?: string; productSlug: string }>();

  if (!productSlug) {
    return <Navigate to="/it-products" replace />;
  }

  // Check if productSlug is actually a category alias (e.g. /it-products/ups-systems)
  const categoryRedirect =
    CATEGORY_ALIASES[productSlug.toLowerCase()] ||
    (categorySlug ? CATEGORY_ALIASES[categorySlug.toLowerCase()] : undefined);

  const product = getProductBySlug(productSlug);

  if (!product) {
    if (categoryRedirect) {
      return <Navigate to={`/it-products?category=${categoryRedirect}`} replace />;
    }
    return <Navigate to="/404" replace />;
  }

  const relatedProducts = getRelatedProducts(product.id);
  const whatsappUrl = generateWhatsAppUrl(generateProductInquiryMessage(product.name));

  const breadcrumbItems = [
    { label: 'IT Products', path: '/it-products' },
    { label: product.name },
  ];

  const productSchema = generateProductSchema({
    name: product.name,
    description: product.shortDescription,
    brand: product.brand,
    url: `/it-products/${product.categorySlug}/${product.slug}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'IT Products', url: '/it-products' },
    { name: product.name, url: `/it-products/${product.categorySlug}/${product.slug}` },
  ]);

  return (
    <>
      <SEOHead
        title={product.seo.title}
        description={product.seo.description}
        keywords={product.seo.keywords}
        canonicalPath={product.seo.canonicalPath}
        schema={[productSchema, breadcrumbSchema]}
      />

      {/* Breadcrumb Header Bar */}
      <section className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>

      {/* Main Product Overview Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Visual Area */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 overflow-hidden relative group shadow-sm">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={product.image || '/images/heroes/hardware-hero.jpg'}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Product Badge */}
                {product.brand && (
                  <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md backdrop-blur-md bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700 shadow-md">
                    {product.brand}
                  </span>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-mono text-slate-300">
                    SKU: {product.slug}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Commercial Tier
                  </span>
                </div>
              </div>
            </div>

            {/* Value Trust Points */}
            <div className="mt-6 p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 space-y-3.5 text-xs text-slate-600 dark:text-slate-300 shadow-2xs">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Genuine Commercial-Grade Hardware</span>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Professional Installation &amp; Configuration Available</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Safe Corporate Delivery &amp; Milestone Handover</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Inquiry Callouts */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                Enterprise Hardware Catalog
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {product.name}
              </h1>

              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Mandatory Availability & Quotation Box */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Interested in this product?
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Contact Orion Software &amp; Trading to confirm live stock availability, quantity lead times, and receive a competitive quotation.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  to={`/contact?type=it-hardware&subject=${encodeURIComponent(`Product Quotation: ${product.name}`)}`}
                  variant="primary"
                  size="md"
                  className="flex-1 justify-center"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Request a Formal Quotation
                </Button>

                {whatsappUrl && (
                  <Button
                    href={whatsappUrl}
                    variant="whatsapp"
                    size="md"
                    className="flex-1 justify-center"
                    icon={<MessageSquare className="w-4 h-4" />}
                  >
                    Inquire via WhatsApp
                  </Button>
                )}
              </div>

              {siteConfig.contact.phone && (
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Prefer speaking directly?</span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </div>
              )}
            </div>

            {/* Common Use Cases */}
            {product.useCases && product.useCases.length > 0 && (
              <div className="pt-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Recommended Deployment Scenarios
                </h3>
                <ul className="space-y-2">
                  {product.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Technical Specifications Table */}
        <section className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-3xl mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              Technical Details
            </h2>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Product Specifications
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Verified technical attributes for commercial evaluation and deployment planning.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  <th scope="col" className="px-6 py-3.5 font-bold uppercase tracking-wider text-xs">
                    Specification
                  </th>
                  <th scope="col" className="px-6 py-3.5 font-bold uppercase tracking-wider text-xs">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {product.specifications.map((spec, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="px-6 py-3.5 font-medium text-slate-600 dark:text-slate-400 bg-slate-50/30 dark:bg-slate-900/20 sm:w-1/3">
                      {spec.label}
                    </td>
                    <td className="px-6 py-3.5 text-slate-900 dark:text-white font-semibold">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                  Complementary Gear
                </h2>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Related Products &amp; Equipment
                </h3>
              </div>
              <Link
                to="/it-products"
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Browse all products &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Bottom Quotation Section */}
      <section className="py-10 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Need Installation or Setup for {product.name}?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Orion provides full on-site hardware deployment, operating system installation, cabling, and post-installation technical support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to={`/contact?type=installation-services&subject=${encodeURIComponent(`Installation Inquiry: ${product.name}`)}`}
              variant="primary"
              size="lg"
            >
              Request Installation &amp; Supply
            </Button>
            <Button
              to="/technical-support"
              variant="outline"
              size="lg"
              className="text-white border-slate-700 hover:bg-slate-800"
            >
              Explore All Support Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

