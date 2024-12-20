import express, { Express, Request, Response } from "express";
import apiRouter from "./api_routes.ts";
import cors from "cors";
import prisma from "./prisma.ts";

const App: Express = express();
const PORT = process.env.PORT || 8080;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
const corsOptions = {
  origin: CORS_ORIGIN,
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
