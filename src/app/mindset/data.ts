import type { Metadata } from "next";

/* ── Metadata ─────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Engineer Mindset",
  description:
    "Mental models and thinking patterns that senior engineers use every day. The stuff you don't learn from tutorials.",
};

/* ── Types ────────────────────────────────────────────────────────────────── */

export interface MindsetArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMin: number;
  iconName: string;
  color: string;
  bg: string;
  featured?: boolean;
}

export interface MindsetPrinciple {
  iconName: string;
  color: string;
  bg: string;
  title: string;
  body: string;
}

/* ── Articles ─────────────────────────────────────────────────────────────── */

export const articles: MindsetArticle[] = [
  {
    slug: "first-principles",
    title: "First-Principles Thinking for Engineers",
    excerpt:
      "Most engineers reason by analogy — they copy patterns they've seen before. First-principles thinking breaks problems to their fundamental truths and builds solutions from the ground up.",
    category: "Thinking Models",
    readMin: 8,
    iconName: "Target",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    featured: true,
  },
  {
    slug: "systems-thinking",
    title: "Systems Thinking: See the Whole, Not the Parts",
    excerpt:
      "Great engineers don't just fix the bug in front of them — they understand the system it lives in. Systems thinking is the discipline that separates reactive problem-solvers from engineers who prevent problems.",
    category: "Thinking Models",
    readMin: 10,
    iconName: "Puzzle",
    color: "#8B7CF8",
    bg: "rgba(139,124,248,0.10)",
    featured: true,
  },
  {
    slug: "debugging-mindset",
    title: "The Debugging Mindset: A Systematic Approach",
    excerpt:
      "Debugging is not guessing. It's a scientific process of forming hypotheses and testing them. Learn how senior engineers approach bugs they've never seen before.",
    category: "Problem Solving",
    readMin: 7,
    iconName: "Search",
    color: "#3BB58F",
    bg: "rgba(59,181,143,0.10)",
  },
  {
    slug: "handling-ambiguity",
    title: "Handling Ambiguity: From Vague Requirements to Clear Action",
    excerpt:
      "Real engineering problems are rarely well-defined. Learning to decompose ambiguous requirements into concrete, implementable actions is one of the most underrated skills in software engineering.",
    category: "Problem Solving",
    readMin: 9,
    iconName: "BrainCircuit",
    color: "#F39B52",
    bg: "rgba(243,155,82,0.10)",
  },
  {
    slug: "trade-off-thinking",
    title: "Trade-Off Thinking: How Engineers Make Decisions",
    excerpt:
      "There is no perfect solution — only trade-offs. Understanding how to evaluate options on the axes of performance, complexity, cost, and maintainability is what distinguishes senior engineers.",
    category: "Decision Making",
    readMin: 6,
    iconName: "Layers",
    color: "#E06A6A",
    bg: "rgba(224,106,106,0.10)",
  },
  {
    slug: "deep-work-engineering",
    title: "Deep Work for Engineers: Protecting Your Thinking Time",
    excerpt:
      "Shallow work — emails, Slack, ad-hoc meetings — is the enemy of great engineering. Here's how to structure your environment for deep focus and high-leverage output.",
    category: "Productivity",
    readMin: 5,
    iconName: "Clock",
    color: "#6FA95C",
    bg: "rgba(111,169,92,0.10)",
  },
  {
    slug: "reading-documentation",
    title: "How to Actually Read Documentation",
    excerpt:
      "Most developers skim docs looking for copy-paste answers. Engineers read them to build accurate mental models. There's a technique to reading documentation that compounds over time.",
    category: "Learning",
    readMin: 6,
    iconName: "BookOpen",
    color: "#C77DFF",
    bg: "rgba(199,125,255,0.10)",
  },
  {
    slug: "feedback-loops",
    title: "Tightening Your Feedback Loops",
    excerpt:
      "The fastest engineers aren't the ones who type faster — they're the ones with the tightest feedback loops. Tests, hot reload, feature flags, and observability all shorten the loop between idea and validation.",
    category: "Productivity",
    readMin: 7,
    iconName: "Zap",
    color: "#5C9CE6",
    bg: "rgba(92,156,230,0.10)",
  },
];

/* ── Derived ──────────────────────────────────────────────────────────────── */

export const categories = [
  "All",
  ...Array.from(new Set(articles.map((a) => a.category))),
];

export const featured = articles.filter((a) => a.featured);
export const rest = articles.filter((a) => !a.featured);

/* ── Core Principles ──────────────────────────────────────────────────────── */

export const principles: MindsetPrinciple[] = [
  {
    iconName: "Target",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    title: "First-principles over analogy",
    body: "Don't copy patterns blindly. Break problems to their fundamentals and build solutions from scratch when needed.",
  },
  {
    iconName: "Puzzle",
    color: "#8B7CF8",
    bg: "rgba(139,124,248,0.10)",
    title: "Systems over tasks",
    body: "Understand the system a task lives in. Fixing symptoms without understanding causes creates debt, not solutions.",
  },
  {
    iconName: "BrainCircuit",
    color: "#3BB58F",
    bg: "rgba(59,181,143,0.10)",
    title: "Comfort with ambiguity",
    body: "Real problems are rarely well-defined. Skilled engineers decompose vague requirements into concrete, testable actions.",
  },
];
