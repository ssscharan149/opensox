import { UserInputFilterProps } from "@/types/filter";
import { FilterProps } from "@opensox/shared/types";

const getDateFromPast = (days: number): string => {
  const now = new Date();
  const pastDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

  const year = pastDate.getFullYear();
  const month = String(pastDate.getMonth() + 1).padStart(2, "0");
  const day = String(pastDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// Usage:
// console.log(getDateFromPast(7));  // get the date of 7 days ago from today

interface Range {
  min?: string;
  max?: string;
}

interface PopularityProps {
  "Very low": Range;
  Low: Range;
  Moderate: Range;
  High: Range;
  "Very high": Range;
}

interface CompetitionProps {
  "Very low": Range;
  Low: Range;
  Moderate: Range;
  High: Range;
  "Very high": Range;
}

interface StageProps {
  "Very early": string;
  Early: string;
  Emerging: string;
  Established: string;
}

interface ActivityProps {
  Highest: string;
  High: string;
  Normal: string;
  Low: string;
}

interface UserFilterObjProps {
  Popularity: PopularityProps;
  Competition: CompetitionProps;
  Stage: StageProps;
  Activity: ActivityProps;
}

const userInputValues: UserFilterObjProps = {
  Popularity: {
    "Very low": { min: "10", max: "500" },
    Low: { min: "501", max: "1000" },
    Moderate: { min: "1001", max: "2000" },
    High: { min: "2001", max: "5000" },
    "Very high": { min: "5001" },
  },
  Competition: {
    "Very low": { min: "0", max: "200" },
    Low: { min: "201", max: "500" },
    Moderate: { min: "501", max: "1000" },
    High: { min: "1001", max: "2000" },
    "Very high": { min: "2001" },
  },
  Stage: {
    "Very early": `>=${getDateFromPast(7)}`, // within this week
    Early: `>=${getDateFromPast(30)}`, // within this month
    Emerging: `>=${getDateFromPast(365)}`, // within this year
    Established: `>=${getDateFromPast(1825)}`, // within last 5 years
  },
  Activity: {
    Highest: `>=${getDateFromPast(0)}`, // within today
    High: `>=${getDateFromPast(7)}`, // within this week
    Normal: `>=${getDateFromPast(30)}`, // within this month
    Low: `>=${getDateFromPast(365)}`, // withing this year
  },
};

// USER INPUT

const userInput = {
  "Tech stack": "Go",
  Popularity: "High",
  Competition: "Low",
  Stage: "Early",
  Activity: "Highest",
};

// API INPUT

const apiInput = {
  language: "python",
  stars: { min: "100", max: "2000" },
  forks: { min: "50", max: "1000" },
  pushed: ">=2024-12-08",
  created: ">=2024-12-12",
};

export const userInputToApiInput = (
  filter: UserInputFilterProps
): FilterProps => {
  const data: Partial<FilterProps> = {};

  if (filter["Tech stack"]) {
    data.language = filter["Tech stack"];
  }

  if (filter.Popularity) {
    data.stars =
      userInputValues.Popularity[filter.Popularity as keyof PopularityProps];
  }

  if (filter.Competition) {
    data.forks =
      userInputValues.Competition[filter.Competition as keyof CompetitionProps];
  }

  if (filter.Activity) {
    data.pushed =
      userInputValues.Activity[filter.Activity as keyof ActivityProps];
  }

  if (filter.Stage) {
    data.created = userInputValues.Stage[filter.Stage as keyof StageProps];
  }

  return data as FilterProps;
};
