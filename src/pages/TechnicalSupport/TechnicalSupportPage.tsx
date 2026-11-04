import React from 'react';
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Headphones,
  Laptop,
  ArrowRight,
  MessageSquare,
  Layers,
} from 'lucide-react';
import { SupportCard } from '@/components/cards/SupportCard';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/buttons/Button';
import { supportServices } from '@/data/services/supportServices';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '@/utils/seo';
import { generateWhatsAppUrl, generateGeneralInquiryMessage } from '@/utils/whatsapp';

export const TechnicalSupportPage: React.FC = () => {
  const breadcrumbItems = [{ label: 'Technical Support & Installation' }];
  const whatsappUrl = generateWhatsAppUrl(generateGeneralInquiryMessage());

  const pageSchema = generateWebPageSchema({
    name: 'Technical Support & Installation Services | Orion Software & Trading',
    description:
      'Professional hardware installation, server configuration, network setup, CCTV mounting, operating system deployment, and after-sales technical maintenance.',
    url: '/technical-support',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Technical Support & Installation', url: '/technical-support' },
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'IT Technical Support & Infrastructure Installation',
    description:
      'Professional hardware installation, server provisioning, structured Cat6 cabling, CCTV surveillance setup, and after-sales maintenance.',
    url: '/technical-support',
  });

  const supportPillars = [
    {
      title: 'Hardware & OS Deployment',
      description: 'Workstation deployment, server rack mounting, clean OS installs, and burn-in testing.',
      icon: Laptop,
    },
    {
      title: 'Infrastructure & Network Setup',
      description: 'VLANs, firewalls, managed switches, Wi-Fi access points, and VPN tunnels.',
      icon: Layers,
    },
    {
      title: 'On-Site Technical Assistance',
      description: 'Field engineers for physical cabling, hardware mounting, and system integration.',
      icon: Wrench,
    },
    {
      title: 'Remote Diagnostics',
      description: 'Rapid remote support for software fixes, driver updates, and configuration.',
      icon: Headphones,
    },
  ];

  return (
    <>
      <SEOHead
        title="Technical Support & Installation Services | Orion Software & Trading"
        description="Comprehensive IT support: hardware installation, server setup, network configuration, CCTV installation, biometric systems, and after-sales support."
        canonicalPath="/technical-support"
        ogImage="/images/og/og-support.jpg"
        schema={[pageSchema, breadcrumbSchema, serviceSchema]}
      />

      {/* Header Banner */}
      <section className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 py-8 sm:py-10 lg:py-12 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mt-4 sm:mt-5">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Wrench className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                After-Sales &amp; Infrastructure Services
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
                Installation, Configuration <span className="text-emerald-600 dark:text-emerald-400">&amp; Support</span>
              </h1>
              <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                We don’t just deliver hardware in boxes. Orion provides certified on-site deployment, network routing, operating system setup, and dedicated technical maintenance.
              </p>

              {/* Core Proposition Callout */}
              <div className="mt-4 p-4 rounded-2xl bg-emerald-900 text-white flex items-start gap-4 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-base font-bold text-white">Our Proposition:</h2>
                  <p className="text-sm text-emerald-100 mt-1 italic">
                    &ldquo;We supply your technology, handle physical installation and configuration, and keep your systems running smoothly.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group">
                <img
                  src="/images/heroes/support-hero.jpg"
                  alt="Certified Technician Racking and Configuring Server Infrastructure"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-3.5 right-3.5 backdrop-blur-md bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700 text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>On-Site &amp; Remote</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 backdrop-blur-md bg-slate-900/90 p-3 rounded-2xl border border-slate-700/80 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Certified Field Engineers</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Hardware &bull; OS &bull; Networking &bull; Maintenance</p>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Wrench className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship Statement Section */}
      <section className="py-10 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                Long-Term Partnership
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Your Relationship With Orion Doesn&apos;t End After Delivery
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Hardware procurement is only step one. Our qualified engineers handle physical mounting, driver setup, server configuration, network routing, and routine maintenance — keeping your operations reliable and downtime minimal.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-3.5 text-xs">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Support Parameters
              </h4>
              <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Deployments scheduled around your business working hours</span>
              </div>
              <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Custom Annual Maintenance Contracts (AMC) available</span>
              </div>
              <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Dedicated technical support tailored to your hardware</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Support */}
      <section className="py-10 md:py-14 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/70 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Support Capabilities
            </h2>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              How We Keep Your Systems Running
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {supportPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center gap-3.5 group hover:border-emerald-500/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {pillar.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive Services Grid (All 14 Support Services) */}
      <section className="py-10 md:py-14 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Dedicated Support Services
            </h2>
            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              End-to-End Installation &amp; Maintenance Catalog
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {supportServices.map((service) => (
              <SupportCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 md:py-14 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Need Expert On-Site Technical Assistance?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Contact us today to discuss hardware installation scopes, network setup requirements, or post-installation support arrangements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact?type=installation-services"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Request Support Quotation
            </Button>
            {whatsappUrl && (
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                size="lg"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Inquire on WhatsApp
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

