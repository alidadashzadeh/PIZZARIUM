import { CiLogin } from "react-icons/ci";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledLogoutIcon = styled(CiLogin)`
	font-size: 24px;
	cursor: pointer;
	margin-left: 12px;
`;

function LoginButton() {
	const navigate = useNavigate();

	return <StyledLogoutIcon onClick={() => navigate("/login")} />;
}

export default LoginButton;
