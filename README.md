# Orion Software & Trading — Corporate Web Application

A modern, production-grade corporate digital presence and discovery catalog designed and built for **Orion Software & Trading**.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, React Router v7, React Hook Form, Zod validation, and React Helmet Async.

---

## 1. Project Overview & Business Model

Orion Software & Trading provides comprehensive technology solutions across three core divisions:

1. **Custom Software Solutions:** Bespoke web platforms, cross-platform mobile apps, desktop software with hardware COM interfacing, multi-tenant SaaS, ERP, CRM, inventory management, hospital management (HMS), school management, e-commerce, and practical AI automation.
2. **IT Hardware & Products Catalog:** Over 45 categories of commercial technology hardware (laptops, workstations, servers, Cisco/Ubiquiti networking, CCTV surveillance, biometrics, APC power backups, and POS systems) at competitive market pricing.
3. **Installation & Technical Support:** End-to-end on-site hardware mounting, server operating system deployment, network switch/firewall configuration, cabling termination, and ongoing maintenance.

### Critical Commercial Pricing Rule
* As per strict company policy, **product prices are never displayed publicly**, and no fake availability or promotional discounts are ever invented.
* Every product features a direct inquiry mechanism allowing clients to request live availability, lead times, and official quotations via pre-filled WhatsApp messages or the contact form.

---

