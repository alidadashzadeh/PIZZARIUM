import styled, { css } from "styled-components";
const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-700);
    background-color: var(--color-primary);

    /* &:hover {
      color: var(--color-grey-100);
      scale: 1.05;
    } */
  `,
  secondary: css`
    color: var(--color-grey-700);
    background: transparent;
    border: 2px solid var(--color-primary);

    /* &:hover {
      background-color: var(--color-primary);
      scale: 1.05;
    } */
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    /* &:hover {
      background-color: var(--color-red-800);
    } */
  `,
};

// export const Button = styled.button`
export const Button = styled.button`
  border: none;
  border-radius: 50px;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s;
  cursor: pointer;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};
