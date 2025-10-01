import { PrismaClient } from "@prisma/client";

export const queryService = {
  /**
   * Get total count of queries
   */
  async getQueryCount(prisma: PrismaClient) {
    const queryCount = await prisma.queryCount.findUnique({
      where: { id: 1 },
    });

    return {
      total_queries: queryCount?.total_queries.toString() || "0",
    };
  },
};
