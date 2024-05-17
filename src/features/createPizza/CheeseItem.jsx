/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useOrder } from "../../context/OrderContext";
import { StyledIconPlus } from "../../ui/StyledIconPlus";
import { StyledIconMinus } from "../../ui/StyledIconMinus";

const StyledCheeseItem = styled.div`
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
function CheeseItem({ cheese }) {
  const { customPizza, selectCustomCheese } = useOrder();
  return (
    <StyledCheeseItem
      selected={customPizza.cheese.name === cheese.name}
      onClick={() =>
        selectCustomCheese({
          name: cheese.name,
          extraPrice: cheese.extraPrice,
        })
      }
    >
      <Img src={cheese.picture} />
      <Price>{cheese?.extraPrice ? cheese?.extraPrice : "Free"}</Price>
      <span>{cheese?.name}</span>
      {customPizza.cheese.name === cheese.name ? (
        <StyledIconMinus />
      ) : (
        <StyledIconPlus />
      )}
    </StyledCheeseItem>
  );
}

export default CheeseItem;
