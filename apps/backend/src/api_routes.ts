import express from "express";
import authRouter from "./routes/auth.route.ts";
import projectsRouter from "./routes/projects.route.ts";
import queryRouter from "./routes/query.route.ts";

const apiRouter = express.Router()

apiRouter.use("/auth", authRouter)
apiRouter.use("/projects", projectsRouter)
apiRouter.use("/", queryRouter)

export default apiRouter