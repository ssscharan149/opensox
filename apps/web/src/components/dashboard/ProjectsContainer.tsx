"use client"

import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface Project {
    id: number;
    name: string;
    description: string;
    url: string;
    avatarUrl: string;
    totalIssueCount: number;
    primaryLanguage: string;
}

const projects: Project[] = [
    {
        "id": 1,
        "name": "public-apis",
        "description": "A collective list of free APIs",
        "url": "https://github.com/public-apis/public-apis",
        "avatarUrl": "https://avatars.githubusercontent.com/u/51121562?v=4",
        "totalIssueCount": 33,
        "primaryLanguage": "Python"
    },
    {
        "id": 2,
        "name": "public-apis",
        "description": "A collective list of free APIs",
        "url": "https://github.com/public-apis/public-apis",
        "avatarUrl": "https://avatars.githubusercontent.com/u/51121562?v=4",
        "totalIssueCount": 33,
        "primaryLanguage": "go"
    },
    {
        "id": 3,
        "name": "public-apis",
        "description": "A collective list of free APIs",
        "url": "https://github.com/public-apis/public-apis",
        "avatarUrl": "https://avatars.githubusercontent.com/u/51121562?v=4",
        "totalIssueCount": 33,
        "primaryLanguage": "typescript"
    },
    {
        "id": 4,
        "name": "public-apis",
        "description": "A collective list of free APIs",
        "url": "https://github.com/public-apis/public-apis",
        "avatarUrl": "https://avatars.githubusercontent.com/u/51121562?v=4",
        "totalIssueCount": 33,
        "primaryLanguage": "rust"
    },
    {
        "id": 5,
        "name": "public-apis",
        "description": "A collective list of free APIs",
        "url": "https://github.com/public-apis/public-apis",
        "avatarUrl": "https://avatars.githubusercontent.com/u/130738209?v=4",
        "totalIssueCount": 33,
        "primaryLanguage": "javascript"
    }
]

interface languageColorsTypes {
    [key: string]: string;
    javascript: string;
    typescript: string;
    python: string;
    go: string;
    rust: string;
    java: string;
    'c#': string;
    'c++': string;
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
    javascript: 'bg-yellow-500/15 text-yellow-500',
    typescript: 'bg-blue-500/15 text-blue-500',
    python: 'bg-emerald-500/15 text-emerald-500',
    go: 'bg-cyan-500/15 text-cyan-500',
    rust: 'bg-orange-500/15 text-orange-500',
    java: 'bg-red-500/15 text-red-500',
    'c#': 'bg-purple-500/15 text-purple-500',
    'c++': 'bg-indigo-500/15 text-indigo-500',
    c: 'bg-gray-500/15 text-gray-500',
    php: 'bg-violet-500/15 text-violet-500',
    swift: 'bg-pink-500/15 text-pink-500',
    kotlin: 'bg-sky-500/15 text-sky-500',
    ruby: 'bg-rose-500/15 text-rose-500',
    scala: 'bg-teal-500/15 text-teal-500',
    html: 'bg-orange-400/15 text-orange-400',
    elixir: 'bg-purple-600/15 text-purple-600'
};

const getColor = (color: string): string => {
    const lowerColorCase = color.toLowerCase();
    const _color = languageColors[lowerColorCase] || 'bg-gray-200 text-gray-800';
    return _color
}

export default function ProjectsContainer() {
    return (
        <div className="w-full rounded-lg p-4">
            <div className="flex items-center justify-between pb-1">
                <h2 className="text-md font-medium text-white">Projects for you</h2>
            </div>
            <div className="rounded-lg border bg-theme-cards border-theme-borders border">
                <Table>
                    <TableHeader>
                        <TableRow className="border-theme-borders border-b hover:bg-zinc-900">
                            <TableHead className="flex text-zinc-400 justify-center items-center">Project</TableHead>
                            <TableHead className="text-zinc-400 text-center">Issues</TableHead>
                            <TableHead className="flex text-zinc-400 justify-center items-center">Language</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project) => (
                            <TableRow
                                key={project.id}
                                className="border-theme-borders border-y hover:bg-zinc-900"
                            >
                                <TableCell className="flex items-center gap-1">
                                    <div className="rounded-full overflow-hidden inline-block h-6 w-6 border">
                                        <img
                                            src={project.avatarUrl}
                                            className="w-full h-full object-cover"
                                            alt={project.name}>
                                        </img>
                                    </div>
                                    <TableCell className="text-white text-xs">
                                        {project.name}
                                    </TableCell>
                                </TableCell>
                                <TableCell className="text-white text-xs text-center">{project.totalIssueCount}</TableCell>
                                <TableCell className="text-center">
                                    <Badge
                                        variant="secondary"
                                        className={getColor(project.primaryLanguage)}
                                    >
                                        {project.primaryLanguage}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}