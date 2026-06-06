import Image from "next/image";
import Link from "next/link";
import HeroLogos from "../hero-logos";
import { Subheading } from "./subheading";
import { IntroVideo } from "./intro-video";
import { Search, Sparkles, ArrowRight, Braces, Code2, Database, Terminal, Cpu, GitBranch } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-16 relative overflow-hidden dark:bg-[#171F2E]">
      <div className="max-w-[120rem] mx-auto relative">
        <div className="wrapper">
          <div className="max-w-[1000px] mx-auto relative">
            <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl">
              {/* Background */}
              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[140px]" />

                <div className="absolute left-20 top-20 h-3 w-3 rounded-full bg-primary-500" />
                <div className="absolute left-52 top-36 h-3 w-3 rounded-full bg-blue-500" />
                <div className="absolute right-40 top-28 h-3 w-3 rounded-full bg-violet-500" />
                <div className="absolute right-72 top-52 h-3 w-3 rounded-full bg-cyan-500" />

                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `
                    linear-gradient(to right,currentColor 1px,transparent 1px),
                    linear-gradient(to bottom,currentColor 1px,transparent 1px)
                  `,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              <div className="relative z-20 px-8 py-24">
                {/* Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-5 py-2 text-sm">
                    <Sparkles size={15} />
                    Open Source . Free Forever
                  </div>
                </div>

                {/* Heading */}
                <h1 className="mx-auto mt-8 max-w-4xl text-center text-5xl font-bold leading-tight md:text-7xl">
                  Not just learning to code,
                  <span className="block bg-gradient-to-r from-primary-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">learn to think like an engineer</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-500 dark:text-gray-400">Explore structured learning paths, connect concepts, and build your skills step by step.</p>

                {/* Search Hero */}
                <div className="mx-auto mt-12 max-w-4xl">
                  <div className="group relative">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/30 via-blue-500/20 to-violet-500/30 blur-xl" />

                    <div className="relative flex items-center rounded-3xl border border-white/20 bg-white dark:bg-[#0F172A] p-3 shadow-2xl">
                      <Search size={24} className="ml-4 text-gray-400" />

                      <input placeholder="Search React, Next.js, Backend, AI Engineer..." className="flex-1 bg-transparent px-4 py-4 text-lg outline-none" />

                      <button className="rounded-2xl bg-primary-500 px-6 py-4 text-white transition hover:bg-primary-600">Search</button>
                    </div>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {["Frontend", "Backend", "React", "Next.js", "TypeScript", "Node.js", "DevOps", "AI"].map((item) => (
                    <button
                      key={item}
                      className="
            rounded-full
            border
            border-white/10
            bg-white/70
            dark:bg-white/[0.03]
            px-4
            py-2
            text-sm
            transition-all
            hover:scale-105
            hover:border-primary-500
            hover:text-primary-500
          "
                    >
                      #{item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden xl:block pointer-events-none absolute inset-0">
          {/* Left Top */}
          <div
            className="
      absolute
      left-[5%]
      top-[15%]
      floating-1
      rounded-2xl
      border border-white/10
      bg-white/10
      backdrop-blur-md
      p-4
    "
          >
            <Code2 className="h-10 w-10 text-primary-500" />
          </div>

          {/* Left Bottom */}
          <div
            className="
      absolute
      left-[8%]
      bottom-[20%]
      floating-2
      rounded-2xl
      border border-white/10
      bg-white/10
      backdrop-blur-md
      p-4
    "
          >
            <Database className="h-10 w-10 text-blue-500" />
          </div>

          {/* Right Top */}
          <div
            className="
      absolute
      right-[5%]
      top-[18%]
      floating-3
      rounded-2xl
      border border-white/10
      bg-white/10
      backdrop-blur-md
      p-4
    "
          >
            <GitBranch className="h-10 w-10 text-violet-500" />
          </div>

          {/* Right Bottom */}
          <div
            className="
      absolute
      right-[8%]
      bottom-[22%]
      floating-1
      rounded-2xl
      border border-white/10
      bg-white/10
      backdrop-blur-md
      p-4
    "
          >
            <Terminal className="h-10 w-10 text-cyan-500" />
          </div>
        </div>
      </div>
      <div className="hero-glow-bg pointer-events-none absolute z-10 w-full h-[420px] -bottom-48"></div>
    </section>
  );
}
