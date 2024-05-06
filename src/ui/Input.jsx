import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  outline: none;
  border-radius: 5px;
  padding: 6px 1rem;
  padding-left: 2rem;

  box-shadow: 0 1px 5px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075);

  &:focus {
    border: 1px solid var(--color-primary);
  }

  &::placeholder {
    color: var(--color-grey-300);
  }
`;
