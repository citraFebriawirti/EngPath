import Link from "next/link";
import { BrainCircuit, Target, Puzzle, ArrowRight } from "lucide-react";

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
    <section className="border-y border-gray-300 bg-gray-100 dark:border-gray-800 dark:bg-[#141715] py-[86px]">
      <div className="wrapper">
        <div className="grid grid-cols-1 items-center gap-11 lg:grid-cols-2">
          {/* Left: text */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
              Engineer Mindset
            </p>
            <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance text-gray-900 dark:text-gray-50">
              Skills are table stakes.
              <br />
              Mindset is the{" "}
              <em className="not-italic text-primary-500">differentiator</em>.
            </h2>
            <p className="max-w-[46ch] text-pretty text-[clamp(15px,1.6vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-500">
              EngPath&apos;s mindset library teaches the mental models that senior
              engineers use every day — the stuff you don&apos;t learn from tutorials.
            </p>

            {/* Steps */}
            <div className="mt-2 flex flex-col gap-4">
              {mindsetPrinciples.map(({ Icon, title, body }) => (
                <div key={title} className="flex gap-[13px]">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-primary-500/10 text-primary-500">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="text-[14.5px] font-semibold text-gray-900 dark:text-gray-50">
                      {title}
                    </p>
                    <p className="mt-1 text-[13.5px] leading-[1.5] text-gray-600 dark:text-gray-500">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href="/mindset"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-[9px] text-sm font-medium text-white shadow-theme-xs transition hover:-translate-y-px hover:brightness-105"
              >
                Read Mindset Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 rounded-full border border-gray-400 dark:border-gray-700 bg-white dark:bg-dark-primary px-5 py-[9px] text-sm font-medium text-gray-900 dark:text-gray-50 shadow-theme-xs transition hover:-translate-y-px"
              >
                Explore Roadmaps
              </Link>
            </div>
          </div>

          {/* Right: code block mockup */}
          <div className="overflow-hidden rounded-2xl border border-[#232a33] bg-[#14181f] shadow-theme-md dark:border-gray-800 dark:bg-[#0a0d0c]">
            {/* Window chrome */}
            <div className="flex items-center gap-3 border-b border-white/[0.07] bg-white/[0.03] px-4 py-3">
              <div className="flex gap-[6px]">
                <span className="h-[11px] w-[11px] rounded-full bg-[#e0686a]" />
                <span className="h-[11px] w-[11px] rounded-full bg-[#e3a93c]" />
                <span className="h-[11px] w-[11px] rounded-full bg-[#58b368]" />
              </div>
              <span className="font-mono text-xs text-[#8b95a3]">
                mindset/first-principles.md
              </span>
            </div>
            {/* Code content */}
            <pre className="overflow-x-auto px-5 py-[18px]">
              <code className="font-mono text-[12.5px] leading-[1.75] text-[#c6cdd6] whitespace-pre">
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
        </div>
      </div>
    </section>
  );
}
