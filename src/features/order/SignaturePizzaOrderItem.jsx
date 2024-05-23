/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";
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
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  aspect-ratio: 1;
`;

const Img = styled.img`
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
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
const ButtonFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
`;

function SignaturePizzaOrderItem({ item }) {
  const { removeItemFromOrder } = useOrder();
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
        <Img src={item.picture} />
      </ImgContainer>
      <Details>
        <Title>{item.title}</Title>
        <FlexItem>
          <span>110 Calories</span>
          <Devider />
          <span>Weight:600 gr</span>
          <Devider />
          <span>Prepared in 15 Min</span>
        </FlexItem>
        <ToppingHeader>TOPPINGS</ToppingHeader>
        <ToppingsList>
          {item.toppings.map((topping) => (
            <ToppingItem key={topping.color} color={topping.color}>
              <div>{topping.image}</div>
              <ToppingTitle>{topping.title}</ToppingTitle>
            </ToppingItem>
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

export default SignaturePizzaOrderItem;
