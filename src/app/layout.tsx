import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/scroll-to-top";

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
    default: "EngPath — Think Like an Engineer",
    template: "%s | EngPath",
  },
  description:
    "Structured career roadmaps, engineering mindset articles, and real open source projects. Build the skills and thinking patterns that top engineers share.",
  openGraph: {
    title: "EngPath — Think Like an Engineer",
    description:
      "Structured career roadmaps, engineering mindset articles, and real open source projects.",
    url: "https://engpath.dev",
    siteName: "EngPath",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EngPath — Think Like an Engineer",
    description:
      "Structured career roadmaps, engineering mindset articles, and real open source projects.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className={`
          bg-white dark:bg-dark-secondary
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
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
