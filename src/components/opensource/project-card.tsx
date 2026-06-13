import Link from "next/link";
import { Star, GitFork, Code2, GitBranch, Clock } from "lucide-react";
import type { OsProject } from "@/app/opensource/data";
import { difficultyConfig } from "@/app/opensource/data";

/* ── Shared inner content ───────────────────────────────────────────────── */

function CardContent({
  project,
  isComingSoon,
}: {
  project: OsProject;
  isComingSoon: boolean;
}) {
  const diff = difficultyConfig[project.difficulty];

  return (
    <>
      {/* Header row — name + badges */}
      <div className="flex items-start justify-between gap-2">
        <p
          className={`flex items-center gap-2 font-mono text-[13.5px] font-semibold ${
            isComingSoon ? "text-gray-400 dark:text-gray-600" : "text-[#7A5AF8]"
          }`}
        >
          {isComingSoon ? (
            <Clock className="h-4 w-4 shrink-0" />
          ) : (
            <Code2 className="h-4 w-4 shrink-0" />
          )}
          <span className="truncate">{project.name}</span>
        </p>

        <div className="flex shrink-0 items-center gap-1.5">
          {isComingSoon && (
            <span className="rounded-full bg-gray-100 px-[9px] py-[3px] font-mono text-[10.5px] font-medium text-gray-400 dark:bg-white/[0.06] dark:text-gray-500">
              Soon
            </span>
          )}
          <span
            className="rounded-full px-[9px] py-[3px] font-mono text-[10.5px] font-medium"
            style={{ color: diff.color, background: diff.bg }}
          >
            {project.difficulty}
          </span>
        </div>
      </div>

      {/* Full repo name */}
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
              className="rounded-full border border-gray-200 px-[7px] py-[2px] font-mono text-[10px] text-gray-500 dark:border-white/[0.07] dark:text-gray-600"
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

        {!isComingSoon && (
          <>
            <span className="flex items-center gap-[4px]">
              <Star className="h-3.5 w-3.5" />
              {project.stars}
            </span>
            <span className="flex items-center gap-[4px]">
              <GitFork className="h-3.5 w-3.5" />
              {project.forks}
            </span>
          </>
        )}

        {isComingSoon && (
          <span className="ml-auto flex items-center gap-1 text-[11px] italic text-gray-400 dark:text-gray-600">
            <GitBranch className="h-3 w-3" />
            Repo coming soon
          </span>
        )}
      </div>
    </>
  );
}

/* ── Shared class strings ───────────────────────────────────────────────── */

const activeClass =
  "group flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-[22px] transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-theme-md dark:border-white/[0.07] dark:bg-[#171F2E] dark:hover:border-white/[0.14]";

const comingSoonClass =
  "flex flex-col gap-3 rounded-2xl border border-dashed border-gray-200 bg-gray-50/60 p-[22px] opacity-70 dark:border-white/[0.05] dark:bg-[#171F2E]/50";

/* ── Main export ────────────────────────────────────────────────────────── */

export default function ProjectCard({ project }: { project: OsProject }) {
  /* 1 — External GitHub link */
  if (project.githubUrl) {
    return (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={activeClass}
      >
        <CardContent project={project} isComingSoon={false} />
      </a>
    );
  }

  /* 2 — Internal detail page */
  if (project.href) {
    return (
      <Link href={project.href} className={activeClass}>
        <CardContent project={project} isComingSoon={false} />
      </Link>
    );
  }

  /* 3 — Coming soon (no link yet) */
  return (
    <div className={comingSoonClass}>
      <CardContent project={project} isComingSoon={true} />
    </div>
  );
}
