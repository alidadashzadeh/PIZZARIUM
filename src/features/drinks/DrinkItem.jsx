/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import styled from "styled-components";
import Count from "../../ui/Count";
import { useState } from "react";
import { useOrder } from "../../context/OrderContext";
import { StyledItem } from "../../ui/StyledItem";
import { Button } from "../../ui/Button";

const Img = styled.img`
  width: 175px;
  aspect-ratio: 1;
  transform: rotate(20deg);
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
`;

const Price = styled.span`
  color: var(--color-primary);
`;
const FlexItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-text-grey);
`;

const Title = styled.div`
  font-size: 18px;
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
    toast.success(`${newDrink.title} was added successfully`);
  }
  return (
    <StyledItem>
      <Img src={drink.picture} />
      <Price>$ {drink.price}</Price>
      <Title>{drink.name}</Title>
      <FlexItem>
        <span>Calorie: {drink.calorie}</span>
        <span>
          Size: {drink.size}
          {drink.unit}
        </span>
      </FlexItem>
      <Count
        onPlusClick={handePlusQuantity}
        onMinusClick={handeMinusQuantity}
        quantity={quantity}
      />
      <Button size="small" onClick={handleAddDrink}>
        Add to Cart
      </Button>
    </StyledItem>
  );
}

export default DrinkItem;
