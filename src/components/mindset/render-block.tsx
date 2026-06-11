import type { ComponentType } from "react";
import {
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  BookMarked,
  FileText,
  Mic,
  BookOpen,
} from "lucide-react";
import type { Block, Exchange, ArticleRef } from "@/content/mindset";
import { Inline, toId } from "./inline";

/* ── Callout meta ─────────────────────────────────────────────────────────── */

const calloutMeta = {
  insight: {
    Icon: Lightbulb,
    border: "border-[#4F8EF7]/30",
    bg: "bg-[#4F8EF7]/[0.06]",
    iconColor: "text-[#4F8EF7]",
    titleColor: "text-[#4F8EF7]",
  },
  warning: {
    Icon: AlertTriangle,
    border: "border-amber-400/30",
    bg: "bg-amber-400/[0.06]",
    iconColor: "text-amber-500",
    titleColor: "text-amber-600 dark:text-amber-400",
  },
  tip: {
    Icon: CheckCircle2,
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/[0.06]",
    iconColor: "text-emerald-500",
    titleColor: "text-emerald-600 dark:text-emerald-400",
  },
};

/* ── Ref type meta ────────────────────────────────────────────────────────── */

const refTypeMeta: Record<
  ArticleRef["type"],
  { Icon: ComponentType<{ className?: string }>; label: string }
> = {
  book: { Icon: BookMarked, label: "Book" },
  paper: { Icon: FileText, label: "Paper" },
  talk: { Icon: Mic, label: "Talk" },
  article: { Icon: BookOpen, label: "Article" },
};

/* ── RenderBlock ──────────────────────────────────────────────────────────── */

