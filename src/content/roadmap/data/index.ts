import type { RoadmapDomain } from "../types";

export const data: RoadmapDomain = {
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
};
