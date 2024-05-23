import { useQuery } from "@tanstack/react-query";
import { getToppings } from "../../services/apiCreatePizza";
import ToppingItem from "./ToppingItem";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner";
import { CustomPizzaList } from "../../ui/CustomPizzaList";
import { motion } from "framer-motion";

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
    `}
`;

const Dot = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 6px;
  aspect-ratio: 1;
  background-color: var(--color-primary);
  border-radius: 5px;
`;

const options = [
  { label: "Veggie", value: "veggie" },
  { label: "Meat & Chicken", value: "meat" },
];

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
          {options.map((el) => (
            <Type
              selected={type === el.value}
              onClick={() => setType(el.value)}
              key={el.value}
            >
              <span>{el.label}</span>
              {type === el.value && (
                <Dot as={motion.div} layoutId="toppingDot" />
              )}
            </Type>
          ))}
        </TypeList>
      </StyledToppingsHeader>
      <CustomPizzaList>
        {toppings?.map((topping, i) => (
          <ToppingItem index={i} topping={topping} key={topping.id} />
        ))}
      </CustomPizzaList>
    </StyledContainer>
  );
}

export default ToppingList;
