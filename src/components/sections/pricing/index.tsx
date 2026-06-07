import Link from "next/link";
import { Star, GitFork, ArrowRight, Code2 } from "lucide-react";

interface OsProject {
  name: string;
  description: string;
  stars: number;
  forks: number;
  lang: string;
  langColor: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  href: string;
}

const projects: OsProject[] = [
  {
    name: "engpath-roadmap",
    description:
      "The core roadmap data and interactive visualization engine powering all 9 career paths.",
    stars: 320,
    forks: 48,
    lang: "TypeScript",
    langColor: "#3178c6",
    difficulty: "Intermediate",
    href: "/opensource/engpath-roadmap",
  },
  {
    name: "engpath-mindset",
    description:
      "Open collection of engineer mindset articles — contribute your own mental models and case studies.",
    stars: 185,
    forks: 31,
    lang: "Markdown",
    langColor: "#083fa1",
    difficulty: "Beginner",
    href: "/opensource/engpath-mindset",
  },
  {
    name: "engpath-ui",
    description:
      "Shared component library built with Next.js and Tailwind CSS used across all EngPath tools.",
    stars: 94,
    forks: 17,
    lang: "TypeScript",
    langColor: "#3178c6",
    difficulty: "Intermediate",
    href: "/opensource/engpath-ui",
  },
  {
    name: "engpath-cli",
    description:
      "Command-line tool to browse roadmaps, track progress, and generate study plans locally.",
    stars: 67,
    forks: 12,
    lang: "Go",
    langColor: "#00add8",
    difficulty: "Advanced",
    href: "/opensource/engpath-cli",
  },
  {
    name: "skill-node-schema",
    description:
      "JSON schema spec and validator for defining skill nodes, prerequisites, and learning paths.",
    stars: 52,
    forks: 9,
    lang: "JSON",
    langColor: "#292929",
    difficulty: "Beginner",
    href: "/opensource/skill-node-schema",
  },
  {
    name: "engpath-api",
    description:
      "Public REST API for querying roadmap data, skill nodes, and mindset articles programmatically.",
    stars: 41,
    forks: 7,
    lang: "TypeScript",
    langColor: "#3178c6",
    difficulty: "Intermediate",
    href: "/opensource/engpath-api",
  },
];

const difficultyColor: Record<OsProject["difficulty"], string> = {
  Beginner: "#3BB58F",
  Intermediate: "#4F8EF7",
  Advanced: "#E06A6A",
};

export default function Pricing() {
  return (
    <section className="py-[86px]">
      <div className="wrapper">
        {/* Section head — centered */}
        <div className="mx-auto mb-11 flex max-w-[640px] flex-col items-center gap-[14px] text-center">
          <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
            Open Source
          </p>
          <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance text-gray-900 dark:text-gray-50">
            Contribute to real projects
          </h2>
          <p className="max-w-[46ch] text-pretty text-[clamp(15px,1.6vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-500">
            All EngPath projects are open source. Pick a repo that matches your
            skill level and start contributing today.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <Link
              key={proj.name}
              href={proj.href}
              className="group flex flex-col gap-3 rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-dark-primary p-[22px] transition-all duration-[220ms] hover:-translate-y-[3px] hover:shadow-theme-md hover:border-gray-400 dark:hover:border-gray-700"
            >
              {/* Repo name */}
              <p className="flex items-center gap-2 font-mono text-[14px] font-semibold text-primary-500">
                <Code2 className="h-4 w-4" />
                {proj.name}
              </p>

              {/* Description */}
              <p className="flex-1 text-[13.5px] leading-[1.6] text-gray-600 dark:text-gray-500">
                {proj.description}
              </p>

              {/* Meta row */}
              <div className="flex items-center gap-4 text-[12.5px] text-gray-500 dark:text-gray-600 font-mono">
                <span className="flex items-center gap-[5px]">
                  <span
                    className="inline-block h-[10px] w-[10px] rounded-full"
                    style={{ background: proj.langColor }}
                  />
                  {proj.lang}
                </span>
                <span className="flex items-center gap-[4px]">
                  <Star className="h-3.5 w-3.5" />
                  {proj.stars}
                </span>
                <span className="flex items-center gap-[4px]">
                  <GitFork className="h-3.5 w-3.5" />
                  {proj.forks}
                </span>
                <span
                  className="ml-auto rounded-full px-[9px] py-[3px] text-[10.5px] font-medium"
                  style={{
                    color: difficultyColor[proj.difficulty],
                    background: difficultyColor[proj.difficulty] + "18",
                  }}
                >
                  {proj.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/opensource"
            className="inline-flex items-center gap-2 rounded-full border border-gray-400 dark:border-gray-700 bg-white dark:bg-dark-primary px-6 py-3 text-sm font-medium text-gray-900 dark:text-gray-50 shadow-theme-xs transition hover:-translate-y-px hover:shadow-theme-sm"
          >
            Browse all open source projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
