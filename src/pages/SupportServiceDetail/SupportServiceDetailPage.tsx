import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Wrench,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ArrowRight,
  MessageSquare,
  ChevronDown,
  Layers,
  Phone,
  HardDrive,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/buttons/Button';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import {
  getSupportServiceBySlug,
  getRelatedSupportServices,
} from '@/data/services/supportServices';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/utils/seo';
import { generateWhatsAppUrl, generateServiceInquiryMessage } from '@/utils/whatsapp';
import { siteConfig } from '@/config/siteConfig';

export const SupportServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!slug) {
    return <Navigate to="/technical-support" replace />;
  }

  const service = getSupportServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/technical-support" replace />;
  }

  const relatedServices = getRelatedSupportServices(service.slug, 3);
  const whatsappUrl = generateWhatsAppUrl(generateServiceInquiryMessage(service.name));

  const breadcrumbItems = [
    { label: 'Technical Support', path: '/technical-support' },
    { label: service.name },
  ];

  const canonicalPath = `/technical-support/${service.slug}`;

  // Structured Data
  const serviceSchema = generateServiceSchema({
    name: `${service.name} Services`,
    description: service.description,
    url: canonicalPath,
    serviceType: 'IT Support & Technical Installation',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Technical Support & Installation', url: '/technical-support' },
    { name: service.name, url: canonicalPath },
  ]);

  const faqs = [
    {
      question: `Do you provide on-site technical assistance for ${service.name.toLowerCase()}?`,
      answer:
        'Yes. Our certified field engineers visit corporate offices, data rooms, branches, and commercial sites equipped with all requisite diagnostic tools, mounting gear, and termination equipment to complete installation on-site.',
    },
    {
      question: 'Can you supply the hardware equipment along with the installation?',
      answer:
        'Absolutely. Orion Software & Trading supplies genuine commercial-grade hardware (including Dell servers, Cisco switches, Hikvision cameras, APC UPS systems) directly from tier-one distribution channels alongside full installation services.',
    },
    {
      question: 'How quickly can your technicians be mobilized for a project?',
      answer:
        'Standard installation schedules are arranged within 24 to 48 hours following quotation approval and site assessment. Emergency troubleshooting can be prioritized based on engineer availability.',
    },
    {
      question: 'Do you offer Annual Maintenance Contracts (AMC) after setup?',
      answer:
        'Yes. We provide tailored AMC packages covering routine preventative maintenance, periodic health checks, priority troubleshooting tickets, and SLA-backed emergency on-site visits.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <SEOHead
        title={`${service.name} Services | Professional IT Installation`}
        description={`Professional ${service.name} by certified technicians. Deployment, configuration, testing, and after-sales support for enterprises. Request a quote.`}
        canonicalPath={canonicalPath}
        ogImage="/images/og/og-support.jpg"
        schema={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      {/* Hero Header Section */}
      <section className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 py-8 md:py-12 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mt-4">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Wrench className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Technical Installation &amp; Support Division
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
                {service.name}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <Button
                  to={`/contact?type=installation-services&subject=${encodeURIComponent(
                    `Service Quotation Request: ${service.name}`
                  )}`}
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Request Service Quotation
                </Button>

                {whatsappUrl && (
                  <Button
                    href={whatsappUrl}
                    variant="whatsapp"
                    size="md"
                    icon={<MessageSquare className="w-4 h-4" />}
                  >
                    Inquire on WhatsApp
                  </Button>
                )}
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="p-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
                    <DynamicIcon name={service.icon} className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Field Execution Standards
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Enterprise SLA &bull; Certified Technicians
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Complete safety compliance &amp; neat cable management</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Structured timelines with zero unannounced operational downtime</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Formal post-deployment verification and sign-off handover</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    Corporate Desk Inquiries:
                  </span>
                  <span>Direct phone: </span>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Deliverables & Capabilities */}
        <section>
          <div className="max-w-3xl mb-8">
            <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              Deliverables Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              What Is Covered Under {service.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Each installation is executed systematically following manufacturer best practices and organizational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Step {index + 1}: Specification
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Hardware Pairing Callout */}
        <section className="p-8 rounded-3xl bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                Turnkey Hardware + Installation Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need Hardware Supplied Alongside Your Setup?
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Save time and eliminate vendor conflict by procuring equipment directly through Orion. We supply servers, Cisco switches, Cat6 patch panels, UPS battery backups, CCTV cameras, and workstations at competitive enterprise pricing.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                to="/it-products"
                variant="primary"
                size="md"
                className="justify-center"
                icon={<HardDrive className="w-4 h-4" />}
              >
                Browse Hardware Catalog
              </Button>
              <Button
                to="/contact?type=it-hardware"
                variant="outline"
                size="md"
                className="justify-center text-white border-slate-700 hover:bg-slate-800"
              >
                Request Combined BOQ Quote
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <div className="max-w-3xl mb-6">
            <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Clear answers regarding site assessments, project delivery, and maintenance agreements.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/90 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-500' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Other Support Services */}
        <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
            Related Technical Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((other) => (
              <div
                key={other.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {other.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {other.description}
                  </p>
                </div>
                <Link
                  to={`/technical-support/${other.slug}`}
                  className="mt-4 text-xs font-semibold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1 hover:underline"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Conversion Banner */}
      <section className="py-10 md:py-14 bg-linear-to-r from-slate-900 via-slate-950 to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Schedule Your {service.name} Consultation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact our engineering desk for an immediate site assessment schedule, technical scope review, or competitive quotation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to={`/contact?type=installation-services&subject=${encodeURIComponent(
                `Scope Inquiry: ${service.name}`
              )}`}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Request On-Site Quotation
            </Button>

            {whatsappUrl && (
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                size="lg"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Chat with Technical Lead
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportServiceDetailPage;

