import { router, publicProcedure } from "../trpc.js";
import { queryService } from "../services/query.service.js";

export const queryRouter = router({
  // get the total count of fetched queries
  count: publicProcedure.query(async ({ ctx }) => {
    return await queryService.getQueryCount(ctx.db.prisma);
  }),
});
