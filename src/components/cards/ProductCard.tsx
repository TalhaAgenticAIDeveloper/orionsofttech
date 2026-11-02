import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Layers } from 'lucide-react';
import type { Product } from '@/types';
import { generateWhatsAppUrl, generateProductInquiryMessage } from '@/utils/whatsapp';
import { Button } from '@/components/buttons/Button';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const whatsappUrl = generateWhatsAppUrl(generateProductInquiryMessage(product.name));
  const productPath = `/it-products/${product.categorySlug}/${product.slug}`;

  return (
    <article
      className={`group flex flex-col justify-between rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-2xs hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200 ${className}`}
    >
      <div>
        {/* Product Visual Area with Explicit Aspect Ratio */}
        <div className="relative aspect-16/10 bg-slate-50/80 dark:bg-[#0E1526] flex items-center justify-center border-b border-slate-100 dark:border-slate-800 overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={`${product.brand ? product.brand + ' ' : ''}${product.name} enterprise IT hardware quotation`}
              width="400"
              height="250"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/60 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-8 h-8 opacity-80" />
            </div>
          )}

          {/* Brand Tag */}
          {product.brand && (
            <span className="absolute top-3.5 left-3.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
              {product.brand}
            </span>
          )}

          {/* Inquire Badge */}
          <span className="absolute top-3.5 right-3.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60">
            Custom Quotation
          </span>
        </div>

        {/* Product Information */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 leading-snug">
            <Link to={productPath} className="focus:outline-none">
              {product.name}
            </Link>
          </h3>

          <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key Specifications (Up to 3 items) */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
            {product.specifications.slice(0, 3).map((spec, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium truncate max-w-[45%]">
                  {spec.label}:
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold text-right truncate max-w-[50%]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Availability & Quotation Notice */}
          <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19]/60 border border-slate-200/60 dark:border-slate-800/80 text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
            Contact our team for live stock availability, quantity lead times, and competitive quotation.
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 flex items-center gap-2.5">
        <Button
          to={productPath}
          variant="outline"
          size="sm"
          className="flex-1 justify-center text-xs font-semibold"
          aria-label={`View full technical specifications for ${product.name}`}
          icon={<ArrowRight className="w-3.5 h-3.5" />}
          iconPosition="right"
        >
          View Specs
        </Button>

        <Button
          href={whatsappUrl}
          variant="whatsapp"
          size="sm"
          className="px-3"
          aria-label={`Inquire about ${product.name} on WhatsApp`}
          title="Inquire on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </Button>
      </div>
    </article>
  );
};
