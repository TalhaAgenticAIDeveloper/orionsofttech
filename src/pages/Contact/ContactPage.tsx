import React, { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  ShieldCheck,
  Code2,
  Server,
  Wrench,
  RefreshCw,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/buttons/Button';
import { siteConfig } from '@/config/siteConfig';
import {
  generateContactPageSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateOrganizationSchema,
} from '@/utils/seo';
import { generateWhatsAppUrl, generateGeneralInquiryMessage } from '@/utils/whatsapp';

interface ContactPageProps {
  isAboutEntry?: boolean;
}

export const ContactPage: React.FC<ContactPageProps> = ({ isAboutEntry = false }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const defaultType = searchParams.get('type') || 'general-inquiry';
  const defaultSubject = searchParams.get('subject') || '';

  const isAbout = isAboutEntry || location.pathname.startsWith('/about');
  const breadcrumbItems = [{ label: isAbout ? 'About Us' : 'About & Contact' }];
  const whatsappUrl = generateWhatsAppUrl(generateGeneralInquiryMessage());

  // Handle smooth scroll to #contact-form if requested in hash
  useEffect(() => {
    if (location.hash === '#contact-form') {
      const el = document.getElementById('contact-form');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  const pageSchema = isAbout
    ? generateWebPageSchema({
        name: 'About Orion Software & Trading | Technology Solutions & Enterprise Care',
        description:
          'Learn about Orion Software & Trading. Comprehensive technology partner delivering custom software engineering, commercial IT hardware, on-site deployment, and guaranteed post-sale backup.',
        url: '/about',
      })
    : generateContactPageSchema();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: isAbout ? 'About Us' : 'About & Contact', url: isAbout ? '/about' : '/contact' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  const backupHighlights = [
    {
      icon: RefreshCw,
      title: 'Local Standby Hardware Backup',
      description: 'Emergency standby units and swift warranty processing in Lahore so your operations never stop.',
    },
    {
      icon: Code2,
      title: 'In-House Software Maintenance',
      description: 'Direct developer support for bug fixes, database health, and updates — no outsourced delays.',
    },
    {
      icon: Wrench,
      title: 'Certified On-Site Technicians',
      description: 'Physical deployment, server rack mounting, and network cabling at your facility.',
    },
    {
      icon: ShieldCheck,
      title: 'Single-Point Accountability',
      description: 'Zero finger-pointing between software and hardware — we own the entire loop from code to cable.',
    },
  ];

  return (
    <>
      <SEOHead
        title={
          isAbout
            ? 'About Us & Contact | Technology Solutions & IT Hardware Supplier | Orion'
            : 'About & Contact Us | Orion Software & Trading'
        }
        description="Learn about Orion Software & Trading and get in touch with our engineering and procurement team for custom software, commercial IT hardware, on-site installation, and dependable after-sales backup."
        canonicalPath={isAbout ? '/about' : '/contact'}
        ogImage="/images/og/og-home.jpg"
        schema={[pageSchema, breadcrumbSchema, organizationSchema]}
      />

      {/* ─── SECTION 1: COMPACT COMPANY PROFILE & BACKUP PROMISE ────────── */}
      <section className="bg-slate-50 dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800 py-8 sm:py-10 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mt-4 sm:mt-5">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Corporate Profile &amp; Direct Consultation
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                About <span className="text-emerald-600 dark:text-emerald-400">Orion Software &amp; Trading</span>
              </h1>
              <p className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mt-1.5">
                Software Solutions &bull; IT Hardware &bull; Technical Support
              </p>

              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                We unify custom software engineering, commercial IT hardware procurement, and certified on-site technical deployment under one roof — backed by guaranteed post-deployment backup and single-point accountability.
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Submit Inquiry</span>
                </a>

                {siteConfig.contact.whatsapp && (
                  <Button
                    href={whatsappUrl}
                    variant="whatsapp"
                    size="sm"
                    className="font-bold text-xs"
                    icon={<MessageSquare className="w-3.5 h-3.5" />}
                  >
                    WhatsApp Desk
                  </Button>
                )}
              </div>
            </div>

            {/* Right Visual Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group">
                <img
                  src="/images/heroes/about-hero.jpg"
                  alt="Orion Technology Team Delivering Enterprise Solutions and Support"
                  className="w-full h-52 sm:h-60 lg:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

                {/* Floating Top Status Badge */}
                <div className="absolute top-3 right-3 backdrop-blur-md bg-slate-900/85 px-3 py-1 rounded-full border border-slate-700 text-[11px] font-semibold text-white flex items-center gap-2 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Corporate Desk Active</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-slate-900/90 p-3 rounded-2xl border border-slate-700/80 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Full-Lifecycle Technology Care</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Software &bull; Hardware &bull; Dedicated Backup</p>
                  </div>
                  <div className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backup & Support Highlights (Compact Grid) */}
          <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Our After-Sales Backup Promise
              </span>
              <span className="text-xs text-slate-400">&bull; We don&apos;t just supply; we stand behind every deployment</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {backupHighlights.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 border border-emerald-200/60 dark:border-emerald-800/60">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: INQUIRY FORM & DIRECT CONTACT DETAILS ────────────── */}
      <section id="contact-form" className="py-8 sm:py-10 bg-white dark:bg-[#070A11] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-[#111827] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="mb-5 pb-4 border-b border-slate-200/80 dark:border-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Submit an Inquiry
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Fill in the details below. Our technical specialists review submissions promptly.
                </p>
              </div>

              <ContactForm
                defaultInquiryType={defaultType}
                defaultSubject={defaultSubject}
              />
            </div>

            {/* Right: Direct Channels & WhatsApp */}
            <aside className="lg:col-span-5 space-y-4">
              {/* WhatsApp Card */}
              {siteConfig.contact.whatsapp && (
                <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950 text-white border border-emerald-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-[#25D366] text-white">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        Instant WhatsApp Chat
                      </h3>
                      <p className="text-xs text-emerald-200">
                        {siteConfig.contact.whatsapp}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-100 mt-2 mb-4 leading-relaxed">
                    Direct chat with our corporate sales and technical procurement desk.
                  </p>
                  <Button
                    href={whatsappUrl}
                    variant="whatsapp"
                    size="sm"
                    className="w-full justify-center font-bold"
                    icon={<MessageSquare className="w-4 h-4" />}
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              )}

              {/* Contact Information Details */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-3.5 text-xs sm:text-sm">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white pb-2.5 border-b border-slate-200/80 dark:border-slate-800">
                  Official Channels
                </h3>

                {/* Phone */}
                {siteConfig.contact.phone && (
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Phone / Landline
                      </span>
                      <a
                        href={`tel:${(siteConfig.contact.phoneIntl || siteConfig.contact.phone).replace(/\s+/g, '')}`}
                        className="font-medium text-slate-900 dark:text-white hover:text-emerald-600 transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Email */}
                {siteConfig.contact.email && (
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="font-medium text-slate-900 dark:text-white hover:text-emerald-600 transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Office Address */}
                {siteConfig.contact.address && (
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Office Location
                      </span>
                      <p className="font-medium text-slate-900 dark:text-white leading-snug">
                        {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.country}
                      </p>
                    </div>
                  </div>
                )}

                {/* Operating Hours */}
                <div className="flex items-start gap-3 pt-2.5 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Operating Hours
                    </span>
                    <p className="text-slate-700 dark:text-slate-300">
                      Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM (PKT)
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidentiality Notice */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Confidentiality Guaranteed</strong>: Inquiries and technical specifications are handled with strict privacy.
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: COMPACT LOCATION MAP ─────────────────────────────── */}
      {siteConfig.contact.mapUrl && (
        <section className="bg-white dark:bg-[#070A11] pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm h-64 sm:h-72 w-full">
              <iframe
                src={siteConfig.contact.mapUrl}
                title="Orion Software & Trading Corporate Office Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
