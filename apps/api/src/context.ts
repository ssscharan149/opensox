import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import prisma from "./prisma.js";

export async function createContext({
  req,
  res,
}: CreateExpressContextOptions): Promise<{
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  db: typeof prisma;
  ip?: string;
}> {
  const ip = req.ip || req.socket.remoteAddress || "unknown";

  return {
    req,
    res,
    db: prisma,
    ip,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
