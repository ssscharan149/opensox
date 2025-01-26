import express from "express";
import { googleAuthService } from "../services/auth.service";
import { validateSession } from "../middleware/auth";

const authRouter = express.Router();
authRouter.post("/google", googleAuthService.handleGoogleAuth);
authRouter.get("/session", validateSession, googleAuthService.getSession);

export default authRouter;
