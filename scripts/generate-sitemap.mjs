import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const portfolioPath = path.resolve(rootDir, 'src/data/portfolio.ts');
const sitemapPath = path.resolve(rootDir, 'public/sitemap.xml');

const portfolioContent = fs.readFileSync(portfolioPath, 'utf8');

// Match project slugs
const projectRegex = /slug:\s*'([^']+)'/g;
const slugs = [];
let match;
while ((match = projectRegex.exec(portfolioContent)) !== null) {
  slugs.push(match[1]);
}

// Slugs are split between projects (first 9) and blog posts (next 5)
const projectSlugs = [
  'ladestack',
  'gb-coder',
  'ls-pdf',
  'md2pdf',
  'bharat-land-converter',
  'swift-resume',
  'ls-image-compressor',
  'gamehub',
  'ladestack-drive'
];

const blogSlugs = [
  'designing-local-first-web-applications',
  'building-development-workflows-in-the-browser',
  'designing-useful-documentation-systems',
  'ai-assistance-without-losing-user-control',
  'shipping-discoverable-multilingual-websites'
];

const today = new Date().toISOString().split('T')[0];
const baseUrl = 'https://ladestack.in';

const staticRoutes = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: '/projects', changefreq: 'weekly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

// Static routes
for (const route of staticRoutes) {
  xml += `  <url>
    <loc>${baseUrl}${route.path || '/'}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>\n`;
}

// Project routes
for (const slug of projectSlugs) {
  const priority = slug === 'ladestack' ? '0.85' : slug === 'ladestack-drive' ? '0.7' : '0.8';
  xml += `  <url>
    <loc>${baseUrl}/projects/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}

// Blog routes
for (const slug of blogSlugs) {
  xml += `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`Generated sitemap at ${sitemapPath} with ${staticRoutes.length + projectSlugs.length + blogSlugs.length} URLs.`);
