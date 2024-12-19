import { create } from "zustand";

interface ProjectFoundProps {
  projectsFound: boolean;
  setProjectsFound: (value: boolean) => void;
}

export const useProjectsFoundStore = create<ProjectFoundProps>((set) => ({
  projectsFound: true,
  setProjectsFound: (value) => set({ projectsFound: false }),
}));
