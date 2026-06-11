/* ── toId ─────────────────────────────────────────────────────────────────── */
// Converts heading text to a URL-safe id (used for TOC anchors & h2 ids)

export function toId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ── Inline ───────────────────────────────────────────────────────────────── */
// Renders **bold**, `code`, _italic_ inside string content

export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|_[^_]+_)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-gray-900 dark:text-gray-100">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="rounded bg-gray-100 dark:bg-white/[0.08] px-[5px] py-[2px] font-mono text-[0.875em] text-[#4F8EF7]"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("_") && part.endsWith("_")) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
