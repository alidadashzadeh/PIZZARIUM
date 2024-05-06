import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdatingUser } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success("user was updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });

  return { updateUser, isUpdatingUser };
}
