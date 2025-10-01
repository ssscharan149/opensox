import { router, publicProcedure, protectedProcedure } from "../trpc.js";
import { z } from "zod";
import { generateToken } from "../utils/auth.js";
import { TRPCError } from "@trpc/server";

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
        const { email, firstName, authMethod } = input;

        const user = await ctx.db.prisma.user.upsert({
          where: { email },
          update: {
            lastLogin: new Date(),
          },
          create: {
            email,
            firstName: firstName || "Opensox User",
            authMethod: authMethod || "google",
            lastLogin: new Date(),
          },
        });

        const token = generateToken(email);

        return {
          user,
          token,
        };
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
      return {
        user: ctx.user,
      };
    }
  ),
});
