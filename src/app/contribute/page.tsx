import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
export { metadata } from "./data";
import { quickSteps, areas, guidelines } from "./data";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { GITHUB_REPO_URL } from "@/lib/constants";

/* ── Local helpers ──────────────────────────────────────────────────────── */

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-gray-800 bg-gray-950 px-5 py-4 font-mono text-[12.5px] leading-[1.85] text-gray-300">
      <code>{code}</code>
    </pre>
  );
}

function SectionLabel({ color, num, text }: { color: string; num: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold"
        style={{ color, background: color + "22" }}
      >
        {num}
      </span>
      <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.07em]" style={{ color }}>
        {text}
      </p>
    </div>
  );
}

/* ── Code templates ──────────────────────────────────────────────────────── */

const ROADMAP_STEP1 = `// src/content/roadmap/your-domain/index.ts
import type { RoadmapDomain } from "@/content/roadmap/types";

export const yourDomain: RoadmapDomain = {
  slug: "your-domain",
  label: "Your Domain",
  flag: "Specialization",      // "Core" | "Specialization" | "Domain"
  shortDesc: "Short description shown on roadmap cards.",
  longDesc: "Longer description displayed on the domain page.",
  color: "#F59E0B",
  bg: "rgba(245,158,11,0.10)",
  meta: { nodes: 0, hours: 0 }, // update after adding nodes
  nodes: [
    {
      id: "yd-first-skill",    // prefix id with your domain abbreviation
      title: "Your First Skill",
      type: "core",            // "core" | "optional"
      level: 1,                // 1=Foundation 2=Intermediate 3=Advanced 4=Expert
      description: "What this skill covers and why it matters.",
      tags: ["tag1", "tag2"],
      resources: [
        { label: "Resource Name", href: "https://example.com" },
      ],
    },
  ],
};`;

const ROADMAP_STEP2 = `// src/content/roadmap/index.ts  — two changes required

// 1. Add the import (alphabetical order preferred)
import { yourDomain } from "./your-domain";

// 2. Add to the domains array
export const roadmapDomains: RoadmapDomain[] = [
  backend, frontend, devops, mobile, security,
  data, qa, dba, business,
  yourDomain, // ← add here
];`;

const MINDSET_STEP1 = `// src/content/mindset/your-article/index.ts
import type { MindsetArticleContent } from "@/content/mindset";

export const yourArticle: MindsetArticleContent = {
  slug: "your-article",        // must match folder name
  title: "Your Article Title",
  excerpt: "One-sentence summary shown on listing cards.",
  category: "Thinking Models", // use existing or add a new one
  readMin: 7,
  color: "#4F8EF7",
  bg: "rgba(79,142,247,0.10)",
  featured: false,             // set true to highlight on the listing page
  iconName: "Target",          // any valid Lucide icon name
  lead: "Opening paragraph shown at the top of the article.",
  blocks: [
    { kind: "h2", text: "First Section Heading" },
    { kind: "p",  text: "Paragraph text here." },
    {
      kind: "callout",
      variant: "insight",      // "insight" | "warning" | "tip"
      title: "Key Insight",
      body: "Callout body text.",
    },
    { kind: "list", style: "bullet", items: ["Item 1", "Item 2"] },
    { kind: "takeaways", items: ["Main takeaway 1", "Main takeaway 2"] },
  ],
};`;

const MINDSET_STEP2 = `// src/content/mindset/index.ts  — add import + register

// 1. Add the import
import { yourArticle } from "./your-article";

// 2. Add to the articles array
const articles: MindsetArticleContent[] = [
  firstPrinciplesArticle,
  systemsThinkingArticle,
  // ... existing articles ...
  yourArticle, // ← add here
];`;

const MINDSET_STEP3 = `// src/app/mindset/data.ts  — add display metadata

export const articles: MindsetArticle[] = [
  // ... existing entries ...
  {
    slug: "your-article",      // must match content file slug
    title: "Your Article Title",
    excerpt: "One-sentence summary.",
    category: "Thinking Models",
    readMin: 7,
    iconName: "Target",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    featured: false,
  },
];`;

