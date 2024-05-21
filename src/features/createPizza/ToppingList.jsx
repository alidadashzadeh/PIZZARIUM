import { useQuery } from "@tanstack/react-query";
import { getToppings } from "../../services/apiCreatePizza";
import ToppingItem from "./ToppingItem";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner";
import { CustomPizzaList } from "../../ui/CustomPizzaList";

const StyledContainer = styled.div`
  overflow-y: auto;
  padding-bottom: 100px;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledToppingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TypeList = styled.ul`
  display: flex;
  justify-content: center;
`;
const Type = styled.li`
  cursor: pointer;
  flex-grow: 1;
  padding: 1rem;
  text-align: center;
  position: relative;

  ${(props) =>
    props.selected &&
    css`
      color: var(--color-primary);

      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 6px;
        height: 6px;
        background-color: var(--color-primary);
        border-radius: 90px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.3s ease;
      }
      /* color: var(--color-grey-700); */
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
      <StyledToppingsHeader>
        <h3>Toppings</h3>
        <TypeList>
          <Type selected={type === "veggie"} onClick={() => setType("veggie")}>
            Veggie
          </Type>
          <Type selected={type === "meat"} onClick={() => setType("meat")}>
            Meat & Chicken
          </Type>
        </TypeList>
      </StyledToppingsHeader>
      <CustomPizzaList>
        {toppings?.map((topping) => (
          <ToppingItem topping={topping} key={topping.id} />
        ))}
      </CustomPizzaList>
    </StyledContainer>
  );
}

export default ToppingList;
