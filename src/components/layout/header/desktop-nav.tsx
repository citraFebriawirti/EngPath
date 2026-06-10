"use client";

import { ChevronDown2Icon } from "@/icons/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./nav-items";
import { useEffect, useState } from "react";

export default function DesktopNav() {
  const pathname = usePathname();
  const [activeDropdownKey, setActiveDropdownKey] = useState("");

  function toggleActiveDropdown(key: string) {
    setActiveDropdownKey((prevKey) => (prevKey === key ? "" : key));
  }

  useEffect(() => {
    // Hide dropdown on pathname changes
    setActiveDropdownKey("");
  }, [pathname]);

  return (
    <nav
      className="hidden lg:flex lg:items-center gap-0.5 rounded-full border border-gray-200/70 dark:border-white/[0.08] bg-gray-50/80 dark:bg-white/[0.04] px-1 py-1 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      {navItems.map((item) => {
        if (item.type === "link") {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-white dark:bg-white/[0.08] text-gray-900 dark:text-white shadow-theme-xs"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/[0.06]"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        }

        if (item.type === "dropdown") {
          const toggleThisDropdown = () => { toggleActiveDropdown(item.label); };
          const isDropdownActive = activeDropdownKey === item.label;
          const isActive = item.items?.some(({ href }) => pathname?.includes(href));

          return (
            <div key={item.label} className="relative">
              <button
                onClick={toggleThisDropdown}
                onMouseEnter={toggleThisDropdown}
                onMouseLeave={toggleThisDropdown}
                onKeyDown={(e) => { if (isDropdownActive && e.key === "Escape") toggleThisDropdown(); }}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-white dark:bg-white/[0.08] text-gray-900 dark:text-white shadow-theme-xs"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/[0.06]"
                )}
              >
                <span>{item.label}</span>
                <ChevronDown2Icon className={cn("h-3.5 w-3.5 transition-transform duration-200", { "rotate-180": isDropdownActive })} />
              </button>

              {isDropdownActive && (
                <div
                  onMouseEnter={toggleThisDropdown}
                  onMouseLeave={toggleThisDropdown}
                  onKeyDown={(e) => { if (e.key === "Escape") toggleThisDropdown(); }}
                  className="absolute right-0 z-50 mt-1.5 w-[220px] rounded-2xl border border-gray-100 dark:border-white/[0.08] bg-white dark:bg-[#171F2E] p-1.5 shadow-theme-lg"
                >
                  {item.items?.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.05] transition"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }
      })}
    </nav>
  );
}
