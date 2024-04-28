import styled from "styled-components";

export const Input = styled.input`
  border: 2px solid var(--color-secondary);
  outline: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  padding-left: 4rem;

  &:focus {
    border: 2px solid var(--color-primary);
  }
`;
