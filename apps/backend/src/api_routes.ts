import express from "express";
import authRouter from "./routes/projects.route.ts";

const apiRouter = express.Router()

apiRouter.use("/auth", authRouter)

export default apiRouter