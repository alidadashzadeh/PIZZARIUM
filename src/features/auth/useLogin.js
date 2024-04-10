import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { mutate: login, isLoading: isLogingIn } = useMutation({
		mutationFn: loginApi,
		onSuccess: (user) => {
			queryClient.setQueryData(["user"], user);
			navigate("/");
		},
		onError: (err) => {
			toast.error("Provided email or password is incorrect");
			console.log(err.message);
		},
	});

	return { login, isLogingIn };
}
