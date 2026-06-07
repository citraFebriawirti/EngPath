import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EngPath",
    template: "%s | EngPath",
  },
  description:
    "Belajar berpikir seperti engineer. Jalur skill terstruktur, pola pikir engineering, dan project open source nyata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className={`
          bg-gray-50 dark:bg-dark-secondary
          text-gray-900 dark:text-gray-50
          min-h-screen flex flex-col
          font-[var(--font-geist-sans)]
          antialiased
        `}
      >
        {/*
          attribute="data-theme" — matches the @custom-variant dark selector
          in globals.css: [data-theme=dark]
        */}
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="isolate flex flex-col flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
