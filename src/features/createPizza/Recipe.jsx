/* eslint-disable react/prop-types */
import styled from "styled-components";
import ToppingSummaryItem from "./ToppingSummaryItem";

const StyledRecipe = styled.ul`
  padding: 1rem;
  & div {
    letter-spacing: 1px;
    line-height: 20px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  padding-top: 1rem;
`;

function Recipe({ customPizza }) {
  return (
    <StyledRecipe>
      <Title>Your recipe:</Title>
      <div>
        {customPizza.dough.name}, {customPizza.crust.name},
        {customPizza.sauce.name}, {customPizza.cheese.name},
        {customPizza.cook.name}
      </div>

      <Title>Toppings:</Title>
      <div>
        {customPizza.topping.map((topping) => (
          <ToppingSummaryItem item={topping} key={topping.name} />
        ))}
      </div>
    </StyledRecipe>
  );
}

export default Recipe;
