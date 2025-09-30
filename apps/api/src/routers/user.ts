import { router, publicProcedure } from '../trpc.js';

export const userRouter = router({
    // get the total count of users
    count: publicProcedure
    .query(async ({ ctx }) => {
        const userCount = await ctx.db.prisma.user.count();
        return {
            total_users: userCount
        };
    })
})