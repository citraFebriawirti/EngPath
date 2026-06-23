"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  const [isIndonesian, setIsIndonesian] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. Init Google Translate Widget
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "id",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // 2. Load Script
    if (!document.getElementById("google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
      document.body.appendChild(addScript);
    }

    // 3. Cek Cookie
    const checkCookie = () => {
      const match = document.cookie.match(new RegExp("(^| )googtrans=([^;]+)"));
      if (match && match[2].includes("/id")) {
        setIsIndonesian(true);
      } else {
        setIsIndonesian(false);
      }
    };

    checkCookie();
  }, []);

  const handleTranslate = () => {
    if (!isIndonesian) {
      document.cookie = "googtrans=/en/id; path=/";
      document.cookie = "googtrans=/en/id; domain=" + window.location.hostname + "; path=/";
    } else {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + window.location.hostname + "; path=/";
    }
    window.location.reload();
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      {/* Container asli disembunyikan */}
      <div id="google_translate_element" className="hidden" />

      {/* Label Kiri: EN */}
      <span className={`text-xs font-bold transition-colors duration-200 ${!isIndonesian ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}`}>EN</span>

      {/* Komponen Toggle Switch */}
      <button
        onClick={handleTranslate}
        type="button"
        role="switch"
        aria-checked={isIndonesian}
        title={isIndonesian ? "Ubah ke Bahasa Inggris" : "Terjemahkan ke Bahasa Indonesia"}
        className={`
          relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#7A5AF8]/50 focus:ring-offset-2 dark:focus:ring-offset-[#0F172A]
          ${isIndonesian ? "bg-[#7A5AF8]" : "bg-gray-200 dark:bg-slate-700"}
        `}
      >
        <span className="sr-only">Translate Language</span>

        {/* Bulatan / Knob Switch */}
        <span
          className={`
            pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow-md
            ring-0 transition duration-300 ease-in-out flex items-center justify-center
            ${isIndonesian ? "translate-x-5" : "translate-x-0"}
          `}
        >
          {/* Efek kilatan cahaya kecil di dalam knob saat aktif */}
          <span className={`absolute h-1.5 w-1.5 rounded-full bg-[#7A5AF8] transition-opacity duration-300 ${isIndonesian ? "opacity-100" : "opacity-0"}`} />
        </span>
      </button>

      {/* Label Kanan: ID */}
      <span className={`text-xs font-bold transition-colors duration-200 ${isIndonesian ? "text-[#7A5AF8] dark:text-[#9B7EFA]" : "text-gray-400 dark:text-gray-500"}`}>ID</span>
    </div>
  );
}
