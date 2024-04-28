/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import styled from "styled-components";
import { keyframes } from "styled-components";

const imageRotateAnimation = keyframes`
	0% {transform:rotate(0deg)}
	50% {transform: rotate(90deg)}
	100% {transform: rotate(0deg)}
`;
const Img = styled.img`
  /* transition: all 0.3s; */

  &:hover {
    animation-name: ${imageRotateAnimation};
    animation-duration: 1s;
  }
`;
const StyledSignaturePizzaItem = styled(motion.div)`
  position: relative;
  padding: 2rem;
  cursor: pointer;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.25);
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #1c1c1c;
`;
const Description = styled.div`
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--color-secondary);
`;

const Price = styled.div`
  color: var(--color-secondary);
  font-weight: 600;
`;

const ToppingsList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const ToppingItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 1rem;
  border-radius: 50px;
  gap: 1rem;
  background-color: ${(props) => props.color};

  box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.25);
`;

const ToppingTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

function SignaturePizzaItem({ pizza, index }) {
  const navigate = useNavigate();
  const {
    name,
    details,
    Veggie,
    picture,
    price,
    id,
    toppings,
    weight,
    type,
    calorie,
  } = pizza;

  return (
    <StyledSignaturePizzaItem
      onClick={() => navigate(`/signature-pizzas/${id}`)}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <ImgContainer>
        <Img src={picture} />
      </ImgContainer>
      <Price> $ {price.small}</Price>
      <Title>{name}</Title>
      <Description>{details}</Description>
      <ToppingsList>
        {toppings.map((topping) => (
          <ToppingItem key={topping.color} color={topping.color}>
            <div>{topping.image}</div>
            <ToppingTitle>{topping.title}</ToppingTitle>
          </ToppingItem>
        ))}
      </ToppingsList>
    </StyledSignaturePizzaItem>
  );
}

export default SignaturePizzaItem;
