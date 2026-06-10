"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { levelLabels, type SkillNode, type RoadmapDomain, type Level } from "@/content/roadmap";

/* ─────────────────────────── NodeCard ────────────────────────────────────── */

function NodeCard({ node, color }: { node: SkillNode; color: string }) {
  const [expanded, setExpanded] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <div
      className={`group relative flex flex-col rounded-xl border transition-all duration-[180ms] ${
        node.type === "core"
          ? "border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] shadow-theme-xs hover:shadow-theme-sm"
          : "border-dashed border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-white/[0.02]"
      } ${done ? "opacity-60" : ""}`}
    >
      {/* Core node left accent bar */}
      {node.type === "core" && (
        <span
          className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full opacity-40"
          style={{ background: color }}
        />
      )}

      {/* Card top */}
      <div className="flex items-start gap-3 p-4">
        {/* Done toggle */}
        <button
          onClick={() => setDone(!done)}
          className="mt-0.5 shrink-0 text-gray-400 dark:text-gray-600 transition hover:text-green-500"
          aria-label={done ? "Mark as not done" : "Mark as done"}
        >
          {done ? (
            <CheckCircle2 className="h-[18px] w-[18px] text-green-500" />
          ) : (
            <Circle className="h-[18px] w-[18px]" />
          )}
        </button>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span
              className={`text-[14px] font-medium leading-snug ${
                done
                  ? "line-through text-gray-400 dark:text-gray-600"
                  : "text-gray-900 dark:text-gray-50"
              }`}
            >
              {node.title}
            </span>

            <div className="flex shrink-0 items-center gap-2">
              {node.type === "optional" && (
                <span className="rounded-full border border-dashed border-gray-300 dark:border-gray-700 px-[7px] py-[2px] font-mono text-[10px] text-gray-400 dark:text-gray-600">
                  optional
                </span>
              )}
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition"
                aria-expanded={expanded}
                aria-label="Toggle details"
              >
                {expanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Tags */}
          {node.tags && node.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {node.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 dark:border-gray-800 px-[7px] py-[2px] font-mono text-[10px] text-gray-500 dark:text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-gray-200 dark:border-gray-800 px-4 pb-4 pt-3">
          <p className="text-[13px] leading-[1.65] text-gray-600 dark:text-gray-400">
            {node.description}
          </p>

          {node.resources && node.resources.length > 0 && (
            <div className="mt-3 flex flex-col gap-[6px]">
              <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-gray-400 dark:text-gray-600">
                Resources
              </p>
              {node.resources.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[5px] text-[12.5px] font-medium hover:underline"
                  style={{ color }}
                >
                  {r.label}
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────── LevelSection ────────────────────────────────── */

function LevelSection({
  level,
  nodes,
  domain,
}: {
  level: Level;
  nodes: SkillNode[];
  domain: RoadmapDomain;
}) {
  if (nodes.length === 0) return null;

  const coreCount = nodes.filter((n) => n.type === "core").length;
  const optionalCount = nodes.filter((n) => n.type === "optional").length;

  return (
    <div>
      {/* Level header */}
      <div className="mb-5 flex items-center gap-4">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-[13px] font-semibold text-white"
          style={{ background: domain.color }}
        >
          {level}
        </div>
        <div>
          <h3
            className="text-[16px] font-semibold tracking-[-0.01em]"
            style={{ color: domain.color }}
          >
            {levelLabels[level]}
          </h3>
          <p className="font-mono text-[11.5px] text-gray-500 dark:text-gray-600">
            {coreCount} core · {optionalCount} optional
          </p>
        </div>
      </div>

      {/* Node grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((node) => (
          <NodeCard key={node.id} node={node} color={domain.color} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── SkillTree (exported) ────────────────────────── */

export default function SkillTree({ domain }: { domain: RoadmapDomain }) {
  const levels: Level[] = [1, 2, 3, 4];

  return (
    <div className="flex flex-col gap-10">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 rounded-xl border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.03] px-4 py-3">
        <span className="flex items-center gap-2 text-[13px] text-gray-600 dark:text-gray-400">
          <span
            className="h-[14px] w-[14px] rounded-sm"
            style={{ background: domain.bg, border: `1.5px solid ${domain.color}40` }}
          />
          Core skill — essential for this path
        </span>
        <span className="flex items-center gap-2 text-[13px] text-gray-600 dark:text-gray-400">
          <span className="h-[14px] w-[14px] rounded-sm border border-dashed border-gray-400 dark:border-gray-600" />
          Optional — explore when ready
        </span>
        <span className="flex items-center gap-2 text-[13px] text-gray-600 dark:text-gray-400">
          <CheckCircle2 className="h-[14px] w-[14px] text-green-500" />
          Click node to expand · checkbox to track
        </span>
      </div>

      {/* Levels */}
      {levels.map((level, i) => {
        const levelNodes = domain.nodes.filter((n) => n.level === level);
        if (levelNodes.length === 0) return null;

        const hasNext = levels.slice(i + 1).some((l) =>
          domain.nodes.some((n) => n.level === l)
        );

        return (
          <div key={level} className="flex flex-col gap-0">
            <LevelSection level={level} nodes={levelNodes} domain={domain} />

            {/* Divider between levels */}
            {hasNext && (
              <div className="mt-8 mb-2 flex items-center gap-3">
                <div className="h-px flex-1 opacity-[0.15]" style={{ background: domain.color }} />
                <span
                  className="font-mono text-[10.5px] uppercase tracking-[0.06em] opacity-30"
                  style={{ color: domain.color }}
                >
                  next level
                </span>
                <div className="h-px flex-1 opacity-[0.15]" style={{ background: domain.color }} />
              </div>
            )}
          </div>
        );
      })}

      {/* Completion CTA */}
      <div className="rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6 shadow-theme-sm">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left sm:items-center sm:justify-between">
          <div className="flex flex-col gap-[5px]">
            <p className="font-semibold text-gray-900 dark:text-gray-50">
              Ready to go deeper?
            </p>
            <p className="text-[13.5px] text-gray-600 dark:text-gray-500">
              Explore all 9 career paths or read mindset articles to complement
              your technical skills.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.10] bg-white dark:bg-white/[0.04] px-5 py-[9px] text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm transition hover:-translate-y-px hover:border-gray-300 dark:hover:border-white/[0.18]"
            >
              All Roadmaps
            </Link>
            <Link
              href="/mindset"
              className="inline-flex items-center gap-2 rounded-full px-5 py-[9px] text-sm font-medium text-white shadow-theme-xs transition hover:brightness-110"
              style={{ background: domain.color }}
            >
              Mindset Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
