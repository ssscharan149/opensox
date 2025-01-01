"use client";

import { useProjectTitleStore } from "@/store/useProjectTitleStore";
import Dashboard from "../page";
import { useProjectsData } from "@/store/useProjectsDataStore";
import { useRenderProjects } from "@/store/useRenderProjectsStore";
import { projectsOfTheWeek } from "@/utils/config";
import { useEffect, useState } from "react";
import SpinnerElm from "@/components/ui/SpinnerElm";

const Home = () => {
  const { setRenderProjects } = useRenderProjects();
  const { setData } = useProjectsData();
  const { setProjectTitle } = useProjectTitleStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeState = async () => {
      try {
        // Initialize all state concurrently
        await Promise.all([
          setData(projectsOfTheWeek),
          setRenderProjects(true),
          setProjectTitle("Projects of the week"),
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    initializeState();
  }, [setData, setRenderProjects, setProjectTitle]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <SpinnerElm text={"just a second..."}></SpinnerElm>
      </div>
    );
  }

  return <Dashboard />;
};

export default Home;
