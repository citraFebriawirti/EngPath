import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, GitFork, Code2, GitBranch, Users, Zap } from "lucide-react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Contribute to real EngPath open source projects. Pick a repo that matches your skill level and start contributing today.",
};

/* ─────────────────────────── data ─────────────────────────────────────────── */

interface OsProject {
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

const projects: OsProject[] = [
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

const difficultyConfig: Record<
  OsProject["difficulty"],
  { color: string; bg: string }
> = {
  Beginner: { color: "#3BB58F", bg: "rgba(59,181,143,0.10)" },
  Intermediate: { color: "#4F8EF7", bg: "rgba(79,142,247,0.10)" },
  Advanced: { color: "#E06A6A", bg: "rgba(224,106,106,0.10)" },
};

const whyContribute = [
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

/* ─────────────────────────── components ─────────────────────────────────── */

function ProjectCard({ project }: { project: OsProject }) {
  const diff = difficultyConfig[project.difficulty];

  return (
    <Link
      href={project.href}
      className="group flex flex-col gap-3 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-[22px] transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-white/[0.14] hover:shadow-theme-md"
    >
      {/* Repo name */}
      <div className="flex items-start justify-between gap-2">
        <p className="flex items-center gap-2 font-mono text-[13.5px] font-semibold text-[#7A5AF8]">
          <Code2 className="h-4 w-4 shrink-0" />
          <span className="truncate">{project.name}</span>
        </p>
        <span
          className="shrink-0 rounded-full px-[9px] py-[3px] font-mono text-[10.5px] font-medium"
          style={{ color: diff.color, background: diff.bg }}
        >
          {project.difficulty}
        </span>
      </div>

      {/* Full name */}
      <p className="font-mono text-[11.5px] text-gray-400 dark:text-gray-600">
        {project.fullName}
      </p>

      {/* Description */}
      <p className="flex-1 text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-500">
        {project.description}
      </p>

      {/* Tags */}
      {project.tags && (
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 dark:border-white/[0.07] px-[7px] py-[2px] font-mono text-[10px] text-gray-500 dark:text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Meta row */}
      <div className="flex items-center gap-4 font-mono text-[12.5px] text-gray-500 dark:text-gray-600">
        <span className="flex items-center gap-[5px]">
          <span
            className="inline-block h-[10px] w-[10px] rounded-full"
            style={{ background: project.langColor }}
          />
          {project.lang}
        </span>
        <span className="flex items-center gap-[4px]">
          <Star className="h-3.5 w-3.5" />
          {project.stars}
        </span>
        <span className="flex items-center gap-[4px]">
          <GitFork className="h-3.5 w-3.5" />
          {project.forks}
        </span>
      </div>
    </Link>
  );
}

/* ─────────────────────────── Page ────────────────────────────────────────── */

export default function OpenSourcePage() {
  const beginnerProjects = projects.filter((p) => p.difficulty === "Beginner");
  const intermediateProjects = projects.filter(
    (p) => p.difficulty === "Intermediate"
  );
  const advancedProjects = projects.filter((p) => p.difficulty === "Advanced");

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-gray-300 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] py-20 lg:py-28">
          <span
            className="pointer-events-none absolute rounded-full bg-[#7A5AF8] opacity-[0.09] blur-[110px]"
            style={{ width: 620, height: 620, right: "-8%", top: "-25%" }}
          />

          <div className="wrapper relative z-10">
            <div className="flex max-w-[600px] flex-col gap-5">
              <p className="inline-flex items-center gap-2 font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-500">
                <span className="h-px w-[18px] bg-gray-400 dark:bg-gray-700" />
                Open Source
              </p>

              <h1 className="text-[clamp(32px,5vw,54px)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance text-gray-900 dark:text-gray-50">
                Contribute to{" "}
                <em className="not-italic text-[#7A5AF8]">real projects</em>
              </h1>

              <p className="max-w-[52ch] text-pretty text-[clamp(15px,1.6vw,18px)] leading-[1.65] text-gray-600 dark:text-gray-400">
                All EngPath projects are open source under the MIT license. Pick
                a repo that matches your skill level and start contributing
                today. No account required — just GitHub.
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-[13px] text-gray-500 dark:text-gray-500">
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-white/[0.07] bg-gray-50 dark:bg-[#171F2E] px-3 py-[5px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#7A5AF8]" />
                  {projects.length} repositories
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-white/[0.07] bg-gray-50 dark:bg-[#171F2E] px-3 py-[5px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-green-500" />
                  MIT license
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-white/[0.07] bg-gray-50 dark:bg-[#171F2E] px-3 py-[5px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-violet-500" />
                  Beginner friendly
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/engpath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7A5AF8] px-6 py-3 text-sm font-medium text-white shadow-theme-xs transition hover:-translate-y-px hover:brightness-105"
                >
                  <GitBranch className="h-4 w-4" />
                  View on GitHub
                </a>
                <a
                  href="https://github.com/engpath/engpath/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-400 dark:border-gray-700 bg-white dark:bg-[#171F2E] px-6 py-3 text-sm font-medium text-gray-900 dark:text-gray-50 shadow-theme-xs transition hover:-translate-y-px"
                >
                  Contributing Guide
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Contribute ────────────────────────────────────────────── */}
        <section className="border-y border-gray-300 dark:border-white/[0.07] bg-gray-100 dark:bg-[#101828] py-[86px]">
          <div className="wrapper">
            <div className="mx-auto mb-10 flex max-w-[600px] flex-col items-center gap-4 text-center">
              <p className="inline-flex items-center gap-2 font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-500">
                <span className="h-px w-[18px] bg-gray-400 dark:bg-gray-700" />
                Why Contribute
              </p>
              <h2 className="text-[clamp(24px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.02em] text-balance text-gray-900 dark:text-gray-50">
                Open source accelerates your growth
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {whyContribute.map(({ Icon, color, bg, title, body }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-2xl border border-gray-300 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: bg, color }}
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-semibold text-gray-900 dark:text-gray-50">
                      {title}
                    </p>
                    <p className="text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-500">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Beginner Projects ─────────────────────────────────────────── */}
        <section className="py-[86px]">
          <div className="wrapper">
            <div className="mb-8 flex flex-col gap-3">
              <p className="inline-flex items-center gap-2 font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-500">
                <span className="h-px w-[18px] bg-gray-400 dark:bg-gray-700" />
                <span style={{ color: "#3BB58F" }}>Beginner</span>
              </p>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-semibold leading-snug tracking-[-0.02em] text-gray-900 dark:text-gray-50">
                Start here
              </h2>
              <p className="max-w-[52ch] text-[15px] leading-[1.65] text-gray-600 dark:text-gray-500">
                No complex setup. Great first issues for people new to open
                source or the EngPath codebase.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {beginnerProjects.map((proj) => (
                <ProjectCard key={proj.name} project={proj} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Intermediate Projects ─────────────────────────────────────── */}
        <section className="border-y border-gray-300 dark:border-white/[0.07] bg-gray-100 dark:bg-[#101828] py-[86px]">
          <div className="wrapper">
            <div className="mb-8 flex flex-col gap-3">
              <p className="inline-flex items-center gap-2 font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-500">
                <span className="h-px w-[18px] bg-gray-400 dark:bg-gray-700" />
                <span style={{ color: "#4F8EF7" }}>Intermediate</span>
              </p>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-semibold leading-snug tracking-[-0.02em] text-gray-900 dark:text-gray-50">
                Level up
              </h2>
              <p className="max-w-[52ch] text-[15px] leading-[1.65] text-gray-600 dark:text-gray-500">
                For contributors with some experience. These repos have more
                complex architecture and a higher bar for contributions.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {intermediateProjects.map((proj) => (
                <ProjectCard key={proj.name} project={proj} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Advanced Projects ─────────────────────────────────────────── */}
        <section className="py-[86px]">
          <div className="wrapper">
            <div className="mb-8 flex flex-col gap-3">
              <p className="inline-flex items-center gap-2 font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-500">
                <span className="h-px w-[18px] bg-gray-400 dark:bg-gray-700" />
                <span style={{ color: "#E06A6A" }}>Advanced</span>
              </p>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-semibold leading-snug tracking-[-0.02em] text-gray-900 dark:text-gray-50">
                Deep dives
              </h2>
              <p className="max-w-[52ch] text-[15px] leading-[1.65] text-gray-600 dark:text-gray-500">
                For experienced engineers who want to work on challenging
                problems and have a larger impact on the platform.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {advancedProjects.map((proj) => (
                <ProjectCard key={proj.name} project={proj} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <section className="border-t border-gray-300 dark:border-white/[0.07] bg-gray-100 dark:bg-[#101828] py-[86px]">
          <div className="wrapper flex flex-col items-center gap-5 text-center">
            <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
              Get Started
            </p>
            <h2 className="max-w-[26ch] text-balance text-[clamp(24px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.02em] text-gray-900 dark:text-gray-50">
              Your first contribution is one pull request away
            </h2>
            <p className="max-w-[46ch] text-pretty text-[clamp(14px,1.5vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-500">
              Read the contributing guide, find a good first issue, and open a
              PR. The maintainers are friendly and will help you get started.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/engpath/engpath/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A5AF8] px-6 py-3 text-sm font-medium text-white shadow-theme-xs transition hover:-translate-y-px hover:brightness-105 hover:shadow-theme-sm"
              >
                Read Contributing Guide
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 rounded-full border border-gray-400 dark:border-gray-700 bg-white dark:bg-[#171F2E] px-6 py-3 text-sm font-medium text-gray-900 dark:text-gray-50 shadow-theme-xs transition hover:-translate-y-px hover:shadow-theme-sm"
              >
                Explore Roadmaps
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
