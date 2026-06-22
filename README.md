# EngPath

**Structured career roadmaps and engineer mindset training. Free forever, open source, no account required.**

[Live Site](https://egpath.netlify.app) · [Contributing Guide](/contribute) · [MIT License](LICENSE)

---

## What is EngPath?

EngPath is an open-source platform that helps developers grow both their **technical skills** and **engineering thinking**. Most learning platforms hand you a list of technologies to memorize. EngPath builds the mental models underneath — the way senior engineers actually approach problems.

The platform has three content areas:

| Area | What it does |
|---|---|
| Career Roadmaps | 9 structured skill paths from Foundation to Expert level |
| Engineer Mindset | Articles on how to think, not just what to build |
| Open Source | Real repositories you can contribute to |

Everything is free, no login required, and content lives in TypeScript data files that anyone can edit via a pull request.

---

## Pages

### `/roadmap` — Career Roadmaps

Nine structured career paths, each broken into skill nodes with difficulty levels, descriptions, and learning resources:

- **Core paths**: Backend, Frontend, DevOps
- **Specializations**: Mobile, Security, Data Engineering, QA, Database Administration
- **Domain track**: Business & Tech

Each domain has 18–42 skill nodes organized across 4 levels: Foundation → Intermediate → Advanced → Expert.

### `/mindset` — Engineer Mindset

A library of engineering thinking articles. Each article is written in a structured block format (no MDX, no markdown files) — just typed TypeScript objects that render into rich content pages.

Available block types: paragraphs, headings, callouts (insight/tip/warning), lists, quotes, code blocks, dialogue conversations, key takeaways, and references.

Current articles include: First-Principles Thinking, Systems Thinking, Debugging Mindset, Handling Ambiguity, Trade-Off Thinking, Deep Work for Engineers, Reading Documentation, and Feedback Loops.

### `/opensource` — Open Source Projects

A curated list of real repositories organized by difficulty (Beginner / Intermediate / Advanced). Each project card shows language, category, and tags.

### `/contribute` — Contributing Guide

A step-by-step guide to contributing in each area. No React knowledge required — every content contribution is a TypeScript data file edit.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework, SSR, file-based routing |
| React 19 | UI |
| TypeScript | Language, typed content system |
| Tailwind CSS v4 | Styling with CSS variable design tokens |
| next-themes | Dark / light mode via `data-theme` attribute |
| Lucide React | Icons |
| React Flow | Roadmap visualization graph |
| Geist | Font family (Sans + Mono) |

---

## Project Structure

```
src/
├── app/                         # Next.js App Router pages
│   ├── page.tsx                 # Homepage
│   ├── roadmap/                 # Roadmap listing + [domain] detail pages
│   ├── mindset/                 # Article listing + [slug] detail pages
│   ├── opensource/              # Open source listing + [slug] pages
│   ├── contribute/              # Contributing guide page
│   └── about/                   # About page
│
├── content/                     # All content data (TypeScript)
│   ├── roadmap/
│   │   ├── types.ts             # RoadmapDomain, SkillNode, Level types
│   │   ├── index.ts             # Domain registry + helper functions
│   │   └── backend/index.ts     # One file per domain (backend, frontend, ...)
│   ├── mindset/
│   │   ├── index.ts             # MindsetArticleContent type + article registry
│   │   └── systems-thinking/    # One folder per article
│   └── opensource/
│       └── index.ts             # OsProject type + projects list
│
├── components/
│   ├── layout/                  # Header, Footer, nav
│   ├── mindset/                 # ArticleCard, block renderers
│   ├── opensource/              # ProjectCard
│   ├── roadmap/                 # Roadmap flow graph components
│   ├── sections/                # Reusable page sections
│   └── ui/
│       └── motion.tsx           # FadeUp, StaggerContainer, StaggerItem
│
└── lib/
    ├── constants.ts             # GITHUB_REPO_URL and other shared URLs
    └── utils.ts                 # cn() and utilities
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/citraFebriawirti/EngPath.git
cd EngPath

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Type-check and build
npm run build
```

---

## Content System

Content is written as TypeScript objects, not markdown. This gives full type safety — every field is validated at build time.

**Roadmap domain** — `src/content/roadmap/[domain]/index.ts`
```ts
export const backend: RoadmapDomain = {
  slug: "backend",
  label: "Backend",
  flag: "Core",
  nodes: [
    {
      id: "be-http",
      title: "HTTP & REST",
      type: "core",
      level: 1,
      description: "...",
      resources: [{ label: "MDN HTTP", href: "https://..." }],
    },
  ],
};
```

**Mindset article** — `src/content/mindset/[slug]/index.ts`
```ts
export const systemsThinkingArticle: MindsetArticleContent = {
  slug: "systems-thinking",
  title: "Systems Thinking: See the Whole, Not the Parts",
  lead: "Opening paragraph...",
  blocks: [
    { kind: "h2", text: "Section heading" },
    { kind: "p",  text: "Paragraph text." },
    { kind: "callout", variant: "insight", title: "Key idea", body: "..." },
    { kind: "takeaways", items: ["Point 1", "Point 2"] },
  ],
};
```

**Open source project** — `src/app/opensource/data.ts`
```ts
{ name: "engpath-api", difficulty: "Intermediate", lang: "TypeScript", ... }
```

---

## Contributing

See the full contributing guide at [egpath.netlify.app/contribute](https://egpath.netlify.app/contribute) or read [CONTRIBUTING.md](CONTRIBUTING.md).

There are three ways to contribute — none require React knowledge:

1. **Add a roadmap domain** — create `src/content/roadmap/[domain]/index.ts`, register in the index
2. **Write a mindset article** — create `src/content/mindset/[slug]/index.ts`, register in two files
3. **List an open source project** — add one object to `src/app/opensource/data.ts`

Every PR should pass `npm run build` with zero TypeScript errors before review.

---

## Design Tokens

The design system uses CSS variables for theming:

```css
/* Light mode */
--ep-bg:      #FFFFFF;
--ep-surface: #F8FAFC;
--ep-text:    #0F172A;
--color-primary-500: #7A5AF8;

/* Dark mode (data-theme="dark") */
--ep-bg:      #0F172A;
--ep-surface: #101828;
```

Tailwind v4 is configured with `@theme inline` to expose these as utility classes.

---

## License

MIT — free to use, modify, and distribute. See [LICENSE](LICENSE).

---

## Links

- Live site: [https://egpath.netlify.app](https://egpath.netlify.app)
- Repository: [https://github.com/citraFebriawirti/EngPath](https://github.com/citraFebriawirti/EngPath)
- Contributing guide: [https://egpath.netlify.app/contribute](https://egpath.netlify.app/contribute)
- Issues: [https://github.com/citraFebriawirti/EngPath/issues](https://github.com/citraFebriawirti/EngPath/issues)
