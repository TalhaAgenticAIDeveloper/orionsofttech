import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Button } from '@/components/buttons/Button';
import { mainNavItems } from '@/config/navigationConfig';
import { siteConfig } from '@/config/siteConfig';
import { generateWhatsAppUrl, generateGeneralInquiryMessage } from '@/utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const whatsappInquiryUrl = generateWhatsAppUrl(generateGeneralInquiryMessage());

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md shadow-sm border-slate-200/80 dark:border-slate-800/80'
            : 'bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-sm border-slate-100 dark:border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Official Logo */}
            <div className="shrink-0 flex items-center">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-150 ${
                      isActive
                        ? 'text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/50'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Icons & CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />

              {/* WhatsApp Quick Action */}
              {siteConfig.contact.whatsapp && (
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-500 hover:text-[#25D366] dark:text-slate-400 dark:hover:text-[#25D366] transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  aria-label="Direct WhatsApp Inquiry"
                  title="Direct WhatsApp Inquiry"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              )}

              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="font-semibold shadow-emerald-500/10 hover:shadow-emerald-500/20 shadow-md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Actions: Theme Toggle & Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-[#0E1526] border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
                <Logo size="sm" />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-1.5 mt-6" aria-label="Mobile Navigation">
                {mainNavItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-3 text-sm font-semibold rounded-xl transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center font-bold"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Get a Quotation
              </Button>

              {siteConfig.contact.whatsapp && (
                <Button
                  href={whatsappInquiryUrl}
                  variant="whatsapp"
                  size="md"
                  className="w-full justify-center font-semibold"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Chat on WhatsApp
                </Button>
              )}

              {siteConfig.contact.phone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 py-1 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