## 2. Technology Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Language:** TypeScript 7 (Strict Mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with native CSS design tokens
- **Routing:** [React Router v7](https://reactrouter.com/) (Route-based code splitting with React `Suspense` and `lazy()`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** Subtle [Framer Motion](https://www.framer.com/motion/) micro-interactions
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) schema validation
- **SEO & Social:** [React Helmet Async](https://github.com/staylor/react-helmet-async) for dynamic Open Graph, Twitter cards, canonical URLs, and Schema.org JSON-LD structured data
- **Testing:** [Vitest](https://vitest.dev/)
- **AI Search Optimization (AEO/GEO):** Machine-readable `public/llms.txt` and crawler directives in `public/robots.txt`

---

## 3. Brand Identity & Design System

The visual design system is directly built upon the official **Orion Software & Trading** logo:
- **Primary Brand Color (Green):** `#16a34a` (Light) / `#4ade80` (Dark) — Extracted from the distinctive stylized circular accent in the logo.
- **Secondary / Neutral (Charcoal Gray):** `#1e293b` / `#334155` (Light) / `#f1f5f9` (Dark) — Derived from the logo typography.
- **Theme Support:** Native **Light Mode** and **Dark Mode** toggle with instant local storage persistence, zero theme flashing on page load, and system preference auto-detection.
- **Responsive Layout:** Engineered mobile-first, tested and optimized across 320px, 375px, 768px, 1024px, 1440px, and 1920px displays without horizontal overflow or broken touch targets.

---

## 4. Complete Project Folder Structure

```text
D:\Orion Website\
├── public/
│   ├── images/
│   │   └── orion-logo.png             # Official company logo
│   ├── favicon.png                    # Site favicon
│   ├── llms.txt                       # Machine-readable AI search summary
│   ├── robots.txt                     # Crawler directives & sitemap reference
│   └── sitemap.xml                    # Canonical XML sitemap for all pages
├── src/
│   ├── __tests__/
│   │   └── services.test.ts           # Vitest unit & validation test suite
│   ├── assets/
│   │   └── images/
│   │       └── orion-logo.png         # Logo source asset
│   ├── components/
│   │   ├── buttons/
│   │   │   └── Button.tsx             # Reusable button (link/button/whatsapp)
│   │   ├── cards/
│   │   │   ├── ProductCard.tsx        # Product catalog card with quote CTA
│   │   │   ├── ServiceCard.tsx        # Software service card with details link
│   │   │   └── SupportCard.tsx        # Installation & support card
│   │   ├── common/
│   │   │   ├── Breadcrumbs.tsx        # Accessible breadcrumb trail
│   │   │   ├── DynamicIcon.tsx        # Safe dynamic Lucide icon resolver
│   │   │   ├── Logo.tsx               # Precision SVG vector & image logo
│   │   │   └── ThemeToggle.tsx        # Light/Dark theme toggle button
│   │   ├── footer/
│   │   │   └── Footer.tsx             # Corporate footer with quick links
│   │   ├── forms/
│   │   │   └── ContactForm.tsx        # Validated inquiry form with honeypot
│   │   ├── navigation/
│   │   │   └── Navbar.tsx             # Responsive sticky navbar + mobile drawer
│   │   └── seo/
│   │       └── SEOHead.tsx            # Helmet metadata & JSON-LD injection
│   ├── config/
│   │   ├── navigationConfig.ts        # Header & footer navigation links
│   │   └── siteConfig.ts              # Central business info & contact config
│   ├── data/
│   │   ├── categories/
│   │   │   └── productCategories.ts   # 45+ IT product categories
│   │   ├── products/
│   │   │   └── products.ts            # Enterprise products with specs (no fake prices)
│   │   ├── services/
│   │   │   ├── softwareServices.ts    # 16 complete software service definitions
│   │   │   └── supportServices.ts     # 14 technical support & installation services
│   │   ├── industries.ts              # 8 target industry sectors
│   │   └── inquiryTypes.ts            # Form dropdown options
│   ├── hooks/
│   │   ├── useDocumentTitle.ts        # Dynamic title update
│   │   ├── useScrollToTop.ts          # Instant scroll reset on navigation
│   │   └── useTheme.ts                # Light/Dark theme management
│   ├── layouts/
│   │   └── RootLayout.tsx             # Root layout with floating WhatsApp button
│   ├── pages/
│   │   ├── About/                     # About Us company page
│   │   ├── Contact/                   # Contact & inquiry form page
│   │   ├── Home/                      # High-conversion homepage
│   │   ├── ITProducts/                # Searchable & filterable product catalog
│   │   ├── NotFound/                  # Custom 404 page
│   │   ├── PrivacyPolicy/             # Privacy Policy page
│   │   ├── ProductDetail/             # Dynamic product specifications page
│   │   ├── SoftwareServiceDetail/     # Dedicated software service detail pages
│   │   ├── SoftwareSolutions/         # Software solutions landing page
│   │   ├── TechnicalSupport/          # Technical support & installation page
│   │   └── Terms/                     # Terms & Conditions page
│   ├── schemas/
│   │   └── contactSchema.ts           # Zod contact form validation schema
│   ├── services/
│   │   └── api.ts                     # API client ready for FastAPI integration
│   ├── types/
│   │   └── index.ts                   # Core TypeScript interfaces & types
│   ├── utils/
│   │   ├── cn.ts                      # Classnames utility
│   │   ├── seo.ts                     # Schema.org structured data generators
│   │   └── whatsapp.ts                # WhatsApp URL & message generators
│   ├── App.tsx                        # Route definitions with lazy loading
│   ├── index.css                      # Tailwind v4 imports & theme CSS variables
│   └── main.tsx                       # React root entry point
├── .env.example                       # Environment variables template
├── index.html                         # HTML template with anti-flash script
├── nginx.conf.example                 # Nginx production configuration
├── package.json                       # Dependencies and project scripts
├── tsconfig.app.json                  # TypeScript app configuration
├── tsconfig.json                      # TypeScript root configuration
└── vite.config.ts                     # Optimized Vite build configuration
```

---

## 5. Getting Started Locally

### Prerequisites
- **Node.js:** v18.0.0 or later (v20+ recommended)
- **Package Manager:** `pnpm` (or `npm`)

### Installation & Local Run
```bash
# Navigate to the project directory
cd "D:\Orion Website"

# Install dependencies (if not already installed)
pnpm install

# Start development server
pnpm dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 6. Building for Production

To create an optimized production build:

```bash
# Run TypeScript verification and Vite build
pnpm build

# Preview the production build locally
pnpm preview
```

The production output will be located in the `dist/` directory.

---

## 7. Automated Testing

Run the test suite using Vitest:

```bash
pnpm test
```

All 12 automated test suites verify:
- Complete definitions of all 16 software services and detail lookups.
- Product catalog lookups, search filtering, and related product calculations.
- Zod contact form validation (valid payloads, email validation, length constraints).
- WhatsApp URL generator and message encoding.

---

## 8. Configuration Values to Provide Before Production Launch

Before deploying the website to production, the company owner must update the centralized configuration in `src/config/siteConfig.ts` or set the corresponding environment variables in `.env`:

| Field | Location in `siteConfig.ts` | Description |
|---|---|---|
| **Website URL** | `siteConfig.url` | Primary production domain (e.g. `https://www.orionsoftware.com`) |
| **Phone Number** | `siteConfig.contact.phone` | Official business telephone line (e.g. `+92 21 31234567`) |
| **WhatsApp Number** | `siteConfig.contact.whatsapp` | Official WhatsApp number with country code (e.g. `+923001234567`) |
| **Email Address** | `siteConfig.contact.email` | Official business inquiry email (e.g. `sales@orionsoftware.com`) |
| **Office Address** | `siteConfig.contact.address` | Physical office address, city, and country |
| **Google Maps Embed** | `siteConfig.contact.mapUrl` | Google Maps iframe embed URL for the Contact page |
| **Social Links** | `siteConfig.social.*` | Official LinkedIn, Facebook, and Twitter profile URLs |
| **Google Analytics** | `VITE_GA_MEASUREMENT_ID` in `.env` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) |
| **Search Console** | `VITE_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token |
| **FastAPI Backend URL**| `VITE_API_BASE_URL` in `.env` | Backend API base URL when backend is deployed (e.g. `https://api.orionsoftware.com`) |

---

## 9. Production Deployment Guide (Nginx)

A production-ready Nginx configuration file is provided in `nginx.conf.example`.

### Key Nginx Features Configured:
1. **SPA Routing Fallback:** `try_files $uri $uri/ /index.html;` ensures clean URL routing without 404 errors on browser refresh.
2. **Security Headers:**
   - `Content-Security-Policy`
   - `Strict-Transport-Security (HSTS)`
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy`
3. **Static Asset Caching:** 1-year immutable caching for Vite hashed CSS/JS/image chunks.
4. **Gzip Compression:** Enabled for HTML, CSS, JavaScript, JSON, and SVG.
5. **Reverse Proxy:** Pre-configured `/api/` proxy block ready to forward requests to a local FastAPI backend (`http://127.0.0.1:8000`).

---

## 10. Future FastAPI Backend Integration

The frontend API layer in `src/services/api.ts` is structured to communicate with a FastAPI backend:
- Form submissions are posted to `POST /api/v1/contact`.
- Handles CSRF, rate-limiting HTTP 429 status codes, and server-side validation error messages gracefully.
- Includes hidden honeypot spam detection (`data.honeypot`) to intercept automated bot submissions.
- Provides clear user feedback if the backend is not yet connected rather than falsely pretending a message succeeded.
