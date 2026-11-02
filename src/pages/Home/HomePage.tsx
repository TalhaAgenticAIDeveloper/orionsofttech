import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Server,
  Wrench,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Cpu,
  Layers,
  Headphones,
  Coins,
  Building,
  GraduationCap,
  HeartPulse,
  Landmark,
  Store,
  Factory,
  Rocket,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/buttons/Button';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { ProductCard } from '@/components/cards/ProductCard';
import { SEOHead } from '@/components/seo/SEOHead';
import { softwareServices } from '@/data/services/softwareServices';
import { products } from '@/data/products/products';
import { industries } from '@/data/industries';
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
} from '@/utils/seo';
import { generateWhatsAppUrl, generateGeneralInquiryMessage } from '@/utils/whatsapp';

export const HomePage: React.FC = () => {
  const featuredServices = softwareServices.slice(0, 6);
  const featuredProducts = products.slice(0, 6);
  const whatsappUrl = generateWhatsAppUrl(generateGeneralInquiryMessage());

  const structuredSchema = [generateOrganizationSchema(), generateWebSiteSchema(), generateLocalBusinessSchema()];

  const whyChooseReasons = [
    {
      title: 'Competitive Market Pricing',
      description: 'Direct procurement channels and transparent quotations designed to maximize your IT budget efficiency.',
      icon: Coins,
    },
    {
      title: 'Comprehensive Solutions',
      description: 'Eliminate finger-pointing between vendors. We handle software engineering, hardware supply, and networking.',
      icon: Layers,
    },
    {
      title: 'Professional Installation',
      description: 'Certified technicians configure routers, rack servers, terminate Cat6 cabling, and set up operating systems.',
      icon: Wrench,
    },
    {
      title: 'Deep Technical Expertise',
      description: 'Experienced full-stack software engineers and infrastructure specialists guiding each technical decision.',
      icon: Cpu,
    },
    {
      title: 'Reliable After-Sales Support',
      description: 'Your relationship with Orion doesn’t end at delivery. We stay available for maintenance, fixes, and upgrades.',
      icon: Headphones,
    },
    {
      title: 'Customer-Focused Approach',
      description: 'Solutions tailored specifically to your organizational workflows rather than forced one-size-fits-all packages.',
      icon: ShieldCheck,
    },
    {
      title: 'Broad IT Product Catalog',
      description: 'Access 45+ categories of IT equipment — from laptops and servers to access control and power backups.',
      icon: Server,
    },
    {
      title: 'Bespoke Software Development',
      description: 'Custom web, mobile, desktop, and ERP systems engineered to scale alongside your business growth.',
      icon: Code2,
    },
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Discuss Your Requirements',
      description: 'We listen to your operational challenges, evaluate workstation needs, and map desired technical outcomes.',
    },
    {
      step: '02',
      title: 'Select the Right Solution',
      description: 'Our architects recommend hardware specifications, architecture blueprints, or hybrid software options.',
    },
    {
      step: '03',
      title: 'Procurement & Supply',
      description: 'Sourcing authentic commercial-grade IT equipment and setting up software development environments.',
    },
    {
      step: '04',
      title: 'Installation & Configuration',
      description: 'On-site physical mounting, operating system installs, network routing, and software environment configuration.',
    },
    {
      step: '05',
      title: 'Deployment & Testing',
      description: 'Rigorous end-to-end testing, burn-in validation, employee onboarding, and parallel verification runs.',
    },
    {
      step: '06',
      title: 'Ongoing Technical Support',
      description: 'Continuous troubleshooting, hardware maintenance, routine backups, and remote technical assistance.',
    },
  ];

  const industryIcons: Record<string, React.ElementType> = {
    'Corporate Offices': Building,
    'Educational Institutions': GraduationCap,
    'Healthcare Organizations': HeartPulse,
    'Government Organizations': Landmark,
    'Small and Medium Businesses': Store,
    'Retail Businesses': Store,
    'Industrial Organizations': Factory,
    'Startups and Enterprises': Rocket,
  };

  return (
    <>
      <SEOHead
        title="Complete Technology Solutions | Software & Hardware | Orion"
        description="Orion Software & Trading provides custom software development, enterprise IT hardware supply, professional installation, and ongoing technical support."
        canonicalPath="/"
        ogImage="/images/og/og-home.jpg"
        schema={structuredSchema}
      />

      {/* ─── SECTION 2: HERO SECTION ────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-8 pb-12 md:pt-12 md:pb-16 bg-linear-to-b from-slate-50 via-white to-white dark:from-[#080D1A] dark:via-[#0B0F19] dark:to-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800/80">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute -top-10 left-10 w-72 h-72 bg-emerald-400/5 dark:bg-emerald-400/10 blur-2xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Integrated Technology Partner
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Complete Technology Solutions.{' '}
                <span className="text-emerald-600 dark:text-emerald-400 block mt-2">
                  From Software to Infrastructure.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Orion Software &amp; Trading delivers custom software solutions, commercial IT hardware, professional on-site installation, system configuration, and ongoing technical support — all under one roof.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Button
                  to="/software-solutions"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto font-bold shadow-md shadow-emerald-600/20"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Explore Our Solutions
                </Button>

                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold"
                >
                  Request a Quote
                </Button>

                {whatsappUrl && (
                  <Button
                    href={whatsappUrl}
                    variant="whatsapp"
                    size="lg"
                    className="w-full sm:w-auto font-semibold shadow-sm"
                    icon={<MessageSquare className="w-4 h-4" />}
                  >
                    WhatsApp
                  </Button>
                )}
              </div>

              {/* Trust Metrics Bar */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Software</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mt-0.5">16 Core Services</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">IT Hardware</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mt-0.5">45+ Categories</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Support</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mt-0.5">End-to-End Care</p>
                </div>
              </div>
            </div>

            {/* Right Visual Architecture Stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Tech Card Window */}
                <div className="rounded-3xl bg-[#0F172A] text-white overflow-hidden shadow-2xl border border-slate-800 relative z-10">
                  {/* Top Image Showcase Banner */}
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src="/images/heroes/home-hero.jpg"
                      alt="Orion Technology Infrastructure &amp; Systems Architecture"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />

                    {/* Window Controls */}
                    <div className="absolute top-3 left-4 flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                    </div>

                    <div className="absolute top-3 right-4">
                      <span className="text-[11px] text-white/90 backdrop-blur-md bg-slate-900/70 border border-slate-700/80 px-2.5 py-0.5 rounded-full font-mono flex items-center gap-1.5 shadow-sm">
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        orion-tech-stack
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">Production Architecture</span>
                      <p className="text-xs font-bold text-white">Engineering &bull; Enterprise IT &bull; Support</p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pt-2">
                    {/* 3 Pillars Visual */}
                    <div className="mt-2 space-y-2.5">
                      <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center gap-3.5 hover:border-emerald-500/40 transition-colors">
                        <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 shrink-0">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Division A</span>
                          <div className="text-xs sm:text-sm font-bold text-white">Custom Software Engineering</div>
                          <p className="text-[11px] text-slate-400 mt-0.5">ERP, CRM, Web &amp; Mobile Applications</p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center gap-3.5 hover:border-emerald-500/40 transition-colors">
                        <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 shrink-0">
                          <Server className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Division B</span>
                          <div className="text-xs sm:text-sm font-bold text-white">Enterprise IT Hardware Supply</div>
                          <p className="text-[11px] text-slate-400 mt-0.5">Servers, Laptops, Cisco Networking &amp; CCTV</p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center gap-3.5 hover:border-emerald-500/40 transition-colors">
                        <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 shrink-0">
                          <Wrench className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Division C</span>
                          <div className="text-xs sm:text-sm font-bold text-white">Installation &amp; Ongoing Support</div>
                          <p className="text-[11px] text-slate-400 mt-0.5">On-Site Mounting, OS Setup &amp; Maintenance</p>
                        </div>
                      </div>
                    </div>

                    {/* Core Proposition Quote */}
                    <div className="mt-4 p-3 rounded-2xl bg-emerald-950/50 border border-emerald-800/60 text-xs text-emerald-200 flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>&ldquo;We don&apos;t just supply technology. We help you install it, configure it, and keep it running.&rdquo;</span>
                    </div>
                  </div>
                </div>

                {/* Decorative background glow */}
                <div className="absolute -inset-3 bg-linear-to-r from-emerald-600/30 to-teal-600/30 rounded-3xl blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: CORE CAPABILITIES ───────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Our Core Capabilities
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Three Pillars of Integrated Technology
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              A unified technology partner capable of architecting your digital platforms, procuring required hardware, and ensuring reliable daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Capability 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-200 group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-emerald-200 dark:border-emerald-800/60">
                  <Code2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Software Solutions</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Tailored web applications, mobile platforms, enterprise ERP systems, AI-powered automation, and specialized business management tools built to streamline your operations.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link
                  to="/software-solutions"
                  className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  <span>Explore Software Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Capability 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-200 group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-emerald-200 dark:border-emerald-800/60">
                  <Server className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">IT Hardware &amp; Products</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Commercial laptops, rack servers, switches, biometric access controllers, CCTV surveillance systems, UPS backups, and structured networking equipment from leading brands.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link
                  to="/it-products"
                  className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  <span>Browse Hardware Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Capability 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-200 group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-emerald-200 dark:border-emerald-800/60">
                  <Wrench className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Installation &amp; Support</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Professional on-site hardware mounting, server OS setup, network configuration, printer deployment, data migration, and reliable after-sales technical maintenance.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link
                  to="/technical-support"
                  className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  <span>View Support Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHY CHOOSE ORION? ──────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-slate-50 dark:bg-[#0E1526] border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Why Choose Orion?
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Built on Trust, Technical Precision &amp; Reliability
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              We stand apart through factual expertise, competitive procurement, and genuine post-installation technical dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseReasons.map((reason, index) => {
              const IconComp = reason.icon;
              return (
                <div
                  key={index}
                  className="p-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 border border-emerald-200/60 dark:border-emerald-800/60">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: SOFTWARE SOLUTIONS PREVIEW ─────────────────────────── */}
      <section className="py-10 md:py-14 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Software Solutions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Engineered for High-Impact Business Workflows
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm max-w-2xl">
                Explore our specialized development capabilities. Each service is custom-architected to solve specific operational bottlenecks.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button to="/software-solutions" variant="outline" size="md">
                View All 16 Services &rarr;
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: IT PRODUCTS PREVIEW ─────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-slate-50 dark:bg-[#0E1526] border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                IT Hardware &amp; Equipment
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Enterprise Hardware at Competitive Rates
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm max-w-2xl">
                Commercial computing, networking, surveillance, and power equipment. Contact our team to confirm current availability and receive project quotations.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button to="/it-products" variant="outline" size="md">
                Browse Full Catalog &rarr;
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Catalog Quotation Notice Banner */}
          <div className="mt-8 p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 text-center max-w-2xl mx-auto shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Looking for a specific IT product or hardware component?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We supply over 45 categories of IT hardware. Reach out with your desired bill of quantities (BOQ) for instant availability checks and competitive corporate pricing.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button to="/contact" variant="primary" size="sm">
                Request Hardware Quotation
              </Button>
              <Button href={whatsappUrl} variant="whatsapp" size="sm" icon={<MessageSquare className="w-3.5 h-3.5" />}>
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: END-TO-END SUPPORT JOURNEY ─────────────────────────── */}
      <section className="py-10 md:py-14 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Customer Journey
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              End-to-End Technology Support
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              We accompany your organization through every phase of technical implementation — from initial consultation to long-term operational health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {journeySteps.map((step) => (
              <div
                key={step.step}
                className="relative p-7 rounded-3xl bg-slate-50 dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-colors shadow-2xs"
              >
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mb-3 font-mono">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Highlight Callout */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-emerald-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                We don&apos;t just supply technology.
              </h3>
              <p className="mt-1.5 text-emerald-100 text-sm sm:text-base max-w-xl leading-relaxed">
                We help you install it, configure it, integrate it, and keep it running smoothly day after day.
              </p>
            </div>
            <Button
              to="/technical-support"
              variant="secondary"
              size="lg"
              className="shrink-0 bg-white text-slate-900 hover:bg-slate-100 font-bold"
            >
              Explore Technical Support
            </Button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: INDUSTRIES WE SERVE ─────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-slate-50 dark:bg-[#0E1526] border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Sectors &amp; Domains
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Industries We Serve
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Providing customized software architecture and commercial hardware deployments across diverse enterprise sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, index) => {
              const IconComp = industryIcons[ind.name] || Building;
              return (
                <div
                  key={index}
                  className="p-7 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 border border-emerald-200/60 dark:border-emerald-800/60">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: CALL TO ACTION ──────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-[#070A11] text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Partner With Orion
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Looking for the Right Technology Partner?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you need custom software, commercial IT hardware, professional installation, or ongoing technical maintenance, Orion Software &amp; Trading is ready to help your business operate with confidence.
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
              Discuss Your Project
            </Button>

            <Button
              to="/contact?type=it-hardware"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800"
            >
              Request a Quotation
            </Button>

            {whatsappUrl && (
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Inquire via WhatsApp
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
