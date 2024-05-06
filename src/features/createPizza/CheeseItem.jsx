/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useOrder } from "../../context/OrderContext";
import ExtraPriceSign from "../../ui/ExtraPriceSign";

const StyledCheeseItem = styled.div`
  /* border: 2px solid var(--color-yellow-300); */
  border-radius: 10px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  flex: 1;
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
const CheeseDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 2rem;
`;

function CheeseItem({ cheese }) {
  const { customPizza, selectCustomCheese } = useOrder();
  return (
    <StyledCheeseItem
      selected={customPizza.cheese.name === cheese.name}
      onClick={() =>
        selectCustomCheese({
          name: cheese.name,
          extraPrice: cheese.extraPrice,
        })
      }
    >
      <img src={cheese.picture} />
      <CheeseDetails>
        {cheese.name}{" "}
        {cheese.extraPrice ? (
          <ExtraPriceSign price={cheese.extraPrice} />
        ) : null}
      </CheeseDetails>
    </StyledCheeseItem>
  );
}

export default CheeseItem;
