import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Route, GitBranch, Layers, Users, BookOpen } from "lucide-react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kisah di balik EngPath: platform open source untuk menumbuhkan cara berpikir engineer, bukan sekadar daftar materi. Dibangun komunitas, gratis selamanya.",
};

const values = [
  {
    icon: GitBranch,
    color: "#3BB58F",
    bg: "rgba(59,181,143,0.10)",
    title: "Open Source Forever",
    description:
      "EngPath is MIT-licensed and will always be free. No premium tiers, no paywalls. The source code lives on GitHub and welcomes contributors.",
  },
  {
    icon: Users,
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    title: "Community-Driven",
    description:
      "Roadmap content, mindset articles, and features are shaped by engineers who use EngPath. Everyone can open issues, submit PRs, and improve the platform.",
  },
  {
    icon: BookOpen,
    color: "#8B7CF8",
    bg: "rgba(139,124,248,0.10)",
    title: "Mindset First",
    description:
      "Technical skills matter, but how you think matters more. EngPath puts engineering thinking — systems thinking, debugging mindset, ambiguity handling — at the center.",
  },
];

const stats = [
  { value: "500+", label: "Active Learners" },
  { value: "9", label: "Career Paths" },
  { value: "200+", label: "Skill Nodes" },
  { value: "100%", label: "Free & Open" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-dark-primary py-20 lg:py-28">
          <span
            className="pointer-events-none absolute rounded-full bg-primary-500 opacity-[0.12] blur-[90px]"
            style={{ width: 560, height: 560, left: "55%", top: "-15%" }}
          />
          <span
            className="pointer-events-none absolute rounded-full bg-violet-500 opacity-[0.09] blur-[80px]"
            style={{ width: 380, height: 380, left: "-5%", top: "10%" }}
          />
          <div className="wrapper relative z-10 flex flex-col items-center text-center gap-5">
            <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] text-gray-500 dark:text-gray-500">
              About EngPath
            </p>
            <h1 className="max-w-[18ch] text-balance text-[clamp(34px,5.5vw,60px)] font-semibold leading-[1.05] tracking-[-0.035em] text-gray-900 dark:text-gray-50">
              A roadmap for{" "}
              <em className="not-italic text-primary-500">thinking</em>, not
              just a list of topics
            </h1>
            <p className="max-w-[52ch] text-pretty text-[clamp(15px,1.6vw,18px)] leading-[1.65] text-gray-600 dark:text-gray-400">
              EngPath is an open source platform built by the community to
              grow engineering thinking — not just syntax, but the mental
              models behind great software. Free forever.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-theme-xs transition hover:-translate-y-px hover:brightness-105 hover:shadow-theme-sm"
              >
                Explore Roadmaps
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com/engpath"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-400 dark:border-gray-700 bg-white dark:bg-dark-primary px-6 py-3 text-sm font-medium text-gray-900 dark:text-gray-50 shadow-theme-xs transition hover:-translate-y-px hover:shadow-theme-sm"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* ── Our Story ─────────────────────────────────────────────────── */}
        <section className="py-[86px]">
          <div className="wrapper grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="flex flex-col gap-5">
              <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
                Our Story
              </p>
              <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-gray-900 dark:text-gray-50">
                Built because the gap is real
              </h2>
              <div className="flex flex-col gap-4 text-[15px] leading-[1.75] text-gray-600 dark:text-gray-400">
                <p>
                  Most learning resources teach <em>what</em> to code. They
                  list technologies, frameworks, and tools in a long checklist.
                  But the engineers who thrive don&apos;t just know more —
                  they{" "}
                  <strong className="font-medium text-gray-900 dark:text-gray-50">
                    think differently
                  </strong>
                  .
                </p>
                <p>
                  EngPath started as a personal experiment: what if a learning
                  platform was built around <em>mental models</em> instead of
                  technology checklists? Structured skill paths that show
                  connections, not just lists. Mindset articles that teach how
                  senior engineers approach problems.
                </p>
                <p>
                  It grew into a community project under the MIT license. No
                  company, no investors, no hidden agenda — just engineers who
                  want a better map for the road ahead.
                </p>
              </div>
            </div>

            {/* Stats card */}
            <div className="flex flex-col gap-4 rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-dark-primary p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-md">
                  <Route className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-50">
                    EngPath
                  </p>
                  <p className="font-mono text-[12px] text-gray-500 dark:text-gray-500">
                    Engineer Career Roadmap
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-dark-secondary p-4"
                  >
                    <p className="text-[28px] font-semibold tracking-[-0.02em] text-gray-900 dark:text-gray-50">
                      {s.value}
                    </p>
                    <p className="mt-[2px] font-mono text-[11.5px] text-gray-500 dark:text-gray-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-dark-secondary px-4 py-3 font-mono text-[12px] text-gray-600 dark:text-gray-500">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                MIT License · Open Source · Free Forever
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ────────────────────────────────────────────────────── */}
        <section className="border-y border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-[#141715] py-[86px]">
          <div className="wrapper">
            <div className="mx-auto mb-12 flex max-w-[560px] flex-col items-center gap-4 text-center">
              <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
                Core Values
              </p>
              <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-gray-900 dark:text-gray-50">
                What we stand for
              </h2>
              <p className="max-w-[46ch] text-pretty text-[clamp(15px,1.6vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-500">
                Three principles that guide every decision we make about
                EngPath — from content to code.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="flex flex-col gap-4 rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-dark-primary p-6"
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ color: v.color, background: v.bg }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <p className="font-semibold text-gray-900 dark:text-gray-50">
                        {v.title}
                      </p>
                      <p className="text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-500">
                        {v.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────────────── */}
        <section className="py-[86px]">
          <div className="wrapper">
            <div className="mx-auto mb-12 flex max-w-[560px] flex-col items-center gap-4 text-center">
              <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
                How it works
              </p>
              <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-gray-900 dark:text-gray-50">
                A platform in three layers
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  num: "01",
                  color: "#4F8EF7",
                  icon: Route,
                  title: "Career Roadmaps",
                  desc: "9 structured paths — Backend, Frontend, DevOps, Mobile, Security, Data, QA, DBA, and Business Engineering. Each path is a connected skill graph, not a flat list.",
                },
                {
                  num: "02",
                  color: "#8B7CF8",
                  icon: BookOpen,
                  title: "Mindset Articles",
                  desc: "A growing library of engineering thinking articles — systems thinking, debugging strategies, how to read documentation, handling ambiguity — the skills that separate good engineers from great ones.",
                },
                {
                  num: "03",
                  color: "#3BB58F",
                  icon: Layers,
                  title: "Open Source Projects",
                  desc: "Real repositories you can contribute to — from the roadmap engine itself to the CLI tool and component library. Learn by doing on code that people actually use.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="group relative flex flex-col gap-4 rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-dark-primary p-6 transition-all hover:-translate-y-[3px] hover:shadow-theme-md hover:border-gray-400 dark:hover:border-gray-700"
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{
                          color: item.color,
                          background: item.color + "18",
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span
                        className="font-mono text-[13px] font-semibold"
                        style={{ color: item.color + "80" }}
                      >
                        {item.num}
                      </span>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <p className="font-semibold text-gray-900 dark:text-gray-50">
                        {item.title}
                      </p>
                      <p className="text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="border-t border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-[#141715] py-[86px]">
          <div className="wrapper flex flex-col items-center gap-5 text-center">
            <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
              Get Started
            </p>
            <h2 className="max-w-[22ch] text-balance text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-gray-900 dark:text-gray-50">
              Ready to think like an engineer?
            </h2>
            <p className="max-w-[46ch] text-pretty text-[clamp(15px,1.6vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-500">
              Pick a career path, explore mindset articles, or contribute to
              an open source project. Everything is free — no account needed.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-theme-xs transition hover:-translate-y-px hover:brightness-105 hover:shadow-theme-sm"
              >
                Explore Roadmaps
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/mindset"
                className="inline-flex items-center gap-2 rounded-full border border-gray-400 dark:border-gray-700 bg-white dark:bg-dark-primary px-6 py-3 text-sm font-medium text-gray-900 dark:text-gray-50 shadow-theme-xs transition hover:-translate-y-px hover:shadow-theme-sm"
              >
                <BookOpen className="h-4 w-4" />
                Engineer Mindset
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