export function RenderBlock({ block, color }: { block: Block; color: string }) {
  switch (block.kind) {
    case "h2":
      return (
        <h2
          id={toId(block.text)}
          className="mt-12 mb-4 scroll-mt-24 text-[clamp(20px,2.2vw,26px)] font-semibold leading-snug tracking-[-0.02em] text-gray-900 dark:text-gray-50"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3 className="mt-8 mb-3 text-[17px] font-semibold tracking-[-0.01em] text-gray-800 dark:text-gray-200">
          {block.text}
        </h3>
      );

    case "p":
      return (
        <p className="mb-5 text-[16px] leading-[1.8] text-gray-700 dark:text-gray-400">
          <Inline text={block.text} />
        </p>
      );

    case "callout": {
      const meta = calloutMeta[block.variant];
      return (
        <div
          className={`my-6 flex gap-4 rounded-xl border ${meta.border} ${meta.bg} p-5`}
        >
          <meta.Icon className={`mt-0.5 h-5 w-5 shrink-0 ${meta.iconColor}`} />
          <div className="flex flex-col gap-1.5">
            <p className={`text-[13.5px] font-semibold ${meta.titleColor}`}>
              {block.title}
            </p>
            <p className="text-[14px] leading-[1.75] text-gray-600 dark:text-gray-400">
              {block.body}
            </p>
          </div>
        </div>
      );
    }

    case "conversation":
      return (
        <div className="my-7 overflow-hidden rounded-xl border border-gray-200 dark:border-white/[0.08]">
          {block.label && (
            <div className="border-b border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.03] px-5 py-3">
              <p className="font-mono text-[11.5px] text-gray-400 dark:text-gray-600">
                {block.label}
              </p>
            </div>
          )}
          <div className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {block.exchanges.map((ex: Exchange, i: number) => (
              <div
                key={i}
                className={`flex gap-4 px-5 py-4 ${
                  ex.role === "senior"
                    ? "bg-white dark:bg-[#171F2E]"
                    : "bg-gray-50 dark:bg-[#0F172A]"
                }`}
              >
                <div
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold"
                  style={
                    ex.role === "senior"
                      ? { background: color + "22", color }
                      : { background: "rgba(148,163,184,0.15)", color: "#94a3b8" }
                  }
                >
                  {ex.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span
                    className="font-mono text-[11px] font-semibold"
                    style={ex.role === "senior" ? { color } : { color: "#94a3b8" }}
                  >
                    {ex.name}
                  </span>
                  <p className="text-[14px] leading-[1.7] text-gray-700 dark:text-gray-400">
                    {ex.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "code":
      return (
        <div className="my-6 overflow-hidden rounded-xl border border-gray-200 dark:border-white/[0.08]">
          {block.caption && (
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.03] px-5 py-3">
              <p className="text-[12px] text-gray-500 dark:text-gray-500">
                {block.caption}
              </p>
              <span
                className="font-mono text-[10.5px] font-semibold uppercase tracking-wider"
                style={{ color }}
              >
                {block.lang}
              </span>
            </div>
          )}
          <pre className="overflow-x-auto bg-[#0d1117] p-5 text-[13px] leading-[1.75]">
            <code className="font-mono text-[#c9d1d9]">{block.code}</code>
          </pre>
        </div>
      );

    case "list":
      return (
        <ul
          className={`my-5 flex flex-col gap-2 ${
            block.style === "numbered" ? "list-decimal" : "list-none"
          } pl-0`}
        >
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[15.5px] leading-[1.75] text-gray-700 dark:text-gray-400">
              {block.style === "numbered" ? (
                <span
                  className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold"
                  style={{ background: color + "22", color }}
                >
                  {i + 1}
                </span>
              ) : (
                <span
                  className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full"
                  style={{ background: color }}
                />
              )}
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote
          className="my-7 border-l-[3px] pl-6"
          style={{ borderColor: color }}
        >
          <p className="text-[17px] italic leading-[1.75] text-gray-700 dark:text-gray-300">
            &ldquo;{block.text}&rdquo;
          </p>
          {(block.by || block.source) && (
            <footer className="mt-3 font-mono text-[12px] text-gray-400 dark:text-gray-600">
              {block.by && <span>{block.by}</span>}
              {block.source && (
                <span className="text-gray-300 dark:text-gray-700">
                  {" "}— {block.source}
                </span>
              )}
            </footer>
          )}
        </blockquote>
      );

    case "divider":
      return (
        <hr className="my-10 border-gray-100 dark:border-white/[0.06]" />
      );

    case "takeaways":
      return (
        <div
          className="my-8 rounded-xl border p-6"
          style={{ borderColor: color + "44", background: color + "08" }}
        >
          <p
            className="mb-4 font-mono text-[11.5px] font-semibold uppercase tracking-[0.08em]"
            style={{ color }}
          >
            Key Takeaways
          </p>
          <ul className="flex flex-col gap-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-[14.5px] leading-[1.7] text-gray-700 dark:text-gray-400">
                <CheckCircle2
                  className="mt-[2px] h-[17px] w-[17px] shrink-0"
                  style={{ color }}
                />
                <Inline text={item} />
              </li>
            ))}
          </ul>
        </div>
      );

    case "refs": {
      return (
        <div className="my-8">
          <p className="mb-4 font-mono text-[11.5px] font-semibold uppercase tracking-[0.08em] text-gray-400 dark:text-gray-600">
            References
          </p>
          <ol className="flex flex-col gap-4">
            {block.items.map((ref: ArticleRef, i: number) => {
              const meta = refTypeMeta[ref.type];
              return (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl border border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#171F2E] p-4"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/[0.06]">
                    <meta.Icon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[14px] font-semibold text-gray-900 dark:text-gray-100">
                      {ref.title}
                    </p>
                    <p className="font-mono text-[12px] text-gray-400 dark:text-gray-600">
                      {ref.author}
                      {ref.dateLabel && ` · ${ref.dateLabel}`}
                      {" · "}
                      <span className="text-gray-300 dark:text-gray-700">
                        {meta.label}
                      </span>
                    </p>
                    {ref.note && (
                      <p className="mt-1 text-[13px] leading-[1.65] text-gray-500 dark:text-gray-500">
                        {ref.note}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      );
    }

    default:
      return null;
  }
}
