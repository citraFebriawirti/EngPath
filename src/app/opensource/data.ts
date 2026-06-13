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
  /** Internal detail page (core EngPath projects). */
  href?: string;
  /** External GitHub URL. When set, the card links directly to GitHub. */
  githubUrl?: string;
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
  /* ── Core EngPath Projects ────────────────────────────────────────────── */
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

  /* ── Beginner: Next.js ────────────────────────────────────────────────── */
  {
    name: "engpath-profile-card",
    fullName: "engpath/engpath-profile-card",
    description:
      "A shareable developer card that displays your roadmap progress badges. Static export, no backend required — a clean first Next.js + Tailwind project.",
    stars: 0,
    forks: 0,
    lang: "TypeScript",
    langColor: "#3178c6",
    difficulty: "Beginner",
    category: "Next.js",
    // githubUrl: "https://github.com/engpath/engpath-profile-card",
    tags: ["nextjs", "tailwind", "profile"],
  },

  /* ── Beginner: FastAPI ────────────────────────────────────────────────── */
  {
    name: "roadmap-data-api",
    fullName: "engpath/roadmap-data-api",
    description:
      "A read-only FastAPI server that loads the EngPath roadmap JSON and exposes it as typed Pydantic endpoints. Auto-generates Swagger docs. No database needed.",
    stars: 0,
    forks: 0,
    lang: "Python",
    langColor: "#3572A5",
    difficulty: "Beginner",
    category: "FastAPI",
    // githubUrl: "https://github.com/engpath/roadmap-data-api",
    tags: ["fastapi", "python", "pydantic"],
  },

  /* ── Beginner: Laravel ────────────────────────────────────────────────── */
  {
    name: "learning-link-vault",
    fullName: "engpath/learning-link-vault",
    description:
      "A simple Laravel bookmarking app to save and tag learning resources per roadmap skill. Laravel Breeze for auth, SQLite for zero-config local setup.",
    stars: 0,
    forks: 0,
    lang: "PHP",
    langColor: "#777bb4",
    difficulty: "Beginner",
    category: "Laravel",
    // githubUrl: "https://github.com/engpath/learning-link-vault",
    tags: ["laravel", "php", "breeze", "sqlite"],
  },

  /* ── Beginner: IoT ────────────────────────────────────────────────────── */
  {
    name: "iot-desk-sensor",
    fullName: "engpath/iot-desk-sensor",
    description:
      "An ESP32 + MicroPython project that reads temperature and humidity from a DHT22 sensor and POSTs the data to a REST endpoint every 5 minutes. Minimal IoT starter with real hardware.",
    stars: 0,
    forks: 0,
    lang: "MicroPython",
    langColor: "#3572A5",
    difficulty: "Beginner",
    category: "IoT",
    // githubUrl: "https://github.com/engpath/iot-desk-sensor",
    tags: ["esp32", "micropython", "dht22"],
  },

  /* ── Beginner: Go ─────────────────────────────────────────────────────── */
  {
    name: "roadmap-schema-validator",
    fullName: "engpath/roadmap-schema-validator",
    description:
      "A Go CLI that checks whether a skill-node JSON file follows the EngPath schema rules. Uses cobra and the standard library — a clean first Go project with no external dependencies.",
    stars: 0,
    forks: 0,
    lang: "Go",
    langColor: "#00add8",
    difficulty: "Beginner",
    category: "Golang",
    // githubUrl: "https://github.com/engpath/roadmap-schema-validator",
    tags: ["go", "cli", "json"],
  },

  /* ── Intermediate: Next.js ────────────────────────────────────────────── */
  {
    name: "engpath-community-notes",
    fullName: "engpath/engpath-community-notes",
    description:
      "A platform where engineers leave short tips per roadmap skill node. Built with Next.js App Router, Prisma, and Postgres. Covers server actions and optimistic UI patterns.",
    stars: 0,
    forks: 0,
    lang: "TypeScript",
    langColor: "#3178c6",
    difficulty: "Intermediate",
    category: "Next.js",
    // githubUrl: "https://github.com/engpath/engpath-community-notes",
    tags: ["nextjs", "prisma", "postgres"],
  },

  /* ── Intermediate: IoT ────────────────────────────────────────────────── */
  {
    name: "study-timer-board",
    fullName: "engpath/study-timer-board",
    description:
      "A Raspberry Pi Pomodoro timer with a physical push button and a buzzer. Completed sessions are POSTed to a REST endpoint so you can track deep work time in your profile.",
    stars: 0,
    forks: 0,
    lang: "Python",
    langColor: "#3572A5",
    difficulty: "Intermediate",
    category: "IoT",
    // githubUrl: "https://github.com/engpath/study-timer-board",
    tags: ["raspberry-pi", "gpio", "pomodoro"],
  },

  /* ── Intermediate: Go ─────────────────────────────────────────────────── */
  {
    name: "progress-sync-cli",
    fullName: "engpath/progress-sync-cli",
    description:
      "A Go CLI that reads your local roadmap progress and syncs it as a Markdown checklist to a GitHub Gist. Covers HTTP clients, OAuth device flow, and SQLite for local state.",
    stars: 0,
    forks: 0,
    lang: "Go",
    langColor: "#00add8",
    difficulty: "Intermediate",
    category: "Golang",
    // githubUrl: "https://github.com/engpath/progress-sync-cli",
    tags: ["go", "cli", "github", "oauth"],
  },

  /* ── Advanced: Go ─────────────────────────────────────────────────────── */
  {
    name: "engpath-search-service",
    fullName: "engpath/engpath-search-service",
    description:
      "A Go microservice that indexes all roadmap nodes and mindset articles for full-text search. Exposes a gRPC API consumed by the main platform. Includes Prometheus metrics and a Docker Compose setup.",
    stars: 0,
    forks: 0,
    lang: "Go",
    langColor: "#00add8",
    difficulty: "Advanced",
    category: "Golang",
    // githubUrl: "https://github.com/engpath/engpath-search-service",
    tags: ["go", "grpc", "search", "microservice"],
  },

  /* ── Advanced: Laravel ────────────────────────────────────────────────── */
  {
    name: "engpath-lms",
    fullName: "engpath/engpath-lms",
    description:
      "A multi-tenant LMS where organizations assign EngPath roadmaps to cohorts, track group progress, and export reports. Built with Laravel + Filament Admin. Covers multi-tenancy, role permissions, and scheduled jobs.",
    stars: 0,
    forks: 0,
    lang: "PHP",
    langColor: "#777bb4",
    difficulty: "Advanced",
    category: "Laravel",
    // githubUrl: "https://github.com/engpath/engpath-lms",
    tags: ["laravel", "filament", "lms", "multi-tenant"],
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