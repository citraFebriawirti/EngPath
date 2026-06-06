"use client";
import { CloseIcon, MenuIcon } from "@/icons/icons";
import Image from "next/image";
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
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md">
                <Route className="w-5 h-5" />
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">EngPath</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Engineer Career Roadmap</span>
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

            <Link href="/signin" className="text-sm hidden lg:block font-medium text-gray-700 dark:text-gray-400 hover:text-primary-500">
              Sign In
            </Link>

            <Link href="/signup" className="lg:inline-flex items-center px-5 py-3 gradient-btn hidden text-sm text-white rounded-full button-bg h-11">
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      <MainMobileNav isOpen={mobileMenuOpen} />
    </header>
  );
}
