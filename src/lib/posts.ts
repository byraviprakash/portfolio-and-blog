/**
 * Everything about loading articles lives here.
 * Pages call these helpers instead of repeating getCollection / sort / filter logic.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { slugify } from './format';

export type Post = CollectionEntry<'blog'>;

const WORDS_PER_MINUTE = 200;

/** All published articles (drafts hidden), newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getLatestPosts(count = 3): Promise<Post[]> {
  return (await getPublishedPosts()).slice(0, count);
}

export function getPostUrl(post: Post): string {
  return `/blog/${post.id}/`;
}

export function getCategoryUrl(category: string): string {
  return `/blog/category/${slugify(category)}/`;
}

export function getTagUrl(tag: string): string {
  return `/blog/tag/${slugify(tag)}/`;
}

export function getReadingTime(post: Post): number {
  const words = (post.body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export interface Group {
  name: string;
  slug: string;
  posts: Post[];
}

function groupBy(posts: Post[], keys: (post: Post) => string[]): Group[] {
  const groups = new Map<string, Group>();
  for (const post of posts) {
    for (const name of keys(post)) {
      const slug = slugify(name);
      if (!groups.has(slug)) groups.set(slug, { name, slug, posts: [] });
      groups.get(slug)!.posts.push(post);
    }
  }
  return [...groups.values()].sort((a, b) => a.name.localeCompare(b.name));
}

/** Categories with their articles, e.g. [{ name: 'Docker', slug: 'docker', posts: [...] }] */
export async function getCategories(): Promise<Group[]> {
  return groupBy(await getPublishedPosts(), (post) => [post.data.category]);
}

export async function getTags(): Promise<Group[]> {
  return groupBy(await getPublishedPosts(), (post) => post.data.tags);
}

/** Newer and older neighbours of an article, for "previous / next" links. */
export async function getAdjacentPosts(post: Post): Promise<{ newer?: Post; older?: Post }> {
  const posts = await getPublishedPosts();
  const index = posts.findIndex((p) => p.id === post.id);
  return { newer: posts[index - 1], older: posts[index + 1] };
}
