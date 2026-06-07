import type { ComponentType } from "react";
import Link from "next/link";
import {
  Code2,
  Layers,
  Server,
  Smartphone,
  Shield,
  BarChart2,
  Bug,
  Database,
  Briefcase,
  ArrowRight,
} from "lucide-react";

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
    slug: "backend",
    label: "Backend",
    flag: "Core",
    description:
      "Server-side architecture, APIs, databases and system design for scalable applications.",
    meta: { nodes: 42, hours: 120 },
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    Icon: Code2,
  },
  {
    slug: "frontend",
    label: "Frontend",
    flag: "Core",
    description:
      "UI engineering, component design, performance, and modern web frameworks.",
    meta: { nodes: 38, hours: 100 },
    color: "#8B7CF8",
    bg: "rgba(139,124,248,0.10)",
    Icon: Layers,
  },
  {
    slug: "devops",
    label: "DevOps",
    flag: "Core",
    description:
      "CI/CD pipelines, infrastructure-as-code, containers, and cloud platforms.",
    meta: { nodes: 36, hours: 110 },
    color: "#3BB58F",
    bg: "rgba(59,181,143,0.10)",
    Icon: Server,
  },
  {
    slug: "mobile",
    label: "Mobile",
    flag: "Specialization",
    description:
      "Cross-platform and native mobile development for iOS and Android.",
    meta: { nodes: 30, hours: 90 },
    color: "#F39B52",
    bg: "rgba(243,155,82,0.10)",
    Icon: Smartphone,
  },
  {
    slug: "security",
    label: "Security",
    flag: "Specialization",
    description:
      "Application security, threat modelling, penetration testing and compliance.",
    meta: { nodes: 28, hours: 80 },
    color: "#E06A6A",
    bg: "rgba(224,106,106,0.10)",
    Icon: Shield,
  },
  {
    slug: "data",
    label: "Data Engineering",
    flag: "Specialization",
    description:
      "Data pipelines, warehouses, streaming systems and analytical foundations.",
    meta: { nodes: 26, hours: 85 },
    color: "#6FA95C",
    bg: "rgba(111,169,92,0.10)",
    Icon: BarChart2,
  },
  {
    slug: "qa",
    label: "QA Engineering",
    flag: "Specialization",
    description:
      "Testing strategies, automation frameworks, and quality assurance practices.",
    meta: { nodes: 22, hours: 65 },
    color: "#C77DFF",
    bg: "rgba(199,125,255,0.10)",
    Icon: Bug,
  },
  {
    slug: "dba",
    label: "Database Admin",
    flag: "Specialization",
    description:
      "Relational and NoSQL database administration, performance tuning and backups.",
    meta: { nodes: 20, hours: 60 },
    color: "#8A8A8A",
    bg: "rgba(138,138,138,0.10)",
    Icon: Database,
  },
  {
    slug: "business",
    label: "Business & Tech",
    flag: "Domain",
    description:
      "Product management, technical communication, and engineering leadership skills.",
    meta: { nodes: 18, hours: 55 },
    color: "#5C9CE6",
    bg: "rgba(92,156,230,0.10)",
    Icon: Briefcase,
  },
];

export function CoreFeatures() {
  return (
    <section className="py-[86px]">
      <div className="wrapper">
        {/* Section head */}
        <div className="mb-11 flex flex-col gap-[14px]">
          <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
            Choose Your Path
          </p>
          <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance text-gray-900 dark:text-gray-50">
            9 structured career roadmaps
          </h2>
          <p className="max-w-[46ch] text-pretty text-[clamp(15px,1.6vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-500">
            From backend to security — pick a domain and follow a clear,
            step-by-step skill progression built for real engineering careers.
          </p>
        </div>

        {/* Path grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map(({ slug, label, flag, description, meta, color, bg, Icon }) => (
            <Link
              key={slug}
              href={`/roadmap/${slug}`}
              className="group relative flex flex-col gap-[10px] overflow-hidden rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-dark-primary p-[22px] transition-all duration-[220ms] hover:-translate-y-[3px] hover:border-gray-400 dark:hover:border-gray-700 hover:shadow-theme-md"
            >
              {/* Left accent bar */}
              <span
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full opacity-0 transition-opacity duration-200 group-hover:opacity-75"
                style={{ background: color }}
              />

              {/* Top row: icon + flag */}
              <div className="flex items-center justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: bg, color }}
                >
                  <Icon className="h-[22px] w-[22px]" />
                </div>
                <span
                  className="rounded-full px-[9px] py-[3px] font-mono text-[10.5px] font-medium"
                  style={{ background: bg, color }}
                >
                  {flag}
                </span>
              </div>

              {/* Title */}
              <p className="text-[17.5px] font-semibold tracking-[-0.01em] text-gray-900 dark:text-gray-50">
                {label}
              </p>

              {/* Description */}
              <p className="flex-1 text-[14px] leading-[1.55] text-gray-600 dark:text-gray-500">
                {description}
              </p>

              {/* Meta */}
              <div className="flex gap-[14px] font-mono text-[12.5px] text-gray-500 dark:text-gray-600">
                <span>{meta.nodes} nodes</span>
                <span>~{meta.hours}h</span>
              </div>

              {/* CTA */}
              <div
                className="mt-0.5 flex items-center gap-[6px] text-[13.5px] font-medium"
                style={{ color }}
              >
                Start path
                <ArrowRight className="h-[14px] w-[14px] transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
