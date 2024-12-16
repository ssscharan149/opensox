import { CONFIG } from "./config";

export const fetchTotalQueries = async (): Promise<number> => {
  let totalCount = 0;
  try {
    const response = await fetch(`${CONFIG.BASE_URL}/api/total_queries`, {
      method: "GET",
    });
    const data = await response.json();
    totalCount = data.totalQueries;
  } catch (error) {
    console.error("Error fetching the API:", error);
  }
  return totalCount ? totalCount : 713;
};
