import type { RoadmapDomain } from "../types";

export const security: RoadmapDomain = {
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
};
