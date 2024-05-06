import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewAddress as addNewAddressApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useAddNewAddress() {
  const queryClient = useQueryClient();
  const { mutate: addNewAddress, isLoading: isAddingNewAddress } = useMutation({
    mutationFn: addNewAddressApi,
    onSuccess: () => {
      toast.success("New Address Was Added Successfully");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });

  return { addNewAddress, isAddingNewAddress };
}
