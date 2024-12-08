import { useCallback } from "react";
const BASE_URL = "http://localhost:8000";

export const useGetProjects = () => {
  useCallback(() => {
    interface DateRange {
      start: string;
      end?: string;
    }

    interface StarRange {
      min?: number;
      max?: number;
      custom?: number;
    }

    interface ForkRange {
      min?: number;
      max?: number;
    }

    interface FilterProps {
      language?: string;
      stars?: StarRange;
      forks?: ForkRange;
      lastCommit?: string;
      dateCreated?: DateRange;
    }

    interface Owner {
      avatarUrl: string;
    }

    interface Issues {
      totalCount: number;
    }

    interface PrimaryLanguage {
      name: string;
    }

    interface Project {
      name: string;
      description: string;
      url: string;
      owner: Owner;
      issues: Issues;
      primaryLanguage: PrimaryLanguage;
    }

    const getProjects = async (filters: FilterProps): Promise<Project[]> => {
      const response = await fetch(`${BASE_URL}/projects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });
      const data: Project[] = await response.json();
      return data;
    };
    return getProjects;
  }, []);
};
