"use client";

import React, { useState, type ComponentType } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Layers, Server, Smartphone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeUp } from "@/components/ui/motion";

interface Domain {
  id: string;
  label: string;
  color: string;
  Icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  nodes: { title: string; type: "core" | "optional"; level: 1 | 2 | 3 }[];
}

const domains: Domain[] = [
  {
    id: "backend",
    label: "Backend",
    color: "#4F8EF7",
    Icon: Code2,
    nodes: [
      { title: "HTTP & REST", type: "core", level: 1 },
      { title: "Node.js / Python", type: "core", level: 1 },
      { title: "SQL Databases", type: "core", level: 2 },
      { title: "Authentication & JWT", type: "core", level: 2 },
      { title: "System Design Basics", type: "core", level: 3 },
      { title: "Caching (Redis)", type: "optional", level: 3 },
      { title: "Message Queues", type: "optional", level: 3 },
      { title: "Microservices", type: "optional", level: 3 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    color: "#8B7CF8",
    Icon: Layers,
    nodes: [
      { title: "HTML & CSS Basics", type: "core", level: 1 },
      { title: "JavaScript (ES6+)", type: "core", level: 1 },
      { title: "React / Vue", type: "core", level: 2 },
      { title: "TypeScript", type: "core", level: 2 },
      { title: "Performance & Web Vitals", type: "core", level: 3 },
      { title: "Next.js / Nuxt", type: "optional", level: 3 },
      { title: "CSS Architecture", type: "optional", level: 3 },
      { title: "Testing (Vitest / RTL)", type: "optional", level: 3 },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    color: "#3BB58F",
    Icon: Server,
    nodes: [
      { title: "Linux & Shell", type: "core", level: 1 },
      { title: "Git & Version Control", type: "core", level: 1 },
      { title: "Docker & Containers", type: "core", level: 2 },
      { title: "CI/CD Pipelines", type: "core", level: 2 },
      { title: "Cloud Platforms", type: "core", level: 3 },
      { title: "Kubernetes", type: "optional", level: 3 },
      { title: "Infrastructure as Code", type: "optional", level: 3 },
      { title: "Monitoring & Observability", type: "optional", level: 3 },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    color: "#F39B52",
    Icon: Smartphone,
    nodes: [
      { title: "React Native Basics", type: "core", level: 1 },
      { title: "Mobile UI Patterns", type: "core", level: 1 },
      { title: "Navigation (Expo Router)", type: "core", level: 2 },
      { title: "State Management", type: "core", level: 2 },
      { title: "Native APIs & Permissions", type: "core", level: 3 },
      { title: "Push Notifications", type: "optional", level: 3 },
      { title: "App Store Deployment", type: "optional", level: 3 },
      { title: "Flutter (optional)", type: "optional", level: 3 },
    ],
  },
];

const levelLabel: Record<1 | 2 | 3, string> = {
  1: "Foundation",
  2: "Intermediate",
  3: "Advanced",
};

export default function AIToolsTabs() {
  const [active, setActive] = useState("backend");
  const domain = domains.find((d) => d.id === active) ?? domains[0];

  return (
    <section className="py-[88px] bg-white dark:bg-[#0F172A]">
      <div className="wrapper">
        {/* Section head */}
        <FadeUp className="mx-auto mb-11 flex max-w-[640px] flex-col items-center gap-4 text-center">
          <p className="eyebrow">Roadmap Preview</p>
          <h2 className="section-title">See what each path looks like</h2>
          <p className="section-sub mx-auto text-center">
            Every roadmap is broken into clear levels — foundation to advanced —
            so you always know what to learn next.
          </p>
        </FadeUp>

        {/* Domain tabs */}
        <FadeUp delay={0.1} className="mx-auto mb-6 flex max-w-fit gap-1.5 overflow-x-auto rounded-full border border-gray-200 dark:border-white/[0.08] bg-gray-100 dark:bg-white/[0.04] p-1">
          {domains.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`flex h-10 shrink-0 items-center gap-2 rounded-full px-5 text-[13.5px] font-medium transition-all duration-200 ${
                active === d.id
                  ? "bg-white dark:bg-white/[0.10] shadow-theme-xs"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 hover:bg-white/60 dark:hover:bg-white/[0.05]"
              }`}
              style={
                active === d.id
                  ? { color: d.color }
                  : {}
              }
            >
              <d.Icon
                className="h-3.5 w-3.5"
                style={{ color: active === d.id ? d.color : undefined }}
              />
              {d.label}
            </button>
          ))}
        </FadeUp>

        {/* Roadmap node grid with AnimatePresence */}
        <FadeUp delay={0.15}>
          <div className="rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6 shadow-theme-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {([1, 2, 3] as const).map((level) => (
                    <div key={level} className="flex flex-col gap-3">
                      <p
                        className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.07em]"
                        style={{ color: domain.color }}
                      >
                        {levelLabel[level]}
                      </p>
                      {domain.nodes
                        .filter((n) => n.level === level)
                        .map((node) => (
                          <div
                            key={node.title}
                            className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-[13px] font-medium ${
                              node.type === "core"
                                ? "border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.04] text-gray-900 dark:text-white"
                                : "border-dashed border-gray-200 dark:border-white/[0.05] text-gray-500 dark:text-gray-500"
                            }`}
                          >
                            <span
                              className="h-2 w-2 shrink-0 rounded-full"
                              style={{
                                background:
                                  node.type === "core"
                                    ? domain.color
                                    : "currentColor",
                                opacity: node.type === "core" ? 1 : 0.35,
                              }}
                            />
                            {node.title}
                            {node.type === "optional" && (
                              <span className="ml-auto font-mono text-[10px] text-gray-400 dark:text-gray-600">
                                opt
                              </span>
                            )}
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Footer CTA */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 dark:border-white/[0.06] pt-5">
              <p className="text-[13px] text-gray-500 dark:text-gray-500">
                Preview only — the full roadmap has many more skill nodes.
              </p>
              <Link
                href={`/roadmap/${domain.id}`}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white shadow-theme-xs transition hover:brightness-110 hover:-translate-y-px"
                style={{ background: domain.color }}
              >
                Full {domain.label} Roadmap
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
