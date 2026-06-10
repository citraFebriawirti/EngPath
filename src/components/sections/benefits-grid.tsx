import { Route, BrainCircuit, GitFork, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const steps = [
  {
    num: "01",
    Icon: Route,
    color: "#7A5AF8",
    bg: "rgba(122,90,248,0.10)",
    title: "Pick Your Roadmap",
    body: "Choose a career domain — Backend, Frontend, DevOps, or any of the 9 paths. Each roadmap breaks down exactly which skills to learn and in what order.",
    href: "/roadmap",
    cta: "Browse roadmaps",
  },
  {
    num: "02",
    Icon: BrainCircuit,
    color: "#A688FC",
    bg: "rgba(166,136,252,0.10)",
    title: "Build Engineer Mindset",
    body: "Technical skills alone aren't enough. Learn how engineers think — systems thinking, debugging strategies, architecture decisions, and handling ambiguity.",
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
    <section className="border-y border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[88px]">
      <div className="wrapper">
        {/* Section head */}
        <FadeUp className="mx-auto mb-12 flex max-w-[640px] flex-col items-center gap-4 text-center">
          <p className="eyebrow">How It Works</p>
          <h2 className="section-title">
            Three pillars of the EngPath learning system
          </h2>
          <p className="section-sub mx-auto text-center">
            EngPath isn&apos;t just a list of skills. It&apos;s a system that combines
            structured roadmaps, mindset training, and real-world projects.
          </p>
        </FadeUp>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {steps.map(({ num, Icon, color, bg, title, body, href, cta }) => (
            <StaggerItem key={num}>
              <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-7 shadow-theme-sm">
                {/* Large background number */}
                <span
                  className="pointer-events-none absolute right-4 top-2 select-none font-mono text-[80px] font-bold leading-none"
                  style={{ color, opacity: 0.06 }}
                >
                  {num}
                </span>

                {/* Icon */}
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: bg, color }}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Step number */}
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.07em] text-gray-400 dark:text-gray-600">
                  Step {num}
                </p>

                {/* Title */}
                <h3 className="text-[18px] font-semibold leading-snug tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h3>

                {/* Body */}
                <p className="flex-1 text-[13.5px] leading-[1.7] text-gray-500 dark:text-gray-400">
                  {body}
                </p>

                {/* CTA link */}
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition hover:opacity-80"
                  style={{ color }}
                >
                  {cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
