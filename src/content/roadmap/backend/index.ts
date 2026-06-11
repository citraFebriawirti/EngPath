import type { RoadmapDomain } from "../types";

export const backend: RoadmapDomain = {
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
};
