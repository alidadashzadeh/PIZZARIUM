import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  position: relative;
  padding-left: 1rem;
  height: 38px;
  color: var(--color-text-main);

  &::placeholder {
    color: var(--color-text-grey);
  }

  &:focus {
    border-color: var(--color-primary);
  }
`;
