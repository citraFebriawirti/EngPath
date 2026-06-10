"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  useReducedMotion,
} from "framer-motion";
import type { ComponentType } from "react";

/* ── Icons ──────────────────────────────────────────────────────────────── */

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ── Types ──────────────────────────────────────────────────────────────── */

interface Stat {
  to: number;
  suffix: string;
  label: string;
}

interface Social {
  href: string;
  Icon: ComponentType<{ className?: string }>;
  label: string;
}

interface Founder {
  name: string;
  role: string;
  handle: string;
  image: string;
  imageAlt: string;
  tags: string[];
  bio: string;
  quote: string;
  stats: Stat[];
  socials: Social[];
}

/* ── Data ───────────────────────────────────────────────────────────────── */

const founders: Founder[] = [
  {
    name: "Arin Cantika",
    role: "Founder",
    handle: "@raincode26",
    image: "/images/about/arin.jpeg",
    imageAlt: "Arin Cantika",
    tags: ["Software Engineer", "Content Creator", "Educator", "Founder"],
    bio: "Passionate about making software engineering accessible and easier to learn. Turns complex engineering concepts into structured learning paths through roadmaps, articles, and practical content that actually works.",
    quote: "Learning software engineering should feel achievable, not overwhelming.",
    stats: [
      { to: 6, suffix: "K+", label: "Followers" },
      { to: 50, suffix: "+", label: "Content Published" },
    ],
    socials: [
      { href: "https://www.tiktok.com/@raincode26", Icon: TikTokIcon, label: "@raincode26" },
      { href: "https://www.instagram.com/arincantika26", Icon: InstagramIcon, label: "Instagram" },
      { href: "https://www.linkedin.com/in/arincantika/", Icon: LinkedInIcon, label: "LinkedIn" },
    ],
  },
  {
    name: "Citra Febriawirti",
    role: "Co-Founder",
    handle: "@galat.code",
    image: "/images/about/citra.jpg",
    imageAlt: "Citra Febriawirti",
    tags: ["Fullstack Developer", "Content Creator", "Educator", "Co-Founder"],
    bio: "Dedicated to bridging the gap between complex technical concepts and everyday learners. Creates relatable content about debugging, frontend systems, and the real experience of growing as a developer.",
    quote: "Making engineering accessible starts with meeting learners where they are.",
    stats: [
      { to: 5, suffix: "K+", label: "Learners Reached" },
      { to: 50, suffix: "+", label: "Videos Created" },
    ],
    socials: [
      { href: "https://www.tiktok.com/@galat.code", Icon: TikTokIcon, label: "@galat.code" },
      { href: "https://www.instagram.com/arcinara_ctr", Icon: InstagramIcon, label: "Instagram" },
      { href: "https://www.linkedin.com/in/citra-febriawirti", Icon: LinkedInIcon, label: "LinkedIn" },
    ],
  },
];

/* ── AnimatedCounter ────────────────────────────────────────────────────── */

function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduce) {
      setDisplay(to.toLocaleString());
      return;
    }
    const controls = animate(motionValue, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString()),
    });
    return controls.stop;
  }, [inView, to, motionValue, shouldReduce]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ── SocialButton ────────────────────────────────────────────────────────── */

function SocialButton({ href, Icon, label }: Social) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center overflow-hidden rounded-full border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] px-[10px] py-[9px] transition-all duration-300 hover:border-[#7A5AF8]/40 dark:hover:border-[#7A5AF8]/30"
    >
      <Icon className="h-[15px] w-[15px] shrink-0 text-gray-500 dark:text-gray-400 transition-colors duration-200 group-hover:text-[#7A5AF8]" />
      <span className="block max-w-0 overflow-hidden whitespace-nowrap font-mono text-[11.5px] font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:max-w-[120px] group-hover:pl-[7px]">
        {label}
      </span>
    </a>
  );
}

/* ── FounderCard ─────────────────────────────────────────────────────────── */

function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? false : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-[22px] border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-[#171F2E] shadow-theme-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-[#7A5AF8]/30 dark:hover:border-[#7A5AF8]/25 hover:shadow-[0_24px_60px_rgba(122,90,248,0.12)] dark:hover:shadow-[0_24px_60px_rgba(122,90,248,0.20)]"
      style={{ willChange: "transform" }}
    >
      {/* ── Image ─────────────────────────────────────────────────────── */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Image
          src={founder.image}
          alt={founder.imageAlt}
          fill
          className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/[0.08] to-transparent" />
        {/* Role badge */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center rounded-full bg-[#7A5AF8]/80 px-3 py-[5px] font-mono text-[11px] font-semibold text-white backdrop-blur-sm">
            {founder.role}
          </span>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-5 p-6">
        {/* Name + handle */}
        <div>
          <h3 className="text-[26px] font-bold leading-[1.1] tracking-[-0.025em] text-gray-900 dark:text-white">
            {founder.name}
          </h3>
          <p className="mt-[3px] font-mono text-[12px] tracking-wide text-gray-400 dark:text-gray-500">
            {founder.handle}
          </p>
        </div>

        {/* Achievement tags */}
        <div className="flex flex-wrap gap-[6px]">
          {founder.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.03] px-3 py-[4px] font-mono text-[11px] text-gray-600 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="text-[14px] leading-[1.8] text-gray-600 dark:text-gray-400">
          {founder.bio}
        </p>

        {/* Quote */}
        <blockquote className="border-l-[2px] border-[#7A5AF8]/40 pl-4">
          <p className="text-[13px] italic leading-[1.7] text-gray-500 dark:text-gray-500">
            &ldquo;{founder.quote}&rdquo;
          </p>
        </blockquote>

        {/* Animated stats */}
        <div className="grid grid-cols-2 gap-2">
          {founder.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-white/[0.03] px-3 py-3"
            >
              <p className="text-[22px] font-bold tracking-[-0.025em] text-gray-900 dark:text-white">
                <AnimatedCounter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-[2px] font-mono text-[10.5px] text-gray-500 dark:text-gray-600">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 dark:bg-white/[0.05]" />

        {/* Social links */}
        <div className="flex flex-wrap gap-2">
          {founder.socials.map((s) => (
            <SocialButton key={s.label} {...s} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── FounderShowcase ─────────────────────────────────────────────────────── */

export default function FounderShowcase() {
  return (
    <section className="relative overflow-hidden border-y border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[86px]">
      {/* Subtle background glow */}
      <span
        className="pointer-events-none absolute rounded-full opacity-[0.09] blur-[120px]"
        style={{
          width: 700,
          height: 500,
          background: "#7A5AF8",
          left: "50%",
          transform: "translateX(-50%)",
          top: "-5%",
        }}
      />

      <div className="wrapper relative z-10">
        {/* Section header */}
        <div className="mx-auto mb-12 flex max-w-[560px] flex-col items-center gap-4 text-center">
          <p className="eyebrow">The Team</p>
          <h2 className="text-[clamp(26px,3.4vw,40px)] font-bold leading-[1.08] tracking-[-0.025em] text-gray-900 dark:text-white">
            Meet the founders
          </h2>
          <p className="max-w-[46ch] text-pretty text-[clamp(15px,1.6vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-400">
            EngPath was built by Arin and Citra — two engineers who believe
            learning should be open, structured, and truly human.
          </p>
        </div>

        {/* Founder cards */}
        <div className="mx-auto grid max-w-[840px] grid-cols-1 gap-6 sm:grid-cols-2">
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
