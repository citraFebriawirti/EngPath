"use client";

import { MinusIcon, PlusIcon } from "@/icons/icons";
import { useState } from "react";

// Define the FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Is EngPath really free?",
      answer:
        "Yes — EngPath is 100% free and open source under the MIT license. There are no hidden plans, paywalls, or premium tiers. Everything on the platform is available to everyone.",
    },
    {
      id: 2,
      question: "Who are the roadmaps designed for?",
      answer:
        "EngPath roadmaps are designed for anyone entering or growing in a software engineering career — whether you're a complete beginner, a self-taught developer looking to fill gaps, or an experienced engineer wanting to benchmark your skills.",
    },
    {
      id: 3,
      question: "How do I know which path to start with?",
      answer:
        "Start with what excites you most. If you like building user interfaces, start with Frontend. If you prefer working with data and servers, try Backend. If you're not sure, Backend is a solid general foundation. You can always explore multiple paths.",
    },
    {
      id: 4,
      question: "What are the Mindset articles?",
      answer:
        "Mindset articles cover the mental models, thinking patterns, and soft engineering skills that senior engineers use daily — things like systems thinking, debugging strategies, how to read documentation, and working with ambiguity. They complement the technical roadmaps.",
    },
    {
      id: 5,
      question: "Can I contribute to EngPath?",
      answer:
        "Absolutely. EngPath is open source and contributions are welcome. You can contribute by improving roadmap content, writing mindset articles, fixing bugs, adding features, or translating content. Check the GitHub repository and the contributing guide to get started.",
    },
    {
      id: 6,
      question: "Are the skill nodes linked to learning resources?",
      answer:
        "Yes. Each skill node in a roadmap links to curated free resources — documentation, guides, and articles — so you always know what to study next. We deliberately avoid recommending paid courses to keep EngPath accessible to everyone.",
    },
  ];

  const toggleItem = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <section id="faq" className="border-y border-gray-300 bg-gray-100 dark:border-gray-800 dark:bg-[#141715] py-[86px]">
      <div className="wrapper">
        <div className="mx-auto mb-11 flex max-w-[640px] flex-col items-center gap-[14px] text-center">
          <p className="font-mono text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-500">
            FAQ
          </p>
          <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance text-gray-900 dark:text-gray-50">
            Frequently asked questions
          </h2>
          <p className="max-w-[46ch] text-pretty text-[clamp(15px,1.6vw,17px)] leading-[1.6] text-gray-600 dark:text-gray-500">
            Everything you need to know about EngPath. Can&apos;t find what you&apos;re
            looking for? Open an issue on GitHub.
          </p>
        </div>
        <div className="mx-auto max-w-[680px]">
          <div className="space-y-0">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({
  item,
  isActive,
  onToggle,
}: {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-300 dark:border-gray-800">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-[16px] font-semibold text-gray-900 dark:text-gray-50">
          {item.question}
        </span>
        <span className="ml-6 shrink-0 text-gray-500 dark:text-gray-500">
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isActive && (
        <div className="pb-5">
          <p className="text-[14.5px] leading-[1.75] text-gray-600 dark:text-gray-500">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}
