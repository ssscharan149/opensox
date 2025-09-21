import { query } from 'express';
import { router, publicProcedure } from '../trpc.js';
import { queryRouter } from './queries.js';
import { z } from 'zod';

const testRouter = router({
    test: publicProcedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return { message: `Hhhhello, ${input.name ?? 'world'}!` };
    }),
})

export const appRouter = router({
  hello: testRouter,
  query: queryRouter
});

export type AppRouter = typeof appRouter;