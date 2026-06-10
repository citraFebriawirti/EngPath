"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

const stats = [
  { value: "500+", label: "Active Learners", color: "#7A5AF8" },
  { value: "9", label: "Career Paths", color: "#7A5AF8" },
  { value: "200+", label: "Skill Nodes", color: "#7A5AF8" },
  { value: "100%", label: "Free & Open Source", color: "#7A5AF8" },
];

export default function StatsSection() {
  return (
    <div className="border-y border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#101828]">
      <div className="wrapper py-14">
        <StaggerContainer className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <p
                className="text-[clamp(36px,5vw,52px)] font-bold leading-none tracking-[-0.035em] tabular-nums"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-[13px] font-medium text-gray-500 dark:text-gray-500">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
