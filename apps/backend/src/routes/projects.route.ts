import express from "express"
import { authenticateMe } from "../services/project.service.ts"

const authRouter = express.Router()
authRouter.get("/gh", authenticateMe)

export default authRouter
