/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useOrder } from "../../context/OrderContext";
import ExtraPriceSign from "../../ui/ExtraPriceSign";

const StyledToppingItem = styled.div`
  /* border: 2px solid var(--color-yellow-300); */
  border-radius: 10px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  flex-basis: 148px;
  flex-grow: 1;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: var(--color-yellow-700);

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
const ToppingDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 1rem;
`;

const Img = styled.img`
  /* border-radius: 500px; */
`;

function ToppingItem({ topping }) {
  const { customPizza, selectCustomTopping } = useOrder();
  return (
    <StyledToppingItem
      selected={customPizza.topping.some((ss) => ss.name === topping.name)}
      onClick={() =>
        selectCustomTopping({
          name: topping.name,
          extraPrice: topping.extraPrice,
          onPizzaImg: topping.onPizzaImg,
        })
      }
    >
      <Img src={topping.picture} />
      <ToppingDetails>
        {topping.name}
        {topping.extraPrice ? (
          <ExtraPriceSign price={topping.extraPrice} />
        ) : null}
      </ToppingDetails>
    </StyledToppingItem>
  );
}

export default ToppingItem;
