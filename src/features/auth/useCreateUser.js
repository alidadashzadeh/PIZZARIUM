import { useMutation } from "@tanstack/react-query";
import { createUser as createUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useCreateUser() {
	const { mutate: createUser, isLoading: isCreatingUser } = useMutation({
		mutationFn: createUserApi,
		onSuccess: () => {
			toast.success("user was successfully created");
		},
	});

	return { createUser, isCreatingUser };
}
