import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Wrench,
  Server,
  ArrowUpRight,
} from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import {
  footerQuickLinks,
  footerServiceLinks,
  footerProductLinks,
} from '@/config/navigationConfig';
import { siteConfig } from '@/config/siteConfig';
import { generateWhatsAppUrl, generateGeneralInquiryMessage } from '@/utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = generateWhatsAppUrl(generateGeneralInquiryMessage());

  const handleLinkClick = (targetPath: string) => {
    if (targetPath.includes('#')) {
      const [path, hashId] = targetPath.split('#');
      const currentPath = window.location.pathname;
      if (currentPath === path || (path === '' && hashId)) {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else if (targetPath.startsWith('/it-products') && window.location.pathname === '/it-products') {
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (!targetPath.includes('?') && !targetPath.includes('#')) {
      if (window.location.pathname === targetPath) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      {/* Top Value Banner */}
      <div className="bg-slate-950/80 border-b border-slate-800/80 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Comprehensive Solutions</h4>
                <p className="text-slate-400 text-xs mt-0.5">Software, hardware supply &amp; infrastructure under one roof.</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Professional Installation</h4>
                <p className="text-slate-400 text-xs mt-0.5">Expert hardware deployment, network setup &amp; configuration.</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Reliable Technical Support</h4>
                <p className="text-slate-400 text-xs mt-0.5">On-site assistance, remote troubleshooting &amp; maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Company Profile & Core Proposition */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white/10 dark:bg-slate-800/50 p-2 rounded-lg">
              <Logo size="md" variant="dark" />
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Integrated technology partner providing custom software engineering, enterprise IT hardware procurement, and certified technical support.
            </p>

            {/* Direct Contact Highlights */}
            <div className="pt-3 space-y-2 text-xs text-slate-400">
              {siteConfig.contact.phone ? (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={`tel:${(siteConfig.contact.phoneIntl || siteConfig.contact.phone).replace(/\s+/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-slate-500">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Official phone available upon inquiry</span>
                </div>
              )}

              {siteConfig.contact.email ? (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-slate-500">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>info@orionsofttech.com</span>
                </div>
              )}

              {siteConfig.contact.whatsapp && (
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors"
                  >
                    WhatsApp: {siteConfig.contact.whatsapp}
                  </a>
                </div>
              )}

              {siteConfig.contact.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.country}</span>
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Software Solutions */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Software Solutions
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {footerServiceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/software-solutions#services"
                  onClick={() => handleLinkClick('/software-solutions#services')}
                  className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
                >
                  View All Software Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: IT Hardware Catalog */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              IT Hardware Catalog
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {footerProductLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/it-products#catalog"
                  onClick={() => handleLinkClick('/it-products#catalog')}
                  className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
                >
                  Browse Full Hardware Catalog &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Support */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Company &amp; Support
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {footerQuickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60 text-xs">
                  <p className="text-white font-medium">Need a hardware quotation?</p>
                  <p className="text-slate-400 mt-1">
                    Contact us to verify live availability and receive custom project pricing.
                  </p>
                  <Link
                    to="/contact#contact-form"
                    onClick={() => handleLinkClick('/contact#contact-form')}
                    className="inline-block mt-2 text-emerald-400 hover:underline font-semibold"
                  >
                    Request a Quote &rarr;
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Notice & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-slate-400">
            <Link
              to="/privacy-policy"
              onClick={() => handleLinkClick('/privacy-policy')}
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              onClick={() => handleLinkClick('/terms-and-conditions')}
              className="hover:text-emerald-400 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to="/contact#contact-form"
              onClick={() => handleLinkClick('/contact#contact-form')}
              className="hover:text-emerald-400 transition-colors"
            >
              Support Inquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

