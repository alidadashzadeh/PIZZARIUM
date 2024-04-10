import { useMutation } from "@tanstack/react-query";
import { changeUserPassword as changeUserPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useChangePassword() {
	const { mutate: changePassword, isLoading: isChangingPassword } = useMutation(
		{
			mutationFn: changeUserPasswordApi,
			onSuccess: () => {
				toast.success("password changed successfully");
			},
		}
	);

	return { changePassword, isChangingPassword };
}
