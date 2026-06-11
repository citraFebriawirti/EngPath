'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navItems } from './nav-items';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@/icons/icons';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MainMobileNav({ isOpen }: MobileMenuProps) {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? '' : key);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 z-40 border-b border-white/[0.07] bg-[#0F172A]/95 backdrop-blur-xl lg:hidden">
      <div className="wrapper py-4">
        <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
          {navItems.map((item) => {
            if (item.type === 'link') {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center rounded-xl px-4 py-3 text-sm font-medium transition',
                    isActive
                      ? 'bg-white/[0.07] text-white'
                      : 'text-gray-400 hover:bg-white/[0.05] hover:text-white'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            }

            if (item.type === 'dropdown') {
              return (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:bg-white/[0.05] hover:text-white transition"
                  >
                    <span>{item.label}</span>
                    <span className={cn('h-4 w-4 transition-transform duration-200', activeDropdown === item.label && 'rotate-180')}>
                      <ChevronDownIcon />
                    </span>
                  </button>

                  {activeDropdown === item.label && (
                    <div className="mt-1 ml-4 flex flex-col gap-1 border-l border-white/[0.08] pl-4">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            'rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition',
                            pathname.includes(subItem.href) && 'text-white'
                          )}
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

        <div className="mt-4 flex flex-col gap-2.5 border-t border-white/[0.07] pt-4">
          <a
            href="https://github.com/engpath"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/[0.10] text-sm font-medium text-gray-300 transition hover:bg-white/[0.05] hover:text-white"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View on GitHub
          </a>
          <Link
            href="/roadmap"
            className="flex h-11 w-full items-center justify-center rounded-full bg-[#7A5AF8] text-sm font-semibold text-white transition hover:bg-[#6941C6]"
          >
            Explore Roadmaps
          </Link>
        </div>
      </div>
    </div>
  );
}
