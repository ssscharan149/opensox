import express, { Request, Response } from "express";
import { fetchRepositories } from "../services/project.service.ts";
import { increaseQueriesCount } from "src/utils/queryCount.ts";

const projectsRouter = express.Router();

projectsRouter.post("/get_projects", async (req: Request, res: Response) => {
  increaseQueriesCount()
  const filters = req.body;
  const repos = await fetchRepositories(filters);
  res.json(repos);
});

export default projectsRouter;
