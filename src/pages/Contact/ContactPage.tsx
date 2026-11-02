import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/buttons/Button';
import { siteConfig } from '@/config/siteConfig';
import { generateContactPageSchema, generateBreadcrumbSchema } from '@/utils/seo';
import { generateWhatsAppUrl, generateGeneralInquiryMessage } from '@/utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') || 'general-inquiry';
  const defaultSubject = searchParams.get('subject') || '';

  const breadcrumbItems = [{ label: 'Contact Us' }];
  const whatsappUrl = generateWhatsAppUrl(generateGeneralInquiryMessage());
  const contactSchema = generateContactPageSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
  ]);

  return (
    <>
      <SEOHead
        title="Contact Us | Request IT Hardware Quotation & Consultation"
        description="Contact Orion Software & Trading for software development inquiries, IT hardware quotations, network installation, and technical support consultation."
        canonicalPath="/contact"
        ogImage="/images/og/og-default.jpg"
        schema={[contactSchema, breadcrumbSchema]}
      />

      {/* Header Banner */}
      <section className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 py-8 md:py-12 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mt-4">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Send className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Direct Communication Channel
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Get in Touch with Orion
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you need custom software, commercial IT hardware pricing, on-site installation, or technical support, our team is ready to evaluate your requirements and provide prompt assistance.
              </p>

              {/* Quick Communication Highlights */}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                {['Direct WhatsApp Desk', 'Transparent Quotations', 'Strict Confidentiality', 'Rapid Scoping'].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                  >
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group">
                <img
                  src="/images/heroes/contact-hero.jpg"
                  alt="Corporate Consultation and Customer Support Workspace"
                  className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-3.5 right-3.5 backdrop-blur-md bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700 text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Corporate Desk Active</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 backdrop-blur-md bg-slate-900/90 p-3 rounded-2xl border border-slate-700/80 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Prompt Project Evaluations</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Software &bull; Hardware Quotations &bull; AMC</p>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Submit an Inquiry
              </h2>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                Fill in the details below and our technical team will review your project and respond promptly.
              </p>
            </div>

            <ContactForm
              defaultInquiryType={defaultType}
              defaultSubject={defaultSubject}
            />
          </div>

          {/* Right Column: Contact Information & WhatsApp */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Quick WhatsApp Inquiry Box */}
            <div className="p-6 rounded-2xl bg-emerald-950 text-white border border-emerald-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#25D366] text-white">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Instant WhatsApp Inquiry
                  </h3>
                  <p className="text-xs text-emerald-200">
                    Direct chat with our corporate sales desk
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mt-3">
                Need an immediate response regarding product availability, hardware quotes, or quick technical questions? Connect directly with our team on WhatsApp.
              </p>

              <div className="mt-5">
                <Button
                  href={whatsappUrl}
                  variant="whatsapp"
                  size="md"
                  className="w-full justify-center font-bold"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Start WhatsApp Chat
                </Button>
              </div>
            </div>

            {/* Official Information Details */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-2xs space-y-5 text-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-700">
                Official Channels
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Phone Inquiries
                  </span>
                  {siteConfig.contact.phone ? (
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="font-medium text-slate-900 dark:text-white hover:text-emerald-600 transition-colors mt-0.5 block"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 italic mt-0.5 block">
                      Configurable phone placeholder (Available upon inquiry)
                    </span>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Corporate Email
                  </span>
                  {siteConfig.contact.email ? (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium text-slate-900 dark:text-white hover:text-emerald-600 transition-colors mt-0.5 block"
                    >
                      {siteConfig.contact.email}
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 italic mt-0.5 block">
                      info@orionswtrading.com
                    </span>
                  )}
                </div>
              </div>

              {/* Physical Office Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Office Location
                  </span>
                  {siteConfig.contact.address ? (
                    <p className="font-medium text-slate-900 dark:text-white mt-0.5">
                      {siteConfig.contact.address}
                    </p>
                  ) : (
                    <span className="text-xs text-slate-500 italic mt-0.5 block">
                      Corporate office location details configured upon deployment
                    </span>
                  )}
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100 dark:border-slate-700">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Operating Hours
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                    Monday &ndash; Saturday: 9:00 AM &ndash; 6:00 PM
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Emergency technical support available for AMC contract clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Trust Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                We respect your data privacy. Customer inquiries and project details are kept strictly confidential.
              </span>
            </div>

            {/* Direct Quick Internal Links */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-2xs space-y-3 text-xs">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-700">
                Explore Our Technology Divisions
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>
                  <Link to="/software-solutions" className="hover:text-emerald-600 dark:hover:text-emerald-400 font-medium inline-flex items-center gap-1.5 transition-colors">
                    &bull; Custom Software Engineering &amp; ERP Solutions &rarr;
                  </Link>
                </li>
                <li>
                  <Link to="/it-products" className="hover:text-emerald-600 dark:hover:text-emerald-400 font-medium inline-flex items-center gap-1.5 transition-colors">
                    &bull; Commercial IT Hardware Catalog &amp; Quotations &rarr;
                  </Link>
                </li>
                <li>
                  <Link to="/technical-support" className="hover:text-emerald-600 dark:hover:text-emerald-400 font-medium inline-flex items-center gap-1.5 transition-colors">
                    &bull; On-Site Server, Network &amp; CCTV Installation &rarr;
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-emerald-600 dark:hover:text-emerald-400 font-medium inline-flex items-center gap-1.5 transition-colors">
                    &bull; Client Confidentiality &amp; Privacy Policy &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Corporate Location Map Embed */}
      {siteConfig.contact.mapUrl && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md h-80 sm:h-96 w-full">
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
        </section>
      )}
    </>
  );
};

