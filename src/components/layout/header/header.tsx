"use client";
import { CloseIcon, MenuIcon } from "@/icons/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopNav from "./desktop-nav";
import MainMobileNav from "./main-mobile-nav";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";
import { Route } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 dark:border-white/[0.07] bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-xl">
      <div className="wrapper">
        <div className="grid grid-cols-2 items-center py-3 lg:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="EngPath home">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7A5AF8] text-white shadow-sm transition group-hover:opacity-90">
                <Route className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[17px] font-bold tracking-tight text-gray-900 dark:text-white">
                  EngPath
                </span>
                <span className="hidden text-[10.5px] font-medium text-gray-400 dark:text-gray-500 sm:block">
                  Engineer Career Roadmap
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <DesktopNav />

          {/* Right actions */}
          <div className="flex items-center gap-2 justify-self-end">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.07] transition lg:hidden"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <Link
              href="/roadmap"
              className={cn(
                "hidden text-sm font-medium transition lg:block",
                pathname === "/roadmap" || pathname.startsWith("/roadmap/")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              Roadmaps
            </Link>

            <a
              href="https://github.com/engpath"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center gap-1.5 rounded-full bg-[#7A5AF8] px-4 text-sm font-medium text-white shadow-sm transition hover:bg-[#6941C6] lg:inline-flex"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <MainMobileNav isOpen={mobileMenuOpen} />
    </header>
  );
}
