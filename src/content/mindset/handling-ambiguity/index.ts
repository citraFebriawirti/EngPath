import type { MindsetArticleContent } from "../index";

export const handlingAmbiguityArticle: MindsetArticleContent = {
  slug: "handling-ambiguity",
  title: "Handling Ambiguity: From Vague Requirements to Clear Action",
  excerpt:
    "Real engineering problems are rarely well-defined. Learning to decompose ambiguous requirements into concrete, implementable actions is one of the most underrated skills in software engineering.",
  category: "Problem Solving",
  readMin: 9,
  color: "#F39B52",
  bg: "rgba(243,155,82,0.10)",
  iconName: "BrainCircuit",
  lead: "The ticket arrives: 'Improve the performance of the dashboard.' No numbers. No context. No definition of done. A junior engineer opens a PR within the hour — they cached something, it feels faster. A senior engineer sends three clarifying questions before writing a line of code. Six weeks later, the junior's cache is rolled back because it caused stale data bugs. The senior's work reduced p95 load time from 8.2 seconds to 1.1 seconds and is still running in production. The difference wasn't skill. It was how each person handled the ambiguity at the start.",

  blocks: [
    /* ── 1. Ambiguity is the normal state ──────────────────────────────────── */
    { kind: "h2", text: "Ambiguity Is Not an Exception — It's the Default" },
    {
      kind: "p",
      text: "There's a persistent myth in software engineering that good requirements exist somewhere upstream and engineers just need better processes to receive them. In reality, most requirements start as problems, not specifications. 'Users are frustrated with checkout.' 'The admin panel is slow.' 'We need a notification system.' These are real business problems. They're not engineering tasks — yet.",
    },
    {
      kind: "p",
      text: "The engineer who waits for complete requirements before acting will wait forever. The engineer who jumps to implementation without interrogating the requirement will build the wrong thing with confidence. The skill is neither waiting nor jumping — it's structured clarification: moving from a vague problem to a specific, testable definition of done in the shortest path possible.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "The cost of building the wrong thing",
      body: "Studies from the Standish Group consistently show that 40–60% of software features are never used after release. Most of these weren't built poorly — they were built precisely, for the wrong problem. Unclear requirements at the start compound through the entire delivery cycle: wrong architecture, misdirected effort, wasted code review, confusing documentation. The cheapest moment to clarify is before the first commit.",
    },

    /* ── 2. Why requirements are vague ─────────────────────────────────────── */
    { kind: "h2", text: "Why Requirements Start Vague" },
    {
      kind: "p",
      text: "Vague requirements aren't a failure of process — they're a natural consequence of who writes them. Product managers, stakeholders, and users think in outcomes, not implementations. 'Make it faster' is a clear outcome. 'Reduce the P95 response time of the /api/reports endpoint from 7.3s to under 2s as measured by Datadog APM' is a clear engineering task. The translation between them is the engineer's responsibility.",
    },
    {
      kind: "list",
      style: "bullet",
      items: [
        "**Stakeholders describe symptoms, not causes.** 'Users are dropping off at checkout' is an observation. The cause could be latency, UX confusion, missing payment methods, or a rendering bug on iOS.",
        "**Business problems have implicit constraints.** 'We need a reporting system' comes with unstated assumptions: how many users, what data volume, what export formats, what access control model. None of these appear in the original requirement.",
        "**'Done' means different things to different people.** Engineering done, product done, customer done, and legal done are different states. Assuming alignment without checking it is where projects quietly go off track.",
      ],
    },

    /* ── 3. Five questions ─────────────────────────────────────────────────── */
    { kind: "h2", text: "Five Questions That Clarify Any Requirement" },
    {
      kind: "p",
      text: "Before beginning any non-trivial engineering work, five questions will surface the information you need to build correctly. You don't always need answers to all five — but asking them forces the requirement to become concrete:",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**What does success look like, measured how?** Without a metric, 'done' is whatever someone decides it is after the fact. Push for a number: 'load time under 2 seconds,' '90% of orders processed without manual intervention,' 'zero customer-visible errors for 30 consecutive days.' Metrics make disagreement productive instead of political.",
        "**Who is the user, and what is their actual workflow?** 'Users' is not specific enough. An admin's workflow and a customer's workflow are different. A power user's tolerance for complexity differs from a casual user's. Understanding the specific workflow reveals whether the proposed solution even addresses the right moment in the journey.",
        "**What are the hard constraints?** Timeline, budget, infrastructure, compliance, and team capacity are real constraints that must shape the solution. Discovering them after building something is expensive. 'Does this need to work in the EU under GDPR?' is better asked before the data model is designed.",
        "**What already exists that touches this problem?** New requirements rarely exist in isolation. Which existing code, systems, or teams are involved? What assumptions does the new feature make about existing behavior? Understanding the blast radius of the change before building it prevents architectural surprises.",
        "**What is explicitly out of scope for now?** Scope creep happens between the first conversation and the tenth. Naming what you're _not_ building is as important as naming what you are. 'V1 will not support bulk exports' is a decision, not a failure — and making it explicit prevents a feature request from silently becoming a requirement.",
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Write the definition of done before writing code",
      body: "A one-paragraph document stating: the problem being solved, who it affects, what success looks like (with a measurable signal), and what is out of scope — created before any implementation begins — is one of the highest-leverage things an engineer can do. It takes 20 minutes. It saves 20 hours of rework. Share it with the stakeholder and ask for a 'looks right' before proceeding.",
    },

    /* ── 4. Case Study 1 — "Make the dashboard faster" ────────────────────── */
    { kind: "h2", text: "Case Study 1 — 'Make the Dashboard Faster'" },
    {
      kind: "p",
      text: "The ticket says: 'Dashboard loading is too slow, users are complaining.' A junior engineer opens the database query logs and immediately adds caching to the two slowest queries. A senior engineer starts with a different conversation:",
    },
    {
      kind: "conversation",
      label: "Requirements clarification — dashboard performance",
      exchanges: [
        {
          role: "senior",
          name: "Engineer",
          text: "Before I dig in — what does 'too slow' mean exactly? Do we have a target load time?",
        },
        {
          role: "dev",
          name: "PM",
          text: "Users are saying it takes 10+ seconds sometimes. We just want it to feel fast.",
        },
        {
          role: "senior",
          name: "Engineer",
          text: "Got it. Which users are reporting this — all users, or specific ones? And which part of the dashboard — the initial load, or something that happens after?",
        },
        {
          role: "dev",
          name: "PM",
          text: "Mostly enterprise customers, the ones with large accounts. And it's the initial load.",
        },
        {
          role: "senior",
          name: "Engineer",
          text: "That's useful. Enterprise accounts have more data — this is likely a query scaling problem, not a general slowness. What's our success target? Under 2 seconds? Under 3?",
        },
        {
          role: "dev",
          name: "PM",
          text: "Under 3 seconds would make the complaints stop. Under 2 would be ideal.",
        },
        {
          role: "senior",
          name: "Engineer",
          text: "And are there any constraints? We have a scheduled maintenance window next Thursday — can we deploy a DB migration then?",
        },
        {
          role: "dev",
          name: "PM",
          text: "Yes, that works. The next board review where this comes up is in three weeks.",
        },
      ],
    },
    {
      kind: "p",
      text: "With this information, the engineer now has a completely different picture: the problem is scoped to enterprise accounts (high data volume), the target is measurable (under 3 seconds, ideally under 2), and a constraint is known (DB migration window available). The investigation is targeted from the start.",
    },
    {
      kind: "code",
      lang: "sql",
      caption: "What the investigation revealed — the actual query problem",
      code: `-- EXPLAIN ANALYZE on the dashboard aggregate query for a large account:
-- (1) accounts table: sequential scan, 840,000 rows
-- (2) events join: no index on account_id + created_at
-- (3) aggregation: sorting 1.2M rows in memory

-- Before: 8.4s average for accounts with > 50K events

-- The cache the junior added would have masked this for ~5 minutes,
-- then the cold-cache hit would have been the same 8.4 seconds.

-- Fix derived from understanding the actual problem:
CREATE INDEX CONCURRENTLY idx_events_account_created
  ON events (account_id, created_at DESC)
  INCLUDE (type, value);

-- After: 0.6s average for the same large accounts.
-- No cache, no new infrastructure, no stale data risk.
-- Result: measurably under the 2-second target.`,
    },
    {
      kind: "callout",
      variant: "insight",
      title: "The clarification saved three weeks",
      body: "Without the conversation, the engineer would have added caching to 'the slow queries' — which were slow because of missing indexes. A cache would have appeared to work (warm-cache hits are fast), shipped to production, and hidden the problem until cache expiry or a new large account hit the cold path. The clarification took 15 minutes and pointed directly at the structural cause.",
    },

    /* ── 5. Case Study 2 — "Add notifications" ────────────────────────────── */
    { kind: "h2", text: "Case Study 2 — Scoping 'Add Notifications' to a Shippable MVP" },
    {
      kind: "p",
      text: "The product roadmap item reads: 'Notification system — email + in-app + push.' An initial estimate comes back at 6 months. A senior engineer sits down with the PM and works through the five clarifying questions. An hour later, the scope has changed:",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Success metric:** 'Users get notified when their order ships.' Not 'a full notification system.' The metric is order shipment notification delivery rate > 98%.",
        "**User + workflow:** The primary user is a customer who placed an order and wants to know when it ships. They check email. In-app and push are low-priority for this audience.",
        "**Hard constraints:** Email infrastructure (SendGrid) is already set up. In-app requires a real-time connection layer that doesn't exist. Push requires mobile app changes that are on a separate team's roadmap.",
        "**What exists:** Order status updates already fire a webhook event when status changes to 'shipped.' The infrastructure is already there — it just doesn't trigger an email.",
        "**Out of scope for V1:** In-app notifications, push notifications, notification preferences center, unsubscribe management (will use SendGrid's built-in), notification history.",
      ],
    },
    {
      kind: "p",
      text: "The 6-month 'notification system' became a 2-sprint task: hook the existing `order.shipped` webhook event to SendGrid, use a pre-built transactional email template, and deploy. The remaining features became a prioritized backlog — built when users actually requested them, not speculatively.",
    },
    {
      kind: "callout",
      variant: "insight",
      title: "Scope is a product decision, not a technical one",
      body: "Engineers often scope too wide because they're solving for all possible future requirements. But future requirements are hypothetical. The user asking 'when does my order ship?' is real. Start with the real user, deliver the real value, and expand the scope only when the next real user need is identified. Over-scoping is waste disguised as thoroughness.",
    },

    /* ── 6. Writing the Problem Statement ─────────────────────────────────── */
    { kind: "h2", text: "Writing a Problem Statement Before Coding" },
    {
      kind: "p",
      text: "The best output of the clarification process is a short written problem statement. Not a PRD, not a spec — a paragraph. It forces precision, creates alignment, and becomes the north star when scope creep appears mid-implementation. Here's a template that works:",
    },
    {
      kind: "code",
      lang: "markdown",
      caption: "Problem statement template — fill this in before writing code",
      code: `## Problem Statement: [Feature Name]

**Problem:** [One sentence describing the user-visible problem being solved]

**Affected users:** [Specific user type(s), not "users" in general]

**Success metric:** [Measurable signal that tells us this is done and working]

**Constraints:** [Hard limits: timeline, infrastructure, compliance, team capacity]

**Out of scope (V1):** [Explicit list of what we are NOT building now]

**Open questions:** [Anything still unclear that needs an answer before or during build]

---
Example:

## Problem Statement: Dashboard Load Performance

Problem: Enterprise customers (accounts with > 10K events) experience 8–12 second
         dashboard load times, causing support tickets and churn risk.

Affected users: Enterprise tier accounts (~120 accounts, flagged in Datadog).

Success metric: P95 dashboard load time < 2s for enterprise accounts,
                measured in Datadog APM over a 7-day window post-deploy.

Constraints: DB migration must happen in Thursday maintenance window.
             Cannot change the dashboard data model (used by exports team).

Out of scope (V1): Incremental loading, skeleton screens, caching layer.

Open questions: Should we also address the reports page (different endpoint)?
                Answer needed from PM before we expand scope.`,
    },

    /* ── 7. When to ask vs when to decide ─────────────────────────────────── */
    { kind: "h2", text: "When to Ask vs When to Decide" },
    {
      kind: "p",
      text: "Not every ambiguity needs a stakeholder conversation. Asking too many questions signals indecision. The distinction is about ownership and reversibility:",
    },
    {
      kind: "list",
      style: "bullet",
      items: [
        "**Ask when:** the decision affects user-visible behavior, the requirement contradicts another requirement, the choice has significant architectural consequences, or a reasonable person could interpret the requirement multiple ways and each interpretation leads to a different product outcome.",
        "**Decide when:** the ambiguity is in implementation details rather than product behavior, the decision is easily reversible with a future PR, your experience gives you a reasonable default, or asking would create more disruption than just picking the sensible option.",
        "**Document both:** Whether you asked or decided, write down the assumption. 'I'm assuming V1 doesn't need pagination since the dataset is bounded at ~200 rows — revisit if that changes' is a one-sentence hedge that prevents a future misunderstanding.",
      ],
    },
    {
      kind: "quote",
      text: "The beginning of wisdom is the discovery of our own ignorance.",
      by: "Will Durant",
      source: "The Story of Philosophy, 1926",
    },

    /* ── Takeaways ─────────────────────────────────────────────────────────── */
    { kind: "divider" },
    {
      kind: "takeaways",
      items: [
        "Ambiguous requirements are the default, not an exception. The engineer's job is to translate business problems into precise engineering tasks — not to wait for someone else to do it.",
        "Five questions unlock most requirements: What does success look like measured how? Who is the actual user? What are the hard constraints? What already exists? What is explicitly out of scope?",
        "Write a one-paragraph problem statement before writing code: problem, affected users, success metric, constraints, and out-of-scope items. Takes 20 minutes, saves 20 hours.",
        "Dashboard case: clarification revealed a query scaling problem, not a caching opportunity. A 15-minute conversation prevented 3 weeks of misdirected work.",
        "Notifications case: a 6-month feature became a 2-sprint task by scoping to the real user need (shipment emails) and explicitly deferring everything else.",
        "Ask when the decision affects user-visible behavior or has architectural consequences. Decide when it's an implementation detail or reversible. Always document the assumption either way.",
        "Over-scoping is waste disguised as thoroughness. Build for real users with real needs today; expand scope when the next real need is confirmed.",
      ],
    },

    /* ── References ────────────────────────────────────────────────────────── */
    {
      kind: "refs",
      items: [
        {
          title: "Shape Up: Stop Running in Circles and Ship Work that Matters",
          author: "Ryan Singer (Basecamp)",
          dateLabel: "2019",
          type: "book",
          note: "Free online. The 'shaping' methodology is entirely about converting ambiguous problems into well-scoped bets before any engineering begins. The concept of 'appetite' (how much time a problem is worth) replaces estimation with deliberate scoping.",
        },
        {
          title: "The Chaos Report",
          author: "The Standish Group",
          dateLabel: "2020",
          type: "article",
          note: "Annual survey of software project outcomes. The consistent finding that 40–60% of features go unused is the empirical case for investing in requirement clarity before building.",
        },
        {
          title: "Continuous Discovery Habits",
          author: "Teresa Torres",
          dateLabel: "2021",
          type: "book",
          note: "Practical framework for connecting engineering work to real user outcomes. The 'opportunity solution tree' technique is directly applicable to decomposing ambiguous requirements into concrete options.",
        },
        {
          title: "The Pragmatic Programmer (20th Anniversary Ed.)",
          author: "David Thomas & Andrew Hunt",
          dateLabel: "2019",
          type: "book",
          note: "Chapter on requirements gathering (Tip 52: Don't Gather Requirements — Dig for Them) frames the engineer's role as excavating real requirements rather than passively receiving them.",
        },
        {
          title: "Competing Against Luck",
          author: "Clayton M. Christensen, Taddy Hall, Karen Dillon & David S. Duncan",
          dateLabel: "2016",
          type: "book",
          note: "The 'Jobs to Be Done' framework provides the clearest model for understanding what users actually need versus what they ask for — the core skill behind clarifying ambiguous requirements.",
        },
      ],
    },
  ],
};
