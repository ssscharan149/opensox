import express from "express";
import authRouter from "./routes/auth.route";
import projectsRouter from "./routes/projects.route";
import queryRouter from "./routes/query.route";

const apiRouter = express.Router()

apiRouter.use("/auth", authRouter)
apiRouter.use("/projects", projectsRouter)
apiRouter.use("/", queryRouter)

export default apiRouter