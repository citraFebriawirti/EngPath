import type { ComponentType } from "react";
import Link from "next/link";
import {
  Code2, Layers, Server, Smartphone, Shield,
  BarChart2, Bug, Database, Briefcase, ArrowRight,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface PathCard {
  slug: string;
  label: string;
  flag: string;
  description: string;
  meta: { nodes: number; hours: number };
  color: string;
  bg: string;
  Icon: ComponentType<{ className?: string }>;
}

const paths: PathCard[] = [
  {
    slug: "backend", label: "Backend", flag: "Core",
    description: "Server-side architecture, APIs, databases and system design for scalable applications.",
    meta: { nodes: 42, hours: 120 }, color: "#4F8EF7", bg: "rgba(79,142,247,0.10)", Icon: Code2,
  },
  {
    slug: "frontend", label: "Frontend", flag: "Core",
    description: "UI engineering, component design, performance, and modern web frameworks.",
    meta: { nodes: 38, hours: 100 }, color: "#8B7CF8", bg: "rgba(139,124,248,0.10)", Icon: Layers,
  },
  {
    slug: "devops", label: "DevOps", flag: "Core",
    description: "CI/CD pipelines, infrastructure-as-code, containers, and cloud platforms.",
    meta: { nodes: 36, hours: 110 }, color: "#3BB58F", bg: "rgba(59,181,143,0.10)", Icon: Server,
  },
  {
    slug: "mobile", label: "Mobile", flag: "Specialization",
    description: "Cross-platform and native mobile development for iOS and Android.",
    meta: { nodes: 30, hours: 90 }, color: "#F39B52", bg: "rgba(243,155,82,0.10)", Icon: Smartphone,
  },
  {
    slug: "security", label: "Security", flag: "Specialization",
    description: "Application security, threat modelling, penetration testing and compliance.",
    meta: { nodes: 28, hours: 80 }, color: "#E06A6A", bg: "rgba(224,106,106,0.10)", Icon: Shield,
  },
  {
    slug: "data", label: "Data Engineering", flag: "Specialization",
    description: "Data pipelines, warehouses, streaming systems and analytical foundations.",
    meta: { nodes: 26, hours: 85 }, color: "#6FA95C", bg: "rgba(111,169,92,0.10)", Icon: BarChart2,
  },
  {
    slug: "qa", label: "QA Engineering", flag: "Specialization",
    description: "Testing strategies, automation frameworks, and quality assurance practices.",
    meta: { nodes: 22, hours: 65 }, color: "#C77DFF", bg: "rgba(199,125,255,0.10)", Icon: Bug,
  },
  {
    slug: "dba", label: "Database Admin", flag: "Specialization",
    description: "Relational and NoSQL database administration, performance tuning and backups.",
    meta: { nodes: 20, hours: 60 }, color: "#8A8A8A", bg: "rgba(138,138,138,0.10)", Icon: Database,
  },
  {
    slug: "business", label: "Business & Tech", flag: "Domain",
    description: "Product management, technical communication, and engineering leadership skills.",
    meta: { nodes: 18, hours: 55 }, color: "#5C9CE6", bg: "rgba(92,156,230,0.10)", Icon: Briefcase,
  },
];

export function CoreFeatures() {
  return (
    <section className="py-[88px] bg-white dark:bg-[#0F172A]">
      <div className="wrapper">
        {/* Section head */}
        <FadeUp className="mb-12 flex flex-col gap-4">
          <p className="eyebrow">Choose Your Path</p>
          <h2 className="section-title">
            9 structured career roadmaps
          </h2>
          <p className="section-sub">
            From backend to security — pick a domain and follow a clear,
            step-by-step skill progression built for real engineering careers.
          </p>
        </FadeUp>

        {/* Path grid */}
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map(({ slug, label, flag, description, meta, color, bg, Icon }) => (
            <StaggerItem key={slug}>
              <Link
                href={`/roadmap/${slug}`}
                className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-white/[0.14] hover:shadow-theme-md"
              >
                {/* Left accent bar */}
                <span
                  className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full opacity-0 transition-opacity duration-200 group-hover:opacity-80"
                  style={{ background: color }}
                />

                {/* Top row: icon + flag */}
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: bg, color }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className="rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold"
                    style={{ background: bg, color }}
                  >
                    {flag}
                  </span>
                </div>

                {/* Title */}
                <p className="text-[17px] font-semibold tracking-[-0.01em] text-gray-900 dark:text-white">
                  {label}
                </p>

                {/* Description */}
                <p className="flex-1 text-[13.5px] leading-[1.6] text-gray-500 dark:text-gray-400">
                  {description}
                </p>

                {/* Meta */}
                <div className="flex gap-3 font-mono text-[12px] text-gray-400 dark:text-gray-600">
                  <span>{meta.nodes} nodes</span>
                  <span>~{meta.hours}h</span>
                </div>

                {/* CTA */}
                <div
                  className="mt-0.5 flex items-center gap-1.5 text-[13px] font-semibold"
                  style={{ color }}
                >
                  Start path
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
