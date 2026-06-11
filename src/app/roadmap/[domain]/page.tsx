import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, Code2 } from "lucide-react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";
import SkillTree from "@/components/roadmap/skill-tree";
import { iconMap } from "@/components/roadmap/icon-map";
import {
  getDomain,
  getAllDomainSlugs,
  levelLabels,
  roadmapDomains,
  type Level,
} from "@/content/roadmap";
import { FadeUp } from "@/components/ui/motion";

/* ─────────────────────────── static params ───────────────────────────────── */

export function generateStaticParams() {
  return getAllDomainSlugs().map((slug) => ({ domain: slug }));
}

/* ─────────────────────────── metadata ────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ domain: string }>;
}): Promise<Metadata> {
  const { domain: slug } = await params;
  const domain = getDomain(slug);
  if (!domain) return { title: "Roadmap Not Found" };
  return {
    title: `${domain.label} Roadmap`,
    description: domain.longDesc,
  };
}

/* ─────────────────────────── Page ────────────────────────────────────────── */

export default async function DomainRoadmapPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain: slug } = await params;
  const domain = getDomain(slug);

  if (!domain) notFound();

  const Icon = iconMap[domain.slug] ?? Code2;
  const levels: Level[] = [1, 2, 3, 4];

  const totalNodes = domain.nodes.length;
  const coreCount = domain.nodes.filter((n) => n.type === "core").length;
  const optionalCount = domain.nodes.filter((n) => n.type === "optional").length;
  const levelCounts = levels.map((l) => ({
    level: l,
    label: levelLabels[l],
    count: domain.nodes.filter((n) => n.level === l).length,
  }));

  const related = roadmapDomains
    .filter((d) => d.slug !== domain.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Domain Hero ───────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden border-b border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0F172A] py-16 lg:py-24"
          style={{
            background: undefined,
          }}
        >
          <span
            className="pointer-events-none absolute rounded-full blur-[130px] opacity-[0.15]"
            style={{ width: 700, height: 700, background: domain.color, right: "-10%", top: "-30%" }}
          />

          <div className="wrapper relative z-10">
            {/* Breadcrumb */}
            <FadeUp className="mb-7 flex items-center gap-2 font-mono text-[12.5px] text-gray-400 dark:text-gray-500">
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-1 transition hover:text-gray-700 dark:hover:text-gray-300"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All Roadmaps
              </Link>
              <span className="text-gray-300 dark:text-gray-700">/</span>
              <span style={{ color: domain.color }}>{domain.label}</span>
            </FadeUp>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px]">
              {/* Left: title + meta */}
              <FadeUp delay={0.05} className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-theme-sm"
                    style={{ background: domain.bg, color: domain.color }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <span
                    className="rounded-full px-3 py-1 font-mono text-[11px] font-semibold"
                    style={{ background: domain.bg, color: domain.color }}
                  >
                    {domain.flag}
                  </span>
                </div>

                <h1 className="text-[clamp(30px,4.5vw,50px)] font-bold leading-[1.06] tracking-[-0.035em] text-balance text-gray-900 dark:text-white">
                  {domain.label}{" "}
                  <span className="text-gray-300 dark:text-gray-700">Roadmap</span>
                </h1>

                <p className="max-w-[56ch] text-pretty text-[clamp(14px,1.5vw,17px)] leading-[1.7] text-gray-500 dark:text-gray-400">
                  {domain.longDesc}
                </p>

                <div className="flex flex-wrap gap-3 font-mono text-[13px]">
                  <span className="inline-flex items-center gap-[6px] rounded-full border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] px-3 py-[6px] text-gray-500 dark:text-gray-400">
                    <span className="h-[7px] w-[7px] rounded-full" style={{ background: domain.color }} />
                    {totalNodes} skill nodes
                  </span>
                  <span className="inline-flex items-center gap-[6px] rounded-full border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] px-3 py-[6px] text-gray-500 dark:text-gray-400">
                    <BookOpen className="h-3.5 w-3.5" />
                    ~{domain.meta.hours} hours
                  </span>
                  <span className="inline-flex items-center gap-[6px] rounded-full border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] px-3 py-[6px] text-gray-500 dark:text-gray-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    {coreCount} core · {optionalCount} optional
                  </span>
                </div>
              </FadeUp>

              {/* Right: level breakdown card */}
              <FadeUp delay={0.1} className="flex flex-col gap-3 self-start rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-5 shadow-theme-sm">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.07em] text-gray-400 dark:text-gray-600">
                  Path Overview
                </p>

                {levelCounts.map(({ level, label, count }) => (
                  <div key={level} className="flex items-center gap-3">
                    <span
                      className="w-[76px] shrink-0 font-mono text-[12px] font-semibold"
                      style={{ color: domain.color }}
                    >
                      {label}
                    </span>
                    <div className="flex-1 overflow-hidden rounded-full bg-gray-100 dark:bg-white/[0.06] h-[5px]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          background: domain.color,
                          width: totalNodes > 0 ? `${(count / totalNodes) * 100}%` : "0%",
                          opacity: 0.55 + level * 0.1,
                        }}
                      />
                    </div>
                    <span className="w-5 shrink-0 text-right font-mono text-[12px] text-gray-400 dark:text-gray-600">
                      {count}
                    </span>
                  </div>
                ))}

                <div className="mt-1 border-t border-gray-100 dark:border-white/[0.06] pt-3">
                  <div className="flex gap-4 font-mono text-[11.5px] text-gray-400 dark:text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full" style={{ background: domain.color }} />
                      Core
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full border border-dashed border-gray-400 dark:border-gray-600" />
                      Optional
                    </span>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── Skill Tree ────────────────────────────────────────────────── */}
        <section className="py-[72px] bg-white dark:bg-[#0F172A]">
          <div className="wrapper">
            <FadeUp className="mb-10 flex flex-col gap-3">
              <p className="eyebrow">Skill Tree</p>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-bold leading-snug tracking-[-0.025em] text-gray-900 dark:text-white">
                {domain.label} skill progression
              </h2>
              <p className="max-w-[52ch] text-[15px] leading-[1.65] text-gray-500 dark:text-gray-400">
                Expand any node to see its description and learning resources.
                Use the checkbox to track your progress.
              </p>
            </FadeUp>

            <SkillTree domain={domain} />
          </div>
        </section>

        {/* ── Related Paths ─────────────────────────────────────────────── */}
        <section className="border-t border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[72px]">
          <div className="wrapper">
            <FadeUp className="mb-8 flex flex-col gap-3">
              <p className="eyebrow">Related Paths</p>
              <h2 className="text-[clamp(20px,2.4vw,30px)] font-bold leading-snug tracking-[-0.025em] text-gray-900 dark:text-white">
                Explore other roadmaps
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((d) => {
                const RelIcon = iconMap[d.slug] ?? Code2;
                return (
                  <Link
                    key={d.slug}
                    href={`/roadmap/${d.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-5 transition-all hover:-translate-y-1 hover:border-gray-300 dark:hover:border-white/[0.14] hover:shadow-theme-sm"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: d.bg, color: d.color }}
                    >
                      <RelIcon className="h-5 w-5" />
                    </div>
                    <div className="flex min-w-0 flex-col gap-[3px]">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {d.label}
                      </p>
                      <p className="font-mono text-[11.5px] text-gray-400 dark:text-gray-600">
                        {d.meta.nodes} nodes · ~{d.meta.hours}h
                      </p>
                    </div>
                    <ArrowLeft
                      className="ml-auto h-4 w-4 shrink-0 rotate-180 transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: d.color }}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
