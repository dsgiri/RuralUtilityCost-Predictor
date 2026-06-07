import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
}

export function useSEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    // Update main documents title
    document.title = title;

    // Helper to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          element.setAttribute('property', attribute);
        } else {
          element.setAttribute('name', attribute);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('meta[name="description"]', 'description', description);
      updateMetaTag('meta[property="og:description"]', 'og:description', description);
      updateMetaTag('meta[name="twitter:description"]', 'twitter:description', description);
    }

    if (keywords) {
      updateMetaTag('meta[name="keywords"]', 'keywords', keywords);
    }
    
    updateMetaTag('meta[property="og:title"]', 'og:title', title);
    updateMetaTag('meta[name="twitter:title"]', 'twitter:title', title);
    
  }, [title, description, keywords]);
}
