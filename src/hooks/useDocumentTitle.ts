import { useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    if (title) {
      document.title = siteConfig.seo.titleTemplate.replace('%s', title);
    } else {
      document.title = siteConfig.seo.defaultTitle;
    }
  }, [title]);
}
