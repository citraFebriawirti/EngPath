# Contributing to EngPath

Thank you for your interest in contributing to EngPath! This project is community-driven and MIT-licensed — every contribution, large or small, is welcome.

For the full interactive guide, visit [engpath.dev/contribute](https://engpath.dev/contribute).

---

## Getting Started

```bash
# 1. Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/EngPath.git
cd EngPath

# 2. Install dependencies
npm install

# 3. Create a branch
git checkout -b feat/your-contribution

# 4. Start the dev server
npm run dev
```

---

## How to Contribute

There are three content areas you can contribute to. **None of them require React knowledge** — each one is a TypeScript data file.

---

### A. Add a Roadmap Domain

**Step 1 — Create the domain file**

```
src/content/roadmap/your-domain/index.ts
```

```typescript
import type { RoadmapDomain } from "@/content/roadmap/types";

export const yourDomain: RoadmapDomain = {
  slug: "your-domain",
  label: "Your Domain",
  flag: "Specialization",      // "Core" | "Specialization" | "Domain"
  shortDesc: "Short description shown on roadmap cards.",
  longDesc: "Longer description displayed on the domain page.",
  color: "#F59E0B",
  bg: "rgba(245,158,11,0.10)",
  meta: { nodes: 0, hours: 0 }, // update after adding all nodes
  nodes: [
    {
      id: "yd-first-skill",    // prefix id with domain abbreviation
      title: "Your First Skill",
      type: "core",            // "core" | "optional"
      level: 1,                // 1=Foundation 2=Intermediate 3=Advanced 4=Expert
      description: "What this skill covers and why it matters.",
      tags: ["tag1", "tag2"],
      resources: [
        { label: "Resource Name", href: "https://example.com" },
      ],
    },
  ],
};
```

**Step 2 — Register in the index**

In `src/content/roadmap/index.ts`:

```typescript
// Add the import
import { yourDomain } from "./your-domain";

// Add to the array
export const roadmapDomains: RoadmapDomain[] = [
  backend, frontend, devops, /* ... */, yourDomain,
];
```

---

### B. Write a Mindset Article

**Step 1 — Create the content file**

```
src/content/mindset/your-article/index.ts
```

```typescript
import type { MindsetArticleContent } from "@/content/mindset";

export const yourArticle: MindsetArticleContent = {
  slug: "your-article",
  title: "Your Article Title",
  excerpt: "One-sentence summary shown on listing cards.",
  category: "Thinking Models",
  readMin: 7,
  color: "#4F8EF7",
  bg: "rgba(79,142,247,0.10)",
  featured: false,
  iconName: "Target",          // any valid Lucide icon name
  lead: "Opening paragraph shown at the top of the article.",
  blocks: [
    { kind: "h2", text: "Section Heading" },
    { kind: "p", text: "Paragraph text." },
    { kind: "callout", variant: "insight", title: "Key Insight", body: "Body." },
    { kind: "list", style: "bullet", items: ["Item 1", "Item 2"] },
    { kind: "takeaways", items: ["Takeaway 1", "Takeaway 2"] },
  ],
};
```

Available block kinds: `p`, `h2`, `h3`, `callout`, `list`, `quote`, `code`, `conversation`, `takeaways`, `refs`

**Step 2 — Register in the content index**

In `src/content/mindset/index.ts`:

```typescript
import { yourArticle } from "./your-article";

const articles: MindsetArticleContent[] = [
  /* existing articles */,
  yourArticle,
];
```

**Step 3 — Add display metadata**

In `src/app/mindset/data.ts`:

```typescript
export const articles: MindsetArticle[] = [
  /* existing entries */,
  {
    slug: "your-article",
    title: "Your Article Title",
    excerpt: "One-sentence summary.",
    category: "Thinking Models",
    readMin: 7,
    iconName: "Target",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    featured: false,
  },
];
```

---

### C. List an Open Source Project

Add one object to the `projects` array in `src/app/opensource/data.ts`:

```typescript
{
  name: "your-project",
  fullName: "Your Project Full Name",
  description: "One to two sentences describing what the project does.",
  stars: 0,
  forks: 0,
  lang: "TypeScript",
  langColor: "#3178C6",
  difficulty: "Beginner",    // "Beginner" | "Intermediate" | "Advanced"
  category: "Tooling",
  tags: ["tag1", "tag2"],
  // githubUrl: "https://github.com/org/repo",  // optional
},
```

---

## Pull Request Guidelines

Before opening a PR:

- [ ] `npm run build` passes — zero TypeScript errors
- [ ] One contribution area per PR (no mixing roadmap + article changes)
- [ ] Folder and file names use `kebab-case`
- [ ] All required type fields are filled (no `undefined` values)
- [ ] Every roadmap skill node has at least one `resources` link
- [ ] Articles aim for 6–12 minute reads

### PR title format

```
feat(roadmap): add game-development domain
feat(mindset): add article on flow state
feat(opensource): list engpath-cli project
fix: correct typo in backend roadmap
```

---

## Code of Conduct

Be respectful and constructive. We welcome contributors of all skill levels. Harassment, discrimination, or hostile behavior will not be tolerated.

---

## Questions?

Open an issue at [github.com/citraFebriawirti/EngPath/issues](https://github.com/citraFebriawirti/EngPath/issues) or start a discussion.
