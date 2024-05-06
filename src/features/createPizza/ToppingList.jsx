import { useQuery } from "@tanstack/react-query";
import { getToppings } from "../../services/apiCreatePizza";
import ToppingItem from "./ToppingItem";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner";

const StyledContainer = styled.div`
  height: 650px;
  overflow-y: auto;
  padding-bottom: 100px;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledToppingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 1rem;
  margin-top: 2rem;
`;

const TypeList = styled.ul`
  width: 20%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1rem;
  border: 2px solid var(--color-yellow-700);
  border-radius: 10px;
  overflow: hidden;
`;
const Type = styled.li`
  cursor: pointer;
  flex-grow: 1;
  padding: 1rem;
  text-align: center;

  ${(props) =>
    props.selected &&
    css`
      background-color: var(--color-yellow-700);
      color: var(--color-grey-700);
    `}
`;

function ToppingList() {
  const { isLoading, data } = useQuery({
    queryKey: ["toppings"],
    queryFn: getToppings,
  });

  const [type, setType] = useState("veggie");
  const [toppings, setToppings] = useState([]);

  useEffect(
    function () {
      if (type === "veggie") {
        setToppings(data?.filter((topping) => topping.type === "veggie"));
      }
      if (type === "meat") {
        setToppings(data?.filter((topping) => topping.type === "meat"));
      }
    },
    [type, data]
  );

  if (isLoading) return <Spinner />;

  return (
    <StyledContainer>
      <TypeList>
        <Type selected={type === "veggie"} onClick={() => setType("veggie")}>
          Veggie
        </Type>
        <Type selected={type === "meat"} onClick={() => setType("meat")}>
          Meat
        </Type>
      </TypeList>
      <StyledToppingList>
        {toppings?.map((topping) => (
          <ToppingItem topping={topping} key={topping.id} />
        ))}
      </StyledToppingList>
    </StyledContainer>
  );
}

export default ToppingList;
