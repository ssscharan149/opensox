import express, { Express, Request, Response } from "express";
import apiRouter from "./api_routes";
import cors from "cors";
import prisma from "./prisma";

const App: Express = express();
const PORT = process.env.PORT || 8080;
const CORS_ORIGINS = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",")
  : ["http://localhost:3000", "http://localhost:5000"];

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
