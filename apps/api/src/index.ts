import express from "express";
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './trpc.js';

const app = express();

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  })
);

app.listen(4000, () => {
  console.log('tRPC server running on http://localhost:4000');
});
