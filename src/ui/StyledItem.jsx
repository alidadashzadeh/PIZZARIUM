import styled, { css } from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 4px;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
  }
  ${(props) =>
    props.selected &&
    css`
      &::after {
        content: "✔";
        color: var(--color-primary);
        display: block;
        padding: 0.5rem 1rem;
        border-radius: 55px;
        position: absolute;
        right: 0;
        top: 5%;
        font-size: 28px;
      }
    `}
`;
