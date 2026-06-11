import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { iconMap } from "./icon-map";
import type { MindsetArticle } from "@/app/mindset/data";

export default function ArticleCard({ article }: { article: MindsetArticle }) {
  const Icon = iconMap[article.iconName] ?? iconMap.BookOpen;

  return (
    <Link
      href={`/mindset/${article.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-[#171F2E] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-white/[0.14] hover:shadow-theme-md"
    >
      {/* Icon + category */}
      <div className="flex items-center justify-between">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ background: article.bg, color: article.color }}
        >
          <Icon className="h-[22px] w-[22px]" />
        </div>
        <span className="rounded-full border border-gray-200 dark:border-gray-800 px-[9px] py-[3px] font-mono text-[10.5px] text-gray-500 dark:text-gray-600">
          {article.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[16.5px] font-semibold leading-snug tracking-[-0.01em] text-gray-900 dark:text-gray-50">
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="flex-1 text-[13.5px] leading-[1.65] text-gray-600 dark:text-gray-500">
        {article.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[12px] text-gray-400 dark:text-gray-600">
          {article.readMin} min read
        </span>
        <span
          className="inline-flex items-center gap-[5px] text-[13px] font-medium transition-colors"
          style={{ color: article.color }}
        >
          Read article
          <ArrowRight className="h-[13px] w-[13px] transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
