// these type already exists in the shared package, so we can reuse them in the web and backend packages 
// and delete these

export type DateRange= {
  start: string;
  end?: string;
}

export type StarRange= {
  min?: number;
  max?: number;
  custom?: number;
}

export type ForkRange= {
  min?: number;
  max?: number;
}

export type FilterProps = {
  language?: string;
  stars?: StarRange;
  forks?: ForkRange;
  lastCommit?: string;
  dateCreated?: DateRange;
}

export type Owner= {
  avatarUrl: string;
}

export type Issues= {
  totalCount: number;
}

export type PrimaryLanguage= {
  name: string;
}

export type ProjectProps= {
  name: string;
  description: string;
  url: string;
  owner: Owner;
  issues: Issues;
  primaryLanguage: PrimaryLanguage;
}
