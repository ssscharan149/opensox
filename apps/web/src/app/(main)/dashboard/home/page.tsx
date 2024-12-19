"use client";

import Dashboard from "../page";
import { useProjectsData } from "@/store/useProjectsDataStore";
import { useRenderProjects } from "@/store/useRenderProjectsStore";
import { projectsOfTheWeek } from "@/utils/config";
import { useEffect } from "react";

const Home = () => {
  const { setRenderProjects } = useRenderProjects();
  const { setData } = useProjectsData();

  useEffect(() => {
    setData(projectsOfTheWeek);
    setRenderProjects(true);
  }, [setData, setRenderProjects]);
  return <Dashboard text={"Projects of the week"}></Dashboard>;
};

export default Home;