const OPENSOURCE_STEP1 = `// src/app/opensource/data.ts  — add to the projects array

export const projects: OsProject[] = [
  // ... existing projects ...
  {
    name: "your-project",
    fullName: "Your Project Full Name",
    description: "One to two sentences describing what the project does.",
    stars: 0,
    forks: 0,
    lang: "TypeScript",
    langColor: "#3178C6",
    difficulty: "Beginner",    // "Beginner" | "Intermediate" | "Advanced"
    category: "Tooling",       // e.g. "API", "CLI", "UI", "Data", "Tooling"
    tags: ["tag1", "tag2"],
    // href: "/opensource/your-project", // optional: internal detail page
    // githubUrl: "https://github.com/org/repo", // optional: external GitHub
  },
];`;

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function ContributePage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0F172A] py-20 lg:py-28">
          <span
            className="pointer-events-none absolute rounded-full bg-[#4F8EF7] opacity-[0.10] blur-[90px]"
            style={{ width: 500, height: 500, left: "60%", top: "-20%" }}
          />
          <span
            className="pointer-events-none absolute rounded-full bg-[#7A5AF8] opacity-[0.09] blur-[80px]"
            style={{ width: 360, height: 360, left: "-8%", top: "15%" }}
          />

          <div className="wrapper relative z-10">
            <FadeUp className="flex flex-col items-center text-center gap-5">
              <p className="eyebrow">Contributing Guide</p>
              <h1 className="max-w-[20ch] text-balance text-[clamp(34px,5.5vw,60px)] font-bold leading-[1.05] tracking-[-0.035em] text-gray-900 dark:text-white">
                Help build{" "}
                <em className="not-italic text-[#7A5AF8]">EngPath</em>
              </h1>
              <p className="max-w-[52ch] text-pretty text-[clamp(15px,1.6vw,18px)] leading-[1.65] text-gray-600 dark:text-gray-400">
                You don&apos;t need to know React. Every contribution area is a
                TypeScript data file — add a roadmap domain, write a mindset
                article, or list an open source project.
              </p>
              <div className="mt-2 flex flex-wrap justify-center gap-3">
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7A5AF8] px-6 py-3 text-sm font-semibold text-white shadow-theme-xs transition hover:-translate-y-px hover:bg-[#6941C6] hover:shadow-[0_4px_24px_rgba(122,90,248,0.35)]"
                >
                  Fork on GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={`${GITHUB_REPO_URL}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.10] bg-white dark:bg-white/[0.04] px-6 py-3 text-sm font-medium text-gray-900 dark:text-gray-200 shadow-theme-xs transition hover:-translate-y-px hover:border-gray-300 dark:hover:border-white/[0.18]"
                >
                  <ArrowRight className="h-4 w-4" />
                  View Open Issues
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Quick Start ─────────────────────────────────────────────────── */}
        <section className="py-[86px] bg-white dark:bg-[#0F172A]">
          <div className="wrapper">
            <FadeUp className="mx-auto mb-12 flex max-w-[540px] flex-col items-center gap-4 text-center">
              <p className="eyebrow">Quick Start</p>
              <h2 className="text-[clamp(26px,3.4vw,40px)] font-bold leading-[1.08] tracking-[-0.02em] text-gray-900 dark:text-white">
                Three steps to your first PR
              </h2>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {quickSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <StaggerItem key={step.num}>
                    <div className="group flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6 transition-all hover:-translate-y-[3px] hover:shadow-theme-md hover:border-gray-300 dark:hover:border-white/[0.14]">
                      <div className="flex items-center justify-between">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl"
                          style={{ color: step.color, background: step.bg }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span
                          className="font-mono text-[13px] font-semibold"
                          style={{ color: step.color + "80" }}
                        >
                          {step.num}
                        </span>
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {step.title}
                        </p>
                        <p className="text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-400">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Choose Your Path ────────────────────────────────────────────── */}
        <section className="border-y border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[86px]">
          <div className="wrapper">
            <FadeUp className="mx-auto mb-12 flex max-w-[540px] flex-col items-center gap-4 text-center">
              <p className="eyebrow">Choose Your Path</p>
              <h2 className="text-[clamp(26px,3.4vw,40px)] font-bold leading-[1.08] tracking-[-0.02em] text-gray-900 dark:text-white">
                Pick a contribution area
              </h2>
              <p className="max-w-[46ch] text-pretty text-[clamp(14px,1.5vw,16px)] leading-[1.6] text-gray-600 dark:text-gray-400">
                Each area has step-by-step instructions below. Click a card to
                jump directly to its guide.
              </p>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {areas.map((area) => {
                const Icon = area.icon;
                return (
                  <StaggerItem key={area.id}>
                    <a
                      href={`#${area.id}`}
                      className="group flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6 transition-all hover:-translate-y-[3px] hover:shadow-theme-md hover:border-gray-300 dark:hover:border-white/[0.14]"
                    >
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ color: area.color, background: area.bg }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-[#7A5AF8] transition-colors">
                          {area.label}
                        </p>
                        <p className="text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-400">
                          {area.description}
                        </p>
                      </div>
                      <span
                        className="mt-auto inline-flex items-center gap-1 font-mono text-[11.5px] font-medium transition-colors group-hover:gap-2"
                        style={{ color: area.color }}
                      >
                        Jump to guide
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Roadmap Section ─────────────────────────────────────────────── */}
        <section
          id="roadmap"
          className="scroll-mt-20 py-[86px] bg-white dark:bg-[#0F172A]"
        >
          <div className="wrapper">
            <FadeUp className="mb-10 flex flex-col gap-4">
              <SectionLabel color="#4F8EF7" num="A" text="Roadmap Domain" />
              <h2 className="text-[clamp(24px,3vw,36px)] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900 dark:text-white">
                Add a new career domain
              </h2>
              <p className="max-w-[60ch] text-pretty text-[clamp(14px,1.5vw,16px)] leading-[1.7] text-gray-600 dark:text-gray-400">
                A roadmap domain is a TypeScript object that describes a career
                path: its metadata, color, and an array of skill nodes. Once you
                create the file and register it in the index, it automatically
                appears on the roadmap listing page.
              </p>
            </FadeUp>

            <div className="flex flex-col gap-8">
              {/* Step 1 */}
              <FadeUp className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-[#101828] p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-[13px] font-bold"
                    style={{ color: "#4F8EF7", background: "rgba(79,142,247,0.12)" }}
                  >
                    1
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Create the domain file
                    </p>
                    <p className="text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-400">
                      Create a new folder under{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        src/content/roadmap/
                      </code>{" "}
                      and add an{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        index.ts
                      </code>{" "}
                      file following the{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        RoadmapDomain
                      </code>{" "}
                      type.
                    </p>
                  </div>
                </div>
                <CodeBlock code={ROADMAP_STEP1} />
              </FadeUp>

              {/* Step 2 */}
              <FadeUp className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-[#101828] p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-[13px] font-bold"
                    style={{ color: "#4F8EF7", background: "rgba(79,142,247,0.12)" }}
                  >
                    2
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Register the domain
                    </p>
                    <p className="text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-400">
                      Open{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        src/content/roadmap/index.ts
                      </code>{" "}
                      and add your domain to the imports and the{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        roadmapDomains
                      </code>{" "}
                      array. That&apos;s it — the page renders automatically.
                    </p>
                  </div>
                </div>
                <CodeBlock code={ROADMAP_STEP2} />
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── Mindset Section ──────────────────────────────────────────────── */}
        <section
          id="mindset"
          className="scroll-mt-20 border-t border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[86px]"
        >
          <div className="wrapper">
            <FadeUp className="mb-10 flex flex-col gap-4">
              <SectionLabel color="#8B7CF8" num="B" text="Mindset Article" />
              <h2 className="text-[clamp(24px,3vw,36px)] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900 dark:text-white">
                Write a mindset article
              </h2>
              <p className="max-w-[60ch] text-pretty text-[clamp(14px,1.5vw,16px)] leading-[1.7] text-gray-600 dark:text-gray-400">
                Articles are written with a structured block format — no MDX,
                no markdown files, just TypeScript. Each block is typed so you
                always know exactly what fields are required. Three registrations
                are needed across two files.
              </p>
            </FadeUp>

            <div className="flex flex-col gap-8">
              {/* Step 1 */}
              <FadeUp className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-[13px] font-bold"
                    style={{ color: "#8B7CF8", background: "rgba(139,124,248,0.12)" }}
                  >
                    1
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Create the article content file
                    </p>
                    <p className="text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-400">
                      Create{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        src/content/mindset/your-article/index.ts
                      </code>{" "}
                      and fill in the{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        MindsetArticleContent
                      </code>{" "}
                      shape. Available block kinds:{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        p, h2, h3, callout, list, quote, code, conversation, takeaways, refs
                      </code>
                      .
                    </p>
                  </div>
                </div>
                <CodeBlock code={MINDSET_STEP1} />
              </FadeUp>

              {/* Step 2 */}
              <FadeUp className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-[13px] font-bold"
                    style={{ color: "#8B7CF8", background: "rgba(139,124,248,0.12)" }}
                  >
                    2
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Register in the content index
                    </p>
                    <p className="text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-400">
                      Import your article in{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        src/content/mindset/index.ts
                      </code>{" "}
                      and add it to the internal articles array. This is what the
                      slug-based article page uses to resolve content.
                    </p>
                  </div>
                </div>
                <CodeBlock code={MINDSET_STEP2} />
              </FadeUp>

              {/* Step 3 */}
              <FadeUp className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-[13px] font-bold"
                    style={{ color: "#8B7CF8", background: "rgba(139,124,248,0.12)" }}
                  >
                    3
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Add display metadata for the listing page
                    </p>
                    <p className="text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-400">
                      Add a lightweight entry to the{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        articles
                      </code>{" "}
                      array in{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        src/app/mindset/data.ts
                      </code>
                      . This drives the card grid on the mindset listing page.
                    </p>
                  </div>
                </div>
                <CodeBlock code={MINDSET_STEP3} />
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── Open Source Section ──────────────────────────────────────────── */}
        <section
          id="opensource"
          className="scroll-mt-20 border-t border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0F172A] py-[86px]"
        >
          <div className="wrapper">
            <FadeUp className="mb-10 flex flex-col gap-4">
              <SectionLabel color="#3BB58F" num="C" text="Open Source Project" />
              <h2 className="text-[clamp(24px,3vw,36px)] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900 dark:text-white">
                List an open source project
              </h2>
              <p className="max-w-[60ch] text-pretty text-[clamp(14px,1.5vw,16px)] leading-[1.7] text-gray-600 dark:text-gray-400">
                The simplest contribution — add one object to a single array.
                The project will appear on the open source page, sorted and
                filtered by difficulty automatically.
              </p>
            </FadeUp>

            <div className="flex flex-col gap-8">
              <FadeUp className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-[#101828] p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-[13px] font-bold"
                    style={{ color: "#3BB58F", background: "rgba(59,181,143,0.12)" }}
                  >
                    1
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Add the project to the data array
                    </p>
                    <p className="text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-400">
                      Open{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        src/app/opensource/data.ts
                      </code>{" "}
                      and append an object to the{" "}
                      <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px] text-gray-800 dark:text-gray-200">
                        projects
                      </code>{" "}
                      array. The difficulty level controls which section it appears
                      in on the page.
                    </p>
                  </div>
                </div>
                <CodeBlock code={OPENSOURCE_STEP1} />
              </FadeUp>

              {/* Info box */}
              <FadeUp>
                <div className="rounded-2xl border border-[#3BB58F]/30 bg-[#3BB58F]/[0.06] p-5">
                  <p className="font-semibold text-[#3BB58F]">Tip</p>
                  <p className="mt-1 text-[13.5px] leading-[1.65] text-gray-700 dark:text-gray-300">
                    The{" "}
                    <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px]">
                      href
                    </code>{" "}
                    field links to an internal detail page (
                    <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px]">
                      /opensource/[slug]
                    </code>
                    ), while{" "}
                    <code className="rounded bg-gray-200 dark:bg-white/[0.08] px-1.5 py-0.5 font-mono text-[12px]">
                      githubUrl
                    </code>{" "}
                    links directly to the GitHub repository. Both are optional — you can
                    provide one, both, or neither and only include the card metadata.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── PR Guidelines ─────────────────────────────────────────────────── */}
        <section className="border-t border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[86px]">
          <div className="wrapper">
            <FadeUp className="mx-auto mb-12 flex max-w-[540px] flex-col items-center gap-4 text-center">
              <p className="eyebrow">Before You Submit</p>
              <h2 className="text-[clamp(26px,3.4vw,40px)] font-bold leading-[1.08] tracking-[-0.02em] text-gray-900 dark:text-white">
                PR guidelines
              </h2>
              <p className="max-w-[46ch] text-pretty text-[clamp(14px,1.5vw,16px)] leading-[1.6] text-gray-600 dark:text-gray-400">
                Run through this checklist before opening your pull request to
                keep the review process fast.
              </p>
            </FadeUp>

            <StaggerContainer className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
              {guidelines.map((g) => (
                <StaggerItem key={g.title}>
                  <div className="flex items-start gap-3 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-5">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#7A5AF8]/10 text-[#7A5AF8]">
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor">
                        <path d="M10.28 2.28L4.5 8.06 1.72 5.28a1 1 0 00-1.44 1.44l3.5 3.5a1 1 0 001.44 0l6.5-6.5a1 1 0 00-1.44-1.44z" />
                      </svg>
                    </span>
                    <div className="flex flex-col gap-[3px]">
                      <p className="text-[13.5px] font-semibold text-gray-900 dark:text-white">
                        {g.title}
                      </p>
                      <p className="text-[13px] leading-[1.6] text-gray-600 dark:text-gray-400">
                        {g.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="border-t border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0F172A] py-[86px]">
          <div className="wrapper">
            <FadeUp className="flex flex-col items-center gap-5 text-center">
              <p className="eyebrow">Get Started</p>
              <h2 className="max-w-[22ch] text-balance text-[clamp(26px,3.4vw,40px)] font-bold leading-[1.08] tracking-[-0.02em] text-gray-900 dark:text-white">
                Ready to open your first PR?
              </h2>
              <p className="max-w-[46ch] text-pretty text-[clamp(14px,1.5vw,16px)] leading-[1.6] text-gray-600 dark:text-gray-400">
                Fork the repo, pick an area above, and open a pull request.
                The maintainers are friendly and will help you get merged.
              </p>
              <div className="mt-2 flex flex-wrap justify-center gap-3">
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7A5AF8] px-6 py-3 text-sm font-semibold text-white shadow-theme-xs transition hover:-translate-y-px hover:bg-[#6941C6] hover:shadow-[0_4px_24px_rgba(122,90,248,0.35)]"
                >
                  Fork on GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  href="/opensource"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.10] bg-white dark:bg-white/[0.04] px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-theme-xs transition hover:-translate-y-px hover:border-gray-300 dark:hover:border-white/[0.18]"
                >
                  Browse Open Source
                  <ArrowRight className="h-4 w-4" />
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
