import express, { Express, Request, Response } from "express";
import apiRouter from "./api_routes";
import cors from "cors";
import prisma from "./prisma";
import rateLimit from "express-rate-limit";

const App: Express = express();
const PORT = process.env.PORT || 8080;
const CORS_ORIGINS = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",")
  : ["http://localhost:3000", "http://localhost:5000"];

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // limit each IP to 100 requests per window
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply rate limiting to all requests
App.use(limiter);

interface CorsOptions {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, origin?: string) => void
  ) => void;
}

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || CORS_ORIGINS.includes(origin)) {
      callback(null, origin);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

App.use(cors(corsOptions));
App.use(express.json());

App.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

App.use("/api", apiRouter);

App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

async function connectToDatabase() {
  try {
    await prisma.$connect();
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}

connectToDatabase();

export { App };
