import { router, publicProcedure } from "../trpc.js";
import { z } from "zod";
import type { RepositoryProps } from "@opensox/shared";
import { projectService } from "../services/project.service.js";

const filterPropsSchema = z.object({
  language: z.string().optional(),
  stars: z
    .object({
      min: z.string().optional(),
      max: z.string().optional(),
      custom: z.string().optional(),
    })
    .optional(),
  forks: z
    .object({
      min: z.string().optional(),
      max: z.string().optional(),
    })
    .optional(),
  pushed: z.string().optional(),
  created: z.string().optional(),
});

const optionsSchema = z.object({
  sort: z.literal("stars").optional(),
  order: z.literal("desc").optional(),
  per_page: z.number().optional(),
  page: z.number().optional(),
});

const inputSchema = z.object({
  filters: filterPropsSchema.optional(),
  options: optionsSchema.optional(),
});

export const projectRouter = router({
  getGithubProjects: publicProcedure
    .input(inputSchema)
    .query(async ({ input }): Promise<RepositoryProps[]> => {
      return await projectService.fetchGithubProjects(
        input.filters as any,
        input.options as any
      );
    }),
});
