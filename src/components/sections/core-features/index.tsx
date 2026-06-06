import { GitBranch, BrainCircuit, FolderGit2, ArrowRight } from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Roadmap",
    description: "Jalur skill terstruktur untuk setiap domain karier IT.",
  },
  {
    icon: BrainCircuit,
    title: "Engineer Mindset",
    description: "Cara berpikir logis, sistematis, dan problem solving layaknya engineer.",
  },
  {
    icon: FolderGit2,
    title: "Open Source",
    description: "Kumpulan project nyata yang siap dipelajari dan digunakan.",
  },
];

function FeatureCard({ icon: Icon, title, description, number }: any) {
  return (
    <div
      className="
    group relative
    w-full
    max-w-[340px]
    rounded-3xl
    border border-purple-100
    dark:border-white/10
    bg-white
    dark:bg-white/5
    p-6 md:p-8
  "
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-500/10">
        <Icon className="h-7 w-7 text-purple-600" />
      </div>

      <h3 className="mb-3 text-xl font-bold">{title}</h3>

      <p className="text-gray-600 dark:text-gray-400">{description}</p>

      <div className="mt-6 flex items-center gap-2 text-purple-600">
        Explore
        <ArrowRight className="h-4 w-4" />
      </div>

      <span className="absolute top-6 right-6 text-5xl font-bold text-purple-100">{number}</span>
    </div>
  );
}

export function CoreFeatures() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/20 dark:via-black dark:to-black" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-sm font-medium">Learning Ecosystem</span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Belajar Dengan Jalur yang Jelas</h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">Dari memahami skill roadmap, membangun pola pikir engineer, hingga berkontribusi pada project open source nyata.</p>
        </div>

        {/* Mobile & Tablet */}
        <div className="xl:hidden mb-16">
          <div className="flex flex-col gap-6 items-center">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} number={`0${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="relative hidden xl:block h-[320px] mb-20">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 320" fill="none">
            <defs>
              <linearGradient id="roadmapGradient" x1="0" y1="0" x2="1200" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            {/* Glow Path */}
            <path d="M250 105 C380 105,420 210,600 210" stroke="#8b5cf6" strokeWidth="12" opacity="0.08" fill="none" />

            <path d="M600 210 C780 210,820 105,950 105" stroke="#8b5cf6" strokeWidth="12" opacity="0.08" fill="none" />

            {/* Main Path */}
            <path d="M250 105 C380 105,420 210,600 210" stroke="url(#roadmapGradient)" strokeWidth="3" strokeLinecap="round" fill="none" />

            <path d="M600 210 C780 210,820 105,950 105" stroke="url(#roadmapGradient)" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Fixed Nodes */}
            <circle cx="250" cy="105" r="8" fill="#8b5cf6" />
            <circle cx="600" cy="210" r="8" fill="#8b5cf6" />
            <circle cx="950" cy="105" r="8" fill="#8b5cf6" />

            {/* Roadmap -> Mindset */}
            <circle r="8" fill="#8b5cf6">
              <animateMotion dur="2s" repeatCount="indefinite" path="M250 105 C380 105,420 210,600 210" />
            </circle>

            {/* Mindset -> Roadmap */}
            <circle r="6" fill="#c084fc">
              <animateMotion dur="2s" repeatCount="indefinite" path="M600 210 C420 210,380 105,250 105" />
            </circle>

            {/* Mindset -> Open Source */}
            <circle r="8" fill="#8b5cf6">
              <animateMotion dur="2s" repeatCount="indefinite" path="M600 210 C780 210,820 105,950 105" />
            </circle>

            {/* Open Source -> Mindset */}
            <circle r="6" fill="#c084fc">
              <animateMotion dur="2s" repeatCount="indefinite" path="M950 105 C820 105,780 210,600 210" />
            </circle>
          </svg>

          {/* Roadmap */}
          <div className="absolute left-[8%] top-[40px]">
            <FeatureCard {...features[0]} />
          </div>

          {/* Mindset */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[170px]">
            <FeatureCard {...features[1]} />
          </div>

          {/* Open Source */}
          <div className="absolute right-[8%] top-[40px]">
            <FeatureCard {...features[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
