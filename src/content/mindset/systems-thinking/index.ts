import type { MindsetArticleContent } from "../index";

export const systemsThinkingArticle: MindsetArticleContent = {
  slug: "systems-thinking",
  title: "Systems Thinking: See the Whole, Not the Parts",
  excerpt:
    "Great engineers don't just fix the bug in front of them — they understand the system it lives in. Systems thinking is the discipline that separates reactive problem-solvers from engineers who prevent problems.",
  category: "Thinking Models",
  readMin: 10,
  color: "#8B7CF8",
  bg: "rgba(139,124,248,0.10)",
  featured: true,
  iconName: "Puzzle",
  lead: "Your deploy pipeline keeps failing on Fridays. The fix is obvious: retry the job. The pipeline runs. Everyone goes home. Then it fails again next Friday. And the Friday after that. You've fixed the symptom. The system was never touched. Systems thinking is the skill of knowing the difference — and caring enough to act on it.",

  blocks: [
    /* ── 1. What systems thinking is ────────────────────────────────────── */
    { kind: "h2", text: "What Systems Thinking Actually Is" },
    {
      kind: "p",
      text: "Systems thinking is a way of seeing the world as interconnected loops rather than isolated cause-and-effect chains. It was formalized by Jay Forrester at MIT in the 1950s and popularized by Peter Senge's _The Fifth Discipline_ (1990). The core idea: most problems in complex environments aren't caused by a single point of failure — they're the emergent result of feedback loops, delays, and interactions between components.",
    },
    {
      kind: "p",
      text: "For engineers, this matters because software systems are exactly this kind of environment. A service doesn't fail in isolation. A team doesn't slow down from a single cause. A database doesn't degrade in a straight line. The symptoms you see are outputs of a system you need to understand — not just events to be patched.",
    },
    {
      kind: "callout",
      variant: "insight",
      title: "Linear vs. Systems Thinking",
      body: "Linear thinking: 'The API is slow → add a cache → API is fast.' Systems thinking: 'The API is slow → why? → high DB load → why? → N+1 query pattern → why? → ORM default behavior + no query review step in PRs → fix the process and the query, not the symptom.' Linear fixes solve the same problem on rotation. Systems fixes change the structure that produced the problem.",
    },

    /* ── 2. Three patterns that appear everywhere ────────────────────────── */
    { kind: "h2", text: "Three Patterns That Appear in Every Engineering System" },
    {
      kind: "p",
      text: "You don't need a PhD in systems theory to use systems thinking. Three patterns cover the vast majority of engineering problems:",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Reinforcing loops (vicious cycles):** A causes B, B amplifies A. Technical debt slows delivery → slowness means less time for quality → less quality creates more debt. Without intervention, these loops compound until the system breaks or someone deliberately changes the structure.",
        "**Balancing loops (stabilizers):** A rises → a corrective force pushes it back down. Incident rate spikes → on-call load increases → team adds alerting and runbooks → incident rate drops. These loops want equilibrium. Knowing where they exist helps you not fight them — and deliberately create them where they're missing.",
        "**Delays:** Action and effect are separated in time. You deploy a performance regression on Monday. Latency p99 creeps up through Tuesday. Customer complaints hit support on Wednesday. Monitoring alert fires Thursday. By then the fix is blamed on the wrong commit. Delays make causality invisible. They're why post-mortems are hard.",
      ],
    },
    {
      kind: "quote",
      text: "Today's problems come from yesterday's solutions.",
      by: "Peter Senge",
      source: "The Fifth Discipline, 1990",
    },

    /* ── Case Study 1 ─────────────────────────────────────────────────── */
    { kind: "h2", text: "Case Study 1 — The Alert Fatigue Loop" },
    {
      kind: "p",
      text: "A mid-size engineering team is running a SaaS platform. Incidents are increasing. Management's response: more monitoring. New dashboards, lower thresholds, additional on-call rotations. Three months later, incident count is up, engineer morale is down, and response times have gotten longer — not shorter. Here's the system they accidentally built:",
    },
    {
      kind: "list",
      style: "bullet",
      items: [
        "More alerts were added → engineers receive more pages per week",
        "Most pages are low-severity or false positives → engineers start ignoring them",
        "Ignoring alerts becomes the norm → when a real incident fires, response is slow",
        "Slow response → longer MTTR → management adds more alerts to 'catch things earlier'",
        "Loop closes. Repeat.",
      ],
    },
    {
      kind: "callout",
      variant: "warning",
      title: "The fix that made things worse",
      body: "More monitoring looked like a solution because it addressed the visible symptom (we missed an incident). It didn't address the structure: alert volume was already too high for the team size. Adding volume to a saturated system degrades its ability to process any signal at all. This is a reinforcing loop — the 'fix' feeds the problem.",
    },
    {
      kind: "p",
      text: "The systemic fix required working in the opposite direction: reduce alert volume first, ruthlessly. Delete alerts with <90% precision. Add a weekly 'alert review' process where the team kills or escalates any alert that fired without action in the last 30 days. Only after signal quality improves does adding new signals help.",
    },
    {
      kind: "code",
      lang: "text",
      caption: "Systems map of the alert fatigue loop",
      code: `                    ┌──────────────────────────────────────────┐
                    │                                          │
  More alerts  ──→  │  Alert volume ↑   →   Fatigue ↑         │
       ↑            │       ↓                    ↓            │
       │            │  True signal ↓    →  Response time ↑    │
       │            │       ↓                    ↓            │
       └────────────│  MTTR ↑           →  "Add more alerts"  │
                    │                                          │
                    └──────────────────────────────────────────┘

  Leverage point: Reduce alert volume (break the input to the loop)
                  Add alert quality review (create a balancing loop)`,
    },

    /* ── Case Study 2 ─────────────────────────────────────────────────── */
    { kind: "h2", text: "Case Study 2 — The Deploy Pipeline That Kept Breaking" },
    {
      kind: "p",
      text: "A team had a CI pipeline that failed intermittently — about once every two weeks. The pattern was always the same: an integration test times out against a shared staging database. Every time it happened, someone would restart the job, it would pass, and life continued.",
    },
    {
      kind: "conversation",
      label: "Incident retrospective — two months in",
      exchanges: [
        {
          role: "dev",
          name: "Engineer A",
          text: "Pipeline failed again. I retried it, it passed. Should be fine.",
        },
        {
          role: "senior",
          name: "Lead",
          text: "Same integration test?",
        },
        {
          role: "dev",
          name: "Engineer A",
          text: "Yeah, the checkout service one. Always times out against staging DB.",
        },
        {
          role: "senior",
          name: "Lead",
          text: "How long has this been happening?",
        },
        {
          role: "dev",
          name: "Engineer A",
          text: "Two months maybe? It's intermittent so it never felt urgent.",
        },
        {
          role: "senior",
          name: "Lead",
          text: "Has anyone looked at what's actually happening on staging DB when it fails?",
        },
        {
          role: "dev",
          name: "Engineer A",
          text: "...Not really. The retry always works so we assumed it was flaky tests.",
        },
      ],
    },
    {
      kind: "p",
      text: "When the team finally looked at the staging database during a failure, they found it: multiple CI pipelines were running integration tests simultaneously against the same shared database, causing lock contention under concurrent writes. The timeout was a symptom. The system problem was **shared mutable state in the test environment**.",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Symptom fix (what they did for 2 months):** Retry the job. Passes 90% of the time.",
        "**Structural fix:** Each pipeline run gets an isolated test database (Docker container + seeded schema). Parallelism becomes safe. Flakiness disappears permanently.",
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The retry trap",
      body: "Every time you retry something that 'usually works,' you're choosing not to understand your system. Retries are fine in production for transient network errors. In your CI pipeline, an intermittent failure that 'usually passes on retry' is a signal from your system that something structural is unstable. The cost of investigating it is an hour. The cost of not investigating it is months of friction and the risk it eventually causes a failed production deploy.",
    },

    /* ── Case Study 3 ─────────────────────────────────────────────────── */
    { kind: "h2", text: "Case Study 3 — The Technical Debt Reinforcing Loop" },
    {
      kind: "p",
      text: "This one is invisible until it isn't. A team is building fast. Shortcuts pile up — no tests here, hardcoded config there, duplicated logic across services. Leadership is happy: velocity is high. Then a quarter passes, and a strange thing happens. Features that used to take three days take two weeks. Bugs appear in code no one touched. The team seems busy but output has dropped.",
    },
    {
      kind: "p",
      text: "This is the technical debt reinforcing loop, and it's one of the most well-documented patterns in software engineering:",
    },
    {
      kind: "code",
      lang: "text",
      caption: "Technical debt as a reinforcing feedback loop",
      code: `  Pressure to ship fast
         ↓
  Shortcuts & skipped quality steps   ←──────────────────┐
         ↓                                                 │
  Accumulated technical debt                              │
         ↓                                                 │
  Slower feature development + more bugs                  │
         ↓                                                 │
  More pressure to ship fast (to compensate)  ────────────┘

  This loop compounds. Without structural intervention, the team
  will eventually be unable to ship at all.

  Leverage points:
  • Make debt visible (tech debt register, tracked in sprint)
  • Add a quality gate to the delivery process (Definition of Done)
  • Allocate fixed % of sprint capacity to debt reduction`,
    },
    {
      kind: "p",
      text: "The systemic insight here is that **speed and quality are not a tradeoff in the long run — they're a feedback loop**. Teams that invest in quality move faster over time. Teams that sacrifice quality for speed eventually come to a halt. This is not philosophy — it's the structure of the system they operate in.",
    },
    {
      kind: "quote",
      text: "The only way to go fast is to go well.",
      by: "Robert C. Martin",
      source: "Clean Architecture, 2017",
    },

    /* ── How to apply it ──────────────────────────────────────────────── */
    { kind: "h2", text: "How to Actually Apply Systems Thinking" },
    {
      kind: "p",
      text: "You don't need to draw a full causal loop diagram before every decision. You do need three habits:",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Ask 'why' at least twice before proposing a fix.** One 'why' gets you to the symptom. Two 'whys' usually get you to the mechanism. Three 'whys' often reveal the structural cause. The goal isn't five whys as a ritual — it's not stopping at the first answer that feels satisfying.",
        "**Look for feedback loops before adding new components.** Before adding a new service, alert, queue, or process: ask what happens when the new thing fails or misbehaves. Does it feed back into the problem you're trying to solve? Does it create new loops you'll have to manage? Drawing a simple box-and-arrow diagram for 10 minutes prevents months of surprises.",
        "**Find the leverage point.** In any system, some interventions have large effects and some have small ones. Doubling the retry timeout on a flaky test has small effect — it delays the failure. Isolating the test database has large effect — it removes the cause. The leverage point is almost always **structural**: a process, a boundary, a constraint, not a parameter tweak.",
      ],
    },
    {
      kind: "callout",
      variant: "insight",
      title: "Donella Meadows' insight on leverage",
      body: "In her landmark work 'Thinking in Systems,' Donella Meadows identified that the highest-leverage interventions in a system are changes to its goals, rules, and information flows — not adjustments to its existing flows and parameters. For engineers: changing the process that creates bugs is higher leverage than improving the process that catches them.",
    },

    /* ── Why learn this ────────────────────────────────────────────────── */
    { kind: "h2", text: "Why This Skill Is Non-Negotiable at Senior Level" },
    {
      kind: "p",
      text: "Junior engineers are expected to fix what's assigned to them. Senior engineers are expected to notice what isn't being assigned but should be. Systems thinking is the skill that makes the invisible visible — the accumulating debt, the emerging fragility, the structural cause behind recurring incidents.",
    },
    {
      kind: "p",
      text: "It's also the skill that makes you calm in an incident when everyone else is panicking. When your mental model of the system is strong, you can reason about failure modes faster, rule out false leads, and find the actual causal chain. Post-mortems written by engineers with systems thinking skills produce actionable structural fixes — not 'engineer should have been more careful' action items.",
    },
    {
      kind: "list",
      style: "bullet",
      items: [
        "**Incident response:** You trace causality through delays and feedback instead of chasing symptoms.",
        "**Architecture decisions:** You anticipate second-order effects before a design is built, not six months later.",
        "**Team health:** You recognize when a team process is creating a reinforcing loop that will compound (e.g., long PR review times → engineers batch work → larger PRs → even longer review times).",
        "**Technical debt conversations:** You can explain to non-technical stakeholders why the 'fast path now' creates a slower path in the future — using a feedback loop diagram instead of vague appeals to 'code quality.'",
      ],
    },

    /* ── Takeaways ────────────────────────────────────────────────────── */
    { kind: "divider" },
    {
      kind: "takeaways",
      items: [
        "Systems thinking means seeing problems as products of feedback loops and structure — not isolated events to be patched.",
        "Three patterns cover most engineering situations: reinforcing loops (vicious cycles), balancing loops (stabilizers), and delays that hide causality.",
        "The alert fatigue case: more monitoring into a saturated system degrades signal quality. The fix is reducing volume, not adding it.",
        "The flaky pipeline case: retrying intermittent failures is a symptom fix. Shared mutable state in test environments was the structural cause.",
        "Technical debt is a reinforcing loop. Speed and quality are not a tradeoff long-term — they're a feedback relationship.",
        "Practical habits: ask 'why' at least twice, map feedback loops before adding new components, find the leverage point (almost always structural, not parametric).",
        "At senior level, systems thinking is what makes you fix problems permanently instead of managing them indefinitely.",
      ],
    },

    /* ── References ───────────────────────────────────────────────────── */
    {
      kind: "refs",
      items: [
        {
          title: "Thinking in Systems: A Primer",
          author: "Donella H. Meadows",
          dateLabel: "2008",
          type: "book",
          note: "The most accessible and complete introduction to systems thinking. Chapter 6 on leverage points is mandatory reading for any engineer who makes architectural decisions.",
        },
        {
          title: "The Fifth Discipline: The Art and Practice of the Learning Organization",
          author: "Peter Senge",
          dateLabel: "1990",
          type: "book",
          note: "Popularized systems thinking in organizational contexts. The 'eleven laws of the fifth discipline' map directly onto recurring patterns in engineering teams.",
        },
        {
          title: "Accelerate: The Science of Lean Software and DevOps",
          author: "Nicole Forsgren, Jez Humble & Gene Kim",
          dateLabel: "2018",
          type: "book",
          note: "Empirical research on DORA metrics demonstrates the feedback loop between quality practices and delivery performance — the evidence base for the speed/quality loop described in Case Study 3.",
        },
        {
          title: "The DevOps Handbook",
          author: "Gene Kim, Jez Humble, Patrick Debois & John Willis",
          dateLabel: "2016",
          type: "book",
          note: "Chapter on the Three Ways (Flow, Feedback, Continual Learning) is a systems thinking framework applied directly to software delivery. The feedback loop described in Case Study 1 maps to the Second Way.",
        },
        {
          title: "Site Reliability Engineering",
          author: "Niall Richard Murphy et al. (Google)",
          dateLabel: "2016",
          type: "book",
          note: "Free online. Chapters on monitoring and alerting philosophy directly address the alert fatigue reinforcing loop — particularly 'My Philosophy on Alerting' by Rob Ewaschuk.",
        },
        {
          title: "An Introduction to General Systems Thinking",
          author: "Gerald M. Weinberg",
          dateLabel: "1975",
          type: "book",
          note: "The original application of systems theory to software and computer science. Dense but foundational. Chapter 3 on the principle of indifference is particularly relevant to why local optimizations often degrade global system behavior.",
        },
      ],
    },
  ],
};
