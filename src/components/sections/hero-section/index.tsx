import Link from "next/link";
import { ArrowRight, Route, Layers, GitBranch } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-dark-secondary">
      {/* Aurora background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span
          className="floating-1 absolute rounded-full bg-primary-500 opacity-25 blur-[70px]"
          style={{ width: 420, height: 420, left: "8%", top: "-6%" }}
        />
        <span
          className="floating-2 absolute rounded-full bg-violet-500 opacity-[0.18] blur-[70px]"
          style={{ width: 360, height: 360, right: "6%", top: "4%" }}
        />
        <span
          className="floating-3 absolute rounded-full bg-primary-400 opacity-[0.14] blur-[70px]"
          style={{ width: 480, height: 320, left: "40%", top: "30%" }}
        />
      </div>

      <div className="wrapper relative z-10 flex flex-col items-center py-28 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-800 bg-white dark:bg-dark-primary px-5 py-2 font-mono text-sm font-medium text-gray-600 dark:text-gray-400 shadow-theme-xs">
          <Route className="h-[15px] w-[15px] text-primary-500" />
          Open Source · Free Forever
        </div>

        {/* Heading */}
        <h1 className="mt-7 max-w-[16ch] text-balance text-[clamp(34px,6vw,64px)] font-semibold leading-[1.04] tracking-[-0.035em] text-gray-900 dark:text-gray-50">
          Not just{" "}
          <span className="relative text-gray-400 dark:text-gray-600">
            learning to code
            <span className="absolute left-[-2%] right-[-2%] top-[52%] h-[3px] -rotate-[3deg] rounded-full bg-gray-400 dark:bg-gray-600" />
          </span>
          ,{" "}
          <em className="not-italic text-primary-500">
            think like an engineer
          </em>
        </h1>

        {/* Sub */}
        <p className="mt-6 max-w-[56ch] text-pretty text-[clamp(16px,2vw,19px)] leading-relaxed text-gray-600 dark:text-gray-400">
          Explore structured skill roadmaps, connect concepts, and build your{" "}
          <strong className="font-medium text-gray-900 dark:text-gray-50">
            engineering mindset
          </strong>{" "}
          step by step.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-[15.5px] font-medium text-white shadow-theme-xs transition hover:-translate-y-px hover:shadow-theme-sm hover:brightness-105"
          >
            Explore Roadmap
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/mindset"
            className="inline-flex items-center gap-2 rounded-full border border-gray-400 dark:border-gray-700 bg-white dark:bg-dark-primary px-6 py-3 text-[15.5px] font-medium text-gray-900 dark:text-gray-50 shadow-theme-xs transition hover:-translate-y-px hover:border-gray-500 dark:hover:border-gray-600 hover:shadow-theme-sm"
          >
            Engineer Mindset
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-[13.5px] text-gray-500 dark:text-gray-500">
          <span className="inline-flex items-center gap-[6px]">
            <Route className="h-[15px] w-[15px] text-primary-500" />
            9 career paths
          </span>
          <span className="text-gray-400 dark:text-gray-700">·</span>
          <span className="inline-flex items-center gap-[6px]">
            <Layers className="h-[15px] w-[15px] text-primary-500" />
            200+ skill nodes
          </span>
          <span className="text-gray-400 dark:text-gray-700">·</span>
          <span className="inline-flex items-center gap-[6px]">
            <GitBranch className="h-[15px] w-[15px] text-primary-500" />
            Open source
          </span>
        </div>
      </div>
    </section>
  );
}
