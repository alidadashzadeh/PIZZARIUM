import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/apiOrders";

export function useSingleOrder() {
  const { orderId } = useParams();
  console.log(orderId);
  const { isLoading, data } = useQuery({
    queryKey: ["currentOrder", orderId],
    queryFn: () => getOrder(orderId),
  });

  return { isLoading, data };
}
