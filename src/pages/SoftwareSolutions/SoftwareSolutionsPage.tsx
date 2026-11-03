import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, Layers, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/buttons/Button';
import { softwareServices } from '@/data/services/softwareServices';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/utils/seo';

export const SoftwareSolutionsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const breadcrumbItems = [{ label: 'Software Solutions' }];

  const filterTabs = [
    { id: 'all', label: 'All Solutions' },
    { id: 'web-mobile', label: 'Web & Mobile' },
    { id: 'enterprise', label: 'Enterprise & ERP' },
    { id: 'ai-automation', label: 'AI & Automation' },
    { id: 'infrastructure', label: 'Cloud & APIs' },
  ];

  const filteredServices = useMemo(() => {
    return softwareServices.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.problems.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
        service.technologies?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedFilter === 'all') return true;
      if (selectedFilter === 'web-mobile') {
        return [
          'custom-software-development',
          'web-development',
          'mobile-app-development',
          'desktop-applications',
          'ecommerce-development',
        ].includes(service.slug);
      }
      if (selectedFilter === 'enterprise') {
        return [
          'erp-solutions',
          'crm-development',
          'inventory-management',
          'hospital-management',
          'school-management',
          'saas-development',
        ].includes(service.slug);
      }
      if (selectedFilter === 'ai-automation') {
        return ['ai-solutions', 'ai-chatbots', 'business-automation'].includes(service.slug);
      }
      if (selectedFilter === 'infrastructure') {
        return ['api-development', 'cloud-applications'].includes(service.slug);
      }
      return true;
    });
  }, [searchQuery, selectedFilter]);

  const pageSchema = generateWebPageSchema({
    name: 'Software Solutions & Custom Engineering | Orion Software & Trading',
    description:
      'Custom software development services: Web applications, mobile apps, ERP systems, CRM software, AI automation, and cloud engineering tailored for enterprise operations.',
    url: '/software-solutions',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Software Solutions', url: '/software-solutions' },
  ]);

  return (
    <>
      <SEOHead
        title="Custom Software Solutions & Development Services | Orion"
        description="Explore custom software development services from Orion Software & Trading. Bespoke web apps, mobile solutions, ERP, CRM, and AI automation tailored to your business."
        canonicalPath="/software-solutions"
        ogImage="/images/og/og-software.jpg"
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
                <Code2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Software Engineering Division
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Custom Software <span className="text-emerald-600 dark:text-emerald-400">Solutions</span>
              </h1>
              <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Scalable digital solutions engineered for your business workflows — from enterprise ERPs and web platforms to mobile apps and practical AI automation.
              </p>

              {/* Technologies Involved Tags */}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                {['Custom Architecture', 'Enterprise ERP & CRM', 'AI Integration', 'REST APIs', 'Cloud-Native'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group">
                <img
                  src="/images/heroes/software-hero.jpg"
                  alt="Software Engineering & Modern Architecture"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-3.5 right-3.5 backdrop-blur-md bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700 text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>16 Core Services</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 backdrop-blur-md bg-slate-900/90 p-3 rounded-2xl border border-slate-700/80 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Full IP &amp; Code Ownership</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Enterprise standards &bull; Zero vendor lock-in</p>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section id="services" className="py-4 bg-white dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800 sticky top-16 z-20 backdrop-blur-md bg-white/95 dark:bg-[#0B0F19]/95 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedFilter === tab.id
                      ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/30'
                      : 'bg-slate-100 dark:bg-[#111827] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-transparent dark:border-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search software solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 sm:py-10 lg:py-12 bg-slate-50/60 dark:bg-[#080D1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Enterprise Software Engineering Capabilities
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Explore our specialized disciplines to view capabilities, architecture details, and deliverables.
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                No services found
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                No software solutions matched your search query &ldquo;{searchQuery}&rdquo;.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-5"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('all');
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="py-12 bg-slate-900 dark:bg-[#070A11] text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Need a Custom Architecture for Your Unique Workflow?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Schedule a discovery call with our software architects to review your project scope, tech stack, and timeline.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact?type=software-development"
              variant="primary"
              size="lg"
              className="font-bold shadow-md shadow-emerald-600/20"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Discuss Your Project
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="text-white border-slate-700 hover:bg-slate-800"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
