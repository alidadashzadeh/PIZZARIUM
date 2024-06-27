import { CiUser } from "react-icons/ci";
import styled, { css } from "styled-components";

export const UserIcon = styled(CiUser)`
  font-size: ${(props) => props.size && props.size}px;

  ${(props) =>
    css`
      font-size: props.size;
    `}
`;
