// ─────────────────────────────────────────────────────────────────────────────
// EngPath Roadmap — aggregator
// Re-exports types and assembles all 9 career domains from their own files
// ─────────────────────────────────────────────────────────────────────────────

export type { NodeType, Level, DomainFlag, Resource, SkillNode, RoadmapDomain } from "./types";
export { levelLabels } from "./types";

import { backend } from "./backend";
import { frontend } from "./frontend";
import { devops } from "./devops";
import { mobile } from "./mobile";
import { security } from "./security";
import { data } from "./data";
import { qa } from "./qa";
import { dba } from "./dba";
import { business } from "./business";

import type { RoadmapDomain } from "./types";

export const roadmapDomains: RoadmapDomain[] = [
  backend,
  frontend,
  devops,
  mobile,
  security,
  data,
  qa,
  dba,
  business,
];

// Convenience: get a domain by slug
export function getDomain(slug: string): RoadmapDomain | undefined {
  return roadmapDomains.find((d) => d.slug === slug);
}

// Convenience: get all valid domain slugs for static generation
export function getAllDomainSlugs(): string[] {
  return roadmapDomains.map((d) => d.slug);
}
