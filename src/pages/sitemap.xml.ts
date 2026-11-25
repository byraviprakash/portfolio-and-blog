/**
 * /sitemap.xml — lists every public page so Google can find and index them.
 * Built automatically at build time; new articles are added without any extra work.
 */
import type { APIRoute } from 'astro';
import { freelanceMode, siteConfig } from '../config/site';
import { getPublishedPosts, getPostUrl, getCategoryUrl, getTagUrl } from '../lib/posts';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL(siteConfig.url);
  const posts = await getPublishedPosts();
  const today = new Date().toISOString().slice(0, 10);

  const pages: { path: string; lastmod?: string; priority: string }[] = [
    { path: '/', lastmod: today, priority: '1.0' },
    { path: '/experience/', lastmod: today, priority: '0.9' },
    { path: '/about/', lastmod: today, priority: '0.8' },
    ...(freelanceMode ? [{ path: '/services/', lastmod: today, priority: '0.7' }] : []),
    { path: '/blog/', lastmod: today, priority: '0.8' },
    { path: '/contact/', lastmod: today, priority: '0.6' },
    ...posts.map((post) => ({
      path: getPostUrl(post),
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10),
      priority: '0.7',
    })),
    ...[...new Set(posts.map((p) => p.data.category))].map((c) => ({ path: getCategoryUrl(c), priority: '0.4' })),
    ...[...new Set(posts.flatMap((p) => p.data.tags))].map((t) => ({ path: getTagUrl(t), priority: '0.3' })),
  ];

  const urls = pages
    .map(({ path, lastmod, priority }) =>
      `  <url><loc>${new URL(path, base).href}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}<priority>${priority}</priority></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
