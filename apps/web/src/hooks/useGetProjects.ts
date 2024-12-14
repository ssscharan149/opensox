import { useCallback } from "react";
import { FilterProps, RepositoryProps } from "@opensox/shared/types";

const BASE_URL = "http://localhost:8080";

export const useGetProjects = () => {
  const func = useCallback(
    async (filters: FilterProps): Promise<RepositoryProps[]> => {
      const response = await fetch(`${BASE_URL}/api/projects/get_projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });
      const data: RepositoryProps[] = await response.json();
      return data;
    },
    []
  );
  return func;
};
