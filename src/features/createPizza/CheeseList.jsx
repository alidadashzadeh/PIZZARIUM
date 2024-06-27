import { useQuery } from "@tanstack/react-query";
import { getCheeses } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import CreatePizzaItem from "./CreatePizzaItem";
import { useOrder } from "../../context/OrderContext";
import { CustomPizzaList } from "../../ui/CustomPizzaList";
import styled from "styled-components";

const StyledContainer = styled.div`
  overflow-y: auto;
  padding-bottom: 100px;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-row: 2;
    grid-column: 1/-1;
  }
`;
function CheeseList() {
  const { isLoading, data: cheeses } = useQuery({
    queryKey: ["cheese"],
    queryFn: getCheeses,
  });
  const { selectCustomCheese } = useOrder();

  if (isLoading) return <Spinner />;
  return (
    <StyledContainer>
      <h3>Cheese</h3>
      <CustomPizzaList>
        {cheeses.map((cheese, i) => (
          <CreatePizzaItem
            label="cheese"
            item={cheese}
            handleClick={selectCustomCheese}
            key={cheese.id}
            index={i}
          />
        ))}
      </CustomPizzaList>
    </StyledContainer>
  );
}

export default CheeseList;

// <CheeseItem cheese={cheese} key={cheese.id} />
