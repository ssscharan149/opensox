"use client";

import { useProjectsData } from "@/store/useProjectsDataStore";
import ProjectsContainer from "./ProjectsContainer";
import { useRenderProjects } from "@/store/useRenderProjectsStore";
import { useLoading } from "@/store/useLoadingStore";
import Spinner from "../ui/spinner";

export default function DashboardContainer() {
  const { renderProjects } = useRenderProjects();
  const { data } = useProjectsData();
  const { loading } = useLoading();
  return (
    <div
      className={`h-[90vh] rounded-lg mx-4 bg-ox-black-1 ${loading ? "flex items-center justify-center" : ""}`}
    >
      <div className={`max-h-full ${!loading ? "overflow-y-scroll" : ""}`}>
        {renderProjects && (
          <ProjectsContainer projects={data} title={"Projects for you"}></ProjectsContainer>
        )}
        {loading && (
          <Spinner text={"loading cool projects for you..."}></Spinner>
        )}
      </div>
    </div>
  );
}
