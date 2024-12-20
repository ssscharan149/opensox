"use client";

import { useRenderProjects } from "@/store/useRenderProjectsStore";
import Dashboard from "../page";
import { useEffect } from "react";

const Projects = () => {
  const { setRenderProjects } = useRenderProjects();

  useEffect(() => {
    setRenderProjects(false);
  }, [setRenderProjects]);

  return <Dashboard text={"Projects for you"}></Dashboard>;
};

export default Projects;
