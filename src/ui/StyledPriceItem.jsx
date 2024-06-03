/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledPrice = styled.span`
  color: var(--color-primary);
`;

export default function StyledPriceItem({ extraPrice }) {
  return (
    <StyledPrice>{extraPrice !== 0 ? `$ ${extraPrice}` : "Free"}</StyledPrice>
  );
}
