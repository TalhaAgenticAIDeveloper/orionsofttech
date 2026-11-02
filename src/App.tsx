import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RootLayout } from '@/layouts/RootLayout';
import { Loader2 } from 'lucide-react';

// Route-based code splitting for maximum performance
const HomePage = lazy(() =>
  import('@/pages/Home/HomePage').then((m) => ({ default: m.HomePage }))
);
const AboutPage = lazy(() =>
  import('@/pages/About/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const SoftwareSolutionsPage = lazy(() =>
  import('@/pages/SoftwareSolutions/SoftwareSolutionsPage').then((m) => ({
    default: m.SoftwareSolutionsPage,
  }))
);
const SoftwareServiceDetailPage = lazy(() =>
  import('@/pages/SoftwareServiceDetail/SoftwareServiceDetailPage').then((m) => ({
    default: m.SoftwareServiceDetailPage,
  }))
);
const ITProductsPage = lazy(() =>
  import('@/pages/ITProducts/ITProductsPage').then((m) => ({
    default: m.ITProductsPage,
  }))
);
const ProductDetailPage = lazy(() =>
  import('@/pages/ProductDetail/ProductDetailPage').then((m) => ({
    default: m.ProductDetailPage,
  }))
);
const TechnicalSupportPage = lazy(() =>
  import('@/pages/TechnicalSupport/TechnicalSupportPage').then((m) => ({
    default: m.TechnicalSupportPage,
  }))
);
const SupportServiceDetailPage = lazy(() =>
  import('@/pages/SupportServiceDetail/SupportServiceDetailPage').then((m) => ({
    default: m.SupportServiceDetailPage,
  }))
);
const ContactPage = lazy(() =>
  import('@/pages/Contact/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const PrivacyPolicyPage = lazy(() =>
  import('@/pages/PrivacyPolicy/PrivacyPolicyPage').then((m) => ({
    default: m.PrivacyPolicyPage,
  }))
);
const TermsPage = lazy(() =>
  import('@/pages/Terms/TermsPage').then((m) => ({ default: m.TermsPage }))
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFound/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

const PageLoader: React.FC = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
        Loading...
      </span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="software-solutions" element={<SoftwareSolutionsPage />} />
              <Route
                path="software-solutions/:slug"
                element={<SoftwareServiceDetailPage />}
              />
              <Route path="it-products" element={<ITProductsPage />} />
              <Route
                path="it-products/:categorySlug/:productSlug"
                element={<ProductDetailPage />}
              />
              <Route
                path="it-products/:productSlug"
                element={<ProductDetailPage />}
              />
              <Route path="technical-support" element={<TechnicalSupportPage />} />
              <Route
                path="technical-support/:slug"
                element={<SupportServiceDetailPage />}
              />
              <Route path="contact" element={<ContactPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="terms-and-conditions" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
