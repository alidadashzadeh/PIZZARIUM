/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getDrinks } from "../../services/apiDrinks";
import Spinner from "../../ui/Spinner";
import DrinkItem from "./DrinkItem";
import styled from "styled-components";

const StyledDrinks = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;
function DrinksContent() {
  const {
    isLoading,
    data: drinks,
    error,
  } = useQuery({ queryKey: ["drinks"], queryFn: getDrinks });

  if (isLoading) return <Spinner />;

  return (
    <StyledDrinks>
      {drinks.map((drink) => (
        <DrinkItem drink={drink} key={drink.name} />
      ))}
    </StyledDrinks>
  );
}

export default DrinksContent;
