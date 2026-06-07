"use client";
import { CloseIcon, MenuIcon } from "@/icons/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopNav from "./desktop-nav";
import MainMobileNav from "./main-mobile-nav";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";

import { Route } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white dark:bg-dark-primary border-b dark:border-gray-800 border-gray-100 sticky top-0 z-50 py-2 lg:py-4">
      <div className="px-4 sm:px-6 lg:px-7">
        <div className="grid grid-cols-2 items-center lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-md">
                <Route className="w-5 h-5" />
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">EngPath</span>
                <span className="text-[11px] text-gray-600 dark:text-gray-500">Engineer Career Roadmap</span>
              </div>

              <span className="hidden sm:inline-block px-2 py-1 rounded-lg rounded-bl-none bg-primary-500/90 text-white text-[10px] font-semibold">Beta</span>
            </Link>
          </div>

          <DesktopNav />

          <div className="flex items-center gap-4 justify-self-end">
            <ThemeToggle />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              className="order-last shrink-0 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <Link href="/roadmap" className="text-sm hidden lg:block font-medium text-gray-700 dark:text-gray-400 hover:text-primary-500">
              Explore Roadmaps
            </Link>

            <a
              href="https://github.com/engpath"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:inline-flex items-center gap-2 px-5 py-2.5 gradient-btn hidden text-sm text-white rounded-full h-10"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
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
