/* eslint-disable react/prop-types */
import styled from "styled-components";
import { motion } from "framer-motion";
import Count from "../../ui/Count";
import SizeSelect from "../../ui/SizeSelect";
import RemoveButton from "../user/RemoveButton";

const StyledSignaturePizzaItem = styled.div`
  display: grid;
  grid-template-columns: 250px 2fr 96px;
  gap: 2rem;
  border: 2px solid var(--color-secondary);
  border-radius: 500px;
  padding-right: 4rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    border-radius: 50px;
    padding: 1rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 100%;
  margin: 0 auto;
`;

const Img = styled.img`
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  @media screen and (max-width: 1200px) {
    align-items: center;
  }
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

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const FlexItemVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 1200px) {
    flex-direction: row;
  }
`;
const FlexItemDetails = styled.div`
  display: flex;
  gap: 16px;

  & span {
    font-size: 16px;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
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

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ToppingTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ToppingHeader = styled.span`
  font-size: 16px;
  color: var(--color-text-grey);
`;

export default function CustomPizzaOrderItem({ item }) {
  return (
    <StyledSignaturePizzaItem
      as={motion.div}
      layout
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      exit={{
        opacity: 0,
        y: 50,
      }}
    >
      <ImgContainer>
        <Img src="./custom pizza.png" />
      </ImgContainer>
      <Details>
        <Title>{item.title}</Title>
        <ToppingHeader>YOUR RECIPE</ToppingHeader>
        <FlexItemDetails>
          <span>{item.dough.name},</span>
          <span>{item.crust.name},</span>
          <span>{item.sauce.name}</span>
        </FlexItemDetails>
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
