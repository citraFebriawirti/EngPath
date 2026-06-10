/* ─────────────────────────────────────────────────────────────────────────────
   Mindset Articles — Content & Types
   ─────────────────────────────────────────────────────────────────────────── */

import { firstPrinciplesArticle } from "./first-principles";

/* ── Block types ─────────────────────────────────────────────────────────── */

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "callout"; variant: "insight" | "warning" | "tip"; title: string; body: string }
  | { kind: "conversation"; label?: string; exchanges: Exchange[] }
  | { kind: "code"; lang: string; caption?: string; code: string }
  | { kind: "list"; style: "bullet" | "numbered"; items: string[] }
  | { kind: "quote"; text: string; by?: string; source?: string }
  | { kind: "divider" }
  | { kind: "takeaways"; items: string[] }
  | { kind: "refs"; items: ArticleRef[] };

export interface Exchange {
  role: "dev" | "senior";
  name: string;
  text: string;
}

export interface ArticleRef {
  title: string;
  author: string;
  dateLabel?: string;
  type: "book" | "paper" | "talk" | "article";
  note?: string;
}

export interface MindsetArticleContent {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMin: number;
  color: string;
  bg: string;
  featured?: boolean;
  iconName: string;
  lead: string;
  blocks: Block[];
}

/* ── Article registry ────────────────────────────────────────────────────── */

const articles: MindsetArticleContent[] = [firstPrinciplesArticle];

/* ── Helpers ─────────────────────────────────────────────────────────────── */

export function getArticle(slug: string): MindsetArticleContent | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}
