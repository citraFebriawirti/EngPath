"use client";

import { useState, type ComponentType } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Layers, Server, Smartphone } from "lucide-react";

interface Domain {
  id: string;
  label: string;
  color: string;
  Icon: ComponentType<{ className?: string }>;
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
    <section className="py-[86px]">
      <div className="wrapper">
        {/* Section head — centered */}
        <div className="mx-auto mb-11 flex max-w-[640px] flex-col items-center gap-[14px] text-center">
          <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
            Roadmap Preview
          </p>
          <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance text-gray-900 dark:text-gray-50">
            See what each path looks like
          </h2>
          <p className="max-w-[46ch] text-pretty text-[clamp(15px,1.6vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-500">
            Every roadmap is broken into clear levels — foundation to advanced —
            so you always know what to learn next.
          </p>
        </div>

        {/* Domain tabs */}
        <div className="mx-auto mb-6 flex max-w-fit gap-2 overflow-x-auto rounded-full border border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-dark-primary p-1">
          {domains.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`flex h-11 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors ${
                active === d.id
                  ? "bg-white dark:bg-[#1A1E1C] text-gray-900 dark:text-gray-50 shadow-theme-xs"
                  : "text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
              }`}
            >
              <d.Icon
                className="h-4 w-4"
                style={{ color: active === d.id ? d.color : undefined }}
              />
              {d.label}
            </button>
          ))}
        </div>

        {/* Roadmap node grid */}
        <div className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-dark-primary p-6 shadow-theme-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {([1, 2, 3] as const).map((level) => (
              <div key={level} className="flex flex-col gap-3">
                <p
                  className="mb-1 font-mono text-[11.5px] font-medium uppercase tracking-[0.06em]"
                  style={{ color: domain.color }}
                >
                  {levelLabel[level]}
                </p>
                {domain.nodes
                  .filter((n) => n.level === level)
                  .map((node) => (
                    <div
                      key={node.title}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-[13.5px] font-medium ${
                        node.type === "core"
                          ? "border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-[#1A1E1C] text-gray-900 dark:text-gray-50"
                          : "border-dashed border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-500"
                      }`}
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{
                          background:
                            node.type === "core" ? domain.color : "currentColor",
                          opacity: node.type === "core" ? 1 : 0.35,
                        }}
                      />
                      {node.title}
                      {node.type === "optional" && (
                        <span className="ml-auto font-mono text-[10.5px] text-gray-400 dark:text-gray-600">
                          opt
                        </span>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-300 dark:border-gray-800 pt-5">
            <p className="text-[13.5px] text-gray-600 dark:text-gray-500">
              Preview only — the full roadmap has many more skill nodes.
            </p>
            <Link
              href={`/roadmap/${domain.id}`}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-medium text-white shadow-theme-xs transition hover:brightness-105"
              style={{ background: domain.color }}
            >
              Full {domain.label} Roadmap
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
