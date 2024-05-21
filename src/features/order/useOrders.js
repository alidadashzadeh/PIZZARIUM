import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";

export function useOrders() {
  const { isLoading, data } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return { isLoading, data };
}
