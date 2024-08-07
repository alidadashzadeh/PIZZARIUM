import styled, { css } from "styled-components";
const sizes = {
  small: css`
    font-size: 16px;
    padding: 8px 16px;
    font-weight: 500;
    text-align: center;
  `,
  medium: css`
    font-size: 18px;
    padding: 8px 16px;
    font-weight: 500;
  `,
  large: css`
    font-size: 20px;
    padding: 8px 16px;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-text-white);
    background-color: var(--color-primary);

    &:hover {
      scale: 1.05;
    }
  `,
  secondary: css`
    color: var(--color-text-main);
    background: transparent;
    border: 2px solid var(--color-primary);

    &:hover {
      color: var(--color-primary);
      scale: 1.05;
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);
  `,
};

export const Button = styled.button`
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.1s;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};
