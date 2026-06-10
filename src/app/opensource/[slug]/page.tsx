import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Open Source Project",
  description: "EngPath open source project details.",
};

export default async function OpenSourceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-dark-primary py-16">
          <div className="wrapper">
            <Link
              href="/opensource"
              className="mb-6 inline-flex items-center gap-1.5 font-mono text-[12.5px] text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Projects
            </Link>
            <div className="flex flex-col gap-5 max-w-[680px]">
              <p className="flex items-center gap-2 font-mono text-[14px] font-semibold text-primary-500">
                <Code2 className="h-4 w-4" />
                engpath/{slug}
              </p>
              <div className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-dark-primary p-8 text-center">
                <p className="text-[15px] text-gray-600 dark:text-gray-500">
                  Detailed project page coming soon. Visit the GitHub repository
                  to explore this project.
                </p>
                <a
                  href={`https://github.com/engpath/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-px hover:brightness-105"
                >
                  View on GitHub
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
