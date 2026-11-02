import re
from datetime import date

today = date.today().isoformat()
domain = 'https://orionsofttech.com'

# 1. Core Pages
core_pages = [
    ('/', '1.0', 'weekly'),
    ('/about', '0.8', 'monthly'),
    ('/software-solutions', '0.9', 'weekly'),
    ('/it-products', '0.9', 'daily'),
    ('/technical-support', '0.8', 'monthly'),
    ('/contact', '0.8', 'monthly'),
    ('/privacy-policy', '0.3', 'yearly'),
    ('/terms-and-conditions', '0.3', 'yearly'),
]

# 2. Software Services
with open('src/data/services/softwareServices.ts', 'r', encoding='utf-8') as f:
    sw_text = f.read()
sw_slugs = re.findall(r"slug:\s*'([^']+)'", sw_text)

# 3. Support Services
with open('src/data/services/supportServices.ts', 'r', encoding='utf-8') as f:
    sup_text = f.read()
sup_slugs = re.findall(r"slug:\s*'([^']+)'", sup_text)

# 4. IT Products
with open('src/data/products/products.ts', 'r', encoding='utf-8') as f:
    prod_text = f.read()
# Extract canonical paths
prod_paths = re.findall(r"canonicalPath:\s*'([^']+)'", prod_text)

print(f"Discovered: {len(core_pages)} core pages, {len(sw_slugs)} software services, {len(sup_slugs)} support services, {len(prod_paths)} hardware products.")

# Build XML
xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <!-- Core Pages -->',
]

for path, priority, freq in core_pages:
    xml_lines.extend([
        '  <url>',
        f'    <loc>{domain}{path}</loc>',
        f'    <lastmod>{today}</lastmod>',
        f'    <changefreq>{freq}</changefreq>',
        f'    <priority>{priority}</priority>',
        '  </url>',
    ])

xml_lines.append('\n  <!-- Software Solutions Dedicated Pages -->')
for slug in sw_slugs:
    xml_lines.extend([
        '  <url>',
        f'    <loc>{domain}/software-solutions/{slug}</loc>',
        f'    <lastmod>{today}</lastmod>',
        f'    <changefreq>monthly</changefreq>',
        f'    <priority>0.8</priority>',
        '  </url>',
    ])

xml_lines.append('\n  <!-- Technical Support Dedicated Pages -->')
for slug in sup_slugs:
    xml_lines.extend([
        '  <url>',
        f'    <loc>{domain}/technical-support/{slug}</loc>',
        f'    <lastmod>{today}</lastmod>',
        f'    <changefreq>monthly</changefreq>',
        f'    <priority>0.8</priority>',
        '  </url>',
    ])

xml_lines.append('\n  <!-- Hardware Catalog Product Pages -->')
for path in prod_paths:
    clean_path = path if path.startswith('/') else f'/{path}'
    xml_lines.extend([
        '  <url>',
        f'    <loc>{domain}{clean_path}</loc>',
        f'    <lastmod>{today}</lastmod>',
        f'    <changefreq>weekly</changefreq>',
        f'    <priority>0.7</priority>',
        '  </url>',
    ])

xml_lines.append('</urlset>\n')

sitemap_content = '\n'.join(xml_lines)

with open('public/sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(sitemap_content)

print(f"Generated public/sitemap.xml with {len(core_pages) + len(sw_slugs) + len(sup_slugs) + len(prod_paths)} URLs")

