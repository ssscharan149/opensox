"use client";

import { useProjectTitleStore } from "@/store/useProjectTitleStore";
import Dashboard from "../page";
import { useProjectsData } from "@/store/useProjectsDataStore";
import { useRenderProjects } from "@/store/useRenderProjectsStore";
import { projectsOfTheWeek } from "@/utils/config";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Home = () => {
  const { setRenderProjects } = useRenderProjects();
  const { setData } = useProjectsData();
  const { setProjectTitle } = useProjectTitleStore();
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  useEffect(() => {
    const initializeState = () => {
      setData(projectsOfTheWeek);
      setRenderProjects(true);
      setProjectTitle("Projects of the week");
    };

    initializeState();
  }, [setData, setRenderProjects, setProjectTitle]);

  return <Dashboard />;
};

export default Home;
