import type { MindsetArticleContent } from "../index";

export const debuggingMindsetArticle: MindsetArticleContent = {
  slug: "debugging-mindset",
  title: "The Debugging Mindset: A Systematic Approach",
  excerpt:
    "Debugging is not guessing. It's a scientific process of forming hypotheses and testing them. Learn how senior engineers approach bugs they've never seen before.",
  category: "Problem Solving",
  readMin: 7,
  color: "#3BB58F",
  bg: "rgba(59,181,143,0.10)",
  iconName: "Search",
  lead: "The bug appeared at 2 AM on a Friday. The payment service was returning a 500 error for 3% of users. No reproduction steps, no clear stack trace, and a CEO asking for an ETA. Most engineers in this moment do the same thing: they guess. They change a line, reload, and hope. Sometimes it works. Usually it doesn't. The engineers who debug reliably — regardless of the bug, regardless of the codebase — don't guess. They investigate. The difference is a process, not talent.",

  blocks: [
    /* ── 1. The Guessing Trap ──────────────────────────────────────────────── */
    { kind: "h2", text: "The Guessing Trap" },
    {
      kind: "p",
      text: "When a bug appears, the natural instinct is to start changing things. Add a `console.log`, move a line, swap a variable — and reload. This isn't debugging. It's trial and error with a keyboard. It has a name: **shotgun debugging**, and it works often enough to become a habit, which is exactly why it's dangerous.",
    },
    {
      kind: "p",
      text: "Shotgun debugging feels productive. You're doing _something_. But you're generating noise in your own understanding of the system. Each random change shifts your mental model slightly, making it harder to understand what the code actually does. And when a random change 'fixes' the bug, you almost never know _why_ it worked — which means you can't prevent the same class of bug next time.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "The hidden cost of guessing",
      body: "When you fix a bug by trial and error, you haven't fixed the bug — you've silenced a symptom you don't understand. The same underlying cause will surface again, in a different form, often at the worst possible time. Senior engineers are not better at guessing. They don't guess.",
    },

    /* ── 2. Bugs Are Deterministic ─────────────────────────────────────────── */
    { kind: "h2", text: "Bugs Are Deterministic" },
    {
      kind: "p",
      text: "This is the foundational insight of systematic debugging: **bugs don't happen randomly**. Every bug is caused by a specific combination of inputs, state, environment, or timing. If you knew every variable, you could predict the bug exactly. The reason bugs feel unpredictable is that you don't yet know which variables matter. Debugging is the process of finding them.",
    },
    {
      kind: "p",
      text: "This reframing changes how you approach a bug. Instead of asking 'how do I fix this?', you ask 'what exactly is happening, and why?' The fix often becomes obvious once you've answered that question. Engineers who debug fast aren't faster at guessing — they're better at answering the 'what and why' question systematically.",
    },
    {
      kind: "quote",
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      by: "Brian W. Kernighan",
      source: "The Elements of Programming Style, 1974",
    },

    /* ── 3. The 5-Step Framework ───────────────────────────────────────────── */
    { kind: "h2", text: "The 5-Step Debugging Framework" },
    {
      kind: "p",
      text: "Every bug you'll ever encounter can be approached with the same five steps. The steps are not exciting. They are effective:",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Reproduce it reliably.** A bug you can't reproduce consistently is a bug you can't debug. Before doing anything else, find the exact conditions — input, state, environment — that make it happen every time. A reliable reproduction is 50% of the solution.",
        "**Isolate the scope.** Where in the system does the bug exist? Narrow the search space. If a form submission fails, is it the frontend, the network, the backend, the database? Binary search your stack until you know which layer owns the problem.",
        "**Form a hypothesis.** Before changing any code, write down one sentence: 'I believe the bug is caused by X.' This forces precision. Vague hypotheses ('something is wrong with the data') produce vague tests.",
        "**Test one thing at a time.** Change one variable, observe the result, and record what you learn. Changing three things simultaneously means you can't attribute the outcome to any specific cause.",
        "**Verify the fix.** After fixing the bug, re-run the original reproduction steps. Then test edge cases around the fix. Confirm not just that the symptom is gone, but that you understand _why_ the fix works.",
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Write it down",
      body: "Keep a short debugging log as you work: what you tried, what you observed, what hypothesis it tested. This has two benefits: it prevents you from testing the same thing twice, and it forces you to think in hypotheses rather than random actions. Many engineers solve the bug while writing down the hypothesis — the act of articulating it reveals the flaw.",
    },

    /* ── 4. Case Study 1 — "It works on my machine" ────────────────────────── */
    { kind: "h2", text: "Case Study 1 — 'It Works on My Machine'" },
    {
      kind: "p",
      text: "A junior engineer has been chasing a bug for two hours. The API endpoint returns a 500 error in production, but works perfectly locally. They've checked the code three times. They're convinced the code is fine.",
    },
    {
      kind: "conversation",
      label: "Debugging session — production vs. local environment",
      exchanges: [
        {
          role: "dev",
          name: "Dev",
          text: "I don't get it. It works on my machine. The code is identical.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Step one: what exactly does the error say in production?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "'Cannot read properties of undefined (reading toFixed)'. It's in the price formatter.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Good. So something is undefined that you're calling toFixed on. What's the variable?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "It's product.price. But that's always set — it's required in the schema.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Always set in your test data. Log the actual product object from that production request. What do you get?",
        },
        {
          role: "dev",
          name: "Dev",
          text: "...Oh. Price is null. Not undefined, null. Some older products in production have a null price in the DB.",
        },
        {
          role: "senior",
          name: "Senior",
          text: "Your local database has only test data seeded after you added the 'required' constraint. Production has historical records that predate it. The bug isn't in the code — it's in your assumption that the data matches the schema.",
        },
      ],
    },
    {
      kind: "p",
      text: "The fix was a one-liner. But the insight was more valuable: **production data is not your test data**. The systematic approach found this in minutes because the engineer was forced to read the actual error and inspect the actual data, instead of staring at code that looked correct.",
    },
    {
      kind: "code",
      lang: "typescript",
      caption: "Before and after — don't assume, handle the real data",
      code: `// ❌ Before — assumes price is always a valid number
function formatPrice(product: Product): string {
  return \`$\${product.price.toFixed(2)}\`;
  //          ^^^^^^^^^^^^^ TypeError if price is null
}

// ✅ After — derived from understanding the actual bug
// The fix isn't just defensive coding — it reflects the real data model.
// Historical products have null price; display "Price unavailable" for them.
function formatPrice(product: Product): string {
  if (product.price == null) return "Price unavailable";
  return \`$\${product.price.toFixed(2)}\`;
}`,
    },

    /* ── 5. Case Study 2 — The Intermittent Bug ─────────────────────────────── */
    { kind: "h2", text: "Case Study 2 — The Intermittent Bug" },
    {
      kind: "p",
      text: "Intermittent bugs are the most frustrating category because they violate the first rule: you can't reproduce them consistently. An e-commerce checkout sometimes charges the user twice. It happens maybe once every 200 orders. No error in the logs. No clear pattern. The team has been 'keeping an eye on it' for three weeks.",
    },
    {
      kind: "p",
      text: "The systematic approach to intermittent bugs starts with a different question: **not 'why does it fail?' but 'what conditions make it fail?'** Intermittent doesn't mean random — it means the triggering conditions aren't visible to you yet.",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Gather data before theorizing.** Add structured logging around every step of the checkout flow: timestamps, user IDs, request IDs, and the exact sequence of state transitions. Let it run for a week and compare the failure cases against successful ones.",
        "**Look for correlations.** Device type, browser, connection speed, time of day, order value — something will be different between the failures and the successes. Data reveals the pattern; instinct doesn't.",
        "**Hypothesize based on data.** After collecting 5 double-charge events, a pattern appears: every case happened when the user clicked 'Pay' and then pressed Enter within 500ms. Hypothesis: the button click and the Enter keypress both submit the form simultaneously.",
        "**Test the hypothesis with a controlled reproduction.** Simulate rapid double-submit in a test environment. Reproduce it 10/10 times. Hypothesis confirmed. Now fix the confirmed root cause, not the imagined one.",
      ],
    },
    {
      kind: "code",
      lang: "typescript",
      caption: "The actual bug — a double-submit race condition",
      code: `// ❌ The bug — button click AND Enter key both trigger submit.
// If the user presses Enter within ~500ms of clicking Pay,
// two concurrent payment requests fire.
function CheckoutButton() {
  const handleSubmit = async () => {
    await processPayment(); // no guard against concurrent calls
  };
  return <button onClick={handleSubmit}>Pay</button>;
}

// ✅ Fix derived from the confirmed hypothesis.
// The root cause is concurrent submissions — the fix makes that impossible.
function CheckoutButton() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (submitting) return;       // reject concurrent calls
    setSubmitting(true);
    try {
      await processPayment();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <button onClick={handleSubmit} disabled={submitting}>
      {submitting ? "Processing..." : "Pay"}
    </button>
  );
}`,
    },
    {
      kind: "callout",
      variant: "insight",
      title: "Idempotency as a systemic fix",
      body: "The frontend fix prevents the double-submit in the UI. But the deeper systemic fix is making the payment backend idempotent: the same order ID should only ever result in one charge, regardless of how many times the request fires. Frontend fixes can be bypassed (curl, Postman, network retries). Backend idempotency cannot. This is the systems-thinking layer of debugging: fix the symptom, then fix the structure.",
    },

    /* ── 6. Reading Stack Traces Properly ───────────────────────────────────── */
    { kind: "h2", text: "How to Actually Read a Stack Trace" },
    {
      kind: "p",
      text: "The most underused debugging skill is reading error messages correctly. Most developers glance at the first line, see something unfamiliar, and immediately start Googling the error text. This skips the most useful information in the stack trace.",
    },
    {
      kind: "list",
      style: "numbered",
      items: [
        "**Read the error type and message precisely.** `TypeError: Cannot read properties of null` tells you the failure category. `reading 'userId'` tells you exactly which property. Both matter — 'null' and 'undefined' have different causes.",
        "**Find your code in the stack.** The stack trace is a call chain. Most of it is framework internals. Scan for the first line that points to _your_ file. That's where the error manifested in code you control.",
        "**Read the call chain upward.** The line that threw is at the top. Work upward through your stack frames to understand how execution arrived there. The bug usually lives one or two levels above where it threw.",
        "**Don't Google the raw error text first.** The raw error is generic. Your bug is specific. Googling 'Cannot read properties of null' returns thousands of results for different problems. Understand your specific context before searching.",
      ],
    },
    {
      kind: "code",
      lang: "text",
      caption: "Anatomy of a stack trace — where to look and what it means",
      code: `TypeError: Cannot read properties of null (reading 'userId')
  ◄── 1. Error type + message. Read this first and be precise.
       "null" not "undefined" — they have different root causes.

    at formatUserDisplay (src/utils/format.ts:42:18)
  ◄── 2. This is WHERE it threw. Check line 42 of format.ts.
       Something passed null to formatUserDisplay here.

    at OrderSummary (src/components/OrderSummary.tsx:89:12)
  ◄── 3. This called formatUserDisplay. WHY is user null here?
       Check what OrderSummary receives from its parent.

    at renderWithHooks (react-dom/cjs/react-dom.development.js:...)
    at mountIndeterminateComponent (react-dom/cjs/...)
  ◄── 4. Framework internals. Ignore unless you suspect the framework itself.

  Conclusion: formatUserDisplay received null. OrderSummary passed it.
  Next step: check what prop OrderSummary receives for user.
  Hypothesis: order.user is null for guest checkouts.`,
    },

    /* ── 7. Binary Search Debugging ─────────────────────────────────────────── */
    { kind: "h2", text: "Binary Search: The Most Efficient Debugging Technique" },
    {
      kind: "p",
      text: "When you don't know where in your system a bug lives, binary search is the most efficient technique. Instead of inspecting code line by line, you divide the search space in half with each test. A codebase with 10,000 lines of suspects can be narrowed to the exact 5 lines in about 13 checks — far faster than reading everything.",
    },
    {
      kind: "p",
      text: "In practice, binary search debugging looks like this: comment out half the suspect code (or mock half the system). Does the bug still happen? If yes, it's in the half still running. If no, it's in the half you commented out. Split that half again. Repeat. This technique works for finding the buggy commit, the buggy component, the buggy middleware, or the buggy config value.",
    },
    {
      kind: "code",
      lang: "bash",
      caption: "git bisect — automated binary search across your commit history",
      code: `# Scenario: the bug exists now but not in last week's release.
# git bisect automates binary search across your commit history.

git bisect start
git bisect bad                    # mark current commit as broken
git bisect good v2.1.0            # mark last known-good version

# Git checks out the midpoint commit between bad and good.
# Run your reproduction steps manually, then tell Git what you found:

git bisect bad    # midpoint commit has the bug → search the earlier half
git bisect good   # midpoint commit is fine     → search the later half

# Git keeps bisecting. After ~13 steps across a 5000-commit history:
# "abc1234 is the first bad commit"

git bisect reset  # return to HEAD when done

# Read the diff of abc1234. The cause is in that diff.
# You've reduced a 5000-commit search to 13 targeted checks.`,
    },
    {
      kind: "callout",
      variant: "tip",
      title: "When to reach for git bisect",
      body: "git bisect is your first tool whenever you know 'it used to work but now it doesn't' and you don't know why. It finds the exact introducing commit in O(log n) time — you don't need to read every commit manually. The commit diff will almost always either contain the bug directly or reveal the change that created the conditions for it.",
    },

    /* ── 8. Rubber Duck Debugging ────────────────────────────────────────────── */
    { kind: "h2", text: "The Rubber Duck: Why Explaining Works" },
    {
      kind: "p",
      text: "There's a well-known debugging technique called rubber duck debugging: explain the bug, line by line, out loud to an inanimate object. It sounds absurd. It works reliably. The reason is straightforward: **when you explain something, you're forced to make your assumptions explicit**. And the bug is almost always hiding inside an assumption you never questioned.",
    },
    {
      kind: "p",
      text: "When you think through code silently, your brain fills in gaps automatically — 'of course this is set,' 'obviously this runs before that.' When you explain it out loud, those assumptions have to be stated in words. The moment you say 'and then the user object is always populated here' is exactly the moment to stop and ask: is it, though?",
    },
    {
      kind: "callout",
      variant: "insight",
      title: "The pair debugging advantage",
      body: "Pair debugging is more effective than solo debugging not because two people are smarter, but because explaining your understanding to another person exposes every hidden assumption. The other person doesn't need to know the codebase — they just need to ask 'why?' at each step. This is also why taking a break and returning fresh works: distance restores your ability to question assumptions you've stopped seeing.",
    },

    /* ── Takeaways ─────────────────────────────────────────────────────────── */
    { kind: "divider" },
    {
      kind: "takeaways",
      items: [
        "Bugs are deterministic. They don't happen randomly — they happen when specific conditions are met. Your job is to find those conditions, not guess at fixes.",
        "Shotgun debugging feels productive but generates noise in your mental model. It makes the next bug harder to fix because you understand the system less clearly, not more.",
        "The 5-step framework: reproduce reliably → isolate scope → form one hypothesis → test one thing at a time → verify and understand why the fix works.",
        "Production data is not your test data. 'Works on my machine' bugs almost always mean data or environment assumptions don't match the real world.",
        "Intermittent bugs aren't random — they have invisible triggering conditions. Collect structured data first, find correlations, then form a hypothesis from evidence.",
        "Read stack traces precisely: error type and message first, then find your code in the trace. The bug typically lives one or two levels above where it threw.",
        "Binary search (including git bisect) reduces a massive search space to a small one in O(log n) steps. Use it whenever you don't know which layer or commit owns the problem.",
        "Explaining a bug out loud forces implicit assumptions to become explicit. Most bugs hide inside an assumption you stopped questioning.",
      ],
    },

    /* ── References ────────────────────────────────────────────────────────── */
    {
      kind: "refs",
      items: [
        {
          title: "Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems",
          author: "David J. Agans",
          dateLabel: "2002",
          type: "book",
          note: "The definitive book on systematic debugging. Agans' nine rules map directly to the framework in this article. Rule 4, 'Divide and Conquer,' is the formal version of binary search debugging. Rule 8, 'Get a Fresh View,' explains why rubber duck debugging works.",
        },
        {
          title: "The Pragmatic Programmer (20th Anniversary Ed.)",
          author: "David Thomas & Andrew Hunt",
          dateLabel: "2019",
          type: "book",
          note: "The original rubber duck debugging advice appears here (Tip 37: Debug with a Duck). More importantly, the section 'Don't Assume It — Prove It' formalizes why hypothesis-driven debugging is more reliable than intuition.",
        },
        {
          title: "Why Programs Fail: A Guide to Systematic Debugging",
          author: "Andreas Zeller",
          dateLabel: "2009",
          type: "book",
          note: "Formally defines scientific debugging methodology and introduces delta debugging — the theoretical foundation behind binary search debugging. Chapter 5 on 'Isolating Failure Causes' is directly applicable to the case studies in this article.",
        },
        {
          title: "Site Reliability Engineering",
          author: "Niall Richard Murphy et al. (Google)",
          dateLabel: "2016",
          type: "book",
          note: "Free online at sre.google. The chapter on handling incidents describes structured hypothesis-testing in real-time production debugging. The 'Debugging Production' section shows how the 5-step framework scales to large distributed systems.",
        },
        {
          title: "Software Engineering at Google",
          author: "Titus Winters, Tom Manshreck & Hyrum Wright",
          dateLabel: "2020",
          type: "book",
          note: "Chapter on testing describes how structured test data and reproducible environments eliminate entire classes of 'works on my machine' bugs. The emphasis on hermetic test environments is the engineering response to Case Study 1.",
        },
        {
          title: "The Elements of Programming Style",
          author: "Brian W. Kernighan & P.J. Plauger",
          dateLabel: "1974",
          type: "book",
          note: "Source of the Kernighan quote in this article. Establishes the foundational principle that the ability to debug code is directly tied to the clarity with which it was written — an argument for simplicity as a debugging strategy.",
        },
      ],
    },
  ],
};
