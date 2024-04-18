import { CiLogout } from "react-icons/ci";
import styled from "styled-components";
import { useLogout } from "../features/auth/useLogout";

const StyledLogoutIcon = styled(CiLogout)`
	font-size: 24px;
	cursor: pointer;
	margin-left: 12px;
`;

function LogoutButton() {
	const { logout } = useLogout();
	return <StyledLogoutIcon onClick={logout} />;
}

export default LogoutButton;
