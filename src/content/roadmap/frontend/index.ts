import type { RoadmapDomain } from "../types";

export const frontend: RoadmapDomain = {
  slug: "frontend",
  label: "Frontend",
  flag: "Core",
  shortDesc:
    "UI engineering, component design, performance, and modern web frameworks.",
  longDesc:
    "Build fast, accessible, and delightful user interfaces. This path covers HTML/CSS fundamentals through advanced React patterns, TypeScript, performance optimization, and the modern frontend ecosystem.",
  color: "#8B7CF8",
  bg: "rgba(139,124,248,0.10)",
  meta: { nodes: 38, hours: 100 },
  nodes: [
    // Foundation
    {
      id: "fe-html",
      title: "HTML & Semantic Markup",
      type: "core",
      level: 1,
      description:
        "Write semantic, accessible HTML. Understand the DOM, forms, metadata, and semantic elements.",
      tags: ["html"],
      resources: [{ label: "MDN HTML Guide", href: "https://developer.mozilla.org/en-US/docs/Learn/HTML" }],
    },
    {
      id: "fe-css",
      title: "CSS & Layout Systems",
      type: "core",
      level: 1,
      description:
        "Master Flexbox, CSS Grid, box model, selectors, specificity, and responsive design principles.",
      tags: ["css"],
      resources: [{ label: "CSS Tricks: Flexbox", href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox" }],
    },
    {
      id: "fe-js",
      title: "JavaScript (ES6+)",
      type: "core",
      level: 1,
      description:
        "Learn modern JS: arrow functions, destructuring, modules, promises, async/await, closures, and the event loop.",
      tags: ["javascript"],
      resources: [{ label: "javascript.info", href: "https://javascript.info" }],
    },
    {
      id: "fe-git",
      title: "Git & Collaboration",
      type: "core",
      level: 1,
      description:
        "Collaborate with Git: branching strategies, pull requests, and code review workflows.",
      tags: ["tooling"],
    },
    // Intermediate
    {
      id: "fe-react",
      title: "React (Hooks & Patterns)",
      type: "core",
      level: 2,
      description:
        "Build component trees with React hooks, understand state management, context API, and rendering optimization.",
      tags: ["framework"],
      resources: [{ label: "React Docs", href: "https://react.dev/learn" }],
    },
    {
      id: "fe-ts",
      title: "TypeScript",
      type: "core",
      level: 2,
      description:
        "Add type safety to JavaScript: interfaces, generics, utility types, strict mode, and incremental adoption.",
      tags: ["typescript"],
      resources: [{ label: "TypeScript Handbook", href: "https://www.typescriptlang.org/docs/handbook" }],
    },
    {
      id: "fe-state",
      title: "State Management",
      type: "core",
      level: 2,
      description:
        "Manage global state with Zustand or Redux Toolkit. Use React Query for server/async state.",
      tags: ["architecture"],
    },
    {
      id: "fe-a11y",
      title: "Accessibility (a11y)",
      type: "core",
      level: 2,
      description:
        "Build for everyone: ARIA attributes, keyboard navigation, focus management, and WCAG 2.1 guidelines.",
      tags: ["accessibility"],
      resources: [{ label: "WebAIM", href: "https://webaim.org" }],
    },
    {
      id: "fe-test",
      title: "Testing (Vitest + RTL)",
      type: "optional",
      level: 2,
      description:
        "Write component tests with React Testing Library, unit tests with Vitest, and basic E2E with Playwright.",
      tags: ["testing"],
    },
    // Advanced
    {
      id: "fe-perf",
      title: "Performance & Web Vitals",
      type: "core",
      level: 3,
      description:
        "Optimize Core Web Vitals: LCP, FID/INP, CLS. Bundle splitting, lazy loading, and image optimization.",
      tags: ["performance"],
      resources: [{ label: "web.dev/performance", href: "https://web.dev/performance" }],
    },
    {
      id: "fe-nextjs",
      title: "Next.js / SSR Frameworks",
      type: "optional",
      level: 3,
      description:
        "Build production apps with Next.js: App Router, Server Components, SSR, SSG, and ISR strategies.",
      tags: ["framework"],
      resources: [{ label: "Next.js Docs", href: "https://nextjs.org/docs" }],
    },
    {
      id: "fe-css-arch",
      title: "CSS Architecture",
      type: "optional",
      level: 3,
      description:
        "Design scalable styling systems with Tailwind CSS, CSS Modules, or CSS-in-JS (Vanilla Extract).",
      tags: ["css", "architecture"],
    },
    {
      id: "fe-animation",
      title: "Animation & Motion",
      type: "optional",
      level: 3,
      description:
        "Create smooth UX with CSS transitions, Framer Motion, and the Web Animations API.",
      tags: ["animation"],
    },
    // Expert
    {
      id: "fe-compiler",
      title: "Build Tools & Bundlers",
      type: "optional",
      level: 4,
      description:
        "Configure Vite, webpack, Turbopack. Understand tree-shaking, code splitting, and ESM/CJS module formats.",
      tags: ["tooling"],
    },
    {
      id: "fe-design-sys",
      title: "Design Systems",
      type: "optional",
      level: 4,
      description:
        "Build component libraries: design tokens, documentation with Storybook, and publishing via npm.",
      tags: ["architecture"],
    },
    {
      id: "fe-arch",
      title: "Frontend Architecture",
      type: "core",
      level: 4,
      description:
        "Plan large-scale frontend: micro-frontends, monorepos (Turborepo), feature flags, and scalable patterns.",
      tags: ["architecture"],
    },
  ],
};
