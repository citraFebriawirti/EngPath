export type NodeType = "core" | "optional";
export type Level = 1 | 2 | 3 | 4;
export type DomainFlag = "Core" | "Specialization" | "Domain";

export interface Resource {
  label: string;
  href: string;
}

export interface SkillNode {
  id: string;
  title: string;
  type: NodeType;
  level: Level;
  description: string;
  tags?: string[];
  resources?: Resource[];
}

export interface RoadmapDomain {
  slug: string;
  label: string;
  flag: DomainFlag;
  shortDesc: string;
  longDesc: string;
  color: string;
  bg: string;
  meta: { nodes: number; hours: number };
  nodes: SkillNode[];
}

export const levelLabels: Record<Level, string> = {
  1: "Foundation",
  2: "Intermediate",
  3: "Advanced",
  4: "Expert",
};
