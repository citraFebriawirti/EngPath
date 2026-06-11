import Link from "next/link";
import { Star, GitFork, Code2 } from "lucide-react";
import type { OsProject } from "@/app/opensource/data";
import { difficultyConfig } from "@/app/opensource/data";

export default function ProjectCard({ project }: { project: OsProject }) {
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
