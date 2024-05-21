/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button } from "../../ui/Button";
import { useOrder } from "../../context/OrderContext";
import Count from "../../ui/Count";
import SizeSelect from "../../ui/SizeSelect";
import { FaTrash } from "react-icons/fa6";
import RemoveButton from "../user/RemoveButton";

const StyledSignaturePizzaItem = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 250px 2fr 96px;
  gap: 2rem;
  border: 2px solid var(--color-secondary);
  border-radius: 500px;
  padding-right: 4rem;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 100%;
`;

const Img = styled.img`
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
`;

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
  gap: 4px;
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

const Price = styled.div`
  color: var(--color-text-main);
  font-size: 20px;
  font-weight: 700;
`;

const ToppingsList = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

const ToppingTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ToppingHeader = styled.span`
  font-size: 16px;
  color: var(--color-text-grey);
`;

const ButtonFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
`;
export default function CustomPizzaOrderItem({ item }) {
  const { removeItemFromOrder } = useOrder();
  return (
    <StyledSignaturePizzaItem>
      <ImgContainer>
        <Img src="./custom pizza.png" />
      </ImgContainer>
      <Details>
        <Title>{item.title}</Title>
        <ToppingHeader>YOUR RECIPE</ToppingHeader>
        <FlexItem>
          <span>{item.dough.name},</span>
          <span>{item.crust.name},</span>
          <span>{item.sauce.name}</span>
        </FlexItem>
        <ToppingHeader>TOPPINGS</ToppingHeader>
        <ToppingsList>
          {item.topping.map((topping) => (
            <ToppingTitle key={topping.name}>{topping.name},</ToppingTitle>
          ))}
        </ToppingsList>
        <FlexItem>
          <Count item={item} />
          <SizeSelect item={item} size={item.size} />
        </FlexItem>
      </Details>
      <FlexItemVertical>
        <Price> $ {item.price[item.selectedSize]}</Price>
        <RemoveButton item={item} />
      </FlexItemVertical>
    </StyledSignaturePizzaItem>
  );
}