import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";
import { useParams } from "react-router-dom";

export function useOrders() {
  const { userId } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["orders", userId],
    queryFn: () => getOrders(userId),
  });

  return { isLoading, data };
}
