import type { MindsetArticleContent } from "../index";

export const feedbackLoopsArticle: MindsetArticleContent = {
  slug: "feedback-loops",
  title: "Tightening Your Feedback Loops",
  excerpt:
    "The fastest engineers aren't the ones who type faster — they're the ones with the tightest feedback loops. Tests, hot reload, feature flags, and observability all shorten the loop between idea and validation.",
  category: "Productivity",
  readMin: 7,
  color: "#5C9CE6",
  bg: "rgba(92,156,230,0.10)",
  iconName: "Zap",
  lead: "Two engineers are building the same feature. Engineer A writes code, runs the full test suite (8 minutes), deploys to staging, manually clicks through the UI, finds a bug, fixes it, repeats. Engineer B writes code, runs the single relevant test (4 seconds), sees a failing assertion immediately, fixes the logic, confirms it locally, deploys. They work the same hours. Engineer B ships in half the time — not because they're smarter or faster, but because their feedback loop is tighter. The gap between action and validation determines the speed of learning, and learning speed determines engineering velocity.",

  blocks: [
    /* ── 1. What feedback loops are ───────────────────────────────────────── */
    { kind: "h2", text: "What Feedback Loops Are in Engineering" },
    {
      kind: "p",
      text: "A feedback loop is the cycle between making a change and knowing whether it worked. Every engineer operates inside multiple nested feedback loops simultaneously: the compiler tells you about type errors in seconds, unit tests tell you about logic errors in minutes, integration tests tell you about system behavior in minutes to hours, production monitoring tells you about real-world behavior in minutes to days.",
    },
    {
      kind: "p",
      text: "The tighter each loop, the faster you learn. The faster you learn, the faster you can iterate. The faster you iterate, the more problems you can solve in a given time. This is why feedback loop length is a better predictor of engineering velocity than raw coding speed — most engineering time is spent validating, not writing.",
    },
    {
      kind: "callout",
      variant: "insight",
      title: "The DORA research on feedback loops",
      body: "The DevOps Research and Assessment (DORA) study — the largest empirical study of engineering team performance — found that elite teams have deploy-to-recovery times of less than one hour. Low performers take days to weeks. The difference isn't team size or technology stack. It's the speed of the feedback loop between deploying code and knowing whether it works. Tighter feedback enables faster recovery, which enables more frequent deployment, which enables faster learning.",
    },

    /* ── 2. The levels of feedback ─────────────────────────────────────────── */
    { kind: "h2", text: "The Levels of Feedback" },
    {
      kind: "p",
      text: "Think of engineering feedback as a stack. Faster loops should catch more specific errors. Slower loops should catch the errors faster loops can't:",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Level 1 — Editor feedback (milliseconds).** Type checking, linting, format errors. Your editor catches these as you type. This is the fastest loop — tighten it by using TypeScript, enabling strict mode, and configuring a good linter. Errors caught here cost nothing to fix.",
        "**Level 2 — Unit tests (seconds).** Single-function or single-module behavior. Should run in under 10 seconds for the files you're touching. Errors caught here are cheap to fix — you have full context and haven't moved on.",
        "**Level 3 — Integration tests (minutes).** How multiple components work together. Should run in under 5 minutes for the affected area. These catch contract violations, API shape mismatches, and behavioral interactions that unit tests miss.",
        "**Level 4 — End-to-end / staging (minutes to hours).** Full system behavior. These are your slowest feedback loop — use them for confidence before production, not as your primary development loop.",
        "**Level 5 — Production (continuous).** Real user behavior under real conditions. Observability (metrics, traces, logs, error rates) is the feedback mechanism. This loop should never be your first indicator of a bug — that means loops 1–4 failed.",
      ],
    },
    {
      kind: "callout",
      variant: "warning",
      title: "The inverted test pyramid",
      body: "Many teams have an inverted test pyramid: few unit tests, few integration tests, many end-to-end tests that take 40+ minutes to run. This is the worst configuration for feedback speed. The end-to-end tests catch real problems but they do so slowly, making the development loop painful. Inverting back to many fast unit tests, a healthy integration layer, and selective E2E tests for critical paths dramatically tightens the development feedback loop.",
    },

    /* ── 3. Case Study 1 — Before and After ────────────────────────────────── */
    { kind: "h2", text: "Case Study 1 — Tightening a Development Feedback Loop" },
    {
      kind: "p",
      text: "A backend engineer is working on a new API endpoint that processes order data and returns a pricing summary. Their current workflow takes a full build-and-test cycle of 12 minutes. Here's the before and after:",
    },
    {
      kind: "code",
      lang: "text",
      caption: "Before vs. after — development feedback loop for a single endpoint",
      code: `BEFORE (12-minute loop)
──────────────────────────────────────────────────────────────────
Write code change
↓
Run full test suite: 8 min (all 847 tests)
  → finds failure in pricing logic
Fix the bug
↓
Run full test suite again: 8 min
  → passes
Deploy to staging: 3 min
↓
Manual test in browser: 2 min
  → works

One iteration: ~21 minutes. 3 iterations to get it right: 63 minutes.

AFTER (40-second loop)
──────────────────────────────────────────────────────────────────
Write code change
↓
Run test for this file only: 4 sec
  → npx jest pricing.service.test.ts --watch
  → immediate failure on line 47, exact assertion shown
Fix the bug
↓
Watch mode re-runs automatically: 4 sec
  → passes
Run integration tests for this API: 30 sec
  → passes
Deploy when satisfied (CI runs full suite async)

One iteration: ~40 seconds. 3 iterations to get it right: 2 minutes.
Speedup: 30× faster iteration. Same final confidence via CI.`,
    },
    {
      kind: "p",
      text: "The key change isn't technology — it's the discipline of running the smallest test that can catch the current bug. Running 847 tests when you changed one file is waste. Running the 3 tests for that file is signal.",
    },

    /* ── 4. Hot reload and local development ───────────────────────────────── */
    { kind: "h2", text: "Hot Reload: The Frontend Feedback Revolution" },
    {
      kind: "p",
      text: "For frontend engineers, hot module replacement (HMR) and fast refresh are the most significant feedback loop improvements in the past decade. Without them, a UI change requires: save → build → reload → navigate to the right state → verify. With them: save → see the change in place, with state preserved. The difference is 20–30 seconds per iteration vs. under a second.",
    },
    {
      kind: "list",
      style: "bullet",
      items: [
        "**Vite / Next.js fast refresh:** Component changes apply instantly without losing page state. A form mid-fill updates its styling without losing the entered values. This means you can iterate on visual details in real time instead of in 30-second cycles.",
        "**Storybook for component isolation:** Developing a component in Storybook means you only reload the component, not the entire application. Feedback for a button hover state goes from 'navigate to the page with the button, trigger the hover, check' to 'open Storybook, see it immediately.'",
        "**The 'just enough' principle:** HMR isn't magic — if your component has complex async initialization, HMR may break state. Don't fight it; isolate stateful initialization so the component can be hot-reloaded correctly. This is also better component design.",
      ],
    },

    /* ── 5. Feature flags ──────────────────────────────────────────────────── */
    { kind: "h2", text: "Feature Flags: Tightening the Production Feedback Loop" },
    {
      kind: "p",
      text: "Feature flags decouple deployment from release. Code can be deployed to production but invisible to users until a flag is enabled. This changes the production feedback loop from 'deploy and hope' to 'deploy, gradually expose, observe, adjust.'",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Progressive rollout.** Enable a new feature for 1% of users first. Monitor error rates, latency, and business metrics for 24 hours. If everything looks good, increase to 10%, then 50%, then 100%. If something goes wrong, disable the flag — rollback is instant, no code change required.",
        "**A/B testing as a feedback mechanism.** Show feature variant A to 50% of users and variant B to 50%. Measure which drives better outcomes. This is the tightest possible product feedback loop: real users, real behavior, measurable impact.",
        "**Canary deployments.** Deploy new code to 1% of production servers (the 'canary'). Route 1% of traffic there. If error rates stay flat, gradually shift more traffic. If they spike, route back to the stable version. The cost of a bad deploy drops from 'site is down for all users' to 'site has elevated errors for 1% of users for 5 minutes.'",
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The simplest feature flag implementation",
      body: "You don't need LaunchDarkly on day one. A database table with (flag_name, enabled, user_percentage) and a middleware that reads it takes 2 hours to build and handles 80% of use cases. The important thing is having the mechanism — specific tooling can be upgraded later when requirements justify it.",
    },

    /* ── 6. Case Study 2 — Observability as feedback ───────────────────────── */
    { kind: "h2", text: "Case Study 2 — Observability as Your Production Feedback Loop" },
    {
      kind: "p",
      text: "A team ships a new checkout flow. Without observability, the production feedback loop is: users encounter a bug → support ticket → engineer investigates → fix deployed. This loop takes 24–72 hours. With observability, the loop is: anomaly in error rate detected → alert fires → engineer investigates within minutes.",
    },
    {
      kind: "conversation",
      label: "Post-deploy monitoring — new checkout flow",
      exchanges: [
        {
          role: "dev",
          name: "Dev",
          text: "The checkout deploy went out 20 minutes ago. No errors in Sentry. Looks good.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Check the funnel metrics. What's the checkout completion rate compared to the pre-deploy baseline?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "...It's at 61%. Baseline was 74%. That's a 13-point drop.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "That's a significant regression. No errors means users aren't hitting an error — they're just not completing. Check which step they're dropping at.",
        },
        {
          role: "dev",
          name: "Dev",
          text: "The payment form step. 70% of users who reach it are dropping instead of submitting.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Something is broken or confusing in the payment form. Check the browser console recordings if you have session replay. What do users see?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "The 'Pay' button is disabled on mobile. The new address validation is failing silently for addresses with apartment numbers — the form thinks it's invalid but shows no error message.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Disable the feature flag for mobile users while we fix it. Rollback for 30% of users affected in 2 minutes is better than a fix in 4 hours for 30% of users not converting.",
        },
      ],
    },
    {
      kind: "p",
      text: "The observability feedback loop caught a conversion regression within 20 minutes of deploy. Without it, this would have been discovered in 48 hours via support tickets — after thousands of users failed to complete checkout. The metrics were the feedback mechanism. The feature flag was the safety valve.",
    },
    {
      kind: "code",
      lang: "typescript",
      caption: "Instrumenting a critical user flow for feedback",
      code: `// Track the signals that matter, not just errors
// Errors are one failure mode; silent failures (user gives up) are another

// ✅ Instrument key transition points in a critical flow
async function handleCheckoutStep(step: CheckoutStep, userId: string) {
  // Track entry to each step
  analytics.track('checkout_step_started', {
    step,
    userId,
    sessionId: getSessionId(),
    timestamp: Date.now(),
  });

  try {
    const result = await processStep(step);

    analytics.track('checkout_step_completed', {
      step,
      userId,
      durationMs: Date.now() - stepStartTime,
    });

    return result;
  } catch (err) {
    // Explicit errors — caught by Sentry
    analytics.track('checkout_step_failed', {
      step,
      userId,
      errorType: err.code ?? 'unknown',
    });
    throw err;
  }
}

// The funnel metric (completion rate per step) is derived from these events.
// A drop in completion_rate for step N without a spike in step_failed
// means users are abandoning silently — the most important signal to catch.`,
    },

    /* ── 7. The principle ──────────────────────────────────────────────────── */
    { kind: "h2", text: "The Underlying Principle" },
    {
      kind: "p",
      text: "Every feedback loop improvement follows the same principle: **move the signal closer to the action**. The closer the feedback is in time and specificity to what you're doing, the less work it takes to understand and respond to it. The compiler tells you about a type error on the exact line you wrote it. Production tells you about a bug through a customer complaint three days later.",
    },
    {
      kind: "p",
      text: "Investing in feedback infrastructure — good tests, hot reload, feature flags, observability — is often invisible in a sprint but visible in a quarter. Teams that make these investments systematically find that their velocity increases over time instead of degrading, because the feedback loops that catch and correct errors stay fast even as the system grows.",
    },
    {
      kind: "quote",
      text: "Software delivery performance is strongly correlated with feedback loop speed. Elite performers have tighter loops at every level.",
      by: "Nicole Forsgren, Jez Humble & Gene Kim",
      source: "Accelerate: The Science of Lean Software and DevOps, 2018",
    },

    /* ── Takeaways ─────────────────────────────────────────────────────────── */
    { kind: "divider" },
    {
      kind: "takeaways",
      items: [
        "Feedback loop length is a better predictor of engineering velocity than raw coding speed. Most engineering time is spent validating, not writing.",
        "Five levels: editor (ms) → unit tests (s) → integration tests (min) → end-to-end/staging (min–hr) → production (continuous). Faster loops catch more specific errors. Slower loops catch what faster ones miss.",
        "Running 847 tests when you changed one file is waste. Run the 3 tests for that file in watch mode — same eventual confidence via CI, 30× faster iteration.",
        "The inverted test pyramid (many E2E, few unit tests) is the worst configuration for feedback speed. Invert it: many fast unit tests, healthy integration layer, selective E2E for critical paths.",
        "Hot reload (Vite, Next.js fast refresh, Storybook) reduces UI iteration from 30-second cycles to under 1 second. The fastest frontend engineers maximize this loop.",
        "Feature flags decouple deployment from release. Progressive rollout (1% → 10% → 50% → 100%) with monitoring means a bad deploy affects 1% of users for 5 minutes, not 100% of users for 4 hours.",
        "Observability is your production feedback loop. Funnel metrics catch silent failures (users give up) that error monitoring misses. The checkout case caught a 13-point conversion drop within 20 minutes.",
        "The principle: move the signal closer to the action. Feedback infrastructure investment is invisible in a sprint, visible in a quarter.",
      ],
    },

    /* ── References ────────────────────────────────────────────────────────── */
    {
      kind: "refs",
      items: [
        {
          title: "Accelerate: The Science of Lean Software and DevOps",
          author: "Nicole Forsgren, Jez Humble & Gene Kim",
          dateLabel: "2018",
          type: "book",
          note: "The empirical foundation for feedback loop importance in engineering. The DORA metrics (deployment frequency, lead time, MTTR, change failure rate) are direct measurements of feedback loop tightness at the team level.",
        },
        {
          title: "The DevOps Handbook",
          author: "Gene Kim, Jez Humble, Patrick Debois & John Willis",
          dateLabel: "2016",
          type: "book",
          note: "The Three Ways framework (Flow, Feedback, Continual Learning) makes feedback loops a first-class engineering practice. Part III on the Second Way (feedback) is directly applicable to the observability and monitoring practices described here.",
        },
        {
          title: "Test-Driven Development: By Example",
          author: "Kent Beck",
          dateLabel: "2002",
          type: "book",
          note: "TDD is the practice of making unit test feedback your primary development loop. Whether or not you adopt TDD fully, Beck's argument for short cycles and fast feedback is the theoretical foundation for the test loop optimization in this article.",
        },
        {
          title: "Continuous Delivery: Reliable Software Releases Through Build, Test, and Deployment Automation",
          author: "Jez Humble & David Farley",
          dateLabel: "2010",
          type: "book",
          note: "The definitive work on deployment pipelines. Chapters on the commit stage and automated testing address how to structure the levels of feedback described in this article, with specific guidance on test pyramid design.",
        },
        {
          title: "Observability Engineering",
          author: "Charity Majors, Liz Fong-Jones & George Miranda",
          dateLabel: "2022",
          type: "book",
          note: "The most current treatment of production observability as an engineering practice. The argument for high-cardinality event data (vs. metrics-only monitoring) is directly relevant to the checkout funnel instrumentation example.",
        },
      ],
    },
  ],
};
