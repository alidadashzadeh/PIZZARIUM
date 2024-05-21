/* eslint-disable react/prop-types */

import styled from "styled-components";
import { Button } from "../../ui/Button";
import { useOrder } from "../../context/OrderContext";
import toast from "react-hot-toast";
import Count from "../../ui/Count";
import { useState } from "react";
import SizeSelect from "../../ui/SizeSelect";

const StyledSignaturePizzaItem = styled.div`
  display: grid;
  grid-template-columns: 250px 2fr 1fr;
  gap: 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 500px;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 250px;
  aspect-ratio: 1;
`;

const Img = styled.img``;

const Details = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const FlexItem = styled.div`
  display: flex;
  gap: 16px;

  & span {
    font-size: 16px;
    font-weight: 500;
  }
`;
const FlexItemVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-main);
`;

const Price = styled.div`
  color: var(--color-text-main);
  font-size: 20px;
  font-weight: 700;
`;

const ToppingsList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const ToppingItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  border-radius: 50px;
  gap: 4px;
  background-color: ${(props) => props.color};
`;

const ToppingTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #1c1c1c;
`;

const Devider = styled.span`
  width: 2px;
  height: 100%;
  background-color: var(--color-grey-200);
`;

const ToppingHeader = styled.span`
  font-size: 16px;
  color: var(--color-text-grey);
`;

function SignaturePizzaItem({ pizza }) {
  const { addToOrder } = useOrder();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("small");

  const { name, details, picture, price, toppings, weight, calorie } = pizza;

  function handleQuickAdd() {
    addToOrder({
      title: pizza.name,
      quantity,
      isSignaturePizza: true,
      isCustomPizza: false,
      selectedSize: size,
      toppings,
      id: Date.now(),
      picture: pizza.picture,
      price: pizza.price,
    });

    toast.success(`${pizza.name} was added successfully`);
  }
  return (
    <StyledSignaturePizzaItem>
      <ImgContainer>
        <Img src={picture} />
      </ImgContainer>
      <Details>
        <Title>{name}</Title>
        <FlexItem>
          <span>{calorie[size]}</span>
          <Devider />
          <span>Weight:{weight[size]}</span>
          <Devider />
          <span>Prepared in 15 Min</span>
        </FlexItem>
        <ToppingHeader>TOPPINGS</ToppingHeader>
        <ToppingsList>
          {toppings.map((topping) => (
            <ToppingItem key={topping.color} color={topping.color}>
              <div>{topping.image}</div>
              <ToppingTitle>{topping.title}</ToppingTitle>
            </ToppingItem>
          ))}
        </ToppingsList>
        <Description>{details}</Description>
        <FlexItem>
          <Count
            quantity={quantity}
            onPlusClick={() => setQuantity((s) => s + 1)}
            onMinusClick={() => setQuantity((s) => (s > 1 ? s - 1 : s))}
          />
          <SizeSelect item={pizza} size={size} setSize={setSize} />
        </FlexItem>
      </Details>
      <FlexItemVertical>
        <Price> $ {price[size]}</Price>
        <Button onClick={handleQuickAdd}>Add to Cart</Button>
      </FlexItemVertical>
    </StyledSignaturePizzaItem>
  );
}

export default SignaturePizzaItem;
