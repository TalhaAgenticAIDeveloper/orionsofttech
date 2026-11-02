import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { siteConfig } from '@/config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/utils/seo';

export const TermsPage: React.FC = () => {
  const breadcrumbItems = [{ label: 'Terms and Conditions' }];

  const pageSchema = generateWebPageSchema({
    name: 'Terms and Conditions | Orion Software & Trading',
    description:
      'Terms and conditions governing quotations, IT hardware procurement, custom software development, and technical installation services.',
    url: '/terms-and-conditions',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms and Conditions', url: '/terms-and-conditions' },
  ]);

  return (
    <>
      <SEOHead
        title="Terms & Conditions | Orion Software & Trading"
        description="Terms and conditions governing quotations, hardware procurement, software engineering, and technical installation services at Orion Software & Trading."
        canonicalPath="/terms-and-conditions"
        ogImage="/images/og/og-default.jpg"
        schema={[pageSchema, breadcrumbSchema]}
      />

      <section className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-3">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Last Updated: October 2026
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 text-slate-700 dark:text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or browsing this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            2. Product Catalog &amp; Quotations Policy
          </h2>
          <p>
            The products displayed in our <Link to="/it-products" className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500">IT hardware catalog</Link> represent equipment categories and items commonly supplied by {siteConfig.companyName}.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-400">
            <li>
              <strong>No Online Checkout or Public Prices:</strong> Product listings do not constitute fixed retail price offers. Prices vary based on order volumes, delivery locations, currency exchange rates, and manufacturer pricing revisions.
            </li>
            <li>
              <strong>Stock Availability:</strong> Inventory levels fluctuate rapidly. Formal quotations must be obtained from our team via our <Link to="/contact" className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500">contact desk</Link> to confirm real-time availability, delivery timelines, and payment terms.
            </li>
            <li>
              <strong>Specifications:</strong> While we endeavor to ensure technical specifications are accurate and up to date, manufacturers may alter hardware models and revisions without prior notice.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            3. Software Development Services
          </h2>
          <p>
            Custom software engineering projects across our <Link to="/software-solutions" className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500">software solutions portfolio</Link> (including ERP, web, and mobile development) are governed by separate, mutually agreed Service Level Agreements (SLAs), Statement of Work (SOW) documents, and project milestone schedules executed between {siteConfig.companyName} and the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            4. Installation &amp; Technical Support Scope
          </h2>
          <p>
            On-site installation, configuration, and maintenance services across our <Link to="/technical-support" className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500">technical support &amp; installation services</Link> are provided according to specific scope descriptions agreed during quotation. Please review our <Link to="/privacy-policy" className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500">Privacy Policy</Link> for details on confidential customer project data handling.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            5. Intellectual Property
          </h2>
          <p>
            All content, brand assets, logos, and website layouts are the property of {siteConfig.companyName} or used with permission. Third-party brand names, trademarks, and logos (such as Dell, HP, Cisco, Hikvision, etc.) remain the exclusive property of their respective owners.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            6. Limitation of Liability
          </h2>
          <p>
            In no event shall {siteConfig.companyName} or its suppliers be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the materials on this website.
          </p>
        </section>
      </div>
    </>
  );
};

