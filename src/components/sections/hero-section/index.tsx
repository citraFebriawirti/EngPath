"use client";

import Link from "next/link";
import { ArrowRight, Route, Layers, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0F172A]">
      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(122,90,248,0.20) 0%, transparent 65%)",
        }}
      />

      {/* Floating blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span
          className="floating-1 absolute rounded-full blur-[80px]"
          style={{
            width: 440,
            height: 440,
            left: "5%",
            top: "-8%",
            background: "rgba(122,90,248,0.18)",
          }}
        />
        <span
          className="floating-2 absolute rounded-full blur-[80px]"
          style={{
            width: 380,
            height: 380,
            right: "4%",
            top: "2%",
            background: "rgba(167,134,252,0.14)",
          }}
        />
        <span
          className="floating-3 absolute rounded-full blur-[100px]"
          style={{
            width: 500,
            height: 300,
            left: "35%",
            top: "28%",
            background: "rgba(45,11,112,0.10)",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="wrapper relative z-10 flex flex-col items-center py-28 text-center lg:py-36"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7A5AF8]/20 bg-[#7A5AF8]/8 px-4 py-1.5 font-mono text-[12.5px] font-medium text-[#7A5AF8] dark:text-[#A688FC]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7A5AF8] pulse-dot" />
            Open Source · Free Forever
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="mt-6 max-w-[18ch] text-balance text-[clamp(38px,6vw,68px)] font-bold leading-[1.05] tracking-[-0.035em] text-gray-900 dark:text-white"
        >
          Not just{" "}
          <span className="relative text-gray-300 dark:text-gray-700">
            learning to code
            <span className="absolute left-[-2%] right-[-2%] top-[53%] h-[2.5px] -rotate-[2.5deg] rounded-full bg-gray-300 dark:bg-gray-700" />
          </span>
          ,{" "}
          <span className="gradient-text">think like an engineer</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={item}
          className="mt-6 max-w-[54ch] text-pretty text-[clamp(16px,1.9vw,19px)] leading-relaxed text-gray-500 dark:text-gray-400"
        >
          Explore structured skill roadmaps, connect concepts, and build your{" "}
          <strong className="font-semibold text-gray-800 dark:text-gray-200">
            engineering mindset
          </strong>{" "}
          step by step.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/roadmap"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#7A5AF8] px-6 text-[15px] font-semibold text-white shadow-sm transition hover:-translate-y-px hover:bg-[#6941C6] hover:shadow-[0_4px_24px_rgba(122,90,248,0.40)]"
          >
            Explore Roadmap
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/mindset"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.10] bg-white dark:bg-white/[0.04] px-6 text-[15px] font-medium text-gray-700 dark:text-gray-200 shadow-sm transition hover:-translate-y-px hover:border-gray-300 dark:hover:border-white/[0.18] hover:shadow-sm"
          >
            Engineer Mindset
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 font-mono text-[13px] text-gray-400 dark:text-gray-500"
        >
          <span className="inline-flex items-center gap-1.5">
            <Route className="h-3.5 w-3.5 text-[#7A5AF8]" />
            9 career paths
          </span>
          <span className="text-gray-300 dark:text-gray-700">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-[#7A5AF8]" />
            200+ skill nodes
          </span>
          <span className="text-gray-300 dark:text-gray-700">·</span>
          <span className="inline-flex items-center gap-1.5">
            <GitBranch className="h-3.5 w-3.5 text-[#7A5AF8]" />
            Open source
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
