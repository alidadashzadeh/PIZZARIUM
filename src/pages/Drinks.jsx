import DrinksList from "../features/drinks/DrinksList";
import styled from "styled-components";
import PageTransition from "../ui/PageTransition";

const StyledDrinks = styled.div`
  min-height: 100vh;
`;
const H2 = styled.h2`
  padding: 0 3rem;
`;
function Drinks() {
  return (
    <PageTransition>
      <StyledDrinks>
        <H2>Drinks</H2>
        <DrinksList />
      </StyledDrinks>
    </PageTransition>
  );
}

export default Drinks;
