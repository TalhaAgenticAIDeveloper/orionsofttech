import React from 'react';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/buttons/Button';
import { SEOHead } from '@/components/seo/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found"
        description="The page you are looking for does not exist or has been moved. Explore Orion Software & Trading solutions."
        canonicalPath="/404"
        robots="noindex, follow"
      />

      <div className="min-h-[50vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/60">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 font-mono text-3xl font-black mb-6">
            404
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Page Not Found
          </h1>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              to="/"
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
              icon={<Home className="w-4 h-4" />}
            >
              Back to Home
            </Button>

            <Button
              to="/it-products"
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
              icon={<Search className="w-4 h-4" />}
            >
              Browse Products
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
