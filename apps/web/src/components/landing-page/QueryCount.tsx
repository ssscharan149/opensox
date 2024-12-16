import { fetchTotalQueries } from "@/utils/queries";
import { NumberTickerDisplay } from "../ui/NumberTickerDisplay";

export const QueryCount = async () => {
  const count = await fetchTotalQueries();
  return <NumberTickerDisplay count={count}></NumberTickerDisplay>;
};
