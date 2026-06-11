import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { RoadmapDomain } from "@/content/roadmap";
import { iconMap } from "./icon-map";

export default function DomainCard({ domain }: { domain: RoadmapDomain }) {
  const Icon = iconMap[domain.slug];

  return (
    <Link
      href={`/roadmap/${domain.slug}`}
      className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-white/[0.14] hover:shadow-theme-md"
    >
      {/* Left accent bar */}
      <span
        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full opacity-0 transition-opacity duration-200 group-hover:opacity-80"
        style={{ background: domain.color }}
      />

      {/* Top row: icon + flag */}
      <div className="flex items-center justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: domain.bg, color: domain.color }}
        >
          {Icon && <Icon className="h-5 w-5" />}
        </div>
        <span
          className="rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold"
          style={{ background: domain.bg, color: domain.color }}
        >
          {domain.flag}
        </span>
      </div>

      {/* Title */}
      <p className="text-[17px] font-semibold tracking-[-0.01em] text-gray-900 dark:text-white">
        {domain.label}
      </p>

      {/* Description */}
      <p className="flex-1 text-[13.5px] leading-[1.6] text-gray-500 dark:text-gray-400">
        {domain.shortDesc}
      </p>

      {/* Meta */}
      <div className="flex gap-3 font-mono text-[12px] text-gray-400 dark:text-gray-600">
        <span>{domain.meta.nodes} nodes</span>
        <span>~{domain.meta.hours}h</span>
      </div>

      {/* CTA */}
      <div
        className="mt-0.5 flex items-center gap-1.5 text-[13px] font-semibold"
        style={{ color: domain.color }}
      >
        Start path
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
