"use client";

import { useProjectTitleStore } from "@/store/useProjectTitleStore";
import Dashboard from "../page";
import { useProjectsData } from "@/store/useProjectsDataStore";
import { useRenderProjects } from "@/store/useRenderProjectsStore";
import { projectsOfTheWeek } from "@/utils/config";
import { useEffect } from "react";

const Home = () => {
  const { setRenderProjects } = useRenderProjects();
  const { setData } = useProjectsData();
  const { setProjectTitle } = useProjectTitleStore();

  useEffect(() => {
    setData(projectsOfTheWeek);
    setRenderProjects(true);
    setProjectTitle("Projects of the week");
  }, [setData, setRenderProjects, setProjectTitle]);
  return <Dashboard></Dashboard>;
};

export default Home;
