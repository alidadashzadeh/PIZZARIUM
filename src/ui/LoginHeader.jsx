import styled from "styled-components";
import { UserIcon } from "./UserIcon";
import Logo from "./Logo";

const H1 = styled.h1`
  color: var(--color-primary);
`;

function LoginHeader() {
  return (
    <>
      <UserIcon size={84} />
      <H1>PIZZARIUM</H1>
      {/* <Logo /> */}
      <span>Login to your account</span>
    </>
  );
}

export default LoginHeader;
