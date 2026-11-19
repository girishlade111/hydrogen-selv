import { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

const BASE_URL = 'https://ladestack.in';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export function SeoHead({
  title,
  description,
  canonicalPath = '',
  keywords,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  breadcrumbs,
  schema,
  noindex = false,
}: SeoHeadProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to set or create meta tag
    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set or create link tag
    const setLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Canonical URL
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const fullCanonicalUrl = canonicalPath ? `${BASE_URL}${cleanPath === '/' ? '' : cleanPath}` : BASE_URL;
    setLink('canonical', fullCanonicalUrl);

    // 3. Primary Meta Tags
    setMeta('name', 'description', description);
    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. Open Graph Tags
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonicalUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage);

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 6. Dynamic Route Structured Data (JSON-LD)
    const schemaElements: Array<Record<string, unknown>> = [];

    // Optional BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaElements.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.item.startsWith('http') ? crumb.item : `${BASE_URL}${crumb.item}`,
        })),
      });
    }

    if (schema) {
      if (Array.isArray(schema)) {
        schemaElements.push(...schema);
      } else {
        schemaElements.push(schema);
      }
    }

    let scriptTag = document.getElementById('route-schema') as HTMLScriptElement | null;
    if (schemaElements.length > 0) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'route-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(
        schemaElements.length === 1 ? schemaElements[0] : { '@context': 'https://schema.org', '@graph': schemaElements }
      );
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Optional cleanup on unmount
    };
  }, [title, description, canonicalPath, keywords, ogType, ogImage, breadcrumbs, schema, noindex]);

  return null;
}
