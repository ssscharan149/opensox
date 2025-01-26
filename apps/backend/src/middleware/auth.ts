import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/auth";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const validateSession = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      res.status(401).json({ error: "No token provided" });
      return;
    }

    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
    return;
  }
};
