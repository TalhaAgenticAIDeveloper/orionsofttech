import React from 'react';
import { Outlet } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { siteConfig } from '@/config/siteConfig';
import { generateWhatsAppUrl, generateGeneralInquiryMessage } from '@/utils/whatsapp';

export const RootLayout: React.FC = () => {
  useScrollToTop();
  const whatsappUrl = generateWhatsAppUrl(generateGeneralInquiryMessage());

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      {siteConfig.contact.whatsapp && (
        <aside aria-label="Direct Messaging">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] flex items-center justify-center group"
            aria-label="Direct WhatsApp Quote Inquiry"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 text-sm font-medium">
              Inquire on WhatsApp
            </span>
          </a>
        </aside>
      )}
    </div>
  );
};

