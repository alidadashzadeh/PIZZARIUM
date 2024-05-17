import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid var(--color-grey-700);
  outline: none;
  border-radius: var(--border-radius-small);
  height: 38px;
  padding-left: 2rem;
  padding-right: 128px;

  &:focus {
    border: 1px solid var(--color-primary);
  }

  &::placeholder {
    color: var(--color-grey-300);
  }
`;
