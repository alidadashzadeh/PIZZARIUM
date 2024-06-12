import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "../../services/apiOrders";
import toast from "react-hot-toast";

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const { mutate: createOrder, isLoading } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: () => {
      toast.success("order was submitted successfully");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  return { createOrder, isLoading };
}
