import Express, { Request, Response } from "express";
import prisma from "../prisma";

const queryRouter = Express.Router();

queryRouter.get("/total_queries", async (req: Request, res: Response) => {
  try {
    const queryCount = await prisma.queryCount.findUnique({
      where: { id: 1 },
    });
    if (queryCount) {
      if (queryCount) {
        if (process.env.NODE_ENV === "development") {
          console.log("Total Queries:", queryCount.total_queries);
        }
        res.status(200).json({ totalQueries: queryCount.total_queries });
      } else {
        if (process.env.NODE_ENV === "development") {
          console.log("Record not found");
        }
      }
    }
  } catch (error) {
    console.log("Error fetching total queries:", error);
  }
});

export default queryRouter;
