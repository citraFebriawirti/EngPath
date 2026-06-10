import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Puzzle,
  Search,
  BrainCircuit,
  Layers,
  Clock,
  BookOpen,
  Zap,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  BookMarked,
  FileText,
  Mic,
} from "lucide-react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";
import { FadeUp } from "@/components/ui/motion";
import {
  getArticle,
  getAllArticleSlugs,
  type Block,
  type Exchange,
  type ArticleRef,
} from "@/content/mindset";

/* ── Icon map ─────────────────────────────────────────────────────────────── */

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Target,
  Puzzle,
  Search,
  BrainCircuit,
  Layers,
  Clock,
  BookOpen,
  Zap,
};

/* ── Static params & metadata ─────────────────────────────────────────────── */

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

/* ── Inline text renderer ─────────────────────────────────────────────────── */
// Supports **bold**, `code`, _italic_ in string content

function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|_[^_]+_)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-gray-900 dark:text-gray-100">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="rounded bg-gray-100 dark:bg-white/[0.08] px-[5px] py-[2px] font-mono text-[0.875em] text-[#4F8EF7]"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("_") && part.endsWith("_")) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

/* ── TOC helper ───────────────────────────────────────────────────────────── */

function toId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ── Block renderers ──────────────────────────────────────────────────────── */

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

const refTypeMeta: Record<
  ArticleRef["type"],
  { Icon: ComponentType<{ className?: string }>; label: string }
> = {
  book: { Icon: BookMarked, label: "Book" },
  paper: { Icon: FileText, label: "Paper" },
  talk: { Icon: Mic, label: "Talk" },
  article: { Icon: BookOpen, label: "Article" },
};

function RenderBlock({ block, color }: { block: Block; color: string }) {
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

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default async function MindsetArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const Icon = iconMap[article.iconName] ?? BookOpen;
  const toc = article.blocks
    .filter((b): b is Extract<Block, { kind: "h2" }> => b.kind === "h2")
    .map((b) => ({ text: b.text, id: toId(b.text) }));

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0F172A] py-14 lg:py-20">
          <span
            className="pointer-events-none absolute rounded-full blur-[130px] opacity-[0.12]"
            style={{
              width: 600,
              height: 600,
              background: article.color,
              right: "-10%",
              top: "-30%",
            }}
          />

          <div className="wrapper relative z-10">
            {/* Breadcrumb */}
            <FadeUp className="mb-8 flex items-center gap-2 font-mono text-[12px] text-gray-400 dark:text-gray-500">
              <Link
                href="/mindset"
                className="inline-flex items-center gap-1 transition hover:text-gray-700 dark:hover:text-gray-300"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All Articles
              </Link>
              <span className="text-gray-300 dark:text-gray-700">/</span>
              <span style={{ color: article.color }}>{article.category}</span>
            </FadeUp>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px]">
              {/* Title + meta */}
              <FadeUp delay={0.04} className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: article.bg, color: article.color }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  {article.featured && (
                    <span
                      className="rounded-full px-3 py-1 font-mono text-[10.5px] font-semibold"
                      style={{ background: article.bg, color: article.color }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="text-[clamp(26px,4vw,46px)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-gray-900 dark:text-gray-50">
                  {article.title}
                </h1>

                <p className="max-w-[56ch] text-pretty text-[clamp(14px,1.5vw,17px)] leading-[1.7] text-gray-500 dark:text-gray-400">
                  {article.lead}
                </p>

                <div className="flex flex-wrap gap-2 font-mono text-[12.5px] text-gray-400 dark:text-gray-600">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.08] px-3 py-[5px]">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readMin} min read
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.08] px-3 py-[5px]">
                    <span
                      className="h-[7px] w-[7px] rounded-full"
                      style={{ background: article.color }}
                    />
                    {article.category}
                  </span>
                </div>
              </FadeUp>

              {/* Sticky TOC */}
              {toc.length > 0 && (
                <FadeUp
                  delay={0.08}
                  className="hidden lg:flex flex-col gap-2 self-start sticky top-6 rounded-xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-5"
                >
                  <p className="mb-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] text-gray-400 dark:text-gray-600">
                    In this article
                  </p>
                  {toc.map(({ text, id }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="flex items-center gap-2 rounded-lg px-2 py-[6px] text-[13px] text-gray-500 dark:text-gray-500 transition hover:bg-gray-50 dark:hover:bg-white/[0.04] hover:text-gray-900 dark:hover:text-gray-200"
                    >
                      <span
                        className="h-[5px] w-[5px] shrink-0 rounded-full"
                        style={{ background: article.color }}
                      />
                      {text}
                    </a>
                  ))}
                </FadeUp>
              )}
            </div>
          </div>
        </section>

        {/* ── Article body ────────────────────────────────────────────────── */}
        <section className="py-14 bg-white dark:bg-[#0F172A]">
          <div className="wrapper">
            <div className="mx-auto max-w-[740px]">
              {article.blocks.map((block, i) => (
                <RenderBlock key={i} block={block} color={article.color} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Back CTA ────────────────────────────────────────────────────── */}
        <section className="border-t border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-14">
          <div className="wrapper flex flex-col items-center gap-5 text-center">
            <p
              className="font-mono text-[12px] font-semibold uppercase tracking-[0.08em]"
              style={{ color: article.color }}
            >
              Keep Reading
            </p>
            <h2 className="max-w-[28ch] text-balance text-[clamp(22px,2.5vw,32px)] font-semibold leading-[1.1] tracking-[-0.02em] text-gray-900 dark:text-gray-50">
              Explore more mental models
            </h2>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/mindset"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.10] bg-white dark:bg-white/[0.04] px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm transition hover:-translate-y-px hover:border-gray-300 dark:hover:border-white/[0.18]"
              >
                <ArrowLeft className="h-4 w-4" />
                All Articles
              </Link>
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-px"
                style={{
                  background: article.color,
                  boxShadow: `0 4px 24px ${article.color}44`,
                }}
              >
                Explore Roadmaps
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
