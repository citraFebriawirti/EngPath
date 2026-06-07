const stats = [
  { value: "500+", label: "Active Learners" },
  { value: "9", label: "Career Paths" },
  { value: "200+", label: "Skill Nodes" },
  { value: "100%", label: "Free & Open Source" },
];

export default function StatsSection() {
  return (
    <div className="bg-gray-100 dark:bg-[#141715] border-y border-gray-300 dark:border-gray-800">
      <div className="wrapper py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 gap-y-8 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[clamp(36px,5vw,52px)] font-semibold leading-none tracking-[-0.03em] tabular-nums text-gray-900 dark:text-gray-50">
                {stat.value}
              </p>
              <p className="mt-[10px] text-[13.5px] text-gray-600 dark:text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
