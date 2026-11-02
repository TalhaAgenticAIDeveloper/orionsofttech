import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname, search, hash, key } = useLocation();

  useEffect(() => {
    // 1. If URL has a specific anchor hash (e.g. #catalog, #services, #contact-form)
    if (hash) {
      const targetId = hash.replace(/^#/, '');
      const scrollToHash = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (!scrollToHash()) {
        const timer = setTimeout(scrollToHash, 100);
        return () => clearTimeout(timer);
      }
      return;
    }

    // 2. If navigating to /it-products with filtering params (category, brand, search query)
    const params = new URLSearchParams(search);
    if (pathname === '/it-products' && (params.get('category') || params.get('brand') || params.get('q'))) {
      const scrollToCatalog = () => {
        const catalogEl = document.getElementById('catalog');
        if (catalogEl) {
          catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (!scrollToCatalog()) {
        const timer = setTimeout(scrollToCatalog, 100);
        return () => clearTimeout(timer);
      }
      return;
    }

    // 3. If navigating to /contact with pre-filled inquiry params
    if (pathname === '/contact' && (params.get('type') || params.get('subject'))) {
      const scrollToForm = () => {
        const formEl = document.getElementById('contact-form');
        if (formEl) {
          formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (!scrollToForm()) {
        const timer = setTimeout(scrollToForm, 100);
        return () => clearTimeout(timer);
      }
      return;
    }

    // 4. Default: Standard page navigation without specific sub-section targets
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search, hash, key]);
}
