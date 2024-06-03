/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const StyledIcon = styled.div`
  position: absolute;
  color: grey;
  top: 35px;
  left: 10px;
`;
export default function InputLeftIcon({ children }) {
  return <StyledIcon>{children}</StyledIcon>;
}
