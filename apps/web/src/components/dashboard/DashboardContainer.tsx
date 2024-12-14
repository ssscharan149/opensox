"use client";

import { useProjectsData } from "@/store/useProjectsDataStore";
import ProjectsContainer from "./ProjectsContainer";
import { useRenderProjects } from "@/store/useRenderProjectsStore";

export default function DashboardContainer() {
  const { renderProjects } = useRenderProjects();
  const { data } = useProjectsData();
  return (
    <div className="h-[90vh] rounded-lg mx-4 bg-ox-black-1">
      <div className="max-h-full overflow-scroll">
        {renderProjects && <ProjectsContainer projects={data}></ProjectsContainer>}
      </div>
    </div>
  );
}
