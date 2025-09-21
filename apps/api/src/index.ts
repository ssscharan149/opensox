import express from "express";
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '../src/routers/_app.js';
import { createContext } from "./context.js";
import prismaModule from "./prisma.js";

const app = express();

prismaModule.connectDB();

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(4000, () => {
  console.log('tRPC server running on http://localhost:4000');
});
