/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styled, { css } from "styled-components";
import Count from "../../ui/Count";
import { useState } from "react";
import { useOrder } from "../../context/OrderContext";

const StyledDrinkItem = styled.li`
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
  transform: rotate(20deg);
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
`;

const Price = styled.span`
  color: var(--color-primary);
`;
const DrinkDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.2rem 0;
`;

const Button = styled.button`
  border: 1px solid var(--color-yellow-700);
  border-radius: 5px;
  padding: 0 2rem;
  background-color: transparent;

  &:hover {
    background-color: var(--color-yellow-700);
  }
`;

function DrinkItem({ drink }) {
  const [quantity, setQuantity] = useState(1);
  const { addOrderDrink } = useOrder();

  function handePlusQuantity() {
    setQuantity((s) => s + 1);
  }

  function handeMinusQuantity() {
    setQuantity((s) => (s > 1 ? s - 1 : s));
  }

  function handleAddDrink() {
    const newDrink = {
      title: drink.name,
      quantity,
      picture: drink.picture,
      calorie: drink.calorie,
      price: (quantity * drink.price).toFixed(2),
      isDrink: true,
    };

    addOrderDrink(newDrink);
  }
  return (
    <StyledDrinkItem>
      <Img src={drink.picture} />
      <DrinkDetails>
        <span>{drink.name}</span>
        <span>Calorie: {drink.calorie}</span>
        <span>
          Size: {drink.size}
          {drink.unit}
        </span>
        <Price>$ {drink.price}</Price>
        <Count
          onPlusClick={handePlusQuantity}
          onMinusClick={handeMinusQuantity}
          quantity={quantity}
        />
        <Button onClick={handleAddDrink}>Add</Button>
      </DrinkDetails>
    </StyledDrinkItem>
  );
}

export default DrinkItem;
