import styled from "styled-components";
import { UserIcon } from "./UserIcon";

const H1 = styled.h1`
  color: var(--color-yellow-700);
`;

function LoginHeader() {
  return (
    <>
      <UserIcon size={84} />
      <H1>PIZZARIUM</H1>
      <span>Login to your account</span>
    </>
  );
}

export default LoginHeader;
