/** Shared formatting helpers, so every page shows dates the same way. */

export function formatDate(date: Date, style: 'short' | 'long' = 'short'): string {
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    year: 'numeric',
  });
}

/** "Swagger / OpenAPI" -> "swagger-openapi". Used for category and tag URLs. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
