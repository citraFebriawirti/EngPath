import Link from "next/link";
import { Star, GitFork, ArrowRight, Code2 } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

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
    <section className="py-[88px] bg-white dark:bg-[#0F172A]">
      <div className="wrapper">
        {/* Section head */}
        <FadeUp className="mx-auto mb-11 flex max-w-[640px] flex-col items-center gap-4 text-center">
          <p className="eyebrow">Open Source</p>
          <h2 className="section-title">Contribute to real projects</h2>
          <p className="section-sub mx-auto text-center">
            All EngPath projects are open source. Pick a repo that matches your
            skill level and start contributing today.
          </p>
        </FadeUp>

        {/* Project grid */}
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <StaggerItem key={proj.name}>
              <Link
                href={proj.href}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-[22px] transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-white/[0.14] hover:shadow-theme-md"
              >
                {/* Repo name */}
                <p className="flex items-center gap-2 font-mono text-[13.5px] font-semibold text-[#7A5AF8]">
                  <Code2 className="h-4 w-4" />
                  {proj.name}
                </p>

                {/* Description */}
                <p className="flex-1 text-[13.5px] leading-[1.6] text-gray-500 dark:text-gray-400">
                  {proj.description}
                </p>

                {/* Meta row */}
                <div className="flex items-center gap-4 font-mono text-[12px] text-gray-400 dark:text-gray-600">
                  <span className="flex items-center gap-[5px]">
                    <span
                      className="inline-block h-[9px] w-[9px] rounded-full"
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
                    className="ml-auto rounded-full px-[9px] py-[3px] text-[10.5px] font-semibold"
                    style={{
                      color: difficultyColor[proj.difficulty],
                      background: difficultyColor[proj.difficulty] + "18",
                    }}
                  >
                    {proj.difficulty}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeUp delay={0.2} className="mt-8 flex justify-center">
          <Link
            href="/opensource"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.10] bg-white dark:bg-white/[0.04] px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm transition hover:-translate-y-px hover:border-gray-300 dark:hover:border-white/[0.18] hover:shadow-theme-sm"
          >
            Browse all open source projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
