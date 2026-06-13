import type { MindsetArticleContent } from "../index";

export const readingDocumentationArticle: MindsetArticleContent = {
  slug: "reading-documentation",
  title: "How to Actually Read Documentation",
  excerpt:
    "Most developers skim docs looking for copy-paste answers. Engineers read them to build accurate mental models. There's a technique to reading documentation that compounds over time.",
  category: "Learning",
  readMin: 6,
  color: "#C77DFF",
  bg: "rgba(199,125,255,0.10)",
  iconName: "BookOpen",
  lead: "Two engineers hit the same Stripe API error: 'Invalid request: amount must be a positive integer.' The first goes to Stack Overflow, copies a snippet that converts the float to an integer, and ships it. The second opens the Stripe documentation, reads what 'amount' actually means, discovers it should be in the smallest currency unit (cents for USD), and realizes the entire pricing layer has been sending wrong values for three months. Both 'read the docs.' Only one actually read them.",

  blocks: [
    /* ── 1. Two modes of reading ───────────────────────────────────────────── */
    { kind: "h2", text: "Two Modes of Reading Documentation" },
    {
      kind: "p",
      text: "Most developers read documentation in search mode: they have a specific problem, they scan for keywords, they find a code example that looks like their situation, and they copy it. This works for well-understood patterns. It fails for anything novel, anything where the example doesn't quite match your situation, or anything where the right answer depends on understanding what the API actually does rather than what it looks like.",
    },
    {
      kind: "p",
      text: "Engineers read documentation in model-building mode: they read to understand what a system does, how it thinks about its own domain, and what constraints it operates under. This takes more time upfront and pays dividends on every subsequent interaction with that system. The mental model they build from the documentation means they can predict behavior, diagnose errors, and make confident decisions without re-reading the docs for every edge case.",
    },
    {
      kind: "callout",
      variant: "insight",
      title: "The compounding return on mental models",
      body: "An accurate mental model of a system's behavior compounds. The first time you read the Redis documentation carefully, you invest an hour. But every Redis problem you encounter for the next three years becomes faster to solve because your mental model tells you what to look for. Copy-paste engineering has no compounding return — every new problem requires a fresh search.",
    },

    /* ── 2. Three layers of documentation ─────────────────────────────────── */
    { kind: "h2", text: "The Three Layers of Documentation" },
    {
      kind: "p",
      text: "Technical documentation is not uniform. Different parts serve different purposes, and reading them in the right order builds understanding faster:",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Conceptual documentation (the mental model layer).** Explains what the system is, what problem it solves, and the key concepts in its domain. This is where you learn the vocabulary. In Stripe's docs, this is the 'How Stripe works' section — payments, customers, payment methods, and how they relate. Read this before the reference. It shapes every reference page you read afterward.",
        "**Guide documentation (the how-to layer).** Step-by-step instructions for specific tasks. 'How to handle webhooks,' 'How to implement 3D Secure,' 'How to set up recurring billing.' These are contextual — read them when you're implementing that specific feature. They assume you have the conceptual model.",
        "**Reference documentation (the lookup layer).** Complete API surface: every endpoint, every parameter, every return type, every error code. Read individual reference pages deeply when you're implementing a specific API call. Reading the entire reference before you have a problem is usually wasted — it's optimized for lookup, not learning.",
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Start with concepts, not endpoints",
      body: "Most developers skip straight to the API reference. This is backwards. The concepts section takes 20 minutes and gives you the framework to understand everything in the reference. Without it, you're pattern-matching on code examples without understanding what the parameters mean or why. With it, you can read a reference page and immediately understand the design intent.",
    },

    /* ── 3. How to read a reference page ──────────────────────────────────── */
    { kind: "h2", text: "How to Read a Reference Page Properly" },
    {
      kind: "p",
      text: "When you arrive at a specific API reference page, there's an order of reading that extracts maximum information:",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Read the description first, not the parameters.** The description tells you what this endpoint actually does, its design intent, and any important behavioral constraints. Skipping to parameters first means you might miss 'Note: this operation is not atomic' or 'This endpoint will only return up to 100 results per page.'",
        "**Read parameter types and constraints precisely.** 'Integer,' 'string,' and 'boolean' are not all the information. 'Positive integer in the smallest currency unit' is different from 'decimal number of dollars.' Read the constraints column — minimum, maximum, required vs. optional, format restrictions.",
        "**Read the error codes section.** The error codes tell you what can go wrong and — more importantly — what the system considers to be normal failure modes. 'card_declined' is a normal outcome. 'api_error' is an abnormal one. Understanding this distinction shapes how you write error handling.",
        "**Read the example responses.** The shape of the response object reveals the system's data model. Look for fields you didn't see in the request — they tell you about derived state, implicit behavior, and what the API considers important enough to always return.",
        "**Check the changelog or 'version history' if present.** Breaking changes, deprecated fields, and new parameters often appear here. This is where you learn that a field you're relying on will be removed in three months.",
      ],
    },

    /* ── 4. Case Study 1 — The Stripe Amount Bug ──────────────────────────── */
    { kind: "h2", text: "Case Study 1 — The Three-Month Pricing Bug" },
    {
      kind: "p",
      text: "The Stripe API's `amount` parameter is documented as: 'Amount intended to be collected by this payment. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge $1.00).' This single sentence contains three constraints: positive, integer, smallest currency unit.",
    },
    {
      kind: "conversation",
      label: "Code review — payment integration",
      exchanges: [
        {
          role: "dev",
          name: "Dev",
          text: "I'm getting 'amount must be a positive integer' from Stripe. I'm sending the price as a float — I'll just parseInt it.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Before you fix the error — what does Stripe actually expect the amount to represent?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "The price of the product. We store it as dollars and cents — 29.99.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Check the Stripe docs for what 'amount' means specifically.",
        },
        {
          role: "dev",
          name: "Dev",
          text: "...'smallest currency unit.' So they want cents, not dollars.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Right. If you parseInt(29.99), you get 29. You'd be charging $0.29 instead of $29.99. How long has this been in production?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "Three months.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "So every payment for three months has been 100× undercharged. This is why you read the parameter description, not just the parameter name.",
        },
      ],
    },
    {
      kind: "code",
      lang: "typescript",
      caption: "The fix — and why parseInt was wrong",
      code: `// ❌ What the developer was about to do:
// parseInt(29.99) = 29 → charges $0.29 instead of $29.99
const amount = parseInt(product.price);

// ❌ Also wrong — parseFloat then parseInt loses the cents:
// parseFloat("29.99") = 29.99 → parseInt(29.99) = 29
const amount = parseInt(parseFloat(product.price));

// ✅ What the documentation actually requires:
// Stripe amount = price in cents (smallest currency unit)
// 29.99 dollars → 2999 cents
const amount = Math.round(product.priceInDollars * 100);

// Why Math.round and not Math.floor?
// Floating point: 29.99 * 100 = 2998.9999999999998 in JavaScript
// Math.round handles floating-point imprecision correctly here.
// The safest approach stores prices as integers (cents) from the start.`,
    },

    /* ── 5. Case Study 2 — Reading error documentation ────────────────────── */
    { kind: "h2", text: "Case Study 2 — Reading Error Documentation" },
    {
      kind: "p",
      text: "Most developers read error documentation only when they encounter an error. Engineers read it during initial integration to understand the failure modes before they happen in production. Here's the difference in practice:",
    },
    {
      kind: "p",
      text: "The PostgreSQL documentation for the `UNIQUE` constraint violation error (`23505`) states: 'ERROR: duplicate key value violates unique constraint.' Most implementations catch this as a generic database error. But reading the error documentation reveals three things:",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "The error detail field contains the conflicting key value: `Key (email)=(user@example.com) already exists.` This is parseable — you can extract which field caused the conflict.",
        "The constraint name is in the error object: `constraint: 'users_email_key'`. Named constraints let you distinguish between 'duplicate email' and 'duplicate username' without parsing string messages.",
        "This is a *expected* error for concurrent upsert patterns — not a system failure. It should be caught and handled gracefully (return 'email already taken'), not treated as an unexpected 500.",
      ],
    },
    {
      kind: "code",
      lang: "typescript",
      caption: "Using documentation-informed error handling",
      code: `// ❌ Ignoring what the documentation tells you about error structure:
try {
  await db.query('INSERT INTO users (email) VALUES ($1)', [email]);
} catch (err) {
  throw new Error('Database error'); // information destroyed
}

// ✅ Using what the Postgres error documentation tells you:
// - err.code === '23505' means unique constraint violation
// - err.constraint contains the constraint name
// - err.detail contains the conflicting value
try {
  await db.query('INSERT INTO users (email) VALUES ($1)', [email]);
} catch (err: any) {
  if (err.code === '23505') {
    // Unique constraint violation — this is expected, not a system error
    if (err.constraint === 'users_email_key') {
      throw new ConflictError('An account with this email already exists');
    }
    if (err.constraint === 'users_username_key') {
      throw new ConflictError('This username is already taken');
    }
  }
  // Re-throw unexpected errors
  throw err;
}`,
    },

    /* ── 6. Building your mental model ─────────────────────────────────────── */
    { kind: "h2", text: "Building Your Mental Model Across Time" },
    {
      kind: "p",
      text: "Reading documentation well is a skill that compounds. Here's how to build a mental model systematically when starting with a new system:",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Start with the 'why' documentation.** Every major system has a document explaining why it exists and what problem it's designed to solve. For Redis, it's the introduction explaining in-memory data structures. For PostgreSQL, it's the concepts section on MVCC and transactions. This framing shapes everything.",
        "**Read the 'gotchas' and 'limitations' sections actively.** These tell you about the system's design trade-offs. Redis's note that data may be lost on restart without persistence configuration is not a footnote — it's a constraint that determines whether Redis is suitable for your use case.",
        "**When you encounter unexpected behavior, read the docs instead of Stack Overflow first.** Stack Overflow answers tell you what worked for someone else's setup. The documentation tells you why the behavior exists, which lets you determine whether the fix applies to your situation.",
        "**Keep a personal note of documentation insights.** When you discover a non-obvious constraint or behavioral fact ('PostgreSQL JSONB operators use GIN indexes, not B-tree'), write it down. Over time this becomes a personalized reference that's faster to search than official docs.",
      ],
    },

    /* ── Takeaways ─────────────────────────────────────────────────────────── */
    { kind: "divider" },
    {
      kind: "takeaways",
      items: [
        "Two modes of reading: search mode (find a code example, copy it) vs. model-building mode (understand what the system does and why). Only model-building compounds.",
        "Three layers of documentation: conceptual (what and why) → guide (how to) → reference (complete API surface). Read in this order for a new system; read concepts before reference.",
        "When reading a reference page: description first, then parameter constraints precisely, then error codes, then response shape, then changelog.",
        "The Stripe amount bug: parseInt(29.99) = 29, which Stripe charges as $0.29. Three months of 100× undercharging came from not reading 'smallest currency unit' in the parameter description.",
        "Error documentation tells you what normal failure modes are. Postgres error 23505 has a parseable detail field and a constraint name — reading the docs means you can distinguish 'duplicate email' from 'duplicate username' in your error handler.",
        "Mental model building compounds: one hour of conceptual reading pays dividends on every future problem with that system. Search-mode reading has no compounding return.",
        "When behavior is unexpected, read the docs before Stack Overflow. Docs explain why; SO answers explain what worked for someone else's different situation.",
      ],
    },

    /* ── References ────────────────────────────────────────────────────────── */
    {
      kind: "refs",
      items: [
        {
          title: "PostgreSQL Documentation — Error Codes",
          author: "PostgreSQL Global Development Group",
          dateLabel: "2024",
          type: "article",
          note: "Appendix A of the PostgreSQL documentation lists all error codes with their sqlstate codes, descriptions, and in many cases the fields available in the error object. The model for how to read technical reference documentation.",
        },
        {
          title: "The Art of Reading Source Code",
          author: "Peter Seibel",
          dateLabel: "2009",
          type: "book",
          note: "Coders at Work — Seibel's interviews with legendary programmers consistently reveal that deep reading (of code and documentation) is how they built mental models. The Jamie Zawinski and Guy Steele interviews are particularly relevant.",
        },
        {
          title: "How to Read a Book",
          author: "Mortimer J. Adler & Charles Van Doren",
          dateLabel: "1940",
          type: "book",
          note: "The classic on reading for understanding rather than information. The distinction between analytical reading (building a mental model) and inspectional reading (searching for answers) maps directly to the documentation reading modes described in this article.",
        },
        {
          title: "The Documentation System",
          author: "Daniele Procida",
          dateLabel: "2017",
          type: "article",
          note: "The Diátaxis framework (tutorials, how-to guides, reference, explanation) is the most influential model for understanding why documentation has different sections and what each is for — directly useful for knowing which section to read for what purpose.",
        },
        {
          title: "A Mind for Numbers",
          author: "Barbara Oakley",
          dateLabel: "2014",
          type: "book",
          note: "Chapters on chunking and mental models explain the cognitive science behind why model-building reading is more effective than pattern-matching for long-term retention and transfer to new problems.",
        },
      ],
    },
  ],
};
