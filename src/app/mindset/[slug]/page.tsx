import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";
import { FadeUp } from "@/components/ui/motion";
import { getArticle, getAllArticleSlugs, type Block } from "@/content/mindset";
import { iconMap } from "./data";
import { toId } from "@/components/mindset/inline";
import { RenderBlock } from "@/components/mindset/render-block";

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

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default async function MindsetArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const Icon = iconMap[article.iconName] ?? iconMap.BookOpen;
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
