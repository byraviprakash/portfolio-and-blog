// Creates a new draft article in src/content/blog/.
// Usage:  npm run new -- "Docker Networking Explained"
//         npm run new -- "Pods vs Deployments" --category Kubernetes --tags Kubernetes,DevOps
import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const option = (name) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? undefined : args.splice(i, 2)[1];
};
const category = option('category') ?? 'Engineering';
const tags = (option('tags') ?? category).split(',').map((t) => t.trim()).filter(Boolean);
const title = args.join(' ').trim();

if (!title) {
  console.error('Please give a title:  npm run new -- "My article title"');
  process.exit(1);
}

const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const file = join('src', 'content', 'blog', `${slug}.md`);
if (existsSync(file)) {
  console.error(`Article already exists: ${file}`);
  process.exit(1);
}

const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
const q = (s) => JSON.stringify(s);
writeFileSync(
  file,
  `---
title: ${q(title)}
description: "TODO: one or two sentences about this article."
pubDate: ${today}
category: ${q(category)}
tags: [${tags.map(q).join(', ')}]
draft: true
---

Write the introduction here.

## First section

`,
);
console.log(`Created ${file}`);
console.log('It is a draft. Set "draft: false" when it is ready to publish.');
