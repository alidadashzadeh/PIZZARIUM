import styled from "styled-components";
import LoginHeader from "../ui/LoginHeader";
import LoginComponent from "../features/auth/LoginComponent";
import { motion } from "framer-motion";
import Header from "../ui/Header";

const StyledLogin = styled.div`
  display: grid;
  grid-template-rows: 120px 1fr;
`;
const StyledLoginForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 4rem 6rem;
`;
const Img = styled.img`
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

function Login() {
  return (
    <StyledLogin>
      <Header />
      <StyledLoginForm
        as={motion.div}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100, transition: { duration: 0.1 } }}
      >
        <Container>
          <LoginHeader />
          <LoginComponent />
        </Container>
        <Img src="./hero.jpeg" />
      </StyledLoginForm>
    </StyledLogin>
  );
}

export default Login;
