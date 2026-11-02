import React from 'react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { siteConfig } from '@/config/siteConfig';

export const TermsPage: React.FC = () => {
  const breadcrumbItems = [{ label: 'Terms and Conditions' }];

  return (
    <>
      <SEOHead
        title="Terms and Conditions | Orion Software & Trading"
        description="Terms and conditions governing the use of Orion Software & Trading website, quotations, hardware procurement, and software development services."
        canonicalPath="/terms-and-conditions"
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
            The products displayed on our website represent equipment categories and items commonly supplied by {siteConfig.companyName}.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-400">
            <li>
              <strong>No Online Checkout or Public Prices:</strong> Product listings do not constitute fixed retail price offers. Prices vary based on order volumes, delivery locations, currency exchange rates, and manufacturer pricing revisions.
            </li>
            <li>
              <strong>Stock Availability:</strong> Inventory levels fluctuate rapidly. Formal quotations must be obtained from our team to confirm real-time availability, delivery timelines, and payment terms.
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
            Custom software engineering projects are governed by separate, mutually agreed Service Level Agreements (SLAs), Statement of Work (SOW) documents, and project milestone schedules executed between {siteConfig.companyName} and the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            4. Installation &amp; Technical Support Scope
          </h2>
          <p>
            On-site installation, configuration, and technical maintenance services are provided according to specific scope descriptions agreed during quotation. Support warranties apply as specified in formal sales invoices and manufacturer terms. We do not provide open-ended or unlimited technical support unless covered under an active Annual Maintenance Contract (AMC).
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

