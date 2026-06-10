export const firstPrinciplesArticle = {
  slug: "first-principles",
  title: "First-Principles Thinking for Engineers",
  excerpt:
    "Most engineers reason by analogy — they copy patterns they've seen before. First-principles thinking breaks problems to their fundamental truths and builds solutions from the ground up.",
  category: "Thinking Models",
  readMin: 8,
  color: "#4F8EF7",
  bg: "rgba(79,142,247,0.10)",
  featured: true,
  iconName: "Target",
  lead: "Most engineers have a mental pattern library. Caching problem → Redis. Authentication → JWT. Scaling bottleneck → horizontal scaling. This is not inherently wrong — patterns exist because they solved real problems. The trouble starts when you carry a pattern's hidden assumptions into a context where they don't belong.",

  blocks: [
    /* ── 1. Default mode ────────────────────────────────────────────────────── */
    { kind: "h2", text: "The Default Mode — Reasoning by Analogy" },
    {
      kind: "p",
      text: "Analogy reasoning is fast and usually safe. When a problem looks like a problem you've seen before, you reach for the solution you've used before. Senior engineers do this constantly — it's how they move quickly without rethinking everything from scratch.",
    },
    {
      kind: "p",
      text: "The failure mode appears when the analogy is wrong. Not obviously wrong — **subtly wrong**. You're copying a pattern designed for constraints that don't match yours: different scale, different consistency requirements, different team size, different cost model. You inherit its trade-offs whether they apply to you or not.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "The Microservices Epidemic",
      body: "Teams read Netflix engineering blog posts circa 2015 and migrated monoliths to distributed service meshes. Netflix's constraints: 2,000+ engineers, 100M+ users, truly independent deployment velocity as a strategic requirement. Most startups copying the pattern: 10 engineers, 10K users, one release per week. The analogy was wrong. The operational complexity was very real.",
    },

    /* ── 2. What it actually means ───────────────────────────────────────── */
    { kind: "h2", text: "What First-Principles Thinking Actually Means" },
    {
      kind: "p",
      text: "The term originates in Aristotle's _Metaphysics_: \"In every systematic inquiry where there are first principles, knowledge results from acquiring knowledge of these.\" In physics, it means stripping a problem to verifiable laws and reconstructing from there. Richard Feynman built his intuition this way — never accepting a concept he hadn't derived himself from base assumptions.",
    },
    {
      kind: "p",
      text: "For software engineers the translation is direct: **before reaching for a known solution, identify the actual problem with precision, enumerate the hard constraints, and ask what solutions those constraints permit.** Then — and only then — compare what you've derived against known patterns.",
    },
    {
      kind: "quote",
      text: "You boil things down to the most fundamental truths in a given area and then reason up from there, as opposed to reasoning by analogy.",
      by: "Elon Musk",
      source: "Foundation interview, 2012",
    },

    /* ── 3. Framework ───────────────────────────────────────────────────── */
    { kind: "h2", text: "A Four-Step Framework" },
    {
      kind: "p",
      text: "Here is a repeatable process applicable to any engineering decision, from picking a database index to choosing a system architecture:",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Decompose to atomic constraints.** Write down the hard facts: latency budget, data volume, consistency requirements, failure tolerances, team size, cost envelope. These are facts, not preferences.",
        "**Isolate the actual goal.** Separate `we need to reduce p99 latency` (goal) from `we need Redis` (proposed solution). These are different things. Conflating them is where analogy reasoning sneaks in.",
        "**Generate solutions from constraints.** Ignoring your pattern library, ask: given only these atomic facts, what approaches are possible? This forces genuinely combinatorial thinking.",
        "**Compare against known patterns.** Now bring back your pattern library. How does your ground-up solution compare to common approaches? Where does it add value, and where does it impose assumptions you don't need?",
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The Falsifiability Test",
      body: "If you can't articulate what constraint would change your solution, you haven't decomposed far enough. Every first-principles solution should be falsifiable: 'If X constraint changes, I'd choose Y differently.' This is also how you defend design decisions in a review.",
    },

    /* ── 4. Case Study 1 — Caching ─────────────────────────────────────── */
    { kind: "h2", text: "Case Study 1 — The Caching Problem" },
    {
      kind: "p",
      text: "This conversation happens on real teams every week. A product listing endpoint starts timing out and an engineer reaches for the standard pattern:",
    },
    {
      kind: "conversation",
      label: "Code review — product listing endpoint",
      exchanges: [
        {
          role: "dev",
          name: "Dev",
          text: "The product listing endpoint is timing out. We're at 2–3 second response times. I'm going to add Redis.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Why Redis specifically?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "Because that's what you use for caching. It's fast, it's what everyone uses.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Redis is a fine tool. But let's start from the actual constraints. Have you profiled what's slow?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "Yeah. There's a query joining products, categories, and inventory. It's about 800ms average.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Good. Two questions: How often does that data change? And how many distinct query shapes does this endpoint serve?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "Product catalog changes a few times per day. Inventory maybe every few minutes. Queries filtered by category — maybe 20 distinct combinations.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "So: slowly-changing data, accessed with a small bounded set of query shapes. What does that tell you about the problem?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "...That the query results are almost always the same?",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Exactly. Now why is the query slow? Run EXPLAIN ANALYZE and tell me what you see.",
        },
        {
          role: "dev",
          name: "Dev",
          text: "The inventory join is doing a full sequential scan. There's no index on product_id in the inventory table.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "So the constraint is: a slow query caused by a missing index on slowly-changing data. What's the ground-up solution to that specific problem?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "Add the index. A covering index would eliminate the join heap fetch entirely.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Right. Now compare to Redis: you need cache invalidation when inventory changes, cache warming logic, a new infra dependency, and a distributed consistency problem. What do you gain over just fixing the index?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "At this scale... nothing, really. Redis is solving a problem I don't have.",
        },
      ],
    },
    {
      kind: "p",
      text: "The fix was two indexes. Query time dropped from 800ms to 11ms. No new infrastructure:",
    },
    {
      kind: "code",
      lang: "sql",
      caption: "Fix derived from first-principles analysis — not from pattern-matching",
      code: `-- EXPLAIN ANALYZE revealed:
-- (1) Sequential scan on inventory: no index on product_id
-- (2) Category filter unindexed: full products scan per request

-- ❌ What we almost did:
--    Add Redis, write invalidation logic, handle distributed cache consistency,
--    add cache warming job, new infra runbook for the ops team.

-- ✅ What the constraints actually demanded:

CREATE INDEX idx_inventory_product_id
  ON inventory(product_id, quantity);

CREATE INDEX idx_products_category_active
  ON products(category_id, id, name, price)
  WHERE is_active = true;

-- Before: 800ms  (Seq Scan + Sort + Nested Loop)
-- After:  11ms   (Index Only Scan)
-- New infrastructure: 0 | New failure modes: 0`,
    },
    {
      kind: "callout",
      variant: "insight",
      title: "When Redis IS the right answer",
      body: "If this endpoint served 1M RPM, or if pricing was dynamic and personalized, or if product data was assembled from multiple distributed services — the constraints would change and a dedicated caching layer would be appropriate. The solution must flow from actual constraints, not convention. Redis is not wrong; it's the right answer to a different problem.",
    },

    /* ── 5. Case Study 2 — Architecture ─────────────────────────────────── */
    { kind: "h2", text: "Case Study 2 — Service Architecture at the Wrong Scale" },
    {
      kind: "p",
      text: "A 40-person engineering team is building a notification system. An engineer proposes extracting it into a dedicated microservice. The reasoning: notifications are high-volume, independently scalable, and should be deployable separately. This is a pattern with genuine merit. Is it right here?",
    },
    { kind: "h3", text: "Step 1 — Decompose to atomic constraints" },
    {
      kind: "list",
      style: "bullet",
      items: [
        "**Current volume:** 50,000 notifications/day (~0.6/second average, ~15/second peak during business hours)",
        "**Expected growth:** 3× over 18 months → ~150K/day, ~45/second peak",
        "**Ownership:** 2 engineers will own this feature long-term",
        "**Latency requirements:** Email delivery < 5 seconds, in-app < 1 second",
        "**Infrastructure:** Monolith on Postgres, Kubernetes, solid CI/CD",
        "**Hard constraint:** Notifications must be **non-blocking** — they cannot slow down the main application's write path",
      ],
    },
    { kind: "h3", text: "Step 2 — Isolate the actual goal" },
    {
      kind: "p",
      text: "The stated requirement is 'non-blocking, independently scalable notifications.' But at 0.6 req/second, the existing monolith handles this trivially — scaling is not the constraint. The actual problem is **execution decoupling**: don't block the main request thread. That's a different problem from deployment decoupling.",
    },
    { kind: "h3", text: "Step 3 — Generate solutions from constraints" },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Background job processor** (Sidekiq, BullMQ, Celery) — runs on existing infra, uses existing DB, satisfies non-blocking with zero new services. Retries and dead-letter queues included.",
        "**Message table + worker** — insert a row to `notification_queue`, a worker process polls and dispatches. Same infra, durable by default via Postgres.",
        "**Full microservice** — separate service, separate deployment, own DB, service discovery, network failure modes, distributed tracing.",
      ],
    },
    {
      kind: "callout",
      variant: "warning",
      title: "What the microservice actually adds at this scale",
      body: "Independent deployment (not needed: 2-engineer team ships together), separate scaling (not needed: 0.6 req/second), service discovery overhead, network failure modes between services, distributed tracing requirements, and two more services for the ops team to own. These costs are real. The benefits apply at 200 engineers or 10M notifications/day — not here.",
    },
    {
      kind: "p",
      text: "The first-principles answer: implement a background job processor within the monolith using a queue (Postgres-backed or Redis-backed, both already in the stack) for durability and retries. Revisit service extraction when volume exceeds 10M notifications/day or when team ownership requires it. Architecture should be driven by present constraints, not anticipated scale that may never arrive.",
    },

    /* ── 6. Case Study 3 — Index design ─────────────────────────────────── */
    { kind: "h2", text: "Case Study 3 — Index Design from the Query Up" },
    {
      kind: "p",
      text: "Most engineers add indexes one of two ways: copy an index from a tutorial, or add them reactively after a slow query alert fires. First-principles index design starts with the query's access pattern and works backward to the minimal, precise index set.",
    },
    {
      kind: "code",
      lang: "sql",
      caption: "The query — user order history with active-status filter",
      code: `SELECT
  o.id,
  o.created_at,
  o.total_cents,
  o.status,
  json_agg(
    json_build_object('id', oi.id, 'name', p.name, 'qty', oi.quantity)
  ) AS items
FROM orders o
JOIN order_items oi ON oi.order_id = o.id
JOIN products p     ON p.id = oi.product_id
WHERE
  o.user_id = $1                                       -- equality, high selectivity
  AND o.status IN ('pending', 'processing', 'shipped') -- IN filter, low cardinality
ORDER BY o.created_at DESC
LIMIT 25;`,
    },
    { kind: "h3", text: "First-principles decomposition" },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Primary filter:** `user_id = $1` — high selectivity, each user owns a tiny fraction of rows. This **must** be the leading column. Any index not starting here will be ignored by the planner.",
        "**Secondary filter:** `status IN (...)` — low cardinality (5 possible values), filtering to 3 still reduces the scan significantly. Include after `user_id`.",
        "**Sort:** `created_at DESC` — encoded into the index so Postgres satisfies `ORDER BY` via index scan, eliminating the sort step entirely.",
        "**Projection:** We select `id`, `total_cents`, `status`, `created_at`. A covering index with `INCLUDE` avoids the heap fetch — Postgres reads only index pages, never touching table pages.",
      ],
    },
    {
      kind: "code",
      lang: "sql",
      caption: "Index derived from first principles — not from a template",
      code: `-- ❌ What a template-following engineer adds:
CREATE INDEX idx_orders_user_id ON orders(user_id);
-- Problems: no coverage for status filter, requires a separate sort step,
-- heap fetch on every matching row.

-- ✅ What first-principles analysis produces:
CREATE INDEX idx_orders_user_status_date
  ON orders (
    user_id,         -- leading: primary equality filter, highest selectivity
    status,          -- pushes down the IN filter before the sort
    created_at DESC  -- encoded sort: Postgres skips the sort node entirely
  )
  INCLUDE (total_cents);  -- covering: eliminates heap fetch for projection

-- EXPLAIN (ANALYZE, BUFFERS) at 500K rows:
--   Before: Seq Scan + Filter + Sort    820ms, 2.4MB buffers
--   After:  Index Only Scan               3ms, 0.1MB buffers`,
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Universal index design checklist",
      body: "Ask in order: (1) What is the highest-cardinality equality filter? → leading column. (2) What other filters reduce rows before the scan? → subsequent columns. (3) What is the sort order? → include with DESC/ASC to skip the sort node. (4) What columns does the SELECT need? → INCLUDE for covering. Always verify with EXPLAIN (ANALYZE, BUFFERS) before and after.",
    },

    /* ── 7. When NOT to use ─────────────────────────────────────────────── */
    { kind: "h2", text: "When Not to Use First-Principles" },
    {
      kind: "p",
      text: "First-principles is cognitively expensive. It requires domain knowledge, explicit reasoning, and time. Applying it to every decision would make you slower than a team that reaches for proven patterns. The actual skill is knowing which mode is appropriate.",
    },
    {
      kind: "list",
      style: "bullet",
      items: [
        "**Use analogy when:** the problem is firmly within the solved domain (standard CRUD, commodity auth flows, well-understood infrastructure), the constraints clearly match the source pattern's context, and the cost of a slightly wrong pattern is low and reversible.",
        "**Use first-principles when:** you're making a high-cost, hard-to-reverse decision (data model, core architecture, foundational abstractions), the constraints are meaningfully unusual, or a proposed solution 'feels off' but you can't yet articulate why.",
        "**The signal:** If you can't clearly state _why_ the analogy applies — what constraints make your situation equivalent to the source pattern — you're likely missing something important. That's the moment to decompose.",
      ],
    },

    /* ── 8. Compound effect ─────────────────────────────────────────────── */
    { kind: "h2", text: "The Compound Effect" },
    {
      kind: "p",
      text: "Engineers who consistently apply first-principles thinking build something more valuable than a set of solutions: **a map of constraints and their implications**. Over time, you internalize the relationships between constraint shapes and solution shapes at a deep level.",
    },
    {
      kind: "p",
      text: "This is what looks like 'senior engineer intuition' from the outside. It's not magic — it's accumulated first-principles analyses compressed into fast pattern recognition. The patterns are grounded in constraint understanding, not just solution familiarity. The path there is deliberate: when you encounter a problem, resist the first-pattern-that-fits reflex, decompose the constraints, and reason upward. Do it enough times and the reasoning becomes second nature.",
    },

    /* ── Takeaways ──────────────────────────────────────────────────────── */
    { kind: "divider" },
    {
      kind: "takeaways",
      items: [
        "Analogy reasoning copies patterns; first-principles thinking derives solutions from the actual constraints of the specific problem.",
        "Four steps: decompose to atomic constraints → isolate the actual goal → generate solutions from constraints → compare against known patterns.",
        "The caching case: profile first, understand data volatility and access pattern shape. Adding infrastructure is a last resort, not a reflex.",
        "The architecture case: service extraction solves deployment and team-independence problems — not throughput problems you don't have yet.",
        "The index case: design indexes from filter cardinality, sort order, and projection columns — not from templates or generic best practices.",
        "First-principles is expensive. Use it for high-cost, hard-to-reverse decisions. Use analogy for well-understood, low-risk patterns. The meta-skill is knowing the difference.",
      ],
    },

    /* ── References ─────────────────────────────────────────────────────── */
    {
      kind: "refs",
      items: [
        {
          title: "Metaphysics",
          author: "Aristotle",
          dateLabel: "c. 350 BCE",
          type: "book",
          note: "Origin of the first-principles concept. Book Alpha, Chapter 2: knowledge results from understanding first principles.",
        },
        {
          title: "The Feynman Lectures on Physics, Vol. 1",
          author: "Richard P. Feynman",
          dateLabel: "1963",
          type: "book",
          note: "Demonstrates first-principles derivation as a teaching method throughout. Essential for understanding how a physicist approaches problems.",
        },
        {
          title: "Foundation Interview — First Principles Thinking",
          author: "Elon Musk",
          dateLabel: "2012",
          type: "talk",
          note: "The clearest public articulation of the analogy vs. first-principles distinction in engineering contexts.",
        },
        {
          title: "A Philosophy of Software Design",
          author: "John Ousterhout",
          dateLabel: "2018",
          type: "book",
          note: "Chapter 4 on modules and information hiding is a masterclass in constraint-driven decomposition of software abstractions.",
        },
        {
          title: "Designing Data-Intensive Applications",
          author: "Martin Kleppmann",
          dateLabel: "2017",
          type: "book",
          note: "Chapters on replication and consistency demonstrate how to derive architectural decisions from consistency constraints.",
        },
        {
          title: "Building Microservices (2nd ed.)",
          author: "Sam Newman",
          dateLabel: "2021",
          type: "book",
          note: "Chapters 1 and 3 address when to split services based on actual organizational and scaling constraints — directly relevant to Case Study 2.",
        },
        {
          title: "The Pragmatic Programmer (20th Anniversary Ed.)",
          author: "David Thomas & Andrew Hunt",
          dateLabel: "2019",
          type: "book",
          note: "Tracer bullets and prototype principles are first-principles thinking applied to software delivery: don't assume, validate from base truths.",
        },
      ],
    },
  ],
};
