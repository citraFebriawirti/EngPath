"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        flex h-10 w-10 items-center justify-center
        rounded-full border border-gray-200 dark:border-white/[0.10]
        bg-white dark:bg-[#171F2E]
        text-gray-500 dark:text-gray-400
        shadow-theme-sm
        transition-all duration-300
        hover:-translate-y-0.5 hover:border-[#7A5AF8]/50 dark:hover:border-[#7A5AF8]/50
        hover:text-[#7A5AF8] dark:hover:text-[#A688FC]
        hover:shadow-[0_4px_16px_rgba(122,90,248,0.20)]
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}
      `}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
