import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { HardwareCategory } from '@/data/products/hardwareCategories';

interface HardwareCategoryCardProps {
  category: HardwareCategory;
  onSelect?: (slug: string) => void;
}

export const HardwareCategoryCard: React.FC<HardwareCategoryCardProps> = ({
  category,
  onSelect,
}) => {
  return (
    <div className="group flex flex-col rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* 1. Pure Full-Bleed Clean Image (No text covering the equipment) */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* 2. Structured Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Tagline Badge */}
          <div className="mb-2">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/80 dark:border-emerald-800/60 px-2.5 py-0.5 rounded-full">
              {category.tagline}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {category.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
            {category.shortDescription}
          </p>

          {/* Equipment Highlights */}
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
              Equipment Provided:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200 font-medium">
              {category.equipmentProvided.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] uppercase font-bold text-slate-400">Brands:</span>
            {category.brands.slice(0, 4).map((b) => (
              <span
                key={b}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> On-site Setup
          </span>

          {onSelect ? (
            <button
              onClick={() => onSelect(category.slug)}
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-200"
            >
              View Full Details <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link
              to={`/it-products?category=${category.slug}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-200"
            >
              View Full Details <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
