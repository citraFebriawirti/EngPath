import type { RoadmapDomain } from "../types";

export const qa: RoadmapDomain = {
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
};
