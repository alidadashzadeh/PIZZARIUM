/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useOrder } from "../../context/OrderContext";
import { StyledIconPlus } from "../../ui/StyledIconPlus";
import { StyledIconMinus } from "../../ui/StyledIconMinus";

const StyledDoughItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
  }
  ${(props) =>
    props.selected &&
    css`
      &::after {
        content: "✔";
        display: block;
        background-color: var(--color-yellow-700);
        padding: 0.5rem 1rem;
        border-radius: 55px;
        position: absolute;
        right: 5%;
        top: 5%;
      }
    `}
`;

const Img = styled.img`
  width: 175px;
  aspect-ratio: 1;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
`;

const Price = styled.span`
  color: var(--color-primary);
`;

function DoughItem({ dough }) {
  const { customPizza, selectCustomDough } = useOrder();
  return (
    <StyledDoughItem
      selected={customPizza.dough.name === dough.name}
      onClick={() =>
        selectCustomDough({ name: dough.name, extraPrice: dough.extraPrice })
      }
    >
      <Img src={dough?.picture} />
      <Price>{dough?.extraPrice ? dough?.extraPrice : "Free"}</Price>
      <span>{dough?.name}</span>
      {customPizza.dough.name === dough.name ? (
        <StyledIconMinus />
      ) : (
        <StyledIconPlus />
      )}
    </StyledDoughItem>
  );
}

export default DoughItem;
