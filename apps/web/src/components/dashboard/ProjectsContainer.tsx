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

const projects = [
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
        "primaryLanguage": "Python"
    },
    {
        "id": 3,
        "name": "public-apis",
        "description": "A collective list of free APIs",
        "url": "https://github.com/public-apis/public-apis",
        "avatarUrl": "https://avatars.githubusercontent.com/u/51121562?v=4",
        "totalIssueCount": 33,
        "primaryLanguage": "Python"
    },
    {
        "id": 4,
        "name": "public-apis",
        "description": "A collective list of free APIs",
        "url": "https://github.com/public-apis/public-apis",
        "avatarUrl": "https://avatars.githubusercontent.com/u/51121562?v=4",
        "totalIssueCount": 33,
        "primaryLanguage": "Python"
    },
    {
        "id": 5,
        "name": "public-apis",
        "description": "A collective list of free APIs",
        "url": "https://github.com/public-apis/public-apis",
        "avatarUrl": "https://avatars.githubusercontent.com/u/130738209?v=4",
        "totalIssueCount": 33,
        "primaryLanguage": "Python"
    }
]

export default function ProjectsContainer() {
    return (
        <div className="w-full rounded-lg bg-zinc-950 p-4">
            <div className="flex items-center justify-between pb-1">
                <h2 className="text-md font-medium text-white">Projects for you</h2>
            </div>
            <div className="rounded-lg border border-zinc-800">
                <Table>
                    <TableHeader>
                        <TableRow className="border-zinc-800 hover:bg-zinc-900">
                            <TableHead className="flex text-zinc-400 justify-center items-center">Project</TableHead>
                            <TableHead className="text-zinc-400 text-center">Issues</TableHead>
                            <TableHead className="flex text-zinc-400 justify-center items-center">Language</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project) => (
                            <TableRow
                                key={project.id}
                                className="border-zinc-800 hover:bg-zinc-900"
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
                                        className="bg-emerald-500/15 text-emerald-500"
                                    >
                                        Python
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