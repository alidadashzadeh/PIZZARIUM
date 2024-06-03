import styled from "styled-components";
import SignupHeader from "../ui/SignupHeader";
import SignupComponent from "../features/auth/SignupComponent";

const StyledSignup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 4rem 6rem;
`;

function Signup() {
  return (
    <StyledSignup>
      <SignupHeader />
      <SignupComponent direction="vertical" />
    </StyledSignup>
  );
}

export default Signup;
