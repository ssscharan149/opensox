import { useCallback } from "react";
import { FilterProps, RepositoryProps } from "@opensox/shared/types";
import { CONFIG } from "@/utils/config";
import { useSession } from "next-auth/react";

export const useGetProjects = () => {
  const { data: session } = useSession();

  const func = useCallback(
    async (filters: FilterProps): Promise<RepositoryProps[]> => {
      if (!session?.accessToken) {
        throw new Error("No authentication token available");
      }

      const response = await fetch(
        `${CONFIG.BASE_URL}/api/projects/get_projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.accessToken}`,
          },
          body: JSON.stringify(filters),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data: RepositoryProps[] = await response.json();
      return data;
    },
    [session?.accessToken]
  );
  return func;
};
