import { useQuery } from "@tanstack/react-query";
import { getCheeses } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import CreatePizzaItem from "./CreatePizzaItem";
import { useOrder } from "../../context/OrderContext";

const StyledCheeseList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  align-self: flex-start;
`;

function CheeseList() {
  const { isLoading, data: cheeses } = useQuery({
    queryKey: ["cheese"],
    queryFn: getCheeses,
  });
  const { selectCustomCheese } = useOrder();

  if (isLoading) return <Spinner />;
  return (
    <div>
      <h3>Cheese</h3>
      <StyledCheeseList>
        {cheeses.map((cheese) => (
          <CreatePizzaItem
            label="cheese"
            item={cheese}
            handleClick={selectCustomCheese}
            key={cheese.id}
          />
        ))}
      </StyledCheeseList>
    </div>
  );
}

export default CheeseList;

// <CheeseItem cheese={cheese} key={cheese.id} />
