import styled from "styled-components";
import LoginForm from "../features/auth/LoginForm";
import LoginHeader from "../ui/LoginHeader";

const StyledLoginForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
`;

function Login() {
	return (
		<StyledLoginForm>
			<LoginHeader />
			<LoginForm />
		</StyledLoginForm>
	);
}

export default Login;
