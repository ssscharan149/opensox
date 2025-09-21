import type { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import prisma from './prisma.js';

export async function createContext({ req, res }: CreateExpressContextOptions): Promise<{
  req: CreateExpressContextOptions['req'];
  res: CreateExpressContextOptions['res'];
  db: typeof prisma;
}> {
  return {
    req,
    res,
    db: prisma,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
