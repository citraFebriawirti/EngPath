"use client";

import { MinusIcon, PlusIcon } from "@/icons/icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeUp } from "@/components/ui/motion";

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
    <section id="faq" className="border-y border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828] py-[88px]">
      <div className="wrapper">
        <FadeUp className="mx-auto mb-11 flex max-w-[640px] flex-col items-center gap-4 text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-sub mx-auto text-center">
            Everything you need to know about EngPath. Can&apos;t find what you&apos;re
            looking for? Open an issue on GitHub.
          </p>
        </FadeUp>
        <FadeUp delay={0.1} className="mx-auto max-w-[680px]">
          <div>
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </FadeUp>
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
    <div className="border-b border-gray-200 dark:border-white/[0.07]">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-[15.5px] font-semibold text-gray-900 dark:text-white">
          {item.question}
        </span>
        <span
          className="ml-6 shrink-0 transition-colors duration-200"
          style={{ color: isActive ? "#7A5AF8" : undefined }}
        >
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-5 text-[14px] leading-[1.75] text-gray-500 dark:text-gray-400">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
