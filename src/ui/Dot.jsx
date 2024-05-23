import styled from "styled-components";

export const Dot = styled.div`
  position: absolute;
  top: ${(props) => props.vertical && "45%"};
  left: ${(props) => (props.vertical ? "0" : "50%")};
  bottom: ${(props) => !props.vertical && "-10px"};
  width: 6px;
  aspect-ratio: 1;
  background-color: var(--color-primary);
  border-radius: 5px;
`;
