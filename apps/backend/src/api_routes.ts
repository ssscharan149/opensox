import express from "express";
import authRouter from "./routes/auth.route.ts";
import projectsRouter from "./routes/projects.route.ts";

const apiRouter = express.Router()

apiRouter.use("/auth", authRouter)
apiRouter.use("/projects", projectsRouter)

export default apiRouter