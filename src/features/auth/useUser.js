import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
	const { data: user, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: getCurrentUser,
	});
	const currentUserData = user?.user?.user_metadata;

	return { user, isLoading, currentUserData };
}
