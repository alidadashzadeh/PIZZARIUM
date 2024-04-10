import styled from "styled-components";
import { useUser } from "../auth/useUser";
import UserInfo from "../../ui/UserInfo";
import LogoutButton from "../../ui/LogoutButton";
import LoginButton from "../../ui/LoginButton";

const StyledSidebarFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.5rem;
`;

function SidebarFooter() {
	const { user, isLoading } = useUser();

	if (isLoading) return <span>Please wait while Loading ... </span>;

	return (
		<StyledSidebarFooter>
			<UserInfo />
			{user ? <LogoutButton /> : <LoginButton />}
		</StyledSidebarFooter>
	);
}

export default SidebarFooter;
