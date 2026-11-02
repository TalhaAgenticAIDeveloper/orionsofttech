import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/siteConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  schema?: object | object[];
  ogType?: 'website' | 'article';
  ogImage?: string;
  robots?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  schema,
  ogType = 'website',
  ogImage,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
}) => {
  const fullTitle = title
    ? siteConfig.seo.titleTemplate.replace('%s', title)
    : siteConfig.seo.defaultTitle;

  const metaDescription = description || siteConfig.seo.defaultDescription;

  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;
  const defaultImage = siteConfig.defaultOgImage || '/images/og/og-default.jpg';
  const selectedImage = ogImage || defaultImage;
  const imageUrl = selectedImage.startsWith('http')
    ? selectedImage
    : `${siteConfig.url}${selectedImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Google Search Console Verification */}
      {siteConfig.analytics.googleSearchConsoleVerification && (
        <meta
          name="google-site-verification"
          content={siteConfig.analytics.googleSearchConsoleVerification}
        />
      )}

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={siteConfig.companyName} />
      <meta property="og:locale" content={siteConfig.seo.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data / JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
