import type { Metadata } from "next";
import { Route, GitBranch, Layers, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind EngPath: an open source platform built to grow engineering thinking, not just syntax. Free forever.",
};

export const values = [
  {
    icon: GitBranch,
    color: "#3BB58F",
    bg: "rgba(59,181,143,0.10)",
    title: "Open Source Forever",
    description:
      "EngPath is MIT-licensed and will always be free. No premium tiers, no paywalls. The source code lives on GitHub and welcomes contributors.",
  },
  {
    icon: Users,
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    title: "Community-Driven",
    description:
      "Roadmap content, mindset articles, and features are shaped by engineers who use EngPath. Everyone can open issues, submit PRs, and improve the platform.",
  },
  {
    icon: BookOpen,
    color: "#8B7CF8",
    bg: "rgba(139,124,248,0.10)",
    title: "Mindset First",
    description:
      "Technical skills matter, but how you think matters more. EngPath puts engineering thinking — systems thinking, debugging mindset, ambiguity handling — at the center.",
  },
];

export const stats = [
  { value: "500+", label: "Active Learners" },
  { value: "9", label: "Career Paths" },
  { value: "200+", label: "Skill Nodes" },
  { value: "100%", label: "Free & Open" },
];

export const layers = [
  {
    num: "01",
    color: "#4F8EF7",
    icon: Route,
    title: "Career Roadmaps",
    desc: "9 structured paths — Backend, Frontend, DevOps, Mobile, Security, Data, QA, DBA, and Business Engineering. Each path is a connected skill graph, not a flat list.",
  },
  {
    num: "02",
    color: "#8B7CF8",
    icon: BookOpen,
    title: "Mindset Articles",
    desc: "A growing library of engineering thinking articles — systems thinking, debugging strategies, how to read documentation, handling ambiguity — the skills that separate good engineers from great ones.",
  },
  {
    num: "03",
    color: "#3BB58F",
    icon: Layers,
    title: "Open Source Projects",
    desc: "Real repositories you can contribute to — from the roadmap engine itself to the CLI tool and component library. Learn by doing on code that people actually use.",
  },
];
