import { Response, Request } from "express";
import prisma from "../prisma";

export const googleAuthService = {
  async handleGoogleAuth(req: Request, res: Response): Promise<void> {
    try {
      const { email, firstName, authMethod } = req.body;

      if (!email) {
        res.status(400).json({ error: "Email is required" });
        return;
      }

      const user = await prisma.user.upsert({
        where: { email },
        update: {
          lastLogin: new Date(),
        },
        create: {
          email,
          firstName,
          authMethod,
          lastLogin: new Date(),
        },
      });
      res.status(200).json({ user });
      return;
    } catch (error) {
      if (process.env.NODE_ENV) {
        console.error("Google auth error:", error);
      }
      res.status(500).json({ error: "Authentication failed" });
      return;
    }
  },

  async getSession(req: Request, res: Response): Promise<void> {
    res.json({ user: req.user });
    return;
  },
};
