import Link from "next/link";
import { Route } from "lucide-react";

const footerLinks = {
  Paths: [
    { label: "Backend", href: "/roadmap/backend" },
    { label: "Frontend", href: "/roadmap/frontend" },
    { label: "DevOps", href: "/roadmap/devops" },
    { label: "Mobile", href: "/roadmap/mobile" },
    { label: "Security", href: "/roadmap/security" },
    { label: "Data Engineering", href: "/roadmap/data" },
  ],
  Resources: [
    { label: "All Roadmaps", href: "/roadmap" },
    { label: "Mindset Articles", href: "/mindset" },
    { label: "Open Source", href: "/opensource" },
    { label: "About", href: "/about" },
  ],
  Project: [
    { label: "GitHub", href: "https://github.com/engpath" },
    { label: "Contributing", href: "https://github.com/engpath/engpath/blob/main/CONTRIBUTING.md" },
    { label: "License (MIT)", href: "https://github.com/engpath/engpath/blob/main/LICENSE" },
    { label: "Changelog", href: "https://github.com/engpath/engpath/releases" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-[#080E1A]">
      <div className="wrapper py-14">
        {/* Top: brand + links */}
        <div className="grid grid-cols-1 gap-12 pb-10 border-b border-gray-200 dark:border-white/[0.06] sm:grid-cols-[1.3fr_2fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7A5AF8] text-white shadow-sm transition group-hover:opacity-90">
                <Route className="h-4 w-4" />
              </div>
              <span className="text-[17px] font-bold tracking-tight text-gray-900 dark:text-white">
                EngPath
              </span>
            </Link>
            <p className="max-w-[34ch] text-[13.5px] leading-[1.65] text-gray-500 dark:text-gray-500">
              Structured career roadmaps and engineer mindset training.
              Open source and free forever.
            </p>
            <a
              href="https://github.com/engpath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] px-2.5 py-1.5 font-mono text-[11px] font-medium text-gray-600 dark:text-gray-400 transition hover:border-gray-300 dark:hover:border-white/[0.14] hover:text-gray-900 dark:hover:text-white"
            >
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Open Source · MIT
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-3">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.07em] text-gray-400 dark:text-gray-600">
                  {heading}
                </p>
                {links.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-[13px] text-gray-500 dark:text-gray-500 transition hover:text-gray-900 dark:hover:text-gray-200"
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-2 font-mono text-[11.5px] text-gray-400 dark:text-gray-600">
          <span>© {year} EngPath. Built with care.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7A5AF8] pulse-dot" />
            Open Source · MIT License
          </span>
        </div>
      </div>
    </footer>
  );
}
