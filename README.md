# Ravi Prakash — Professional Portfolio & Technical Notes

A content-first Astro website presenting Ravi Prakash's professional profile, experience, skills, education, and technical articles.

## Run locally

Install Node.js (LTS), open a terminal in this folder, and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (usually `http://localhost:4321`).

## Website content

- **Home:** professional introduction, key platform highlights, technical skills, current role, and latest articles.
- **Experience:** career history and education.
- **About:** professional summary and engineering focus.
- **Articles:** technical notes written in Markdown.
- **Contact:** email, phone, LinkedIn, and GitHub.

## Add a new article

**Quickest way** - run one command:

```bash
npm run new -- "Docker Networking Explained" --category Docker --tags Docker,Networking
```

This creates `src/content/blog/docker-networking-explained.md` as a **draft**. Write your article, then change `draft: true` to `draft: false`. That's it: the article appears automatically on the Home page, the Articles page, its category page, and its tag pages.

**Or by hand:** copy `src/content/blog/_template.md` to a new file such as `docker-networking.md` and fill in the fields. Files whose name starts with `_` are never published.

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Article heading |
| `description` | yes | Shown on cards and in search results |
| `pubDate` | yes | `YYYY-MM-DD`; newest articles are shown first |
| `updatedDate` | no | Shows "Updated ..." on the article |
| `category` | no | One category (default `Engineering`); each category gets its own page |
| `tags` | no | List of tags; each tag gets its own page |
| `draft` | no | `true` hides the article from the site |

The URL comes from the file name: `docker-networking.md` -> `/blog/docker-networking/`. You can group files in subfolders: `docker/networking.md` -> `/blog/docker/networking/`.

## Site mode: portfolio or freelance

At the top of `src/config/site.ts`:

```ts
export const freelanceMode = false;
```

- `false` (current): portfolio and technical notes only. The Services page, availability, and "hire me" sections are hidden, and `/services/` redirects to the home page. Safe to share on a CV or LinkedIn.
- `true`: shows the Services page, time-zone availability, project call-to-actions, and client-focused wording.

## Update other content

Profile, skills, experience, education, and navigation are all in `src/config/site.ts`. Edit that one file; the pages read from it.

## Project structure

```text
src/
  content/blog/        Articles (Markdown). One file = one article.
  content.config.ts    Article fields and validation
  config/site.ts       Profile, navigation, skills, experience, education
  lib/posts.ts         Shared article helpers (latest posts, categories, tags, reading time)
  lib/format.ts        Shared date / URL formatting
  components/          ArticleCard, ArticleList, TagList, CategoryFilter, PageIntro
  layouts/             BaseLayout (header, footer, <head>)
  pages/               Routes; blog/category/ and blog/tag/ are generated automatically
scripts/new-post.mjs   The "npm run new" command
```
