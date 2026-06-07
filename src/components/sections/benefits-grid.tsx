import { Route, BrainCircuit, GitFork, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    Icon: Route,
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    title: "Pick Your Roadmap",
    body: "Choose a career domain — Backend, Frontend, DevOps, or any of the 9 paths. Each roadmap breaks down exactly which skills to learn and in what order.",
    href: "/roadmap",
    cta: "Browse roadmaps",
  },
  {
    num: "02",
    Icon: BrainCircuit,
    color: "#8B7CF8",
    bg: "rgba(139,124,248,0.10)",
    title: "Build Engineer Mindset",
    body: "Technical skills alone aren't enough. Learn how engineers think — systems thinking, debugging strategies, architecture decisions, and how to handle ambiguity.",
    href: "/mindset",
    cta: "Read articles",
  },
  {
    num: "03",
    Icon: GitFork,
    color: "#3BB58F",
    bg: "rgba(59,181,143,0.10)",
    title: "Contribute to Open Source",
    body: "Apply what you learn on real projects. Explore curated open source repositories that are beginner-friendly and career-relevant.",
    href: "/opensource",
    cta: "Explore projects",
  },
];

export default function BenefitsGrid() {
  return (
    <section className="border-y border-gray-300 bg-gray-100 dark:border-gray-800 dark:bg-[#141715] py-[86px]">
      <div className="wrapper">
        {/* Section head — centered */}
        <div className="mx-auto mb-11 flex max-w-[640px] flex-col items-center gap-[14px] text-center">
          <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
            How It Works
          </p>
          <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance text-gray-900 dark:text-gray-50">
            Three pillars of the EngPath learning system
          </h2>
          <p className="max-w-[46ch] text-pretty text-[clamp(15px,1.6vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-500">
            EngPath isn&apos;t just a list of skills. It&apos;s a system that combines
            structured roadmaps, mindset training, and real-world projects.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {steps.map(({ num, Icon, color, bg, title, body, href, cta }) => (
            <div
              key={num}
              className="flex flex-col gap-4 rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-dark-primary p-7 shadow-theme-sm"
            >
              {/* Icon */}
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: bg, color }}
              >
                <Icon className="h-[22px] w-[22px]" />
              </div>

              {/* Step number */}
              <p className="font-mono text-[11.5px] font-medium text-gray-500 dark:text-gray-600">
                STEP {num}
              </p>

              {/* Title */}
              <h3 className="text-[18px] font-semibold leading-snug tracking-tight text-gray-900 dark:text-gray-50">
                {title}
              </h3>

              {/* Body */}
              <p className="flex-1 text-[14px] leading-[1.7] text-gray-600 dark:text-gray-500">
                {body}
              </p>

              {/* CTA link */}
              <Link
                href={href}
                className="inline-flex items-center gap-[6px] text-[13.5px] font-medium"
                style={{ color }}
              >
                {cta}
                <ArrowRight className="h-[14px] w-[14px]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
