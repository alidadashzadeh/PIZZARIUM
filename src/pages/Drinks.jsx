import DrinksList from "../features/drinks/DrinksList";
import styled from "styled-components";

const StyledDrinks = styled.div`
  min-height: 100vh;
`;
const H2 = styled.h2`
  padding: 0 3rem;
`;
function Drinks() {
  return (
    <StyledDrinks>
      <H2>Drinks</H2>
      <DrinksList />
    </StyledDrinks>
  );
}

export default Drinks;
