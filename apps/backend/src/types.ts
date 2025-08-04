// TODO: delete this file when backend is migrated to pnpm and use the types from the shared package

export type DateRange = {
    start: string;
    end?: string;
}

export type StarRange = {
    min?: string;
    max?: string;
    custom?: string;
}

export type ForkRange = {
    min?: string;
    max?: string;
}

export type FilterProps = {
    language?: string;
    stars?: StarRange;
    forks?: ForkRange;
    pushed?: string;
    created?: string;
}

export type OptionsTypesProps = {
    sort?: "stars";
    order?: "desc";
    per_page?: number;
    page?: number;
  };
  
  export type RepositoryProps = {
    id: string;
    name: string;
    description: string;
    url: string;
    owner: {
      avatarUrl: string;
    };
    issues: {
      totalCount: number;
    };
    primaryLanguage: {
      name: string;
    };
  };
  
  export type GraphQLResponseProps = {
    search: {
      nodes: RepositoryProps[];
      repositoryCount: number;
    };
  };
  