import type { RoadmapDomain } from "../types";

export const business: RoadmapDomain = {
  slug: "business",
  label: "Business & Tech",
  flag: "Domain",
  shortDesc:
    "Product management, technical communication, and engineering leadership skills.",
  longDesc:
    "Bridge the gap between business goals and engineering execution. Learn product thinking, stakeholder communication, and the leadership skills that help engineers grow beyond the code into influential roles.",
  color: "#5C9CE6",
  bg: "rgba(92,156,230,0.10)",
  meta: { nodes: 18, hours: 55 },
  nodes: [
    // Foundation
    {
      id: "biz-comm",
      title: "Technical Communication",
      type: "core",
      level: 1,
      description:
        "Write clear documentation, RFCs, and technical proposals. Present complex ideas to non-technical stakeholders.",
      tags: ["communication"],
    },
    {
      id: "biz-agile",
      title: "Agile & Scrum Fundamentals",
      type: "core",
      level: 1,
      description:
        "Understand Scrum ceremonies, Kanban boards, story points, retrospectives, and iterative development.",
      tags: ["agile"],
    },
    // Intermediate
    {
      id: "biz-metrics",
      title: "Engineering Metrics (DORA)",
      type: "core",
      level: 2,
      description:
        "DORA metrics (deployment frequency, lead time, MTTR, change failure rate) and measuring engineering health.",
      tags: ["metrics"],
    },
    {
      id: "biz-product",
      title: "Product Thinking",
      type: "core",
      level: 2,
      description:
        "User story mapping, prioritization frameworks (RICE, MoSCoW), and working effectively with product managers.",
      tags: ["product"],
    },
    {
      id: "biz-estimation",
      title: "Estimation & Technical Planning",
      type: "optional",
      level: 2,
      description:
        "Story point estimation, t-shirt sizing, uncertainty handling, and communicating delivery timelines.",
      tags: ["planning"],
    },
    // Advanced
    {
      id: "biz-adr",
      title: "Architecture Decision Records",
      type: "core",
      level: 3,
      description:
        "Write ADRs to document technical decisions with context and consequences. Structured decision-making.",
      tags: ["architecture"],
    },
    {
      id: "biz-tech-lead",
      title: "Tech Lead & Engineering Influence",
      type: "optional",
      level: 3,
      description:
        "Conduct effective code reviews, mentor junior engineers, build technical roadmaps, and influence without authority.",
      tags: ["leadership"],
    },
    // Expert
    {
      id: "biz-hiring",
      title: "Hiring & Team Building",
      type: "optional",
      level: 4,
      description:
        "Conduct technical interviews, design take-home exercises, define role levelling, and build engineering teams.",
      tags: ["hiring"],
    },
    {
      id: "biz-culture",
      title: "Engineering Culture",
      type: "optional",
      level: 4,
      description:
        "Define team values, blameless post-mortems, psychological safety, and building high-performing engineering culture.",
      tags: ["culture"],
    },
  ],
};
