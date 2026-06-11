import {
  Code2,
  Layers,
  Server,
  Smartphone,
  Shield,
  BarChart2,
  Bug,
  Database,
  Briefcase,
} from "lucide-react";
import type { ComponentType } from "react";

export const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  backend: Code2,
  frontend: Layers,
  devops: Server,
  mobile: Smartphone,
  security: Shield,
  data: BarChart2,
  qa: Bug,
  dba: Database,
  business: Briefcase,
};
