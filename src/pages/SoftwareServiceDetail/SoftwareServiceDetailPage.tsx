import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  MessageSquare,
  ChevronDown,
  Layers,
  Cpu,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/buttons/Button';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { getServiceBySlug, softwareServices } from '@/data/services/softwareServices';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/utils/seo';
import { generateWhatsAppUrl, generateServiceInquiryMessage } from '@/utils/whatsapp';

export const SoftwareServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!slug) {
    return <Navigate to="/software-solutions" replace />;
  }

  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbItems = [
    { label: 'Software Solutions', path: '/software-solutions' },
    { label: service.name },
  ];

  const whatsappUrl = generateWhatsAppUrl(generateServiceInquiryMessage(service.name));

  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.shortDescription,
    url: `/software-solutions/${service.slug}`,
  });

  const faqSchema = generateFAQSchema(service.faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Solutions', url: '/software-solutions' },
    { name: service.name, url: `/software-solutions/${service.slug}` },
  ]);

  const combinedSchemas = [serviceSchema, faqSchema, breadcrumbSchema];

  // Related services (other services excluding current)
  const otherServices = softwareServices
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={service.seo.title}
        description={service.seo.description}
        keywords={service.seo.keywords}
        canonicalPath={service.seo.canonicalPath}
        schema={combinedSchemas}
      />

      {/* Hero Section */}
      <section className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <DynamicIcon name={service.icon} className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Custom Development Service
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
                {service.name}
              </h1>

              <p className="mt-4 text-lg text-emerald-700 dark:text-emerald-400 font-medium">
                {service.tagline}
              </p>

              <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button
                  to={`/contact?type=software-development&subject=${encodeURIComponent(`Inquiry: ${service.name}`)}`}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Request a Quotation
                </Button>

                {whatsappUrl && (
                  <Button
                    href={whatsappUrl}
                    variant="whatsapp"
                    size="lg"
                    icon={<MessageSquare className="w-4 h-4" />}
                  >
                    Discuss on WhatsApp
                  </Button>
                )}
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden group">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src="/images/heroes/software-hero.jpg"
                    alt={service.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-bold">{service.shortName} Engineering</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold backdrop-blur-sm">
                      Enterprise Tier
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                    Service Snapshot
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">Architecture:</span>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">Bespoke, Clean Code, Enterprise-Ready</p>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">Code Ownership:</span>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">100% Client Intellectual Property</p>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">Security Standards:</span>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">OWASP-Aligned, Role-Based Access, Encrypted</p>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">Support:</span>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">Deployment, Training &amp; Post-Launch Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Service Introduction */}
        <section>
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              Overview
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
              Engineering Tailored for Real Organizational Impact
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {service.fullDescription}
            </div>
          </div>
        </section>

        {/* Problems Solved */}
        <section className="p-6 sm:p-8 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40">
          <div className="max-w-3xl mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
              Pain Points Addressed
            </h2>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              The Operational Problems This Solution Solves
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.problems.map((problem, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-amber-200/50 dark:border-amber-900/50 flex items-start gap-3 shadow-2xs"
              >
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Capabilities
            </h2>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Key Features &amp; Engineering Standards
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Every feature is built with precision, maintainability, and end-user ergonomics in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Benefits */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              Return on Investment
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Measurable Business Benefits
            </h3>
            <p className="mt-2 text-slate-300 text-sm">
              How investing in tailored software drives bottom-line efficiency and operational resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-800/80 border border-slate-700/80"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">
                  {benefit.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Real-World Use Cases */}
        <section>
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              Applications
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Practical Use Cases Across Industries
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/40 transition-colors"
              >
                {useCase.industry && (
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 inline-block mb-3">
                    {useCase.industry}
                  </span>
                )}
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {useCase.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Development Approach */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Our Methodology
            </h2>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              The Development Journey
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Structured agile execution with complete stakeholder transparency at every milestone.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {service.developmentApproach.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
                  {step.step}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Involved */}
        {service.technologies && service.technologies.length > 0 && (
          <section>
            <div className="max-w-3xl mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                Tech Stack
              </h2>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Technologies &amp; Frameworks Involved
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Frequently Asked Questions */}
        <section>
          <div className="max-w-3xl mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              Got Questions?
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Clear answers to the most common questions regarding {service.name.toLowerCase()}.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl">
            {service.faqs.map((faq, index) => {
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

        {/* Explore Other Services */}
        <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
            Explore Other Software Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <div
                key={other.id}
                className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {other.name}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {other.shortDescription}
                  </p>
                </div>
                <Link
                  to={`/software-solutions/${other.slug}`}
                  className="mt-4 text-xs font-semibold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1 hover:underline"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Strong Bottom CTA */}
      <section className="py-10 md:py-14 bg-linear-to-r from-slate-900 via-slate-950 to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Build Your {service.shortName} Solution?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact our engineering team to review your technical specifications, request a competitive quotation, or schedule an initial project scoping call.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to={`/contact?type=software-development&subject=${encodeURIComponent(`Quotation Request: ${service.name}`)}`}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Request a Project Quotation
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

