import DrinksHeader from "../features/drinks/DrinksHeader";
import DrinksList from "../features/drinks/DrinksList";
import styled from "styled-components";

const StyledDrinks = styled.div`
  min-height: 100vh;
`;
function Drinks() {
  return (
    <StyledDrinks>
      <DrinksHeader />
      <DrinksList />
    </StyledDrinks>
  );
}

export default Drinks;
