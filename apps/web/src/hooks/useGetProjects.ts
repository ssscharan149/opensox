import { useCallback } from "react";
import { ProjectProps } from "@/types/filter";
import { FilterProps } from "@opensox/shared/types";

const BASE_URL = "http://localhost:8080";

export const useGetProjects = () => {
  const func = useCallback(
    async (filters: FilterProps): Promise<ProjectProps[]> => {
      const response = await fetch(`${BASE_URL}/api/projects/get_projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });
      const data: ProjectProps[] = await response.json();
      return data;
    },
    []
  );
  return func;
};
