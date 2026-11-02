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
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath = '',
  schema,
  ogType = 'website',
  ogImage,
}) => {
  const fullTitle = title
    ? siteConfig.seo.titleTemplate.replace('%s', title)
    : siteConfig.seo.defaultTitle;

  const metaDescription = description || siteConfig.seo.defaultDescription;
  const metaKeywords = keywords && keywords.length > 0
    ? keywords.join(', ')
    : siteConfig.seo.defaultKeywords.join(', ');

  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;
  const imageUrl = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`)
    : `${siteConfig.url}/images/orion-logo.png`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
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

