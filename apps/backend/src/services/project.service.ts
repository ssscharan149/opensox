import { graphql } from "@octokit/graphql";
import dotenv from "dotenv";

dotenv.config();

const GH_PAT = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token ${GH_PAT}`,
    },
});

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

interface FilterTypes {
    language?: string;
    stars?: StarRange;
    forks?: ForkRange;
    lastCommit?: string;
    dateCreated?: DateRange;
}

interface OptionsTypes {
    sort?: 'stars';
    order?: 'desc';
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
    filters: FilterTypes = {},
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

    if (filters.lastCommit) {
        queryParts.push(`pushed:${filters.lastCommit}`);
    }

    if (filters.dateCreated) {
        if (filters.dateCreated.start) {
            queryParts.push(`created:>=${filters.dateCreated.start}`);
        }
        if (filters.dateCreated.end) {
            queryParts.push(`created:<=${filters.dateCreated.end}`);
        }
    }

    // Default fields to filter contributor friendly repos

    queryParts.push(`is:organization`);
    queryParts.push(`is:public`);
    queryParts.push(`fork:true`);

    const searchQueryString = queryParts.join(' ');
    console.log(searchQueryString)
    const response: GraphQLResponse = await graphqlWithAuth(`
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
    `, {
        searchQuery: searchQueryString,
        first: options.per_page || 30,
    });

    return response.search.nodes;
};