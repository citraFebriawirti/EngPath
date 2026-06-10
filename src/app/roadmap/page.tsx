import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Layers,
  Server,
  Smartphone,
  Shield,
  BarChart2,
  Bug,
  Database,
  Briefcase,
} from "lucide-react";
import type { ComponentType } from "react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";
import { roadmapDomains, type RoadmapDomain } from "@/content/roadmap";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Roadmaps",
  description:
    "9 structured career paths for software engineers: Backend, Frontend, DevOps, Mobile, Security, Data Engineering, QA, DBA, and Business & Tech.",
};

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  backend: Code2,
  frontend: Layers,
  devops: Server,
  mobile: Smartphone,
  security: Shield,
  data: BarChart2,
  qa: Bug,
  dba: Database,
  business: Briefcase,
};

function DomainCard({ domain }: { domain: RoadmapDomain }) {
  const Icon = iconMap[domain.slug];
  return (
    <Link
      href={`/roadmap/${domain.slug}`}
      className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-white/[0.14] hover:shadow-theme-md"
    >
      {/* Left accent bar */}
      <span
        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full opacity-0 transition-opacity duration-200 group-hover:opacity-80"
        style={{ background: domain.color }}
      />

      {/* Top row: icon + flag */}
      <div className="flex items-center justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: domain.bg, color: domain.color }}
        >
          {Icon && <Icon className="h-5 w-5" />}
        </div>
        <span
          className="rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold"
          style={{ background: domain.bg, color: domain.color }}
        >
          {domain.flag}
        </span>
      </div>

      {/* Title */}
      <p className="text-[17px] font-semibold tracking-[-0.01em] text-gray-900 dark:text-white">
        {domain.label}
      </p>

      {/* Description */}
      <p className="flex-1 text-[13.5px] leading-[1.6] text-gray-500 dark:text-gray-400">
        {domain.shortDesc}
      </p>

      {/* Meta */}
      <div className="flex gap-3 font-mono text-[12px] text-gray-400 dark:text-gray-600">
        <span>{domain.meta.nodes} nodes</span>
        <span>~{domain.meta.hours}h</span>
      </div>

      {/* CTA */}
      <div
        className="mt-0.5 flex items-center gap-1.5 text-[13px] font-semibold"
        style={{ color: domain.color }}
      >
        Start path
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export default function RoadmapPage() {
  const corePaths = roadmapDomains.filter((d) => d.flag === "Core");
  const specializations = roadmapDomains.filter((d) => d.flag === "Specialization");
  const domainPaths = roadmapDomains.filter((d) => d.flag === "Domain");

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0F172A] py-20 lg:py-28">
          <span
            className="pointer-events-none absolute rounded-full opacity-[0.18] blur-[110px]"
            style={{ width: 640, height: 640, right: "-8%", top: "-25%", background: "#7A5AF8" }}
          />
          <span
            className="pointer-events-none absolute rounded-full opacity-[0.10] blur-[90px]"
            style={{ width: 380, height: 380, left: "-3%", top: "20%", background: "#A688FC" }}
          />

          <div className="wrapper relative z-10">
            <FadeUp className="flex max-w-[600px] flex-col gap-5">
              <p className="eyebrow">Career Roadmaps</p>

              <h1 className="text-[clamp(32px,5vw,54px)] font-bold leading-[1.05] tracking-[-0.035em] text-balance text-gray-900 dark:text-white">
                9 structured paths to{" "}
                <em className="not-italic gradient-text">engineering mastery</em>
              </h1>

              <p className="max-w-[52ch] text-pretty text-[clamp(15px,1.6vw,18px)] leading-[1.65] text-gray-500 dark:text-gray-400">
                Each roadmap is a structured skill graph — not a flat checklist.
                Follow the nodes, connect the concepts, and build a real
                engineering career step by step.
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-[13px]">
                {[
                  { dot: "#7A5AF8", text: "9 career paths" },
                  { dot: "#3BB58F", text: "200+ skill nodes" },
                  { dot: "#A688FC", text: "Open source · free" },
                ].map(({ dot, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.04] px-3 py-[5px] text-gray-500 dark:text-gray-400"
                  >
                    <span className="h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: dot }} />
                    {text}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Core Paths ────────────────────────────────────────────────── */}
        <section className="py-[88px] bg-white dark:bg-[#0F172A]">
          <div className="wrapper">
            <FadeUp className="mb-9 flex flex-col gap-3">
              <p className="eyebrow">Core Paths</p>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-bold leading-snug tracking-[-0.025em] text-gray-900 dark:text-white">
                The three foundations
              </h2>
              <p className="max-w-[52ch] text-[15px] leading-[1.65] text-gray-500 dark:text-gray-400">
                Start here if you&apos;re choosing your first engineering career
                path. These three domains are the bedrock of modern software
                engineering.
              </p>
            </FadeUp>
            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {corePaths.map((domain) => (
                <StaggerItem key={domain.slug}>
                  <DomainCard domain={domain} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Specializations ───────────────────────────────────────────── */}
        <section className="border-y border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[88px]">
          <div className="wrapper">
            <FadeUp className="mb-9 flex flex-col gap-3">
              <p className="eyebrow">Specializations</p>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-bold leading-snug tracking-[-0.025em] text-gray-900 dark:text-white">
                Go deep in a domain
              </h2>
              <p className="max-w-[52ch] text-[15px] leading-[1.65] text-gray-500 dark:text-gray-400">
                Already know your direction? These paths let you develop deep
                expertise in a specific area of engineering.
              </p>
            </FadeUp>
            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {specializations.map((domain) => (
                <StaggerItem key={domain.slug}>
                  <DomainCard domain={domain} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Domain Paths ─────────────────────────────────────────────── */}
        <section className="py-[88px] bg-white dark:bg-[#0F172A]">
          <div className="wrapper">
            <FadeUp className="mb-9 flex flex-col gap-3">
              <p className="eyebrow">Domain Skills</p>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-bold leading-snug tracking-[-0.025em] text-gray-900 dark:text-white">
                Beyond pure engineering
              </h2>
              <p className="max-w-[52ch] text-[15px] leading-[1.65] text-gray-500 dark:text-gray-400">
                Skills that amplify your engineering impact — product thinking,
                leadership, and technical communication.
              </p>
            </FadeUp>
            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {domainPaths.map((domain) => (
                <StaggerItem key={domain.slug}>
                  <DomainCard domain={domain} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <section className="border-t border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[88px]">
          <div className="wrapper">
            <FadeUp className="flex flex-col items-center gap-5 text-center">
              <p className="eyebrow">Not sure where to start?</p>
              <h2 className="max-w-[26ch] text-balance text-[clamp(24px,3vw,38px)] font-bold leading-[1.1] tracking-[-0.025em] text-gray-900 dark:text-white">
                Backend is the safest starting point for most engineers
              </h2>
              <p className="max-w-[48ch] text-pretty text-[clamp(14px,1.5vw,17px)] leading-[1.65] text-gray-500 dark:text-gray-400">
                It gives you a solid foundation in systems, APIs, and data — skills
                that apply across almost every other path. From there, you can
                branch out into any specialization.
              </p>
              <div className="mt-2 flex flex-wrap justify-center gap-3">
                <Link
                  href="/roadmap/backend"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7A5AF8] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-px hover:bg-[#6941C6] hover:shadow-[0_4px_24px_rgba(122,90,248,0.35)]"
                >
                  Start Backend Path
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/mindset"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.10] bg-white dark:bg-white/[0.04] px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm transition hover:-translate-y-px hover:border-gray-300 dark:hover:border-white/[0.18]"
                >
                  Engineer Mindset
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
