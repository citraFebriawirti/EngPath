export { metadata } from "./data";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";
import ArticleCard from "@/components/mindset/article-card";
import { iconMap } from "@/components/mindset/icon-map";
import { articles, categories, featured, rest, principles } from "./data";

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function MindsetPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0F172A] py-20 lg:py-28">
          <span
            className="pointer-events-none absolute rounded-full bg-violet-500 opacity-[0.10] blur-[110px]"
            style={{ width: 600, height: 600, right: "-8%", top: "-25%" }}
          />
          <span
            className="pointer-events-none absolute rounded-full bg-primary-500 opacity-[0.07] blur-[90px]"
            style={{ width: 380, height: 380, left: "-3%", top: "15%" }}
          />

          <div className="wrapper relative z-10">
            <div className="flex max-w-[600px] flex-col gap-5">
              <p className="inline-flex items-center gap-2 font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-500">
                <span className="h-px w-[18px] bg-gray-400 dark:bg-gray-700" />
                Engineer Mindset
              </p>

              <h1 className="text-[clamp(32px,5vw,54px)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance text-gray-900 dark:text-gray-50">
                Skills are table stakes.{" "}
                <em className="not-italic text-[#7A5AF8]">Mindset</em>{" "}
                is the differentiator.
              </h1>

              <p className="max-w-[52ch] text-pretty text-[clamp(15px,1.6vw,18px)] leading-[1.65] text-gray-600 dark:text-gray-400">
                A growing library of mental models, thinking patterns, and
                engineering principles used by senior engineers every day. The
                stuff you don&apos;t learn from tutorials.
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-[13px] text-gray-500 dark:text-gray-500">
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.04] px-3 py-[5px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-violet-500" />
                  {articles.length} articles
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.04] px-3 py-[5px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-primary-500" />
                  {categories.length - 1} categories
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.04] px-3 py-[5px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-green-500" />
                  Free forever
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Principles ───────────────────────────────────────────── */}
        <section className="border-y border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[86px]">
          <div className="wrapper">
            <div className="mx-auto mb-10 flex max-w-[600px] flex-col items-center gap-4 text-center">
              <p className="inline-flex items-center gap-2 font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-500">
                <span className="h-px w-[18px] bg-gray-400 dark:bg-gray-700" />
                Core Principles
              </p>
              <h2 className="text-[clamp(24px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.02em] text-balance text-gray-900 dark:text-gray-50">
                The three foundations of the engineering mindset
              </h2>
              <p className="max-w-[46ch] text-pretty text-[clamp(14px,1.5vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-500">
                Every mindset article connects back to at least one of these
                three principles. They compound over time.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {principles.map(({ iconName, color, bg, title, body }) => {
                const Icon = iconMap[iconName];
                return (
                  <div
                    key={title}
                    className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6"
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
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Featured Articles ──────────────────────────────────────────── */}
        <section className="py-[86px]">
          <div className="wrapper">
            <div className="mb-9 flex flex-col gap-3">
              <p className="inline-flex items-center gap-2 font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-500">
                <span className="h-px w-[18px] bg-gray-400 dark:bg-gray-700" />
                Start Here
              </p>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-semibold leading-snug tracking-[-0.02em] text-gray-900 dark:text-gray-50">
                Featured articles
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featured.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* ── All Articles ───────────────────────────────────────────────── */}
        <section className="border-t border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[86px]">
          <div className="wrapper">
            <div className="mb-9 flex flex-col gap-3">
              <p className="inline-flex items-center gap-2 font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-500">
                <span className="h-px w-[18px] bg-gray-400 dark:bg-gray-700" />
                All Articles
              </p>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-semibold leading-snug tracking-[-0.02em] text-gray-900 dark:text-gray-50">
                Explore the library
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            {/* Contribute CTA */}
            <div className="mt-8 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6">
              <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-50">
                    Have a mental model to share?
                  </p>
                  <p className="mt-1 text-[13.5px] text-gray-600 dark:text-gray-500">
                    The mindset library is open source. Submit an article via
                    GitHub pull request.
                  </p>
                </div>
                <a
                  href="https://github.com/engpath/engpath-mindset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.10] bg-white dark:bg-white/[0.04] px-5 py-[9px] text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm transition hover:-translate-y-px hover:border-gray-300 dark:hover:border-white/[0.18]"
                >
                  Contribute on GitHub
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="border-t border-gray-300 dark:border-gray-800 py-[86px]">
          <div className="wrapper flex flex-col items-center gap-5 text-center">
            <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
              Pair With a Roadmap
            </p>
            <h2 className="max-w-[28ch] text-balance text-[clamp(24px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.02em] text-gray-900 dark:text-gray-50">
              Mindset without direction is just theory
            </h2>
            <p className="max-w-[46ch] text-pretty text-[clamp(14px,1.5vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-500">
              Pair these mental models with a structured career roadmap to make
              them concrete and actionable.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A5AF8] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-px hover:bg-[#6941C6] hover:shadow-[0_4px_24px_rgba(122,90,248,0.35)]"
              >
                Explore Roadmaps
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/opensource"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.10] bg-white dark:bg-white/[0.04] px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm transition hover:-translate-y-px hover:border-gray-300 dark:hover:border-white/[0.18]"
              >
                Open Source Projects
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
