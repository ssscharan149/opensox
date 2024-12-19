let defaults = {
  FRONTEND_BASE_URL:
    process.env.NEXT_PUBLIC_FRONTEND_BASE_URL || "http://localhost:3000",
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
};

export const CONFIG = {
  ...defaults,
};

export const projectsOfTheWeek = [
  {
    id: "",
    name: "",
    description: "",
    url: "",
    avatarUrl: "",
    totalIssueCount: 10,
    primaryLanguage: "",
    popularity: "",
    stage: "",
    competition: "",
    activity: "",
  },
];
