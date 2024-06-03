import styled from "styled-components";
import LoginHeader from "../ui/LoginHeader";
import LoginComponent from "../features/auth/LoginComponent";

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 4rem 6rem;
`;

function Login() {
  return (
    <StyledLoginForm>
      <LoginHeader />
      <LoginComponent />
    </StyledLoginForm>
  );
}

export default Login;
