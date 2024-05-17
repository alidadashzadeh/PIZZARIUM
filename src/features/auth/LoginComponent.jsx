import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const StyledMessage = styled.div`
  text-align: center;
  font-size: 14px;
  padding-top: 1rem;
  padding-right: 1rem;
`;

const StyledSpan = styled.span`
  font-size: 14px;
`;

const StyledStrong = styled.span`
  cursor: pointer;
  color: var(--color-yellow-700);
  text-decoration: underline;
  font-size: 14px;
`;

export default function LoginComponent() {
  const navigate = useNavigate();

  return (
    <>
      <LoginForm />
      <StyledSpan>Forgot your Password?</StyledSpan>
      <StyledMessage>
        Are you new?{" "}
        <StyledStrong onClick={() => navigate("/signup")}>
          Create An Account
        </StyledStrong>
      </StyledMessage>
    </>
  );
}
