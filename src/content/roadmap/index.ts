// ─────────────────────────────────────────────────────────────────────────────
// EngPath Roadmap — canonical data source
// All 9 career domains + their skill nodes
// ─────────────────────────────────────────────────────────────────────────────

export type NodeType = "core" | "optional";
export type Level = 1 | 2 | 3 | 4;
export type DomainFlag = "Core" | "Specialization" | "Domain";

export interface Resource {
  label: string;
  href: string;
}

export interface SkillNode {
  id: string;
  title: string;
  type: NodeType;
  level: Level;
  description: string;
  tags?: string[];
  resources?: Resource[];
}

export interface RoadmapDomain {
  slug: string;
  label: string;
  flag: DomainFlag;
  shortDesc: string;
  longDesc: string;
  color: string;
  bg: string;
  meta: { nodes: number; hours: number };
  nodes: SkillNode[];
}

export const levelLabels: Record<Level, string> = {
  1: "Foundation",
  2: "Intermediate",
  3: "Advanced",
  4: "Expert",
};

// ─────────────────────────────────────────────────────────────────────────────
// All 9 domains
// ─────────────────────────────────────────────────────────────────────────────

export const roadmapDomains: RoadmapDomain[] = [
  // ── Backend ──────────────────────────────────────────────────────────────
  {
    slug: "backend",
    label: "Backend",
    flag: "Core",
    shortDesc:
      "Server-side architecture, APIs, databases and system design for scalable applications.",
    longDesc:
      "Master the fundamentals of server-side development: from handling HTTP requests to designing distributed systems. This path covers everything a backend engineer needs — from language fundamentals to advanced system design patterns.",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.10)",
    meta: { nodes: 42, hours: 120 },
    nodes: [
      // Foundation
      {
        id: "be-http",
        title: "HTTP & REST",
        type: "core",
        level: 1,
        description:
          "Understand the HTTP protocol, request/response cycle, status codes, headers, and REST architectural style.",
        tags: ["networking", "protocol"],
        resources: [
          { label: "MDN: HTTP Overview", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
          { label: "REST API Tutorial", href: "https://restfulapi.net" },
        ],
      },
      {
        id: "be-lang",
        title: "Backend Language",
        type: "core",
        level: 1,
        description:
          "Choose Node.js, Python, Go, or Java as your primary server-side language. Learn the standard library, package management, and idioms.",
        tags: ["language"],
        resources: [
          { label: "Node.js Docs", href: "https://nodejs.org/docs" },
          { label: "Python Tutorial", href: "https://docs.python.org/3/tutorial" },
        ],
      },
      {
        id: "be-git",
        title: "Git & Version Control",
        type: "core",
        level: 1,
        description:
          "Master Git workflows: branching, merging, rebasing, conflict resolution, and collaborative development patterns.",
        tags: ["tooling"],
        resources: [
          { label: "Pro Git Book", href: "https://git-scm.com/book" },
        ],
      },
      {
        id: "be-cli",
        title: "Command Line (Linux/Unix)",
        type: "core",
        level: 1,
        description:
          "Navigate and work efficiently with the terminal — file system, processes, permissions, pipes, and shell scripting.",
        tags: ["tooling", "linux"],
        resources: [
          { label: "The Linux Command Line", href: "https://linuxcommand.org/tlcl.php" },
        ],
      },
      // Intermediate
      {
        id: "be-sql",
        title: "SQL & Relational Databases",
        type: "core",
        level: 2,
        description:
          "Design schemas, write complex queries, understand indexes, transactions, ACID properties, and normalization.",
        tags: ["database"],
        resources: [
          { label: "PostgreSQL Tutorial", href: "https://www.postgresqltutorial.com" },
          { label: "SQLZoo", href: "https://sqlzoo.net" },
        ],
      },
      {
        id: "be-api",
        title: "API Design (REST + GraphQL)",
        type: "core",
        level: 2,
        description:
          "Design clean, versioned REST APIs. Learn GraphQL schema definition, resolvers, and when to use each.",
        tags: ["api"],
        resources: [
          { label: "API Design Guide (Google)", href: "https://cloud.google.com/apis/design" },
          { label: "GraphQL.org", href: "https://graphql.org/learn" },
        ],
      },
      {
        id: "be-auth",
        title: "Authentication & Authorization",
        type: "core",
        level: 2,
        description:
          "Implement JWT, OAuth 2.0, session management, cookie security, and role-based access control.",
        tags: ["security"],
        resources: [
          { label: "OAuth 2.0 Simplified", href: "https://www.oauth.com" },
          { label: "JWT.io", href: "https://jwt.io/introduction" },
        ],
      },
      {
        id: "be-nosql",
        title: "NoSQL Databases",
        type: "core",
        level: 2,
        description:
          "Work with document databases (MongoDB), key-value stores (Redis), and understand when to choose NoSQL.",
        tags: ["database"],
        resources: [
          { label: "MongoDB Manual", href: "https://www.mongodb.com/docs/manual" },
          { label: "Redis Docs", href: "https://redis.io/docs" },
        ],
      },
      {
        id: "be-testing",
        title: "Testing (Unit & Integration)",
        type: "core",
        level: 2,
        description:
          "Write unit tests, integration tests, understand test doubles (mocks, stubs), and test-driven development.",
        tags: ["testing"],
        resources: [
          { label: "Jest Docs", href: "https://jestjs.io/docs/getting-started" },
        ],
      },
      // Advanced
      {
        id: "be-design",
        title: "System Design Basics",
        type: "core",
        level: 3,
        description:
          "Design scalable systems: load balancing, horizontal scaling, CAP theorem, consistency models, and trade-offs.",
        tags: ["architecture"],
        resources: [
          { label: "System Design Primer", href: "https://github.com/donnemartin/system-design-primer" },
        ],
      },
      {
        id: "be-cache",
        title: "Caching Strategies",
        type: "optional",
        level: 3,
        description:
          "Implement Redis caching, cache-aside pattern, cache invalidation strategies, and CDN integration.",
        tags: ["performance"],
        resources: [
          { label: "Caching Patterns", href: "https://aws.amazon.com/caching/best-practices" },
        ],
      },
      {
        id: "be-queue",
        title: "Message Queues & Events",
        type: "optional",
        level: 3,
        description:
          "Build async systems with RabbitMQ, Kafka, or SQS. Understand event-driven architecture and CQRS.",
        tags: ["architecture", "messaging"],
        resources: [
          { label: "RabbitMQ Tutorials", href: "https://www.rabbitmq.com/tutorials" },
        ],
      },
      {
        id: "be-docker",
        title: "Docker & Containers",
        type: "core",
        level: 3,
        description:
          "Containerize applications, write multi-stage Dockerfiles, and use docker-compose for local development.",
        tags: ["devops"],
        resources: [
          { label: "Docker Docs", href: "https://docs.docker.com/get-started" },
        ],
      },
      // Expert
      {
        id: "be-micro",
        title: "Microservices Architecture",
        type: "optional",
        level: 4,
        description:
          "Design and decompose monoliths into services. Handle service discovery, inter-service communication, and sagas.",
        tags: ["architecture"],
        resources: [
          { label: "Microservices.io", href: "https://microservices.io/patterns" },
        ],
      },
      {
        id: "be-perf",
        title: "Performance Engineering",
        type: "optional",
        level: 4,
        description:
          "Profile applications, identify bottlenecks, optimize queries, connection pooling, and reduce latency at scale.",
        tags: ["performance"],
      },
      {
        id: "be-cloud",
        title: "Cloud-Native Development",
        type: "core",
        level: 4,
        description:
          "Build for AWS, GCP, or Azure: managed databases, serverless functions, cloud storage, and IAM.",
        tags: ["cloud"],
        resources: [
          { label: "AWS Getting Started", href: "https://aws.amazon.com/getting-started" },
        ],
      },
    ],
  },

  // ── Frontend ─────────────────────────────────────────────────────────────
  {
    slug: "frontend",
    label: "Frontend",
    flag: "Core",
    shortDesc:
      "UI engineering, component design, performance, and modern web frameworks.",
    longDesc:
      "Build fast, accessible, and delightful user interfaces. This path covers HTML/CSS fundamentals through advanced React patterns, TypeScript, performance optimization, and the modern frontend ecosystem.",
    color: "#8B7CF8",
    bg: "rgba(139,124,248,0.10)",
    meta: { nodes: 38, hours: 100 },
    nodes: [
      // Foundation
      {
        id: "fe-html",
        title: "HTML & Semantic Markup",
        type: "core",
        level: 1,
        description:
          "Write semantic, accessible HTML. Understand the DOM, forms, metadata, and semantic elements.",
        tags: ["html"],
        resources: [{ label: "MDN HTML Guide", href: "https://developer.mozilla.org/en-US/docs/Learn/HTML" }],
      },
      {
        id: "fe-css",
        title: "CSS & Layout Systems",
        type: "core",
        level: 1,
        description:
          "Master Flexbox, CSS Grid, box model, selectors, specificity, and responsive design principles.",
        tags: ["css"],
        resources: [{ label: "CSS Tricks: Flexbox", href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox" }],
      },
      {
        id: "fe-js",
        title: "JavaScript (ES6+)",
        type: "core",
        level: 1,
        description:
          "Learn modern JS: arrow functions, destructuring, modules, promises, async/await, closures, and the event loop.",
        tags: ["javascript"],
        resources: [{ label: "javascript.info", href: "https://javascript.info" }],
      },
      {
        id: "fe-git",
        title: "Git & Collaboration",
        type: "core",
        level: 1,
        description:
          "Collaborate with Git: branching strategies, pull requests, and code review workflows.",
        tags: ["tooling"],
      },
      // Intermediate
      {
        id: "fe-react",
        title: "React (Hooks & Patterns)",
        type: "core",
        level: 2,
        description:
          "Build component trees with React hooks, understand state management, context API, and rendering optimization.",
        tags: ["framework"],
        resources: [{ label: "React Docs", href: "https://react.dev/learn" }],
      },
      {
        id: "fe-ts",
        title: "TypeScript",
        type: "core",
        level: 2,
        description:
          "Add type safety to JavaScript: interfaces, generics, utility types, strict mode, and incremental adoption.",
        tags: ["typescript"],
        resources: [{ label: "TypeScript Handbook", href: "https://www.typescriptlang.org/docs/handbook" }],
      },
      {
        id: "fe-state",
        title: "State Management",
        type: "core",
        level: 2,
        description:
          "Manage global state with Zustand or Redux Toolkit. Use React Query for server/async state.",
        tags: ["architecture"],
      },
      {
        id: "fe-a11y",
        title: "Accessibility (a11y)",
        type: "core",
        level: 2,
        description:
          "Build for everyone: ARIA attributes, keyboard navigation, focus management, and WCAG 2.1 guidelines.",
        tags: ["accessibility"],
        resources: [{ label: "WebAIM", href: "https://webaim.org" }],
      },
      {
        id: "fe-test",
        title: "Testing (Vitest + RTL)",
        type: "optional",
        level: 2,
        description:
          "Write component tests with React Testing Library, unit tests with Vitest, and basic E2E with Playwright.",
        tags: ["testing"],
      },
      // Advanced
      {
        id: "fe-perf",
        title: "Performance & Web Vitals",
        type: "core",
        level: 3,
        description:
          "Optimize Core Web Vitals: LCP, FID/INP, CLS. Bundle splitting, lazy loading, and image optimization.",
        tags: ["performance"],
        resources: [{ label: "web.dev/performance", href: "https://web.dev/performance" }],
      },
      {
        id: "fe-nextjs",
        title: "Next.js / SSR Frameworks",
        type: "optional",
        level: 3,
        description:
          "Build production apps with Next.js: App Router, Server Components, SSR, SSG, and ISR strategies.",
        tags: ["framework"],
        resources: [{ label: "Next.js Docs", href: "https://nextjs.org/docs" }],
      },
      {
        id: "fe-css-arch",
        title: "CSS Architecture",
        type: "optional",
        level: 3,
        description:
          "Design scalable styling systems with Tailwind CSS, CSS Modules, or CSS-in-JS (Vanilla Extract).",
        tags: ["css", "architecture"],
      },
      {
        id: "fe-animation",
        title: "Animation & Motion",
        type: "optional",
        level: 3,
        description:
          "Create smooth UX with CSS transitions, Framer Motion, and the Web Animations API.",
        tags: ["animation"],
      },
      // Expert
      {
        id: "fe-compiler",
        title: "Build Tools & Bundlers",
        type: "optional",
        level: 4,
        description:
          "Configure Vite, webpack, Turbopack. Understand tree-shaking, code splitting, and ESM/CJS module formats.",
        tags: ["tooling"],
      },
      {
        id: "fe-design-sys",
        title: "Design Systems",
        type: "optional",
        level: 4,
        description:
          "Build component libraries: design tokens, documentation with Storybook, and publishing via npm.",
        tags: ["architecture"],
      },
      {
        id: "fe-arch",
        title: "Frontend Architecture",
        type: "core",
        level: 4,
        description:
          "Plan large-scale frontend: micro-frontends, monorepos (Turborepo), feature flags, and scalable patterns.",
        tags: ["architecture"],
      },
    ],
  },

  // ── DevOps ───────────────────────────────────────────────────────────────
  {
    slug: "devops",
    label: "DevOps",
    flag: "Core",
    shortDesc:
      "CI/CD pipelines, infrastructure-as-code, containers, and cloud platforms.",
    longDesc:
      "Bridge development and operations. Learn to automate deployments, manage infrastructure as code, work with containers and Kubernetes, and build reliable cloud-native systems.",
    color: "#3BB58F",
    bg: "rgba(59,181,143,0.10)",
    meta: { nodes: 36, hours: 110 },
    nodes: [
      // Foundation
      {
        id: "do-linux",
        title: "Linux & Shell Scripting",
        type: "core",
        level: 1,
        description:
          "Master the command line: file system, process management, permissions, cron jobs, and Bash scripting.",
        tags: ["linux"],
        resources: [{ label: "The Linux Command Line", href: "https://linuxcommand.org/tlcl.php" }],
      },
      {
        id: "do-git",
        title: "Git & Branching Strategies",
        type: "core",
        level: 1,
        description:
          "Git Flow, trunk-based development, tagging releases, and managing large collaborative codebases.",
        tags: ["git"],
      },
      {
        id: "do-net",
        title: "Networking Fundamentals",
        type: "core",
        level: 1,
        description:
          "TCP/IP, DNS, HTTP/HTTPS, firewalls, load balancers — how packets move across the internet.",
        tags: ["networking"],
        resources: [{ label: "Networking Course (freeCodeCamp)", href: "https://www.freecodecamp.org/news/computer-networking-how-applications-talk-over-the-internet" }],
      },
      // Intermediate
      {
        id: "do-docker",
        title: "Docker & Containers",
        type: "core",
        level: 2,
        description:
          "Build, tag, push Docker images. Write multi-stage Dockerfiles. Use docker-compose for local dev.",
        tags: ["containers"],
        resources: [{ label: "Docker Docs", href: "https://docs.docker.com/get-started" }],
      },
      {
        id: "do-cicd",
        title: "CI/CD Pipelines",
        type: "core",
        level: 2,
        description:
          "Build automated pipelines with GitHub Actions, GitLab CI, or Jenkins: test, build, deploy.",
        tags: ["automation"],
        resources: [{ label: "GitHub Actions Docs", href: "https://docs.github.com/en/actions" }],
      },
      {
        id: "do-cloud",
        title: "Cloud Platforms (AWS/GCP/Azure)",
        type: "core",
        level: 2,
        description:
          "Provision compute, storage, and networking on cloud. Understand IAM, VPCs, regions, and billing.",
        tags: ["cloud"],
        resources: [{ label: "AWS Free Tier Docs", href: "https://aws.amazon.com/free" }],
      },
      {
        id: "do-monitor",
        title: "Monitoring & Observability",
        type: "core",
        level: 2,
        description:
          "Set up Prometheus + Grafana. Understand logs (ELK), metrics, and distributed tracing.",
        tags: ["observability"],
        resources: [{ label: "OpenTelemetry Docs", href: "https://opentelemetry.io/docs" }],
      },
      // Advanced
      {
        id: "do-k8s",
        title: "Kubernetes",
        type: "optional",
        level: 3,
        description:
          "Deploy and manage containerized workloads: Pods, Deployments, Services, Ingress, ConfigMaps, Helm.",
        tags: ["orchestration"],
        resources: [{ label: "Kubernetes Docs", href: "https://kubernetes.io/docs/tutorials" }],
      },
      {
        id: "do-iac",
        title: "Infrastructure as Code (Terraform)",
        type: "core",
        level: 3,
        description:
          "Define infrastructure with Terraform or Pulumi. Version, review, plan, and apply cloud resources.",
        tags: ["iac"],
        resources: [{ label: "Terraform Getting Started", href: "https://developer.hashicorp.com/terraform/tutorials" }],
      },
      {
        id: "do-security",
        title: "DevSecOps Basics",
        type: "optional",
        level: 3,
        description:
          "Shift security left: SAST in CI, secret scanning, container vulnerability scanning (Trivy).",
        tags: ["security"],
      },
      {
        id: "do-gitops",
        title: "GitOps & ArgoCD",
        type: "optional",
        level: 3,
        description:
          "Manage Kubernetes workloads declaratively with Git as the source of truth using ArgoCD or FluxCD.",
        tags: ["gitops"],
        resources: [{ label: "ArgoCD Docs", href: "https://argo-cd.readthedocs.io" }],
      },
      // Expert
      {
        id: "do-sre",
        title: "SRE Practices",
        type: "optional",
        level: 4,
        description:
          "SLOs, SLAs, error budgets, incident management, on-call runbooks, and reliability engineering.",
        tags: ["sre"],
        resources: [{ label: "Google SRE Book", href: "https://sre.google/sre-book/table-of-contents" }],
      },
      {
        id: "do-platform",
        title: "Platform Engineering",
        type: "optional",
        level: 4,
        description:
          "Build internal developer platforms: self-service infrastructure, golden paths, and improved DX.",
        tags: ["platform"],
      },
      {
        id: "do-chaos",
        title: "Chaos Engineering",
        type: "optional",
        level: 4,
        description:
          "Test system resilience with controlled experiments. Tools: Chaos Monkey, Litmus Chaos, Gremlin.",
        tags: ["reliability"],
      },
    ],
  },

  // ── Mobile ────────────────────────────────────────────────────────────────
  {
    slug: "mobile",
    label: "Mobile",
    flag: "Specialization",
    shortDesc:
      "Cross-platform and native mobile development for iOS and Android.",
    longDesc:
      "Build mobile applications that feel native on iOS and Android. Start with React Native and Expo, then dive into native APIs, app store deployment, and performance optimization for mobile.",
    color: "#F39B52",
    bg: "rgba(243,155,82,0.10)",
    meta: { nodes: 30, hours: 90 },
    nodes: [
      // Foundation
      {
        id: "mo-rn",
        title: "React Native Basics",
        type: "core",
        level: 1,
        description:
          "Core components, StyleSheet API, Flexbox layout, and the React Native mental model vs React web.",
        tags: ["react-native"],
        resources: [{ label: "React Native Docs", href: "https://reactnative.dev/docs/getting-started" }],
      },
      {
        id: "mo-expo",
        title: "Expo & Dev Environment",
        type: "core",
        level: 1,
        description:
          "Set up Expo, use Expo Go for development, manage app.json configuration, and understand managed vs bare workflow.",
        tags: ["tooling"],
        resources: [{ label: "Expo Docs", href: "https://docs.expo.dev" }],
      },
      {
        id: "mo-ui",
        title: "Mobile UI Patterns",
        type: "core",
        level: 1,
        description:
          "Touch gestures, mobile-first layouts, native UI conventions, safe areas, and platform differences.",
        tags: ["ui"],
      },
      // Intermediate
      {
        id: "mo-nav",
        title: "Navigation (Expo Router)",
        type: "core",
        level: 2,
        description:
          "File-based routing with Expo Router: stacks, tabs, modals, deep linking, and URL-based navigation.",
        tags: ["navigation"],
        resources: [{ label: "Expo Router Docs", href: "https://docs.expo.dev/routing/introduction" }],
      },
      {
        id: "mo-state",
        title: "State Management",
        type: "core",
        level: 2,
        description:
          "Zustand or Redux for global state. React Query for server state. Context for theme/auth providers.",
        tags: ["state"],
      },
      {
        id: "mo-native-api",
        title: "Native APIs & Permissions",
        type: "core",
        level: 2,
        description:
          "Camera, location, push notifications, file system, biometrics using Expo SDK modules.",
        tags: ["native"],
      },
      {
        id: "mo-anim",
        title: "Animations (Reanimated)",
        type: "optional",
        level: 2,
        description:
          "Smooth 60fps animations with React Native Reanimated 3 and Gesture Handler.",
        tags: ["animation"],
        resources: [{ label: "Reanimated Docs", href: "https://docs.swmansion.com/react-native-reanimated" }],
      },
      // Advanced
      {
        id: "mo-push",
        title: "Push Notifications",
        type: "optional",
        level: 3,
        description:
          "Implement push notifications with Expo Notifications or Firebase Cloud Messaging (FCM/APNs).",
        tags: ["notifications"],
      },
      {
        id: "mo-offline",
        title: "Offline & Data Sync",
        type: "optional",
        level: 3,
        description:
          "Handle offline-first with AsyncStorage, SQLite (expo-sqlite), or WatermelonDB. Sync strategies.",
        tags: ["offline"],
      },
      {
        id: "mo-perf",
        title: "Performance Optimization",
        type: "core",
        level: 3,
        description:
          "FlatList optimization, image caching (Expo Image), JS thread profiling, and reducing bridge overhead.",
        tags: ["performance"],
      },
      {
        id: "mo-deploy",
        title: "App Store Deployment",
        type: "core",
        level: 3,
        description:
          "Build, sign, and submit to Apple App Store and Google Play Store. App review and update process.",
        tags: ["deployment"],
      },
      // Expert
      {
        id: "mo-flutter",
        title: "Flutter (Alternative Path)",
        type: "optional",
        level: 4,
        description:
          "Build native-compiled apps with Flutter and Dart for performance-critical UIs.",
        tags: ["flutter"],
      },
      {
        id: "mo-native-module",
        title: "Native Modules (Swift/Kotlin)",
        type: "optional",
        level: 4,
        description:
          "Write custom native modules in Swift/Kotlin when Expo SDK doesn't cover your use case.",
        tags: ["native"],
      },
      {
        id: "mo-ci",
        title: "Mobile CI/CD (EAS Build)",
        type: "optional",
        level: 4,
        description:
          "Automate builds and deployments with Expo Application Services (EAS) or Fastlane.",
        tags: ["cicd"],
      },
    ],
  },

  // ── Security ──────────────────────────────────────────────────────────────
  {
    slug: "security",
    label: "Security",
    flag: "Specialization",
    shortDesc:
      "Application security, threat modelling, penetration testing and compliance.",
    longDesc:
      "Learn to think like an attacker to defend like a pro. This path covers application security, OWASP vulnerabilities, threat modelling, penetration testing, and building secure systems by design.",
    color: "#E06A6A",
    bg: "rgba(224,106,106,0.10)",
    meta: { nodes: 28, hours: 80 },
    nodes: [
      // Foundation
      {
        id: "sec-owasp",
        title: "OWASP Top 10",
        type: "core",
        level: 1,
        description:
          "Understand the 10 most critical web application security risks: injection, XSS, CSRF, broken access control, and more.",
        tags: ["web-security"],
        resources: [{ label: "OWASP Top 10", href: "https://owasp.org/www-project-top-ten" }],
      },
      {
        id: "sec-network",
        title: "Network Security Basics",
        type: "core",
        level: 1,
        description:
          "TCP/IP security, firewalls, VPNs, TLS/SSL certificates, and common network attack patterns.",
        tags: ["networking"],
      },
      {
        id: "sec-linux",
        title: "Linux Security",
        type: "core",
        level: 1,
        description:
          "File permissions, user management, sudoers, SSH hardening, auditd, and system hardening.",
        tags: ["linux"],
      },
      // Intermediate
      {
        id: "sec-crypto",
        title: "Cryptography Fundamentals",
        type: "core",
        level: 2,
        description:
          "Symmetric and asymmetric encryption, hashing, digital signatures, PKI, and key management.",
        tags: ["cryptography"],
      },
      {
        id: "sec-auth",
        title: "Identity & Access Management",
        type: "core",
        level: 2,
        description:
          "OAuth 2.0, OpenID Connect, JWT, SAML, MFA, and privilege escalation prevention strategies.",
        tags: ["iam"],
      },
      {
        id: "sec-appsec",
        title: "Application Security Testing",
        type: "core",
        level: 2,
        description:
          "SAST, DAST, Burp Suite basics, secure code review checklists, and vulnerability assessment.",
        tags: ["testing"],
        resources: [{ label: "PortSwigger Web Security Academy", href: "https://portswigger.net/web-security" }],
      },
      // Advanced
      {
        id: "sec-threat",
        title: "Threat Modelling (STRIDE)",
        type: "core",
        level: 3,
        description:
          "Model threats with STRIDE/DREAD, draw data flow diagrams, and prioritize security controls with OWASP ASVS.",
        tags: ["architecture"],
      },
      {
        id: "sec-pentest",
        title: "Penetration Testing",
        type: "optional",
        level: 3,
        description:
          "Web app pentesting methodology: reconnaissance, scanning, exploitation, and professional reporting.",
        tags: ["pentesting"],
        resources: [{ label: "OWASP Testing Guide", href: "https://owasp.org/www-project-web-security-testing-guide" }],
      },
      {
        id: "sec-cloud-sec",
        title: "Cloud Security (AWS/GCP)",
        type: "optional",
        level: 3,
        description:
          "Secure cloud environments: IAM least privilege, VPC design, secrets management (Vault), CSPM tools.",
        tags: ["cloud"],
      },
      // Expert
      {
        id: "sec-incident",
        title: "Incident Response",
        type: "optional",
        level: 4,
        description:
          "Incident lifecycle, digital forensics basics, SIEM (Splunk/ELK), and blameless post-mortem practices.",
        tags: ["ir"],
      },
      {
        id: "sec-devsecops",
        title: "DevSecOps & Secure SDLC",
        type: "core",
        level: 4,
        description:
          "Embed security into CI/CD: automated SAST/DAST, secret detection, container image hardening, and SBOM.",
        tags: ["devsecops"],
      },
    ],
  },

  // ── Data Engineering ──────────────────────────────────────────────────────
  {
    slug: "data",
    label: "Data Engineering",
    flag: "Specialization",
    shortDesc:
      "Data pipelines, warehouses, streaming systems and analytical foundations.",
    longDesc:
      "Build the infrastructure that powers data-driven decisions. This path covers ETL pipelines, data warehousing, stream processing, orchestration, and the modern data stack.",
    color: "#6FA95C",
    bg: "rgba(111,169,92,0.10)",
    meta: { nodes: 26, hours: 85 },
    nodes: [
      // Foundation
      {
        id: "de-sql",
        title: "SQL (Advanced)",
        type: "core",
        level: 1,
        description:
          "Window functions, CTEs, recursive queries, query optimization, indexing, and analytical query patterns.",
        tags: ["sql"],
      },
      {
        id: "de-python",
        title: "Python for Data",
        type: "core",
        level: 1,
        description:
          "Pandas, NumPy, file I/O (CSV, Parquet, JSON), data manipulation, and scripting for pipelines.",
        tags: ["python"],
        resources: [{ label: "Pandas Docs", href: "https://pandas.pydata.org/docs/user_guide" }],
      },
      {
        id: "de-linux",
        title: "Linux & Shell Automation",
        type: "core",
        level: 1,
        description:
          "Cron jobs, shell scripting for automation, process management for long-running pipeline jobs.",
        tags: ["linux"],
      },
      // Intermediate
      {
        id: "de-etl",
        title: "ETL Pipeline Fundamentals",
        type: "core",
        level: 2,
        description:
          "Extract-Transform-Load patterns, data quality validation, idempotency, incremental loading, and scheduling.",
        tags: ["etl"],
      },
      {
        id: "de-dw",
        title: "Data Warehousing",
        type: "core",
        level: 2,
        description:
          "Dimensional modelling (star/snowflake schema), Snowflake/BigQuery/Redshift, OLAP vs OLTP design.",
        tags: ["warehouse"],
      },
      {
        id: "de-airflow",
        title: "Workflow Orchestration (Airflow)",
        type: "core",
        level: 2,
        description:
          "Build, schedule, and monitor data pipelines with Apache Airflow or Prefect. DAGs, tasks, and SLAs.",
        tags: ["orchestration"],
        resources: [{ label: "Airflow Docs", href: "https://airflow.apache.org/docs" }],
      },
      // Advanced
      {
        id: "de-spark",
        title: "Apache Spark",
        type: "optional",
        level: 3,
        description:
          "Distributed data processing with PySpark: RDDs, DataFrames, Spark SQL, and partitioning strategies.",
        tags: ["spark"],
      },
      {
        id: "de-kafka",
        title: "Stream Processing (Kafka)",
        type: "optional",
        level: 3,
        description:
          "Real-time data pipelines with Apache Kafka, Kafka Streams, or Apache Flink.",
        tags: ["streaming"],
        resources: [{ label: "Kafka Docs", href: "https://kafka.apache.org/documentation" }],
      },
      {
        id: "de-dbt",
        title: "dbt (Data Build Tool)",
        type: "core",
        level: 3,
        description:
          "Transform data in-warehouse with dbt: models, tests, documentation, lineage, and CI integration.",
        tags: ["dbt"],
        resources: [{ label: "dbt Docs", href: "https://docs.getdbt.com" }],
      },
      // Expert
      {
        id: "de-lake",
        title: "Data Lake Architecture",
        type: "optional",
        level: 4,
        description:
          "Lakehouse architectures: Delta Lake, Apache Iceberg. S3/GCS object storage and partitioning strategies.",
        tags: ["data-lake"],
      },
      {
        id: "de-mlops",
        title: "ML Pipeline Foundations",
        type: "optional",
        level: 4,
        description:
          "Feature stores, model training pipelines, MLflow experiment tracking, and bridging DE to ML.",
        tags: ["mlops"],
      },
    ],
  },

  // ── QA Engineering ────────────────────────────────────────────────────────
  {
    slug: "qa",
    label: "QA Engineering",
    flag: "Specialization",
    shortDesc:
      "Testing strategies, automation frameworks, and quality assurance practices.",
    longDesc:
      "Quality engineering is more than manual testing. Learn to design test strategies, build robust automation frameworks, and integrate quality throughout the development lifecycle.",
    color: "#C77DFF",
    bg: "rgba(199,125,255,0.10)",
    meta: { nodes: 22, hours: 65 },
    nodes: [
      // Foundation
      {
        id: "qa-fundamentals",
        title: "Testing Fundamentals",
        type: "core",
        level: 1,
        description:
          "Test pyramid, types of testing (unit, integration, e2e, exploratory), test design techniques, and writing test cases.",
        tags: ["fundamentals"],
      },
      {
        id: "qa-manual",
        title: "Manual & Exploratory Testing",
        type: "core",
        level: 1,
        description:
          "Exploratory testing, black-box techniques, bug reporting best practices, and structured test plans.",
        tags: ["manual"],
      },
      // Intermediate
      {
        id: "qa-api",
        title: "API Testing (Postman)",
        type: "core",
        level: 2,
        description:
          "Test REST APIs with Postman: assertions, environments, collections, and automated test runs.",
        tags: ["api"],
        resources: [{ label: "Postman Learning Center", href: "https://learning.postman.com" }],
      },
      {
        id: "qa-e2e",
        title: "E2E Automation (Playwright)",
        type: "core",
        level: 2,
        description:
          "Write end-to-end tests with Playwright or Cypress: page object model, fixtures, and CI integration.",
        tags: ["automation"],
        resources: [{ label: "Playwright Docs", href: "https://playwright.dev/docs/intro" }],
      },
      {
        id: "qa-unit",
        title: "Unit & Integration Testing",
        type: "core",
        level: 2,
        description:
          "Write unit tests in Jest/Vitest, mock dependencies, test coverage analysis, and TDD practice.",
        tags: ["unit"],
      },
      // Advanced
      {
        id: "qa-perf",
        title: "Performance Testing (k6)",
        type: "optional",
        level: 3,
        description:
          "Load testing with k6 or JMeter. Understand throughput, latency, and identifying breaking points.",
        tags: ["performance"],
        resources: [{ label: "k6 Docs", href: "https://k6.io/docs" }],
      },
      {
        id: "qa-security",
        title: "Security Testing Basics",
        type: "optional",
        level: 3,
        description:
          "OWASP testing guide, basic fuzzing, SQL injection/XSS detection, and QA's role in security.",
        tags: ["security"],
      },
      {
        id: "qa-cicd",
        title: "QA in CI/CD Pipelines",
        type: "core",
        level: 3,
        description:
          "Integrate test suites into GitHub Actions. Fail-fast strategies, parallel test execution, and flakiness management.",
        tags: ["cicd"],
      },
      // Expert
      {
        id: "qa-strategy",
        title: "Test Strategy & Quality Culture",
        type: "core",
        level: 4,
        description:
          "Define test strategies for engineering teams, shift-left testing, risk-based testing, and building quality culture.",
        tags: ["strategy"],
      },
    ],
  },

  // ── Database Admin ────────────────────────────────────────────────────────
  {
    slug: "dba",
    label: "Database Admin",
    flag: "Specialization",
    shortDesc:
      "Relational and NoSQL database administration, performance tuning and backups.",
    longDesc:
      "Manage, optimize, and secure databases at scale. This path covers relational and NoSQL administration, query optimization, backup and recovery, high availability, and cloud-managed databases.",
    color: "#8A8A8A",
    bg: "rgba(138,138,138,0.10)",
    meta: { nodes: 20, hours: 60 },
    nodes: [
      // Foundation
      {
        id: "dba-sql",
        title: "SQL Mastery",
        type: "core",
        level: 1,
        description:
          "Advanced SQL: window functions, CTEs, recursive queries, stored procedures, triggers, and complex joins.",
        tags: ["sql"],
      },
      {
        id: "dba-rdbms",
        title: "PostgreSQL / MySQL Internals",
        type: "core",
        level: 1,
        description:
          "Deep dive into PostgreSQL or MySQL: configuration files, storage engine, WAL/binlog, and architecture.",
        tags: ["rdbms"],
        resources: [{ label: "PostgreSQL Documentation", href: "https://www.postgresql.org/docs" }],
      },
      // Intermediate
      {
        id: "dba-indexing",
        title: "Indexing & Query Optimization",
        type: "core",
        level: 2,
        description:
          "B-tree, hash, composite indexes. EXPLAIN/ANALYZE output, query planner hints, and slow query log analysis.",
        tags: ["performance"],
      },
      {
        id: "dba-backup",
        title: "Backup & Point-in-Time Recovery",
        type: "core",
        level: 2,
        description:
          "Physical vs logical backups, pg_dump/pg_restore, WAL archiving, binlog backups, and RPO/RTO planning.",
        tags: ["backup"],
      },
      {
        id: "dba-replication",
        title: "Replication & High Availability",
        type: "core",
        level: 2,
        description:
          "Primary-replica replication, streaming replication, Patroni/HAProxy failover, and connection pooling.",
        tags: ["ha"],
      },
      // Advanced
      {
        id: "dba-nosql",
        title: "NoSQL Databases",
        type: "optional",
        level: 3,
        description:
          "MongoDB, Redis, Cassandra — when to use them, data modelling for NoSQL, and operational runbooks.",
        tags: ["nosql"],
      },
      {
        id: "dba-security",
        title: "Database Security",
        type: "core",
        level: 3,
        description:
          "Role management, least-privilege access, column/row-level security, encryption at rest and in transit.",
        tags: ["security"],
      },
      {
        id: "dba-cloud",
        title: "Cloud-Managed Databases",
        type: "optional",
        level: 3,
        description:
          "RDS, Aurora, Cloud SQL, AlloyDB — managed DB services, migration strategies, and cost optimization.",
        tags: ["cloud"],
      },
      // Expert
      {
        id: "dba-sharding",
        title: "Sharding & Distributed Databases",
        type: "optional",
        level: 4,
        description:
          "Horizontal partitioning, distributed SQL (CockroachDB, Vitess), consistent hashing, and data placement.",
        tags: ["distributed"],
      },
    ],
  },

  // ── Business & Tech ────────────────────────────────────────────────────────
  {
    slug: "business",
    label: "Business & Tech",
    flag: "Domain",
    shortDesc:
      "Product management, technical communication, and engineering leadership skills.",
    longDesc:
      "Bridge the gap between business goals and engineering execution. Learn product thinking, stakeholder communication, and the leadership skills that help engineers grow beyond the code into influential roles.",
    color: "#5C9CE6",
    bg: "rgba(92,156,230,0.10)",
    meta: { nodes: 18, hours: 55 },
    nodes: [
      // Foundation
      {
        id: "biz-comm",
        title: "Technical Communication",
        type: "core",
        level: 1,
        description:
          "Write clear documentation, RFCs, and technical proposals. Present complex ideas to non-technical stakeholders.",
        tags: ["communication"],
      },
      {
        id: "biz-agile",
        title: "Agile & Scrum Fundamentals",
        type: "core",
        level: 1,
        description:
          "Understand Scrum ceremonies, Kanban boards, story points, retrospectives, and iterative development.",
        tags: ["agile"],
      },
      // Intermediate
      {
        id: "biz-metrics",
        title: "Engineering Metrics (DORA)",
        type: "core",
        level: 2,
        description:
          "DORA metrics (deployment frequency, lead time, MTTR, change failure rate) and measuring engineering health.",
        tags: ["metrics"],
      },
      {
        id: "biz-product",
        title: "Product Thinking",
        type: "core",
        level: 2,
        description:
          "User story mapping, prioritization frameworks (RICE, MoSCoW), and working effectively with product managers.",
        tags: ["product"],
      },
      {
        id: "biz-estimation",
        title: "Estimation & Technical Planning",
        type: "optional",
        level: 2,
        description:
          "Story point estimation, t-shirt sizing, uncertainty handling, and communicating delivery timelines.",
        tags: ["planning"],
      },
      // Advanced
      {
        id: "biz-adr",
        title: "Architecture Decision Records",
        type: "core",
        level: 3,
        description:
          "Write ADRs to document technical decisions with context and consequences. Structured decision-making.",
        tags: ["architecture"],
      },
      {
        id: "biz-tech-lead",
        title: "Tech Lead & Engineering Influence",
        type: "optional",
        level: 3,
        description:
          "Conduct effective code reviews, mentor junior engineers, build technical roadmaps, and influence without authority.",
        tags: ["leadership"],
      },
      // Expert
      {
        id: "biz-hiring",
        title: "Hiring & Team Building",
        type: "optional",
        level: 4,
        description:
          "Conduct technical interviews, design take-home exercises, define role levelling, and build engineering teams.",
        tags: ["hiring"],
      },
      {
        id: "biz-culture",
        title: "Engineering Culture",
        type: "optional",
        level: 4,
        description:
          "Define team values, blameless post-mortems, psychological safety, and building high-performing engineering culture.",
        tags: ["culture"],
      },
    ],
  },
];

// Convenience: get a domain by slug
export function getDomain(slug: string): RoadmapDomain | undefined {
  return roadmapDomains.find((d) => d.slug === slug);
}

// Convenience: get all valid domain slugs for static generation
export function getAllDomainSlugs(): string[] {
  return roadmapDomains.map((d) => d.slug);
}
