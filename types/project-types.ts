import { type Project } from "@/types/portfolio-types";

export interface ProjectPanelProps {
  project: Project;
  index: number;
  total: number;
  onOpen: () => void;
}

export type ProjectSummaryProps = ProjectPanelProps;

export type ProjectPreviewProps = Pick<
  ProjectPanelProps,
  "project" | "index" | "total"
>;

export interface ProjectListProps {
  onOpen: (project: Project) => void;
}
