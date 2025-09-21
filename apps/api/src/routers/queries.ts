import { router, publicProcedure } from '../trpc.js';
import { z } from 'zod';

export const queryRouter = router({
    // get the total count of fetched queries
    count: publicProcedure
    .query(async ({ ctx }) => {
        const queryCount = await ctx.db.prisma.queryCount.findUnique({
            where: { id: 1 }
        });
        return {
            total_queries: queryCount?.total_queries.toString() || "0"
        };
    })
})