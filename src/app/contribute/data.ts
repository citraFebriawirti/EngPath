import type { Metadata } from "next";
import { GitBranch, Route, BookOpen, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Contributing Guide",
  description:
    "Learn how to contribute to EngPath — add roadmap domains, write mindset articles, or list open source projects. No deep React knowledge required.",
};

export const quickSteps = [
  {
    num: "01",
    icon: GitBranch,
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    title: "Fork the repository",
    desc: "Fork citraFebriawirti/EngPath on GitHub, clone it locally, and create a new branch from main.",
  },
  {
    num: "02",
    icon: Layers,
    color: "#8B7CF8",
    bg: "rgba(139,124,248,0.10)",
    title: "Pick what to add",
    desc: "Choose a contribution area below. Each area is a TypeScript data file — no component work required.",
  },
  {
    num: "03",
    icon: CheckCircle2,
    color: "#3BB58F",
    bg: "rgba(59,181,143,0.10)",
    title: "Open a pull request",
    desc: "Push your branch and open a PR against main. Keep PRs focused — one contribution area per PR.",
  },
];

export const areas = [
  {
    id: "roadmap",
    label: "Roadmap Domain",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    icon: Route,
    description:
      "Add a new career domain or extend an existing one with new skill nodes.",
  },
  {
    id: "mindset",
    label: "Mindset Article",
    color: "#8B7CF8",
    bg: "rgba(139,124,248,0.10)",
    icon: BookOpen,
    description:
      "Write a new engineering thinking article using the structured block content format.",
  },
  {
    id: "opensource",
    label: "Open Source Project",
    color: "#3BB58F",
    bg: "rgba(59,181,143,0.10)",
    icon: GitBranch,
    description:
      "List a real open source project that the community can discover and contribute to.",
  },
];

export const guidelines = [
  {
    title: "Build passes",
    desc: "Run npm run build locally — zero TypeScript errors before opening a PR.",
  },
  {
    title: "One area per PR",
    desc: "Don't mix roadmap + article changes in the same PR. Keep scope small and reviewable.",
  },
  {
    title: "Follow naming conventions",
    desc: "Use kebab-case for all folder and file names (e.g. my-new-article/index.ts).",
  },
  {
    title: "Fill all required fields",
    desc: "Every field in the TypeScript type is required unless explicitly marked optional.",
  },
  {
    title: "At least one resource per node",
    desc: "Each roadmap skill node should link to at least one learning resource.",
  },
  {
    title: "Article length",
    desc: "Aim for 6–12 minute reads. Use blocks: h2, p, callout, list, takeaways.",
  },
];
