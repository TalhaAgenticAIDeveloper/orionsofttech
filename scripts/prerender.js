import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrBundlePath = path.join(rootDir, 'dist-ssr/entry-server.js');
const domain = 'https://orionsoftwaretrading.vercel.app';

async function runPrerender() {
  console.log('[Prerender] Starting Route Pre-Rendering (SSG)...');

  if (!fs.existsSync(ssrBundlePath)) {
    console.error(`[Prerender] SSR bundle not found at ${ssrBundlePath}`);
    process.exit(1);
  }

  const { render } = await import(`file://${ssrBundlePath}`);
  const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  // Load datasets
  const swText = fs.readFileSync(path.join(rootDir, 'src/data/services/softwareServices.ts'), 'utf-8');
  const swMatches = [...swText.matchAll(/slug:\s*'([^']+)'.*?name:\s*'([^']+)'.*?title:\s*'([^']+)'.*?description:\s*'([^']+)'/gs)];

  const supText = fs.readFileSync(path.join(rootDir, 'src/data/services/supportServices.ts'), 'utf-8');
  const supMatches = [...supText.matchAll(/slug:\s*'([^']+)'.*?name:\s*'([^']+)'/gs)];

  const prodText = fs.readFileSync(path.join(rootDir, 'src/data/products/products.ts'), 'utf-8');
  const prodMatches = [...prodText.matchAll(/slug:\s*'([^']+)'.*?name:\s*'([^']+)'.*?categorySlug:\s*'([^']+)'.*?title:\s*'([^']+)'.*?description:\s*'([^']+)'/gs)];

  // Route definitions with custom SEO metadata
  const routeConfigs = [
    {
      url: '/',
      title: 'Complete Technology Solutions | Software & Hardware | Orion',
      description: 'Orion Software & Trading provides custom software development, enterprise IT hardware supply, professional installation, and ongoing technical support.',
      ogImage: '/images/og/og-home.jpg',
    },
    {
      url: '/about',
      title: 'About Us | Technology Solutions & IT Hardware Supplier | Orion',
      description: 'Learn about Orion Software & Trading. Enterprise provider delivering custom software, IT hardware supply, network installation, and technical support.',
      ogImage: '/images/og/og-home.jpg',
    },
    {
      url: '/software-solutions',
      title: 'Custom Software Solutions & Development Services | Orion',
      description: 'Explore custom software development services from Orion Software & Trading. Bespoke web apps, mobile solutions, ERP, CRM, and AI automation tailored to your business.',
      ogImage: '/images/og/og-software.jpg',
    },
    {
      url: '/it-products',
      title: 'IT Hardware & Equipment Catalog | Orion Software & Trading',
      description: 'Browse enterprise IT hardware catalog. Servers, business laptops, Cisco switches, CCTV cameras, UPS power systems. Inquire for availability and quotations.',
      ogImage: '/images/og/og-hardware.jpg',
    },
    {
      url: '/technical-support',
      title: 'Technical Support & Installation Services | Orion Software & Trading',
      description: 'Comprehensive IT support: hardware installation, server setup, network configuration, CCTV installation, biometric systems, and after-sales support.',
      ogImage: '/images/og/og-support.jpg',
    },
    {
      url: '/contact',
      title: 'Contact Us | Request IT Hardware Quotation & Consultation',
      description: 'Contact Orion Software & Trading for software development inquiries, IT hardware quotations, network installation, and technical support consultation.',
      ogImage: '/images/og/og-default.jpg',
    },
    {
      url: '/privacy-policy',
      title: 'Privacy Policy | Orion Software & Trading',
      description: 'Privacy policy for Orion Software & Trading. Learn how customer inquiry data, hardware procurement specifications, and project privacy are protected.',
      ogImage: '/images/og/og-default.jpg',
    },
    {
      url: '/terms-and-conditions',
      title: 'Terms & Conditions | Orion Software & Trading',
      description: 'Terms and conditions governing quotations, hardware procurement, software engineering, and technical installation services at Orion Software & Trading.',
      ogImage: '/images/og/og-default.jpg',
    },
    {
      url: '/404',
      title: '404 - Page Not Found | Orion Software & Trading',
      description: 'The page you are looking for does not exist or has been moved. Explore Orion Software & Trading solutions.',
      robots: 'noindex, follow',
      ogImage: '/images/og/og-default.jpg',
    },
  ];

  // Add Software Services
  for (const m of swMatches) {
    const slug = m[1];
    const name = m[2];
    const title = m[3];
    const desc = m[4];
    routeConfigs.push({
      url: `/software-solutions/${slug}`,
      title: `${title} | Orion Software & Trading`,
      description: desc,
      ogImage: '/images/og/og-software.jpg',
    });
  }

  // Add Technical Support Services
  for (const m of supMatches) {
    const slug = m[1];
    const name = m[2];
    routeConfigs.push({
      url: `/technical-support/${slug}`,
      title: `${name} Services | Professional IT Installation | Orion`,
      description: `Professional ${name} by certified technicians. Deployment, configuration, testing, and after-sales support for enterprises. Request a quote.`,
      ogImage: '/images/og/og-support.jpg',
    });
  }

  // Add Hardware Products
  for (const m of prodMatches) {
    const slug = m[1];
    const name = m[2];
    const catSlug = m[3];
    const title = m[4];
    const desc = m[5];
    routeConfigs.push({
      url: `/it-products/${catSlug}/${slug}`,
      title: `${title}`,
      description: desc,
      ogImage: '/images/og/og-hardware.jpg',
    });
  }

  console.log(`[Prerender] Pre-rendering ${routeConfigs.length} static routes...`);

  let renderedCount = 0;

  for (const config of routeConfigs) {
    const { url, title, description, robots, ogImage } = config;
    try {
      const { appHtml } = render(url);

      let pageHtml = templateHtml;

      // 1. Inject rendered HTML into root
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // 2. Inject Page Title
      if (title) {
        pageHtml = pageHtml.replace(
          /<title>.*?<\/title>/i,
          `<title>${title}</title>`
        );
      }

      // 3. Inject Meta Description
      if (description) {
        pageHtml = pageHtml.replace(
          /<meta name="description" content=".*?" \/>/i,
          `<meta name="description" content="${description}" />`
        );
      }

      // 4. Inject Canonical URL
      const canonicalUrl = `${domain}${url === '/' ? '' : url}`;
      pageHtml = pageHtml.replace(
        /<link rel="canonical" href=".*?" \/>/i,
        `<link rel="canonical" href="${canonicalUrl}" />`
      );

      // 5. Inject Robots tag
      const robotsContent = robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
      pageHtml = pageHtml.replace(
        /<meta name="robots" content=".*?" \/>/i,
        `<meta name="robots" content="${robotsContent}" />`
      );

      // 6. Inject Open Graph and Twitter tags
      if (title) {
        pageHtml = pageHtml.replace(
          /<meta property="og:title" content=".*?" \/>/i,
          `<meta property="og:title" content="${title}" />`
        );
        pageHtml = pageHtml.replace(
          /<meta name="twitter:title" content=".*?" \/>/i,
          `<meta name="twitter:title" content="${title}" />`
        );
      }
      if (description) {
        pageHtml = pageHtml.replace(
          /<meta property="og:description" content=".*?" \/>/i,
          `<meta property="og:description" content="${description}" />`
        );
        pageHtml = pageHtml.replace(
          /<meta name="twitter:description" content=".*?" \/>/i,
          `<meta name="twitter:description" content="${description}" />`
        );
      }

      pageHtml = pageHtml.replace(
        /<meta property="og:url" content=".*?" \/>/i,
        `<meta property="og:url" content="${canonicalUrl}" />`
      );

      if (ogImage) {
        const fullOgImage = ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`;
        pageHtml = pageHtml.replace(
          /<meta property="og:image" content=".*?" \/>/i,
          `<meta property="og:image" content="${fullOgImage}" />`
        );
        pageHtml = pageHtml.replace(
          /<meta name="twitter:image" content=".*?" \/>/i,
          `<meta name="twitter:image" content="${fullOgImage}" />`
        );
      }

      // Determine output file path
      let outFilePath;
      if (url === '/') {
        outFilePath = path.join(distDir, 'index.html');
      } else if (url === '/404') {
        outFilePath = path.join(distDir, '404.html');
        fs.writeFileSync(path.join(rootDir, 'public/404.html'), pageHtml, 'utf-8');
      } else {
        const routeDir = path.join(distDir, url.replace(/^\//, ''));
        fs.mkdirSync(routeDir, { recursive: true });
        outFilePath = path.join(routeDir, 'index.html');
      }

      fs.writeFileSync(outFilePath, pageHtml, 'utf-8');
      renderedCount++;
    } catch (err) {
      console.warn(`[Prerender] Warning on route ${url}:`, err.message);
    }
  }

  // Clean up dist-ssr directory
  try {
    fs.rmSync(path.join(rootDir, 'dist-ssr'), { recursive: true, force: true });
  } catch {
    // Ignore cleanup errors
  }

  console.log(`[Prerender] Successfully pre-rendered ${renderedCount} routes into dist/!`);
}

runPrerender().catch((err) => {
  console.error('[Prerender] Error during pre-rendering:', err);
  process.exit(1);
});
