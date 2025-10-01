import { PrismaClient } from "@prisma/client";

export const userService = {
  /**
   * Get total count of users
   */
  async getUserCount(prisma: PrismaClient) {
    const userCount = await prisma.user.count();

    return {
      total_users: userCount,
    };
  },
};
