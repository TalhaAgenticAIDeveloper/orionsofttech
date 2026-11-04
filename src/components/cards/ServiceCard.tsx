import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import type { SoftwareService } from '@/types';

interface ServiceCardProps {
  service: SoftwareService;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '' }) => {
  return (
    <article
      className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200 ${className}`}
    >
      <div>
        {/* Service Icon with Brand Green Treatment */}
        <div className="w-13 h-13 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/70 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-600 dark:group-hover:text-white transition-all duration-200">
          <DynamicIcon name={service.icon} className="w-6 h-6" />
        </div>

        {/* Title as Primary Stretched Semantic Link */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
          <Link
            to={`/software-solutions/${service.slug}`}
            className="focus:outline-none after:absolute after:inset-0"
          >
            {service.name}
          </Link>
        </h3>

        {/* Short Tagline / Description */}
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>


      </div>

      {/* Action Footer Indicator (Non-Duplicate Semantic Anchor) */}
      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <span
          className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
          aria-hidden="true"
        >
          <span>Explore Details</span>
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </article>
  );
};
