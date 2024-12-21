import express, { Request, Response } from "express";
import { fetchRepositories } from "../services/project.service";
import { increaseQueriesCount } from "../utils/queryCount";

const projectsRouter = express.Router();

projectsRouter.post("/get_projects", async (req: Request, res: Response) => {
  increaseQueriesCount()
  const filters = req.body;
  const repos = await fetchRepositories(filters);
  res.json(repos);
});

export default projectsRouter;
