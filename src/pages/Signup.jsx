import styled from "styled-components";
import SignupForm from "../features/auth/SignupForm";
import SignupHeader from "../ui/SignupHeader";

const StyledSignup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
`;

function Signup() {
	return (
		<StyledSignup>
			<SignupHeader />
			<SignupForm />
		</StyledSignup>
	);
}

export default Signup;
