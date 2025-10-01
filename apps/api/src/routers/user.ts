import { router, publicProcedure } from "../trpc.js";
import { userService } from "../services/user.service.js";

export const userRouter = router({
  // get the total count of users
  count: publicProcedure.query(async ({ ctx }) => {
    return await userService.getUserCount(ctx.db.prisma);
  }),
});
