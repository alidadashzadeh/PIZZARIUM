/* eslint-disable react/prop-types */
import styled from "styled-components";
import Count from "../../ui/Count";
import { motion } from "framer-motion";
import RemoveButton from "../user/RemoveButton";

const StyledDrinkItem = styled.div`
  display: grid;
  grid-template-columns: 250px 2fr 96px;
  align-items: center;
  gap: 2rem;
  border: 2px solid var(--color-secondary);
  border-radius: 500px;
  padding-right: 4rem;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 150px;
`;

const Img = styled.img`
  width: 120px;
  aspect-ratio: 1;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const FlexItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

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
const Devider = styled.div`
  width: 2px;
  height: 18px;
  background-color: var(--color-grey-200);
`;
const Price = styled.div`
  color: var(--color-text-main);
  font-size: 20px;
  font-weight: 700;
`;

function DrinkOrderItem({ item }) {
  return (
    <StyledDrinkItem
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
      <FlexItem>
        <Title>{item.title}</Title>
        <FlexItem>
          <span>110 Calories</span>
          <Devider />
          <span>size: 300 ml</span>
        </FlexItem>
        <Count item={item} />
      </FlexItem>
      <FlexItemVertical>
        <Price> $ {item.price}</Price>
        <RemoveButton item={item} />
      </FlexItemVertical>
    </StyledDrinkItem>
  );
}

export default DrinkOrderItem;
