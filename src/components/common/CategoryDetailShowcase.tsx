import React from 'react';
import { CheckCircle2, Wrench, ShieldCheck, ArrowLeft, MessageSquare, FileText } from 'lucide-react';
import { Button } from '@/components/buttons/Button';
import type { HardwareCategory } from '@/data/products/hardwareCategories';
import { generateWhatsAppUrl, generateCategoryInquiryMessage } from '@/utils/whatsapp';

interface CategoryDetailShowcaseProps {
  category: HardwareCategory;
  onBackToAll: () => void;
  productCount?: number;
}

export const CategoryDetailShowcase: React.FC<CategoryDetailShowcaseProps> = ({
  category,
  onBackToAll,
}) => {
  const whatsappUrl = generateWhatsAppUrl(
    generateCategoryInquiryMessage(category.name)
  );

  return (
    <div className="mb-10 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden transition-all">
      {/* Top Banner Navigation */}
      <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-4">
        <button
          onClick={onBackToAll}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> &larr; Back to All Categories
        </button>

        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
          Commercial Technology Division
        </span>
      </div>

      {/* Main Content Layout */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Image & Brands */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 bg-slate-900 h-64 sm:h-72">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Brands Supported */}
          <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Primary Brands We Procure &amp; Support:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {category.brands.map((brand) => (
                <span
                  key={brand}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 shadow-2xs"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Detailed Equipment Breakdown */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <div className="mb-2">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/80 dark:border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                {category.tagline}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight mb-3">
              {category.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium mb-6">
              {category.shortDescription}
            </p>

            {/* Equipment Grid */}
            <div className="mb-6">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Equipment &amp; Hardware Provided In This Category:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.equipmentProvided.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Included */}
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" /> On-Site Technical Services Included:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-950 dark:text-emerald-200">
                {category.servicesIncluded.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-3">
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="md"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Inquire on WhatsApp
            </Button>
            <Button
              to={`/contact?category=${category.slug}&type=it-hardware`}
              variant="primary"
              size="md"
              icon={<FileText className="w-4 h-4" />}
            >
              Request Hardware Quotation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
