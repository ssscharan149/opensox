export type DateRange = {
    start: string;
    end?: string;
}

export type StarRange = {
    min?: number;
    max?: number;
    custom?: number;
}

export type ForkRange = {
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