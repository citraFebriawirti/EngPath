import type { Metadata } from "next";
import { Code2, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Contribute to real EngPath open source projects. Pick a repo that matches your skill level and start contributing today.",
};

/* ── Types ──────────────────────────────────────────────────────────────── */

export interface OsProject {
  name: string;
  fullName: string;
  description: string;
  stars: number;
  forks: number;
  lang: string;
  langColor: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  href: string;
  tags?: string[];
}

/* ── Constants ──────────────────────────────────────────────────────────── */

export const difficultyConfig: Record<
  OsProject["difficulty"],
  { color: string; bg: string }
> = {
  Beginner: { color: "#3BB58F", bg: "rgba(59,181,143,0.10)" },
  Intermediate: { color: "#4F8EF7", bg: "rgba(79,142,247,0.10)" },
  Advanced: { color: "#E06A6A", bg: "rgba(224,106,106,0.10)" },
};

export const projects: OsProject[] = [
  {
    name: "engpath-roadmap",
    fullName: "engpath/engpath-roadmap",
    description:
      "The core roadmap data and interactive visualization engine powering all 9 career paths. Written in TypeScript with a JSON schema for skill node definitions.",
    stars: 320,
    forks: 48,
    lang: "TypeScript",
    langColor: "#3178c6",
    difficulty: "Intermediate",
    category: "Core",
    href: "/opensource/engpath-roadmap",
    tags: ["roadmap", "data", "visualization"],
  },
  {
    name: "engpath-mindset",
    fullName: "engpath/engpath-mindset",
    description:
      "Open collection of engineer mindset articles. Contribute your own mental models, case studies, and thinking frameworks in Markdown.",
    stars: 185,
    forks: 31,
    lang: "Markdown",
    langColor: "#083fa1",
    difficulty: "Beginner",
    category: "Content",
    href: "/opensource/engpath-mindset",
    tags: ["content", "writing", "mindset"],
  },
  {
    name: "engpath-ui",
    fullName: "engpath/engpath-ui",
    description:
      "Shared component library built with Next.js and Tailwind CSS. Used across all EngPath tools. Includes Storybook documentation.",
    stars: 94,
    forks: 17,
    lang: "TypeScript",
    langColor: "#3178c6",
    difficulty: "Intermediate",
    category: "Core",
    href: "/opensource/engpath-ui",
    tags: ["components", "ui", "tailwind"],
  },
  {
    name: "engpath-cli",
    fullName: "engpath/engpath-cli",
    description:
      "Command-line tool to browse roadmaps, track progress, and generate personalized study plans locally.",
    stars: 67,
    forks: 12,
    lang: "Go",
    langColor: "#00add8",
    difficulty: "Advanced",
    category: "Tooling",
    href: "/opensource/engpath-cli",
    tags: ["cli", "go", "tooling"],
  },
  {
    name: "skill-node-schema",
    fullName: "engpath/skill-node-schema",
    description:
      "JSON schema specification and validator for defining skill nodes, prerequisites, and learning path connections.",
    stars: 52,
    forks: 9,
    lang: "JSON",
    langColor: "#292929",
    difficulty: "Beginner",
    category: "Tooling",
    href: "/opensource/skill-node-schema",
    tags: ["schema", "validation", "spec"],
  },
  {
    name: "engpath-api",
    fullName: "engpath/engpath-api",
    description:
      "Public REST API for querying roadmap data, skill nodes, and mindset articles programmatically. OpenAPI spec included.",
    stars: 41,
    forks: 7,
    lang: "TypeScript",
    langColor: "#3178c6",
    difficulty: "Intermediate",
    category: "Core",
    href: "/opensource/engpath-api",
    tags: ["api", "rest", "openapi"],
  },
  {
    name: "engpath-translations",
    fullName: "engpath/engpath-translations",
    description:
      "Translations for EngPath roadmap content and UI strings. Currently supports 8 languages. New languages welcome.",
    stars: 38,
    forks: 22,
    lang: "JSON",
    langColor: "#292929",
    difficulty: "Beginner",
    category: "Content",
    href: "/opensource/engpath-translations",
    tags: ["i18n", "translations", "community"],
  },
  {
    name: "engpath-discord-bot",
    fullName: "engpath/engpath-discord-bot",
    description:
      "Discord bot that brings EngPath roadmaps and mindset articles into your community server with slash commands.",
    stars: 29,
    forks: 5,
    lang: "TypeScript",
    langColor: "#3178c6",
    difficulty: "Intermediate",
    category: "Integrations",
    href: "/opensource/engpath-discord-bot",
    tags: ["discord", "bot", "integration"],
  },
  {
    name: "engpath-vscode",
    fullName: "engpath/engpath-vscode",
    description:
      "VS Code extension to browse EngPath roadmaps, view skill node details, and track learning progress from your editor.",
    stars: 21,
    forks: 3,
    lang: "TypeScript",
    langColor: "#3178c6",
    difficulty: "Advanced",
    category: "Integrations",
    href: "/opensource/engpath-vscode",
    tags: ["vscode", "extension", "ide"],
  },
];

export const whyContribute = [
  {
    Icon: Code2,
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    title: "Learn by building real things",
    body: "EngPath projects are used by real learners. Contributing means your code has real impact, not just tutorial exercises.",
  },
  {
    Icon: Users,
    color: "#8B7CF8",
    bg: "rgba(139,124,248,0.10)",
    title: "Build your portfolio",
    body: "Open source contributions are visible to everyone — recruiters, hiring managers, and the engineering community.",
  },
  {
    Icon: Zap,
    color: "#3BB58F",
    bg: "rgba(59,181,143,0.10)",
    title: "Grow faster with feedback",
    body: "Code reviews from experienced maintainers will accelerate your learning more than any solo project.",
  },
];