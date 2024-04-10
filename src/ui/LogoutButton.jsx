import { CiLogout } from "react-icons/ci";
import styled from "styled-components";
import { useLogout } from "../features/auth/useLogout";

const StyledLogoutIcon = styled(CiLogout)`
	font-size: 32px;
	cursor: pointer;
	border-radius: 50%;
	background-color: var(--color-yellow-300);
	padding: 0.5rem;

	&:hover {
		background-color: var(--color-yellow-700);
	}
`;

function LogoutButton() {
	const { logout, isLogingOut } = useLogout();
	return <StyledLogoutIcon onClick={logout} />;
}

export default LogoutButton;
