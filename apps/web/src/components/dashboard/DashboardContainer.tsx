"use client";

import ProjectsContainer from "./ProjectsContainer";

export default function DashboardContainer() {
  return (
    <div className="w-full h-[90vh] rounded-lg mx-4 bg-ox-black-1">
      <div className="max-h-full overflow-scroll">
      <ProjectsContainer></ProjectsContainer>
      </div>
    </div>
  );
}