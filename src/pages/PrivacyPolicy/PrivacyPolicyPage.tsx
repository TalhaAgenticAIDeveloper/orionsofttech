import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SEOHead } from '@/components/seo/SEOHead';
import { siteConfig } from '@/config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/utils/seo';

export const PrivacyPolicyPage: React.FC = () => {
  const breadcrumbItems = [{ label: 'Privacy Policy' }];

  const pageSchema = generateWebPageSchema({
    name: 'Privacy Policy | Orion Software & Trading',
    description:
      'Privacy policy for Orion Software & Trading. Learn how customer inquiry data, hardware procurement specifications, and project privacy are handled.',
    url: '/privacy-policy',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
  ]);

  return (
    <>
      <SEOHead
        title="Privacy Policy | Orion Software & Trading"
        description="Privacy policy for Orion Software & Trading. Learn how customer inquiry data, hardware procurement specifications, and project privacy are protected."
        canonicalPath="/privacy-policy"
        ogImage="/images/og/og-default.jpg"
        schema={[pageSchema, breadcrumbSchema]}
      />

      <section className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-3">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Last Updated: October 2026
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 text-slate-700 dark:text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            1. Commitment to Privacy
          </h2>
          <p>
            {siteConfig.companyName} (&ldquo;Orion&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to respecting the privacy of our clients, prospective business partners, and website visitors. This Privacy Policy details our practices concerning the collection, usage, and protection of information submitted through our website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            2. Information We Collect
          </h2>
          <p>
            We collect personal and corporate information that you voluntarily choose to provide when inquiring about our <Link to="/software-solutions" className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500">software development services</Link>, <Link to="/it-products" className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500">IT hardware catalog</Link>, or <Link to="/technical-support" className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500">installation services</Link>:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-400">
            <li>Contact details such as Full Name, Email Address, and Phone/WhatsApp Number.</li>
            <li>Organization name and department details.</li>
            <li>Inquiry parameters, hardware bills of quantity (BOQ), and software project specifications.</li>
            <li>Technical log details (such as IP addresses and browser types) collected automatically for security audit and rate-limiting purposes.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            3. How We Use Collected Information
          </h2>
          <p>
            Information collected through our website is used strictly for legitimate commercial purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-400">
            <li>Evaluating project requirements and preparing accurate commercial quotations.</li>
            <li>Communicating directly regarding your inquiry via email, phone, or WhatsApp.</li>
            <li>Coordinating on-site hardware deliveries, site audits, and technical installations.</li>
            <li>Maintaining operational security and preventing fraudulent or abusive form submissions.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            4. Information Sharing &amp; Third Parties
          </h2>
          <p>
            We do not sell, rent, or trade customer contact details or project specifications to external advertisers. Data is shared strictly with authorized logistics partners or cloud providers when necessary to execute authorized procurement or hosting requests.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            5. Data Security &amp; Retention
          </h2>
          <p>
            We implement administrative, technical, and physical security measures to safeguard your information against unauthorized access, loss, or misuse. Project specifications and inquiry records are retained only as long as necessary to fulfill commercial requirements or statutory record-keeping obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            6. Contacting Us About Privacy
          </h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request the modification or removal of your contact information, please submit an inquiry through our <Link to="/contact" className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500">Contact Us page</Link> or review our <Link to="/terms-and-conditions" className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500">Terms and Conditions</Link>.
          </p>
        </section>
      </div>
    </>
  );
};

