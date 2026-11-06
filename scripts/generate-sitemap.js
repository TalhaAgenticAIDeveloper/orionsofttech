import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const today = new Date().toISOString().split('T')[0];
const domain = 'https://orionsofttechh.vercel.app';

const corePages = [
  { path: '/', priority: '1.0', freq: 'weekly' },
  { path: '/about', priority: '0.8', freq: 'monthly' },
  { path: '/software-solutions', priority: '0.9', freq: 'weekly' },
  { path: '/it-products', priority: '0.9', freq: 'daily' },
  { path: '/technical-support', priority: '0.8', freq: 'monthly' },
  { path: '/contact', priority: '0.8', freq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', freq: 'yearly' },
  { path: '/terms-and-conditions', priority: '0.3', freq: 'yearly' },
];

const swText = fs.readFileSync(path.join(rootDir, 'src/data/services/softwareServices.ts'), 'utf-8');
const swSlugs = [...swText.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);

const supText = fs.readFileSync(path.join(rootDir, 'src/data/services/supportServices.ts'), 'utf-8');
const supSlugs = [...supText.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);

const prodText = fs.readFileSync(path.join(rootDir, 'src/data/products/products.ts'), 'utf-8');
const prodPaths = [...prodText.matchAll(/canonicalPath:\s*'([^']+)'/g)].map((m) => m[1]);

const xmlLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '  <!-- Core Pages -->',
];

for (const page of corePages) {
  xmlLines.push(
    '  <url>',
    `    <loc>${domain}${page.path}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>${page.freq}</changefreq>`,
    `    <priority>${page.priority}</priority>`,
    '  </url>'
  );
}

xmlLines.push('\n  <!-- Software Solutions Dedicated Pages -->');
for (const slug of swSlugs) {
  xmlLines.push(
    '  <url>',
    `    <loc>${domain}/software-solutions/${slug}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>monthly</changefreq>`,
    `    <priority>0.8</priority>`,
    '  </url>'
  );
}

xmlLines.push('\n  <!-- Technical Support Dedicated Pages -->');
for (const slug of supSlugs) {
  xmlLines.push(
    '  <url>',
    `    <loc>${domain}/technical-support/${slug}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>monthly</changefreq>`,
    `    <priority>0.8</priority>`,
    '  </url>'
  );
}

xmlLines.push('\n  <!-- Hardware Catalog Product Pages -->');
for (const prodPath of prodPaths) {
  const clean = prodPath.startsWith('/') ? prodPath : `/${prodPath}`;
  xmlLines.push(
    '  <url>',
    `    <loc>${domain}${clean}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>weekly</changefreq>`,
    `    <priority>0.7</priority>`,
    '  </url>'
  );
}

xmlLines.push('</urlset>\n');

const sitemapXml = xmlLines.join('\n');
fs.writeFileSync(path.join(rootDir, 'public/sitemap.xml'), sitemapXml, 'utf-8');

// Also write to dist/sitemap.xml if dist exists
const distDir = path.join(rootDir, 'dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
}

console.log(`[Sitemap] Generated sitemap.xml with ${corePages.length + swSlugs.length + supSlugs.length + prodPaths.length} URLs (lastmod: ${today})`);

