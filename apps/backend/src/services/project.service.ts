import { Octokit } from "octokit"
import dotenv from "dotenv"

dotenv.config()

const GH_PAT = process.env.GITHUB_PERSONAL_ACCESS_TOKEN
const octokit = new Octokit({ auth: GH_PAT })

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
    sort?: 'stars' | 'forks' | 'updated' | 'help-wanted-issues';
    order?: 'asc' | 'desc';
    per_page?: number;
    page?: number;
}

// interface Repository {
//     id: number;
//     name: string;
//     full_name: string;
//     description: string | null;
//     html_url: string;
//     stars: number;
//     forks: number;
//     language: string;
//     created_at: string;
//     updated_at: string;
//     pushed_at: string;
// }

// type FetchRepositoriesFunction = (
//     filters: FilterTypes,
//     options: OptionsTypes
// ) => Promise<Repository>;

export const authenticateMe = async (): Promise<void> => {
    const {
        data: { login },
    } = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s", login)
}

export const fetchRepositories = async (
    filters: FilterTypes = {},
    options: OptionsTypes = {}
) => {

    const queryParts = []

    if (filters.language) {
        queryParts.push(`language:${filters.language}`)
    }

    if (filters.stars) {
        if (filters.stars.min) queryParts.push(`stars:>=${filters.stars.min}`)
        if (filters.stars.min) queryParts.push(`stars:<=${filters.stars.max}`)
    }

    if (filters.forks) {
        if (filters.forks.min) queryParts.push(`forks:>=${filters.forks.min}`);
        if (filters.forks.max) queryParts.push(`forks:<=${filters.forks.max}`);
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

    const query = queryParts.join(' ')
    console.log(query)
    const response = await octokit.rest.search.repos({
        q: query,
        sort: options.sort || 'stars',
        order: options.order || 'desc',
        per_page: options.per_page || 30,
        page: options.page || 1
    });

    return response.data.items
}
