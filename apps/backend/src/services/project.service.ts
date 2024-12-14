import { graphql } from "@octokit/graphql";
import dotenv from "dotenv";
import { FilterProps } from "@opensox/shared/types";

dotenv.config();

const GH_PAT = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${GH_PAT}`,
  },
});

interface OptionsTypes {
  sort?: "stars";
  order?: "desc";
  per_page?: number;
  page?: number;
}

interface Repository {
  name: string;
  url: string;
  owner: {
    avatarUrl: string;
  };
  issues: {
    totalCount: number;
  };
  primaryLanguage: {
    name: string;
  } | null;
}

interface GraphQLResponse {
  search: {
    nodes: Repository[];
    repositoryCount: number;
  };
}

// export const authenticateMe = async (): Promise<void> => {
//     const { viewer } = await graphqlWithAuth(`
//         query {
//             viewer {
//                 login
//             }
//         }
//     `);
//     console.log("Hello, %s", viewer.login);
// };

export const fetchRepositories = async (
  filters: FilterProps = {},
  options: OptionsTypes = {}
): Promise<Repository[]> => {
  const queryParts: string[] = [];

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

  const response: GraphQLResponse = await graphqlWithAuth(
    `
        query($searchQuery: String!, $first: Int!) {
            search(
                query: $searchQuery,
                type: REPOSITORY,
                first: $first
            ) {
                nodes {
                    ... on Repository {
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
};
