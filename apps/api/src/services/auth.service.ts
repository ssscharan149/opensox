import { generateToken } from "../utils/auth.js";
import { PrismaClient } from "@prisma/client";

interface GoogleAuthInput {
  email: string;
  firstName?: string | undefined;
  authMethod?: string | undefined;
}

export const authService = {
  /**
   * Handle Google authentication
   * Creates or updates user and generates JWT token
   */
  async handleGoogleAuth(prisma: PrismaClient, input: GoogleAuthInput) {
    const { email, firstName, authMethod } = input;

    const user = await prisma.user.upsert({
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
  },

  /**
   * Get user session information
   */
  getSession(user: any) {
    return {
      user,
    };
  },
};
