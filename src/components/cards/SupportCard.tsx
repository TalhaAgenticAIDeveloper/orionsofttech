import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import type { SupportService } from '@/types';

interface SupportCardProps {
  service: SupportService;
  className?: string;
}

export const SupportCard: React.FC<SupportCardProps> = ({ service, className = '' }) => {
  return (
    <article
      className={`group flex flex-col justify-between p-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200 ${className}`}
    >
      <div>
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/70 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all">
          <DynamicIcon name={service.icon} className="w-5 h-5" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
          {service.name}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {service.description}
        </p>

        {/* Features Checklist */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
          {service.features.map((feat, index) => (
            <div key={index} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry link */}
      <div className="mt-7 pt-4 border-t border-slate-100 dark:border-slate-800/80">
        <Link
          to={`/contact?type=installation-services&subject=${encodeURIComponent(`Support Inquiry: ${service.name}`)}`}
          className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
        >
          <span>Request Support Quotation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
