import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  position: relative;
  padding-left: 1rem;
  height: 38px;
  color: var(--color-text-main);
  background-color: var(--color-grey-50);

  &::placeholder {
    color: var(--color-grey-300);
  }

  &:focus {
    border-color: var(--color-primary);
  }
`;
