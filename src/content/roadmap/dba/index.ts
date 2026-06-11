import type { RoadmapDomain } from "../types";

export const dba: RoadmapDomain = {
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
};
