import { router, publicProcedure, protectedProcedure } from "../trpc.js";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { authService } from "../services/auth.service.js";

const googleAuthSchema = z.object({
  email: z.string().email("Invalid email format"),
  firstName: z.string().optional(),
  authMethod: z.string().optional(),
});

export const authRouter = router({
  googleAuth: publicProcedure
    .input(googleAuthSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const authInput = {
          email: input.email,
          firstName: input.firstName,
          authMethod: input.authMethod,
        };
        return await authService.handleGoogleAuth(ctx.db.prisma, authInput);
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Google auth error:", error);
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Authentication failed",
        });
      }
    }),
  getSession: protectedProcedure.query(
    async ({ ctx }: { ctx: { user: any } }) => {
      return authService.getSession(ctx.user);
    }
  ),
});
