import express, {Request, Response} from "express"
import { fetchRepositories } from "../services/project.service.ts"

const projectsRouter = express.Router()

projectsRouter.get("/get-projects", async (req: Request, res: Response) => {
    const filters = req.body
    const repos = await fetchRepositories(filters)
    res.json(repos)
})

export default projectsRouter
