import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/Home/HomePage';
import { AboutPage } from '@/pages/About/AboutPage';
import { SoftwareSolutionsPage } from '@/pages/SoftwareSolutions/SoftwareSolutionsPage';
import { SoftwareServiceDetailPage } from '@/pages/SoftwareServiceDetail/SoftwareServiceDetailPage';
import { ITProductsPage } from '@/pages/ITProducts/ITProductsPage';
import { ProductDetailPage } from '@/pages/ProductDetail/ProductDetailPage';
import { TechnicalSupportPage } from '@/pages/TechnicalSupport/TechnicalSupportPage';
import { SupportServiceDetailPage } from '@/pages/SupportServiceDetail/SupportServiceDetailPage';
import { ContactPage } from '@/pages/Contact/ContactPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicy/PrivacyPolicyPage';
import { TermsPage } from '@/pages/Terms/TermsPage';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';

export function render(url: string) {
  const helmetContext: any = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="software-solutions" element={<SoftwareSolutionsPage />} />
            <Route path="software-solutions/:slug" element={<SoftwareServiceDetailPage />} />
            <Route path="it-products" element={<ITProductsPage />} />
            <Route path="it-products/:categorySlug/:productSlug" element={<ProductDetailPage />} />
            <Route path="it-products/:productSlug" element={<ProductDetailPage />} />
            <Route path="technical-support" element={<TechnicalSupportPage />} />
            <Route path="technical-support/:slug" element={<SupportServiceDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-and-conditions" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;

  return {
    appHtml,
    headTags: helmet
      ? `
        ${helmet.title?.toString() || ''}
        ${helmet.meta?.toString() || ''}
        ${helmet.link?.toString() || ''}
        ${helmet.script?.toString() || ''}
      `.trim()
      : '',
  };
}
