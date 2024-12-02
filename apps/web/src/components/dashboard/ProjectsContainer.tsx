"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  avatarUrl: string;
  totalIssueCount: number;
  primaryLanguage: string;
  popularity: string;
  stage: string;
  competition: string;
  activity: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "public-apis",
    description: "A collective list of free APIs",
    url: "https://github.com/public-apis/public-apis",
    avatarUrl: "https://avatars.githubusercontent.com/u/51121562?v=4",
    totalIssueCount: 33,
    primaryLanguage: "Python",
    popularity: "very low",
    stage: "very early",
    competition: "very low",
    activity: "highest",
  },
  {
    id: 2,
    name: "public-apis",
    description: "A collective list of free APIs",
    url: "https://github.com/public-apis/public-apis",
    avatarUrl: "https://avatars.githubusercontent.com/u/51121562?v=4",
    totalIssueCount: 33,
    primaryLanguage: "Go",
    popularity: "low",
    stage: "very early",
    competition: "very low",
    activity: "highest",
  },
  {
    id: 3,
    name: "public-apis",
    description: "A collective list of free APIs",
    url: "https://github.com/public-apis/public-apis",
    avatarUrl: "https://avatars.githubusercontent.com/u/51121562?v=4",
    totalIssueCount: 33,
    primaryLanguage: "TypeScript",
    popularity: "moderate",
    stage: "very early",
    competition: "very low",
    activity: "highest",
  },
  {
    id: 4,
    name: "public-apis",
    description: "A collective list of free APIs",
    url: "https://github.com/public-apis/public-apis",
    avatarUrl: "https://avatars.githubusercontent.com/u/51121562?v=4",
    totalIssueCount: 33,
    primaryLanguage: "Rust",
    popularity: "high",
    stage: "very early",
    competition: "very low",
    activity: "highest",
  },
  {
    id: 5,
    name: "public-apis",
    description: "A collective list of free APIs",
    url: "https://github.com/public-apis/public-apis",
    avatarUrl: "https://avatars.githubusercontent.com/u/51121562?v=4",
    totalIssueCount: 33,
    primaryLanguage: "JavaScript",
    popularity: "very high",
    stage: "very early",
    competition: "very low",
    activity: "highest",
  },
];

interface languageColorsTypes {
  [key: string]: string;
  javascript: string;
  typescript: string;
  python: string;
  go: string;
  rust: string;
  java: string;
  "c#": string;
  "c++": string;
  c: string;
  php: string;
  swift: string;
  kotlin: string;
  ruby: string;
  scala: string;
  html: string;
  elixir: string;
}

const languageColors: languageColorsTypes = {
  javascript: "bg-yellow-500/15 text-yellow-500",
  typescript: "bg-blue-500/15 text-blue-500",
  python: "bg-emerald-500/15 text-emerald-500",
  go: "bg-cyan-500/15 text-cyan-500",
  rust: "bg-orange-500/15 text-orange-500",
  java: "bg-red-500/15 text-red-500",
  "c#": "bg-purple-500/15 text-purple-500",
  "c++": "bg-indigo-500/15 text-indigo-500",
  c: "bg-gray-500/15 text-gray-500",
  php: "bg-violet-500/15 text-violet-500",
  swift: "bg-pink-500/15 text-pink-500",
  kotlin: "bg-sky-500/15 text-sky-500",
  ruby: "bg-rose-500/15 text-rose-500",
  scala: "bg-teal-500/15 text-teal-500",
  html: "bg-orange-400/15 text-orange-400",
  elixir: "bg-purple-600/15 text-purple-600",
};

const getColor = (color: string): string => {
  const lowerColorCase = color.toLowerCase();
  const _color = languageColors[lowerColorCase] || "bg-gray-200 text-gray-800";
  return _color;
};

export default function ProjectsContainer() {

  const handleClick = (link: string) => {
    window.open(link, "_blank")
  }
  const tableColums = [
    "Project",
    "Issues",
    "Language",
    "Popularity",
    "Stage",
    "Competition",
    "Activity",
  ];
  return (
    <div className="w-full rounded-lg p-4">
      <div className="flex items-center justify-between pb-1">
        <h2 className="text-md font-medium text-white">Projects for you</h2>
      </div>
      <div className="rounded-lg border bg-ox-black-2 border-ox-gray border w-full">
        <Table className="w-full">
          <TableHeader className="w-full border">
            <TableRow className="w-full border-ox-gray border-b">
              {tableColums.map((name) => (
                <TableHead className="flex-1 text-center text-zinc-400 font-semibold text-ox-purple">
                  {name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} className="border-ox-gray border-y cursor-pointer" onClick={() => {handleClick(project.url)}}>
                <TableCell className="flex items-center gap-1">
                  <div className="rounded-full overflow-hidden inline-block h-6 w-6 border">
                    <img
                      src={project.avatarUrl}
                      className="w-full h-full object-cover"
                      alt={project.name}
                    ></img>
                  </div>
                  <TableCell className="text-white text-xs text-ox-white font-semibold">
                    {project.name}
                  </TableCell>
                </TableCell>
                <TableCell className="text-white text-xs text-center text-ox-white">
                  {project.totalIssueCount}
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant="secondary"
                    className={getColor(project.primaryLanguage)}
                  >
                    {project.primaryLanguage}
                  </Badge>
                </TableCell>
                <TableCell className="text-white text-xs text-center text-ox-white font-semibold">
                  {project.popularity}
                </TableCell>
                <TableCell className="text-white text-xs text-center text-ox-white font-semibold">
                  {project.stage}
                </TableCell>
                <TableCell className="text-white text-xs text-center text-ox-white font-semibold">
                  {project.competition}
                </TableCell>
                <TableCell className="text-white text-xs text-center text-ox-white font-semibold">
                  {project.activity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
