import type { RoadmapDomain } from "../types";

export const devops: RoadmapDomain = {
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
};
