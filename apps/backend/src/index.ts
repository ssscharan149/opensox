import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import apiRouter from "./api_routes";
import cors from "cors";
import prisma from "./prisma";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { CorsOptions as CorsOptionsType } from "cors";
import ipBlocker from "./middleware/ipBlock";

dotenv.config();

const App: Express = express();
const PORT = process.env.PORT || 8080;
const CORS_ORIGINS = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",")
  : ["http://localhost:3000", "http://localhost:5000"];

// Security headers
App.use(helmet());
App.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  })
);

// Apply IP blocking middleware first
App.use(ipBlocker.middleware);

// Different rate limits for different endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per window for auth
  message: "Too many login attempts, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // limit each IP to 30 requests per window for API
  message: "Too many requests from this IP",
  standardHeaders: true,
  legacyHeaders: false,
});

// Request size limits
App.use(express.json({ limit: "10kb" }));
App.use(express.urlencoded({ limit: "10kb", extended: true }));

const corsOptions: CorsOptionsType = {
  origin: (origin, callback) => {
    if (!origin || CORS_ORIGINS.includes(origin)) {
      callback(null, origin);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 86400, // 24 hours
};

App.use(cors(corsOptions));

// Blocked IPs endpoint (now public) - Moved before /api route
App.get("/admin/blocked-ips", (req: Request, res: Response) => {
  const blockedIPs = ipBlocker.getBlockedIPs();
  res.json({
    blockedIPs: blockedIPs.map(ip => ({
      ...ip,
      blockedUntil: new Date(ip.blockedUntil).toISOString()
    }))
  });
});

// Test endpoint
App.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", message: "Test endpoint is working" });
}, apiLimiter);

// Apply rate limiting to specific routes
App.use("/api/auth", authLimiter);
App.use("/api", apiLimiter);

App.use("/api", apiRouter);

// Global error handling
App.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

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
