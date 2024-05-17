import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import SignupForm from "./SignupForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  gap: 0.5rem;

  ${(props) =>
    props.direction === "vertical" &&
    css`
      flex-direction: column;
    `}
`;
const Terms = styled.div`
  font-size: 12px;
`;

const TermsButton = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const StyledMessage = styled.div`
  text-align: center;
  font-size: 14px;
  padding-top: 1rem;
  padding-right: 1rem;
`;

const StyledStrong = styled.span`
  cursor: pointer;
  color: var(--color-yellow-700);
  text-decoration: underline;
  font-size: 14px;
`;
export default function SignupComponent() {
  const navigate = useNavigate();

  return (
    <>
      <SignupForm />
      <Container direction="vertical">
        <Terms>By clicking Register, You agree to accept PIZZARIUM's</Terms>
        <TermsButton
          variation="secondary"
          size="tel"
          initial={"Enter your Fullname"}
        >
          Terms and Conditions
        </TermsButton>
      </Container>
      <StyledMessage onClick={() => navigate("/login")}>
        Already has an Account? <StyledStrong>Login</StyledStrong>
      </StyledMessage>
    </>
  );
}