import { router, publicProcedure } from "../trpc.js";
import dotenv from "dotenv";
import { graphql } from "@octokit/graphql";
import { z } from "zod";
import type {
  FilterProps,
  RepositoryProps,
  GraphQLResponseProps,
  OptionsTypesProps,
} from "@opensox/shared";

dotenv.config();

const GH_PAT = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${GH_PAT}`,
  },
});

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
      const queryParts: string[] = [];
      const filters = input.filters || {};
      const options = input.options || {};

      if (filters.language) {
        queryParts.push(`language:${filters.language}`);
      }

      if (filters.stars) {
        queryParts.push(`stars:${filters.stars.min}..${filters.stars.max}`);
      }

      if (filters.forks) {
        queryParts.push(`forks:${filters.forks.min}..${filters.forks.max}`);
      }

      if (filters.pushed) {
        queryParts.push(`pushed:${filters.pushed}`);
      }

      if (filters.created) {
        queryParts.push(`created:${filters.created}`);
      }

      // Default fields to filter contributor friendly repos

      queryParts.push(`is:organization`);
      queryParts.push(`is:public`);
      queryParts.push(`fork:true`);

      const searchQueryString = queryParts.join(" ");

      const response: GraphQLResponseProps = await graphqlWithAuth(
        `
        query($searchQuery: String!, $first: Int!) {
            search(
                query: $searchQuery,
                type: REPOSITORY,
                first: $first
            ) {
                nodes {
                    ... on Repository {
                        id
                        name
                        description
                        url
                        owner {
                            avatarUrl
                        }
                        issues(states: OPEN) {
                            totalCount
                        }
                        primaryLanguage {
                            name
                        }
                    }
                }
                repositoryCount
            }
        }
    `,
        {
          searchQuery: searchQueryString,
          first: options.per_page || 100,
        }
      );

      return response.search.nodes;
    }),
});
