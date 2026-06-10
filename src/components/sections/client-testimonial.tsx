import Link from "next/link";
import { BrainCircuit, Target, Puzzle, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const mindsetPrinciples = [
  {
    Icon: Target,
    title: "First-principles thinking",
    body: "Break any problem down to its fundamental truths rather than reasoning by analogy. Engineers who think from first principles build better solutions.",
  },
  {
    Icon: Puzzle,
    title: "Systems over tasks",
    body: "Great engineers don't just complete tickets — they understand the system. Developing a systems mindset separates good engineers from great ones.",
  },
  {
    Icon: BrainCircuit,
    title: "Comfort with ambiguity",
    body: "Real engineering problems are rarely well-defined. Learning to decompose vague requirements into concrete actions is the most underrated skill.",
  },
];

export default function ClientTestimonial() {
  return (
    <section className="border-y border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[88px]">
      <div className="wrapper">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <FadeUp className="flex flex-col gap-4">
            <p className="eyebrow">Engineer Mindset</p>
            <h2 className="section-title">
              Skills are table stakes.
              <br />
              Mindset is the{" "}
              <em className="not-italic gradient-text">differentiator</em>.
            </h2>
            <p className="section-sub">
              EngPath&apos;s mindset library teaches the mental models that senior
              engineers use every day — the stuff you don&apos;t learn from tutorials.
            </p>

            {/* Principles */}
            <StaggerContainer className="mt-2 flex flex-col gap-4">
              {mindsetPrinciples.map(({ Icon, title, body }) => (
                <StaggerItem key={title}>
                  <div className="flex gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#7A5AF8]/10 text-[#7A5AF8]">
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <div>
                      <p className="text-[14.5px] font-semibold text-gray-900 dark:text-white">
                        {title}
                      </p>
                      <p className="mt-1 text-[13.5px] leading-[1.55] text-gray-500 dark:text-gray-400">
                        {body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTAs */}
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href="/mindset"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A5AF8] px-5 py-[9px] text-sm font-semibold text-white shadow-sm transition hover:-translate-y-px hover:bg-[#6941C6] hover:shadow-[0_4px_24px_rgba(122,90,248,0.35)]"
              >
                Read Mindset Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.10] bg-white dark:bg-white/[0.04] px-5 py-[9px] text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm transition hover:-translate-y-px hover:border-gray-300 dark:hover:border-white/[0.18]"
              >
                Explore Roadmaps
              </Link>
            </div>
          </FadeUp>

          {/* Right: code block mockup */}
          <FadeUp delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-[#1E2A3A] bg-[#0D1520] shadow-theme-md">
              {/* Window chrome */}
              <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
                <div className="flex gap-[6px]">
                  <span className="h-[11px] w-[11px] rounded-full bg-[#e0686a]" />
                  <span className="h-[11px] w-[11px] rounded-full bg-[#e3a93c]" />
                  <span className="h-[11px] w-[11px] rounded-full bg-[#58b368]" />
                </div>
                <span className="font-mono text-xs text-[#5A6880]">
                  mindset/first-principles.md
                </span>
              </div>
              {/* Code content */}
              <pre className="overflow-x-auto px-5 py-[18px]">
                <code className="font-mono text-[12.5px] leading-[1.75] text-[#8BA0BC] whitespace-pre">
                  {`# First-Principles Thinking

> "If you can't explain it simply,
>  you don't understand it well enough."

## What it means for engineers

When you face a hard bug or architecture
decision, don't copy the first Stack
Overflow answer.

Instead, ask:

  1. What problem am I actually solving?
  2. What are the constraints?
  3. What is the simplest correct solution?

## Example

Instead of: "Everyone uses Redis for
caching, so I'll use Redis."

Ask: "Do I need distributed caching?
What's the access pattern? Can I solve
this with a simple Map first?"`}
                </code>
              </pre>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
