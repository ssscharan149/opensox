import prisma from "../prisma";

export const increaseQueriesCount = async (): Promise<void> => {
  try {
    const updatedCount = await prisma.queryCount.update({
      where: { id: 1 },
      data: {
        total_queries: {
          increment: 1,
        },
      },
    });
    console.log("Updated Count:", updatedCount);
  } catch (error) {
    console.error("Error updating query count:", error);
  } finally {
    await prisma.$disconnect();
  }
};
