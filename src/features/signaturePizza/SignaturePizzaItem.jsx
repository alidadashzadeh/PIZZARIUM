/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Button } from "../../ui/Button";
import { useOrder } from "../../context/OrderContext";
import toast from "react-hot-toast";

const Img = styled.img``;
const StyledSignaturePizzaItem = styled.div`
  position: relative;
  padding: 2rem;
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

function SignaturePizzaItem({ pizza }) {
  const { addToOrder } = useOrder();

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

  function handleQuickAdd() {
    addToOrder({
      title: pizza.name,
      quantity: 1,
      isSignaturePizza: true,
      isCustomPizza: false,
      selectedSize: "small",
      toppings,
      id: Date.now(),
      picture: pizza.picture,
      price: pizza.price,
    });

    toast.success(`${pizza.name} was added to the card successfully`);
  }
  return (
    <StyledSignaturePizzaItem>
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
      <Button onClick={() => navigate(`/signature-pizzas/${id}`)}>
        CUSTOMIZE
      </Button>
      <Button onClick={handleQuickAdd}>QUICK ADD</Button>
    </StyledSignaturePizzaItem>
  );
}

export default SignaturePizzaItem;
