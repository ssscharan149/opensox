import { useCallback } from "react";
const BASE_URL = "http://localhost:8000";
import { FilterProps, ProjectProps } from "@/types/filter";

export const useGetProjects = () => {
  const func = useCallback(async (filters: FilterProps): Promise<ProjectProps[]> => {
    const response = await fetch(`${BASE_URL}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    });
    const data: ProjectProps[] = await response.json();
    return data;
  }, []);
  return func;
};
