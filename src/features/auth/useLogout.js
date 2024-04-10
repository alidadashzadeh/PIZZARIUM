import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogout() {
	const queryClient = useQueryClient();
	const { mutate: logout, isLoading: isLogingOut } = useMutation({
		mutationFn: logoutApi,
		onSuccess: () => {
			queryClient.invalidateQueries();
			toast.success("user Logged out");
		},
	});

	return { logout, isLogingOut };
}
