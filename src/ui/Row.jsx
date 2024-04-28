import styled, { css } from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  ${(props) =>
    props.direction === "vertical" &&
    css`
      flex-direction: column;
    `}
`;
