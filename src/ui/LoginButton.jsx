import { CiLogin } from "react-icons/ci";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledLogoutIcon = styled(CiLogin)`
	font-size: 32px;
	cursor: pointer;
	border-radius: 50%;
	background-color: var(--color-yellow-300);
	padding: 0.5rem;

	&:hover {
		background-color: var(--color-yellow-700);
	}
`;

function LoginButton() {
	const navigate = useNavigate();

	return <StyledLogoutIcon onClick={() => navigate("/login")} />;
}

export default LoginButton;
