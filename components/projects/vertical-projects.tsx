"use client";

import { type FC } from "react";
import { MY_PROJECTS } from "@/constants/portfolio-constants";
import { type ProjectListProps } from "@/types/project-types";
import { ProjectPanel } from "./project-panel";

export const VerticalProjects: FC<ProjectListProps> = ({ onOpen }) => (
  <div className="mt-12 space-y-20">
    {MY_PROJECTS.map((project, index) => (
      <ProjectPanel
        key={project.id}
        project={project}
        index={index}
        total={MY_PROJECTS.length}
        onOpen={() => onOpen(project)}
      />
    ))}
  </div>
);
