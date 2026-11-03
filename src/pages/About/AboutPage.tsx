import React from 'react';
import {
  Code2,
  Server,
  Wrench,
  ShieldCheck,
  Target,
  Eye,
  HeartHandshake,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/buttons/Button';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { generateWebPageSchema, generateBreadcrumbSchema, generateOrganizationSchema } from '@/utils/seo';

export const AboutPage: React.FC = () => {
  const breadcrumbItems = [{ label: 'About Us' }];

  const pageSchema = generateWebPageSchema({
    name: 'About Orion Software & Trading | Technology Solutions & Trading Provider',
    description:
      'Learn about Orion Software & Trading, an integrated technology solutions provider delivering software engineering, IT hardware procurement, and professional technical support.',
    url: '/about',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  const coreValues = [
    {
      title: 'Integrity & Transparency',
      description:
        'Honest technical recommendations and upfront quotations with zero hidden costs.',
      icon: ShieldCheck,
    },
    {
      title: 'Technical Competence',
      description:
        'Every solution is guided by experienced software engineers and certified infrastructure specialists.',
      icon: Cpu,
    },
    {
      title: 'Customer-Centric Focus',
      description:
        'Tailored around your specific workflows rather than generic off-the-shelf templates.',
      icon: HeartHandshake,
    },
    {
      title: 'End-to-End Accountability',
      description:
        'Full responsibility from initial requirements through procurement, installation, and ongoing support.',
      icon: Layers,
    },
  ];

  const approachSteps = [
    {
      step: '01',
      title: 'Active Listening & Needs Assessment',
      description:
        'We evaluate your business workflows, current bottlenecks, and technical objectives.',
    },
    {
      step: '02',
      title: 'Tailored Solution Architecture',
      description:
        'We design a custom software blueprint and exact hardware bill of materials.',
    },
    {
      step: '03',
      title: 'Transparent Procurement & Execution',
      description:
        'Genuine commercial hardware procurement and agile software delivery with regular milestone reviews.',
    },
    {
      step: '04',
      title: 'On-Site Installation & Configuration',
      description:
        'Certified technicians handle on-site mounting, OS deployment, and network readiness.',
    },
    {
      step: '05',
      title: 'Long-Term After-Sales Support',
      description:
        'Dedicated technical maintenance, proactive updates, and responsive troubleshooting.',
    },
  ];

  return (
    <>
      <SEOHead
        title="About Us | Technology Solutions & IT Hardware Supplier | Orion"
        description="Learn about Orion Software & Trading. Enterprise provider delivering custom software, IT hardware supply, network installation, and technical support."
        canonicalPath="/about"
        ogImage="/images/og/og-home.jpg"
        schema={[pageSchema, breadcrumbSchema, organizationSchema]}
      />

      {/* Hero Header Banner with Modern Visual */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800/80 py-8 sm:py-10 lg:py-12">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mt-4 sm:mt-5">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Corporate Profile &amp; Mission
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                About <span className="text-emerald-600 dark:text-emerald-400">Orion Software &amp; Trading</span>
              </h1>
              <p className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mt-1.5">
                Technology Solutions &bull; IT Hardware &bull; Technical Support
              </p>

              <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Orion Software &amp; Trading is an integrated technology partner delivering bespoke software engineering, commercial IT hardware procurement, and certified on-site technical support.
              </p>

              {/* Quick Trust Chips */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  Bespoke Software Engineering
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <Server className="w-3.5 h-3.5 text-emerald-500" />
                  Commercial Hardware Supply
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <Wrench className="w-3.5 h-3.5 text-emerald-500" />
                  Certified On-Site Technicians
                </span>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group">
                <img
                  src="/images/heroes/about-hero.jpg"
                  alt="Orion Technology Team Collaborating"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-3.5 right-3.5 backdrop-blur-md bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700 text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Integrated Tech Partner</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 backdrop-blur-md bg-slate-900/90 p-3 rounded-2xl border border-slate-700/80 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Full-Lifecycle Technology Care</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Architecture &bull; Procurement &bull; Support</p>
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

      {/* Who We Are & What We Do */}
      <section className="py-10 md:py-14 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Who We Are
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                A Unified Technology Partner for the Modern Enterprise
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Most businesses face unnecessary downtime managing disconnected vendors — one builds the website, another ships hardware, and nobody takes responsibility when systems fail. Orion Software &amp; Trading eliminates this friction by unifying software engineering, IT hardware procurement, and on-site support under one roof.
                </p>
                <p>
                  Whether you need bespoke enterprise software, 50 configured workstations, or campus-wide network infrastructure, our certified team delivers end-to-end execution with full accountability.
                </p>
              </div>

              {/* Callout quote */}
              <div className="mt-8 p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50">
                <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200 italic">
                  &ldquo;We don&apos;t just supply technology. We help you install it, configure it, integrate it, and keep it running smoothly.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Capabilities Card */}
            <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#111827]/80 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                What We Do
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-800/60">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Custom Software Solutions
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Bespoke web platforms, mobile applications, ERPs, CRM systems, and practical AI automation engineered for your workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-800/60">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      IT Hardware &amp; Equipment Supply
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Commercial laptops, rack servers, managed switches, biometric terminals, CCTV, and UPS backups at competitive rates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-800/60">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Installation &amp; Ongoing Support
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Server rack mounting, structured cabling, operating system setup, software deployment, and responsive technical maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 md:py-14 bg-slate-50 dark:bg-[#0E1526] border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 border border-emerald-200/60 dark:border-emerald-800/60">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                To empower businesses with reliable, scalable technology solutions. We bridge software engineering, hardware supply, and on-site deployment so you can focus entirely on core business growth.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 border border-emerald-200/60 dark:border-emerald-800/60">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the region’s most trusted technology partner — recognized for technical excellence, authentic hardware procurement, and dependable after-sales support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 md:py-14 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Our Principles
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              The fundamental standards that guide how we engineer software, quote hardware, and serve our business clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const IconComp = value.icon;
              return (
                <div
                  key={index}
                  className="p-7 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-colors shadow-2xs"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 border border-emerald-200 dark:border-emerald-800/60">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-10 md:py-14 bg-slate-50 dark:bg-[#0E1526] border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Methodology
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our 5-Step Approach
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              A structured, transparent process engineered to minimize project risks and ensure smooth technical adoption.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {approachSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 shadow-2xs hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-mono font-black text-lg flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-slate-900 dark:bg-[#070A11] text-white text-center border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Discuss Your Technology Requirements?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact our engineering and procurement team today for custom software consultations, hardware quotations, or installation inquiries.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-bold shadow-md shadow-emerald-600/20"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Get in Touch
            </Button>
            <Button
              to="/it-products"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800"
            >
              Browse Hardware Catalog
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
